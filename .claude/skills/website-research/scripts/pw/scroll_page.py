#!/usr/bin/env python3
"""scroll-page：分段捲動並在固定位置截圖（Standard 量測，也是 Daily 的 fallback 擷取）。

用法：
  python scroll_page.py <url> <網站資料夾> [--viewport 1440] [--max-shots 10] [--budget 180]
                        [--capture-only --prefix fb-d]

- 捲動方式依序嘗試：滑鼠 wheel →（手機）觸控手勢 → 鍵盤 PageDown → window.scrollTo。
  先用 wheel／pointer，是因為 smooth scroll、自訂捲動容器、scroll hijacking 的網站常常不理 scrollTo。
- 捲動有沒有成功，看 window.scrollY、捲動容器的 scrollTop、smooth-scroll 包裝層的 transform；
  三者都沒變時才用前後截圖差異判斷（記成 moved_by: visual）。
- 所有方式都捲不動：記錄「scroll: unavailable（locked）」，不再重試。
- 每張截圖都檢查空白比例；結果寫成 source/pw/segments-<寬度>.json（--capture-only 時是 source/fallback-<d|m>.json），
  並把 Capture Quality 記進 capture-status.json。

--capture-only 給 Daily 的 fallback 用：只截圖、不存 DOM／CSS，截圖放 screenshots/fb/<prefix>-sNN.png。
"""
import argparse
import math
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402
from quality_check import blank_runs, analyze_segments, grade_segments, painted_ratio  # noqa: E402
import wr_status  # noqa: E402

CONTENT_JS = r"""
() => {  // 目前畫面內有多少「應該看得到」的內容：用來分辨「設計上的留白」和「沒渲染出來」
  let visible = 0, transparent = 0; const boxes = [];
  const opacityOf = (el) => { let op = 1; for (let n = el; n && n.nodeType === 1; n = n.parentElement) op *= parseFloat(getComputedStyle(n).opacity); return op; };
  const shown = (el) => { const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden'; };
  const add = (r, el) => {
    if (r.width < 2 || r.height < 2 || r.bottom <= 0 || r.top >= innerHeight || r.right <= 0 || r.left >= innerWidth) return;
    const inside = Math.min(innerHeight, r.bottom) - Math.max(0, r.top);
    if (inside < Math.min(12, r.height * 0.5)) return;  // 只露出邊緣的不算
    if (!shown(el)) return;
    if (opacityOf(el) < 0.05) { transparent++; return; }
    visible++;
    if (boxes.length < 40) boxes.push([Math.max(0, Math.round(r.left)), Math.max(0, Math.round(r.top)), Math.min(innerWidth, Math.round(r.right)), Math.min(innerHeight, Math.round(r.bottom))]);
  };
  // 文字：用文字本身的範圍（不是整個容器），避免「容器還在畫面內、字已經捲出去」被誤判
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let n, seen = 0;
  while ((n = tw.nextNode()) && seen < 3000) {
    if (n.textContent.trim().length < 2) continue;
    seen++;
    range.selectNodeContents(n);
    add(range.getBoundingClientRect(), n.parentElement);
  }
  for (const el of document.querySelectorAll('img,svg,canvas,video,picture')) {
    const r = el.getBoundingClientRect();
    if (r.width * r.height > 2500) add(r, el);
  }
  return {visible, transparent, boxes};
}
"""

