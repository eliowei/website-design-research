#!/usr/bin/env python3
"""Capture Quality 檢查：判斷一次擷取能不能支撐研究，並記錄缺口。

用法：
  python quality_check.py image <截圖> [--viewport-h 1080] [--expected-height 9000]
                                [--content-chars 5000] [--record <網站資料夾> --as firecrawl-desktop]
                                [--override B --reason "理由"] [--json]
      檢查一張全頁截圖：空白比例、最長空白、是否只拿到首屏、高度是否和頁面不符。

  python quality_check.py image <截圖> ... [--page-url <最終網址>] [--page-title <標題>] [--page-text-file <markdown>]
      加上擷取工具回報的網址／標題／內文，偵測 Research Environment Failure（browser unsupported、機器人驗證、被擋）。

  python quality_check.py final <網站資料夾> [--override desktop=B --reason "依據 firecrawl-desktop＋fallback-desktop"]
      以證據集合判定 Final Capture Quality：Initial（primary）＋所有 Fallback 一起看，不是取最後一次。

  python quality_check.py segments <segments.json> [--record <網站資料夾> --as fallback-desktop]
                                   [--override B --reason "理由"] [--json]
      檢查分段擷取（scroll_page.py 產生的 segments.json）的覆蓋率。

等級（詳細定義見 references/capture-reliability.md §2）：
  A — Complete   主要內容完整取得，可正常研究
  B — Partial    部分區域缺失，但仍可研究
  C — Degraded   大量空白、動畫未完成或內容缺失，只能有限研究
  D — Failed     不足以支撐可靠研究

工具只偵測「空白」與「高度不符」，偵測不到「畫面有東西但內容不對」（例如只拍到模糊背景、
動畫拍到一半）。研究者看過切圖後可以用 --override 調整等級，但一定要寫 --reason，
理由會和自動等級一起留在 capture-status.json。等級低於 A 時，先做 fallback 分段擷取，
不要直接假設網站沒有那些內容。

需要 Pillow：pip install pillow
"""
import argparse
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    from PIL import Image
    Image.MAX_IMAGE_PIXELS = None
except ImportError:
    sys.exit('需要 Pillow：pip install pillow')

GRADE_ORDER = 'ABCD'

# 自動判定的門檻（改這裡就要同步改 references/capture-reliability.md §2 的表）
MIN_RUN = 300            # 空白段至少多高（原圖像素）才算
FLAT_TOL = 6             # 一列灰階的最大－最小 ≤ 這個值視為單色
D_BLANK_RATIO = 0.60
C_BLANK_RATIO = 0.25
B_BLANK_RATIO = 0.08
C_TAIL_VIEWPORTS = 2.0   # 底部連續空白 ≥ 2 個視窗高
B_LONGEST_VIEWPORTS = 1.5
C_HEIGHT_MISMATCH = 0.5
B_HEIGHT_MISMATCH = 0.3
SEGMENT_BLANK_MAX = 0.5  # 一張分段截圖的空白比例低於這個才算「有內容」
SEGMENT_FLAT = 0.9       # 一張分段截圖空白比例 ≥ 這個值視為「整屏是平的」
SEG_A, SEG_B, SEG_C = 0.9, 0.7, 0.4
CAPPED_HEIGHTS = (16384, 32767, 65000)  # 常見截圖高度上限


def guess_viewport_h(width):
    if width >= 1700:
        return 1080      # Firecrawl 桌機 1920×1080
    if width >= 1200:
        return 900       # Playwright 1440×900
    if width >= 700:
        return 1024      # 平板 768×1024
    if width >= 380:
        return 844       # Playwright 390×844
    return 800           # Firecrawl 手機 360×800


def blank_runs(path, min_run=MIN_RUN, tol=FLAT_TOL):
    """回傳 (寬, 高, [(y0, y1), ...])。先縮小再逐列判斷，長截圖也只要幾秒。"""
    im = Image.open(path).convert('L')
    w, h = im.size
    sw = 128
    scale = sw / w
    sh = max(1, int(round(h * scale)))
    small = im.resize((sw, sh), Image.BILINEAR)
    data = small.tobytes()
    runs = []
    start = None
    for y in range(sh):
        row = data[y * sw:(y + 1) * sw]
        flat = (max(row) - min(row)) <= tol
        if flat and start is None:
            start = y
        elif not flat and start is not None:
            runs.append((start, y))
            start = None
    if start is not None:
        runs.append((start, sh))
    out = []
    for a, b in runs:
        y0, y1 = int(a / scale), min(h, int(b / scale))
        if y1 - y0 >= min_run:
            out.append((y0, y1))
    return w, h, out


