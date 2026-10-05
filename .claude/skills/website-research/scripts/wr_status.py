"""研究狀態檔：記錄這次研究「拿到了什麼證據、哪些能力失敗」。

所有工具共用一個檔案：research/<網域>/source/capture-status.json

{
  "version": 1,
  "captures": {                      # 每次擷取的 Capture Quality（quality_check.py 寫入）
    "firecrawl-desktop": {"grade": "C", "auto_grade": "C", "metrics": {...}, "gaps": [[y0, y1], ...]},
    "fallback-desktop":  {"grade": "B", ...}
  },
  "capabilities": {                  # 每個研究能力在每個寬度的狀態（Playwright 工具寫入）
    "1440": {"screenshot": {"status": "ok", "detail": "..."}, "scroll": {...}, "dom": {...}, ...},
    "390":  {...}
  },
  "preflight": {...},                # preflight.py 的結果（Standard 選站用）
  "reliability": {...},              # reliability.py 算出的 Research Reliability
  "events": [{"t": "...", "msg": "..."}]
}

狀態值（只用這幾個）：
  ok          取得，可以當證據
  fallback    主要方法失敗，備援方法取得（例如 CDP 截圖、分段截圖）；可以當證據，但要註明方法
  partial     只取得一部分（例如只捲到一半、三個元素只量到一個）
  unverified  嘗試了但無法確認結果（例如 hover 目標被遮住）
  unavailable 取不到（逾時、被擋、失敗）
  skipped     因時間預算或研究範圍沒有執行
  na          這個網站不適用（例如沒有選單可以打開）
"""
import json
import os
import time

STATUSES = ('ok', 'fallback', 'partial', 'unverified', 'unavailable', 'skipped', 'na')
GRADES = ('A', 'B', 'C', 'D')


def status_path(site_dir):
    return os.path.join(site_dir, 'source', 'capture-status.json')


def load(site_dir):
    p = status_path(site_dir)
    if os.path.exists(p):
        try:
            with open(p, encoding='utf-8') as f:
                d = json.load(f)
        except Exception:
            d = {}
    else:
        d = {}
    d.setdefault('version', 1)
    d.setdefault('captures', {})
    d.setdefault('capabilities', {})
    d.setdefault('events', [])
    return d


def save(site_dir, d):
    p = status_path(site_dir)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    tmp = p + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(d, f, ensure_ascii=False, indent=1)
    os.replace(tmp, p)


def set_capability(site_dir, viewport, name, status, detail='', **extra):
    if status not in STATUSES:
        raise ValueError(f'未知狀態：{status}')
    d = load(site_dir)
    vp = d['capabilities'].setdefault(str(viewport), {})
    rec = {'status': status, 'detail': detail}
    rec.update(extra)
    vp[name] = rec
    save(site_dir, d)
    return rec


def get_capability(d, viewport, name):
    return d.get('capabilities', {}).get(str(viewport), {}).get(name, {}).get('status')


def set_capture(site_dir, key, record):
    d = load(site_dir)
    d['captures'][key] = record
    save(site_dir, d)


def event(site_dir, msg):
    d = load(site_dir)
    d['events'].append({'t': time.strftime('%Y-%m-%dT%H:%M:%S'), 'msg': msg})
    save(site_dir, d)


def set_key(site_dir, key, value):
    d = load(site_dir)
    d[key] = value
    save(site_dir, d)
