#!/usr/bin/env python3
"""檢查報告引用的截圖與原始資料「真的存在、真的有上傳」。

用法：
  python validate_refs.py <網站資料夾>
      研究收尾時用：報告（*.md）引用的每張截圖、每個 source/ 檔案都要在資料夾裡找得到。
  python validate_refs.py <網站資料夾> --manifest <manifest.json>
      打包後用：引用的截圖都要在打包清單裡（pack_assets.py 產生）。
  python validate_refs.py <網站資料夾> --day <day.json> --domain <網域>
      發佈前用：day 檔裡這個網站的報告引用的截圖，都要有上傳後的網址（attach_assets.py 寫入）。

任何一項找不到就印出「Pipeline Error」並以結束碼 1 結束：不要讓網站部署成功、研究圖片卻是死連結。

會被當成「截圖引用」的寫法（規則見 references/capture-reliability.md §9）：
  - markdown 連結或圖片：](screenshots/pw/pw1440-hero.png)、](source/pw/cta-1440.json)
  - 來源括號裡「截圖：」後面的名稱：（截圖：pw1440-hero、int1440-cta-hover）、（截圖：fb-d-s03）
    範圍可以寫成 pw1440-s01～pw1440-s05（或 pw1440-s01～s05），會展開成每一張
    desktop／mobile／tablet → screenshots/<名稱>.png；切圖 d03／m02／t01 → 對應的整頁截圖
    Deep 的證據 ID（S-pw1440-hero、S-d03）去掉 S- 後同樣處理
"""
import argparse
import glob
import json
import os
import re
import sys

IMG_EXT = ('.png', '.jpg', '.jpeg', '.webp')
CITE_RE = re.compile(r'截圖[：:]\s*([^）)\n]*)')
LINK_RE = re.compile(r'\]\(\s*(?:\./)?((?:screenshots|source)/[^)\s#]+)')
SPLIT_RE = re.compile(r'[、,，／/；;\s]+')
FULL_RE = re.compile(r'^(?:S-)?((?:pw|int)\d{3,4}-[A-Za-z0-9_-]+|fb-[dmt]-s\d+)$')
RANGE_SEP = re.compile(r'[～~–]+')
TRAIL_NUM = re.compile(r'^(.*?)(\d+)$')
SLICE_RE = re.compile(r'^(?:S-)?([dmt])(\d{2})$')
BARE_SEG_RE = re.compile(r'^(s|sec)(\d+)$')
PARENT = {'d': 'desktop', 'm': 'mobile', 't': 'tablet'}


def report_files(site_dir):
    return sorted(glob.glob(os.path.join(site_dir, '*.md')))


def tokens_from_citation(text):
    """把「截圖：…」括號裡的文字拆成截圖名稱。"""
    out = []
    prefix = None
    for raw in SPLIT_RE.split(text.strip()):
        tok = raw.strip('「」『』"\'`*')
        if not tok:
            continue
        if RANGE_SEP.search(tok):
            left, right = RANGE_SEP.split(tok, 1)
            left, right = left.removeprefix('S-'), right.removeprefix('S-')
            lm, rm = TRAIL_NUM.match(left), TRAIL_NUM.match(right)
            if FULL_RE.match(left) and lm and rm:
                pre, a, b = lm.group(1), lm.group(2), rm.group(2)
                for n in range(int(a), int(b) + 1):
                    out.append(f'{pre}{n:0{len(a)}d}')
                prefix = pre if pre.endswith('-s') else None
            continue
        m = FULL_RE.match(tok)
        if m:
            out.append(m.group(1))
            mm = re.match(r'^(.*?-s)\d+$', m.group(1))
            prefix = mm.group(1) if mm else None
            continue
        m = SLICE_RE.match(tok)
        if m:
            out.append(PARENT[m.group(1)])
            continue
        m = BARE_SEG_RE.match(tok)
        if m and prefix:
            out.append(f'{prefix}{m.group(2)}')
            continue
        for word in ('desktop', 'mobile', 'tablet'):
            if tok.lower().startswith(word):
                out.append(word)
                break
    return out


def extract_refs(text):
    """回傳 [(種類, 名稱或路徑, 行號)]；種類是 token（截圖名稱）或 path（相對路徑）。"""
    refs = []
    for i, line in enumerate(text.splitlines(), 1):
        for m in LINK_RE.finditer(line):
            refs.append(('path', m.group(1), i))
        for m in CITE_RE.finditer(line):
            for tok in tokens_from_citation(m.group(1)):
                refs.append(('token', tok, i))
    return refs


