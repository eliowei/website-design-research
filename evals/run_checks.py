#!/usr/bin/env python3
"""website-research skill 的 lint／驗證／工具測試。不研究任何真實網站。

用法：
  python evals/run_checks.py            # lint＋單元測試（不需要瀏覽器，約 10 秒）
  python evals/run_checks.py --pw       # 另外用 evals/fixtures/ 的本機頁面測 Playwright 工具（約 6 分鐘）

檢查內容：
  lint      SKILL.md frontmatter、相對連結都存在、SKILL.md 提到的腳本都存在、所有腳本可編譯、--help 可執行、
            evals.json 格式、既有規則仍在（rule preservation）
  unit      quality_check 的等級、reliability 的算法（含使用者範例 B/C/D/A → C）、pack_assets 的配額與
            「被引用的圖一定打包」、validate_refs 抓得到沒上傳的引用
  pw        fixtures：隱藏複本、內層 hover、選單、自訂捲動容器、捲動被鎖、捲動進場（fallback）、永遠載不完的頁面
"""
import argparse
import json
import os
import py_compile
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILL = os.path.join(ROOT, '.claude', 'skills', 'website-research')
S = os.path.join(SKILL, 'scripts')
FIX = os.path.join(ROOT, 'evals', 'fixtures')
sys.path.insert(0, S)

results = []


def check(name, cond, detail=''):
    results.append((name, bool(cond), detail))
    print(('PASS ' if cond else 'FAIL ') + name + (f' — {detail}' if detail and not cond else ''))


def run(argv, timeout=120):
    p = subprocess.run(argv, capture_output=True, text=True, timeout=timeout)
    return p.returncode, p.stdout + p.stderr


# ---------------------------------------------------------------- lint
def lint():
    text = open(os.path.join(SKILL, 'SKILL.md'), encoding='utf-8').read()
    m = re.match(r'^---\nname: (.+)\ndescription: (.+?)\n---\n', text, re.S)
    check('frontmatter: name 與 description', m and m.group(1).strip() == 'website-research' and len(m.group(2)) <= 1024,
          'name／description 缺少或 description 超過 1024 字')
    # 相對連結
    md_files = [os.path.join(dp, f) for dp, _, fs in os.walk(SKILL) for f in fs if f.endswith('.md')]
    md_files.append(os.path.join(ROOT, 'README.md'))
    broken = []
    for f in md_files:
        t = open(f, encoding='utf-8').read()
        if '/templates/' in f.replace(os.sep, '/'):
            continue  # 範本裡的連結是給產出的報告用的
        for href in re.findall(r'\]\(([^)#\s]+)(?:#[^)]*)?\)', t):
            if href.startswith(('http', 'mailto:')) or '<' in href:
                continue
            if not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(f), href))):
                broken.append(f'{os.path.relpath(f, ROOT)} → {href}')
    check('相對連結都存在', not broken, '; '.join(broken[:5]))
    # SKILL.md 提到的腳本
    missing = []
    for ref in set(re.findall(r'\$SCRIPTS/([\w/]+\.py)', text)) | set(re.findall(r'scripts/([\w/]+\.py)', text)):
        if not os.path.exists(os.path.join(S, ref)):
            missing.append(ref)
    check('SKILL.md 提到的腳本都存在', not missing, ', '.join(missing))
    # 編譯與 --help
    pys = [os.path.join(dp, f) for dp, _, fs in os.walk(S) for f in fs if f.endswith('.py')]
    bad = []
    for f in pys:
        try:
            py_compile.compile(f, doraise=True)
        except Exception as e:
            bad.append(f'{os.path.basename(f)}: {e}')
    check(f'所有腳本可編譯（{len(pys)} 個）', not bad, '; '.join(bad))
    helpless = []
    for f in pys:
        base = os.path.basename(f)
        if base in ('common.py', 'wr_status.py', 'viewport_worker.py'):
            continue
        code, out = run([sys.executable, f, '--help'], timeout=60)
        if code != 0:
            helpless.append(f'{base}: {out.strip().splitlines()[-1] if out.strip() else code}')
    check('每個 CLI 的 --help 可執行', not helpless, '; '.join(helpless))
    # evals.json
    ev = json.load(open(os.path.join(ROOT, 'evals', 'evals.json'), encoding='utf-8'))
    ids = [e['id'] for e in ev['evals']]
    ok = len(ids) == len(set(ids)) and all(e.get('prompt') and e.get('assertions') and e.get('expected_output') for e in ev['evals'])
    check(f'evals.json 格式（{len(ids)} 個案例）', ok)
    json.load(open(os.path.join(ROOT, 'evals', 'trigger-eval.json'), encoding='utf-8'))
    check('trigger-eval.json 可讀', True)
    # 既有規則仍在：改版不能把原本的規則弄丟
    keep = ['maxAge: 0', '（推測）', '不寫評分表', '不聲稱轉換效果', '品牌定位是詮釋', '**唯讀**', '**止於建議**', '**保持範圍**',
            '實作交接摘要', '**沒說就用 Daily。**', '只量**看得見的元素**' if '只量**看得見的元素**' in text else '真的看得見、可以互動',
            'Daily 推測的驗證結果', '不要繞過', 'ERR_CERT_AUTHORITY_INVALID', '_slices/', 'research/README.md',
            '被擋下的檔案不要用 Bash 或其他方式繞過', 'Standard 不做', 'Daily 不做', '多網站比較', 'references/deep-mode.md',
            '商業／轉換', '品牌／風格', '一頁以內']
    lost = [k for k in keep if k not in text]
    check('既有規則仍在 SKILL.md', not lost, '遺失：' + '、'.join(lost))
    new = ['Research completeness should degrade gracefully', 'Research value and research feasibility are separate dimensions',
           'Never treat missing evidence as evidence of absence', 'Capture Quality', 'Research Reliability', 'preflight.py',
           'run_standard.py', 'validate_refs.py']
    miss = [k for k in new if k not in text]
    check('新規則寫進 SKILL.md', not miss, '缺少：' + '、'.join(miss))
    ref = open(os.path.join(SKILL, 'references', 'capture-reliability.md'), encoding='utf-8').read()
    import quality_check as Q
    import reliability as R  # noqa: F401
    sync = [f'{int(Q.D_BLANK_RATIO * 100)}%', f'{int(Q.C_BLANK_RATIO * 100)}%', f'{int(Q.B_BLANK_RATIO * 100)}%']
    check('門檻和文件一致（quality_check ↔ capture-reliability.md）', all(x in ref for x in sync), str(sync))
    sys.path.insert(0, os.path.join(S, 'pw'))
    import common as C
    vb = C.BUDGET['viewport']
    check('時間預算和文件一致（common.BUDGET ↔ capture-reliability.md）',
          all(f'{k}：{v} 秒' in ref for k, v in vb.items()) and f'{C.BUDGET["site"]} 秒' in ref)


