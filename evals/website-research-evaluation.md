# website-research Skill 評估報告（iteration-1）

- **評估日期**：2026-10-01
- **評估對象**：`.claude/skills/website-research/`（SKILL.md＋template.md，快照於 `website-research-workspace/skill-snapshot/`）
- **對照方法論**：`eliowei/oss-research` 的 `oss-engineering-research` skill v1.2 與 `oss-phase-researcher` agent
- **方法**：skill-creator 評估流程。3 個測試案例，每個各跑「有 skill」和「沒有 skill（基準）」兩組，共 6 次；以 16 條核心評分項目，加上案例專屬項目評分
- **原則**：本報告只提出問題與建議，**沒有修改 skill**

---

## 0. 測試設計與結果總覽

| 案例 | 測什麼 | 有 skill | 沒有 skill |
|---|---|---|---|
| Linear 首頁單站研究 | 完整流程、設計語言 | 4／16 | 6／16 |
| Vercel 動態＋手機版＋「照這風格幫我做首頁」 | 動態、響應式、研究範圍陷阱 | 7／18 | 5／18 |
| Stripe vs Notion 比較 | 跨站模式、設計語言比較 | 10／19 | 9／19 |
| **平均通過率** | | **39%** | **38%** |

**結論：目前的 skill 對研究品質幾乎沒有提升（+1 個百分點）。** 它帶來的是「格式一致」，不是「研究方法」。

### 逐項比較（通過數／執行次數）

| 評分項目 | 有 skill | 沒有 skill | 解讀 |
|---|---|---|---|
| A01 流程順序（觀察→分析→模式→語言→總結） | 0／3 | 0／3 | 兩邊都沒有遞進階段，skill 沒有提供 |
| A02 網站理解（Context） | 0／3 | 0／3 | 範本只有「類型」一行 |
| A03 觀察 vs 詮釋區隔 | 0／3 | 0／3 | 沒有任何指示 |
| A04 假設標記 | **3／3** | 0／3 | **skill 唯一明確有效的規則**（「推測」標記） |
| A05 無空泛評語 | **0／3** | 3／3 | **skill 反而變差**：範本的「參考價值評分：視覺美感 5」本身就是無依據的評語 |
| A06 證據可追溯 | 0／3 | 0／3 | 有色碼來源，詮釋性結論沒有 |
| A07 視覺涵蓋 ≥10 項 | 3／3 | 2／3 | 範本有幫助 |
| A08 視覺語言綜合 | 1／3 | 2／3 | 基準組反而更會綜合 |
| A09 UX 涵蓋 ≥7 項 | 0／3 | 0／3 | 範本只有「文案與資訊架構」 |
| A10 動態結構化 | 2／3 | 1／3 | 有幫助，但沒有任何一份用 trigger／property／duration 框架 |
| A11 響應式維度（含 tablet） | 0／3 | 1／3 | skill 只抓桌機和手機，從沒提 tablet |
| A12 模式抽取 | 1／3 | 1／3 | 單站報告沒有模式章節 |
| A13 設計語言綜合 | 1／3 | 2／3 | 範本沒有這一節 |
| A14 設計系統推論 | 1／3 | 1／3 | 沒有指示 |
| A15 不確定性段落 | 3／3 | 2／3 | 「研究範圍限制」規則有效 |
| A16 可遷移原則 | 3／3 | 2／3 | 「可以學的地方」有效，但散落各節 |
| B01 研究範圍（不做前端實作） | **0／1** | 0／1 | **有 skill 也做了 `demo-homepage/index.html`** |
| B02 動態深度 | 1／1 | 1／1 | — |
| C01 先各自研究再比較，並引用 | 0／1 | 0／1 | 有 skill 的比較報告重新描述了各站資料 |
| C02 跨站模式 | 1／1 | 1／1 | — |
| C03 設計語言差異 | 1／1 | 1／1 | — |

