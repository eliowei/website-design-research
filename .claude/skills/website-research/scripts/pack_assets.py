#!/usr/bin/env python3
"""把 research/<網域>/ 的截圖與原始資料打包成可上傳的檔案（取代排程裡舊的 24 張總數上限版本）。

用法：
  python pack_assets.py <網站資料夾> <輸出資料夾> [--max 24] [--quota desktop=7,mobile=6,...]

規則（references/capture-reliability.md §9）：
  1. 報告引用到的截圖一定先打包（validate_refs.py 的同一套解析）。引用數超過上限時直接失敗
     （Pipeline Error，結束碼 2），不要默默丟掉被引用的圖。
     上限 24 張是硬限制（HARD_MAX）：--max 只能調低，不能調高。超過時的修正方式是減少報告裡的重複引用
     （同一段落只引用代表性的 1–3 張、範圍改成代表張），不是提高上限。
  2. 其餘名額依類型分配最低配額，避免某一類（例如互動截圖）把手機截圖擠掉：
       desktop（桌機：desktop.png、pw1440-*）  mobile（手機：mobile.png、pw390-*）
       tablet（平板：tablet.png、pw768-*）      interaction（互動：int*）
       fallback（分段擷取：fb-*）               other（其他）
  3. 配額用完還有名額，依 desktop → mobile → interaction → tablet → fallback → other 補滿。

輸出：<輸出>/img/*.jpg（寬度上限 1440）、<輸出>/data.json（source/ 底下所有 JSON／txt／md 合成一檔）、
      <輸出>/manifest.json（images、data，另外列出 referenced 與 skipped）。
manifest 的格式和舊版相同（images[].path/file/label/w/h、data.file/paths），attach_assets.py 可以直接用。
打包後請跑：python validate_refs.py <網站資料夾> --manifest <輸出>/manifest.json
"""
import argparse
import glob
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from validate_refs import collect_refs, HARD_MAX  # noqa: E402

try:
    from PIL import Image
    Image.MAX_IMAGE_PIXELS = None
except ImportError:
    sys.exit('需要 Pillow：pip install pillow')

MAX_W, MAX_H = 1440, 30000
DEFAULT_QUOTA = {'desktop': 7, 'mobile': 6, 'tablet': 3, 'interaction': 4, 'fallback': 4, 'other': 0}
FILL_ORDER = ('desktop', 'mobile', 'interaction', 'tablet', 'fallback', 'other')
LABELS = {'desktop': '桌機', 'mobile': '手機', 'tablet': '平板'}


def category(rel):
    name = os.path.basename(rel).lower()
    stem = os.path.splitext(name)[0]
    if '/fb/' in rel or stem.startswith('fb-'):
        return 'fallback'
    if stem.startswith('int'):
        return 'interaction'
    if stem in ('desktop',) or stem.startswith('pw1440') or stem.startswith('pw1920'):
        return 'desktop'
    if stem in ('mobile',) or re.match(r'pw3[0-9]{2}', stem):
        return 'mobile'
    if stem in ('tablet',) or stem.startswith('pw768'):
        return 'tablet'
    return 'other'


def sort_key(rel):
    stem = os.path.splitext(os.path.basename(rel))[0]
    order = 0 if stem in ('desktop', 'mobile', 'tablet') else 1 if 'hero' in stem else 2
    nums = [int(x) for x in re.findall(r'\d+', stem)]
    return (order, nums, stem)


def label_for(rel):
    stem = os.path.splitext(os.path.basename(rel))[0]
    return LABELS.get(stem, stem)


def parse_quota(text):
    q = dict(DEFAULT_QUOTA)
    if text:
        for part in text.split(','):
            k, _, v = part.partition('=')
            q[k.strip()] = int(v)
    return q


