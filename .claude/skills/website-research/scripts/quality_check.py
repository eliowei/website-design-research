#!/usr/bin/env python3
"""Capture Quality 檢查：判斷一次擷取能不能支撐研究，並記錄缺口。

用法：
  python quality_check.py image <截圖> [--viewport-h 1080] [--expected-height 9000]
                                [--content-chars 5000] [--record <網站資料夾> --as firecrawl-desktop]
                                [--override B --reason "理由"] [--json]
      檢查一張全頁截圖：空白比例、最長空白、是否只拿到首屏、高度是否和頁面不符。

  python quality_check.py image <截圖> ... [--page-url <最終網址>] [--page-title <標題>] [--page-text-file <markdown>]
      加上擷取工具回報的網址／標題／內文，偵測 Research Environment Failure（browser unsupported、機器人驗證、被擋）。

  python quality_check.py final <網站資料夾> [--override desktop=B --reason "依據 firecrawl-desktop＋fallback-desktop"]
      以證據集合判定 Final Capture Quality：Initial（primary）＋所有 Fallback 一起看。
      Final 不是取最高等級，也不是取最後一次，而是 Evidence Quality（畫面本身正不正常）×
      Evidence Coverage（涵蓋多少頁面／視窗／段落、是否仍有明顯缺口）綜合判斷「證據是否足以支撐研究」。
      例：fallback A 但只拍到 1 屏 → 涵蓋率低，不會把 Final 升到 A。

  python quality_check.py segments <segments.json> [--record <網站資料夾> --as fallback-desktop]
                                   [--override B --reason "理由"] [--json]
      檢查分段擷取（scroll_page.py 產生的 segments.json）的覆蓋率。

等級（詳細定義見 references/capture-reliability.md §2）：
  A — Complete   主要內容完整取得，可正常研究
  B — Partial    部分區域缺失，但仍可研究
  C — Degraded   大量空白、動畫未完成或內容缺失，只能有限研究
  D — Failed     不足以支撐可靠研究

工具只偵測「空白」與「高度不符」，偵測不到「畫面有東西但內容不對」（例如只拍到模糊背景、
動畫拍到一半）。研究者看過切圖後可以用 --override 調整等級，但一定要寫 --reason，
理由會和自動等級一起留在 capture-status.json。等級低於 A 時，先做 fallback 分段擷取，
不要直接假設網站沒有那些內容。

需要 Pillow：pip install pillow
"""
import argparse
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    from PIL import Image
    Image.MAX_IMAGE_PIXELS = None
except ImportError:
    sys.exit('需要 Pillow：pip install pillow')

GRADE_ORDER = 'ABCD'

# 自動判定的門檻（改這裡就要同步改 references/capture-reliability.md §2 的表）
MIN_RUN = 300            # 空白段至少多高（原圖像素）才算
FLAT_TOL = 6             # 一列灰階的最大－最小 ≤ 這個值視為單色
D_BLANK_RATIO = 0.60
C_BLANK_RATIO = 0.25
B_BLANK_RATIO = 0.08
C_TAIL_VIEWPORTS = 2.0   # 底部連續空白 ≥ 2 個視窗高
B_LONGEST_VIEWPORTS = 1.5
C_HEIGHT_MISMATCH = 0.5
B_HEIGHT_MISMATCH = 0.3
SEGMENT_BLANK_MAX = 0.5  # 一張分段截圖的空白比例低於這個才算「有內容」
SEGMENT_FLAT = 0.9       # 一張分段截圖空白比例 ≥ 這個值視為「整屏是平的」
SEG_A, SEG_B, SEG_C = 0.9, 0.7, 0.4
CAPPED_HEIGHTS = (16384, 32767, 65000)  # 常見截圖高度上限


def guess_viewport_h(width):
    if width >= 1700:
        return 1080      # Firecrawl 桌機 1920×1080
    if width >= 1200:
        return 900       # Playwright 1440×900
    if width >= 700:
        return 1024      # 平板 768×1024
    if width >= 380:
        return 844       # Playwright 390×844
    return 800           # Firecrawl 手機 360×800


def blank_runs(path, min_run=MIN_RUN, tol=FLAT_TOL):
    """回傳 (寬, 高, [(y0, y1), ...])。先縮小再逐列判斷，長截圖也只要幾秒。"""
    im = Image.open(path).convert('L')
    w, h = im.size
    sw = 128
    scale = sw / w
    sh = max(1, int(round(h * scale)))
    small = im.resize((sw, sh), Image.BILINEAR)
    data = small.tobytes()
    runs = []
    start = None
    for y in range(sh):
        row = data[y * sw:(y + 1) * sw]
        flat = (max(row) - min(row)) <= tol
        if flat and start is None:
            start = y
        elif not flat and start is not None:
            runs.append((start, y))
            start = None
    if start is not None:
        runs.append((start, sh))
    out = []
    for a, b in runs:
        y0, y1 = int(a / scale), min(h, int(b / scale))
        if y1 - y0 >= min_run:
            out.append((y0, y1))
    return w, h, out


