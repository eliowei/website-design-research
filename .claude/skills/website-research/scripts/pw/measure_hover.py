#!/usr/bin/env python3
"""measure-hover：hover 前後比對「元素本身＋所有子孫＋::before／::after」的樣式。

用法：
  python measure_hover.py <url> <網站資料夾> [--viewport 1440] [--max 6] [--targets '<JSON 陣列>']

很多網站把 hover 效果寫在內層（button > span／svg／::before），只量外層會以為「hover 沒有變化」。
這裡比對的屬性：color、background-color、background-image、opacity、transform、border、border-radius、
box-shadow、outline、text-decoration、filter、寬高、letter-spacing、clip-path，並記下每個節點的 transition。

目標預設取 cta-<寬度>.json 裡的按鈕樣式 CTA（依文字去重）＋前 2 個導覽連結，最多 --max 個。
元素看不見、被其他元素蓋住、或滑鼠移過去失敗時記為 unverified，不重試第二次以上。
輸出：source/pw/hover-<寬度>.json、screenshots/pw/int<寬度>-hover-<n>-before.png／-after.png。
"""
import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402
import measure_cta  # noqa: E402

SNAP_JS = '(el) => window.__wr.snap(el, 40)'
BOX_JS = '(el) => { const r = el.getBoundingClientRect(); return {x: r.x, y: r.y, w: r.width, h: r.height, top: window.__wr.topmost(el), vis: window.__wr.vis(el)}; }'


def default_targets(cta, inv, n):
    seen, out = set(), []
    for c in (cta or {}).get('ctas', []):
        if c['style'] != 'primary' or c.get('visibleNow') is False:
            continue
        k = c['text'] or c['href']
        if k in seen:
            continue
        seen.add(k)
        out.append({'text': c['text'], 'selector': c['selector'], 'kind': 'cta'})
        if len(out) >= max(1, n - 2):
            break
    navs = [it for it in (inv or {}).get('links', []) if it.get('persistent') and not it.get('buttonLike') and it.get('text')]
    for it in navs[:2]:
        if it['text'] not in seen:
            out.append({'text': it['text'], 'selector': it['selector'], 'kind': 'nav'})
    return out[:n]


def diff(before, after):
    a = {n['path']: n for n in before}
    changes = []
    for n in after:
        b = a.get(n['path'])
        if not b:
            continue
        for prop, v in n['props'].items():
            if prop == 'border-top-color' and n['props'].get('border-top-width') in ('0px', '0'):
                continue  # 沒有邊框時 border-color 跟著 currentColor 變，不是真的 hover 效果
            if prop == 'outline-color' and n['props'].get('outline-style') == 'none':
                continue
            if b['props'].get(prop) != v:
                changes.append({'node': n['path'], 'prop': prop, 'before': b['props'].get(prop), 'after': v,
                                'transition': n.get('transition')})
    return changes


def clip_for(box, vw, vh, pad=12):
    x = max(0, box['x'] - pad)
    y = max(0, box['y'] - pad)
    w = min(vw - x, box['w'] + pad * 2)
    h = min(vh - y, box['h'] + pad * 2)
    if w < 4 or h < 4:
        return None
    return {'x': x, 'y': y, 'width': w, 'height': h}


def force_hover(page, el):
    """用 CDP 強制 :hover 狀態（不送滑鼠事件，主執行緒很忙時也不會卡住）。JS 驅動的 hover 效果量不到。
    回傳 CDP session；強制狀態只在 session 存在時有效，量完再 detach。"""
    el.evaluate('e => e.setAttribute("data-wr-hover", "1")')
    cdp = page.context.new_cdp_session(page)
    cdp.send('DOM.enable')
    cdp.send('CSS.enable')
    root = cdp.send('DOM.getDocument', {'depth': 0})['root']['nodeId']
    node = cdp.send('DOM.querySelector', {'nodeId': root, 'selector': '[data-wr-hover="1"]'})['nodeId']
    if node:
        cdp.send('CSS.forcePseudoState', {'nodeId': node, 'forcedPseudoClasses': ['hover']})
    return cdp


def release_hover(el, cdp):
    try:
        cdp.detach()
    finally:
        el.evaluate('e => e.removeAttribute("data-wr-hover")')