### 測試的限制（請一併考量）
- 每組只跑 1 次，樣本小；單一項目的差距可能是雜訊。不過 A04、A05、B01 的差距方向一致，也能在 skill 原文找到原因。
- 評分由我執行，而我也是這個 skill 的作者，有偏誤風險。每條判定都附了證據，見各執行的 `grading.json`。
- 執行環境限制：
  - 目標網站全部被網路政策擋住，只能用 Firecrawl，拿不到 DOM 和 computed style。
  - 子代理寫 `.md` 報告檔會被擋下：4 組改用回傳文字，由協調者存檔；1 組用 Bash 繞過限制。
  - 3 組被 API 誤判中斷，其中 Stripe 有 skill 組的流程紀錄遺失。

---

## 1. Current strengths（目前的優點）

1. **假設標記有效**：唯一具鑑別力的正向結果。有 skill 的 3 份都把字重、行高、動畫標成「推測／未觀察」（Linear 20 處、Stripe 30 處）；基準組 3 份都是 0 處，還把推論寫成事實（Linear 基準：「表示不同斷點各有一個手動斷行的版本」）。
2. **研究範圍限制區塊**：3／3 都在報告開頭寫明資料來源與限制，例如 Linear 手機截圖是 2 天前的快取。
3. **具體數值**：色碼有標「截圖取樣」或「branding」來源，區塊高度有實測像素。這是「證據優先」的雛形。
4. **截圖存檔**：每次都下載保存，報告可以重現。
5. **比較模式**：先產出各站報告，再寫比較報告。結構方向是對的（C02、C03 通過）。

## 2. Missing capabilities（缺少的能力）

| 你指定的檢查點 | 現況 | 測試證據 |
|---|---|---|
| 1 研究流程 | 只有「抓取→截圖→分析→報告」，分析是單一步驟；沒有 Context、Observation、Pattern、Design Language、Synthesis 階段 | A01、A02 都是 0／6 |
| 2 觀察 vs 詮釋 | 只有「推測」一個標籤；沒有 Observation／Interpretation／Hypothesis／Verified Pattern／Principle 五個層級 | A03 0／6 |
| 3 證據 | 沒有證據 ID 或引用格式，沒有證據等級，也拿不到 DOM／CSS／computed style | A06 0／6 |
| 4 視覺 | 有色彩、字型、版面、元件；缺 Density、Composition、Elevation 的提示，也缺「形成什麼視覺語言」 | A08 有 skill 只有 1／3 |
| 5 UX | 只有「文案與資訊架構」；缺 Navigation、Flow、Affordance、Discoverability、Feedback、Form、States、Cognitive load | A09 0／6 |
| 6 動態 | 範本只有一行「捲動動畫、hover 效果、轉場」，沒有 trigger／target／property／duration／easing／sequence 框架 | 沒有任何一份用完整框架 |
| 7 響應式 | 只抓 desktop 和 mobile，沒有 tablet；只問「版面變化、導覽列」 | A11 有 skill 0／3 |
| 8 模式抽取 | 單站沒有模式章節；只有比較模式有「共同趨勢」 | A12 單站 0／4 |
| 9 設計語言 | 沒有；只有開頭的「一句話總結」 | A13 有 skill 1／3 |
| 10 設計系統 | 沒有；也沒有「推論不等於事實」的規則 | A14 2／6 |
| 14 研究範圍 | 沒有劃定範圍，也沒說「不做前端實作」 | B01 0／2 |
| 15 自我審查 | 沒有 self-review 和 method notes | — |

## 3. Weak / ambiguous instructions（模糊或有問題的指示）

以下來自子代理在流程紀錄裡寫下的「不確定的地方」，以及我審查 skill 原文的結果：