def analyze_image(path, viewport_h=None, expected_height=None, content_chars=None):
    m = {'file': path, 'failed': False}
    if not os.path.exists(path):
        m.update(failed=True, reason='檔案不存在')
        return m
    try:
        w, h, runs = blank_runs(path)
    except Exception as e:  # 壞檔、不是圖片
        m.update(failed=True, reason=f'無法讀取：{e}')
        return m
    vh = viewport_h or guess_viewport_h(w)
    blank = sum(b - a for a, b in runs)
    tail = (runs[-1][1] - runs[-1][0]) if runs and runs[-1][1] >= h - 2 else 0
    content_extent = h - tail
    longest = max((b - a for a, b in runs), default=0)
    m.update(width=w, height=h, viewport_h=vh, blank_px=blank,
             blank_ratio=round(blank / h, 3) if h else 1.0,
             longest_run=longest, tail_blank=tail, gaps=[list(r) for r in runs])
    if h < 100 or blank >= h * 0.95:
        m.update(failed=True, reason='截圖幾乎全空白或高度異常')
    # 只拿到首屏：內容只在第一個視窗附近，下面一路空白到底
    m['first_screen_only'] = bool(h >= 2 * vh and content_extent <= 1.3 * vh)
    # 截圖只有一屏高：可能是單屏網站，也可能只拍到首屏
    single = h <= 1.2 * vh
    expect_long = (expected_height and expected_height > 1.5 * vh) or (content_chars and content_chars > 2500)
    if single and expect_long:
        m['first_screen_only'] = True
    m['single_screen_unknown'] = bool(single and not expect_long)
    mismatch = 0.0
    if expected_height:
        mismatch = abs(h - expected_height) / max(expected_height, 1)
    m['height_mismatch'] = round(mismatch, 3)
    m['height_capped'] = h in CAPPED_HEIGHTS
    return m


def grade_image(m):
    """回傳 (等級, [理由])。"""
    why = []
    if m.get('failed'):
        return 'D', [m.get('reason', '擷取失敗')]
    vh = m['viewport_h']
    r = m['blank_ratio']
    if r >= D_BLANK_RATIO:
        return 'D', [f'空白比例 {r:.0%} ≥ {D_BLANK_RATIO:.0%}']
    grade = 'A'

    def lower(g, reason):
        nonlocal grade
        if GRADE_ORDER.index(g) > GRADE_ORDER.index(grade):
            grade = g
        why.append(reason)

    if m['first_screen_only']:
        lower('C', '只取得首屏，下方內容沒有渲染')
    if r >= C_BLANK_RATIO:
        lower('C', f'空白比例 {r:.0%} ≥ {C_BLANK_RATIO:.0%}')
    if m['tail_blank'] >= C_TAIL_VIEWPORTS * vh:
        lower('C', f'底部連續空白 {m["tail_blank"]}px（≥ {C_TAIL_VIEWPORTS:g} 個視窗高）')
    if m['height_mismatch'] >= C_HEIGHT_MISMATCH:
        lower('C', f'截圖高度和頁面高度差 {m["height_mismatch"]:.0%}')
    if B_BLANK_RATIO <= r < C_BLANK_RATIO:
        lower('B', f'空白比例 {r:.0%} ≥ {B_BLANK_RATIO:.0%}')
    if m['longest_run'] >= B_LONGEST_VIEWPORTS * vh:
        lower('B', f'最長空白 {m["longest_run"]}px（≥ {B_LONGEST_VIEWPORTS:g} 個視窗高）')
    if B_HEIGHT_MISMATCH <= m['height_mismatch'] < C_HEIGHT_MISMATCH:
        lower('B', f'截圖高度和頁面高度差 {m["height_mismatch"]:.0%}')
    if m['single_screen_unknown']:
        lower('B', '截圖只有一屏高，需確認網站是否本來就是單屏')
    if m['height_capped']:
        lower('B', f'截圖高度 {m["height"]}px 是常見的截圖上限，頁面可能更長')
    return grade, why


def painted_ratio(path, boxes, tol=12):
    """DOM 說「這裡有內容」的區塊，截圖上有多少比例真的有畫出東西（不是單色）。"""
    if not boxes:
        return None
    try:
        im = Image.open(path).convert('L')
    except Exception:
        return None
    hit = 0
    n = 0
    for x0, y0, x1, y1 in boxes:
        if x1 - x0 < 2 or y1 - y0 < 2:
            continue
        n += 1
        lo, hi = im.crop((x0, y0, x1, y1)).getextrema()
        if hi - lo > tol:
            hit += 1
    return round(hit / n, 3) if n else None