def run(page, ctx, targets):
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    vw, vh = C.VIEWPORTS[w]['width'], C.VIEWPORTS[w]['height']
    results = []
    forced = bool(ctx.get('low_fps'))
    for i, t in enumerate(targets, 1):
        if not ctx['deadline'].ok(C.BUDGET['hover_each'] + 10):
            results.append({**t, 'status': 'skipped', 'reason': '時間預算用完'})
            continue
        rec = {**t, 'status': 'unverified'}
        el = C.resolve(page, t['selector'])
        if el is None:
            rec['reason'] = '找不到可見的元素'
            results.append(rec)
            continue
        try:
            if forced:
                el.evaluate('e => e.scrollIntoView({block: "center"})')
            else:
                el.scroll_into_view_if_needed(timeout=5000)
            page.wait_for_timeout(300)
            if not forced:
                page.mouse.move(2, 2)
            page.wait_for_timeout(400)
            box = el.evaluate(BOX_JS)
            if not box['vis']:
                rec['reason'] = '捲到元素後看不見'
                results.append(rec)
                continue
            if not box['top']:
                rec['reason'] = '元素被其他元素蓋住，滑鼠移不到它上面'
                rec['occluded'] = True
                results.append(rec)
                continue
            before = el.evaluate(SNAP_JS)
            clip = clip_for(box, vw, vh)
            if clip:
                C.shot(page, os.path.join(shots, f'int{w}-hover-{i}-before.png'), clip=clip)
            cdp = None
            if forced:
                cdp = force_hover(page, el)
            else:
                page.mouse.move(box['x'] + box['w'] / 2, box['y'] + box['h'] / 2, steps=5)
            page.wait_for_timeout(700)
            after = el.evaluate(SNAP_JS)
            if clip:
                C.shot(page, os.path.join(shots, f'int{w}-hover-{i}-after.png'), clip=clip)
            if cdp:
                release_hover(el, cdp)
            ch = diff(before, after)
            rec.update(status='ok', changes=ch, nodes=len(before), method='forced-css-hover' if forced else 'pointer',
                       summary=('沒有可量到的樣式變化' if not ch else
                                f'{len(ch)} 項變化，在 {len({c["node"] for c in ch})} 個節點'),
                       inner_only=bool(ch) and all('>' in c['node'] or '::' in c['node'] for c in ch))
            if not forced:
                page.mouse.move(2, 2)
        except Exception as e:
            rec['reason'] = C.first_line(e, 120)
        results.append(rec)
    ok = sum(1 for r in results if r['status'] == 'ok')
    if not targets:
        status, detail = 'na', '頁面上沒有可見的按鈕樣式 CTA 或導覽連結可以 hover'
    elif ok == len(targets) and forced:
        status, detail = 'fallback', f'{ok} 個目標；幀率低，用 CSS :hover 強制狀態量測（JS 驅動的 hover 效果量不到）'
    elif ok == len(targets):
        status, detail = 'ok', f'{ok} 個目標'
    elif ok:
        status, detail = 'partial', f'{ok}/{len(targets)} 個目標量到'
    else:
        status, detail = 'unverified', '; '.join(r.get('reason', '') for r in results)[:200]
    C.write_json(os.path.join(src, f'hover-{w}.json'), {'viewport': w, 'targets': results})
    C.record(ctx['site_dir'], w, 'hover', status, detail)
    return results


def main():
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    p.add_argument('--max', type=int, default=6)
    p.add_argument('--targets', help='JSON 陣列：[{"text": "...", "selector": {...}}]')
    o = p.parse_args()
    deadline = C.Deadline(o.budget or 150)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            C.record(o.site_dir, o.viewport, 'hover', 'unavailable', f'載入失敗：{nav.get("error")}')
            print(f'無法載入：{nav.get("error")}')
            sys.exit(1)
        C.settle(page)
        ctx = {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline}
        if o.targets:
            targets = json.loads(o.targets)
        else:
            import inspect_visible
            inv = inspect_visible.run(page, ctx)
            cta = measure_cta.run(page, ctx, inv)
            targets = default_targets(cta, inv, o.max)
        res = run(page, ctx, targets)
    for r in res:
        print(f'- {r.get("text")}: {r["status"]} {r.get("summary") or r.get("reason", "")}')


if __name__ == '__main__':
    main()