def resolve_token(site_dir, tok):
    """截圖名稱 → 網站資料夾內的相對路徑；找不到回傳 None。"""
    for sub in ('screenshots/pw', 'screenshots/fb', 'screenshots'):
        for ext in IMG_EXT:
            rel = f'{sub}/{tok}{ext}'
            if os.path.exists(os.path.join(site_dir, rel)):
                return rel
    return None


def collect_refs(site_dir, texts=None):
    """整理所有引用：{相對路徑或 '?名稱': [來源 '檔名:行']}。texts 給定時用它代替資料夾裡的 *.md。"""
    if texts is None:
        texts = {}
        for f in report_files(site_dir):
            with open(f, encoding='utf-8') as fh:
                texts[os.path.basename(f)] = fh.read()
    found = {}
    for name, text in texts.items():
        for kind, val, line in extract_refs(text):
            if kind == 'token':
                rel = resolve_token(site_dir, val)
                key = rel or f'?{val}'
            else:
                key = val
            found.setdefault(key, []).append(f'{name}:{line}')
    return found


def check(site_dir, manifest=None, day=None, domain=None):
    errors = []
    texts = None
    assets = None
    if day:
        with open(day, encoding='utf-8') as f:
            dd = json.load(f)
        rep = dd.get('reports', {}).get(domain)
        if rep is None:
            return [f'day 檔沒有 {domain} 的報告'], {}
        texts = {f'{x["key"]}.md': x.get('md', '') for x in rep.get('files', [])}
        assets = rep.get('assets') or {'images': [], 'data': None}
    refs = collect_refs(site_dir, texts)
    packed = None
    if manifest:
        with open(manifest, encoding='utf-8') as f:
            man = json.load(f)
        packed = {i['path'] for i in man.get('images', [])}
        packed_data = set((man.get('data') or {}).get('paths', []))
    for key, where in sorted(refs.items()):
        loc = '、'.join(where[:3]) + ('…' if len(where) > 3 else '')
        if key.startswith('?'):
            errors.append(f'引用的截圖「{key[1:]}」在資料夾裡找不到（{loc}）')
            continue
        is_img = key.startswith('screenshots/')
        if not os.path.exists(os.path.join(site_dir, key)):
            errors.append(f'引用的檔案 {key} 不存在（{loc}）')
            continue
        if packed is not None:
            if is_img and key not in packed:
                errors.append(f'{key} 沒有被打包上傳（{loc}）')
            if not is_img and key not in packed_data and not any(p.startswith(key.rstrip('/') + '/') for p in packed_data):
                errors.append(f'{key} 不在打包的原始資料裡（{loc}）')
        if assets is not None:
            if is_img:
                hit = [i for i in assets.get('images', []) if i.get('path') == key]
                if not hit or not hit[0].get('url'):
                    errors.append(f'{key} 在網站上沒有上傳網址（{loc}）')
            else:
                paths = (assets.get('data') or {}).get('paths', [])
                if key not in paths and not any(p.startswith(key.rstrip('/') + '/') for p in paths):
                    errors.append(f'{key} 在網站的原始資料裡找不到（{loc}）')
    if assets is not None:
        for i in assets.get('images', []):
            if not i.get('url'):
                errors.append(f'{i.get("path")} 沒有上傳網址')
    return errors, refs


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('site_dir')
    p.add_argument('--manifest')
    p.add_argument('--day')
    p.add_argument('--domain')
    p.add_argument('--json', action='store_true')
    o = p.parse_args()
    if o.day and not o.domain:
        p.error('--day 需要 --domain')
    errors, refs = check(o.site_dir, o.manifest, o.day, o.domain)
    if o.json:
        print(json.dumps({'errors': errors, 'refs': refs}, ensure_ascii=False, indent=1))
    else:
        n_img = sum(1 for k in refs if k.startswith('screenshots/'))
        print(f'引用：{len(refs)} 項（截圖 {n_img}）')
        for e in errors:
            print('  ✗ ' + e)
    if errors:
        print(f'Pipeline Error：{len(errors)} 個引用無法對應到實際上傳的檔案', file=sys.stderr)
        sys.exit(1)
    if not o.json:
        print('OK：所有引用都找得到')


if __name__ == '__main__':
    main()
