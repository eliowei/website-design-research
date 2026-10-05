#!/usr/bin/env python3
"""measure-cta：CTA 清單（可見的才算）＋點一次 Primary CTA。

用法：
  python measure_cta.py <url> <網站資料夾> [--viewport 1440] [--click] [--cta '<selector JSON>']

CTA 清單來自 inspect_visible 的可見元素：按鈕樣式（有底色／邊框且有左右 padding、<button>、role=button），
或連到常見轉換目的地（contact、signup、demo、pricing、buy、book、apply、download、App Store…）。
每筆記錄文字、所在段落、頁面 y、連結目標、是否常駐（fixed／sticky）、主要／次要樣式、選擇器。
同一個 CTA 的隱藏複本已在 inspect_visible 排除。

--click：點一次 Primary CTA（預設是出現最多次的按鈕樣式 CTA，或用 --cta 指定），記錄實際結果：
  新分頁網址、同分頁換頁、出現對話框，或 2.5 秒內沒有可觀察的變化；落地頁只記錄可見的表單欄位，不送出。
輸出：source/pw/cta-<寬度>.json、source/pw/click-<寬度>.json、screenshots/pw/int<寬度>-cta-click.png。
"""
import argparse
import json
import os
import re
import sys
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402
import inspect_visible  # noqa: E402

CONVERT_RE = re.compile(r'contact|sign-?up|register|join|get-?started|start|demo|trial|pricing|plans?|buy|shop|cart|checkout|'
                        r'book|reserve|apply|download|subscribe|waitlist|access|quote|talk|apps\.apple|play\.google', re.I)
FIELDS_JS = r"""() => [...document.querySelectorAll('input,select,textarea,button')].filter(e => window.__wr.vis(e))
  .map(e => ({tag: e.tagName.toLowerCase(), type: e.type || null, name: e.name || null, placeholder: e.placeholder || null,
              text: window.__wr.text(e).slice(0, 40), required: !!e.required}))"""
DIALOG_JS = r"""() => [...document.querySelectorAll('[role=dialog],[aria-modal=true],dialog[open]')].filter(e => window.__wr.vis(e)).length"""


MENU_RE = re.compile(r'menu|nav|hamburger|burger|close|選單|☰|✕', re.I)


def is_cta(item):
    href = item.get('href') or ''
    if item.get('expanded') is not None or MENU_RE.search((item.get('aria') or '') + ' ' + (item.get('text') or '')):
        return False  # 選單開關不是 CTA
    if item.get('buttonLike'):
        return True
    return bool(CONVERT_RE.search(href) or CONVERT_RE.search(item.get('text') or ''))


def build(inv, viewport):
    ctas = []
    for it in inv.get('links', []):
        if not it.get('text') and not it.get('href'):
            continue
        if not is_cta(it):
            continue
        ctas.append({'text': it.get('text'), 'href': it.get('href'), 'target': it.get('target'), 'y': it['box'].get('y'),
                     'section': it.get('section'), 'style': 'primary' if it.get('buttonLike') else 'link',
                     'persistent': it.get('persistent'), 'topmost': it.get('topmost'), 'visibleNow': it.get('visibleNow', True),
                     'css': {k: it['css'].get(k) for k in ('bg', 'color', 'radius', 'padding', 'size', 'weight', 'transition')},
                     'selector': it.get('selector')})
    ctas.sort(key=lambda c: (c['y'] if c['y'] is not None else 1e9))
    by_text = Counter(c['text'] for c in ctas)
    by_href = Counter(c['href'] for c in ctas if c['href'])
    return {'viewport': viewport, 'count': len(ctas), 'by_text': dict(by_text), 'by_href': dict(by_href),
            'persistent': [c for c in ctas if c['persistent']], 'ctas': ctas,
            'hiddenDuplicatesExcluded': inv.get('hiddenDuplicates', 0)}


def pick_primary(cta):
    prim = [c for c in cta['ctas'] if c['style'] == 'primary' and c.get('topmost') is not False]
    if not prim:
        prim = cta['ctas']
    if not prim:
        return None
    counts = Counter(c['href'] or c['text'] for c in prim)
    top = counts.most_common(1)[0][0]
    for c in prim:  # 用第一個出現（通常在首屏或導覽列）的那一個
        if (c['href'] or c['text']) == top:
            return c
    return prim[0]