def segment_verdict(g, br, moved):
    """一張分段截圖算不算取得內容。

    有 DOM 計數時（scroll_page.py 會記錄）用它分辨：
      content          畫面上有內容，而且 DOM 說有內容的位置確實畫出來了
      empty-by-design  畫面是平的，DOM 也說這一屏沒有內容（設計留白）
      unrendered       DOM 說有內容，畫面上那些位置卻是平的，或內容仍是透明的（進場動畫沒跑完）
      not-moved        捲動沒有移動，這張和上一張是同一個位置
    沒有 DOM 資料時退回只看空白比例。
    """
    if not g.get('file') or br is None:
        return 'missing'
    if not moved:
        return 'not-moved'
    dc = g.get('dom_content')
    if isinstance(dc, dict):
        vis, tr = dc.get('visible', 0), dc.get('transparent', 0)
        painted = dc.get('painted')
        if vis + tr == 0:
            return 'empty-by-design' if br >= SEGMENT_FLAT else 'content'
        if vis == 0 and tr > 0 and br >= SEGMENT_BLANK_MAX:
            return 'unrendered'
        if painted is not None:
            return 'content' if painted >= 0.5 else 'unrendered'
        return 'content' if br < SEGMENT_FLAT else 'unrendered'
    if br >= SEGMENT_FLAT:
        return 'unrendered'
    return 'content' if br < SEGMENT_BLANK_MAX else 'partly-rendered'


def analyze_segments(seg_path):
    with open(seg_path, encoding='utf-8') as f:
        s = json.load(f)
    segs = s.get('segments', [])
    planned = max(s.get('planned', len(segs)), 1)
    base = os.path.dirname(seg_path)
    usable = []
    credit = 0.0
    for i, g in enumerate(segs):
        br = g.get('blank_ratio')
        if br is None and g.get('file'):
            fp = g['file'] if os.path.isabs(g['file']) else os.path.join(base, g['file'])
            try:
                w, h, runs = blank_runs(fp, min_run=int(0.25 * (s.get('vh') or 800)))
                br = round(sum(b - a for a, b in runs) / h, 3)
            except Exception:
                br = 1.0
            g['blank_ratio'] = br
        moved = g.get('moved', i == 0)
        g['verdict'] = v = segment_verdict(g, br, moved or i == 0)
        c = {'content': 1.0, 'empty-by-design': 1.0, 'partly-rendered': 0.5}.get(v, 0.0)
        credit += c
        if c >= 1.0:
            usable.append(g)
    vh = s.get('vh') or 0
    m = {'file': seg_path, 'planned': planned, 'captured': len(segs), 'usable': len(usable),
         'coverage': round(credit / planned, 3),
         # Evidence Coverage 用：每一張分段在頁面上的位置與判定、頁面高度估計、視窗大小（§2.2）
         'vw': s.get('viewport'), 'vh': vh, 'est_height': s.get('est_height'),
         'positions': [[g.get('target_y', 0), g.get('verdict')] for g in segs],
         'verdicts': [g.get('verdict') for g in segs],
         'scroll_status': s.get('scroll', {}).get('status'), 'scroll_method': s.get('scroll', {}).get('method'),
         'gaps': [g.get('target_y') for g in segs if g.get('verdict') in ('unrendered', 'missing', 'not-moved', 'partly-rendered')]}
    return m


def grade_segments(m):
    c = m['coverage']
    why = [f'可用分段 {m["usable"]}/{m["planned"]}（覆蓋 {c:.0%}）']
    if m.get('scroll_status') == 'failed':
        why.append('無法捲動，只取得首屏')
    if c >= SEG_A:
        return 'A', why
    if c >= SEG_B:
        return 'B', why
    if c >= SEG_C:
        return 'C', why
    return 'D', why


def record(site_dir, key, kind, metrics, auto_grade, reasons, override=None, reason=None, environment=None):
    import wr_status
    rec = {'kind': kind, 'auto_grade': auto_grade, 'grade': override or auto_grade,
           'reasons': reasons, 'metrics': {k: v for k, v in metrics.items() if k != 'gaps'},
           'gaps': metrics.get('gaps', [])}
    if override:
        rec['override_reason'] = reason
    if environment:
        rec['environment_failure'] = environment
        d = wr_status.load(site_dir)
        env = d.get('environment') or {'failures': []}
        env['failures'].append({'capture': key, **environment})
        d['environment'] = env
        wr_status.save(site_dir, d)
    wr_status.set_capture(site_dir, key, rec)
    return rec


