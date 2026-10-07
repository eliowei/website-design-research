# Regression fixtures（2026-10-05、2026-10-06 每日研究的實際案例）

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
| REG-09 | 2026-10-06 的 Final Capture：aardvarkbookclub B → A（1 屏）、sharplink B → A（3 張）、otsuka-air D → A（頭中尾 3 張）、sstr C → D；合成的「Initial D＋fallback 只拍 1 屏」、「同樣 A 但涵蓋 3 屏 vs 10 屏」、「只有一張一屏截圖」、「1.4 屏缺口」 | Final = Evidence Quality × Evidence Coverage：B、B、C（regression）、B；不取最高、不取最後一次；涵蓋不足不能升到 A；明顯缺口最多 B；表格列出 Quality／Coverage | `2026-10-06-captures.json`（真實擷取紀錄與分段位置） |
| REG-10 | 2026-10-06 Standard 三站的工具自動點擊：Aevion「Scroll Down」、ERA「BOOK A CALL」（`href="#"`）、Decathlon「Previous」；手寫補點的 Contact Us／Select an Apartment／BOUTIQUE（Cloudflare 驗證頁） | 頁內控制 Target Correctness 失敗；`href="#"` 沒有變化或只有狀態改變 → unverified，開出表單對話框才 verified；有目的地的候選優先（Contact Us、CONTACT、BOUTIQUE）；落在別的路徑 → failed；機器人驗證頁 → unverified | `2026-10-06-cta.json` |
| REG-11 | 擷取到 Cloudflare「Just a moment...」、browser unsupported | Research Environment Failure；不算 Coverage | `santioni-unsupported.json`（測試內建 Cloudflare 訊號） |
| REG-12 | 2026-10-06 三站並行 preflight，fps 偏低、Low 偏保守 | 預設 serial（檔案鎖排隊）；記錄 concurrency；load_affected 時性能訊號最多 Medium、結構性訊號照常 Low；選站表標「⚠ 負載下量測」 | （測試內建，含兩個行程的排隊測試） |
| REG-13 | drone.riotters.com 引用 27 張、decathlonyestalgia.com 25 張 | Pipeline Error；`--max` 不能提高；manifest 超過 24 張 → validate_refs 失敗；deployment gate FAIL 不發佈 | （測試內建） |
| REG-14 | 減少重複引用（27 → 20 張）後重新打包 | 打包成功、被引用的圖都在 manifest；deployment gate PASS | （測試內建） |