def analyze_image(path, viewport_h=None, expected_height=None, content_chars=None):
    m = {'file': path, 'failed': False}
    if not os.path.exists(path):
        m.update(failed=True, reason='檔案不存在')
        return m
    try:
        w, h, runs = blank_runs(path)
    except Exception as e:  # 壞檔、不是圖片
        m.update(failed=True, reason=f'無法讀取：{e}')
        return m
    vh = viewport_h or guess_viewport_h(w)
    blank = sum(b - a for a, b in runs)
    tail = (runs[-1][1] - runs[-1][0]) if runs and runs[-1][1] >= h - 2 else 0
    content_extent = h - tail
    longest = max((b - a for a, b in runs), default=0)
    m.update(width=w, height=h, viewport_h=vh, blank_px=blank,
             blank_ratio=round(blank / h, 3) if h else 1.0,
             longest_run=longest, tail_blank=tail, gaps=[list(r) for r in runs])
    if h < 100 or blank >= h * 0.95:
        m.update(failed=True, reason='截圖幾乎全空白或高度異常')
    # 只拿到首屏：內容只在第一個視窗附近，下面一路空白到底
    m['first_screen_only'] = bool(h >= 2 * vh and content_extent <= 1.3 * vh)
    # 截圖只有一屏高：可能是單屏網站，也可能只拍到首屏
    single = h <= 1.2 * vh
    expect_long = (expected_height and expected_height > 1.5 * vh) or (content_chars and content_chars > 2500)
    if single and expect_long:
        m['first_screen_only'] = True
    m['single_screen_unknown'] = bool(single and not expect_long)
    mismatch = 0.0
    if expected_height:
        mismatch = abs(h - expected_height) / max(expected_height, 1)
    m['height_mismatch'] = round(mismatch, 3)
    m['height_capped'] = h in CAPPED_HEIGHTS
    return m


def grade_image(m):
    """回傳 (等級, [理由])。"""
    why = []
    if m.get('failed'):
        return 'D', [m.get('reason', '擷取失敗')]
    vh = m['viewport_h']
    r = m['blank_ratio']
    if r >= D_BLANK_RATIO:
        return 'D', [f'空白比例 {r:.0%} ≥ {D_BLANK_RATIO:.0%}']
    grade = 'A'

    def lower(g, reason):
        nonlocal grade
        if GRADE_ORDER.index(g) > GRADE_ORDER.index(grade):
            grade = g
        why.append(reason)

    if m['first_screen_only']:
        lower('C', '只取得首屏，下方內容沒有渲染')
    if r >= C_BLANK_RATIO:
        lower('C', f'空白比例 {r:.0%} ≥ {C_BLANK_RATIO:.0%}')
    if m['tail_blank'] >= C_TAIL_VIEWPORTS * vh:
        lower('C', f'底部連續空白 {m["tail_blank"]}px（≥ {C_TAIL_VIEWPORTS:g} 個視窗高）')
    if m['height_mismatch'] >= C_HEIGHT_MISMATCH:
        lower('C', f'截圖高度和頁面高度差 {m["height_mismatch"]:.0%}')
    if B_BLANK_RATIO <= r < C_BLANK_RATIO:
        lower('B', f'空白比例 {r:.0%} ≥ {B_BLANK_RATIO:.0%}')
    if m['longest_run'] >= B_LONGEST_VIEWPORTS * vh:
        lower('B', f'最長空白 {m["longest_run"]}px（≥ {B_LONGEST_VIEWPORTS:g} 個視窗高）')
    if B_HEIGHT_MISMATCH <= m['height_mismatch'] < C_HEIGHT_MISMATCH:
        lower('B', f'截圖高度和頁面高度差 {m["height_mismatch"]:.0%}')
    if m['single_screen_unknown']:
        lower('B', '截圖只有一屏高，需確認網站是否本來就是單屏')
    if m['height_capped']:
        lower('B', f'截圖高度 {m["height"]}px 是常見的截圖上限，頁面可能更長')
    return grade, why


