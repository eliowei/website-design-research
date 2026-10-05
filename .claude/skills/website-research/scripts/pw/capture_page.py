#!/usr/bin/env python3
"""capture-page：載入頁面、等它穩定、拍首屏（必要時退回 CDP 截圖）。

用法：
  python capture_page.py <url> <網站資料夾> [--viewport 1440] [--budget 60] [--full-page]

輸出：screenshots/pw/pw<寬度>-hero.png（--full-page 另存 pw<寬度>-full.png）、source/pw/capture-<寬度>.json；
並把 screenshot 能力的狀態記進 capture-status.json：
  ok（一般截圖）、fallback（page.screenshot 逾時，改用 CDP 擷取）、unavailable（都失敗）。
整頁截圖在 WebGL／捲動動畫網站常常空白或逾時，所以預設只拍首屏，整頁內容交給 scroll_page.py 分段擷取。
"""
import argparse
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402

INFO_JS = r"""
() => {
  const W = window.__wr;
  const big = [...document.querySelectorAll('canvas,video')].filter(e => { const r = e.getBoundingClientRect(); return r.width * r.height > innerWidth * innerHeight * 0.3; });
  let readable = 0, blocked = 0;
  for (const sh of document.styleSheets) { try { sh.cssRules; readable++; } catch (e) { blocked++; } }
  return {title: document.title, readyState: document.readyState, scroll: W.scrollState(),
          nodes: document.querySelectorAll('*').length, textChars: (document.body ? document.body.innerText.length : 0),
          bigCanvasOrVideo: big.map(e => e.tagName.toLowerCase()), stylesheets: {readable, blocked},
          animations: document.getAnimations ? document.getAnimations().length : null};
}
"""


def run(page, ctx, nav, full_page=False):
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    t0 = time.monotonic()
    C.settle(page)
    hero = os.path.join(shots, f'pw{w}-hero.png')
    state, err = C.shot(page, hero)
    info = C.evaluate(page, INFO_JS, default={})
    out = {'viewport': w, 'nav': nav, 'hero': {'file': os.path.relpath(hero, ctx['site_dir']), 'status': state, 'error': err},
           'info': info, 'seconds_after_load': round(time.monotonic() - t0, 1)}
    if full_page and ctx['deadline'].ok(40):
        full = os.path.join(shots, f'pw{w}-full.png')
        fs, ferr = C.shot(page, full, full_page=True, timeout=30)
        out['full'] = {'file': os.path.relpath(full, ctx['site_dir']), 'status': fs, 'error': ferr}
    C.write_json(os.path.join(src, f'capture-{w}.json'), out)
    return out


def main():
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    p.add_argument('--full-page', action='store_true')
    o = p.parse_args()
    deadline = C.Deadline(o.budget or 90)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            C.record(o.site_dir, o.viewport, 'screenshot', 'unavailable', f'載入失敗：{nav.get("error")}')
            print(f'無法載入：{nav.get("error")}')
            sys.exit(1)
        r = run(page, {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline}, nav, o.full_page)
    C.record(o.site_dir, o.viewport, 'screenshot', r['hero']['status'], r['hero']['error'] or '首屏')
    print(f'首屏：{r["hero"]["status"]}　頁面高度：{r["info"].get("scroll", {}).get("docHeight")}　'
          f'載入 {nav.get("seconds")} 秒')


if __name__ == '__main__':
    main()
