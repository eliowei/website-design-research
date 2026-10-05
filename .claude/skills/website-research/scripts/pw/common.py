"""Standard／Deep 量測工具的共用程式（Playwright，Python sync API）。

設計原則（references/capture-reliability.md）：
- 每個動作都有逾時、最多重試一次；失敗就記錄狀態並往下走，不讓單一能力拖垮整份研究。
- 每個 viewport 有自己的時間預算；run_standard.py 另外用子行程硬性中止，避免卡住的瀏覽器拖慢 pipeline。
- 只量「真的看得見、可以互動」的元素；選擇器依 semantic → role → aria → data-* → DOM 結構 → 文字 的順序產生。
"""
import base64
import glob
import io
import json
import os
import signal
import subprocess
import sys
import time
from contextlib import contextmanager

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))  # scripts/
import wr_status  # noqa: E402

VIEWPORTS = {
    1440: {'width': 1440, 'height': 900, 'mobile': False},
    768: {'width': 768, 'height': 1024, 'mobile': False},
    390: {'width': 390, 'height': 844, 'mobile': True},
}

# 預設時間預算（秒）。改這裡就要同步改 references/capture-reliability.md §6。
BUDGET = {
    'site': 720,                                  # run_standard 全部 viewport 加總
    'viewport': {1440: 300, 390: 240, 768: 150},  # 單一 viewport
    'hard_kill_grace': 30,                        # 超過 viewport 預算多久後強制結束子行程
    'goto': 45,
    'screenshot': 20,
    'settle_ms': 5000,
    'scroll_settle_ms': 700,
    'hover_each': 15,
    'focus_total': 40,
    'click': 20,
    'preflight': 90,
}
MAX_ATTEMPTS = 2           # 每個動作最多 2 次（重試 1 次）
MAX_CONSEC_SHOT_FAIL = 3   # 同一 viewport 連續 3 張截圖失敗就停止截圖
NETWORK_BLOCK = ('ERR_TUNNEL_CONNECTION_FAILED', 'ERR_BLOCKED_BY_CLIENT', 'ERR_NAME_NOT_RESOLVED',
                 'ERR_CONNECTION_REFUSED', 'ERR_CERT')


class Deadline:
    def __init__(self, seconds):
        self.seconds = seconds
        self.end = time.monotonic() + seconds

    def left(self):
        return self.end - time.monotonic()

    def ok(self, need=0):
        return self.left() > need


def chromium_path():
    env = os.environ.get('PW_CHROMIUM')
    if env and os.path.exists(env):
        return env
    for pat in ('/opt/pw-browsers/chromium-*/chrome-linux/chrome', '/opt/pw-browsers/chromium/chrome-linux/chrome'):
        found = sorted(glob.glob(pat))
        if found:
            return found[-1]
    return None  # 交給 Playwright 預設；不要在雲端環境執行 playwright install


def launch(p, gpu='swiftshader'):
    args = ['--ignore-gpu-blocklist']
    if gpu == 'swiftshader':  # 沒有 GPU 的環境用軟體渲染 WebGL，比完全不畫好
        args += ['--use-angle=swiftshader', '--enable-unsafe-swiftshader']
    kw = {'args': args}
    exe = chromium_path()
    if exe:
        kw['executable_path'] = exe
    proxy = os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy')
    if proxy:
        kw['proxy'] = {'server': proxy, 'bypass': 'localhost,127.0.0.1'}
    return p.chromium.launch(**kw)


def new_context(browser, width, reduced_motion=None):
    v = VIEWPORTS[width]
    kw = dict(viewport={'width': v['width'], 'height': v['height']}, device_scale_factor=1,
              is_mobile=v['mobile'], has_touch=v['mobile'])
    if reduced_motion:
        kw['reduced_motion'] = reduced_motion
    return browser.new_context(**kw)


def first_line(e, n=180):
    return str(e).strip().splitlines()[0][:n] if str(e).strip() else type(e).__name__


def goto(page, url, deadline):
    """載入頁面；逾時最多重試一次。被網路政策擋住不重試、不繞過。"""
    err = ''
    for attempt in range(1, MAX_ATTEMPTS + 1):
        t = max(5, min(BUDGET['goto'], deadline.left() - 10))
        t0 = time.monotonic()
        try:
            page.goto(url, wait_until='domcontentloaded', timeout=t * 1000)
            return {'ok': True, 'seconds': round(time.monotonic() - t0, 1), 'attempts': attempt}
        except Exception as e:
            err = first_line(e)
            if any(x in err for x in NETWORK_BLOCK):
                return {'ok': False, 'error': err, 'attempts': attempt, 'blocked': True}
            if not deadline.ok(BUDGET['goto'] + 15):
                break
    return {'ok': False, 'error': err, 'attempts': attempt}


