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
  regression  2026-10-05 每日研究實際發生的異常（REG-01～REG-08，資料在 evals/fixtures/regression/）：
            browser unsupported、Initial＋Fallback 的 Final Capture、CTA 選錯元素、高 Value＋Low Feasibility、
            打包上限、引用不存在的截圖。
            2026-10-06 的實際案例（REG-09～REG-14）：Final Capture = Evidence Quality × Evidence Coverage
            （B→A→B、D→A→C、C→D→B、fallback A 但涵蓋不足）、CTA 選到 Scroll Down／href="#"／Previous、
            Cloudflare 驗證頁、preflight 並行造成 fps 偏低、截圖超過 24 張、減少重複引用後通過 deployment gate。
            修改 skill 時這些都必須維持通過。
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
           'run_standard.py', 'validate_refs.py',
           # 2026-10-06：證據集合、正式 fallback 流程、Action Verification、統一的 Standard 候選管線
           'Final Capture Quality', '證據集合', 'Re-evaluate', 'Research Environment Failure', 'Action Verification',
           'Target Correctness', 'Action Success', 'Expected Outcome', 'select_standard.py', 'Daily × 10', 'Standard Candidate Pool',
           # 2026-10-07：Evidence Quality × Coverage、preflight serial、href="#"、deployment gate
           'Evidence Quality', 'Evidence Coverage', 'High quality + Low coverage ≠ High quality + High coverage',
           'Research Environment Load ≠ Website Performance', 'load_affected', 'href="#"', 'deploy_gate.py', '硬限制']
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
          all(f'{k}：{v} 秒' in ref for k, v in vb.items()) and f'{C.BUDGET["site"]} 秒' in ref and f'{C.BUDGET["reduced_site"]} 秒' in ref)
    import select_standard as SEL
    check('Standard 選站常數和文件一致（select_standard ↔ capture-reliability.md／SKILL.md）',
          SEL.REDUCED_BUDGET == C.BUDGET['reduced_site'] and f'≥ {SEL.EXCEPTION_MIN_VALUE}' in text and f'{SEL.EXCEPTION_MARGIN} 分以上' in text)
    cov = [f'≥ {int(Q.COV_A * 100)}%', f'≥ {int(Q.COV_B * 100)}%', f'≥ {int(Q.COV_C * 100)}%', f'≥ {Q.GAP_CAP_VH:g} 個視窗高',
           f'約 ≥ {Q.SPREAD_MIN_VIEWPORTS:g} 個視窗']
    check('Coverage 門檻和文件一致（quality_check ↔ capture-reliability.md §2.2）', all(x in ref for x in cov), str(cov))
    import validate_refs as VR
    import preflight as PF
    check('打包硬上限與文件一致（validate_refs.HARD_MAX ↔ SKILL.md／capture-reliability.md）',
          VR.HARD_MAX == 24 and '24 張是硬上限' in ref and '24 張是硬限制' in text)
    check('preflight 負載門檻與文件一致（preflight.LOAD_PER_CPU_MAX ↔ capture-reliability.md §5.1）', f'≥ {PF.LOAD_PER_CPU_MAX:g}' in ref)
    for sec in ('### 2.1 Final Capture Quality', '### 2.2 Evidence Quality 與 Evidence Coverage', '### 5.1 Preflight',
                '### 6.1 Research Environment Failure', '### 6.2 Action Verification'):
        check(f'capture-reliability.md 有「{sec[4:]}」', sec in ref)


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


# ---------------------------------------------------------------- regression（2026-10-05 實際研究的異常）
REG = os.path.join(FIX, 'regression')


def _site_with_captures(tmp, name, captures):
    """captures：[(key, grade, extra)]，依序記錄（同 key 重複記錄 = 同一種擷取又試了一次）。"""
    import wr_status as W
    site = os.path.join(tmp, name)
    os.makedirs(site, exist_ok=True)
    for key, grade, extra in captures:
        W.set_capture(site, key, {'kind': 'image', 'auto_grade': grade, 'grade': grade, 'reasons': [], 'metrics': {}, 'gaps': [],
                                  **(extra or {})})
    return site


