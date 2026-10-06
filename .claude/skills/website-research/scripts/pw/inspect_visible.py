#!/usr/bin/env python3
"""inspect-visible-elements：只盤點「真的看得見、可以互動」的元素，加上 DOM 與 computed style。

用法：
  python inspect_visible.py <url> <網站資料夾> [--viewport 1440] [--budget 90]

「看得見」的條件（全部成立才算）：
  display 不是 none、visibility 不是 hidden、opacity 不是 0、bounding box 寬高 ≥ 1、
  checkVisibility() 為真、不在 aria-hidden／inert 裡，而且「與 viewport 有交集」：
  現在就在畫面內，或在 scroll_page.py 分段捲動時曾經出現在畫面內（seen）。
同樣文字＋連結的隱藏複本（為不同裝置準備的重複 CTA）會被排除，數量記在 hiddenDuplicates。
被其他元素蓋住的元素標 topmost: false（點不到）。

每個元素附一個選擇器，優先順序：semantic element → role → aria → data-* → DOM 結構 → 文字（最後才用）。

輸出：source/pw/dom-css-<寬度>.json；dom、css 能力的狀態記進 capture-status.json。
"""
import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402

INVENTORY_JS = r"""
() => {
  const W = window.__wr;
  const seen = window.__wrSeen || {};
  const items = [];
  const used = new Set();
  const sel = 'a,button,[role=button],[role=link],input[type=submit],input[type=button],summary';
  const all = [...document.querySelectorAll(sel)];
  const key = (t, h) => t + '|' + (h || '');
  const visibleKeys = new Set();
  for (const el of all) {
    if (!W.vis(el)) continue;
    const id = el.dataset.wrId || (el.dataset.wrId = 'wr' + Math.random().toString(36).slice(2, 9));
    used.add(id);
    const s = getComputedStyle(el);
    const rec = {id, tag: el.tagName.toLowerCase(), text: W.text(el), href: el.getAttribute('href'), target: el.getAttribute('target'),
      aria: el.getAttribute('aria-label'), expanded: el.getAttribute('aria-expanded'),
      box: W.box(el), inView: W.inView(el), topmost: W.inView(el) ? W.topmost(el) : null, seen: !!seen[id] || W.inView(el),
      css: W.cs(el), buttonLike: W.buttonLike(el, s), persistent: W.persistent(el), section: W.section(el), consent: W.consent(el), selector: W.selector(el)};
    items.push(rec);
    visibleKeys.add(key(rec.text, rec.href));
  }
  // 捲動時看過、現在看不到的（例如往下捲就收起的導覽）
  for (const [id, r] of Object.entries(seen)) {
    if (used.has(id) || ['h1', 'h2', 'h3'].includes(r.tag)) continue;
    items.push({id, tag: r.tag, text: r.text, href: r.href, aria: r.aria, expanded: r.expanded, box: {x: r.x, y: r.y, vy: r.vy, w: r.w, h: r.h}, inView: false, topmost: null,
                seen: true, visibleNow: false, css: r.css, buttonLike: r.buttonLike, persistent: r.persistent, section: r.section, consent: r.consent || null, selector: r.selector});
    visibleKeys.add(key(r.text, r.href));
  }
  let hiddenDuplicates = 0;
  for (const el of all) { if (!W.vis(el) && visibleKeys.has(key(W.text(el), el.getAttribute('href')))) hiddenDuplicates++; }
  const heads = [];
  for (const el of document.querySelectorAll('h1,h2,h3')) {
    const v = W.vis(el);
    const id = el.dataset.wrId;
    if (!v && !(id && seen[id])) { heads.push({tag: el.tagName, text: W.text(el).slice(0, 120), visible: false}); continue; }
    heads.push({tag: el.tagName, text: W.text(el).slice(0, 160), visible: v, seen: !!(id && seen[id]), box: W.box(el), css: W.cs(el)});
  }
  const rootVars = {};
  const rm = [];
  let readable = 0, blocked = 0;
  for (const sh of document.styleSheets) {
    let rules; try { rules = sh.cssRules; readable++; } catch (e) { blocked++; continue; }
    const walk = (rs) => { for (const r of rs) {
      if (r.selectorText === ':root' || r.selectorText === 'html') for (const p of r.style) if (p.startsWith('--')) rootVars[p] = r.style.getPropertyValue(p).trim();
      if (r.conditionText && r.conditionText.includes('prefers-reduced-motion')) rm.push(r.conditionText);
      if (r.cssRules) walk(r.cssRules);
    } };
    walk(rules);
  }
  const media = [...document.querySelectorAll('canvas,video')].map(e => ({tag: e.tagName.toLowerCase(), cls: String(e.className).slice(0, 60), box: W.box(e)}));
  return {title: document.title, url: location.href, scroll: W.scrollState(),
    nodes: document.querySelectorAll('*').length, textChars: document.body ? document.body.innerText.length : 0,
    html: W.cs(document.documentElement), body: W.cs(document.body), heads, links: items, hiddenDuplicates,
    rootVars, reducedMotion: rm, stylesheets: {readable, blocked}, media,
    scripts: [...document.scripts].map(s => s.src).filter(Boolean).slice(0, 40),
    animations: document.getAnimations ? document.getAnimations().length : null,
    globals: {gsap: !!window.gsap, ScrollTrigger: !!window.ScrollTrigger, lenis: !!window.lenis, three: !!window.THREE}};
}
"""


def run(page, ctx):
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    data = C.evaluate(page, INVENTORY_JS, default=None)
    path = os.path.join(src, f'dom-css-{w}.json')
    if not isinstance(data, dict) or 'error' in data:
        err = (data or {}).get('error', '無法執行') if isinstance(data, dict) else '無法執行'
        C.write_json(path, {'viewport': w, 'error': err})
        C.record(ctx['site_dir'], w, 'dom', 'unavailable', err)
        C.record(ctx['site_dir'], w, 'css', 'unavailable', err)
        return None
    data['viewport'] = w
    C.write_json(path, data)
    ok_dom = data.get('nodes', 0) > 30 and (data.get('links') or data.get('heads'))
    C.record(ctx['site_dir'], w, 'dom', 'ok' if ok_dom else 'partial',
             f'{len(data.get("links", []))} 個可見互動元素，{len([h for h in data.get("heads", []) if h.get("visible") or h.get("seen")])} 個可見標題'
             f'，排除 {data.get("hiddenDuplicates", 0)} 個隱藏複本')
    ss = data.get('stylesheets', {})
    if data.get('body') and any(h.get('css') for h in data.get('heads', [])):
        css_status = 'ok' if ss.get('readable', 0) >= ss.get('blocked', 0) else 'partial'
        detail = f'computed style 取得；樣式表可讀 {ss.get("readable")}／被擋 {ss.get("blocked")}'
    elif data.get('body'):
        css_status, detail = 'partial', '只取得 body 的 computed style（沒有可見標題）'
    else:
        css_status, detail = 'unavailable', '沒有 computed style'
    C.record(ctx['site_dir'], w, 'css', css_status, detail)
    return data


def main():
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    o = p.parse_args()
    deadline = C.Deadline(o.budget or 90)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            for cap in ('dom', 'css'):
                C.record(o.site_dir, o.viewport, cap, 'unavailable', f'載入失敗：{nav.get("error")}')
            print(f'無法載入：{nav.get("error")}')
            sys.exit(1)
        C.settle(page)
        d = run(page, {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline})
    if d:
        print(f'可見互動元素 {len(d["links"])}、標題 {len(d["heads"])}、隱藏複本 {d["hiddenDuplicates"]}')


if __name__ == '__main__':
    main()