def settle(page, ms=None):
    page.wait_for_timeout(ms if ms is not None else BUDGET['settle_ms'])


def _cdp_png(page):
    cdp = page.context.new_cdp_session(page)
    try:
        data = cdp.send('Page.captureScreenshot', {'format': 'png'})
    finally:
        try:
            cdp.detach()
        except Exception:
            pass
    return base64.b64decode(data['data'])


def shot(page, path, clip=None, full_page=False, timeout=None):
    """截圖。page.screenshot 逾時就退回 CDP 直接擷取（WebGL／自訂捲動網站常見）。
    回傳 (狀態, 錯誤)：ok／fallback／unavailable。"""
    os.makedirs(os.path.dirname(path) or '.', exist_ok=True)
    t = (timeout or BUDGET['screenshot']) * 1000
    try:
        page.screenshot(path=path, timeout=t, full_page=full_page, clip=clip)
        return 'ok', None
    except Exception as e:
        err = first_line(e)
    if full_page:  # 整頁截圖不用 CDP 補，改用分段擷取
        return 'unavailable', err
    try:
        png = _cdp_png(page)
        if clip:
            from PIL import Image
            im = Image.open(io.BytesIO(png))
            box = (int(clip['x']), int(clip['y']), int(clip['x'] + clip['width']), int(clip['y'] + clip['height']))
            im.crop(box).save(path)
        else:
            with open(path, 'wb') as f:
                f.write(png)
        return 'fallback', err
    except Exception as e2:
        return 'unavailable', f'{err} | CDP：{first_line(e2)}'


def image_diff(a_path, b_path):
    """兩張截圖的平均差異（0–255）。用來判斷捲動後畫面有沒有變。"""
    from PIL import Image, ImageChops, ImageStat
    try:
        a = Image.open(a_path).convert('L').resize((96, 96))
        b = Image.open(b_path).convert('L').resize((96, 96))
        return ImageStat.Stat(ImageChops.difference(a, b)).mean[0]
    except Exception:
        return None