# ---------------------------------------------------------------- Research Environment Failure
# 擷取到的不是網站本身，而是「研究環境被拒絕」的頁面：瀏覽器不支援、機器人驗證、存取被擋。
# 這不是網站設計的問題，也不是一般的 Capture D：那一次擷取沒有任何網站內容可以研究。
ENV_PATTERNS = [
    ('unsupported-browser', re.compile(r'(browser|navigateur|navegador|browser wird)\s*(is|est|no es|wird)?\s*(not|non|nicht)?\s*'
                                       r'(supported|support[ée]|compatible|unterst[üu]tzt)|unsupported browser|'
                                       r'update your browser|upgrade your browser|browser not supported', re.I)),
    ('bot-challenge', re.compile(r'verify (that )?you are (a )?human|checking (if the site connection is secure|your browser)|'
                                 r'are you a robot|captcha|cf-challenge|just a moment\.\.\.|attention required', re.I)),
    ('access-denied', re.compile(r'access denied|forbidden|request blocked|you have been blocked|not available in your (country|region)', re.I)),
    ('javascript-required', re.compile(r'(please )?enable javascript|javascript is (required|disabled)|requires javascript', re.I)),
]
ENV_URL = re.compile(r'/(unsupported|browser-?not-?supported|old-?browser|outdated|blocked|captcha|challenge)(/|\?|$)', re.I)


def environment_failure(url=None, title=None, text=None, http_status=None):
    """擷取結果是不是 Research Environment Failure。回傳 {'type', 'evidence'} 或 None。

    只看「被拒絕頁面」的明確訊號：網址被導到 /unsupported 之類、標題或內文是拒絕訊息、HTTP 401／403／429。
    內文很長（> 1500 字）時只看標題與網址，避免網站正文剛好提到 captcha 這類字眼。
    """
    if http_status in (401, 403, 429):
        return {'type': 'access-denied', 'evidence': f'HTTP {http_status}'}
    if url and ENV_URL.search(url):
        typ = 'unsupported-browser' if 'support' in url.lower() or 'browser' in url.lower() else 'access-denied'
        return {'type': typ, 'evidence': f'被導向 {url}'}
    hay = [('標題', title or '')]
    if text and len(text) <= 1500:
        hay.append(('內文', text))
    for where, s in hay:
        for typ, rx in ENV_PATTERNS:
            m = rx.search(s)
            if m:
                return {'type': typ, 'evidence': f'{where}：「{m.group(0)}」'}
    return None


# ---------------------------------------------------------------- Final Capture Quality（證據集合）
DEVICES = ('desktop', 'tablet', 'mobile')


def device_of(key):
    for dev in DEVICES:
        if key.endswith(dev):
            return dev
    return 'other'


# Evidence Quality × Evidence Coverage（references/capture-reliability.md §2.2）
# 一張畫面正常的截圖（Quality 高）只代表「拍到的那一段」可以研究，不代表整個網站都拍到了（Coverage）。
COV_A, COV_B, COV_C = 0.85, 0.60, 0.25   # 證據集合涵蓋頁面高度的比例 → A／B／C（其餘 D）
GAP_TOL_VH = 0.5        # 小於半個視窗高的未涵蓋區不算缺口（設計留白、分段取樣的間距）
GAP_CAP_VH = 1.0        # 仍有 ≥ 1 個視窗高的連續缺口 → Final 最多 B（「明顯的 capture gap」）
SPREAD_MIN_VIEWPORTS = 2.5  # 頁首／中段／頁尾都取樣到、而且至少約 3 個視窗 → 最多 C（骨架式取樣）
SHORT_PAGE_RATIO = 0.6  # 某次擷取看到的頁面長度 < 參考長度的 60% → 視為被截斷（例如捲動被鎖，只拍到 1 屏）
SEG_STRIDE_TOL_VH = 1.0  # 同一組分段擷取裡，相鄰兩張之間 < 1 個視窗高的間距視為取樣間距（不是缺口）
UNION_MAX_LIFT = 1      # 不同擷取的位置只能近似對齊（寬度不同、重排）：聯集最多比「單次擷取中最好的等級」高 1 級


def _worse(a, b):
    return a if GRADE_ORDER.index(a) >= GRADE_ORDER.index(b) else b


def _better(a, b):
    return a if GRADE_ORDER.index(a) <= GRADE_ORDER.index(b) else b


def _load_segments_file(m, site_dir):
    """舊的分段紀錄沒有 positions：試著從 segments json 補回。"""
    f = m.get('file')
    cands = [f] if f else []
    if f and site_dir:
        cands += [os.path.join(site_dir, 'source', os.path.basename(f)), os.path.join(site_dir, f)]
    for c in cands:
        try:
            m2 = analyze_segments(c)
            return {**m, **{k: m2[k] for k in ('vw', 'vh', 'est_height', 'positions')}}
        except Exception:
            continue
    return m


