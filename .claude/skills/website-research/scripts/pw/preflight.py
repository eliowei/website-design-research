#!/usr/bin/env python3
"""Feasibility Preflight：在決定 Standard 之前，用 ≤90 秒測「這次能量到多少」。

用法：
  python preflight.py <url> <網站資料夾> [--budget 90] [--no-mobile]

它回答的是 Research Feasibility（這次的研究環境能取得多少證據），不是 Research Value（值不值得研究）。
兩者分開判斷：高價值、低可量測的網站仍然可以選，只是要縮小範圍（references/capture-reliability.md §5）。

檢查項目：
  可連線（HTTP 狀態）、首屏能否在合理時間拍到、能否捲動（wheel／觸控）、DOM 是否取得、
  樣式表能否讀取、是否大量依賴 WebGL／canvas／影片、是否有 smooth scroll／scroll hijacking 跡象、
  畫面幀率（無 GPU 時 WebGL 會很慢）、手機 viewport 能否載入、過程中的逾時次數。

輸出 source/preflight.json，並記進 capture-status.json：
  feasibility: High | Medium | Low | Blocked
  scope:       full | reduced | capture-only | none
  reasons:     判斷依據
  concurrency: 這次量測時的環境負載（mode、同時在量測的 preflight 數、每顆 CPU 的負載）
  load_affected: true → 性能相關的量測（fps、首屏時間、逾時、CDP 備援）可能被研究環境負載拖慢

Research Environment Load ≠ Website Performance：
  fps、首屏時間這類性能量測會被「同時跑的其他 Chromium」拖慢。2026-10-06 三站並行 preflight，
  fps 讀數偏低，Low 判定可能過度保守。所以：
  - 預設 serial：同一台機器上的 preflight 用檔案鎖排隊，一次只量一站（--allow-concurrent 才會並行）。
  - 量測時若有其他 preflight 同時在量，或每顆 CPU 負載 ≥ 1.0，標記 load_affected，
    性能相關的訊號只能降到 Medium（附「研究環境負載下量測」），不能單獨造成 Low；
    結構性的訊號（捲動被鎖、DOM 幾乎是空的、手機載不了）不受影響。
  - select_standard.py 會在選站表標出 load_affected 的網站，建議 serial 重測。
"""
import argparse
import json
import os
import sys
import tempfile
import time
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common as C  # noqa: E402
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from quality_check import environment_failure  # noqa: E402

PROBE_JS = r"""
() => {
  const W = window.__wr;
  const big = [...document.querySelectorAll('canvas,video')].filter(e => { const r = e.getBoundingClientRect(); return W.vis(e) && r.width * r.height > innerWidth * innerHeight * 0.25; });
  let readable = 0, blocked = 0;
  for (const sh of document.styleSheets) { try { sh.cssRules; readable++; } catch (e) { blocked++; } }
  const st = W.scrollState();
  return {url: location.href, title: document.title, textSample: document.body ? document.body.innerText.slice(0, 1500) : '',
          nodes: document.querySelectorAll('*').length, textChars: document.body ? document.body.innerText.length : 0,
          bigCanvas: big.filter(e => e.tagName === 'CANVAS').length, bigVideo: big.filter(e => e.tagName === 'VIDEO').length,
          stylesheets: {readable, blocked}, smoothLib: st.smoothLib, bodyOverflow: st.bodyOverflow, docHeight: st.docHeight,
          containers: st.containers.length};
}
"""
FPS_JS = r"""
() => new Promise(res => { let n = 0; const t0 = performance.now();
  const f = () => { n++; if (performance.now() - t0 < 1000) requestAnimationFrame(f); else res(n); };
  requestAnimationFrame(f); setTimeout(() => res(n), 2500); })
"""