def regression(tmp):
    import quality_check as Q
    import reliability as R
    import wr_status as W
    sys.path.insert(0, os.path.join(S, 'pw'))
    import action_verify as AV
    import select_standard as SEL

    # R1 Browser unsupported → Research Environment Failure（Santioni Spirits）
    fx = json.load(open(os.path.join(REG, 'santioni-unsupported.json'), encoding='utf-8'))
    fc, pwx = fx['firecrawl'], fx['playwright']
    env = Q.environment_failure(fc['url'], fc['title'], fc['markdown'], fc['statusCode'])
    check('REG-01a browser unsupported（Firecrawl 訊號）→ Research Environment Failure',
          env and env['type'] == 'unsupported-browser', str(env))
    env2 = Q.environment_failure(pwx['url'], pwx['title'], pwx['text'])
    check('REG-01b browser unsupported（Playwright 訊號）→ Research Environment Failure', env2 and env2['type'] == 'unsupported-browser', str(env2))
    check('REG-01c 正文很長、只是提到 captcha → 不是環境失敗',
          Q.environment_failure('https://x.com/', 'Security blog', 'How captcha works. ' * 200) is None)
    p = os.path.join(tmp, 'unsupported.png')
    make_img(p, 1920, 1080)  # 畫面看起來「有內容」：一定要靠網址／文字訊號，不能只靠空白偵測
    site = os.path.join(tmp, 'santioni')
    code, out = run([sys.executable, os.path.join(S, 'quality_check.py'), 'image', p, '--record', site, '--as', 'firecrawl-desktop',
                     '--page-url', fc['url'], '--page-title', fc['title'], '--page-text', fc['markdown']])
    check('REG-01d quality_check image 帶網址／標題 → D 並標示 Research Environment Failure',
          'Capture Quality：D' in out and 'Research Environment Failure' in out, out[-300:])
    W.set_capture(site, 'fallback-desktop', {'kind': 'segments', 'grade': 'D', 'auto_grade': 'D', 'reasons': [], 'metrics': {}, 'gaps': [],
                                             'environment_failure': env2})
    d = W.load(site)
    fin = Q.final_capture(d)
    check('REG-01e 只有被拒絕的擷取 → Final status environment-failure', fin['desktop']['status'] == 'environment-failure', str(fin['desktop']))
    r = R.compute(d, 'daily')
    check('REG-01f reliability：research_status environment-failure、Overall D',
          r['research_status'] == 'environment-failure' and r['overall'] == 'D', str(r))
    check('REG-01g 報告開頭寫「研究環境失敗」而不是一般的 Capture D', '研究環境失敗' in R.markdown(r, d))
    code, out = run([sys.executable, os.path.join(S, 'quality_check.py'), 'image', p, '--page-url', fc['url'],
                     '--override', 'B', '--reason', 'x'])
    check('REG-01h 環境失敗的擷取不能被覆寫成較好的等級', code != 0, out[-200:])
    sys.path.insert(0, os.path.join(S, 'pw'))
    import preflight as PF
    g = PF.grade({'http': {'status': 200}, 'desktop': {'nav': {'ok': True}, 'first_screenshot': {'status': 'ok', 'seconds_from_nav': 3},
                                                       'probe': {'url': fc['url'], 'title': fc['title'], 'textSample': pwx['text'], 'nodes': 40}}})
    check('REG-01i preflight：browser unsupported → Blocked（不是 Low）', g[0] == 'Blocked' and 'Environment' in g[2][0], str(g))

    # R2 Initial B + Fallback D → Final B（Spyker：fallback 捲動被接管）
    site = _site_with_captures(tmp, 'spyker', [('firecrawl-desktop', 'B', None), ('fallback-desktop', 'D', None)])
    d = W.load(site)
    fin = Q.final_capture(d)['desktop']
    check('REG-02 Initial B＋Fallback D → Final B（失敗的 fallback 不會拉低已取得的證據）',
          (fin['initial'], fin['fallback'], fin['grade']) == ('B', ['D'], 'B'), str(fin))
    check('REG-02b reliability 的 Capture 用 Final（B）', R.compute(d, 'daily')['capture'] == 'B')
    legacy = {'captures': {'firecrawl-desktop': {'grade': 'B'}, 'fallback-desktop': {'grade': 'D'}}}  # 10/05 以前的格式（沒有 stage）
    fin = Q.final_capture(legacy)['desktop']
    check('REG-02c 舊格式的狀態檔（沒有 stage）也能分出 Initial／Fallback', (fin['initial'], fin['fallback'], fin['grade']) == ('B', ['D'], 'B'), str(fin))

    # R3 Initial C + Fallback A → Final A（Brilean）
    site = _site_with_captures(tmp, 'brilean', [('firecrawl-desktop', 'C', None), ('fallback-desktop', 'A', None),
                                                ('firecrawl-mobile', 'C', None), ('fallback-mobile', 'A', None)])
    d = W.load(site)
    fin = Q.final_capture(d)
    check('REG-03 Initial C＋Fallback A → Final A', fin['desktop']['grade'] == 'A' and fin['mobile']['grade'] == 'A', str(fin))
    r = R.compute(d, 'daily')
    check('REG-03b reliability：Capture A、Responsive A（兩個裝置都由 fallback 補齊）',
          (r['capture'], r['responsive'], r['overall']) == ('A', 'A', 'A'), str(r))

    # R4 Firecrawl D + Fallback A → Final A（bleibtgleich 手機只拍到預載 97%）＋同 key 重拍不覆蓋證據（Nightkidz）
    site = _site_with_captures(tmp, 'bleibt', [('firecrawl-desktop', 'B', None), ('firecrawl-mobile', 'D', None),
                                               ('fallback-mobile', 'A', None)])
    fin = Q.final_capture(W.load(site))['mobile']
    check('REG-04 Firecrawl D＋Fallback A → Final A', (fin['initial'], fin['grade']) == ('D', 'A'), str(fin))
    site = _site_with_captures(tmp, 'nightkidz', [('firecrawl-mobile', 'B', None), ('fallback-mobile', 'D', None),
                                                  ('fallback-mobile', 'A', None)])
    d = W.load(site)
    fin = Q.final_capture(d)['mobile']
    check('REG-04b 同一種 fallback 重拍：舊的 D 留在證據集合（attempts），Final 取 A',
          fin['grade'] == 'A' and fin['fallback'] == ['D', 'A'] and len(d['captures']['fallback-mobile']['attempts']) == 1, str(fin))
    site = _site_with_captures(tmp, 'override', [('firecrawl-desktop', 'C', None), ('fallback-desktop', 'C', None)])
    code, out = run([sys.executable, os.path.join(S, 'quality_check.py'), 'final', site, '--override', 'desktop=B'])
    check('REG-04c final --override 沒有理由 → 拒絕', code != 0)
    code, out = run([sys.executable, os.path.join(S, 'quality_check.py'), 'final', site, '--override', 'desktop=B',
                     '--reason', 'firecrawl-desktop 缺中段、fallback-desktop 補到中段，合起來只缺頁尾'])
    check('REG-04d 互補的兩次擷取：研究者可以有理由地把 Final 調成 B', '**B**' in out and Q.final_capture(W.load(site))['desktop']['grade'] == 'B', out[-300:])

    # R5 CTA selector 點到錯誤元素 → Action Verification Failed（Nightkidz：cookie 橫幅的 Privacy Policy）
    import measure_cta as MC
    cta = json.load(open(os.path.join(REG, 'nightkidz-cta-1440.json'), encoding='utf-8'))
    for c in cta['ctas']:
        c['conversion'], why = AV.target_check(c, 'cta')
    prim = MC.pick_primary(cta)
    check('REG-05a Nightkidz 的候選（Cart、Privacy Policy、Essential Only、Accept All）都不是轉換 CTA → 不選 Primary',
          prim is None and len(cta['primary_rejected']) == 4, str(prim))
    old = json.load(open(os.path.join(REG, 'nightkidz-click-1440.json'), encoding='utf-8'))
    v = AV.verify(old['target'], old)
    check('REG-05b 舊紀錄（target＝Privacy Policy）→ Action Verification Failed（Target Correctness 失敗），能力記 unverified',
          v['verdict'] == 'failed' and not v['target_correctness']['ok'] and v['capability_status'] == 'unverified', v['summary'])
    real = {'text': 'Contact us', 'href': '/contacts', 'style': 'primary', 'section': {'container': 'header'}}
    v = AV.verify(real, {'result': 'navigated', 'url': 'https://example.com/privacy-policy'})
    check('REG-05c 目標對、但點擊後落在 privacy 頁 → Failed（Expected Outcome 不符）',
          v['verdict'] == 'failed' and v['expected_outcome']['outcome'] == 'unexpected', v['summary'])
    v = AV.verify({'text': 'Shop now', 'href': '/shop', 'consent': 'attr:cookie-banner'}, {'result': 'navigated', 'url': 'https://x.com/shop'})
    check('REG-05d 目標在 cookie 橫幅裡（就算網址看起來正常）→ Failed', v['verdict'] == 'failed', v['summary'])
    v = AV.verify(real, {'result': 'navigated', 'url': 'https://example.com/contacts'})
    check('REG-05e 目標對、落地網址對得上 href → verified（能力 ok）', v['verdict'] == 'verified' and v['capability_status'] == 'ok', v['summary'])
    v = AV.verify(real, {'result': 'no_observable_change'})
    check('REG-05f 點了但沒有可觀察的結果 → unverified（不是 verified）', v['verdict'] == 'unverified', v['summary'])
    v = AV.verify(real, {'result': 'dialog', 'dialog_text': 'We use cookies to enhance your experience'})
    check('REG-05g 點擊後開出的是 cookie 對話框 → Failed', v['verdict'] == 'failed', v['summary'])
    mixed = {'ctas': [dict(c) for c in cta['ctas']] + [{'text': 'Shop wheels', 'href': '/us/collections/wheels', 'style': 'link',
                                                         'y': 900, 'topmost': True, 'selector': {'kind': 'semantic'}}]}
    for c in mixed['ctas']:
        c['conversion'], _ = AV.target_check(c, 'cta')
    prim = MC.pick_primary(mixed)
    check('REG-05h 有真正的轉換連結時，就算 consent 按鈕是「按鈕樣式」也選真正的 CTA',
          prim and prim['text'] == 'Shop wheels', str(prim))

    # R6 高 Value＋Low Feasibility → 降級研究，但不阻塞 pipeline
    fx = json.load(open(os.path.join(REG, 'standard-candidates-10.json'), encoding='utf-8'))
    res = SEL.select(json.loads(json.dumps(fx['candidates'])), tmp, 3, None, fx['preflights'])
    sel = {p['domain']: p for p in res['selected']}
    check('REG-06a Daily × 10 → 選出 3 個 Standard', not res['errors'] and len(res['selected']) == 3, str(res['errors']))
    w = sel.get('webgl-hero.example')
    check('REG-06b 高 Value（15）＋Low → 以 reduced 入選、上限 480 秒、排最後、列出不可驗證項目',
          w and w['scope'] == 'reduced' and w['budget'] <= 480 and w['order'] == 3 and w['unverifiable'], str(w))
    check('REG-06c 例外最多 1 個：Value 13／12 的 Low（designbomb、bleibtgleich）不入選',
          'designbomb.it' not in sel and 'bleibtgleich.dev' not in sel)
    check('REG-06d Research Environment Failure 的網站不進候選池', 'santionispirits.com' not in res['pool'])
    pre = dict(fx['preflights'])
    del pre['spykercars.com']
    res2 = SEL.select(json.loads(json.dumps(fx['candidates'])), tmp, 3, None, pre)
    check('REG-06e 候選池有網站沒做 Preflight → Pipeline Error（不能有些做、有些沒做）',
          res2['errors'] and 'spykercars.com' in res2['errors'][0], str(res2['errors']))
    only_low = {k: ({'feasibility': 'Low', 'reasons': ['大面積 canvas（1 個），fps≈2']} if v['feasibility'] != 'High' else v)
                for k, v in fx['preflights'].items()}
    res3 = SEL.select(json.loads(json.dumps(fx['candidates'])), tmp, 3, None, only_low)
    lows = [p for p in res3['selected'] if p['feasibility'] == 'Low']
    check('REG-06f 可量測候選不足時，Low 依 Value 補位（reduced、排在可量測者之後），名額不空著',
          len(res3['selected']) == 3 and all(p['scope'] == 'reduced' for p in lows)
          and [p['feasibility'] for p in res3['selected']][0] == 'High', json.dumps(res3['selected'], ensure_ascii=False)[:300])
    site = os.path.join(tmp, 'blocked-site')
    os.makedirs(os.path.join(site, 'source'), exist_ok=True)
    json.dump({'feasibility': 'Blocked', 'reasons': ['Research Environment Failure（unsupported-browser）']},
              open(os.path.join(site, 'source', 'preflight.json'), 'w'))
    code, out = run([sys.executable, os.path.join(S, 'pw', 'run_standard.py'), 'https://example.invalid/', site], timeout=60)
    check('REG-06g run_standard 遇到 Blocked 立即結束（結束碼 3），不啟動瀏覽器、不拖住後面的網站', code == 3, out[-200:])

    # R7 截圖引用超過打包上限 → Pipeline Error，而不是默默刪除（Brilean 33 張）
    site = os.path.join(tmp, 'over-limit')
    os.makedirs(os.path.join(site, 'screenshots', 'pw'))
    for i in range(30):
        make_img(os.path.join(site, 'screenshots', 'pw', f'pw1440-s{i:02d}.png'), 120, 80)
    with open(os.path.join(site, 'notes.md'), 'w', encoding='utf-8') as f:
        f.write('全部段落（截圖：pw1440-s00～pw1440-s29）\n')
    out_dir = os.path.join(tmp, 'over-pack')
    os.makedirs(out_dir)
    json.dump({'images': [], 'data': None}, open(os.path.join(out_dir, 'manifest.json'), 'w'))  # 上一次的舊 manifest
    code, out = run([sys.executable, os.path.join(S, 'pack_assets.py'), site, out_dir])
    check('REG-07a 引用 30 張 > 上限 24 → Pipeline Error（結束碼非 0）', code != 0 and 'Pipeline Error' in out, out[-200:])
    check('REG-07b 打包失敗不留下舊 manifest（避免被誤當成這次的結果）', not os.path.exists(os.path.join(out_dir, 'manifest.json')))
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site, '--manifest', os.path.join(out_dir, 'manifest.json')])
    check('REG-07c 接著驗證 → Pipeline Error（不是 Python traceback）', code == 1 and 'Traceback' not in out and 'manifest 不存在' in out, out[-200:])

    # R8 Markdown 引用不存在的截圖 → Pipeline Error
    site = os.path.join(tmp, 'missing-ref')
    os.makedirs(os.path.join(site, 'screenshots', 'fb'))
    make_img(os.path.join(site, 'screenshots', 'desktop.png'), 200, 400)
    with open(os.path.join(site, 'summary.md'), 'w', encoding='utf-8') as f:
        f.write('首屏（截圖：desktop）\n中段（截圖：fb-d-s07）\n')
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site])
    check('REG-08 Markdown 引用不存在的截圖（fb-d-s07）→ Pipeline Error（結束碼 1）',
          code == 1 and 'Pipeline Error' in out and 'fb-d-s07' in out, out[-300:])