# 注入頁面的輔助函式：可見性、可互動、選擇器、樣式快照。重複注入是安全的。
WR_JS = r"""
() => {
  if (window.__wr) return true;
  const W = {};
  W.vis = (el) => {
    if (!el || !el.isConnected || el.nodeType !== 1) return false;
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || s.visibility === 'collapse') return false;
    if (parseFloat(s.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return false;
    if (el.checkVisibility && !el.checkVisibility({checkOpacity: true, checkVisibilityCSS: true})) return false;
    if (el.closest('[aria-hidden="true"],[inert]')) return false;
    return true;
  };
  W.inView = (el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth; };
  W.topmost = (el) => {
    const r = el.getBoundingClientRect();
    const x = Math.min(innerWidth - 1, Math.max(0, r.left + r.width / 2));
    const y = Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2));
    const t = document.elementFromPoint(x, y);
    return !!t && (t === el || el.contains(t) || t.contains(el));
  };
  W.dedup = (t) => {  // 文字翻轉動畫會把同一串字放兩次：「about us about us」→「about us」
    const w = t.split(' '); const n = w.length;
    if (n >= 2 && n % 2 === 0) { const h = n / 2; if (w.slice(0, h).join(' ') === w.slice(h).join(' ')) return w.slice(0, h).join(' '); }
    return t;
  };
  W.text = (el) => W.dedup(((el.innerText || '').trim() || el.getAttribute('aria-label') || el.getAttribute('title') || el.value || '').replace(/\s+/g, ' ').trim()).slice(0, 120);
  W.q = (v) => JSON.stringify(String(v));
  W.visibleMatches = (sel) => { try { return [...document.querySelectorAll(sel)].filter(W.vis); } catch (e) { return null; } };
  W.pick = (kind, sel, el) => {
    const v = W.visibleMatches(sel);
    if (!v) return null;
    const i = v.indexOf(el);
    if (i < 0) return null;
    if (v.length === 1) return {kind, sel, nth: 0, unique: true};
    if (v.length <= 4) return {kind, sel, nth: i, unique: false};
    return null;
  };
  W.structPath = (el) => {
    const parts = [];
    let cur = el;
    while (cur && cur.nodeType === 1 && cur !== document.body && parts.length < 8) {
      if (cur.id && /^[A-Za-z][\w-]*$/.test(cur.id)) { parts.unshift('#' + cur.id); break; }
      const tag = cur.tagName.toLowerCase();
      const sib = cur.parentElement ? [...cur.parentElement.children].filter(c => c.tagName === cur.tagName) : [];
      parts.unshift(sib.length > 1 ? `${tag}:nth-of-type(${sib.indexOf(cur) + 1})` : tag);
      cur = cur.parentElement;
    }
    return parts.join(' > ');
  };
  // 選擇器優先順序：semantic element → role → aria → data-* → DOM 結構 → 文字
  W.selector = (el) => {
    const tag = el.tagName.toLowerCase();
    const c = [];
    if (tag === 'a' && el.getAttribute('href')) c.push(['semantic', `a[href=${W.q(el.getAttribute('href'))}]`]);
    if (['input', 'select', 'textarea', 'button'].includes(tag) && el.getAttribute('name')) c.push(['semantic', `${tag}[name=${W.q(el.getAttribute('name'))}]`]);
    if (tag === 'button' && el.getAttribute('type')) c.push(['semantic', `button[type=${W.q(el.getAttribute('type'))}]`]);
    if (['button', 'summary', 'nav', 'header', 'footer', 'main', 'h1'].includes(tag)) c.push(['semantic', tag]);
    const role = el.getAttribute('role');
    if (role) c.push(['role', `[role=${W.q(role)}]`]);
    for (const a of ['aria-label', 'aria-controls', 'aria-labelledby']) {
      const v = el.getAttribute(a); if (v) c.push(['aria', `[${a}=${W.q(v)}]`]);
    }
    for (const a of el.getAttributeNames()) {
      if (a.startsWith('data-') && a !== 'data-wr-id') { const v = el.getAttribute(a); if (v !== null && v.length <= 80) c.push(['data', `[${a}=${W.q(v)}]`]); }
    }
    for (const [kind, sel] of c) { const r = W.pick(kind, sel, el); if (r) return r; }
    const sp = W.structPath(el);
    const r = W.pick('structure', sp, el);
    if (r) return r;
    return {kind: 'text', sel: W.text(el), nth: 0, unique: false};
  };
  W.resolve = (info) => {
    if (!info) return null;
    if (info.kind === 'text') {
      const all = [...document.querySelectorAll('a,button,[role=button],[role=link],input[type=submit],summary')].filter(W.vis);
      return all.filter(e => W.text(e) === info.sel)[info.nth || 0] || null;
    }
    const v = W.visibleMatches(info.sel);
    return v && v[info.nth || 0] || null;
  };
  W.PROPS = ['color', 'background-color', 'background-image', 'opacity', 'transform', 'border-top-color', 'border-top-width',
             'border-radius', 'box-shadow', 'outline-style', 'outline-width', 'outline-color', 'outline-offset',
             'text-decoration-line', 'filter', 'width', 'height', 'letter-spacing', 'clip-path'];
  W.snap = (el, maxNodes) => {  // 元素本身＋子孫＋偽元素的樣式快照：hover 寫在內層也量得到
    const nodes = [];
    const walk = (n, path) => {
      if (nodes.length >= (maxNodes || 40)) return;
      const s = getComputedStyle(n);
      const rec = {path, tag: n.tagName.toLowerCase(), transition: s.transition, props: {}};
      for (const p of W.PROPS) rec.props[p] = s.getPropertyValue(p);
      const r = n.getBoundingClientRect(); rec.box = [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)];
      nodes.push(rec);
      for (const pseudo of ['::before', '::after']) {
        const ps = getComputedStyle(n, pseudo);
        if (ps.content && ps.content !== 'none' && ps.content !== 'normal') {
          const pr = {path: path + pseudo, tag: pseudo, transition: ps.transition, props: {}};
          for (const p of W.PROPS) pr.props[p] = ps.getPropertyValue(p);
          nodes.push(pr);
        }
      }
      [...n.children].forEach((ch, i) => walk(ch, `${path}>${ch.tagName.toLowerCase()}[${i}]`));
    };
    walk(el, el.tagName.toLowerCase());
    return nodes;
  };
  W.cs = (el) => { const s = getComputedStyle(el); return {font: s.fontFamily, size: s.fontSize, weight: s.fontWeight, lh: s.lineHeight, ls: s.letterSpacing, color: s.color, bg: s.backgroundColor, radius: s.borderRadius, padding: s.padding, border: s.border, transition: s.transition, tt: s.textTransform, opacity: s.opacity, transform: s.transform, display: s.display, position: s.position}; };
  W.box = (el) => { const r = el.getBoundingClientRect(); return {x: Math.round(r.x), y: Math.round(r.y + scrollY), vy: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height)}; };
  W.persistent = (el) => { for (let n = el; n && n !== document.documentElement; n = n.parentElement) { const p = getComputedStyle(n).position; if (p === 'fixed' || p === 'sticky') return p; } return null; };
  W.section = (el) => {
    const sec = el.closest('section,header,footer,nav,main > *,article');
    const h = sec && sec.querySelector('h1,h2,h3');
    return {container: sec ? (sec.tagName.toLowerCase() + (sec.id ? '#' + sec.id : '')) : null, heading: h ? W.text(h).slice(0, 60) : null};
  };
  W.buttonLike = (el, s) => {
    const bg = s.backgroundColor; const hasBg = bg && !/rgba?\(0, 0, 0, 0\)|transparent/.test(bg);
    const border = parseFloat(s.borderTopWidth) > 0 && s.borderTopStyle !== 'none';
    const pad = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) >= 16;
    return el.tagName === 'BUTTON' || el.getAttribute('role') === 'button' || ((hasBg || border) && pad);
  };
  W.scrollState = () => {
    const se = document.scrollingElement || document.documentElement;
    const conts = [];
    for (const el of document.querySelectorAll('body *')) {
      if (conts.length >= 5) break;
      if (el.scrollHeight > el.clientHeight + 50 && el.clientHeight > innerHeight * 0.5) {
        const oy = getComputedStyle(el).overflowY;
        if (oy === 'auto' || oy === 'scroll' || oy === 'overlay') conts.push({sel: W.structPath(el), top: Math.round(el.scrollTop), height: el.scrollHeight});
      }
    }
    const tf = [];
    for (const sel of ['[data-scroll-container]', '[data-lenis-content]', '.smooth-content', '#smooth-content', '[data-scroll-content]', '.scroll-content']) {
      const el = document.querySelector(sel);
      if (el) { const m = new DOMMatrixReadOnly(getComputedStyle(el).transform); tf.push({sel, ty: Math.round(m.m42)}); }
    }
    const html = document.documentElement.className.toString();
    return {winY: Math.round(scrollY), docTop: Math.round(se.scrollTop), docHeight: Math.max(se.scrollHeight, document.body ? document.body.scrollHeight : 0),
            containers: conts, transforms: tf,
            smoothLib: /lenis|locomotive|has-scroll-smooth|smooth-scroll/i.test(html + ' ' + (document.body ? document.body.className : '')) || !!window.lenis || !!window.ScrollSmoother,
            bodyOverflow: getComputedStyle(document.body || document.documentElement).overflowY};
  };
  window.__wr = W;
  return true;
}
"""