def painted_ratio(path, boxes, tol=12):
    """DOM 說「這裡有內容」的區塊，截圖上有多少比例真的有畫出東西（不是單色）。"""
    if not boxes:
        return None
    try:
        im = Image.open(path).convert('L')
    except Exception:
        return None
    hit = 0
    n = 0
    for x0, y0, x1, y1 in boxes:
        if x1 - x0 < 2 or y1 - y0 < 2:
            continue
        n += 1
        lo, hi = im.crop((x0, y0, x1, y1)).getextrema()
        if hi - lo > tol:
            hit += 1
    return round(hit / n, 3) if n else None


def segment_verdict(g, br, moved):
    """一張分段截圖算不算取得內容。

    有 DOM 計數時（scroll_page.py 會記錄）用它分辨：
      content          畫面上有內容，而且 DOM 說有內容的位置確實畫出來了
      empty-by-design  畫面是平的，DOM 也說這一屏沒有內容（設計留白）
      unrendered       DOM 說有內容，畫面上那些位置卻是平的，或內容仍是透明的（進場動畫沒跑完）
      not-moved        捲動沒有移動，這張和上一張是同一個位置
    沒有 DOM 資料時退回只看空白比例。
    """
    if not g.get('file') or br is None:
        return 'missing'
    if not moved:
        return 'not-moved'
    dc = g.get('dom_content')
    if isinstance(dc, dict):
        vis, tr = dc.get('visible', 0), dc.get('transparent', 0)
        painted = dc.get('painted')
        if vis + tr == 0:
            return 'empty-by-design' if br >= SEGMENT_FLAT else 'content'
        if vis == 0 and tr > 0 and br >= SEGMENT_BLANK_MAX:
            return 'unrendered'
        if painted is not None:
            return 'content' if painted >= 0.5 else 'unrendered'
        return 'content' if br < SEGMENT_FLAT else 'unrendered'
    if br >= SEGMENT_FLAT:
        return 'unrendered'
    return 'content' if br < SEGMENT_BLANK_MAX else 'partly-rendered'


def analyze_segments(seg_path):
    with open(seg_path, encoding='utf-8') as f:
        s = json.load(f)
    segs = s.get('segments', [])
    planned = max(s.get('planned', len(segs)), 1)
    base = os.path.dirname(seg_path)
    usable = []
    credit = 0.0
    for i, g in enumerate(segs):
        br = g.get('blank_ratio')
        if br is None and g.get('file'):
            fp = g['file'] if os.path.isabs(g['file']) else os.path.join(base, g['file'])
            try:
                w, h, runs = blank_runs(fp, min_run=int(0.25 * (s.get('vh') or 800)))
                br = round(sum(b - a for a, b in runs) / h, 3)
            except Exception:
                br = 1.0
            g['blank_ratio'] = br
        moved = g.get('moved', i == 0)
        g['verdict'] = v = segment_verdict(g, br, moved or i == 0)
        c = {'content': 1.0, 'empty-by-design': 1.0, 'partly-rendered': 0.5}.get(v, 0.0)
        credit += c
        if c >= 1.0:
            usable.append(g)
    m = {'file': seg_path, 'planned': planned, 'captured': len(segs), 'usable': len(usable),
         'coverage': round(credit / planned, 3),
         'verdicts': [g.get('verdict') for g in segs],
         'scroll_status': s.get('scroll', {}).get('status'), 'scroll_method': s.get('scroll', {}).get('method'),
         'gaps': [g.get('target_y') for g in segs if g.get('verdict') in ('unrendered', 'missing', 'not-moved', 'partly-rendered')]}
    return m


def grade_segments(m):
    c = m['coverage']
    why = [f'可用分段 {m["usable"]}/{m["planned"]}（覆蓋 {c:.0%}）']
    if m.get('scroll_status') == 'failed':
        why.append('無法捲動，只取得首屏')
    if c >= SEG_A:
        return 'A', why
    if c >= SEG_B:
        return 'B', why
    if c >= SEG_C:
        return 'C', why
    return 'D', why


