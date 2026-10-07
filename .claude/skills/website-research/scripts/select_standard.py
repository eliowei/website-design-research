#!/usr/bin/env python3
"""Standard Candidate Pipeline：從 N 個 Daily 選 K 個 Standard（預設 Daily × 10 → Standard × 3）。

  Daily × N
  → Research Value 排序（8 項 × 0–2 分，滿分 16；研究者判斷）
  → Standard Candidate Pool（Value 前 2K 名；Research Environment Failure 的網站不進池）
  → Feasibility Preflight（池裡每一站都要有 source/preflight.json，同一套 preflight.py；缺了就是 Pipeline Error）
  → Research Value × Feasibility 綜合判斷
  → 選 K 個 Standard，並給出量測順序、範圍、時間上限與「不可驗證項目」

判斷規則（references/capture-reliability.md §5）：
  1. Blocked 不選。
  2. 先從可量測（High／Medium）候選中依 Value 選；同分時 High 優先。
  3. 例外：Low 的網站 Value ≥ 12，且比第 K 名可量測候選高 3 分以上 → 可以佔 1 個名額（最多 1 個）。
  4. 可量測候選不足 K 個時，Low 候選依 Value 補位（每一站都縮小範圍），不讓名額空著。
  5. 所有 Low 入選者：scope=reduced、量測上限 480 秒、排在最後量測、列出不可驗證項目；
     它們失敗或逾時不影響其他 Standard（run_standard.py 本來就逐站、逐寬度隔離）。
  6. preflight 量測時研究環境有負載（load_affected：其他 preflight 同時在量、CPU 負載高）→ 選站表標「⚠ 負載下量測」，
     並列出警告建議 serial 重測（Research Environment Load ≠ Website Performance）。preflight 預設就是 serial。

用法：
  python select_standard.py candidates.json --research-dir research [--k 3] [--pool 6] [--json] [--markdown]

candidates.json：
  [{"domain": "brilean.com", "url": "https://www.brilean.com/",
    "value": {"visual": 1, "ux": 2, "motion": 1, "responsive": 2, "business": 2, "brand": 1, "uncertainty": 2, "learning": 2},
    "environment_failure": false}, ...]

結束碼：0 正常；1 Pipeline Error（候選池有網站沒做 preflight、資料格式錯誤）。
"""
import argparse
import json
import os
import sys

VALUE_KEYS = ('visual', 'ux', 'motion', 'responsive', 'business', 'brand', 'uncertainty', 'learning')
VALUE_LABEL = {'visual': 'Visual', 'ux': 'UX', 'motion': 'Motion', 'responsive': 'Responsive', 'business': 'Business',
               'brand': 'Brand', 'uncertainty': 'Daily 不確定', 'learning': 'Learning'}
FEAS_RANK = {'High': 0, 'Medium': 1, 'Low': 2, 'Blocked': 3}
EXCEPTION_MIN_VALUE = 12
EXCEPTION_MARGIN = 3
REDUCED_BUDGET = 480
FULL_BUDGET = 720

# preflight 理由 → 這次可能無法驗證的項目（寫進 notes.md 開頭與總覽）
UNVERIFIABLE = [
    ('canvas', '大面積 canvas 裡的內容（DOM／CSS 量不到，只能看截圖）'),
    ('fps', '動態時間軸與原生 hover／捲動回饋（低幀率，改用合成事件，結果標 fallback）'),
    ('無法捲動', '首屏以下的版面、動態與響應式（只有首屏證據）'),
    ('scrollTo', '捲動驅動的動態（只能用 scrollTo 捲動，捲動中的狀態可能拍不到）'),
    ('手機', '手機版（390）證據'),
    ('首屏', '首屏以外的分段截圖（載入慢，截圖張數會減少）'),
    ('逾時', '部分能力（反覆逾時，量測可能被強制中止）'),
    ('DOM 幾乎是空的', 'DOM 結構與 CTA 清單'),
]


def value_total(c):
    v = c.get('value') or {}
    missing = [k for k in VALUE_KEYS if k not in v]
    if missing:
        raise ValueError(f'{c.get("domain")} 缺少 Research Value 項目：{", ".join(missing)}')
    bad = [k for k in VALUE_KEYS if v[k] not in (0, 1, 2)]
    if bad:
        raise ValueError(f'{c.get("domain")} 的 Research Value 必須是 0–2：{", ".join(bad)}')
    return sum(v[k] for k in VALUE_KEYS)