1. **範本把結論放在最前面**：`template.md` 第一節就是「一句話總結」，每節結尾又有「可以學的地方」。這等於要求在模式和設計語言還沒建立前就先寫教訓，直接違反「最後才做 synthesis」。
2. **「參考價值評分」表**：要求填 1–5 分卻沒有評分依據，導致 A05 有 skill 0／3。這張表就是「這個網站很高級」的數字版。
3. **手機截圖要不要全頁、要不要強制重抓**：Linear 子代理不確定 `fullPage`，也不確定要不要 `maxAge: 0`，結果用了 2 天前的快取。
4. **branding 色和畫面實際色衝突時聽誰的**：Linear 的 branding 主色 `#5E6AD2` 在首頁幾乎看不到，子代理不知道表格該填哪個。
5. **長截圖要怎麼看**：skill 說「用 Read 看截圖」，但全頁圖高達 10,000–20,000px。6 次執行全部各自寫了切圖程式。
6. **切圖放哪裡沒規定 → 證據污染**：Vercel 子代理在共用暫存區讀到 Linear 的切圖，自己發現後才捨棄。平行研究多站時，這會直接汙染證據。
7. **截圖空白偵測**：Vercel 的桌機截圖在 y≥2700 以下全是空白（內容要捲動後才淡入），skill 沒有任何檢查，下半頁的分析只能靠 markdown。
8. **Playwright 只在「Firecrawl 無法使用」時才用**：結果需要 computed style 的時候也不會去拿。
9. **產出寫入方式沒考慮子代理環境**：子代理寫報告檔被擋下，4 組改回傳文字，1 組用 Bash 繞過限制。skill 沒有定義在子代理裡跑時要怎麼交付。

## 4. Agent overlap（代理職責重疊）

**現況**：skill 是單一代理一次寫完，沒有跨代理交接，所以目前不存在「多代理重複掃描整個網站」的問題。但重複已經出現在報告內部：

| 重複 | 證據 |
|---|---|
| 各節「可以學的地方」和結尾「優缺點」重複 | Linear 有 skill 版：第 4 節「用可讀的產品介面當插圖」和優點「產品介面就是主視覺」講同一件事 |
| 比較報告重新描述各站資料，沒有引用 | Stripe vs Notion 比較表重寫了兩站的色碼、字級、頁長（C01 未通過） |
| 視覺和設計語言混在一起 | 「一句話總結」同時做視覺描述和語言判斷 |

**對你提的理想流程的建議職責邊界**（這些是階段，不一定是代理）：

| 階段 | 只負責 | 輸入 | 不可以做 |
|---|---|---|---|
| Context | 網站是誰、目的、受眾、頁面任務 | 網站文字、meta | 評價設計 |
| Observation | 建立**證據清單**：截圖、DOM／CSS、branding、互動紀錄，每筆給 ID | 網站 | 下任何詮釋 |
| Visual／UX／Motion／Responsive | 各自用維度清單分析，**只引用證據 ID** | Observation 產物 | 重新抓網站；跨到別的維度 |
| Pattern | 從前面四項分析中找出重複出現 ≥2 次的結構、互動、處理方式 | 四份分析 | 重新分析網站 |
| Design Language＋System | 從模式抽象出原則與哲學；推論可能的 tokens／components | Pattern 產物 | 引用沒有被模式支撐的單一觀察 |
| Synthesis | 摘要、可遷移原則、最重要的一條建議 | 以上全部 | 新增證據 |

界線的原則和 oss-research 的 Evidence Reuse Protocol 一致：**後面的階段只能引用前面的產物；如果要重述，必須先寫明「本階段新增了什麼」。**

**要不要拆成多個代理？目前測試不支持。**
- 單站一次執行約 10 萬 token，包含截圖，單一代理就能容納。
- Visual／UX／Motion／Responsive 都需要看**同一批截圖**。拆成 4 個代理，等於同一批截圖要重看 4 次，恰好是你要避免的重複掃描。
- 唯一合理的拆分是**多站比較時，每站一個 Observation 代理平行執行**，類似 oss-research Phase 5 的平行軸。但這也要等實際測到 context 不夠用時再做。

## 5. Research quality problems（研究品質問題）

1. **先下結論**：範本開頭的「一句話總結」讓每份報告都以判斷開場（例如「精品感」「企業級但不冰冷」）。
2. **描述多、推理少**：報告大部分是「看到什麼」的清單，「為什麼這樣設計、引導使用者做什麼」很少（A09 0／6）。
3. **模式等於元件清單的風險**：單站報告沒有模式章節。比較報告的模式有證據支撐，但仍有「用 Bento 格展示」這種接近元件名稱的條目。
4. **基準組在「綜合」上反而比較好**：Linear 基準寫了 10 條原則和 CSS token；有 skill 的版本照範本填空，就沒有綜合。**範本限制了模型本來會做的綜合。**

