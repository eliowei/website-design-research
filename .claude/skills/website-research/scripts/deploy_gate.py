#!/usr/bin/env python3
"""Deployment Gate：發佈研究網站之前的最後一道關卡。任何一站沒通過就不發佈。

  Research → Package → Validate references → Validate image limit → PASS → Deploy
                                                                    → FAIL → Stop / Repair

用法：
  python deploy_gate.py --research research --assets <打包資料夾> [--day <day.json>] [網域 ...]
      沒有列網域時，用 day 檔裡的所有報告（--day 必填）。

每一站依序檢查（references/capture-reliability.md §9）：
  1. Package           <打包資料夾>/<網域>/manifest.json 存在（pack_assets.py 以 Pipeline Error 結束時不會留下 manifest）
  2. References        報告引用的每張截圖、每個 source/ 檔案都存在（validate_refs.py <網站資料夾>）
  3. Image limit       打包張數與報告引用張數都 ≤ 24（硬上限，不能提高；超過要減少重複引用後重新打包）
  4. Packed            報告引用的截圖都在 manifest 裡（validate_refs.py --manifest）
  5. Uploaded（--day） day 檔裡這一站的每個引用都有上傳網址（validate_refs.py --day --domain）

結束碼：0 全部 PASS（可以發佈）；1 任何一站 FAIL（Pipeline Error：不要發佈，修正後重跑）。
不要用提高上限、刪除被引用的圖、或略過這個檢查的方式讓部署通過。
"""
import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from validate_refs import check, HARD_MAX  # noqa: E402


def gate(site_dir, manifest, day=None, domain=None):
    """回傳 (ok, steps)。steps：[(名稱, ok, 說明)]；第一個失敗的步驟之後不再往下檢查。"""
    steps = []
    if not os.path.exists(manifest):
        steps.append(('Package', False, f'manifest 不存在：{manifest}（打包失敗或還沒打包）'))
        return False, steps
    steps.append(('Package', True, ''))
    errs, refs = check(site_dir)
    steps.append(('References', not errs, '；'.join(errs[:3])))
    if errs:
        return False, steps
    man = json.load(open(manifest, encoding='utf-8'))
    n_img = len(man.get('images', []))
    n_ref = sum(1 for k in refs if k.startswith('screenshots/'))
    lim_ok = n_img <= HARD_MAX and n_ref <= HARD_MAX
    steps.append(('Image limit', lim_ok, f'打包 {n_img} 張、引用 {n_ref} 張（上限 {HARD_MAX}）'))
    if not lim_ok:
        return False, steps
    errs, _ = check(site_dir, manifest=manifest)
    steps.append(('Packed', not errs, '；'.join(errs[:3])))
    if errs:
        return False, steps
    if day:
        errs, _ = check(site_dir, day=day, domain=domain)
        steps.append(('Uploaded', not errs, '；'.join(errs[:3])))
        if errs:
            return False, steps
    return True, steps


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('domains', nargs='*')
    p.add_argument('--research', default='research', help='研究資料夾（裡面是 <網域>/）')
    p.add_argument('--assets', required=True, help='pack_assets.py 的輸出資料夾（裡面是 <網域>/manifest.json）')
    p.add_argument('--day', help='要發佈的 day 檔（attach_assets.py 已寫入上傳網址）')
    p.add_argument('--json', action='store_true')
    o = p.parse_args()
    domains = o.domains
    if not domains:
        if not o.day:
            p.error('沒有列網域時需要 --day（用 day 檔裡的所有報告）')
        domains = list(json.load(open(o.day, encoding='utf-8')).get('reports', {}).keys())
    results = {}
    for d in domains:
        ok, steps = gate(os.path.join(o.research, d), os.path.join(o.assets, d, 'manifest.json'), o.day, d)
        results[d] = {'ok': ok, 'steps': [{'step': s, 'ok': k, 'detail': x} for s, k, x in steps]}
    all_ok = all(r['ok'] for r in results.values()) and bool(results)
    if o.json:
        print(json.dumps({'pass': all_ok, 'sites': results}, ensure_ascii=False, indent=1))
    else:
        print('| 網站 | Package | References | Image limit | Packed | Uploaded | 結果 |')
        print('| --- | --- | --- | --- | --- | --- | --- |')
        for d, r in results.items():
            st = {s['step']: s for s in r['steps']}
            cell = lambda n: ('✓' if st[n]['ok'] else '✗ ' + st[n]['detail']) if n in st else '—'  # noqa: E731
            print(f'| {d} | {cell("Package")} | {cell("References")} | {cell("Image limit")} | {cell("Packed")} | '
                  f'{cell("Uploaded")} | {"PASS" if r["ok"] else "FAIL"} |')
    if not all_ok:
        print('Pipeline Error：Deployment Gate 未通過 → 不要發佈。修正報告引用或重新打包後再跑一次'
              '（不要提高上限、不要刪除被引用的圖、不要略過檢查）。', file=sys.stderr)
        sys.exit(1)
    if not o.json:
        print('Deployment Gate：PASS → 可以發佈')


if __name__ == '__main__':
    main()
