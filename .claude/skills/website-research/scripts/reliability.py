#!/usr/bin/env python3
"""Research Reliability：這次研究「取得證據」的可靠程度。

它不是網站設計的評分，也不代表網站好不好；只代表這次研究環境拿到的資料有多完整。
單一結論有多確定，仍然看那個結論自己的證據（見 references/capture-reliability.md §8）。

用法：
  python reliability.py <網站資料夾> --mode daily|standard|deep [--markdown] [--write]
                        [--override responsive=C --reason "理由"]

讀 <網站資料夾>/source/capture-status.json（quality_check.py 與 scripts/pw/ 的工具寫入），算出：
  Capture      主要內容（桌機）擷取的完整度：Final Capture Quality（證據集合：Initial＋Fallback，
               見 quality_check.py final；不是最後一次擷取的等級）
  Interaction  hover、focus、CTA 點擊、選單是否實測到（Daily 不量測：N/A）
  Responsive   桌機／平板／手機的證據是否都拿到
  DOM/CSS      三個寬度的 DOM 與 computed style 是否拿到（Daily 不量測：N/A）
  Overall      在範圍內的面向取中位數（偶數個時取較差的那個），而且
               Capture 是 D 時 Overall 一定是 D；Overall 最多只能比 Capture 好一級

等級：A — Reliable、B — Mostly reliable、C — Partially reliable、D — Limited / insufficient
"""
import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wr_status  # noqa: E402

ORDER = 'ABCD'
NAMES = {'A': 'Reliable', 'B': 'Mostly reliable', 'C': 'Partially reliable', 'D': 'Limited / insufficient'}
SCORE = {'ok': 1.0, 'fallback': 0.75, 'partial': 0.5, 'unverified': 0.0, 'unavailable': 0.0, 'skipped': 0.0}
INTERACTION_CAPS = ('hover', 'focus', 'cta_click', 'menu')
DOM_CAPS = ('dom', 'css')
VIEWPORTS = ('1440', '768', '390')
CAP_LABEL = {'screenshot': '截圖', 'scroll': '捲動', 'dom': 'DOM', 'css': 'CSS', 'cta': 'CTA 清單',
             'hover': 'Hover', 'focus': 'Focus', 'cta_click': 'CTA 點擊', 'menu': '選單'}


def best(grades):
    g = [x for x in grades if x in ORDER]
    return min(g, key=ORDER.index) if g else None


def worse(*grades):
    g = [x for x in grades if x in ORDER]
    return max(g, key=ORDER.index) if g else None


def ratio_grade(r):
    if r >= 0.9:
        return 'A'
    if r >= 0.6:
        return 'B'
    if r >= 0.3:
        return 'C'
    return 'D'


def device_of(key):
    for dev in ('desktop', 'tablet', 'mobile'):
        if key.endswith(dev):
            return dev
    return 'other'


def capture_grades(d):
    out = {'desktop': [], 'tablet': [], 'mobile': [], 'other': []}
    for k, v in d.get('captures', {}).items():
        out[device_of(k)].append(v.get('grade'))
    return out


def cap_status(d, vp, name):
    return d.get('capabilities', {}).get(vp, {}).get(name, {}).get('status')