## 6. Evidence problems（證據問題）

1. **證據來源單一**：6 次全部只用 Firecrawl。branding 是自動萃取，字重和行高從沒拿到過。
2. **沒有證據等級**：「computed style 實測」、「branding 自動萃取」和「目測」在報告裡混在一起，讀者分不出可信度。建議的證據等級：
   - E1：DOM／computed style
   - E2：原始 HTML／CSS
   - E3：截圖的像素取樣與量測
   - E4：branding 自動萃取
   - E5：目測推估
3. **沒有證據 ID**：結論無法回指到截圖的哪一段、markdown 的哪一行。
4. **截圖不完整卻沒被偵測**：Vercel 下半頁空白。最好的動態推論（捲動淡入）是子代理自己想到的，不是 skill 引導的。
5. **快取資料**：Linear 手機截圖是 2 天前的快取，和桌機截圖不同時間。
6. **單次快照**：Stripe 和 Notion 都在跑 A/B 實驗（基準組自己發現的），skill 沒有提醒這類變因。

## 7. Output quality problems（產出品質問題）

| 你的標準 | 現況 |
|---|---|
| 有證據 | 部分：只有數值有來源 |
| 有結構 | 有，但是並列面向，不是推理鏈 |
| 有推理 | 弱 |
| 有不確定性 | 有（skill 的強項） |
| 有可學習的設計原則 | 有，但散落各節，沒有收斂 |
| 有可重複使用的模式 | 只有比較模式有 |
| 不只是網站描述 | ✗：大部分是描述 |
| 不只是 UI 批評 | ✗：「優點／可改進處」佔重要位置 |
| 不只是列 Design Tokens | ✓：沒有淪為 token 清單 |

## 8. Recommended changes（建議修改）

| # | 修改 | 對應問題 | 優先 |
|---|---|---|---|
| 1 | **重組流程為分階段**：Context → Observation（證據清單）→ 維度分析 → Pattern → Design Language／System → Synthesis。每階段只引用前一階段產物；「總結」和「可以學的地方」只出現在最後 | A01、A02、A08、A13；第 3 節第 1 點 | High |
| 2 | **知識層級＋證據 ID**：每個結論標 Observation／Interpretation／Hypothesis／Verified Pattern／Principle，並引用證據 ID（例如 `[S-desktop y2700]`、`[B-color]`、`[M-L42]`）。Verified Pattern 需要 ≥2 處證據；Hypothesis 不能直接升級成 Principle | A03、A06、A12 | High |
| 3 | **研究範圍合約**：唯讀、研究止於建議。遇到「幫我做」→ 完成研究，產出「實作交接摘要（implementation brief）」，說明實作是另一項任務，並請使用者確認 | B01 | High |
| 4 | **刪除評分表與開頭總結**；「優點／可改進處」改成以證據支撐的「設計取捨（trade-off）」 | A05；第 5 節第 1 點 | High |
| 5 | **維度清單移到 reference**：視覺 13 項、UX 11 項、動態 12 維、響應式三斷點（1440／768／390）與重新分配表；在分析階段才載入 | A07、A09、A10、A11 | Medium |
| 6 | **截圖擷取規範＋輔助腳本**：強制重抓（`maxAge: 0`）、手機用全頁、加抓 tablet、偵測空白區域、每次研究獨立切圖目錄、抓 rawHtml 找字型與 CSS 線索 | 第 3 節第 3–7 點；第 6 節 | Medium |
| 7 | **模式與設計系統規則**：模式必須是重複的結構、互動、處理方式或 RWD 行為，不能用元件名稱；設計系統一律標「從渲染結果推論」 | A12、A14 | Medium |
| 8 | **比較模式 cite-forward**：比較報告只引用各站報告，必須重述時先寫明新增角度 | C01 | Medium |
| 9 | **Self-review＋method notes（精簡版）**：回答 4–5 個固定問題，例如證據等級分布、哪些結論只有單一證據、哪個階段最沒產出 | 檢查點 15 | Medium |
| 10 | **子代理交付規則**：在子代理裡執行時，回傳結構化文字，由協調者寫檔；禁止繞過寫入限制 | 第 3 節第 9 點 | Low |
| 11 | **多站平行觀察（選用）**：比較 ≥3 站時，每站一個 Observation 代理 | 第 4 節 | Low |

