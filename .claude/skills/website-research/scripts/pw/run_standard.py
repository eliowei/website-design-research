#!/usr/bin/env python3
"""Standard 量測的進入點：依序量 1440 → 390 → 768，每個寬度一個子行程、各自有時間上限。

用法：
  python run_standard.py <url> <網站資料夾> [--budget 720] [--viewports 1440,390,768]
                         [--scope auto|full|reduced] [--gpu swiftshader|default]

- 每個寬度的預算預設 1440: 300 秒、390: 240 秒、768: 150 秒，全部加總不超過 --budget（預設 720 秒）。
- 子行程超過預算＋30 秒就整組強制結束（連同 Chromium），該寬度沒記錄到的能力標成 unavailable。
- 某個寬度失敗不會中止其他寬度；剩餘預算不足 45 秒的寬度直接標成 skipped。
- --scope auto：讀 source/preflight.json，可量測性 Low 時自動縮小範圍（截圖張數減半、hover 只量 3 個、
  略過 768、整體上限 480 秒）；Blocked 直接結束（結束碼 3），不做 Standard。
- 結束時印出每個能力的狀態表與 Research Reliability，結果寫進 source/capture-status.json 與
  source/pw/run-summary.json。量測失敗不代表研究失敗：照狀態表降級寫報告即可。
"""
import argparse
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402
import measure_responsive  # noqa: E402
import viewport_worker  # noqa: E402
import reliability  # noqa: E402


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('url')
    p.add_argument('site_dir')
    p.add_argument('--budget', type=int, default=None,
                   help=f'全部寬度的時間上限（秒）；預設 full {C.BUDGET["site"]}、reduced {C.BUDGET["reduced_site"]}')
    p.add_argument('--viewports', default='1440,390,768')
    p.add_argument('--scope', choices=('auto', 'full', 'reduced'), default='auto')
    p.add_argument('--gpu', choices=('swiftshader', 'default'), default='swiftshader')
    p.add_argument('--viewport-budget', action='append', default=[], metavar='寬度=秒',
                   help='覆寫單一寬度的預算，例如 390=120')
    o = p.parse_args()
    site = o.site_dir.rstrip('/')
    os.makedirs(os.path.join(site, 'source', 'pw'), exist_ok=True)
    vb = dict(C.BUDGET['viewport'])
    for item in o.viewport_budget:
        k, _, v = item.partition('=')
        vb[int(k)] = int(v)
    scope = o.scope
    pre = C.read_json(os.path.join(site, 'source', 'preflight.json'))
    if pre and pre.get('feasibility') == 'Blocked':
        print(f'Preflight 結果是 Blocked（{"；".join(pre.get("reasons", []))}）：這次不做 Standard，保留 Daily。')
        sys.exit(3)
    if scope == 'auto':
        scope = 'reduced' if (pre and pre.get('feasibility') in ('Low',)) else 'full'
    if o.budget is None:
        o.budget = C.BUDGET['reduced_site'] if scope == 'reduced' else C.BUDGET['site']
    elif scope == 'reduced':
        o.budget = min(o.budget, C.BUDGET['reduced_site'])  # 低可量測不能拖垮其他 Standard
    viewports = [int(x) for x in o.viewports.split(',') if x]
    if scope == 'reduced' and 768 in viewports and o.viewports == '1440,390,768':
        viewports.remove(768)
        for cap in viewport_worker.expected_caps(768):
            C.record(site, 768, cap, 'skipped', '可量測性低，縮小範圍時略過平板')
    site_deadline = C.Deadline(o.budget)
    C.wr_status.event(site, f'run_standard 開始：{o.url} scope={scope} budget={o.budget}')
    runs = []
    here = os.path.dirname(os.path.abspath(__file__))
    for w in viewports:
        left = site_deadline.left()
        budget = int(min(vb.get(w, 180), left - C.BUDGET['hard_kill_grace'] - 5))
        if budget < 45:
            for cap in viewport_worker.expected_caps(w):
                C.record(site, w, cap, 'skipped', '整體時間預算用完')
            runs.append({'viewport': w, 'result': 'skipped'})
            continue
        t0 = time.monotonic()
        code, out = C.run_with_hard_timeout(
            [sys.executable, os.path.join(here, 'viewport_worker.py'), o.url, site, '--viewport', str(w),
             '--budget', str(budget), '--scope', scope, '--gpu', o.gpu],
            budget + C.BUDGET['hard_kill_grace'])
        secs = round(time.monotonic() - t0, 1)
        d = C.wr_status.load(site)
        got = d.get('capabilities', {}).get(str(w), {})
        if code is None:
            result = 'hard-timeout'
            for cap in viewport_worker.expected_caps(w):
                if cap not in got:
                    C.record(site, w, cap, 'unavailable', f'超過 {budget}+{C.BUDGET["hard_kill_grace"]} 秒，強制中止前沒有取得')
                elif got[cap].get('detail', '').startswith('進行中') or '尚未完成' in got[cap].get('detail', ''):
                    C.record(site, w, cap, 'partial', got[cap]['detail'] + '（之後被強制中止）')
        else:
            result = 'ok' if code == 0 else f'exit {code}'
            for cap in viewport_worker.expected_caps(w):
                if cap not in got:
                    C.record(site, w, cap, 'unavailable', f'子行程結束但沒有記錄（{result}）')
        runs.append({'viewport': w, 'result': result, 'seconds': secs, 'budget': budget,
                     'log': (out or '')[-600:]})
        print(f'[{w}] {result}，{secs} 秒（預算 {budget}）')
    try:
        _, table = measure_responsive.compare(site)
    except Exception as e:
        table = f'（響應式對照失敗：{C.first_line(e)}）'
    d = C.wr_status.load(site)
    rel = reliability.compute(d, 'standard')
    C.wr_status.set_key(site, 'reliability', rel)
    C.write_json(os.path.join(site, 'source', 'pw', 'run-summary.json'),
                 {'url': o.url, 'scope': scope, 'budget': o.budget, 'runs': runs, 'reliability': rel})
    print()
    print(reliability.markdown(rel, C.wr_status.load(site)))
    print()
    print(table)


if __name__ == '__main__':
    main()