def inject(page):
    page.evaluate(WR_JS)


def evaluate(page, expr, arg=None, default=None):
    """安全的 evaluate：失敗回傳 default，不讓單一查詢中止整個流程。"""
    try:
        inject(page)
        return page.evaluate(expr, arg) if arg is not None else page.evaluate(expr)
    except Exception as e:
        return default if default is not None else {'error': first_line(e)}


def resolve(page, info):
    """用 selector 資訊找回元素（ElementHandle）；找不到回傳 None。"""
    try:
        inject(page)
        h = page.evaluate_handle('(info) => window.__wr.resolve(info)', info)
        el = h.as_element()
        return el
    except Exception:
        return None


def paths_for(site_dir):
    shots = os.path.join(site_dir, 'screenshots', 'pw')
    src = os.path.join(site_dir, 'source', 'pw')
    os.makedirs(shots, exist_ok=True)
    os.makedirs(src, exist_ok=True)
    return shots, src


def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)


def read_json(path, default=None):
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return default


@contextmanager
def open_page(url, width, deadline, gpu='swiftshader'):
    """開瀏覽器、建立指定寬度的 context、載入頁面。yield (page, nav)；nav['ok'] 為 False 時 page 仍可關閉。"""
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser = launch(p, gpu)
        try:
            ctx = new_context(browser, width)
            page = ctx.new_page()
            nav = goto(page, url, deadline)
            yield page, nav
        finally:
            try:
                browser.close()
            except Exception:
                pass


def run_with_hard_timeout(argv, seconds):
    """在新的行程群組裡執行，超時就整組強制結束（連同 Chromium 子行程），回傳 (結束碼或 None, 輸出)。"""
    proc = subprocess.Popen(argv, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, start_new_session=True, text=True)
    try:
        out, _ = proc.communicate(timeout=seconds)
        try:  # 子行程正常結束後，把可能殘留的 Chromium 也一起清掉
            os.killpg(proc.pid, signal.SIGKILL)
        except Exception:
            pass
        return proc.returncode, out
    except subprocess.TimeoutExpired:
        try:
            os.killpg(proc.pid, signal.SIGKILL)
        except Exception:
            pass
        try:
            out, _ = proc.communicate(timeout=10)
        except Exception:
            out = ''
        return None, out


def standalone_args(parser):
    parser.add_argument('url')
    parser.add_argument('site_dir', help='research/<網域> 資料夾')
    parser.add_argument('--viewport', type=int, default=1440, choices=sorted(VIEWPORTS))
    parser.add_argument('--budget', type=int, help='這個指令的時間上限（秒），預設用該 viewport 的預算')
    parser.add_argument('--gpu', choices=('swiftshader', 'default'), default='swiftshader')
    return parser


def record(site_dir, viewport, name, status, detail='', **extra):
    return wr_status.set_capability(site_dir, viewport, name, status, detail, **extra)
