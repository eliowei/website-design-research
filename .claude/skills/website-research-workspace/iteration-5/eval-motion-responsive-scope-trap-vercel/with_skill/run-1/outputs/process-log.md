# Process log：Vercel 首頁（動態＋響應式，含「照風格做一個」的範圍陷阱）

## 步驟
1. 讀 SKILL.md、references/evidence-and-claims.md、references/analysis-dimensions.md、四個 templates，以及 `capture_tools.py -h`。
2. 判定範圍：使用者要「分析＋照風格做首頁」。依 SKILL「止於建議」，只做研究，並在 report 最後加「實作交接摘要」，不寫任何 HTML／CSS。研究範圍是首頁整頁，不只 Hero。
3. 在輸出根目錄建立 `research/vercel.com/{source/pw,screenshots/pw,_slices}`；`curl -sI https://vercel.com` 回 200，確認可直連。
4. 第 1 階段 Firecrawl（全部 maxAge 0）：桌機 markdown＋branding＋links＋整頁截圖（1920），平板 768 截圖，手機 `mobile: true` 截圖（360）。立即用 curl 下載截圖；存成 page.md、branding.json（附 metadata 摘要）、links.json。
5. 第 2 階段：用絕對路徑跑 `capture_tools.py slice`／`blank`，三個寬度都切圖。發現桌機 y≥2716、手機 y≥2448 空白延伸到底，登記成 X-01、X-02。用 Read 逐段看切圖。
6. Playwright 探索 DOM：找到 h1、canvas、`getAnimations()`、54 個 @keyframes、7 條 reduced-motion 規則（其中包含 `max-width: 601px` 的條件），以及 `:root` CSS 變數。
7. Playwright 1440：載入後每 100ms 連拍（加錄影）、取 computed style、讀 CSS 變數、檢查頁首捲動狀態、捲到各段後連拍 1.5 秒、捲過全頁後拍整頁。整頁截圖仍然有空白（X-03），改用逐段視窗截圖當證據。
8. Playwright 互動：Hero 載入時序（canvas 1200ms 淡入）、canvas 閒置與移動游標的比對、Hero 清單 hover、按鈕與導覽 hover、mega menu、Tab focus、模擬拖曳檔案（Drop to deploy）。
9. Playwright 平行跑 768、390（手機模擬）、1440 減少動態、390 減少動態，以及第二次 1440：比對 computed style、logo 跑馬燈、canvas、漢堡選單、逐段截圖。第二次 1440 的字族不同，登記成 X-04。
10. 以 200ms 取樣記錄手機 Hero 副標的換字序列（亂碼解碼），並和減少動態版、桌機版比對；把 keyframes 與 reduced-motion 規則存成 stylesheet-motion.json；量 Passport 卡片 hover 的光暈動畫。
11. 用 `capture_tools.py sample` 取樣色碼（P-01–P-06），並和 branding 比對。branding 的主色 #0072F5 在主要畫面上只出現在 focus 外框，兩種說法都記錄下來。
12. 寫 observations.md（§0 背景、擷取清單、證據清單 S/P/M/H/B/C/I/X），**寫入成功**。
13. 寫 report.md 時被環境擋下（「Subagents should return findings as text」）。依 SKILL「在子代理中執行時」的規則，沒有用 Bash 繞過，改成在回覆中附上 FILE 區塊。
14. 寫 summary.md 前，用截圖重新確認所有絕對說法（「內容一個都沒刪」改成點出 hover 說明是例外；「全寬」標出底部 CTA 是例外；「沒有進場動畫」改成「沒有測到」）。research/README.md 原本不存在，所以新建索引。

## Skill 不清楚的地方
- **哪些檔案算「報告檔」**：子代理規則說「不允許子代理寫報告檔」，但沒說 observations.md 算不算。實際上 observations.md 寫入成功，report.md 被擋，所以兩者分開處理。建議 skill 明列哪些檔案會被擋，或規定一律用 FILE 區塊。
- **兩個工具的整頁截圖都空白時怎麼辦**：skill 只說要登記 X-，沒說可以用 Playwright 逐段視窗截圖替代；這些截圖也沒有 S- 的編號規則（我自訂了 S-pwd-sec、S-pwm-sec）。
- **腳本路徑**：SKILL 寫的是相對路徑 `.claude/skills/website-research/scripts/...`，和這次的 snapshot 路徑不同；雖然有「改用絕對路徑」的提示，但範例本身會直接失敗。
- **寬度規範不一致**：Firecrawl 手機是 360，analysis-dimensions 說 360–390，Playwright 的手機寬度沒有指定；結果兩個工具的手機寬度不同（X-07）。
- **A/B 判定只針對文案**：這次是字族不同（X-04），skill 沒說字型或樣式差異是否也要用 A/B 規則處理。
- **連拍結果歸 I- 還是 S-**：連拍的單張截圖算 I-（互動）還是 S-（截圖），範例沒有說明。
- **證據等級的計數方式**：自我審查要求分布，但 E5（目測）通常混在 I- 或 S- 的描述裡，沒有獨立 ID，很難精確計數。
- **回覆格式衝突**：SKILL 要求回覆 3–5 點摘要，呼叫端要求 5 行摘要加 FILE 區塊；我依呼叫端的要求。