SEEN_JS = r"""
(progress) => {
  const W = window.__wr; window.__wrSeen = window.__wrSeen || {}; let n = 0;
  for (const el of document.querySelectorAll('a,button,[role=button],[role=link],input[type=submit],summary,h1,h2,h3')) {
    if (!W.vis(el) || !W.inView(el)) continue;
    if (!el.dataset.wrId) el.dataset.wrId = 'wr' + Math.random().toString(36).slice(2, 9);
    if (window.__wrSeen[el.dataset.wrId]) continue;
    const r = el.getBoundingClientRect();
    window.__wrSeen[el.dataset.wrId] = {tag: el.tagName.toLowerCase(), text: W.text(el), href: el.getAttribute('href'),
      aria: el.getAttribute('aria-label'), expanded: el.getAttribute('aria-expanded'),
      y: Math.round(r.top + progress), vy: Math.round(r.top), x: Math.round(r.x), w: Math.round(r.width), h: Math.round(r.height),
      css: W.cs(el), selector: W.selector(el), persistent: W.persistent(el), section: W.section(el),
      buttonLike: W.buttonLike(el, getComputedStyle(el)), seenAt: progress};
    n++;
  }
  return n;
}
"""


def progress_of(st):
    vals = [st.get('winY', 0), st.get('docTop', 0)]
    vals += [c.get('top', 0) for c in st.get('containers', [])]
    vals += [-t.get('ty', 0) for t in st.get('transforms', [])]
    return max(vals) if vals else 0


def est_height(st, vh):
    h = st.get('docHeight') or vh
    for c in st.get('containers', []):
        h = max(h, c.get('height', 0))
    return h


FPS_JS = r"""
() => new Promise(res => { let n = 0; const t0 = performance.now();
  const f = () => { n++; if (performance.now() - t0 < 1000) requestAnimationFrame(f); else res(n); };
  requestAnimationFrame(f); setTimeout(() => res(n), 2500); })
"""
SLOW_INPUT_SECONDS = 8   # 一次原生 wheel 超過這麼久，代表主執行緒太忙，改用不會卡住的方式
LOW_FPS = 15             # 幀率低於這個值時，原生輸入事件可能卡住數十秒（瀏覽器要等畫面回應）


def do_scroll(page, method, delta, vh, center, target):
    if method == 'synthetic-wheel':
        # 由頁面內送出 WheelEvent：smooth scroll／scroll hijacking 程式庫會接手；不會等瀏覽器回應而卡住
        page.evaluate('''([delta, step]) => {
            const t = document.elementFromPoint(innerWidth / 2, innerHeight / 2) || document.body;
            let left = delta;
            while (Math.abs(left) > 1) { const d = Math.max(-step, Math.min(step, left));
              t.dispatchEvent(new WheelEvent('wheel', {deltaY: d, deltaMode: 0, bubbles: true, cancelable: true, clientX: innerWidth / 2, clientY: innerHeight / 2}));
              left -= d; } }''', [delta, vh * 0.9])
        return
    if method == 'wheel':
        page.mouse.move(*center)
        remaining = delta
        step_max = vh * 0.9
        while abs(remaining) > 1:
            step = max(-step_max, min(step_max, remaining))
            page.mouse.wheel(0, step)
            page.wait_for_timeout(120)
            remaining -= step
    elif method == 'touch':
        cdp = page.context.new_cdp_session(page)
        try:
            cdp.send('Input.synthesizeScrollGesture', {'x': center[0], 'y': center[1], 'yDistance': -delta,
                                                       'gestureSourceType': 'touch', 'speed': 4000})
        finally:
            cdp.detach()
    elif method == 'keyboard':
        page.evaluate('() => { const a = document.activeElement; if (a && a !== document.body) a.blur(); }')
        key = 'PageDown' if delta > 0 else 'PageUp'
        for _ in range(max(1, math.ceil(abs(delta) / (vh * 0.85)))):
            page.keyboard.press(key)
            page.wait_for_timeout(80)
    elif method == 'scrollTo':
        page.evaluate('''(y) => { window.scrollTo(0, y);
            for (const el of document.querySelectorAll('body *')) {
              if (el.scrollHeight > el.clientHeight + 50 && el.clientHeight > innerHeight * 0.5) {
                const oy = getComputedStyle(el).overflowY;
                if (oy === 'auto' || oy === 'scroll' || oy === 'overlay') el.scrollTop = y; } } }''', target)