def evidence_of(rec, site_dir=None):
    """一次擷取的 Evidence Quality 與 Evidence Coverage。沒有足夠資料（舊格式）時回傳 None。

    回傳 {'quality', 'intervals'（自己頁面高度的比例 0–1）, 'own_len'（頁面長度，以視窗寬為單位）,
          'vh_w'（視窗高 ÷ 寬）, 'length_known', 'kind'}。
    Quality 只看「拍到的畫面本身」正不正常；拍到多少是 Coverage。
    研究者把某次擷取往下覆寫（例如看切圖發現是預載畫面），等於說那次的畫面品質有問題 → Quality 取覆寫等級。
    往上覆寫（例如空白是設計留白）沒有辦法換算成涵蓋範圍 → 回傳 None，走舊規則（用覆寫後的等級）。
    """
    m = rec.get('metrics') or {}
    kind = rec.get('kind')
    ov = rec.get('override_reason') and rec.get('grade') in GRADE_ORDER and rec.get('auto_grade') in GRADE_ORDER
    if ov and GRADE_ORDER.index(rec['grade']) < GRADE_ORDER.index(rec['auto_grade']):
        return None
    if kind == 'image' and m.get('width') and m.get('height'):
        w, h = m['width'], m['height']
        vh = m.get('viewport_h') or guess_viewport_h(w)
        q = 'D' if m.get('failed') else 'A'
        gaps = sorted(tuple(g) for g in (rec.get('gaps') or m.get('gaps') or []))
        iv, y = [], 0
        for g0, g1 in gaps:
            if g0 > y:
                iv.append((y / h, g0 / h))
            y = max(y, g1)
        if y < h:
            iv.append((y / h, 1.0))
        known = not (m.get('first_screen_only') or m.get('height_capped') or m.get('single_screen_unknown')
                     or (m.get('height_mismatch') or 0) >= B_HEIGHT_MISMATCH)
        ev = {'kind': 'image', 'quality': q, 'intervals': iv, 'own_len': h / w, 'vh_w': vh / w, 'length_known': known,
              'auto_grade': rec.get('auto_grade')}
    elif kind == 'segments':
        if not m.get('positions'):
            m = _load_segments_file(m, site_dir)
        if not m.get('positions') or not m.get('vh') or not m.get('vw'):
            return None
        vh, vw = m['vh'], m['vw']
        est = m.get('est_height') or vh * max(m.get('planned', 1), 1)
        est = max(est, vh)
        iv = []
        for y, verdict in m['positions']:
            if verdict in ('content', 'empty-by-design'):
                iv.append((y / est, min(1.0, (y + vh) / est)))
            elif verdict == 'partly-rendered':
                iv.append((y / est, min(1.0, (y + vh / 2) / est)))
        tol = SEG_STRIDE_TOL_VH * vh / est
        merged = []
        for a, b in sorted(iv):
            if merged and a - merged[-1][1] <= tol:
                merged[-1] = (merged[-1][0], max(merged[-1][1], b))
            else:
                merged.append((a, b))
        iv = merged
        q = 'A' if iv else 'D'
        ev = {'kind': 'segments', 'quality': q, 'intervals': iv, 'own_len': est / vw, 'vh_w': vh / vw,
              'length_known': est > 1.2 * vh, 'auto_grade': rec.get('auto_grade')}
    else:
        return None
    if ov:  # 往下覆寫：畫面品質有問題（預載、模糊背景、選單蓋住內容…）
        ev['quality'] = _worse(ev['quality'], rec['grade'])
    return ev