# ---------------------------------------------------------------- unit
def make_img(path, w, h, blank_from=None, blank_to=None, color=(255, 255, 255)):
    from PIL import Image, ImageDraw
    im = Image.new('RGB', (w, h), (240, 240, 240))
    d = ImageDraw.Draw(im)
    for y in range(0, h, 40):  # 有內容的條紋
        d.rectangle([20, y, w - 20, y + 12], fill=(20 + (y * 7) % 200, 60, 120))
    if blank_from is not None:
        d.rectangle([0, blank_from, w, blank_to], fill=color)
    im.save(path)


def unit(tmp):
    import quality_check as Q
    import reliability as R
    import wr_status as W
    p = os.path.join(tmp, 'a.png')
    make_img(p, 1920, 9000)
    g, _ = Q.grade_image(Q.analyze_image(p))
    check('quality: 完整截圖 → A', g == 'A', g)
    make_img(p, 1920, 9000, 6500, 7500)
    g, _ = Q.grade_image(Q.analyze_image(p))
    check('quality: 約 11% 空白 → B', g == 'B', g)
    make_img(p, 1920, 9000, 3000, 6500)
    g, _ = Q.grade_image(Q.analyze_image(p))
    check('quality: 約 39% 空白 → C', g == 'C', g)
    make_img(p, 1920, 20000, 1080, 20000, color=(0, 0, 0))
    g, why = Q.grade_image(Q.analyze_image(p))
    check('quality: 首屏以下全黑 → D', g == 'D', g)
    make_img(p, 1920, 1080)
    g, _ = Q.grade_image(Q.analyze_image(p, content_chars=8000))
    check('quality: 只有一屏但內容很長 → C（只取得首屏）', g == 'C', g)
    g, _ = Q.grade_image(Q.analyze_image(p))
    check('quality: 只有一屏、不知道頁面長度 → B（要確認）', g == 'B', g)
    g, _ = Q.grade_image(Q.analyze_image(os.path.join(tmp, 'missing.png')))
    check('quality: 檔案不存在 → D', g == 'D', g)

    # segment verdicts
    seg = {'file': 'x.png', 'dom_content': {'visible': 3, 'transparent': 0, 'painted': 0.0}}
    check('segment: DOM 有內容、畫面沒畫出來 → unrendered', Q.segment_verdict(seg, 0.95, True) == 'unrendered')
    seg = {'file': 'x.png', 'dom_content': {'visible': 0, 'transparent': 0}}
    check('segment: DOM 也沒有內容 → empty-by-design', Q.segment_verdict(seg, 0.95, True) == 'empty-by-design')
    seg = {'file': 'x.png', 'dom_content': {'visible': 0, 'transparent': 4}}
    check('segment: 內容還是透明 → unrendered', Q.segment_verdict(seg, 0.7, True) == 'unrendered')
    seg = {'file': 'x.png', 'dom_content': {'visible': 2, 'transparent': 0, 'painted': 1.0}}
    check('segment: 有留白但內容畫出來了 → content', Q.segment_verdict(seg, 0.8, True) == 'content')

    # reliability
    def status(caps, captures):
        return {'captures': {k: {'grade': v} for k, v in captures.items()},
                'capabilities': {vp: {n: {'status': s} for n, s in c.items()} for vp, c in caps.items()}}
    d = status({}, {'firecrawl-desktop': 'C', 'fallback-desktop': 'A', 'firecrawl-mobile': 'C'})
    r = R.compute(d, 'daily')
    check('reliability daily: fallback 救回桌機 → Capture A；Responsive 取較差 → C；Overall C',
          (r['capture'], r['responsive'], r['overall'], r['interaction']) == ('A', 'C', 'C', 'N/A'), str(r))
    d = status({}, {'firecrawl-desktop': 'D', 'firecrawl-mobile': 'A'})
    check('reliability: Capture D → Overall D', R.compute(d, 'daily')['overall'] == 'D')
    # 使用者範例：Capture B、Interaction C、Responsive D、DOM/CSS A → Overall C
    d = {'captures': {'firecrawl-desktop': {'grade': 'B'}}, 'capabilities': {},
         'reliability_overrides': {'interaction': {'grade': 'C'}, 'responsive': {'grade': 'D'}, 'domcss': {'grade': 'A'}}}
    check('reliability: 範例 B/C/D/A → Overall C', R.compute(d, 'standard')['overall'] == 'C', str(R.compute(d, 'standard')))
    full = {vp: {'screenshot': 'ok', 'scroll': 'ok', 'dom': 'ok', 'css': 'ok'} for vp in ('1440', '768', '390')}
    full['1440'].update(hover='ok', focus='ok', cta_click='ok', menu='na')
    full['390']['menu'] = 'ok'
    r = R.compute(status(full, {'pw-desktop': 'A', 'pw-mobile': 'A'}), 'standard')
    check('reliability standard: 全部取得 → 全 A', (r['capture'], r['interaction'], r['responsive'], r['domcss'], r['overall']) == ('A',) * 5, str(r))
    part = json.loads(json.dumps(full))
    part['390'] = {'screenshot': 'unavailable', 'scroll': 'unavailable', 'dom': 'unavailable', 'css': 'unavailable', 'menu': 'unavailable'}
    part['1440'].update(hover='unverified', focus='ok', cta_click='unverified')
    r = R.compute(status(part, {'pw-desktop': 'B', 'firecrawl-mobile': 'C'}), 'standard')
    check('reliability standard: 390 整個失敗＋hover／點擊未驗證 → Responsive D、Interaction D、Overall D',
          (r['responsive'], r['interaction'], r['overall']) == ('D', 'D', 'D'), str(r))
    part['390'] = {'screenshot': 'ok', 'scroll': 'unavailable', 'dom': 'ok', 'css': 'ok', 'menu': 'ok'}
    r = R.compute(status(part, {'pw-desktop': 'B', 'firecrawl-mobile': 'C'}), 'standard')
    check('reliability standard: 390 只有首屏（捲不動）＋hover 未驗證 → Responsive C、Interaction C',
          (r['responsive'], r['interaction']) == ('C', 'C'), str(r))
    md = R.markdown(R.compute(status({}, {'firecrawl-desktop': 'B', 'firecrawl-mobile': 'B'}), 'daily'), {})
    check('reliability markdown 帶「不是網站設計的好壞」', '不是網站設計的好壞' in md)

    # validate_refs + pack_assets
    site = os.path.join(tmp, 'example.com')
    os.makedirs(os.path.join(site, 'screenshots', 'pw'))
    os.makedirs(os.path.join(site, 'screenshots', 'fb'))
    os.makedirs(os.path.join(site, 'source', 'pw'))
    make_img(os.path.join(site, 'screenshots', 'desktop.png'), 400, 1200)
    make_img(os.path.join(site, 'screenshots', 'mobile.png'), 200, 1200)
    for i in range(12):
        make_img(os.path.join(site, 'screenshots', 'pw', f'pw1440-s{i:02d}.png'), 300, 200)
        make_img(os.path.join(site, 'screenshots', 'pw', f'pw390-s{i:02d}.png'), 120, 200)
        make_img(os.path.join(site, 'screenshots', 'pw', f'int1440-hover-{i}-after.png'), 80, 40)
    make_img(os.path.join(site, 'screenshots', 'fb', 'fb-d-s03.png'), 300, 200)
    json.dump({'a': 1}, open(os.path.join(site, 'source', 'pw', 'cta-1440.json'), 'w'))
    with open(os.path.join(site, 'notes.md'), 'w', encoding='utf-8') as f:
        f.write('CTA（截圖：pw390-s09～pw390-s11、int1440-hover-11-after）\n動態（DOM；截圖：pw1440-s03、s05）\n'
                '[CTA 清單](source/pw/cta-1440.json)\nfallback（截圖：fb-d-s03）\n切圖（截圖：d03）\n')
    import validate_refs as V
    errs, refs = V.check(site)
    check('validate_refs: 解析範圍與沿用前綴', all(f'screenshots/pw/pw390-s{n}.png' in refs for n in ('09', '10', '11'))
          and 'screenshots/pw/pw1440-s05.png' in refs and 'screenshots/desktop.png' in refs, str(sorted(refs)))
    check('validate_refs: 檔案都在 → 沒有錯誤', not errs, '; '.join(errs))
    with open(os.path.join(site, 'summary.md'), 'w', encoding='utf-8') as f:
        f.write('不存在的圖（截圖：pw768-s02）\n')
    errs, _ = V.check(site)
    check('validate_refs: 引用不存在的截圖 → 錯誤', any('pw768-s02' in e for e in errs))
    os.remove(os.path.join(site, 'summary.md'))
    # 舊版打包：只取前 24 張，手機段落被擠掉 → 驗證應該失敗
    old_manifest = {'images': [{'path': p} for p in sorted(r for r in refs if r.startswith('screenshots/'))[:3]], 'data': None}
    mp = os.path.join(tmp, 'old.json')
    json.dump(old_manifest, open(mp, 'w'))
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site, '--manifest', mp])
    check('validate_refs: 引用的圖沒打包 → Pipeline Error（結束碼 1）', code == 1 and 'Pipeline Error' in out, out[-200:])
    out_dir = os.path.join(tmp, 'pack')
    code, out = run([sys.executable, os.path.join(S, 'pack_assets.py'), site, out_dir])
    man = json.load(open(os.path.join(out_dir, 'manifest.json'), encoding='utf-8'))
    paths = {i['path'] for i in man['images']}
    check('pack_assets: 被引用的圖全部打包', set(man['referenced']) <= paths, str(set(man['referenced']) - paths))
    check('pack_assets: 總數不超過 24', len(man['images']) <= 24, str(len(man['images'])))
    cats = man['categories']
    check('pack_assets: 手機與互動截圖都有保留配額', cats.get('mobile', 0) >= 6 and cats.get('interaction', 0) >= 4, str(cats))
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site, '--manifest', os.path.join(out_dir, 'manifest.json')])
    check('pack → validate_refs 通過', code == 0, out[-300:])
    code, out = run([sys.executable, os.path.join(S, 'pack_assets.py'), site, os.path.join(tmp, 'pack2'), '--max', '3'])
    check('pack_assets: 引用數超過上限 → 失敗而不是丟圖', code != 0 and 'Pipeline Error' in out, out[-200:])
    # day.json 驗證
    urls = {i['file']: f'/_blob/{n:032x}' for n, i in enumerate(man['images'])}
    day = {'reports': {'example.com': {'files': [{'key': 'notes', 'md': open(os.path.join(site, 'notes.md'), encoding='utf-8').read()}],
                                       'assets': {'images': [{'path': i['path'], 'url': urls[i['file']]} for i in man['images']],
                                                  'data': {'url': '/_blob/x', 'paths': (man['data'] or {}).get('paths', [])}}}}}
    dp = os.path.join(tmp, 'day.json')
    json.dump(day, open(dp, 'w'), ensure_ascii=False)
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site, '--day', dp, '--domain', 'example.com'])
    check('validate_refs --day: 上傳網址齊全 → 通過', code == 0, out[-300:])
    day['reports']['example.com']['assets']['images'] = day['reports']['example.com']['assets']['images'][1:]
    json.dump(day, open(dp, 'w'), ensure_ascii=False)
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site, '--day', dp, '--domain', 'example.com'])
    check('validate_refs --day: 少一張上傳網址 → Pipeline Error', code == 1, out[-200:])
    W.set_capability(site, 1440, 'hover', 'ok', 'x')
    check('wr_status: 拒絕未知狀態', _raises(lambda: W.set_capability(site, 1440, 'hover', 'great')))


