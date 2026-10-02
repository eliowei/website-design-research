---
name: website-research
description: 研究網站的設計（版面、配色、字型、元件、互動、文案、RWD），產出結構化的設計分析報告並存進 research/ 資料夾。當使用者提供網址並要求「分析」「研究」「拆解」「參考」某網站設計，或要比較多個網站的設計時使用。
---

# 網站設計研究

把一個或多個網站的設計拆解成可重複參考的報告。

## 輸入

- 一個或多個網址（必要）
- 研究重點（選填，例如「只看配色」「著重首頁 Hero 區」「比較定價頁」）
- 沒指定頁面時，只研究首頁；使用者要求時再加研究其他頁面（定價、產品、關於我們等）

## 步驟

### 1. 抓取網站資料

優先用 Firecrawl 的 `firecrawl_scrape`，對每個網址抓：

- `formats: ["markdown", "branding", "links", "screenshot"]`，`screenshotOptions: {"fullPage": true}`
- 再用 `mobile: true` 加 `formats: ["screenshot"]` 抓一次手機版截圖

`branding` 會回傳配色、字型、間距等設計資訊；`markdown` 用來分析資訊架構和文案。

Firecrawl 無法使用時，改用 Playwright（Chromium 位於 `/opt/pw-browsers`，不要執行 `playwright install`）：
桌機寬 1440、手機寬 390 各截一張全頁圖，並用 `getComputedStyle` 取出 `body`、`h1`–`h3`、`a`、`button` 的字型、字級、顏色、背景色。

**互動型網站**（WebGL、3D、要點按鈕才進入主內容）：Firecrawl 只會截到入口畫面，要用 Playwright 點擊後再截圖。
如果網站被研究環境的網路政策擋住（Playwright 出現 `ERR_TUNNEL_CONNECTION_FAILED`、curl 回 403），
就只用 Firecrawl 拿到的資料分析，並在報告開頭用引用區塊寫明研究範圍的限制。

### 2. 儲存截圖

把截圖下載到 `research/<網域>/screenshots/`，檔名為 `desktop.png`、`mobile.png`
（其他頁面用 `<頁面名稱>-desktop.png`）。截圖網址是暫時性的，一定要下載存檔，不能只留連結。

### 3. 分析

用 Read 工具實際看截圖，再配合抓到的資料，依 `template.md` 的章節分析。原則：

- **具體**：寫出實際色碼、字型名稱、字級、間距數值，不寫「顏色很好看」這種空話
- **有根據**：每個判斷都要對應到截圖或抓到的資料；推測的內容標明「推測」
- **可借鏡**：每個章節最後寫一句「可以學的地方」

### 4. 產出報告

依 `template.md` 寫成 `research/<網域>/report.md`（網域去掉 `www.`，例如 `research/stripe.com/report.md`）。
報告裡用相對路徑嵌入截圖：`![桌機版](screenshots/desktop.png)`。

### 5. 多網站比較（有兩個以上網址時）

每個網站各自完成步驟 1–4，再產出 `research/comparisons/<YYYY-MM-DD>-<主題>.md`，內容包括：

- 一張比較表：網站 × 主色、字型、版面結構、CTA 風格、整體調性
- 共同趨勢（多數網站都這樣做的地方）
- 各自的差異化做法
- 結論：如果要做類似網站，建議採用哪些做法

### 6. 收尾

- 在 `research/README.md` 的索引表加一行（網站、日期、報告連結）
- 回覆使用者時只給重點摘要（3–5 點）和報告路徑，不要把整份報告貼進對話
