---
name: website-research
description: 研究「別人的、已上線的網站」在設計上是怎麼做的、為什麼這樣做，產出設計師可以直接吸收的研究筆記，存進 research/ 底下以網域命名的資料夾。分三種深度：Daily（預設，約 5 分鐘、一頁摘要，適合每天看一個網站累積設計知識）、Standard（加上瀏覽器實測的截圖、DOM、CSS、互動證據）、Deep（完整的證據鏈、像素取樣、動態量測、三寬度比較、設計系統推論與自我審查）。只要使用者想弄懂某個網站的版面、字體、配色、間距、動態、導覽、CTA、手機版或整體設計語言，或想比較多個網站、從 Awwwards 等網站挑一個來學，就用這個 skill；只給網域或品牌名、沒說「研究」也算。使用者說「分析 X 然後照它的風格做一個」時也先用這個 skill：它產出研究與實作交接摘要，不直接寫程式。不要用於：修自己專案的程式或跑版、直接從零做頁面或建設計系統、無障礙檢查、網站是否當機、功能／定價／市場的商業競品分析。
---

# 網站設計研究

這個 skill 的目的是**每天餵自己一點高品質的設計知識**：看懂一個網站做了哪些設計決定、為什麼有效、可以帶走什麼。
不是網站描述，也不是 UI 評論；即使是最快的模式，也要講出「為什麼」和「可以帶走什麼」。

## 先選模式

| | Daily（預設） | Standard | Deep |
|---|---|---|---|
| 用途 | 每天看一個網站，累積設計直覺 | 想認真參考某個網站，需要可查證的數值 | 要拿來當實作依據、或要完整拆解 |
| 研究面向 | 背景、視覺、UX、動態、響應式、模式 | 同 Daily，每項都有證據 | 同 Standard，再加設計語言與設計系統推論 |
| 資料來源 | Firecrawl 桌機＋手機 | ＋Playwright：三寬度截圖、DOM、computed CSS、hover／focus／點擊 | ＋證據 ID、證據等級、像素取樣、減少動態、動態量測、三寬度對照表、自我審查 |
| 產出 | `summary.md`（一頁） | `summary.md`＋`notes.md` | `summary.md`＋`observations.md`＋`report.md` |
| 大約時間 | 5 分鐘 | 10–15 分鐘 | 15–40 分鐘 |

怎麼選：
- 使用者說了模式（「daily」「快速看一下」「standard」「deep」「完整拆解」「深入研究」）就照做。
- **沒說就用 Daily。** 在回覆最後一句提醒：想看實測數值可以用 Standard，要完整證據鏈用 Deep。
- 使用者要求「照這個風格做一個」：至少用 Standard，因為實作交接需要量到的數值，不能只靠目測。
- 先用 Daily 看過、使用者想深入某一點，可以在同一個資料夾升級成 Standard 或 Deep，沿用已經擷取的資料。

## 共同規則（三種模式都適用）

**研究範圍**
- **唯讀**：只研究既有網站，產出只有 `research/` 底下的研究檔案。
- **止於建議**：不寫網頁實作（HTML、CSS、元件程式碼），也不產出「仿作」。使用者同時要求「照這個風格做一個」時，照常完成研究，在最後加一節「實作交接摘要」（要沿用的原則、tokens 起點、不能當規格的部分、不能沿用的品牌素材），並告訴使用者實作是另一個任務，由他決定。
- **保持範圍**：使用者指定某頁或某面向，就不要擴大成全站；說「首頁」就看整個首頁，不只 Hero。

**說法要有根據**
- 不寫沒有根據的形容詞（「很高級」「很流暢」「很好用」）。改寫成「看到什麼」＋「造成什麼效果」。
- 沒有直接看到、是推出來的，標「（推測）」。尤其是動態：截圖拍不到動畫，從文字或檔名推得的動態一律是推測。
- 寫「全部」「沒有」「只有」這類絕對說法前，回到截圖再看一次；有例外就寫出例外。
- 不寫評分表。沒有依據的分數就是主觀評語。

**檔案位置**：每個網站一個資料夾 `research/<網域>/`（網域去掉 `www.`）。截圖放 `screenshots/`，切圖與暫存檔放這個網站自己的 `_slices/`，不要用共用暫存區（會讀到別的網站的圖）。