def select(site_dir, max_n, quota):
    all_imgs = []
    for p in glob.glob(os.path.join(site_dir, 'screenshots', '**', '*'), recursive=True):
        if p.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            all_imgs.append(os.path.relpath(p, site_dir).replace(os.sep, '/'))
    refs = collect_refs(site_dir)
    referenced = sorted({k for k in refs if k.startswith('screenshots/') and k in all_imgs}, key=sort_key)
    if len(referenced) > max_n:
        raise SystemExit(f'Pipeline Error：報告引用了 {len(referenced)} 張截圖，超過上限 {max_n}。'
                         f'請減少報告中的重複引用後重新打包（上限是硬限制、不能提高；被引用的圖不能被默默丟掉）。')
    chosen = list(referenced)
    by_cat = {}
    for rel in sorted(all_imgs, key=sort_key):
        by_cat.setdefault(category(rel), []).append(rel)
    count = {c: sum(1 for r in chosen if category(r) == c) for c in FILL_ORDER}
    for c in FILL_ORDER:  # 最低配額
        for rel in by_cat.get(c, []):
            if len(chosen) >= max_n or count[c] >= quota.get(c, 0):
                break
            if rel not in chosen:
                chosen.append(rel)
                count[c] += 1
    for c in FILL_ORDER:  # 剩下的名額
        for rel in by_cat.get(c, []):
            if len(chosen) >= max_n:
                break
            if rel not in chosen:
                chosen.append(rel)
                count[c] += 1
    skipped = [r for r in sorted(all_imgs, key=sort_key) if r not in chosen]
    return chosen, referenced, skipped, count


def convert(site_dir, rel, out_img):
    im = Image.open(os.path.join(site_dir, rel)).convert('RGB')
    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
    if im.height > MAX_H:
        im = im.crop((0, 0, im.width, MAX_H))
    name = re.sub(r'[^\w.-]', '_', rel.replace('screenshots/', '').replace('/', '-'))
    dst = os.path.join(out_img, os.path.splitext(name)[0] + '.jpg')
    q = 82
    while True:
        im.save(dst, 'JPEG', quality=q, optimize=True, progressive=True)
        if os.path.getsize(dst) < 15 * 1024 * 1024 or q <= 40:
            break
        q -= 12
    return dst, im.width, im.height


def bundle_source(site_dir, out):
    bundle = {}
    for p in sorted(glob.glob(os.path.join(site_dir, 'source', '**', '*'), recursive=True)):
        rel = os.path.relpath(p, site_dir).replace(os.sep, '/')
        if os.path.isdir(p) or rel.startswith('source/assets/') or rel == 'source/index.html':
            continue
        if not rel.endswith(('.json', '.txt', '.md')):
            continue
        with open(p, encoding='utf-8', errors='replace') as f:
            text = f.read()
        if rel.endswith('.json'):
            try:
                bundle[rel] = json.loads(text)
                continue
            except Exception:
                pass
        bundle[rel] = text
    if not bundle:
        return None
    dp = os.path.join(out, 'data.json')
    with open(dp, 'w', encoding='utf-8') as f:
        json.dump({'domain': os.path.basename(site_dir.rstrip('/')), 'files': bundle}, f, ensure_ascii=False)
    return {'file': os.path.abspath(dp), 'paths': sorted(bundle)}


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('site_dir')
    p.add_argument('out_dir')
    p.add_argument('--max', type=int, default=HARD_MAX, help=f'打包張數上限（預設 {HARD_MAX}；只能調低，不能超過 {HARD_MAX}）')
    p.add_argument('--quota', help='例如 desktop=7,mobile=6,tablet=3,interaction=4,fallback=4')
    o = p.parse_args()
    if o.max > HARD_MAX:
        print(f'Pipeline Error：--max {o.max} 超過硬限制 {HARD_MAX}。上限不能提高；請減少報告中的重複引用。', file=sys.stderr)
        sys.exit(2)
    site = o.site_dir.rstrip('/')
    out_img = os.path.join(o.out_dir, 'img')
    os.makedirs(out_img, exist_ok=True)
    stale = os.path.join(o.out_dir, 'manifest.json')
    if os.path.exists(stale):  # 這次打包失敗時，不能讓上一次的 manifest 被誤當成這次的結果
        os.remove(stale)
    chosen, referenced, skipped, count = select(site, o.max, parse_quota(o.quota))
    manifest = {'images': [], 'data': None, 'referenced': referenced, 'skipped': skipped, 'categories': count,
                'max': o.max, 'hard_max': HARD_MAX}
    for rel in chosen:
        dst, w, h = convert(site, rel, out_img)
        manifest['images'].append({'path': rel, 'file': os.path.abspath(dst), 'label': label_for(rel),
                                   'w': w, 'h': h, 'category': category(rel)})
    manifest['data'] = bundle_source(site, o.out_dir)
    with open(os.path.join(o.out_dir, 'manifest.json'), 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    print(json.dumps({'images': len(manifest['images']), 'referenced': len(referenced), 'skipped': len(skipped),
                      'categories': count,
                      'data_files': len(manifest['data']['paths']) if manifest['data'] else 0,
                      'bytes': sum(os.path.getsize(i['file']) for i in manifest['images'])}, ensure_ascii=False))


if __name__ == '__main__':
    main()
