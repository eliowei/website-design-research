#!/usr/bin/env python3
"""measure-focus：按 Tab 走一遍，記錄每一步焦點落在哪裡、看不看得到焦點樣式。

用法：
  python measure_focus.py <url> <網站資料夾> [--viewport 1440] [--steps 8]

每一步記錄：元素、文字、選擇器、是否 :focus-visible、outline（樣式／寬度／顏色／offset）、box-shadow，
以及焦點是否落在「看不見的元素」上（隱藏選單、畫面外的表單：鍵盤使用者會迷路）。
焦點指示的判斷：outline 不是 none 且寬度 > 0 → outline；否則 box-shadow 有值 → box-shadow；都沒有 → 未偵測到。
（只代表 computed style 看得到的部分；用背景色或底線表示焦點的網站，要看截圖確認。）
焦點一直停在 body（Tab 沒有反應）→ unavailable，不重試。
輸出：source/pw/focus-<寬度>.json、screenshots/pw/int<寬度>-focus-<n>.png（前 3 個可見的焦點）。
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402

ACTIVE_JS = r"""
() => {
  const W = window.__wr; const e = document.activeElement;
  if (!e || e === document.body || e === document.documentElement) return {tag: 'body'};
  const s = getComputedStyle(e); const r = e.getBoundingClientRect();
  let indicator = 'none-detected';
  if (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) indicator = 'outline';
  else if (s.boxShadow && s.boxShadow !== 'none') indicator = 'box-shadow';
  return {tag: e.tagName.toLowerCase(), text: W.text(e).slice(0, 60), href: e.getAttribute('href'), selector: W.selector(e),
          visible: W.vis(e), inView: W.inView(e), focusVisible: e.matches(':focus-visible'),
          outline: {style: s.outlineStyle, width: s.outlineWidth, color: s.outlineColor, offset: s.outlineOffset},
          boxShadow: s.boxShadow, indicator, box: {x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height)}};
}
"""


FOCUS_NTH_JS = r"""
(n) => {  // 近似 Tab 順序：tabindex > 0 先，其餘依 DOM 順序；跳過 disabled 與 tabindex=-1
  const sel = 'a[href],button,input,select,textarea,summary,[tabindex],[contenteditable="true"]';
  const all = [...document.querySelectorAll(sel)].filter(e => !e.disabled && e.tabIndex >= 0 && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== 'hidden' && !e.closest('[inert]'));
  const pos = all.filter(e => e.tabIndex > 0).sort((a, b) => a.tabIndex - b.tabIndex);
  const order = pos.concat(all.filter(e => e.tabIndex === 0));
  const el = order[n];
  if (el) el.focus({focusVisible: true});
  return !!el;
}
"""


def run(page, ctx, steps=8):
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    vw, vh = C.VIEWPORTS[w]['width'], C.VIEWPORTS[w]['height']
    C.inject(page)
    try:
        page.evaluate('() => { window.scrollTo(0, 0); const a = document.activeElement; if (a) a.blur(); }')
    except Exception:
        pass
    seq, snaps = [], 0
    dl = C.Deadline(min(C.BUDGET['focus_total'], max(5, ctx['deadline'].left() - 5)))
    forced = bool(ctx.get('low_fps'))
    for i in range(1, steps + 1):
        if not dl.ok(3):
            break
        try:
            if forced:  # 主執行緒很忙時鍵盤事件可能卡住：改用頁面內依 Tab 順序 focus({focusVisible: true})
                page.evaluate(FOCUS_NTH_JS, i - 1)
            else:
                page.keyboard.press('Tab')
            page.wait_for_timeout(250)
            a = page.evaluate(ACTIVE_JS)
        except Exception as e:
            seq.append({'step': i, 'error': C.first_line(e)})
            continue
        a['step'] = i
        seq.append(a)
        if a.get('tag') != 'body' and a.get('visible') and a.get('inView') and snaps < 3:
            b = a['box']
            x, y = max(0, b['x'] - 16), max(0, b['y'] - 16)
            clip = {'x': x, 'y': y, 'width': min(vw - x, b['w'] + 32), 'height': min(vh - y, b['h'] + 32)}
            if clip['width'] > 4 and clip['height'] > 4:
                snaps += 1
                C.shot(page, os.path.join(shots, f'int{w}-focus-{snaps}.png'), clip=clip)
    moved = [s for s in seq if s.get('tag') not in ('body', None)]
    hidden = [s for s in moved if not s.get('visible')]
    no_ind = [s for s in moved if s.get('visible') and s.get('indicator') == 'none-detected']
    if not moved:
        status, detail = 'unavailable', 'Tab 之後焦點沒有離開 body'
    elif forced:
        status, detail = 'fallback', f'{len(moved)} 步；幀率低，用頁面內 focus({{focusVisible: true}}) 依近似 Tab 順序量測'
    elif len(moved) >= 3:
        status, detail = 'ok', f'{len(moved)} 步'
    else:
        status, detail = 'partial', f'只有 {len(moved)} 步'
    if hidden:
        detail += f'；{len(hidden)} 次落在看不見的元素'
    if no_ind:
        detail += f'；{len(no_ind)} 次沒有偵測到 outline／box-shadow（需看截圖確認）'
    C.write_json(os.path.join(src, f'focus-{w}.json'), {'viewport': w, 'sequence': seq,
                                                        'focusOnHidden': len(hidden), 'noIndicator': len(no_ind)})
    C.record(ctx['site_dir'], w, 'focus', status, detail)
    return seq


def main():
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    p.add_argument('--steps', type=int, default=8)
    o = p.parse_args()
    deadline = C.Deadline(o.budget or 90)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            C.record(o.site_dir, o.viewport, 'focus', 'unavailable', f'載入失敗：{nav.get("error")}')
            print(f'無法載入：{nav.get("error")}')
            sys.exit(1)
        C.settle(page)
        seq = run(page, {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline}, o.steps)
    for s in seq:
        print(f'{s.get("step")}. {s.get("tag")} {s.get("text", "")!r} visible={s.get("visible")} indicator={s.get("indicator")}')


if __name__ == '__main__':
    main()