**擷取的基本做法**
- Firecrawl 的 `firecrawl_scrape` 每次都加 `maxAge: 0`，不用快取。截圖網址是暫時的，立刻用 curl 下載。
- 長截圖用 Read 看之前先切段：

  ```bash
  SCRIPT=<SKILL.md 所在的資料夾>/scripts/capture_tools.py   # 用絕對路徑
  python "$SCRIPT" slice screenshots/desktop.png _slices --prefix d
  python "$SCRIPT" blank screenshots/desktop.png             # 找出空白段
  ```

  `blank` 回報「延伸到截圖底部」的空白，代表那段截圖不可信（內容可能還沒渲染），不要拿來下結論，也不要直接推定成「捲動才淡入」。
- 網站被網路政策擋住（curl 回 403、Playwright 出現 `ERR_TUNNEL_CONNECTION_FAILED`）就寫明限制，不要繞過。
  Playwright 出現 `ERR_CERT_AUTHORITY_INVALID`（curl 卻能連上）是瀏覽器還不信任環境的代理憑證：不要關掉憑證檢查，把環境的 CA 加進瀏覽器憑證庫（雲端環境的 CA 在 `/root/.ccr/agent-proxy-ca.crt`）：
  `apt-get install -y libnss3-tools && certutil -A -d sql:$HOME/.pki/nssdb -t "C,," -n proxy-ca -i <CA 檔>`

**收尾**
- 在 `research/README.md` 的索引表加一行（欄位：網站｜研究日期｜連結），連結指向 summary.md，連結文字寫模式，例如 `[摘要（Daily）](<網域>/summary.md)`；不要改動其他列。
- 回覆使用者時給 3–5 點重點和檔案路徑，以及最重要的不確定之處，不要把整份內容貼進對話。

## Daily 模式

目標：5 分鐘內產出一頁「今天學到什麼」。只做快速觀察，不建立證據清單。

1. **擷取**（兩次 Firecrawl 呼叫）
   - 桌機：`formats: ["markdown", "branding", "screenshot"]`，`screenshotOptions: {"fullPage": true}`，`onlyMainContent: true`（回傳太大時工具會另存成檔案，只讀出 markdown 和 branding 就好）
   - 手機：`mobile: true`，`formats: ["screenshot"]`，`screenshotOptions: {"fullPage": true}`

   下載成 `screenshots/desktop.png`、`screenshots/mobile.png`，切段後用 Read 看過一遍。markdown 和 branding 只在對話中參考，不用存檔。
   branding 是工具自動推估的，和截圖看到的不一致時，以截圖為準。
2. **快速觀察六個面向**，每個面向只抓最突出的 1–2 件事（寧可少而有理由，不要列清單），並想清楚「為什麼這樣設計」：
   - **背景**：網站是誰、這一頁要訪客做什麼。
   - **視覺**：配色、字體、版面中最有特色的選擇，以及它們合起來給人的感覺。
   - **UX**：怎麼引導訪客走向主要行動（CTA 在哪、導覽怎麼安排）。
   - **動態**：截圖看得出來的動態線索（例如輪播、跑馬燈、預載畫面），一律標（推測）。看不出來就寫「這次沒有觀察動態」，不要猜。
   - **響應式**：手機版和桌機版最大的差別，以及這樣改的理由。
   - **模式**：在頁面裡重複出現至少 2 次的設計決策（結構、視覺處理、互動），不是元件名稱。
3. **寫 `summary.md`**，用 [`templates/daily.md`](templates/daily.md)，一頁以內：背景寫在開頭的「這個網站在做什麼」，其餘五個面向寫在速記；「不要照抄的地方」最多 3 點；最大的不確定之處用一行寫在最後。
   截圖中段或底部有大段空白（`blank` 會列出）時，那幾段不拿來下結論，在不確定之處提一句就好。

Daily 不做：Playwright、證據 ID、像素取樣、減少動態、平板寬度、設計系統推論、自我審查。

## Standard 模式

目標：10–15 分鐘，讓重要的結論都有實際的截圖、DOM、CSS 或互動證據可以查。