def record(site_dir, key, kind, metrics, auto_grade, reasons, override=None, reason=None, environment=None):
    import wr_status
    rec = {'kind': kind, 'auto_grade': auto_grade, 'grade': override or auto_grade,
           'reasons': reasons, 'metrics': {k: v for k, v in metrics.items() if k != 'gaps'},
           'gaps': metrics.get('gaps', [])}
    if override:
        rec['override_reason'] = reason
    if environment:
        rec['environment_failure'] = environment
        d = wr_status.load(site_dir)
        env = d.get('environment') or {'failures': []}
        env['failures'].append({'capture': key, **environment})
        d['environment'] = env
        wr_status.save(site_dir, d)
    wr_status.set_capture(site_dir, key, rec)
    return rec


# ---------------------------------------------------------------- Research Environment Failure
# 擷取到的不是網站本身，而是「研究環境被拒絕」的頁面：瀏覽器不支援、機器人驗證、存取被擋。
# 這不是網站設計的問題，也不是一般的 Capture D：那一次擷取沒有任何網站內容可以研究。
ENV_PATTERNS = [
    ('unsupported-browser', re.compile(r'(browser|navigateur|navegador|browser wird)\s*(is|est|no es|wird)?\s*(not|non|nicht)?\s*'
                                       r'(supported|support[ée]|compatible|unterst[üu]tzt)|unsupported browser|'
                                       r'update your browser|upgrade your browser|browser not supported', re.I)),
    ('bot-challenge', re.compile(r'verify (that )?you are (a )?human|checking (if the site connection is secure|your browser)|'
                                 r'are you a robot|captcha|cf-challenge|just a moment\.\.\.|attention required', re.I)),
    ('access-denied', re.compile(r'access denied|forbidden|request blocked|you have been blocked|not available in your (country|region)', re.I)),
    ('javascript-required', re.compile(r'(please )?enable javascript|javascript is (required|disabled)|requires javascript', re.I)),
]
ENV_URL = re.compile(r'/(unsupported|browser-?not-?supported|old-?browser|outdated|blocked|captcha|challenge)(/|\?|$)', re.I)


def environment_failure(url=None, title=None, text=None, http_status=None):
    """擷取結果是不是 Research Environment Failure。回傳 {'type', 'evidence'} 或 None。

    只看「被拒絕頁面」的明確訊號：網址被導到 /unsupported 之類、標題或內文是拒絕訊息、HTTP 401／403／429。
    內文很長（> 1500 字）時只看標題與網址，避免網站正文剛好提到 captcha 這類字眼。
    """
    if http_status in (401, 403, 429):
        return {'type': 'access-denied', 'evidence': f'HTTP {http_status}'}
    if url and ENV_URL.search(url):
        typ = 'unsupported-browser' if 'support' in url.lower() or 'browser' in url.lower() else 'access-denied'
        return {'type': typ, 'evidence': f'被導向 {url}'}
    hay = [('標題', title or '')]
    if text and len(text) <= 1500:
        hay.append(('內文', text))
    for where, s in hay:
        for typ, rx in ENV_PATTERNS:
            m = rx.search(s)
            if m:
                return {'type': typ, 'evidence': f'{where}：「{m.group(0)}」'}
    return None


# ---------------------------------------------------------------- Final Capture Quality（證據集合）
DEVICES = ('desktop', 'tablet', 'mobile')


def device_of(key):
    for dev in DEVICES:
        if key.endswith(dev):
            return dev
    return 'other'


