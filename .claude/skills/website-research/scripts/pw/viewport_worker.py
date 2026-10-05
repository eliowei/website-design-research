#!/usr/bin/env python3
"""（內部用）在一個瀏覽器頁面裡跑完一個寬度的所有量測。由 run_standard.py 以子行程呼叫並負責硬性逾時。

python viewport_worker.py <url> <網站資料夾> --viewport 1440 --budget 300 --scope full|reduced

順序：載入 → 首屏 → 分段捲動 → 可見元素／DOM／CSS → CTA 清單 → 版面快照 →（1440）hover、focus
→ 選單 →（1440）點一次 Primary CTA（可能換頁，所以最後做）。
每一步都包在 try 裡：失敗就記成 unavailable／unverified，然後繼續下一步。
"""
import argparse
import os
import sys
import traceback

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402
import capture_page  # noqa: E402
import scroll_page  # noqa: E402
import inspect_visible  # noqa: E402
import measure_cta  # noqa: E402
import measure_hover  # noqa: E402
import measure_focus  # noqa: E402
import measure_responsive  # noqa: E402

CAPS_ALL = ('screenshot', 'scroll', 'dom', 'css', 'cta', 'menu')
CAPS_1440 = ('hover', 'focus', 'cta_click')


def expected_caps(w):
    return CAPS_ALL + (CAPS_1440 if w == 1440 else ())


def mark_all(site, w, status, detail):
    for cap in expected_caps(w):
        C.record(site, w, cap, status, detail)


def step(site, w, cap, fn, *a, **kw):
    try:
        return fn(*a, **kw)
    except Exception as e:
        C.record(site, w, cap, 'unavailable', f'執行錯誤：{C.first_line(e, 120)}')
        C.wr_status.event(site, f'{w} {cap} 錯誤：{traceback.format_exc(limit=2)[-300:]}')
        return None


def main():
    p = argparse.ArgumentParser()
    p.add_argument('url')
    p.add_argument('site_dir')
    p.add_argument('--viewport', type=int, required=True)
    p.add_argument('--budget', type=int, required=True)
    p.add_argument('--scope', choices=('full', 'reduced'), default='full')
    p.add_argument('--gpu', default='swiftshader')
    o = p.parse_args()
    w, site = o.viewport, o.site_dir
    deadline = C.Deadline(o.budget)
    reduced = o.scope == 'reduced'
    with C.open_page(o.url, w, deadline, o.gpu) as (page, nav):
        if not nav['ok']:
            mark_all(site, w, 'unavailable', f'載入失敗（{nav.get("attempts")} 次）：{nav.get("error")}')
            print(f'{w}: 載入失敗 {nav.get("error")}')
            sys.exit(2)
        ctx = {'viewport': w, 'site_dir': site, 'deadline': deadline}
        cap = step(site, w, 'screenshot', capture_page.run, page, ctx, nav)
        if cap:  # 先記下首屏結果：之後就算被強制中止，首屏證據仍然算數
            C.record(site, w, 'screenshot', 'partial' if cap['hero']['status'] != 'unavailable' else 'unavailable',
                     f'首屏 {cap["hero"]["status"]}；分段截圖尚未完成')
        # 先盤點 DOM／CSS／CTA：便宜又重要，不要讓很慢的捲動截圖把它們擠掉
        inv = step(site, w, 'dom', inspect_visible.run, page, ctx) if deadline.ok(15) else None
        cta = step(site, w, 'cta', measure_cta.run, page, ctx, inv) if inv else None
        max_shots = {1440: 10, 390: 8, 768: 4}[w] if not reduced else {1440: 6, 390: 4, 768: 2}[w]
        seg = None
        if deadline.ok(40):
            seg = step(site, w, 'scroll', scroll_page.run, page, ctx, max_shots=max_shots)
        else:
            C.record(site, w, 'scroll', 'skipped', '時間預算不足')
        segj = C.read_json(os.path.join(site, 'source', 'pw', f'segments-{w}.json')) or {}
        ctx['low_fps'] = segj.get('fps') is not None and segj['fps'] < scroll_page.LOW_FPS
        states = ([cap['hero']['status']] if cap else []) + ((seg or {}).get('shot_states') or [])
        if not states or all(s == 'unavailable' for s in states):
            C.record(site, w, 'screenshot', 'unavailable', '首屏與分段截圖都失敗')
        elif all(s == 'ok' for s in states):
            C.record(site, w, 'screenshot', 'ok', f'{len(states)} 張')
        elif 'unavailable' in states:
            C.record(site, w, 'screenshot', 'partial', f'{states.count("unavailable")}/{len(states)} 張失敗')
        else:
            C.record(site, w, 'screenshot', 'fallback', f'{states.count("fallback")} 張改用 CDP 擷取')
        if deadline.ok(30) and seg:  # 捲動後再盤點一次：把捲動時才出現的元素（seen）也算進來
            inv2 = step(site, w, 'dom', inspect_visible.run, page, ctx)
            if inv2:
                inv = inv2
                cta = step(site, w, 'cta', measure_cta.run, page, ctx, inv) or cta
        if inv is None:
            for c in ('dom', 'css'):
                if not C.wr_status.get_capability(C.wr_status.load(site), w, c):
                    C.record(site, w, c, 'skipped', '時間預算不足')
            C.record(site, w, 'cta', 'unavailable', '沒有 DOM 資料')
        step(site, w, 'menu', measure_responsive.run, page, ctx, False)
        if w == 1440:
            if deadline.ok(40):
                targets = measure_hover.default_targets(cta, inv, 3 if reduced else 6)
                step(site, w, 'hover', measure_hover.run, page, ctx, targets)
            else:
                C.record(site, w, 'hover', 'skipped', '時間預算不足')
            if deadline.ok(25):
                step(site, w, 'focus', measure_focus.run, page, ctx, 6 if reduced else 8)
            else:
                C.record(site, w, 'focus', 'skipped', '時間預算不足')
        if deadline.ok(20):
            step(site, w, 'menu', measure_responsive.run, page, ctx, True)
        else:
            C.record(site, w, 'menu', 'skipped', '時間預算不足')
        if w == 1440:
            if cta is not None and deadline.ok(25):
                step(site, w, 'cta_click', measure_cta.click, page, ctx, measure_cta.pick_primary(cta))
            else:
                C.record(site, w, 'cta_click', 'skipped' if cta is not None else 'unavailable',
                         '時間預算不足' if cta is not None else '沒有 CTA 清單')
    print(f'{w}: 完成，剩餘 {deadline.left():.0f} 秒')


if __name__ == '__main__':
    main()
