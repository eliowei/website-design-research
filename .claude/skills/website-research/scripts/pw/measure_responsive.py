#!/usr/bin/env python3
"""measure-responsive：每個寬度的版面快照、打開選單，最後把三個寬度對照起來。

用法：
  python measure_responsive.py <url> <網站資料夾> --viewport 390      # 量一個寬度（含打開選單）
  python measure_responsive.py compare <網站資料夾>                   # 只對照已經量到的寬度，不開瀏覽器

快照內容：html 字級、導覽型態（頂部可見連結數、有沒有選單按鈕）、h1–h3 字級、可見 CTA 數、頁面高度。
選單按鈕的找法（依序）：aria-expanded／aria-controls 的按鈕、aria-label 或文字含 menu／nav／選單、
頂部只有圖示沒有文字的按鈕。找不到選單按鈕而頂部有 ≥2 個可見連結 → menu: na（這個寬度不需要選單）。
點了沒有可觀察的變化 → unverified，不重試。

每個寬度各自有時間上限；某個寬度失敗不影響其他寬度，compare 只對照拿得到的寬度，缺的寫 unavailable。
輸出：source/pw/layout-<寬度>.json、source/pw/menu-<寬度>.json、screenshots/pw/int<寬度>-menu-open.png、
      source/pw/responsive.json（compare）。
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402

LAYOUT_JS = r"""
() => {
  const W = window.__wr;
  const top = [...document.querySelectorAll('a,button,[role=button]')].filter(e => W.vis(e) && e.getBoundingClientRect().top < 140 && e.getBoundingClientRect().bottom > 0);
  const menuRe = /menu|nav|open|hamburger|burger|選單|目錄|☰/i;
  const cands = top.filter(e => e.hasAttribute('aria-expanded') || e.hasAttribute('aria-controls') ||
     menuRe.test((e.getAttribute('aria-label') || '') + ' ' + W.text(e) + ' ' + String(e.className)) ||
     (!W.text(e).trim() && e.querySelector('svg,span,i')));
  const heads = {};
  for (const t of ['h1', 'h2', 'h3']) { const el = [...document.querySelectorAll(t)].find(W.vis); if (el) heads[t] = W.cs(el).size; }
  return {htmlFont: getComputedStyle(document.documentElement).fontSize, bodyFont: getComputedStyle(document.body).fontSize,
          topLinks: top.filter(e => W.text(e) && !cands.includes(e)).map(e => W.text(e)).slice(0, 20),
          menuCandidates: cands.map(e => ({text: W.text(e), aria: e.getAttribute('aria-label'), expanded: e.getAttribute('aria-expanded'), selector: W.selector(e)})).slice(0, 5),
          heads, docHeight: W.scrollState().docHeight};
}
"""
VISIBLE_LINKS_JS = r"""() => [...document.querySelectorAll('a,button,[role=button]')].filter(e => window.__wr.vis(e) && window.__wr.inView(e))
  .map(e => ({text: window.__wr.text(e), href: e.getAttribute('href')}))"""


def run(page, ctx, open_menu=True):
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    C.inject(page)
    try:
        page.evaluate('() => window.scrollTo(0, 0)')
        page.wait_for_timeout(500)
    except Exception:
        pass
    lay = C.evaluate(page, LAYOUT_JS, default={})
    C.write_json(os.path.join(src, f'layout-{w}.json'), {'viewport': w, **(lay if isinstance(lay, dict) else {})})
    if not open_menu:
        return lay
    cands = (lay or {}).get('menuCandidates') or []
    menu = {'viewport': w, 'candidates': cands}
    if not cands:
        if len((lay or {}).get('topLinks') or []) >= 2:
            C.record(ctx['site_dir'], w, 'menu', 'na', '頂部導覽連結直接可見，沒有選單按鈕')
        else:
            C.record(ctx['site_dir'], w, 'menu', 'unverified', '找不到選單按鈕，也沒有可見的頂部導覽')
        C.write_json(os.path.join(src, f'menu-{w}.json'), menu)
        return lay
    before = C.evaluate(page, VISIBLE_LINKS_JS, default=[])
    status, detail = 'unverified', ''
    for cand in cands[:2]:
        if not ctx['deadline'].ok(15):
            status, detail = 'skipped', '時間預算用完'
            break
        el = C.resolve(page, cand['selector'])
        if el is None:
            continue
        try:
            if ctx.get('low_fps'):  # 主執行緒很忙時原生點擊可能卡住：改用頁面內 click()
                el.evaluate('e => e.click()')
            else:
                el.click(timeout=C.BUDGET['click'] * 1000)
            page.wait_for_timeout(1200)
        except Exception as e:
            detail = f'點擊失敗：{C.first_line(e, 100)}'
            continue
        after = C.evaluate(page, VISIBLE_LINKS_JS, default=[])
        new = [a for a in (after or []) if a not in (before or [])]
        if new:
            C.shot(page, os.path.join(shots, f'int{w}-menu-open.png'))
            menu.update(opened_by=cand, items=after, new_items=new)
            status, detail = 'ok', f'打開後出現 {len(new)} 個新連結'
            break
        detail = f'點「{cand.get("aria") or cand.get("text")}」後沒有出現新的可見連結'
    menu['status'] = status
    C.write_json(os.path.join(src, f'menu-{w}.json'), menu)
    C.record(ctx['site_dir'], w, 'menu', status, detail)
    return lay


def compare(site_dir):
    src = os.path.join(site_dir, 'source', 'pw')
    out = {'viewports': {}}
    for w in (1440, 768, 390):
        lay = C.read_json(os.path.join(src, f'layout-{w}.json'))
        dom = C.read_json(os.path.join(src, f'dom-css-{w}.json'))
        cta = C.read_json(os.path.join(src, f'cta-{w}.json'))
        seg = C.read_json(os.path.join(src, f'segments-{w}.json'))
        menu = C.read_json(os.path.join(src, f'menu-{w}.json'))
        if not any((lay, dom, cta, seg)):
            out['viewports'][str(w)] = {'status': 'unavailable'}
            continue
        out['viewports'][str(w)] = {
            'status': 'ok' if (lay and dom and 'error' not in (dom or {})) else 'partial',
            'htmlFont': (lay or {}).get('htmlFont'), 'heads': (lay or {}).get('heads'),
            'nav': 'menu-button' if (lay or {}).get('menuCandidates') else ('links' if (lay or {}).get('topLinks') else 'unknown'),
            'menu': (menu or {}).get('status'), 'ctaCount': (cta or {}).get('count'),
            'docHeight': (lay or {}).get('docHeight') or (seg or {}).get('est_height'),
            'visibleHeadings': len([h for h in (dom or {}).get('heads', []) if h.get('visible') or h.get('seen')]),
            'scroll': (seg or {}).get('scroll', {}).get('status')}
    C.write_json(os.path.join(src, 'responsive.json'), out)
    rows = ['| 項目 | 1440 | 768 | 390 |', '| --- | --- | --- | --- |']
    V = out['viewports']

    def cell(w, k):
        v = V.get(str(w), {})
        if v.get('status') == 'unavailable':
            return 'unavailable'
        x = v.get(k)
        return '—' if x is None else str(x)
    for label, k in (('html 字級', 'htmlFont'), ('導覽', 'nav'), ('選單', 'menu'), ('可見 CTA', 'ctaCount'),
                     ('可見標題', 'visibleHeadings'), ('頁面高度', 'docHeight'), ('捲動', 'scroll')):
        rows.append(f'| {label} | ' + ' | '.join(cell(w, k) for w in (1440, 768, 390)) + ' |')
    for t in ('h1', 'h2', 'h3'):
        rows.append(f'| {t} 字級 | ' + ' | '.join(
            ('unavailable' if V.get(str(w), {}).get('status') == 'unavailable' else str((V.get(str(w), {}).get('heads') or {}).get(t, '—')))
            for w in (1440, 768, 390)) + ' |')
    return out, '\n'.join(rows)


def main():
    if len(sys.argv) > 1 and sys.argv[1] == 'compare':
        p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
        p.add_argument('cmd')
        p.add_argument('site_dir')
        o = p.parse_args()
        out, table = compare(o.site_dir)
        print(table)
        return
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    p.add_argument('--no-menu', action='store_true')
    o = p.parse_args()
    deadline = C.Deadline(o.budget or 90)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            C.record(o.site_dir, o.viewport, 'menu', 'unavailable', f'載入失敗：{nav.get("error")}')
            print(f'無法載入：{nav.get("error")}')
            sys.exit(1)
        C.settle(page)
        lay = run(page, {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline}, not o.no_menu)
    print(lay)


if __name__ == '__main__':
    main()