def compute(d, mode, site_dir=None):
    # Capture 用證據集合判定的 Final Capture Quality（Initial＋Fallback），不是最後一次擷取
    import quality_check
    fin = quality_check.final_capture(d, site_dir)
    status = quality_check.research_status(fin)
    notes = []
    capture = fin.get('desktop', {}).get('grade')
    if capture is None:
        capture = best([fin[k]['grade'] for k in ('other', 'mobile', 'tablet') if k in fin])
        notes.append('沒有桌機擷取紀錄' + ('，Capture 改用其他寬度' if capture else ''))
    capture = capture or 'D'
    mobile_best = fin.get('mobile', {}).get('grade')
    if status == 'environment-failure':
        notes.append('Research Environment Failure：主要內容只取得被拒絕的頁面（例如 browser unsupported）')

    if mode == 'daily':
        responsive = worse(capture, mobile_best) if mobile_best else 'D'
        if not mobile_best:
            notes.append('沒有手機擷取紀錄')
        interaction = 'N/A'
        domcss = 'N/A'
    else:
        def vp_credit(vp):
            shot = SCORE.get(cap_status(d, vp, 'screenshot'), 0.0)
            scroll = cap_status(d, vp, 'scroll')
            if shot >= 0.75 and scroll in ('unavailable', None):
                return 0.5
            return shot
        c = {vp: vp_credit(vp) for vp in VIEWPORTS}
        if c['1440'] >= 0.75 and c['390'] >= 0.75 and c['768'] >= 0.75:
            responsive = 'A'
        elif c['1440'] >= 0.75 and c['390'] >= 0.75:
            responsive = 'B'
        elif c['390'] >= 0.5 or mobile_best in ('A', 'B'):
            responsive = 'C'
        else:
            responsive = 'D'
        vals = []
        for name in INTERACTION_CAPS:
            sts = [cap_status(d, vp, name) for vp in VIEWPORTS]
            sts = [s for s in sts if s]
            if not sts or all(s == 'na' for s in sts):
                continue
            vals.append(max(SCORE.get(s, 0.0) for s in sts if s != 'na'))
        interaction = ratio_grade(sum(vals) / len(vals)) if vals else 'D'
        if not vals:
            notes.append('沒有任何互動量測紀錄')
        dv = [SCORE.get(cap_status(d, vp, n), 0.0) for vp in VIEWPORTS for n in DOM_CAPS]
        domcss = ratio_grade(sum(dv) / len(dv))

    dims = {'capture': capture, 'interaction': interaction, 'responsive': responsive, 'domcss': domcss}
    overrides = d.get('reliability_overrides', {})
    for k, v in overrides.items():
        if k in dims:
            dims[k] = v['grade']
    in_scope = [g for g in dims.values() if g in ORDER]
    s = sorted(in_scope, key=ORDER.index)
    n = len(s)
    overall = s[n // 2] if n % 2 else worse(s[n // 2 - 1], s[n // 2])
    cap = dims['capture']
    if cap == 'D':
        overall = 'D'
    elif ORDER.index(overall) < ORDER.index(cap) - 1:
        overall = ORDER[ORDER.index(cap) - 1]
    weakest = [k for k, g in dims.items() if g == worse(*in_scope)]
    if status == 'environment-failure':
        overall = 'D'
    return {'mode': mode, **dims, 'overall': overall, 'weakest': weakest, 'notes': notes,
            'overrides': overrides, 'research_status': status,
            'final_capture': {k: {x: v.get(x) for x in ('initial', 'fallback', 'grade', 'basis', 'status')} for k, v in fin.items()}}


LABEL = {'capture': 'Capture', 'interaction': 'Interaction', 'responsive': 'Responsive', 'domcss': 'DOM/CSS'}


def markdown(r, d):
    def show(k):
        g = r[k]
        return f'{LABEL[k]} {g}' if g in ORDER else f'{LABEL[k]} —（Daily 不量測）'
    prefix = '**研究環境失敗（Research Environment Failure）**：擷取到的是網站拒絕研究環境的頁面，不是網站內容。\n' \
        if r.get('research_status') == 'environment-failure' else ''
    line = prefix + ('**研究可靠度**：' + '｜'.join(show(k) for k in ('capture', 'interaction', 'responsive', 'domcss'))
            + f'｜**Overall {r["overall"]}**（證據取得的可靠度，不是網站設計的好壞）')
    if r['mode'] == 'daily':
        return line
    rows = ['', '| 能力 | 1440 | 768 | 390 |', '| --- | --- | --- | --- |']
    for name in ('screenshot', 'scroll', 'dom', 'css', 'cta', 'hover', 'focus', 'cta_click', 'menu'):
        cells = [cap_status(d, vp, name) or '—' for vp in VIEWPORTS]
        if all(c == '—' for c in cells):
            continue
        rows.append(f'| {CAP_LABEL[name]} | ' + ' | '.join(cells) + ' |')
    return line + '\n' + '\n'.join(rows)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('site_dir')
    p.add_argument('--mode', choices=('daily', 'standard', 'deep'), required=True)
    p.add_argument('--markdown', action='store_true', help='印出可以貼進報告的區塊')
    p.add_argument('--write', action='store_true', help='把結果寫回 capture-status.json')
    p.add_argument('--override', action='append', default=[], metavar='面向=等級',
                   help='研究者覆寫某個面向，例如 responsive=C；一定要配 --reason')
    p.add_argument('--reason')
    o = p.parse_args()
    d = wr_status.load(o.site_dir)
    if o.override:
        if not o.reason:
            p.error('--override 一定要寫 --reason')
        ov = d.setdefault('reliability_overrides', {})
        for item in o.override:
            k, _, g = item.partition('=')
            k = {'dom/css': 'domcss', 'dom': 'domcss'}.get(k.lower(), k.lower())
            if k not in LABEL or g not in ORDER:
                p.error(f'無法解析 {item}')
            ov[k] = {'grade': g, 'reason': o.reason}
        wr_status.save(o.site_dir, d)
    r = compute(d, o.mode, o.site_dir)
    if o.write:
        wr_status.set_key(o.site_dir, 'reliability', r)
    if o.markdown:
        print(markdown(r, d))
    else:
        print(json.dumps(r, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()
