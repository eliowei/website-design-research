#!/usr/bin/env python3
"""Action Verification：「點下去了」不等於「CTA 已驗證」。

每一個互動量測（CTA 點擊、hover、focus、選單）都要分三層確認，三層都過才算 verified：

  1. Target Correctness  找到的元素是不是我們要量的那個？
                         例如 Primary CTA 不能是 cookie／consent 橫幅裡的按鈕、隱私權政策、條款、
                         語言切換、被其他元素蓋住或看不見的元素。
  2. Action Success      click／hover／focus 有沒有真的發生？
                         （點擊沒有丟錯、hover 的目標是最上層、focus 真的落在元素上）
  3. Expected Outcome    結果符不符合這個動作的預期？
                         Primary CTA：換頁到非法律頁、開出非 cookie 的對話框或表單、狀態改變，
                         而且落地頁不是 privacy／cookie／terms 這類頁面；有 href 時落地網址要對得上。

判定：
  verified    三層都通過 → 能力狀態 ok（或 fallback，看使用的方法）
  failed      目標選錯，或結果明確不符合預期（例如點到 Privacy Policy、落在 /privacy）→ 能力狀態 unverified，
              報告寫「Action Verification Failed」，不能寫成「CTA 已驗證」
  unverified  動作沒發生，或沒有可觀察的結果 → 能力狀態 unverified

這個模組只有判斷邏輯、不需要瀏覽器，評估測試（evals/run_checks.py）直接呼叫它。
用法（命令列，檢查已經存在的 click-<寬度>.json）：
  python action_verify.py <網站資料夾> [--viewport 1440]
"""
import argparse
import json
import os
import re
import sys
from urllib.parse import urlparse

# 不是轉換行動的元素：consent／cookie 橫幅、法律頁、語言／地區切換、無障礙工具
CONSENT_RE = re.compile(r'cookie|consent|gdpr|ccpa|privacy (settings|preferences|choices)|cmp\b|onetrust|didomi|cookiebot|'
                        r'usercentrics|iubenda|quantcast|trustarc|osano|termly', re.I)
CONSENT_BUTTON_RE = re.compile(r'^(accept( all)?|allow( all)?|reject( all)?|decline|deny|agree|i agree|ok(ay)?|got it|'
                               r'essential only|necessary only|only necessary|save preferences|manage (cookies|preferences)|'
                               r'customi[sz]e|cookie settings|preferences)$', re.I)
LEGAL_RE = re.compile(r'privacy|cookie|terms|conditions|legal|imprint|impressum|disclaimer|gdpr|accessibility statement|'
                      r'complaint|livro ?de ?reclama', re.I)
LEGAL_URL_RE = re.compile(r'/(privacy|privacy-policy|cookie|cookies|cookie-policy|terms|terms-and-conditions|tos|legal|imprint|'
                          r'impressum|disclaimer|gdpr)(\b|[/_.?#-])', re.I)
UTILITY_RE = re.compile(r'^(en|fr|de|it|es|pt|nl|ja|zh|ko|english|français|deutsch|italiano|español|language|lang|'
                        r'skip to (main )?content|menu|close|search|sign in|log ?in|login|account|cart( \(\d+\))?)$', re.I)


def _blob(t):
    return ' '.join(str(t.get(k) or '') for k in ('text', 'aria', 'href'))


def target_check(target, kind='cta'):
    """Target Correctness。回傳 (ok: bool, reasons: [..])。

    target 是 measure_cta 的 CTA 項目（text、href、aria、section、consent、topmost、visibleNow…）。
    """
    reasons = []
    if not target:
        return False, ['沒有目標元素']
    text = (target.get('text') or '').strip()
    href = target.get('href') or ''
    sec = target.get('section') or {}
    if target.get('consent'):
        reasons.append(f'目標在 cookie／consent 區塊裡（{target.get("consent")}）')
    if CONSENT_RE.search(' '.join(str(sec.get(k) or '') for k in ('container', 'heading'))):
        reasons.append(f'目標所在段落是 consent 區塊（{sec}）')
    if kind == 'cta':
        if CONSENT_BUTTON_RE.match(text):
            reasons.append(f'「{text}」是 consent 按鈕，不是轉換行動')
        if LEGAL_RE.search(text) or LEGAL_RE.search(target.get('aria') or '') or LEGAL_URL_RE.search(href):
            reasons.append(f'「{text or href}」是法律／隱私權連結，不是轉換行動')
        if UTILITY_RE.match(text):
            reasons.append(f'「{text}」是導覽／工具元素，不是轉換行動')
    if target.get('topmost') is False:
        reasons.append('目標被其他元素蓋住（topmost: false）')
    if target.get('visibleNow') is False and kind != 'cta':
        reasons.append('目標目前不在畫面上')
    return (not reasons), reasons