def final_capture(d):
    """以「證據集合」判定每個裝置的 Final Capture Quality。

    規則（references/capture-reliability.md §2.1）：
      1. 同一個裝置的所有擷取（primary、fallback、歷次嘗試）都是證據，不互斥；Final 不是「最後一次」的結果。
      2. Final = 證據集合中能支撐的最好等級：一張 A 的分段擷取就足以讓 Final 成為 A，
         失敗的 fallback（D）不會把已經取得的 B 拉下來。
      3. Research Environment Failure 的擷取不算證據；某裝置只有這種擷取時，該裝置 status = environment-failure、Final D。
      4. 多次擷取各自只涵蓋一部分、合起來更完整時，研究者可以用 final --override 調整（理由必填、要指出是哪些擷取）。
    """
    import wr_status
    groups = {}
    for key, rec in iter_all(d):
        if not rec.get('stage'):  # 舊紀錄沒有 stage：依記錄名稱判斷（fallback-* 是 fallback）
            rec = dict(rec, stage=wr_status.stage_of(key))
        groups.setdefault(device_of(key), []).append((key, rec))
    out = {}
    overrides = d.get('final_overrides', {})
    for dev, items in groups.items():
        usable = [(k, r) for k, r in items if not r.get('environment_failure') and r.get('grade') in GRADE_ORDER]
        env = [(k, r) for k, r in items if r.get('environment_failure')]
        prim = [r.get('grade') for k, r in items if r.get('stage', 'primary') == 'primary']
        fb = [r.get('grade') for k, r in items if r.get('stage') == 'fallback']
        rec = {'initial': prim[0] if prim else None, 'fallback': fb,
               'evidence': [{'capture': k, 'stage': r.get('stage', 'primary'), 'grade': r.get('grade'),
                             'environment_failure': bool(r.get('environment_failure'))} for k, r in items]}
        if usable:
            best_k, best_r = min(usable, key=lambda kr: GRADE_ORDER.index(kr[1]['grade']))
            rec.update(grade=best_r['grade'], basis=best_k, status='ok' if best_r['grade'] == 'A' else 'degraded',
                       rule='證據集合中最好的擷取')
        else:
            rec.update(grade='D', basis=None, status='environment-failure' if env else 'failed',
                       rule='只有研究環境被拒絕的擷取' if env else '沒有可用擷取')
            if env:
                rec['environment_failure'] = env[0][1]['environment_failure']
        ov = overrides.get(dev)
        if ov and rec['status'] != 'environment-failure':
            rec.update(auto_grade=rec['grade'], grade=ov['grade'], override_reason=ov['reason'],
                       status='ok' if ov['grade'] == 'A' else 'degraded', rule='研究者覆寫')
        out[dev] = rec
    return out


def iter_all(d):
    import wr_status
    return wr_status.iter_captures(d)


def research_status(final):
    """整份研究的環境狀態：桌機（主要內容）只有環境失敗 → environment-failure。"""
    dev = final.get('desktop') or final.get('other')
    if dev and dev.get('status') == 'environment-failure':
        return 'environment-failure'
    return 'ok'


