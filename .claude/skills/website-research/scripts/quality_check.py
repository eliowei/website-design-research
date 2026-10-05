#!/usr/bin/env python3
"""Capture Quality 檢查：判斷一次擷取能不能支撐研究，並記錄缺口。

用法：
  python quality_check.py image <截圖> [--viewport-h 1080] [--expected-height 9000]
                                [--content-chars 5000] [--record <網站資料夾> --as firecrawl-desktop]
                                [--override B --reason "理由"] [--json]
      檢查一張全頁截圖：空白比例、最長空白、是否只拿到首屏、高度是否和頁面不符。

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
    m = {'file': seg_path, 'planned': planned, 'captured': len(segs), 'usable': len(usable),
         'coverage': round(credit / planned, 3),
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


def record(site_dir, key, kind, metrics, auto_grade, reasons, override=None, reason=None):
    import wr_status
    rec = {'kind': kind, 'auto_grade': auto_grade, 'grade': override or auto_grade,
           'reasons': reasons, 'metrics': {k: v for k, v in metrics.items() if k != 'gaps'},
           'gaps': metrics.get('gaps', [])}
    if override:
        rec['override_reason'] = reason
    wr_status.set_capture(site_dir, key, rec)
    return rec


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest='cmd', required=True)
    a = sub.add_parser('image')
    a.add_argument('path')
    a.add_argument('--viewport-h', type=int)
    a.add_argument('--expected-height', type=int, help='DOM scrollHeight 或其他來源得知的頁面高度')
    a.add_argument('--content-chars', type=int, help='markdown 字數；很長卻只有一屏截圖 → 只拿到首屏')
    b = sub.add_parser('segments')
    b.add_argument('path')
    for x in (a, b):
        x.add_argument('--record', metavar='SITE_DIR')
        x.add_argument('--as', dest='key', help='記錄名稱，例如 firecrawl-desktop、firecrawl-mobile、fallback-desktop')
        x.add_argument('--override', choices=list(GRADE_ORDER))
        x.add_argument('--reason')
        x.add_argument('--json', action='store_true')
    o = p.parse_args()
    if o.override and not o.reason:
        p.error('--override 一定要寫 --reason（例如「看過切圖，空白是設計本身的留白」）')
    if o.cmd == 'image':
        m = analyze_image(o.path, o.viewport_h, o.expected_height, o.content_chars)
        g, why = grade_image(m)
    else:
        m = analyze_segments(o.path)
        g, why = grade_segments(m)
    final = o.override or g
    if o.record:
        if not o.key:
            p.error('--record 需要 --as')
        record(o.record, o.key, o.cmd, m, g, why, o.override, o.reason)
    if o.json:
        print(json.dumps({'grade': final, 'auto_grade': g, 'reasons': why, 'metrics': m}, ensure_ascii=False, indent=1))
        return
    names = {'A': 'Complete', 'B': 'Partial', 'C': 'Degraded', 'D': 'Failed'}
    print(f'Capture Quality：{final} — {names[final]}' + (f'（自動判定 {g}，研究者覆寫：{o.reason}）' if o.override else ''))
    for r in why:
        print(f'  - {r}')
    if o.cmd == 'image' and m.get('gaps'):
        print('  缺口（原圖 y 範圍）：' + '、'.join(f'{a}-{b}' for a, b in m['gaps']))
    if final != 'A':
        print('建議：啟動 fallback 分段擷取（references/capture-reliability.md §3）；'
              '缺口內的內容寫「未觀察到」，不要寫成網站沒有。')


if __name__ == '__main__':
    main()