def is_conversion_candidate(target):
    ok, _ = target_check(target, 'cta')
    return ok


def _path(u):
    try:
        return urlparse(u).path or '/'
    except Exception:
        return u or ''


def outcome_check(target, result, kind='cta'):
    """Action Success＋Expected Outcome。result 是 measure_cta.click 的輸出。回傳 (action_ok, outcome, reasons)。

    outcome：'expected' | 'unexpected' | 'none'
    """
    reasons = []
    res = (result or {}).get('result')
    if res in (None, 'error'):
        return False, 'none', [f'動作沒有發生：{(result or {}).get("error") or "沒有結果"}']
    if res == 'no_observable_change':
        return True, 'none', ['點擊後沒有可觀察的變化（URL、對話框、狀態都沒變）']
    url = (result or {}).get('url') or ''
    if res in ('navigated', 'new_tab'):
        if LEGAL_URL_RE.search(url) or LEGAL_RE.search(_path(url)):
            return True, 'unexpected', [f'落地頁是法律／隱私權頁面：{url}']
        href = (target or {}).get('href') or ''
        if href and not href.startswith(('#', 'javascript:')):
            want = _path(href) if href.startswith(('/', 'http')) else '/' + href.lstrip('./')
            got = _path(url)
            if want.rstrip('/') and want.rstrip('/') not in got and not href.startswith('mailto:'):
                reasons.append(f'落地網址 {got} 和目標的 href {want} 對不上（可能是轉址，需確認）')
                return True, 'unexpected', reasons
        return True, 'expected', [f'換頁到 {url}']
    if res == 'dialog':
        dlg = (result or {}).get('dialog_text') or ''
        if CONSENT_RE.search(dlg) or LEGAL_RE.search(dlg[:80]):
            return True, 'unexpected', [f'開出的是 consent／法律對話框：{dlg[:60]}']
        return True, 'expected', ['開出對話框' + (f'：{dlg[:60]}' if dlg else '')]
    if res == 'state_change':
        return True, 'expected', ['頁面狀態改變']
    return True, 'none', [f'無法判斷的結果：{res}']


def verify(target, result, kind='cta', target_ok=None, target_reasons=None):
    """綜合三層，回傳 Action Verification 紀錄。"""
    if target_ok is None:
        target_ok, target_reasons = target_check(target, kind)
    action_ok, outcome, out_reasons = outcome_check(target, result, kind) if result is not None else (False, 'none', ['沒有執行動作'])
    if not target_ok:
        verdict = 'failed'
    elif outcome == 'unexpected':
        verdict = 'failed'
    elif action_ok and outcome == 'expected':
        verdict = 'verified'
    else:
        verdict = 'unverified'
    return {'kind': kind, 'verdict': verdict,
            'target_correctness': {'ok': target_ok, 'reasons': target_reasons or []},
            'action_success': {'ok': action_ok},
            'expected_outcome': {'outcome': outcome, 'reasons': out_reasons},
            'capability_status': 'ok' if verdict == 'verified' else 'unverified',
            'summary': summary(verdict, target, target_reasons, out_reasons)}


def summary(verdict, target, t_reasons, o_reasons):
    name = (target or {}).get('text') or (target or {}).get('href') or '?'
    if verdict == 'verified':
        return f'Action Verification：verified（「{name}」{"；".join(o_reasons)}）'
    if verdict == 'failed':
        why = (t_reasons or []) + [r for r in (o_reasons or []) if r]
        return f'Action Verification Failed（「{name}」：{"；".join(why)}）'
    return f'Action Verification：unverified（「{name}」：{"；".join(o_reasons or [])}）'


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('site_dir')
    p.add_argument('--viewport', type=int, default=1440)
    o = p.parse_args()
    path = os.path.join(o.site_dir, 'source', 'pw', f'click-{o.viewport}.json')
    if not os.path.exists(path):
        sys.exit(f'找不到 {path}')
    click = json.load(open(path, encoding='utf-8'))
    v = verify(click.get('target'), click)
    print(json.dumps(v, ensure_ascii=False, indent=1))
    sys.exit(0 if v['verdict'] == 'verified' else 1)


if __name__ == '__main__':
    main()