def back_to_top(page, method, progress, vh, center):
    try:
        if method in ('wheel', 'touch', 'keyboard', 'synthetic-wheel') and progress > 0:
            do_scroll(page, method, -progress - vh, vh, center, 0)
        if method != 'synthetic-wheel':
            page.keyboard.press('Home')
        page.evaluate('() => window.scrollTo(0, 0)')
        page.wait_for_timeout(C.BUDGET['scroll_settle_ms'])
    except Exception:
        pass


def segment_blank_ratio(path, vh):
    try:
        w, h, runs = blank_runs(path, min_run=int(0.25 * vh))
        return round(sum(b - a for a, b in runs) / h, 3)
    except Exception:
        return None


def run(page, ctx, max_shots=10, prefix=None, capture_only=False):
    w = ctx['viewport']
    vh = C.VIEWPORTS[w]['height']
    vw = C.VIEWPORTS[w]['width']
    mobile = C.VIEWPORTS[w]['mobile']
    site = ctx['site_dir']
    deadline = ctx['deadline']
    if capture_only:
        out_dir = os.path.join(site, 'screenshots', 'fb')
        prefix = prefix or ('fb-m' if mobile else 'fb-d')
        json_path = os.path.join(site, 'source', f'fallback-{prefix.split("-")[-1]}.json')
        cap_key = 'fallback-mobile' if mobile else ('fallback-tablet' if w == 768 else 'fallback-desktop')
    else:
        out_dir = os.path.join(site, 'screenshots', 'pw')
        prefix = prefix or f'pw{w}'
        json_path = os.path.join(site, 'source', 'pw', f'segments-{w}.json')
        cap_key = {1440: 'pw-desktop', 768: 'pw-tablet', 390: 'pw-mobile'}[w]
    os.makedirs(out_dir, exist_ok=True)
    os.makedirs(os.path.dirname(json_path), exist_ok=True)
    center = (vw // 2, vh // 2)

    C.inject(page)
    try:
        fps = page.evaluate(FPS_JS)
    except Exception:
        fps = None
    low_fps = fps is not None and fps < LOW_FPS
    st0 = C.evaluate(page, '() => window.__wr.scrollState()', default={})
    total = est_height(st0, vh)
    planned = 1 if total <= vh * 1.1 else min(max_shots, math.ceil(total / vh))
    targets = [0] if planned == 1 else [round(i * (total - vh) / (planned - 1)) for i in range(planned)]

    segs = []
    shot_fail = 0
    tried = []
    method = None
    moved_by = None
    status = 'ok'
    detail = ''
    shot_states = []

    def take(i, pos):
        nonlocal shot_fail
        fp = os.path.join(out_dir, f'{prefix}-s{i:02d}.png')
        s, err = C.shot(page, fp)
        shot_states.append(s)
        if s == 'unavailable':
            shot_fail += 1
            return None, err
        shot_fail = 0
        return fp, None

    def content():
        try:
            return page.evaluate(CONTENT_JS)
        except Exception:
            return None

    def with_paint(c, fp):
        if isinstance(c, dict) and fp:
            c['painted'] = painted_ratio(fp, c.pop('boxes', []))
        return c

    slow_input = False

    def flush(st, det):
        """每一段都先寫檔：即使之後被強制中止，已取得的截圖仍然算數。"""
        C.write_json(json_path, {'viewport': w, 'vh': vh, 'planned': planned, 'est_height': total, 'fps': fps,
                                 'scroll': {'status': st, 'method': method, 'moved_by': moved_by, 'tried': tried, 'detail': det},
                                 'initial_state': st0, 'segments': segs})
        if not capture_only:
            C.record(site, w, 'scroll', st, det, method=method)

    f0, err0 = take(0, 0)
    c0 = content()
    try:
        page.evaluate(SEEN_JS, 0)
    except Exception:
        pass
    segs.append({'index': 0, 'target_y': 0, 'pos': progress_of(st0), 'moved': True,
                 'file': os.path.relpath(f0, os.path.dirname(json_path)) if f0 else None,
                 'blank_ratio': segment_blank_ratio(f0, vh) if f0 else None, 'dom_content': with_paint(c0, f0), 'error': err0})
    last_pos = progress_of(st0)
    last_file = f0
    stuck = 0
    for i, target in enumerate(targets[1:], 1):
        if not deadline.ok(25):
            status, detail = 'partial', f'時間預算用完，停在第 {i}/{planned} 段'
            break
        if shot_fail >= C.MAX_CONSEC_SHOT_FAIL:
            status, detail = 'partial', f'連續 {shot_fail} 張截圖失敗，停止'
            break
        delta = target - last_pos
        if method:
            candidates = [method]
        elif low_fps:  # 主執行緒很忙：原生輸入可能卡住，先用頁面內的事件
            candidates = ['synthetic-wheel', 'scrollTo']  # 鍵盤也是原生輸入，同樣會卡住，不用
        else:
            candidates = ['wheel', 'touch', 'keyboard', 'synthetic-wheel', 'scrollTo'] if mobile \
                else ['wheel', 'keyboard', 'synthetic-wheel', 'scrollTo']
        moved = False
        fp = None
        err = None
        cont = None
        how = None
        pos = last_pos
        for m in candidates:
            t_in = time.monotonic()
            try:
                do_scroll(page, m, delta, vh, center, target)
            except Exception as e:
                tried.append(f'{m}: {C.first_line(e, 80)}')
                continue
            if m in ('wheel', 'touch', 'keyboard') and time.monotonic() - t_in > SLOW_INPUT_SECONDS:
                tried.append(f'{m} 一次花了 {time.monotonic() - t_in:.0f} 秒（主執行緒太忙），之後改用合成事件')
                slow_input = True
            page.wait_for_timeout(C.BUDGET['scroll_settle_ms'])
            st = C.evaluate(page, '() => window.__wr.scrollState()', default={})
            pos = progress_of(st)
            if pos - last_pos <= 20 and method is None:  # 慢的 smooth scroll（低幀率）多等一下再判斷
                page.wait_for_timeout(1500)
                st = C.evaluate(page, '() => window.__wr.scrollState()', default={})
                pos = progress_of(st)
            if pos - last_pos > 20:  # 位置讀得到、確實移動：這就是要用的方式
                moved, how = True, 'position'
                if method is None:
                    method, moved_by = m, how
                    if m != candidates[0]:
                        tried.append(f'{candidates[0]} 沒有反應，改用 {m}')
                break
            if method is None:
                tried.append(f'{m}: 位置沒有改變')
            if method is not None:
                break  # 已經選定的方式這一段沒動：可能到頁尾，下面用截圖判斷
        if not moved:
            # 所有方式的位置都讀不到變化：拍一張，用畫面差異判斷（scroll hijacking 時位置可能讀不到）。
            # 會動的背景（WebGL、影片）也會讓畫面不同，所以只有在位置完全讀不到時才接受，並記為 visual。
            fp, err = take(i, pos)
            diff = C.image_diff(last_file, fp) if (fp and last_file) else None
            if diff is not None and diff > 8:
                moved, how = True, 'visual'
                if method is None:
                    method, moved_by = candidates[-1], 'visual'
                    tried.append(f'位置都沒有改變，但畫面不同（差異 {diff:.0f}）；可能是 scroll hijacking 或動態背景')
                else:
                    moved_by = 'visual'
        else:
            fp, err = take(i, pos)
        cont = content()
        if not moved and method is None:
            status, detail = 'unavailable', '所有捲動方式都沒有移動（scroll locked），不再重試'
            if fp and os.path.exists(fp):
                os.remove(fp)  # 和首屏一樣的畫面不留
            break
        segs.append({'index': i, 'target_y': target, 'pos': pos, 'moved': moved, 'moved_by': how,
                     'file': os.path.relpath(fp, os.path.dirname(json_path)) if fp else None,
                     'blank_ratio': segment_blank_ratio(fp, vh) if fp else None, 'dom_content': with_paint(cont, fp), 'error': err})
        try:
            page.evaluate(SEEN_JS, pos)
        except Exception:
            pass
        flush('partial', f'進行中：已取得 {len(segs)}/{planned} 段')
        if slow_input and method in ('wheel', 'touch', 'keyboard'):
            method = 'synthetic-wheel'
        if moved:
            last_pos, last_file, stuck = pos, (fp or last_file), 0
        else:
            stuck += 1
            if stuck >= 2:
                status, detail = 'partial', '連續兩段沒有移動（可能已到頁尾或捲動被接管），提早結束'
                break

    if status == 'ok' and method == 'scrollTo':
        status, detail = 'fallback', 'wheel／鍵盤沒有反應，只有 scrollTo 能捲動'
    if status == 'ok' and method == 'synthetic-wheel':
        status, detail = 'fallback', (f'幀率低（fps≈{fps}）或原生輸入太慢，改用頁面內合成的 wheel 事件捲動' if (low_fps or slow_input)
                                      else '原生 wheel／鍵盤沒有反應，合成 wheel 事件可以捲動（可能是 scroll hijacking）')
    if status == 'ok' and moved_by == 'visual':
        status, detail = 'partial', '捲動位置讀不到（可能是 scroll hijacking），只能用畫面差異判斷有沒有移動'
    back_to_top(page, 'synthetic-wheel' if (slow_input or low_fps) and method != 'scrollTo' else method, last_pos, vh, center)

    data = {'viewport': w, 'vh': vh, 'planned': planned, 'est_height': total, 'fps': fps,
            'scroll': {'status': status, 'method': method, 'moved_by': moved_by, 'tried': tried, 'detail': detail},
            'initial_state': st0, 'segments': segs}
    C.write_json(json_path, data)
    m = analyze_segments(json_path)
    g, why = grade_segments(m)
    wr_status.set_capture(site, cap_key, {'kind': 'segments', 'auto_grade': g, 'grade': g, 'reasons': why,
                                          'metrics': {k: v for k, v in m.items() if k != 'gaps'}, 'gaps': m['gaps'],
                                          'method': method})
    if not capture_only:
        C.record(site, w, 'scroll', status, detail or f'方式：{method}', method=method, moved_by=moved_by)
    return {'status': status, 'detail': detail, 'grade': g, 'segments': len(segs), 'planned': planned,
            'json': json_path, 'shot_states': shot_states, 'method': method}


def main():
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    p.add_argument('--max-shots', type=int, default=10)
    p.add_argument('--capture-only', action='store_true', help='Daily fallback：只截圖，放 screenshots/fb/')
    p.add_argument('--prefix')
    o = p.parse_args()
    budget = o.budget or (180 if o.capture_only else C.BUDGET['viewport'][o.viewport])
    deadline = C.Deadline(budget)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            print(f'無法載入：{nav.get("error")}')
            if not o.capture_only:
                C.record(o.site_dir, o.viewport, 'scroll', 'unavailable', f'載入失敗：{nav.get("error")}')
            else:
                wr_status.set_capture(o.site_dir, 'fallback-mobile' if o.viewport == 390 else 'fallback-desktop',
                                      {'kind': 'segments', 'auto_grade': 'D', 'grade': 'D',
                                       'reasons': [f'載入失敗：{nav.get("error")}'], 'metrics': {}, 'gaps': []})
            sys.exit(1)
        C.settle(page)
        r = run(page, {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline},
                max_shots=o.max_shots, prefix=o.prefix, capture_only=o.capture_only)
    print(f'捲動：{r["status"]}（{r["method"]}）{r["detail"]}；分段 {r["segments"]}/{r["planned"]}；Capture Quality {r["grade"]}')
    print(f'結果：{r["json"]}')


if __name__ == '__main__':
    main()