def http_status(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 website-research-preflight'})
        with urllib.request.urlopen(req, timeout=15) as r:
            return r.status, None
    except urllib.error.HTTPError as e:
        return e.code, None
    except Exception as e:
        return None, C.first_line(e, 120)


def scroll_probe(page, width):
    """試捲動：wheel／觸控 →（慢的 smooth scroll 多等 1.5 秒）→ 鍵盤 → scrollTo。"""
    vh = C.VIEWPORTS[width]['height']
    import scroll_page as S
    center = (C.VIEWPORTS[width]['width'] // 2, vh // 2)
    methods = ['wheel', 'touch', 'keyboard', 'scrollTo'] if C.VIEWPORTS[width]['mobile'] else ['wheel', 'keyboard', 'scrollTo']
    for m in methods:
        st0 = C.evaluate(page, '() => window.__wr.scrollState()', default={})
        p0 = S.progress_of(st0)
        try:
            S.do_scroll(page, m, int(vh * 0.8), vh, center, p0 + int(vh * 0.8))
        except Exception:
            continue
        for wait in (800, 1500):
            page.wait_for_timeout(wait)
            st = C.evaluate(page, '() => window.__wr.scrollState()', default={})
            if S.progress_of(st) - p0 > 20:
                return {'ok': True, 'method': m, 'only_scrollTo': m == 'scrollTo'}
    return {'ok': False, 'method': None}


def child(o):
    res = {'url': o.url, 'checked_at': time.strftime('%Y-%m-%dT%H:%M:%S'), 'timeouts': 0}
    code, err = http_status(o.url)
    res['http'] = {'status': code, 'error': err}
    dl = C.Deadline(o.budget - 5)
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = C.launch(p, o.gpu)
        try:
            ctx = C.new_context(b, 1440)
            page = ctx.new_page()
            t0 = time.monotonic()
            nav = C.goto(page, o.url, dl)
            res['desktop'] = {'nav': nav}
            if nav['ok']:
                page.wait_for_timeout(3000)
                t1 = time.monotonic()
                tmp = os.path.join(o.site_dir, 'screenshots', 'pw', 'preflight-1440.png')
                s, e = C.shot(page, tmp)
                res['desktop'].update(first_screenshot={'status': s, 'error': e, 'seconds_from_nav': round(time.monotonic() - t0, 1),
                                                        'shot_seconds': round(time.monotonic() - t1, 1)})
                if s == 'unavailable' or (e and 'Timeout' in e):
                    res['timeouts'] += 1
                res['desktop']['probe'] = C.evaluate(page, PROBE_JS, default={})
                try:
                    res['desktop']['fps'] = page.evaluate(FPS_JS)
                except Exception:
                    res['desktop']['fps'] = None
                res['desktop']['scroll'] = scroll_probe(page, 1440) if dl.ok(15) else {'ok': None, 'skipped': True}
            else:
                res['timeouts'] += 1
            ctx.close()
            if not o.no_mobile and dl.ok(30):
                ctx = C.new_context(b, 390)
                page = ctx.new_page()
                mdl = C.Deadline(min(40, dl.left() - 3))
                nav = C.goto(page, o.url, mdl)
                res['mobile'] = {'nav': nav}
                if nav['ok']:
                    page.wait_for_timeout(2000)
                    s, e = C.shot(page, os.path.join(o.site_dir, 'screenshots', 'pw', 'preflight-390.png'))
                    res['mobile']['first_screenshot'] = {'status': s, 'error': e}
                    res['mobile']['scroll'] = scroll_probe(page, 390) if mdl.ok(8) else {'ok': None, 'skipped': True}
                else:
                    res['timeouts'] += 1
                ctx.close()
            elif not o.no_mobile:
                res['mobile'] = {'skipped': '預算不足'}
        finally:
            try:
                b.close()
            except Exception:
                pass
    return res


LOCK_PATH = os.path.join(tempfile.gettempdir(), 'website-research-preflight.lock')
RUNNING_DIR = os.path.join(tempfile.gettempdir(), 'website-research-preflight.running')
LOAD_PER_CPU_MAX = 1.0   # 每顆 CPU 的 1 分鐘負載 ≥ 這個值 → 性能量測可能受研究環境負載影響
LOAD_NOTE = '（研究環境負載下量測，可能偏低；不能據此判定網站效能）'


def load_per_cpu():
    try:
        return round(os.getloadavg()[0] / (os.cpu_count() or 1), 2)
    except (OSError, AttributeError):
        return None


def _alive(pid):
    if os.name == 'nt':  # Windows 的 os.kill(pid, 0) 是 CTRL_C_EVENT，會中斷對方
        import ctypes
        h = ctypes.windll.kernel32.OpenProcess(0x1000, False, pid)  # QUERY_LIMITED_INFORMATION
        if h:
            ctypes.windll.kernel32.CloseHandle(h)
        return bool(h)
    try:
        os.kill(pid, 0)
        return True
    except (OSError, ValueError):
        return False


def others_measuring():
    """其他正在量測（不是在排隊）的 preflight 數。"""
    n = 0
    try:
        for f in os.listdir(RUNNING_DIR):
            pid = int(f.split('.')[0]) if f.split('.')[0].isdigit() else -1
            if pid != os.getpid() and _alive(pid):
                n += 1
    except FileNotFoundError:
        pass
    return n


class MeasureSlot:
    """預設 serial：用檔案鎖排隊，一次只讓一個 preflight 量測（性能量測不互相干擾）。"""

    def __init__(self, serial=True, wait=900):
        self.serial, self.wait, self.fh, self.waited = serial, wait, None, 0.0

    def __enter__(self):
        t0 = time.monotonic()
        if self.serial:
            try:
                if os.name == 'nt':
                    import msvcrt
                    lock = lambda f: msvcrt.locking(f.fileno(), msvcrt.LK_NBLCK, 1)  # noqa: E731
                else:
                    import fcntl
                    lock = lambda f: fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)  # noqa: E731
                self.fh = open(LOCK_PATH, 'a+')
                while True:
                    try:
                        lock(self.fh)
                        break
                    except (BlockingIOError, PermissionError):
                        if time.monotonic() - t0 > self.wait:
                            self.serial = False  # 等太久：照樣量測，但記成 concurrent，交給 load_affected 判斷
                            break
                        time.sleep(1)
            except ImportError:  # 沒有 fcntl 的平台：無法排隊，記錄並交給 load_affected 判斷
                self.serial = False
        self.waited = round(time.monotonic() - t0, 1)
        os.makedirs(RUNNING_DIR, exist_ok=True)
        self.mark = os.path.join(RUNNING_DIR, f'{os.getpid()}.pid')
        open(self.mark, 'w').close()
        return self

    def __exit__(self, *a):
        try:
            os.remove(self.mark)
        except OSError:
            pass
        if self.fh:
            self.fh.close()


def concurrency_record(mode, waited, others, load_before, load_after):
    affected = bool(others) or any(x is not None and x >= LOAD_PER_CPU_MAX for x in (load_before, load_after))
    return {'mode': mode, 'waited_seconds': waited, 'concurrent_measurements': others,
            'load_per_cpu': load_before, 'load_per_cpu_after': load_after, 'load_affected': affected}


def grade(res):
    reasons = []
    conc = res.get('concurrency') or {}
    affected = bool(conc.get('load_affected'))
    res['load_affected'] = affected
    d = res.get('desktop') or {}
    if res.get('http', {}).get('status') in (401, 403) or not d.get('nav', {}).get('ok'):
        why = d.get('nav', {}).get('error') or f'HTTP {res.get("http", {}).get("status")}'
        return 'Blocked', 'none', [f'無法載入桌機頁面：{why}']
    pr0 = d.get('probe') or {}
    env = environment_failure(pr0.get('url'), pr0.get('title'), pr0.get('textSample'), res.get('http', {}).get('status'))
    if env:  # 網站拒絕研究環境（例如 browser unsupported）：不是低可量測，而是這次無法研究
        res['environment_failure'] = env
        return 'Blocked', 'none', [f'Research Environment Failure（{env["type"]}）：{env["evidence"]}']
    fs = d.get('first_screenshot', {})
    if fs.get('status') == 'unavailable':
        return 'Blocked', 'capture-only', ['首屏截圖失敗（含 CDP 備援）']
    low, med = [], []
    # 性能相關的訊號：研究環境負載下只能降到 Medium，不能單獨造成 Low（Research Environment Load ≠ Website Performance）
    perf_low = med if affected else low
    note = LOAD_NOTE if affected else ''
    if affected:
        med.append(f'Research Environment Load：量測時有 {conc.get("concurrent_measurements", 0)} 個其他 preflight 同時在量、'
                   f'每顆 CPU 負載 {conc.get("load_per_cpu")}→{conc.get("load_per_cpu_after")}；'
                   'fps／首屏時間可能被研究環境拖慢，建議 serial 重測')
    secs = fs.get('seconds_from_nav') or 0
    if secs > 30:
        perf_low.append(f'首屏 {secs:.0f} 秒才拍到' + note)
    elif secs > 12:
        med.append(f'首屏 {secs:.0f} 秒才拍到' + note)
    if fs.get('status') == 'fallback':
        med.append('一般截圖逾時，靠 CDP 擷取' + note)
    sc = d.get('scroll', {})
    if sc.get('ok') is False:
        low.append('桌機無法捲動（scroll locked 或 hijacking）')
    elif sc.get('only_scrollTo'):
        med.append('wheel／鍵盤捲不動，只有 scrollTo 有效（可能是 scroll hijacking）')
    pr = d.get('probe') or {}
    fps = d.get('fps')
    if pr.get('bigCanvas'):
        (perf_low if (fps is not None and fps < 10) else med).append(f'大面積 canvas（{pr["bigCanvas"]} 個），fps≈{fps}' + note)
    elif fps is not None and fps < 10:
        med.append(f'幀率很低（fps≈{fps}）' + note)
    if pr.get('smoothLib') or pr.get('containers'):
        med.append('有 smooth scroll／自訂捲動容器跡象')
    if pr.get('nodes', 0) < 30:
        low.append('DOM 幾乎是空的（內容可能都在 canvas 裡）')
    ssh = pr.get('stylesheets') or {}
    if ssh.get('blocked', 0) > ssh.get('readable', 0):
        med.append('多數樣式表無法讀取（跨網域）；computed style 仍可量')
    m = res.get('mobile')
    if m is not None and not m.get('skipped'):
        if not m.get('nav', {}).get('ok') or m.get('first_screenshot', {}).get('status') == 'unavailable':
            low.append('手機 viewport 無法載入或截圖')
        elif m.get('scroll', {}).get('ok') is False:
            med.append('手機無法捲動')
    elif m is not None and m.get('skipped'):
        med.append('手機沒有預檢（時間預算不足）')
    if res.get('timeouts', 0) >= 2:
        perf_low.append(f'逾時 {res["timeouts"]} 次' + note)
    reasons = low + med
    if low:
        return 'Low', 'reduced', reasons
    if med:
        return 'Medium', 'full', reasons
    return 'High', 'full', reasons or ['首屏、捲動、DOM、手機都正常']


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('url')
    p.add_argument('site_dir')
    p.add_argument('--budget', type=int, default=C.BUDGET['preflight'])
    p.add_argument('--no-mobile', action='store_true')
    p.add_argument('--gpu', choices=('swiftshader', 'default'), default='swiftshader')
    p.add_argument('--allow-concurrent', action='store_true',
                   help='不排隊（預設 serial：同一台機器一次只量一站，避免 fps 等性能量測互相干擾）')
    p.add_argument('--lock-wait', type=int, default=900, help='排隊最多等幾秒（預設 900）')
    p.add_argument('--_child', action='store_true', help=argparse.SUPPRESS)
    p.add_argument('--_out', help=argparse.SUPPRESS)
    o = p.parse_args()
    os.makedirs(os.path.join(o.site_dir, 'screenshots', 'pw'), exist_ok=True)
    out = os.path.join(o.site_dir, 'source', 'preflight.json')
    if o._child:
        C.write_json(o._out, child(o))
        return
    tmp = out + '.raw'
    argv = [sys.executable, os.path.abspath(__file__), o.url, o.site_dir, '--budget', str(o.budget), '--gpu', o.gpu,
            '--_child', '--_out', tmp] + (['--no-mobile'] if o.no_mobile else [])
    if os.path.exists(tmp):
        os.remove(tmp)
    with MeasureSlot(serial=not o.allow_concurrent, wait=o.lock_wait) as slot:
        others = others_measuring()
        load0 = load_per_cpu()
        t0 = time.monotonic()
        code, log = C.run_with_hard_timeout(argv, o.budget + 15)
        others = max(others, others_measuring())
        load1 = load_per_cpu()
    res = C.read_json(tmp) or {'url': o.url, 'error': '預檢超過時間上限被中止' if code is None else f'預檢失敗：{(log or "")[-200:]}',
                               'desktop': {'nav': {'ok': False, 'error': '預檢逾時'}}}
    res['seconds'] = round(time.monotonic() - t0, 1)
    res['concurrency'] = concurrency_record('serial' if slot.serial else 'concurrent', slot.waited, others, load0, load1)
    feas, scope, reasons = grade(res)
    res.update(feasibility=feas, scope=scope, reasons=reasons)
    if os.path.exists(tmp):
        os.remove(tmp)
    C.write_json(out, res)
    C.wr_status.set_key(o.site_dir, 'preflight', {k: res.get(k) for k in ('feasibility', 'scope', 'reasons', 'seconds',
                                                                          'concurrency', 'load_affected')})
    cc = res['concurrency']
    print(f'Feasibility：{feas}（建議範圍：{scope}，{res["seconds"]} 秒；{cc["mode"]}，排隊 {cc["waited_seconds"]} 秒，'
          f'同時量測 {cc["concurrent_measurements"]}，負載 {cc["load_per_cpu"]}→{cc["load_per_cpu_after"]}）')
    if res.get('load_affected'):
        print('  ⚠ load_affected：性能量測可能受研究環境負載影響（Research Environment Load ≠ Website Performance），建議 serial 重測')
    for r in reasons:
        print(f'  - {r}')


if __name__ == '__main__':
    main()