1. **擷取**：先做 Daily 的兩次 Firecrawl。網站可以直連時（`curl -sI <網址>` 確認），再用 Playwright（`/opt/pw-browsers/chromium`，不要執行 `playwright install`）：
   - **三寬度截圖**：1440×900、768×1024、390×844（手機加 `isMobile: true`、`hasTouch: true`）。整頁截圖有空白時，捲到各段拍視窗截圖。存到 `screenshots/pw/`。
   - **DOM**：主要區塊的順序、標題層級（h1–h3）、導覽與 CTA 的連結目標。
   - **CSS**：`getComputedStyle` 讀 body、h1–h3、主要／次要按鈕、連結的字族、字級、字重、行高、字距、顏色、背景、圓角；順便讀 `:root` 的 CSS 變數（讀得到就是最直接的 tokens 證據）。
   - **互動**：主要按鈕、導覽、連結的 hover 與 focus（按 Tab）前後各拍一張，記下 `transition` 的設定值；點開選單或漢堡選單看一次。

   量測結果存成 `source/pw/*.json`。不能直連時退回 Daily 的資料來源，並在 notes.md 開頭寫明。
   - 只量**看得見的元素**：很多網站為不同裝置準備了隱藏的重複元素（例如兩顆一樣的 CTA），直接 `querySelector` 會量到隱藏的那個。
   - 視窗截圖一屏一張、數量很多時，可以拼成對照圖再看，拼好的圖放 `_slices/`。
2. **寫 `notes.md`**，用 [`templates/standard.md`](templates/standard.md)。研究面向同 Daily 的六項，每個結論後面用括號標出來源：
   `（截圖：pw1440-hero）`、`（CSS：h1）`、`（DOM）`、`（互動：hover CTA）`、`（branding）`，推出來的標 `（推測）`。
   - 模式要列出至少 2 個出現位置。
   - 動態只寫看得到或量得到的：CSS 的 transition／animation 設定值、hover 前後的差異；進場動畫和捲動動畫若沒有實際拍到，標（推測）。
   - 響應式比較桌機、手機兩種寬度（平板有明顯不同才寫）。
3. **寫 `summary.md`**（同 Daily 範本），每一點連回 notes.md 的段落。

**從 Daily 升級時**：沿用已有的 Firecrawl 截圖，在 notes.md 加一節「Daily 推測的驗證結果」（每個推測一行：證實／修正／推翻，附來源），summary.md 只放三到五行重點。
為了驗證某個推測，可以在幾個固定捲動位置多拍幾張、或隔一兩秒再拍一張；但不要擴大成整套動態量測，那是 Deep 的工作。

Standard 不做：證據 ID 與 E1–E5 等級、像素取樣、減少動態的重拍（CSS 裡有沒有 `prefers-reduced-motion` 規則可以順手記一句）、動態連拍量測、三寬度逐項對照表、設計系統推論、自我審查。

## Deep 模式

讀 [`references/deep-mode.md`](references/deep-mode.md)，照它的第 0–6 階段做。
它會再帶你讀 `references/evidence-and-claims.md`（證據 ID、證據等級、結論層級）和 `references/analysis-dimensions.md`（視覺 13 項、UX 11 項、動態 6 欄、響應式三寬度表）。

## 多網站比較

1. 每個網站先用同一個模式各自研究（各自一個資料夾）。
2. 再寫 `research/comparisons/<YYYY-MM-DD>-<主題>.md`：
   - Daily／Standard：一頁內，寫兩站共同的模式（各自的例子）、設計語言最大的差異、各自適合借鏡的情境。
   - Deep：用 `templates/comparison.md`，規則見 deep-mode.md。
3. 比較時只引用各站的 summary／notes／report，不重新描述各站資料；必須重述數值時，先寫一句這裡新增的比較角度。

## 在子代理中執行時

有些環境不允許子代理寫報告檔，而且哪些檔案會被擋並不一致。規則：每個檔案都先試著正常寫入；**被擋下的檔案不要用 Bash 或其他方式繞過**，改成在最後回覆裡附上完整內容，由主對話存檔。回覆開頭列出哪些檔案已寫入、哪些放在 FILE 區塊。格式：

```
===== FILE: research/<網域>/summary.md =====
<內容>
```

截圖、切圖、source/ 這類非報告檔照常寫入。