def unverifiable_items(reasons):
    out = []
    for kw, item in UNVERIFIABLE:
        if any(kw in r for r in reasons) and item not in out:
            out.append(item)
    return out


def load_preflight(research_dir, domain):
    p = os.path.join(research_dir, domain, 'source', 'preflight.json')
    if not os.path.exists(p):
        return None
    with open(p, encoding='utf-8') as f:
        return json.load(f)


def select(cands, research_dir, k=3, pool_size=None, preflights=None):
    """回傳 dict：pool、selected、rows、errors。preflights 可直接給（測試用），否則讀 research_dir。"""
    pool_size = pool_size or 2 * k
    errors = []
    rows = []
    for c in cands:
        try:
            c['_value'] = value_total(c)
        except ValueError as e:
            errors.append(str(e))
            c['_value'] = -1
    eligible = [c for c in cands if not c.get('environment_failure')]
    for c in cands:
        if c.get('environment_failure'):
            rows.append({'domain': c['domain'], 'value': c['_value'], 'feasibility': '—', 'in_pool': False,
                         'selected': False, 'why': 'Research Environment Failure：沒有取得網站內容，不進候選池'})
    ranked = sorted(eligible, key=lambda c: -c['_value'])
    pool = ranked[:pool_size]
    for c in ranked[pool_size:]:
        rows.append({'domain': c['domain'], 'value': c['_value'], 'feasibility': '未預檢（不在候選池）', 'in_pool': False,
                     'selected': False, 'why': f'Value {c["_value"]}，不在前 {pool_size} 名候選池'})
    # 候選池裡每一站都必須有同一套 preflight
    for c in pool:
        pre = (preflights or {}).get(c['domain']) if preflights is not None else load_preflight(research_dir, c['domain'])
        if not pre or pre.get('feasibility') not in FEAS_RANK:
            errors.append(f'Pipeline Error：候選池的 {c["domain"]} 沒有 Feasibility Preflight 結果'
                          f'（先跑 preflight.py {c.get("url", "<url>")} research/{c["domain"]}）')
            c['_feas'], c['_reasons'] = None, []
        else:
            c['_feas'], c['_reasons'] = pre['feasibility'], pre.get('reasons', [])
            c['_load'] = bool(pre.get('load_affected') or (pre.get('concurrency') or {}).get('load_affected'))
            if 'concurrency' not in pre:
                c['_load_unknown'] = True
            if pre.get('environment_failure'):
                c['_feas'] = 'Blocked'
    if errors:
        return {'errors': errors, 'rows': rows, 'selected': [], 'pool': [c['domain'] for c in pool]}

    measurable = sorted([c for c in pool if c['_feas'] in ('High', 'Medium')],
                        key=lambda c: (-c['_value'], FEAS_RANK[c['_feas']]))
    low = sorted([c for c in pool if c['_feas'] == 'Low'], key=lambda c: -c['_value'])
    selected = measurable[:k]
    notes = {}
    kth = selected[-1]['_value'] if len(selected) == k else None
    # 例外：高 Value＋Low 可以佔 1 個名額（取代第 K 名可量測候選）
    if low and kth is not None:
        top_low = low[0]
        if top_low['_value'] >= EXCEPTION_MIN_VALUE and top_low['_value'] >= kth + EXCEPTION_MARGIN:
            dropped = selected.pop()
            selected.append(top_low)
            notes[top_low['domain']] = (f'例外：Low 但 Value {top_low["_value"]} ≥ {EXCEPTION_MIN_VALUE}，'
                                        f'且比第 {k} 名可量測候選（{dropped["domain"]}，{dropped["_value"]}）高 {EXCEPTION_MARGIN} 分以上')
            notes[dropped['domain']] = f'被高 Value 的低可量測網站 {top_low["domain"]} 取代名額（例外規則，最多 1 個）'
    # 可量測不足 K 個：Low 依 Value 補位（不讓名額空著，也不阻塞）
    if len(selected) < k:
        for c in low:
            if c in selected:
                continue
            selected.append(c)
            notes[c['domain']] = f'可量測候選不足 {k} 個，Low 依 Value 補位（縮小範圍）'
            if len(selected) >= k:
                break
    # 量測順序：可量測的先量，Low 排最後
    selected.sort(key=lambda c: (c['_feas'] == 'Low', -c['_value']))
    plan = []
    for i, c in enumerate(selected, 1):
        reduced = c['_feas'] == 'Low'
        plan.append({'order': i, 'domain': c['domain'], 'url': c.get('url'), 'value': c['_value'], 'feasibility': c['_feas'],
                     'scope': 'reduced' if reduced else 'full', 'budget': REDUCED_BUDGET if reduced else FULL_BUDGET,
                     'unverifiable': unverifiable_items(c['_reasons']) if reduced else [],
                     'note': notes.get(c['domain'], '')})
    sel_domains = {c['domain'] for c in selected}
    for c in pool:
        if c['domain'] in sel_domains:
            why = notes.get(c['domain']) or f'Value {c["_value"]}、{c["_feas"]}：可量測候選中排名在前'
        elif c['_feas'] == 'Blocked':
            why = 'Blocked：' + '；'.join(c['_reasons'][:2])
        elif c['_feas'] == 'Low':
            why = (f'Low（{"；".join(c["_reasons"][:2])}），Value {c["_value"]} 未達例外條件'
                   f'（≥ {EXCEPTION_MIN_VALUE} 且比第 {k} 名可量測候選高 {EXCEPTION_MARGIN} 分）')
        else:
            why = notes.get(c['domain']) or f'Value {c["_value"]} 排在入選者之後'
        rows.append({'domain': c['domain'], 'value': c['_value'], 'value_detail': c.get('value'), 'feasibility': c['_feas'],
                     'in_pool': True, 'selected': c['domain'] in sel_domains, 'why': why, 'load_affected': c.get('_load', False)})
    rows.sort(key=lambda r: (-r['selected'], -r['in_pool'], -r['value']))
    # Research Environment Load ≠ Website Performance：preflight 量測時環境有負載 → 標記並建議 serial 重測
    warnings = [f'{c["domain"]}：preflight 量測時研究環境有負載（load_affected），fps／首屏時間可能偏低；'
                f'Feasibility {c["_feas"]} 可能偏保守，建議 serial 重跑 preflight.py' for c in pool if c.get('_load')]
    warnings += [f'{c["domain"]}：preflight 沒有記錄 concurrency（舊版 preflight），無法確認量測時的研究環境負載'
                 for c in pool if c.get('_load_unknown')]
    return {'errors': [], 'rows': rows, 'selected': plan, 'pool': [c['domain'] for c in pool], 'warnings': warnings}