def final_table(final):
    rows = ['| 裝置 | Initial | Fallback | **Final** | 依據 |', '| --- | --- | --- | --- | --- |']
    for dev in DEVICES + ('other',):
        r = final.get(dev)
        if not r:
            continue
        fb = '、'.join(g or '—' for g in r['fallback']) or '—'
        basis = r.get('basis') or ('Research Environment Failure' if r['status'] == 'environment-failure' else '—')
        if r.get('override_reason'):
            basis += f'（覆寫：{r["override_reason"]}）'
        rows.append(f'| {dev} | {r["initial"] or "—"} | {fb} | **{r["grade"]}** | {basis} |')
    return '\n'.join(rows)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest='cmd', required=True)
    a = sub.add_parser('image')
    a.add_argument('path')
    a.add_argument('--viewport-h', type=int)
    a.add_argument('--expected-height', type=int, help='DOM scrollHeight 或其他來源得知的頁面高度')
    a.add_argument('--content-chars', type=int, help='markdown 字數；很長卻只有一屏截圖 → 只拿到首屏')
    a.add_argument('--page-url', help='擷取工具回報的最終網址（被導到 /unsupported 之類 → Research Environment Failure）')
    a.add_argument('--page-title', help='擷取到的頁面標題')
    a.add_argument('--page-text', help='擷取到的 markdown／內文（或用 --page-text-file）')
    a.add_argument('--page-text-file')
    a.add_argument('--http-status', type=int)
    b = sub.add_parser('segments')
    b.add_argument('path')
    for x in (a, b):
        x.add_argument('--record', metavar='SITE_DIR')
        x.add_argument('--as', dest='key', help='記錄名稱，例如 firecrawl-desktop、firecrawl-mobile、fallback-desktop')
        x.add_argument('--override', choices=list(GRADE_ORDER))
        x.add_argument('--reason')
        x.add_argument('--json', action='store_true')
    f = sub.add_parser('final', help='以證據集合判定 Final Capture Quality（Initial＋Fallback → Final）')
    f.add_argument('site_dir')
    f.add_argument('--override', action='append', default=[], metavar='裝置=等級',
                   help='研究者覆寫 Final，例如 desktop=B；一定要配 --reason，並寫出依據哪些擷取')
    f.add_argument('--reason')
    f.add_argument('--json', action='store_true')
    o = p.parse_args()
    if o.cmd == 'final':
        return main_final(p, o)
    if o.override and not o.reason:
        p.error('--override 一定要寫 --reason（例如「看過切圖，空白是設計本身的留白」）')
    env = None
    if o.cmd == 'image':
        m = analyze_image(o.path, o.viewport_h, o.expected_height, o.content_chars)
        g, why = grade_image(m)
        text = o.page_text
        if o.page_text_file:
            text = open(o.page_text_file, encoding='utf-8').read()
        env = environment_failure(o.page_url, o.page_title, text, o.http_status)
        if env:
            g, why = 'D', [f'Research Environment Failure（{env["type"]}）：{env["evidence"]}'] + why
    else:
        m = analyze_segments(o.path)
        g, why = grade_segments(m)
    final = o.override or g
    if env and o.override:
        p.error('Research Environment Failure 的擷取不能覆寫等級：那一次沒有拿到網站內容')
    if o.record:
        if not o.key:
            p.error('--record 需要 --as')
        record(o.record, o.key, o.cmd, m, g, why, o.override, o.reason, environment=env)
    if o.json:
        print(json.dumps({'grade': final, 'auto_grade': g, 'reasons': why, 'metrics': m, 'environment_failure': env},
                         ensure_ascii=False, indent=1))
        return
    names = {'A': 'Complete', 'B': 'Partial', 'C': 'Degraded', 'D': 'Failed'}
    print(f'Capture Quality：{final} — {names[final]}' + (f'（自動判定 {g}，研究者覆寫：{o.reason}）' if o.override else ''))
    for r in why:
        print(f'  - {r}')
    if o.cmd == 'image' and m.get('gaps'):
        print('  缺口（原圖 y 範圍）：' + '、'.join(f'{a}-{b}' for a, b in m['gaps']))
    if env:
        print('Research Environment Failure：研究環境被網站拒絕，不是網站設計的問題。用其他擷取方式（Playwright fallback）'
              '再試一次；仍被拒絕就把這個網站記為「研究環境失敗」，不要寫設計結論（references/capture-reliability.md §6.1）。')
    elif final != 'A':
        print('下一步：Fallback Capture（references/capture-reliability.md §3），之後跑 quality_check.py final 重新判定；'
              '缺口內的內容寫「未觀察到」，不要寫成網站沒有。')


def main_final(p, o):
    import wr_status
    d = wr_status.load(o.site_dir)
    if o.override:
        if not o.reason:
            p.error('final --override 一定要寫 --reason，並指出依據哪些擷取')
        ov = d.setdefault('final_overrides', {})
        for item in o.override:
            dev, _, g = item.partition('=')
            if dev not in DEVICES or g not in GRADE_ORDER:
                p.error(f'無法解析 {item}（裝置：desktop／tablet／mobile；等級 A–D）')
            ov[dev] = {'grade': g, 'reason': o.reason}
        wr_status.save(o.site_dir, d)
    fin = final_capture(d)
    status = research_status(fin)
    wr_status.set_key(o.site_dir, 'final_capture', fin)
    wr_status.set_key(o.site_dir, 'research_status', status)
    if o.json:
        print(json.dumps({'final_capture': fin, 'research_status': status}, ensure_ascii=False, indent=1))
        return
    print('Final Capture Quality（證據集合：Initial＋Fallback → Final）')
    print(final_table(fin))
    if status == 'environment-failure':
        print('\n研究狀態：Research Environment Failure（主要內容只有被拒絕的頁面；不要寫設計結論，記入研究限制並補位）')


if __name__ == '__main__':
    main()