def run(page, ctx, inv=None):
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    if inv is None:
        inv = inspect_visible.run(page, ctx)
    if not inv:
        C.record(ctx['site_dir'], w, 'cta', 'unavailable', '沒有 DOM 資料')
        return None
    cta = build(inv, w)
    C.write_json(os.path.join(src, f'cta-{w}.json'), cta)
    C.record(ctx['site_dir'], w, 'cta', 'ok' if cta['count'] else 'partial',
             f'{cta["count"]} 個可見 CTA' + ('' if cta['count'] else '（沒有找到，可能是 canvas 或圖片按鈕）'))
    return cta


def click(page, ctx, target):
    """點一次 Primary CTA。最後才做，因為可能換頁。"""
    w = ctx['viewport']
    shots, src = C.paths_for(ctx['site_dir'])
    out = {'viewport': w, 'target': target}
    status, detail = 'unverified', ''
    if not target:
        C.record(ctx['site_dir'], w, 'cta_click', 'na', '頁面上沒有可見的 CTA')
        return None
    el = C.resolve(page, target['selector'])
    if el is None:
        C.record(ctx['site_dir'], w, 'cta_click', 'unverified', f'找不到可見的「{target.get("text")}」')
        return None
    before_url = page.url
    dialogs_before = C.evaluate(page, DIALOG_JS, default=0)
    try:
        el.scroll_into_view_if_needed(timeout=5000)
    except Exception:
        pass
    try:
        with page.context.expect_page(timeout=4000) as np:
            if ctx.get('low_fps'):  # 主執行緒很忙時原生點擊可能卡住：改用頁面內 click()
                el.evaluate('e => e.click()')
                out['method'] = 'js-click'
            else:
                el.click(timeout=C.BUDGET['click'] * 1000)
        newp = np.value
        try:
            newp.wait_for_load_state('domcontentloaded', timeout=15000)
        except Exception:
            pass
        out.update(result='new_tab', url=newp.url)
        status, detail = 'ok', f'開新分頁：{newp.url}'
        newp.close()
    except Exception as e:
        if 'Timeout' not in str(e) and 'timeout' not in str(e):
            out.update(result='error', error=C.first_line(e))
            status, detail = 'unverified', f'點擊失敗：{C.first_line(e, 100)}'
        else:
            page.wait_for_timeout(2500)
            if page.url != before_url:
                out.update(result='navigated', url=page.url)
                status, detail = 'ok', f'同分頁換頁：{page.url}'
            elif C.evaluate(page, DIALOG_JS, default=0) > (dialogs_before or 0):
                out.update(result='dialog')
                status, detail = 'ok', '出現對話框'
            else:
                out.update(result='no_observable_change', url=page.url)
                status, detail = 'unverified', '點擊後 2.5 秒內沒有可觀察的變化（可能有轉場或要更久）'
    if out.get('result') in ('navigated', 'dialog'):
        C.inject(page)
        out['fields'] = C.evaluate(page, FIELDS_JS, default=[])
        C.shot(page, os.path.join(shots, f'int{w}-cta-click.png'))
    C.write_json(os.path.join(src, f'click-{w}.json'), out)
    C.record(ctx['site_dir'], w, 'cta_click', status, detail)
    return out


def main():
    p = C.standalone_args(argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter))
    p.add_argument('--click', action='store_true')
    p.add_argument('--cta', help='要點的 CTA：selector 資訊 JSON（cta-<寬度>.json 裡的 selector）')
    o = p.parse_args()
    deadline = C.Deadline(o.budget or 120)
    with C.open_page(o.url, o.viewport, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            C.record(o.site_dir, o.viewport, 'cta', 'unavailable', f'載入失敗：{nav.get("error")}')
            print(f'無法載入：{nav.get("error")}')
            sys.exit(1)
        C.settle(page)
        ctx = {'viewport': o.viewport, 'site_dir': o.site_dir, 'deadline': deadline}
        cta = run(page, ctx)
        if cta:
            print(f'可見 CTA：{cta["count"]}；依文字：{json.dumps(cta["by_text"], ensure_ascii=False)}')
        if o.click and cta is not None:
            target = {'selector': json.loads(o.cta), 'text': '(指定)'} if o.cta else pick_primary(cta)
            r = click(page, ctx, target)
            if r:
                print(f'點擊結果：{r.get("result")} {r.get("url", "")}')


if __name__ == '__main__':
    main()
