# 靜態審查：website-research（測試前）

對照對象：skill-snapshot/SKILL.md、skill-snapshot/template.md、實際產出 research/butter.video/report.md、research/coloniazacamil.com/report.md

| # | 檢查點 | 目前 SKILL.md / template 是否有指示 | 證據 |
|---|---|---|---|
| 1 | 研究流程 | 部分：有 抓取→截圖→分析→報告 四步，但「分析」只有一步，沒有 Context、Observation、Pattern、Design Language、Synthesis 的分段 | SKILL.md §1–§4；template 章節 1–7 是並列面向，不是遞進階段 |
| 2 | 觀察 vs 詮釋 | 弱：只有「推測的內容標明『推測』」一條，沒有 Observation / Interpretation / Hypothesis / Verified Pattern / Principle 的層級 | SKILL.md §3「有根據」 |
| 3 | 證據 | 弱：要求「對應到截圖或抓到的資料」，但沒有規定引用格式，也沒有證據類型清單 | butter 報告的結論大多沒有標來源 |
| 4 | 視覺 | 部分：template 有版面、配色、字型、元件；缺 Grid、Spacing 系統、Shape、Border、Elevation、Iconography、Hierarchy、Composition、Density 的提示；沒有「形成什麼視覺語言」 | template §1–§4 |
| 5 | UX | 弱：只有「文案與資訊架構」；沒有 Navigation、Flow、Affordance、Discoverability、Feedback、Form、States、Cognitive load | template §6 |
| 6 | 動態 | 弱：template §5 只有一行「捲動動畫、hover 效果、轉場」，沒有 trigger/target/property/duration/easing 的描述框架 | template §5 |
| 7 | 響應式 | 弱：只抓桌機和手機（無 tablet）；template §7 只問「版面變化、導覽列處理」 | SKILL.md §1；template §7 |
| 8 | 模式 | 缺：單站報告沒有 Pattern 章節；只有多站比較才有「共同趨勢」 | SKILL.md §5 |
| 9 | 設計語言 | 缺：只有「一句話總結」，沒有設計原則/哲學綜合 | template 開頭 |
| 10 | 設計系統 | 缺：沒有提到 tokens/components/variants/states，也沒有「推論不等於事實」的規則 | — |
| 11 | Agent 交接 | 不適用（單一代理），但也沒有階段產出物可交接；所有內容在一份 report.md 一次寫完 | SKILL.md §4 |
| 12 | 職責重複 | template 的「可以學的地方」散落在每一節，與最後的優缺點、總結重複 | butter 報告每節都有「可以學的地方」 |
| 13 | 產出品質 | 有評分表但沒有評分依據；「視覺美感 5」本身就是無證據主觀評語 | template「參考價值評分」 |
| 14 | 研究範圍 | 缺：沒有說明「不做前端實作」 | — |
| 15 | 與 oss-research 一致 | 缺：沒有 Claim→Verification、cite-forward、self-review、method notes、cost/value | — |
