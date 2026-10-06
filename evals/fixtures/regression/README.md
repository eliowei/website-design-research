# Regression fixtures（2026-10-05 每日研究的實際案例）

`python evals/run_checks.py` 的 `regression`（不需要瀏覽器）與 `--pw` 的 `REG-pw-*` 會用到這些資料。
修改 skill、references 或 scripts 時，這些案例都必須維持通過；新的實際異常也請照這個方式加進來（真實資料去識別化後存成 fixture，再寫一個 REG 測試）。

| 測試 | 實際案例 | 期望行為 | 資料 |
|---|---|---|---|
| REG-01 | Santioni Spirits：Firecrawl 與 Playwright 都被導到 `/unsupported` | Research Environment Failure（不是一般的 Capture D、不能覆寫、preflight 為 Blocked、Overall D） | `santioni-unsupported.json`、`../unsupported.html` |
| REG-02 | Spyker Cars：Firecrawl B、fallback 捲動被接管 D | Final B | （測試內建） |
| REG-03 | Brilean：Firecrawl C、fallback A | Final A | （測試內建） |
| REG-04 | bleibtgleich'26 手機：Firecrawl D（預載 97%）、fallback A；Nightkidz 手機：fallback 重拍 D → A | Final A；舊的嘗試保留在證據集合 | （測試內建） |
| REG-05 | Nightkidz：Primary CTA 選中 cookie 橫幅的 Privacy Policy | Action Verification Failed；不點 consent／法律元素；有真正的轉換 CTA 時選它 | `nightkidz-cta-1440.json`、`nightkidz-click-1440.json`、`../consent-cta.html`、`../consent-only.html` |
| REG-06 | 高 Value＋Low Feasibility（Design Bomb、bleibtgleich，以及合成的 webgl-hero） | 可以降級研究（reduced、≤ 480 秒、排最後、列不可驗證項目），不阻塞 pipeline；候選池缺 preflight → Pipeline Error | `standard-candidates-10.json` |
| REG-07 | Brilean 報告引用 33 張截圖 > 打包上限 24 | Pipeline Error，不默默刪圖、不留舊 manifest | （測試內建） |
| REG-08 | 報告引用不存在的截圖 | Pipeline Error（結束碼 1） | （測試內建） |