# ---------------------------------------------------------------- regression（2026-10-06 實際研究的異常）
def _status_from_fixture(caps):
    """fixture 的擷取紀錄 → capture-status 的 dict（不寫檔，直接給 final_capture）。"""
    return {'captures': {k: dict(v) for k, v in caps.items()}}


def _seg_rec(vw, vh, est, ys, verdict='content', stage='fallback'):
    pos = [[y, verdict] for y in ys]
    return {'kind': 'segments', 'stage': stage, 'auto_grade': 'A', 'grade': 'A', 'reasons': [],
            'metrics': {'planned': len(ys), 'usable': len(ys), 'coverage': 1.0, 'vw': vw, 'vh': vh, 'est_height': est,
                        'positions': pos}, 'gaps': []}


def _img_rec(w, h, vh, gaps, grade, failed=False, stage='primary'):
    blank = sum(b - a for a, b in gaps)
    return {'kind': 'image', 'stage': stage, 'auto_grade': grade, 'grade': grade, 'reasons': [],
            'metrics': {'width': w, 'height': h, 'viewport_h': vh, 'blank_ratio': round(blank / h, 3), 'failed': failed,
                        'first_screen_only': False, 'single_screen_unknown': False, 'height_mismatch': 0, 'height_capped': False},
            'gaps': [list(g) for g in gaps]}