def markdown(res, cands):
    by = {c['domain']: c for c in cands}
    head = '| 網站 | ' + ' | '.join(VALUE_LABEL[k] for k in VALUE_KEYS) + ' | **Value /16** | Feasibility | 是否入選 | 理由 |'
    lines = [head, '|' + ' --- |' * (len(VALUE_KEYS) + 5)]
    for r in res['rows']:
        v = (by.get(r['domain']) or {}).get('value') or {}
        cells = ' | '.join(str(v.get(k, '—')) for k in VALUE_KEYS)
        mark = '✅' if r['selected'] else '—'
        feas = r['feasibility'] + ('（⚠ 負載下量測）' if r.get('load_affected') else '')
        lines.append(f'| {r["domain"]} | {cells} | **{r["value"]}** | {feas} | {mark} | {r["why"]} |')
    lines += ['', '**量測順序**（Low 一律排最後、縮小範圍，不阻塞其他網站）：']
    for p in res['selected']:
        extra = f'；不可驗證：{"、".join(p["unverifiable"])}' if p['unverifiable'] else ''
        lines.append(f'{p["order"]}. {p["domain"]}（{p["feasibility"]}，scope {p["scope"]}，上限 {p["budget"]} 秒{extra}）')
    if res.get('warnings'):
        lines += ['', '**Preflight 量測環境警告**（Research Environment Load ≠ Website Performance）：']
        lines += [f'- {w}' for w in res['warnings']]
    return '\n'.join(lines)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('candidates')
    ap.add_argument('--research-dir', default='research')
    ap.add_argument('--k', type=int, default=3, help='要選的 Standard 數（預設 3）')
    ap.add_argument('--pool', type=int, help='候選池大小（預設 2K）')
    ap.add_argument('--json', action='store_true')
    ap.add_argument('--markdown', action='store_true')
    o = ap.parse_args()
    cands = json.load(open(o.candidates, encoding='utf-8'))
    res = select(cands, o.research_dir, o.k, o.pool)
    if res['errors']:
        for e in res['errors']:
            print(e, file=sys.stderr)
        sys.exit(1)
    for w in res.get('warnings', []):
        print('警告：' + w, file=sys.stderr)
    if o.json:
        print(json.dumps(res, ensure_ascii=False, indent=1))
    else:
        print(markdown(res, cands))


if __name__ == '__main__':
    main()
