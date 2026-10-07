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

「click 成功」不等於「CTA flow verified」：
  - 頁內控制（Scroll Down、Previous／Next、輪播圓點、Show point、播放鍵…）在 Target Correctness 就失敗。
  - href="#"、javascript: 或沒有目的地的元素：只有開出非 cookie 的對話框（或換頁）才算預期結果；
    沒有變化、或只有「狀態改變」都是 unverified。
  - 換頁了，但落地頁是機器人驗證（Cloudflare「Just a moment...」、__cf_chl）→ unverified（研究環境被落地站拒絕）。
  - 有 href 卻落在別的路徑（例如目標 /contact、落在 /blog）→ failed（結果不符預期）。

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


# 頁內控制元素：捲動提示、輪播與分頁切換、媒體控制。點了只會改變頁內狀態，不是轉換行動（2026-10-06：Scroll Down、Previous）
PAGE_CONTROL_RE = re.compile(r'^(scroll( down| to (explore|discover|top))?|scroll ?↓|↓|back to top|to top|to start|skip( intro)?|'
                             r'prev(ious)?( slide)?|next( slide)?|←|→|‹|›|«|»|slide \d+|go to slide \d+|'
                             r'play|pause|mute|unmute|sound( on| off)?|(click to )?enable sound|replay|'
                             r'show point .*|view more photos|zoom( in| out)?|drag( to see more)?|by (day|night))$', re.I)
# 研究環境被落地站拒絕（機器人驗證）：網址或標題的明確訊號
CHALLENGE_URL_RE = re.compile(r'__cf_chl|/cdn-cgi/challenge|captcha|/challenge(\b|/)', re.I)
CHALLENGE_TITLE_RE = re.compile(r'^just a moment|attention required|verify (that )?you are (a )?human|'
                                r'performing security verification|are you a robot|access denied', re.I)


def destination(target):
    """目標有沒有實際的目的地：'url'（有 href，會換頁或開新分頁）、'anchor'（#section，頁內跳轉）、
    'none'（href="#"、javascript:、沒有 href 的 button）。"""
    href = (target or {}).get('href') or ''
    h = href.strip()
    if not h or h in ('#', '#!', '#0') or h.lower().startswith('javascript:'):
        return 'none'
    if h.startswith('#'):
        return 'anchor'
    return 'url'


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
        if PAGE_CONTROL_RE.match(text) or PAGE_CONTROL_RE.match((target.get('aria') or '').strip()):
            reasons.append(f'「{text or target.get("aria")}」是頁內控制（捲動提示、輪播、分頁、媒體控制），不是轉換行動')
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
    dest = destination(target)
    if res in (None, 'error'):
        return False, 'none', [f'動作沒有發生：{(result or {}).get("error") or "沒有結果"}']
    if res == 'no_observable_change':
        extra = '；目標沒有實際目的地（href 為空、# 或 javascript:）' if dest == 'none' else ''
        return True, 'none', ['點擊後沒有可觀察的變化（URL、對話框、狀態都沒變）' + extra]
    url = (result or {}).get('url') or ''
    title = (result or {}).get('title') or ''
    if res in ('navigated', 'new_tab') and (CHALLENGE_URL_RE.search(url) or CHALLENGE_TITLE_RE.search(title.strip())):
        # 有換頁，但看到的是機器人驗證頁：研究環境被落地站拒絕，落地結果無法確認（不是 verified，也不代表連結壞掉）
        return True, 'none', [f'落地頁是研究環境的機器人驗證（{title or url[:80]}），無法確認落地結果']
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
        if dest in ('none', 'anchor'):
            # href="#"／沒有目的地：只看到「狀態變了」，無法確認是 CTA flow（表單、對話框、換頁）
            return True, 'none', ['目標沒有實際目的地（href 為空、# 或 javascript:），點擊後只有頁面狀態改變，'
                                  '沒有可驗證的換頁／網址／對話框，不能算 CTA flow']
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