def regression_1006(tmp):
    import quality_check as Q
    import wr_status as W
    sys.path.insert(0, os.path.join(S, 'pw'))
    import action_verify as AV
    import measure_cta as MC
    import preflight as PF
    import select_standard as SEL

    # REG-09 Final Capture Quality = Evidence Quality × Evidence Coverage（不是取最高、也不是取最後一次）
    fx = json.load(open(os.path.join(REG, '2026-10-06-captures.json'), encoding='utf-8'))
    cases = {'aardvarkbookclub.com': ('REG-09a', 'aardvarkbookclub 桌機 B → A → B（fallback A 只拍到 1 屏，頁面被鎖成 900px）'),
             'sharplink.com': ('REG-09b', 'sharplink 桌機 B → A → B（fallback 低幀率只拍 3 張，Firecrawl 的 1.6 屏缺口仍在）'),
             'otsuka-air.jp': ('REG-09c', 'otsuka-air 桌機／手機 D → A → C（fallback A 只有頭、中、尾 3 張，涵蓋 7–10%）'),
             'sstr.tech': ('REG-09d', 'sstr 桌機 C → D → B（失敗的 fallback 不拉低；仍有 5 屏缺口 → 不是 A）')}
    for dom, (rid, label) in cases.items():
        site = fx['sites'][dom]
        fin = Q.final_capture(_status_from_fixture(site['captures']))
        got = {dev: fin[dev]['grade'] for dev in site['expected']}
        check(f'{rid} {label}', got == site['expected'], json.dumps({d: (fin[d]['initial'], fin[d]['fallback'], fin[d]['grade'],
                                                                           fin[d].get('coverage')) for d in site['expected']},
                                                                      ensure_ascii=False))
    fin = Q.final_capture(_status_from_fixture(fx['sites']['otsuka-air.jp']['captures']))['desktop']
    best = min([fin['initial']] + fin['fallback'], key=Q.GRADE_ORDER.index)
    check('REG-09e otsuka：Final 不是 Initial／Fallback 中最高的等級（A），也不是最後一次（A）',
          fin['grade'] != best and fin['grade'] != fin['fallback'][-1] and fin['grade'] == 'C', str((best, fin['grade'])))
    check('REG-09f otsuka：Final 記錄 Evidence Quality 與 Evidence Coverage（涵蓋率、屏數、頁首／中段／頁尾、最大缺口）',
          fin.get('evidence_quality') == 'A' and fin['coverage']['coverage'] < 0.25 and fin['coverage']['sections'] == ['頁首', '中段', '頁尾']
          and fin['coverage']['largest_gap_vh'] > 10, json.dumps(fin.get('coverage'), ensure_ascii=False))
    # Initial D（幾乎全空白）＋ fallback A 但只拍到首屏 1 張 → 涵蓋不足，不能升到 A
    d = {'captures': {'firecrawl-desktop': _img_rec(1920, 30000, 1080, [(1080, 30000)], 'D', failed=True),
                      'fallback-desktop': _seg_rec(1440, 900, 22000, [0])}}
    fin = Q.final_capture(d)['desktop']
    check('REG-09g Initial D＋Fallback A 但只拍到 1 個視窗（coverage 不足）→ Final 不是 A（D）',
          fin['grade'] == 'D' and fin['fallback'] == ['A'], str((fin['grade'], fin.get('coverage'))))
    # High quality + Low coverage ≠ High quality + High coverage
    lo = Q.final_capture({'captures': {'fallback-desktop': _seg_rec(1440, 900, 27000, [0, 900, 1800])}})['desktop']
    hi = Q.final_capture({'captures': {'fallback-desktop': _seg_rec(1440, 900, 9000, [i * 900 for i in range(10)])}})['desktop']
    check('REG-09h 同樣是畫面正常的 A：只涵蓋頁首 3 屏（Low coverage）≠ 涵蓋整頁 10 屏（High coverage）',
          lo['evidence_quality'] == hi['evidence_quality'] == 'A' and lo['grade'] == 'D' and hi['grade'] == 'A',
          str((lo['grade'], hi['grade'])))
    # 一張正常截圖 ≠ 整個網站 A：Firecrawl 一屏、頁面長度未知
    one = {'captures': {'firecrawl-desktop': {**_img_rec(1920, 1080, 1080, [], 'B'),
                                              'metrics': {**_img_rec(1920, 1080, 1080, [], 'B')['metrics'], 'single_screen_unknown': True}}}}
    fin = Q.final_capture(one)['desktop']
    check('REG-09i 只有一張正常的一屏截圖（頁面長度未知）→ 不會被認定為 Capture A', fin['grade'] != 'A', str(fin['grade']))
    # 聯集仍有 ≥ 1 屏的連續缺口 → 最多 B
    gap = {'captures': {'firecrawl-desktop': _img_rec(1920, 10000, 1080, [(4000, 5500)], 'B')}}
    check('REG-09j 涵蓋 85% 但仍有 1.4 屏的連續缺口 → 最多 B', Q.final_capture(gap)['desktop']['grade'] == 'B')
    site = _site_with_captures(tmp, 'otsuka-cli', [])
    W.save(site, {**W.load(site), 'captures': {k: dict(v) for k, v in fx['sites']['otsuka-air.jp']['captures'].items()}})
    code, out = run([sys.executable, os.path.join(S, 'quality_check.py'), 'final', site])
    check('REG-09k quality_check final 的表格列出 Quality 與 Coverage', code == 0 and '| Quality | Coverage |' in out and '頁首／中段／頁尾' in out,
          out[-400:])

    # REG-10 Action Verification：工具選錯 CTA（2026-10-06 三站都是）
    cfx = json.load(open(os.path.join(REG, '2026-10-06-cta.json'), encoding='utf-8'))
    dr, er, de = cfx['drone.riotters.com'], cfx['era-residence.com'], cfx['decathlonyestalgia.com']
    ok, why = AV.target_check(dr['tool_click']['target'], 'cta')
    check('REG-10a CTA selector 選到「Scroll Down」→ Target Correctness 失敗（頁內控制，不是轉換行動）', not ok and '頁內控制' in why[0], str(why))
    v = AV.verify(dr['tool_click']['target'], dr['tool_click'])
    check('REG-10b Scroll Down 點了也不能算 CTA 已驗證 → Action Verification Failed', v['verdict'] == 'failed', v['summary'])
    for c in dr['ctas']:
        c['conversion'], _ = AV.target_check(c, 'cta')
    prim = MC.pick_primary(dr)
    check('REG-10c Aevion 的 Primary CTA 改選有實際目的地的「Contact Us」（不是 Scroll Down、分頁按鈕、Show point）',
          prim and prim['text'] == 'Contact Us', str(prim and prim['text']))
    v = AV.verify(er['tool_click']['target'], er['tool_click'])
    check('REG-10d CTA selector 選到 href="#" 的 BOOK A CALL、點擊後沒有可觀察的變化 → unverified（不是 verified）',
          v['verdict'] == 'unverified' and '沒有實際目的地' in v['summary'], v['summary'])
    v = AV.verify({'text': 'BOOK A CALL', 'href': '#'}, {'result': 'state_change'})
    check('REG-10e href="#" 只有「頁面狀態改變」→ unverified（無法確認是 CTA flow）', v['verdict'] == 'unverified', v['summary'])
    v = AV.verify({'text': 'BOOK A CALL', 'href': '#'}, {'result': 'dialog', 'dialog_text': 'Book a call Name Email Phone Message Submit'})
    check('REG-10f href="#" 開出非 cookie 的表單對話框 → verified（有可驗證的 modal）', v['verdict'] == 'verified', v['summary'])
    for c in er['ctas']:
        c['conversion'], _ = AV.target_check(c, 'cta')
    prim = MC.pick_primary(er)
    check('REG-10g ERA 的候選中有實際目的地的連結時，不選 href="#" 的 BOOK A CALL', prim and AV.destination(prim) == 'url',
          str(prim and (prim['text'], prim['href'])))
    ok, why = AV.target_check(de['tool_click']['target'], 'cta')
    check('REG-10h CTA selector 選到輪播的「Previous」→ Target Correctness 失敗', not ok, str(why))
    boutique = {'text': 'BOUTIQUE', 'href': 'https://www.decathlon.fr/sportswear/decathlon-yestalgia?opeco=x', 'style': 'link',
                'y': 20, 'topmost': True, 'section': {'container': 'header'}, 'selector': {'kind': 'semantic'}}
    check('REG-10i「Boutique」是轉換 CTA（以前沒被列入 CTA 清單）', MC.is_cta({'text': 'BOUTIQUE', 'href': boutique['href']}))
    lst = {'ctas': [dict(c) for c in de['ctas']] + [boutique]}
    for c in lst['ctas']:
        c['conversion'], _ = AV.target_check(c, 'cta')
    prim = MC.pick_primary(lst)
    check('REG-10j Decathlon 改選 BOUTIQUE（不是 Previous／Next）', prim and prim['text'] == 'BOUTIQUE', str(prim))
    v = AV.verify({'text': 'Contact', 'href': '/contact'}, {'result': 'navigated', 'url': 'https://example.com/blog'})
    check('REG-10k click 成功但 Expected Outcome 不符（目標 /contact、落在 /blog）→ Failed', v['verdict'] == 'failed'
          and v['action_success']['ok'], v['summary'])
    v = AV.verify(de['manual_click']['target'], de['manual_click']['result'])
    check('REG-10l 落地頁是 Cloudflare 機器人驗證（Just a moment...、__cf_chl）→ unverified（不是 verified）',
          v['verdict'] == 'unverified' and '機器人驗證' in v['summary'], v['summary'])
    v = AV.verify({'text': 'Shop', 'href': '/shop'}, {'result': 'navigated', 'url': 'https://x.com/shop', 'title': 'Attention Required! | Cloudflare'})
    check('REG-10m 只有標題是驗證頁（網址看起來正常）也 → unverified', v['verdict'] == 'unverified', v['summary'])
    ok_d = AV.verify(dr['manual_click']['target'], dr['manual_click']['result'])['verdict']
    ok_e = AV.verify(er['manual_click']['target'], er['manual_click']['result'])['verdict']
    check('REG-10n 手寫補點的真實結果仍判定正確（Aevion Contact Us、ERA Select an Apartment → verified）',
          ok_d == ok_e == 'verified', str((ok_d, ok_e)))

    # REG-11 Research Environment Failure（擷取到的是拒絕或驗證頁）
    env = Q.environment_failure('https://www.decathlon.fr/x?__cf_chl_rt_tk=1', 'Just a moment...', 'Performing security verification')
    check('REG-11a 擷取到 Cloudflare「Just a moment...」→ Research Environment Failure（bot-challenge）',
          env and env['type'] == 'bot-challenge', str(env))
    fxs = json.load(open(os.path.join(REG, 'santioni-unsupported.json'), encoding='utf-8'))['firecrawl']
    env = Q.environment_failure(fxs['url'], fxs['title'], fxs['markdown'], fxs['statusCode'])
    d = {'captures': {'firecrawl-desktop': {'kind': 'image', 'stage': 'primary', 'grade': 'D', 'auto_grade': 'D', 'metrics': {}, 'gaps': [],
                                            'environment_failure': env},
                      'fallback-desktop': {'kind': 'segments', 'stage': 'fallback', 'grade': 'D', 'auto_grade': 'D', 'metrics': {}, 'gaps': [],
                                           'environment_failure': env}}}
    fin = Q.final_capture(d)
    check('REG-11b Browser unsupported（兩種擷取都被拒）→ Research Environment Failure，Final D，不算 Coverage',
          fin['desktop']['status'] == 'environment-failure' and Q.research_status(fin) == 'environment-failure'
          and 'coverage' not in fin['desktop'], str(fin['desktop']))

    # REG-12 Preflight：Research Environment Load ≠ Website Performance
    base = {'http': {'status': 200}, 'desktop': {'nav': {'ok': True}, 'first_screenshot': {'status': 'ok', 'seconds_from_nav': 6},
                                                 'scroll': {'ok': True}, 'fps': 2,
                                                 'probe': {'nodes': 800, 'bigCanvas': 1, 'smoothLib': True, 'stylesheets': {'readable': 3}}},
            'mobile': {'nav': {'ok': True}, 'first_screenshot': {'status': 'ok'}, 'scroll': {'ok': True}}}
    serial = json.loads(json.dumps(base)); serial['concurrency'] = PF.concurrency_record('serial', 0, 0, 0.2, 0.3)
    conc = json.loads(json.dumps(base)); conc['concurrency'] = PF.concurrency_record('concurrent', 0, 2, 0.4, 1.6)
    gs, gc = PF.grade(serial), PF.grade(conc)
    check('REG-12a serial、沒有其他量測、負載低：大面積 canvas＋fps≈2 → Low（量測可信）',
          gs[0] == 'Low' and not serial['load_affected'], str(gs))
    check('REG-12b 3 站並行（同時有 2 個 preflight 在量）→ load_affected，fps 只能降到 Medium 並標「研究環境負載」',
          gc[0] == 'Medium' and conc['load_affected'] and any('Research Environment Load' in r for r in gc[2])
          and any('研究環境負載下量測' in r for r in gc[2]), str(gc))
    locked = json.loads(json.dumps(conc)); locked['desktop']['scroll'] = {'ok': False}
    check('REG-12c 環境負載不會掩蓋結構性問題：捲動被鎖仍是 Low', PF.grade(locked)[0] == 'Low')
    check('REG-12d 只有 CPU 負載高（每顆 ≥ 1.0）也標 load_affected',
          PF.concurrency_record('serial', 0, 0, 1.3, 0.5)['load_affected'] and not PF.concurrency_record('serial', 0, 0, 0.5, 0.6)['load_affected'])
    pre = {'a.example': {'feasibility': 'Medium', 'reasons': gc[2], 'concurrency': conc['concurrency'], 'load_affected': True},
           'b.example': {'feasibility': 'High', 'reasons': [], 'concurrency': serial['concurrency'], 'load_affected': False}}
    full = lambda n: {k: n for k in SEL.VALUE_KEYS}  # noqa: E731
    cands = [{'domain': 'a.example', 'value': full(2)}, {'domain': 'b.example', 'value': full(1)}]
    res = SEL.select(cands, tmp, 1, None, pre)
    md = SEL.markdown(res, cands)
    check('REG-12e select_standard 在選站表標出「負載下量測」並建議 serial 重測',
          '⚠ 負載下量測' in md and res['warnings'] and 'serial' in res['warnings'][0], md[-300:])
    # 預設 serial：另一個行程佔著量測位置時，這一站排隊；等不到就記為 concurrent
    holder = subprocess.Popen([sys.executable, '-c', 'import sys,time; sys.path.insert(0, sys.argv[1]); import preflight as P\n'
                               'with P.MeasureSlot(serial=True):\n    print("held", flush=True); time.sleep(4)', os.path.join(S, 'pw')],
                              stdout=subprocess.PIPE, text=True)
    holder.stdout.readline()
    with PF.MeasureSlot(serial=True, wait=1) as slot:
        others = PF.others_measuring()
    holder.wait(timeout=20)
    check('REG-12f preflight 預設 serial：有其他 preflight 正在量測時排隊；等太久才量的那次記成 concurrent、others ≥ 1',
          slot.serial is False and others >= 1 and slot.waited >= 1, str((slot.serial, others, slot.waited)))
    with PF.MeasureSlot(serial=True, wait=10) as slot2:
        pass
    check('REG-12g 沒有其他 preflight 時立即取得量測位置（serial、不用等）', slot2.serial and slot2.waited < 1, str(slot2.waited))

    # REG-13 Packaging limit 是硬限制，放在 deployment gate
    site = os.path.join(tmp, 'drone-27')
    os.makedirs(os.path.join(site, 'screenshots', 'pw'))
    for i in range(27):
        make_img(os.path.join(site, 'screenshots', 'pw', f'pw1440-s{i:02d}.png'), 120, 80)
    with open(os.path.join(site, 'notes.md'), 'w', encoding='utf-8') as f:
        f.write('Gear（截圖：pw1440-s00～pw1440-s09）\nCapabilities（截圖：pw1440-s10～pw1440-s20）\n頁尾（截圖：pw1440-s21～pw1440-s26）\n')
    out_dir = os.path.join(tmp, 'pack-27')
    code, out = run([sys.executable, os.path.join(S, 'pack_assets.py'), site, out_dir])
    check('REG-13a 報告引用 27 張截圖（drone.riotters.com）→ Pipeline Error，不默默刪圖、不留 manifest',
          code != 0 and 'Pipeline Error' in out and not os.path.exists(os.path.join(out_dir, 'manifest.json')), out[-200:])
    code, out = run([sys.executable, os.path.join(S, 'pack_assets.py'), site, out_dir, '--max', '30'])
    check('REG-13b 不能用 --max 30 提高上限 → Pipeline Error', code != 0 and '硬限制' in out, out[-200:])
    code, out = run([sys.executable, os.path.join(S, 'deploy_gate.py'), '--research', tmp, '--assets', tmp, 'drone-27'])
    check('REG-13c Deployment Gate：打包失敗（沒有 manifest）→ FAIL，不發佈（結束碼 1）', code == 1 and 'FAIL' in out and '不要發佈' in out,
          out[-300:])
    big = os.path.join(tmp, 'pack-25', 'drone-27')
    os.makedirs(big)
    json.dump({'images': [{'path': f'screenshots/pw/pw1440-s{i:02d}.png', 'file': 'x', 'label': 'x', 'w': 1, 'h': 1} for i in range(25)],
               'data': None}, open(os.path.join(big, 'manifest.json'), 'w'))
    code, out = run([sys.executable, os.path.join(S, 'validate_refs.py'), site, '--manifest', os.path.join(big, 'manifest.json')])
    check('REG-13d 別的方式產生的 manifest 超過 24 張 → validate_refs 也是 Pipeline Error（Validate image limit）',
          code == 1 and '硬上限' in out, out[-300:])

    # REG-14 減少重複引用後重新打包 → 通過 deployment gate
    with open(os.path.join(site, 'notes.md'), 'w', encoding='utf-8') as f:
        f.write('Gear（截圖：pw1440-s00、pw1440-s04、pw1440-s08；10 張分段截圖都在同一位置）\n'
                'Capabilities（截圖：pw1440-s10～pw1440-s20）\n頁尾（截圖：pw1440-s21～pw1440-s26）\n')
    out_dir = os.path.join(tmp, 'pack-ok', 'drone-27')
    code, out = run([sys.executable, os.path.join(S, 'pack_assets.py'), site, out_dir])
    man = json.load(open(os.path.join(out_dir, 'manifest.json'))) if code == 0 else {}
    check('REG-14a 減少重複引用（27 → 20 張）後打包成功，被引用的圖都在 manifest 裡',
          code == 0 and len(man.get("referenced", [])) == 20 and len(man['images']) <= 24, out[-200:])
    code, out = run([sys.executable, os.path.join(S, 'deploy_gate.py'), '--research', tmp, '--assets', os.path.join(tmp, 'pack-ok'), 'drone-27'])
    check('REG-14b Deployment Gate：References → Image limit → Packed 都通過 → PASS', code == 0 and 'PASS' in out, out[-300:])


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
    # 回歸：Action Verification（Nightkidz）與 Research Environment Failure（Santioni）在真的瀏覽器裡
    site = os.path.join(tmp, 'consent')
    run([sys.executable, os.path.join(PW, 'measure_cta.py'), url('consent-cta.html'), site, '--click'], timeout=150)
    ck = json.load(open(os.path.join(site, 'source', 'pw', 'click-1440.json'), encoding='utf-8'))
    check('REG-pw-05 cookie 橫幅的 Privacy Policy／Accept All 不會被當成 Primary CTA；點的是 Shop wheels 並驗證落地頁',
          ck['target']['text'] == 'Shop wheels' and ck['verification']['verdict'] == 'verified'
          and status(site)['capabilities']['1440']['cta_click']['status'] == 'ok', json.dumps(ck, ensure_ascii=False)[:300])
    cl = json.load(open(os.path.join(site, 'source', 'pw', 'cta-1440.json'), encoding='utf-8'))
    check('REG-pw-05b cookie 橫幅內的元素標記 consent、conversion: false',
          all(c.get('consent') and c.get('conversion') is False for c in cl['ctas'] if c['text'] in ('Privacy Policy', 'Accept All', 'Essential Only')))
    site = os.path.join(tmp, 'consent-only')
    run([sys.executable, os.path.join(PW, 'measure_cta.py'), url('consent-only.html'), site, '--click'], timeout=150)
    cc = status(site)['capabilities']['1440']['cta_click']
    check('REG-pw-05c 頁面只有 consent 按鈕 → cta_click unverified（不點、不能算 CTA 已驗證）', cc['status'] == 'unverified', str(cc))
    site = os.path.join(tmp, 'unsupported')
    run([sys.executable, os.path.join(PW, 'scroll_page.py'), url('unsupported.html'), site, '--capture-only'], timeout=200)
    run([sys.executable, os.path.join(S, 'quality_check.py'), 'final', site], timeout=60)
    d = status(site)
    check('REG-pw-01 fallback 擷取到「browser not supported」頁面 → Research Environment Failure（不是 Capture A）',
          d['captures']['fallback-desktop'].get('environment_failure') and d.get('research_status') == 'environment-failure',
          json.dumps(d['captures'].get('fallback-desktop', {}), ensure_ascii=False)[:300])
    code, out = run([sys.executable, os.path.join(PW, 'preflight.py'), url('unsupported.html'), os.path.join(tmp, 'pre-unsup'), '--budget', '60'], timeout=120)
    check('REG-pw-01b preflight：browser unsupported → Blocked（Research Environment Failure）', 'Blocked' in out and 'Environment' in out, out[-200:])

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
        print('== regression（2026-10-05 實際案例）'); regression(tmp)
        print('== regression（2026-10-06 實際案例）'); regression_1006(tmp)
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
