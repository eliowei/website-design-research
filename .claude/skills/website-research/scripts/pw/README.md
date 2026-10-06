# Playwright 量測工具

Standard／Deep 用的可重用量測工具，以及 Daily fallback 的分段擷取。規則與門檻見 `../../references/capture-reliability.md`。

- Chromium：自動找 `/opt/pw-browsers/chromium-*/chrome-linux/chrome`（或環境變數 `PW_CHROMIUM`）；不要執行 `playwright install`。
- 代理：自動使用 `HTTPS_PROXY`。憑證錯誤時照 SKILL.md 把環境 CA 加進 NSS，不要關掉憑證檢查。
- 沒有 GPU：預設 `--gpu swiftshader`（軟體渲染 WebGL），比完全不畫好，但會很慢；時間預算已經考慮這點。
- 所有工具都把能力狀態寫進 `research/<網域>/source/capture-status.json`。

| 工具 | 做什麼 | 主要輸出 |
|---|---|---|
| `run_standard.py` | **Standard 的進入點**：依序量 1440 → 390 → 768，每個寬度一個子行程、各自有時間上限，逾時強制中止 | 全部輸出＋`source/pw/run-summary.json`，印出可靠度與能力狀態表 |
| `preflight.py` | Feasibility Preflight（≤ 90 秒）：能不能載入、截圖、捲動，WebGL／smooth scroll／幀率、手機；研究環境被拒絕（browser unsupported 等）→ Blocked | `source/preflight.json`（High／Medium／Low／Blocked＋建議範圍） |
| `capture_page.py` | capture-page：載入、等穩定、拍首屏；逾時改用 CDP | `screenshots/pw/pw<寬>-hero.png`、`source/pw/capture-<寬>.json` |
| `scroll_page.py` | scroll-page：wheel → 觸控 → 鍵盤 → scrollTo 分段捲動截圖；用 DOM 驗證每一屏有沒有真的畫出來。`--capture-only` 是 Daily fallback | `pw<寬>-sNN.png` 或 `screenshots/fb/fb-d-sNN.png`、`segments-<寬>.json` |
| `inspect_visible.py` | inspect-visible-elements：可見、可互動的元素＋DOM＋computed style，排除隱藏複本 | `source/pw/dom-css-<寬>.json` |
| `measure_cta.py` | measure-cta：CTA 清單（consent／法律／導覽元素標 `conversion: false`）；`--click` 從轉換 CTA 中點一次 Primary CTA，並做 Action Verification | `cta-<寬>.json`、`click-<寬>.json`（含 `verification`）、`int<寬>-cta-click.png` |
| `action_verify.py` | Action Verification 的判斷邏輯（不需要瀏覽器）：Target Correctness → Action Success → Expected Outcome；也能檢查既有的 `click-<寬>.json` | verdict：verified／failed／unverified |
| `measure_hover.py` | measure-hover：按鈕本身＋子孫＋偽元素 hover 前後差異 | `hover-<寬>.json`、`int<寬>-hover-<n>-before/after.png` |
| `measure_focus.py` | measure-focus：Tab 走一遍的焦點位置與焦點樣式 | `focus-<寬>.json`、`int<寬>-focus-<n>.png` |
| `measure_responsive.py` | measure-responsive：版面快照、打開選單；`compare` 產生三寬度對照 | `layout-<寬>.json`、`menu-<寬>.json`、`responsive.json` |
| `viewport_worker.py` | （內部）在一個頁面裡跑完一個寬度的所有量測 | — |
| `common.py` | 共用：時間預算、逾時與重試、CDP 截圖、可見性判斷、選擇器產生 | — |

搭配的非 Playwright 工具（在 `../`）：`quality_check.py`（Capture Quality；`final` 以證據集合判定 Final Capture Quality；偵測 Research Environment Failure）、
`select_standard.py`（Standard Candidate Pipeline：Value × Feasibility 選 Standard）、`reliability.py`（Research Reliability）、
`pack_assets.py`（依類型配額打包截圖）、`validate_refs.py`（引用的截圖是否存在、是否已上傳）、`capture_tools.py`（切圖、取樣色碼）。

## 常用指令

```bash
S=<skill 資料夾>/scripts
# Standard
python $S/pw/preflight.py https://example.com research/example.com
python $S/pw/run_standard.py https://example.com research/example.com
python $S/reliability.py research/example.com --mode standard --markdown --write

# Daily fallback（Capture Quality 低於 A）→ Re-evaluate → Final
python $S/pw/scroll_page.py https://example.com research/example.com --viewport 1440 --capture-only
python $S/pw/scroll_page.py https://example.com research/example.com --viewport 390 --capture-only
python $S/quality_check.py final research/example.com

# 從 Daily 選 Standard（候選池每一站都要先跑 preflight.py）
python $S/select_standard.py candidates.json --research-dir research --k 3

# 檢查一次 CTA 點擊是否真的驗證到
python $S/pw/action_verify.py research/example.com --viewport 1440

# 單獨補量一項（例如只想補 390 的選單）
python $S/pw/measure_responsive.py https://example.com research/example.com --viewport 390
```

## 選擇器與可見性

- 可見：`display` 不是 none、`visibility` 不是 hidden、`opacity` 不是 0、bounding box ≥ 1px、`checkVisibility()`、不在 `aria-hidden`／`inert` 裡，而且與 viewport 有交集（現在在畫面內，或分段捲動時出現過）。
- 被其他元素蓋住（`elementFromPoint` 拿到別的元素）標 `topmost: false`，hover 會記成 unverified 而不是硬點。
- 選擇器依序：semantic element（`a[href=…]`、`button[name=…]`、`h1`…）→ `[role=…]` → `[aria-label=…]` 等 → `data-*` → DOM 結構路徑 → 文字（最後才用）。每個選擇器都只在「可見元素」中比對，避免選到隱藏的重複元素。

## 測試

`evals/run_checks.py` 用 `evals/fixtures/` 的本機頁面測這些工具：隱藏複本、內層 hover、自訂捲動容器、捲動被鎖、捲動進場、永遠載不完的頁面，
以及 2026-10-05 實際案例的回歸測試：cookie 橫幅搶走 Primary CTA（`consent-cta.html`、`consent-only.html`）、browser unsupported（`unsupported.html`）。