## 9. Priority 摘要

- **High**：1 分階段流程、2 知識層級＋證據 ID、3 研究範圍合約、4 刪除評分表與開頭總結
- **Medium**：5 維度 reference、6 擷取規範＋腳本、7 模式與設計系統規則、8 cite-forward、9 自我審查
- **Low**：10 子代理交付規則、11 多站平行觀察

## 10. 是否需要新增 skill／reference／agent

| 類型 | 建議 | 理由（測試證據） |
|---|---|---|
| **新 Skill** | **不需要** | 研究範圍問題（B01）的解法是在 website-research 裡劃清邊界，而不是新增一個前端 skill。目前沒有任何測試需要另一個 skill 才能解決。 |
| **Reference** | **需要，2 份** | ① `references/analysis-dimensions.md`（視覺、UX、動態、響應式清單）：A09 0／6、A11 1／6，清單項目被系統性遺漏，寫進 SKILL.md 又會讓主檔過長。② `references/evidence-and-claims.md`（知識層級、證據等級、引用格式、模式與設計系統規則）：A03、A06 都是 0／6。 |
| **Script** | **需要，1 個** | `scripts/capture_tools.py`（切長截圖、取樣色碼、偵測空白區）：6／6 次執行各自重寫切圖程式，還發生一次跨研究汙染。這是 skill-creator 判斷「該打包腳本」的典型訊號。 |
| **Agent** | **目前不需要** | 單站約 10 萬 token，單一代理就能容納。按維度拆分會讓同一批截圖被重看 4 次。等多站比較實測出 context 壓力時，再加一個「每站 Observation 代理」。 |

---

## 要成為 oss-research 的 Design Research 對應版本，最需要修改的 5 個地方

1. **分階段＋階段產物，結論只能在最後**（對應 oss 的 Phase 0–6 與「最後才 synthesis」）
   Context → Observation（證據清單）→ 維度分析 → Pattern → Design Language／System → Synthesis。拿掉範本開頭的總結和每節的教訓。目前 A01 0／6。

2. **Claim → Evidence → Verification，加上知識層級**（對應 oss 的 Phase 2 五段式紀錄與「沒有證據就是假設」）
   每個結論都有證據 ID 與證據等級（E1–E5）。Verified Pattern 需要 ≥2 處獨立證據；Hypothesis 不能直接變成 Principle。現有的「推測」標記是唯一有效的規則（A04 3／3），應該擴充成完整的層級，而不是另起爐灶。

3. **研究範圍合約：唯讀、止於建議**（對應 oss 的「Read-only」與「Stop at recommendation」）
   遇到實作請求時，交付研究和實作交接摘要，不直接寫前端程式。目前有 skill 也照樣做了首頁（B01 0／2）。

4. **Cite-forward 與職責邊界**（對應 oss 的 Evidence Reuse Protocol）
   每個階段只消費前一階段的產物；要重述之前，先回答「本階段新增了什麼？」。比較報告只引用各站報告。目前比較報告重新描述了各站資料（C01），「可以學的地方」也在各節和結尾重複。

5. **自我審查＋方法紀錄，取代主觀評分**（對應 oss 的 98-self-review 與 99-method-notes）
   刪掉「視覺美感 5」這類評分表（A05 有 skill 0／3）。改成在結尾回答固定問題：證據等級分布、哪些結論只有單一證據、哪些維度無法觀察，以及資料限制（快取、空白截圖、A/B 實驗）。

---

## 附錄：檔案位置

- 測試案例與評分項目：`evals/evals.json`
- 各次執行產出與評分：`.claude/skills/website-research-workspace/iteration-1/eval-*/{with_skill,without_skill}/run-1/`
- 彙整數據：`.claude/skills/website-research-workspace/iteration-1/benchmark.md`
- 逐案檢視頁：`.claude/skills/website-research-workspace/iteration-1/review.html`
- 測試前靜態審查：`.claude/skills/website-research-workspace/static-review.md`