def coverage_of(evs):
    """把同一裝置的多次擷取合成一條「頁面涵蓋範圍」，回傳 Coverage 指標與 Coverage 等級。"""
    known = [e for e in evs if e['length_known']] or evs
    L = max(e['own_len'] for e in known)
    vh_w = min(e['vh_w'] for e in evs)
    spans = []
    for e in evs:
        # 看到的頁面長度和參考長度相近 → 依比例對應；明顯較短（捲動被鎖、只拍到 1 屏）→ 從頁首起算的絕對長度
        k = 1.0 if e['own_len'] >= SHORT_PAGE_RATIO * L else e['own_len'] / L
        spans += [(a * k, b * k) for a, b in e['intervals'] if b > a]
    spans.sort()
    tol = GAP_TOL_VH * vh_w / L
    merged = []
    for a, b in spans:
        if merged and a - merged[-1][1] <= tol:
            merged[-1][1] = max(merged[-1][1], b)
        else:
            merged.append([a, b])
    if merged and merged[0][0] <= tol:
        merged[0][0] = 0.0
    if merged and 1.0 - merged[-1][1] <= tol:
        merged[-1][1] = 1.0
    cov = sum(b - a for a, b in merged)
    holes, y = [], 0.0
    for a, b in merged:
        if a > y:
            holes.append(a - y)
        y = max(y, b)
    if y < 1.0:
        holes.append(1.0 - y)
    largest_gap_vh = max(holes, default=0.0) * L / vh_w
    viewports = cov * L / vh_w
    thirds = sorted({i for a, b in merged for i in range(3) if a < (i + 1) / 3 and b > i / 3})
    if cov >= COV_A:
        g = 'A'
    elif cov >= COV_B:
        g = 'B'
    elif cov >= COV_C:
        g = 'C'
    elif len(thirds) == 3 and viewports >= SPREAD_MIN_VIEWPORTS:
        g = 'C'
    else:
        g = 'D'
    notes = []
    if g == 'A' and largest_gap_vh >= GAP_CAP_VH:
        g = 'B'
        notes.append(f'仍有約 {largest_gap_vh:.1f} 個視窗高的連續缺口')
    if not any(e['length_known'] for e in evs):
        notes.append('頁面總長度未知（只拍到一屏、或截圖高度可能被截斷）')
    return {'coverage': round(cov, 3), 'viewports': round(viewports, 1), 'largest_gap_vh': round(largest_gap_vh, 1),
            'sections': [['頁首', '中段', '頁尾'][i] for i in thirds],
            'grade': g, 'notes': notes, 'length_known': any(e['length_known'] for e in evs)}


def final_capture(d, site_dir=None):
    """以「證據集合」判定每個裝置的 Final Capture Quality。

    Final 不是 Initial／Fallback 中最高的等級，也不是最後一次擷取的結果，而是綜合
    Evidence Quality（畫面本身正不正常）× Evidence Coverage（頁面、視窗、段落涵蓋多少）
    × 是否仍有明顯 capture gap，判斷「目前的證據是否足以支撐研究」（references/capture-reliability.md §2.1、§2.2）：
      1. 同一個裝置的所有擷取（primary、fallback、歷次嘗試）都是證據，不互斥。
      2. 畫面品質 A／B 的擷取把各自涵蓋的頁面範圍合起來（聯集）；Final ≤ Coverage 等級、≤ 參與者中最差的 Quality。
         一張 A 的 fallback 只拍到 1 屏或 3 張取樣 → 涵蓋率低，不能把整份研究升到 A。
         失敗的 fallback（D）不會把已經取得的證據拉低（它不參與聯集）。
      3. 聯集後仍有 ≥ 1 個視窗高的連續缺口 → 最多 B。
      4. Research Environment Failure 的擷取不算證據；某裝置只有這種擷取時，status = environment-failure、Final D。
      5. 沒有 Coverage 資料的舊紀錄：沿用舊規則（取該紀錄的等級），並在 rule 註明。
      6. 研究者可以 final --override 調整（理由必填、要指出是哪些擷取）。
    """
    import wr_status
    groups = {}
    for key, rec in iter_all(d):
        if not rec.get('stage'):  # 舊紀錄沒有 stage：依記錄名稱判斷（fallback-* 是 fallback）
            rec = dict(rec, stage=wr_status.stage_of(key))
        groups.setdefault(device_of(key), []).append((key, rec))
    out = {}
    overrides = d.get('final_overrides', {})
    for dev, items in groups.items():
        usable = [(k, r) for k, r in items if not r.get('environment_failure') and r.get('grade') in GRADE_ORDER]
        env = [(k, r) for k, r in items if r.get('environment_failure')]
        prim = [r.get('grade') for k, r in items if r.get('stage', 'primary') == 'primary']
        fb = [r.get('grade') for k, r in items if r.get('stage') == 'fallback']
        rec = {'initial': prim[0] if prim else None, 'fallback': fb,
               'evidence': [{'capture': k, 'stage': r.get('stage', 'primary'), 'grade': r.get('grade'),
                             'environment_failure': bool(r.get('environment_failure'))} for k, r in items]}
        if usable:
            evs, legacy = [], []
            for k, r in usable:
                e = evidence_of(r, site_dir)
                (evs if e else legacy).append((k, r, e))
            contrib = [(k, r, e) for k, r, e in evs if e['quality'] in 'AB']
            new_grade, cov = None, None
            if contrib:
                cov = coverage_of([e for _, _, e in contrib])
                if len(contrib) > 1:  # 聯集最多比單次擷取中最好的等級高 UNION_MAX_LIFT 級
                    best_single = min((r['grade'] for _, r, _ in contrib), key=GRADE_ORDER.index)
                    cap = GRADE_ORDER[max(0, GRADE_ORDER.index(best_single) - UNION_MAX_LIFT)]
                    if GRADE_ORDER.index(cov['grade']) < GRADE_ORDER.index(cap):
                        cov['notes'].append(f'各次擷取位置只能近似對齊：聯集最多比最好的單次擷取（{best_single}）高 {UNION_MAX_LIFT} 級')
                        cov['grade'] = cap
                q = max((e['quality'] for _, _, e in contrib), key=GRADE_ORDER.index)
                new_grade = _worse(cov['grade'], q)
                if not cov['length_known']:  # 長度未知時不能比單張擷取自己的判定更好
                    new_grade = _worse(new_grade, min((e['auto_grade'] or 'D' for _, _, e in contrib), key=GRADE_ORDER.index))
                rec['evidence_quality'] = q
                rec['coverage'] = cov
            elif evs:  # 只有畫面品質 C／D 的擷取（預載、選單蓋住…）
                new_grade = _worse('C', max((e['quality'] for _, _, e in evs), key=GRADE_ORDER.index))
                rec['evidence_quality'] = new_grade
            legacy_grade = min((r['grade'] for _, r, _ in legacy), key=GRADE_ORDER.index) if legacy else None
            if new_grade and legacy_grade:
                grade = _better(new_grade, legacy_grade)
                rule = '證據集合（Quality × Coverage）＋舊格式紀錄（沒有 Coverage 資料，沿用其等級）'
            elif new_grade:
                grade = new_grade
                rule = 'Evidence Quality × Evidence Coverage（證據集合聯集）'
            else:
                grade = legacy_grade
                rule = '舊格式紀錄（沒有 Coverage 資料）：取證據集合中最好的擷取'
            basis = [k for k, _, _ in contrib] or [k for k, _, _ in legacy] or [k for k, _, _ in evs]
            rec.update(grade=grade, basis='＋'.join(dict.fromkeys(basis)), status='ok' if grade == 'A' else 'degraded', rule=rule)
        else:
            rec.update(grade='D', basis=None, status='environment-failure' if env else 'failed',
                       rule='只有研究環境被拒絕的擷取' if env else '沒有可用擷取')
            if env:
                rec['environment_failure'] = env[0][1]['environment_failure']
        ov = overrides.get(dev)
        if ov and rec['status'] != 'environment-failure':
            rec.update(auto_grade=rec['grade'], grade=ov['grade'], override_reason=ov['reason'],
                       status='ok' if ov['grade'] == 'A' else 'degraded', rule='研究者覆寫')
        out[dev] = rec
    return out