def _raises(fn):
    try:
        fn()
    except ValueError:
        return True
    return False


# ---------------------------------------------------------------- playwright fixtures
def pw(tmp):
    PW = os.path.join(S, 'pw')
    url = lambda n: 'file://' + os.path.join(FIX, n)  # noqa: E731

    def status(site):
        return json.load(open(os.path.join(site, 'source', 'capture-status.json'), encoding='utf-8'))

    site = os.path.join(tmp, 'basic')
    code, out = run([sys.executable, os.path.join(PW, 'run_standard.py'), url('basic.html'), site, '--budget', '300'], timeout=400)
    d = status(site)
    caps = d['capabilities']
    check('pw basic: 三個寬度都完成', all(caps.get(v, {}).get('screenshot', {}).get('status') == 'ok' for v in ('1440', '768', '390')), out[-300:])
    hov = json.load(open(os.path.join(site, 'source', 'pw', 'hover-1440.json'), encoding='utf-8'))
    btn = [t for t in hov['targets'] if t.get('text') == 'Get started']
    check('pw basic: hover 寫在內層（span／svg）也量得到', btn and btn[0].get('inner_only') and any('svg' in c['node'] for c in btn[0]['changes']),
          json.dumps(btn, ensure_ascii=False)[:300])
    cta = json.load(open(os.path.join(site, 'source', 'pw', 'cta-1440.json'), encoding='utf-8'))
    check('pw basic: 隱藏的重複 CTA 被排除', cta['hiddenDuplicatesExcluded'] >= 1 and cta['by_text'].get('Get started') == 2, str(cta['by_text']))
    check('pw basic: 選擇器優先用 semantic（a[href]）', cta['ctas'][0]['selector']['kind'] == 'semantic', str(cta['ctas'][0]['selector']))
    check('pw basic: 390 選單打得開、1440 不需要選單', caps['390']['menu']['status'] == 'ok' and caps['1440']['menu']['status'] == 'na')
    check('pw basic: 選單按鈕不算 CTA', not any(c['text'] == '☰' for c in json.load(open(os.path.join(site, 'source', 'pw', 'cta-390.json')))['ctas']))
    check('pw basic: focus 有 outline', caps['1440']['focus']['status'] == 'ok')
    check('pw basic: Overall A', d['reliability']['overall'] == 'A', str(d['reliability']))

    site = os.path.join(tmp, 'custom')
    run([sys.executable, os.path.join(PW, 'run_standard.py'), url('custom-scroll.html'), site, '--budget', '200', '--viewports', '1440,390'], timeout=300)
    d = status(site)
    seg = json.load(open(os.path.join(site, 'source', 'pw', 'segments-1440.json'), encoding='utf-8'))
    check('pw custom-scroll: wheel 捲得動自訂捲動容器', d['capabilities']['1440']['scroll']['status'] == 'ok' and seg['scroll']['method'] == 'wheel', str(seg['scroll']))
    check('pw custom-scroll: 分段 Capture A', d['captures']['pw-desktop']['grade'] == 'A', str(d['captures']['pw-desktop']))

    site = os.path.join(tmp, 'locked')
    code, out = run([sys.executable, os.path.join(PW, 'run_standard.py'), url('locked.html'), site, '--budget', '200', '--viewports', '1440,390'], timeout=300)
    d = status(site)
    check('pw locked: 捲不動 → scroll unavailable（locked），不重試', d['capabilities']['1440']['scroll']['status'] == 'unavailable'
          and 'locked' in d['capabilities']['1440']['scroll']['detail'])
    check('pw locked: 捲動失敗不影響其他能力', d['capabilities']['1440']['dom']['status'] in ('ok', 'partial')
          and d['capabilities']['1440']['cta']['status'] == 'ok')

    site = os.path.join(tmp, 'lazy')
    run([sys.executable, os.path.join(PW, 'capture_page.py'), url('lazy-reveal.html'), site, '--full-page'], timeout=120)
    run([sys.executable, os.path.join(S, 'quality_check.py'), 'image', os.path.join(site, 'screenshots', 'pw', 'pw1440-full.png'),
         '--record', site, '--as', 'firecrawl-desktop'])
    run([sys.executable, os.path.join(PW, 'scroll_page.py'), url('lazy-reveal.html'), site, '--capture-only'], timeout=200)
    d = status(site)
    check('pw lazy-reveal: 整頁截圖空白 → 低於 A', d['captures']['firecrawl-desktop']['grade'] in ('C', 'D'), str(d['captures']['firecrawl-desktop']['grade']))
    check('pw lazy-reveal: fallback 分段擷取救回 → A', d['captures'].get('fallback-desktop', {}).get('grade') == 'A', str(d['captures'].get('fallback-desktop')))
    check('pw lazy-reveal: fallback 截圖存在 screenshots/fb/', os.path.exists(os.path.join(site, 'screenshots', 'fb', 'fb-d-s01.png')))

    site = os.path.join(tmp, 'hang')
    import time
    t0 = time.monotonic()
    run([sys.executable, os.path.join(PW, 'run_standard.py'), url('hang.html'), site, '--budget', '160', '--viewports', '1440,390',
         '--viewport-budget', '1440=60', '--viewport-budget', '390=50'], timeout=300)
    secs = time.monotonic() - t0
    d = status(site)
    check('pw hang: 在時間上限內結束', secs < 160 + 60, f'{secs:.0f} 秒')
    check('pw hang: 所有能力標 unavailable，研究仍可降級繼續', all(r['status'] == 'unavailable' for r in d['capabilities']['1440'].values())
          and d['reliability']['overall'] == 'D')
    code, out = run([sys.executable, os.path.join(PW, 'preflight.py'), url('hang.html'), os.path.join(tmp, 'pre-hang'), '--budget', '60'], timeout=120)
    check('pw preflight: 載不完的頁面 → Blocked', 'Blocked' in out, out[-200:])
    code, out = run([sys.executable, os.path.join(PW, 'preflight.py'), url('locked.html'), os.path.join(tmp, 'pre-locked'), '--budget', '60'], timeout=120)
    check('pw preflight: 捲動被鎖 → Low', 'Low' in out, out[-200:])
    code, out = run([sys.executable, os.path.join(PW, 'preflight.py'), url('basic.html'), os.path.join(tmp, 'pre-basic'), '--budget', '60'], timeout=120)
    check('pw preflight: 正常頁面 → High', 'High' in out, out[-200:])


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--pw', action='store_true', help='也跑 Playwright fixtures 測試')
    ap.add_argument('--keep', action='store_true', help='保留暫存資料夾')
    o = ap.parse_args()
    tmp = tempfile.mkdtemp(prefix='wr-checks-')
    try:
        print('== lint'); lint()
        print('== unit'); unit(tmp)
        if o.pw:
            print('== playwright fixtures'); pw(tmp)
    finally:
        if o.keep:
            print('暫存：' + tmp)
        else:
            shutil.rmtree(tmp, ignore_errors=True)
    failed = [r for r in results if not r[1]]
    print(f'\n{len(results) - len(failed)}/{len(results)} 通過')
    sys.exit(1 if failed else 0)


if __name__ == '__main__':
    main()