def iter_all(d):
    import wr_status
    return wr_status.iter_captures(d)


def research_status(final):
    """整份研究的環境狀態：桌機（主要內容）只有環境失敗 → environment-failure。"""
    dev = final.get('desktop') or final.get('other')
    if dev and dev.get('status') == 'environment-failure':
        return 'environment-failure'
    return 'ok'


def final_table(final):
    rows = ['| 裝置 | Initial | Fallback | Quality | Coverage | **Final** | 依據 |', '| --- | --- | --- | --- | --- | --- | --- |']
    for dev in DEVICES + ('other',):
        r = final.get(dev)
        if not r:
            continue
        fb = '、'.join(g or '—' for g in r['fallback']) or '—'
        basis = r.get('basis') or ('Research Environment Failure' if r['status'] == 'environment-failure' else '—')
        if r.get('override_reason'):
            basis += f'（覆寫：{r["override_reason"]}）'
        c = r.get('coverage')
        cov = (f'{c["coverage"]:.0%}・約 {c["viewports"]:g} 屏・{"／".join(c["sections"]) or "—"}'
               + (f'・最大缺口 {c["largest_gap_vh"]:g} 屏' if c['largest_gap_vh'] >= GAP_TOL_VH else '')
               + (f'（{c["grade"]}）') if c else '—（舊格式）')
        rows.append(f'| {dev} | {r["initial"] or "—"} | {fb} | {r.get("evidence_quality", "—")} | {cov} | **{r["grade"]}** | {basis} |')
    return '\n'.join(rows)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest='cmd', required=True)
    a = sub.add_parser('image')
    a.add_argument('path')
    a.add_argument('--viewport-h', type=int)
    a.add_argument('--expected-height', type=int, help='DOM scrollHeight 或其他來源得知的頁面高度')
    a.add_argument('--content-chars', type=int, help='markdown 字數；很長卻只有一屏截圖 → 只拿到首屏')
    a.add_argument('--page-url', help='擷取工具回報的最終網址（被導到 /unsupported 之類 → Research Environment Failure）')
    a.add_argument('--page-title', help='擷取到的頁面標題')
    a.add_argument('--page-text', help='擷取到的 markdown／內文（或用 --page-text-file）')
    a.add_argument('--page-text-file')
    a.add_argument('--http-status', type=int)
    b = sub.add_parser('segments')
    b.add_argument('path')
    for x in (a, b):
        x.add_argument('--record', metavar='SITE_DIR')
        x.add_argument('--as', dest='key', help='記錄名稱，例如 firecrawl-desktop、firecrawl-mobile、fallback-desktop')
        x.add_argument('--override', choices=list(GRADE_ORDER))
        x.add_argument('--reason')
        x.add_argument('--json', action='store_true')
    f = sub.add_parser('final', help='以證據集合判定 Final Capture Quality（Initial＋Fallback → Final）')
    f.add_argument('site_dir')
    f.add_argument('--override', action='append', default=[], metavar='裝置=等級',
                   help='研究者覆寫 Final，例如 desktop=B；一定要配 --reason，並寫出依據哪些擷取')
    f.add_argument('--reason')
    f.add_argument('--json', action='store_true')
    o = p.parse_args()
    if o.cmd == 'final':
        return main_final(p, o)
    if o.override and not o.reason:
        p.error('--override 一定要寫 --reason（例如「看過切圖，空白是設計本身的留白」）')
    env = None
    if o.cmd == 'image':
        m = analyze_image(o.path, o.viewport_h, o.expected_height, o.content_chars)
        g, why = grade_image(m)
        text = o.page_text
        if o.page_text_file:
            text = open(o.page_text_file, encoding='utf-8').read()
        env = environment_failure(o.page_url, o.page_title, text, o.http_status)
        if env:
            g, why = 'D', [f'Research Environment Failure（{env["type"]}）：{env["evidence"]}'] + why
    else:
        m = analyze_segments(o.path)
        g, why = grade_segments(m)
    final = o.override or g
    if env and o.override:
        p.error('Research Environment Failure 的擷取不能覆寫等級：那一次沒有拿到網站內容')
    if o.record:
        if not o.key:
            p.error('--record 需要 --as')
        record(o.record, o.key, o.cmd, m, g, why, o.override, o.reason, environment=env)
    if o.json:
        print(json.dumps({'grade': final, 'auto_grade': g, 'reasons': why, 'metrics': m, 'environment_failure': env},
                         ensure_ascii=False, indent=1))
        return
    names = {'A': 'Complete', 'B': 'Partial', 'C': 'Degraded', 'D': 'Failed'}
    print(f'Capture Quality：{final} — {names[final]}' + (f'（自動判定 {g}，研究者覆寫：{o.reason}）' if o.override else ''))
    for r in why:
        print(f'  - {r}')
    if o.cmd == 'image' and m.get('gaps'):
        print('  缺口（原圖 y 範圍）：' + '、'.join(f'{a}-{b}' for a, b in m['gaps']))
    if env:
        print('Research Environment Failure：研究環境被網站拒絕，不是網站設計的問題。用其他擷取方式（Playwright fallback）'
              '再試一次；仍被拒絕就把這個網站記為「研究環境失敗」，不要寫設計結論（references/capture-reliability.md §6.1）。')
    elif final != 'A':
        print('下一步：Fallback Capture（references/capture-reliability.md §3），之後跑 quality_check.py final 重新判定；'
              '缺口內的內容寫「未觀察到」，不要寫成網站沒有。')


def main_final(p, o):
    import wr_status
    d = wr_status.load(o.site_dir)
    if o.override:
        if not o.reason:
            p.error('final --override 一定要寫 --reason，並指出依據哪些擷取')
        ov = d.setdefault('final_overrides', {})
        for item in o.override:
            dev, _, g = item.partition('=')
            if dev not in DEVICES or g not in GRADE_ORDER:
                p.error(f'無法解析 {item}（裝置：desktop／tablet／mobile；等級 A–D）')
            ov[dev] = {'grade': g, 'reason': o.reason}
        wr_status.save(o.site_dir, d)
    fin = final_capture(d, o.site_dir)
    status = research_status(fin)
    wr_status.set_key(o.site_dir, 'final_capture', fin)
    wr_status.set_key(o.site_dir, 'research_status', status)
    if o.json:
        print(json.dumps({'final_capture': fin, 'research_status': status}, ensure_ascii=False, indent=1))
        return
    print('Final Capture Quality（證據集合：Initial＋Fallback → Final）')
    print(final_table(fin))
    if status == 'environment-failure':
        print('\n研究狀態：Research Environment Failure（主要內容只有被拒絕的頁面；不要寫設計結論，記入研究限制並補位）')


if __name__ == '__main__':
    main()
