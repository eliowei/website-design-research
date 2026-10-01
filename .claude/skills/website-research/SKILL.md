---
name: website-research
description: 只要使用者想弄懂一個「別人的、已上線的網站」在設計上是怎麼做的、為什麼這樣做，就用這個 skill，不論問題大小。包括：問某頁的字體層級、網格、配色、間距，或想推出它的 design tokens；拆解捲動動畫、hover、轉場等動態手法；分析定價頁、方案卡片、CTA、導覽怎麼引導使用者；整理某站的設計語言或可借鏡之處；比較兩個以上網站（如多家產品首頁）的共同設計模式或趨勢。只給網域或品牌名、沒貼網址、沒說「研究」也算。使用者說「分析 X 然後照它的風格幫我做一個」時也要先用這個 skill：它會產出有證據的研究報告和實作交接摘要，再由使用者決定是否實作。不要用於：修自己專案的程式或跑版、直接從零做頁面或建設計系統、無障礙檢查、網站是否當機、功能／定價／市場的商業競品分析。
---

# 網站設計研究

這是**研究流程**，不是網站描述，也不是 UI 評論。目標是讓每個結論都能回答「你怎麼知道？有多確定？」，
並把具體觀察一路抽象成可以帶回自己專案的模式與原則。

流程分成六個階段，**每個階段只使用前一階段的產物**。順序很重要：先下結論再找證據，
研究就會變成替第一印象背書。所以總結和教訓只出現在最後一個階段。

## 研究範圍（先讀）

- **唯讀**：只研究既有網站，產出只有 `research/` 底下的研究檔案。
- **止於建議**：不寫網頁實作（HTML、CSS、元件程式碼），也不產出「仿作」。
  使用者同時要求「照這個風格做一個」時：照常完成研究，在報告最後加一節「實作交接摘要」
  （要沿用的原則、模式、tokens 推論、需要注意的取捨），並告訴使用者實作是另一個任務，由他決定要不要開始。
  這樣研究結論能先被檢查，實作也不會把推測當成規格。
- **保持範圍**：使用者指定某頁或某面向，就不要擴大成全站；說「首頁」就不要只看 Hero。

## 開始前

1. 讀 [`references/evidence-and-claims.md`](references/evidence-and-claims.md)：證據 ID、證據等級 E1–E5、結論層級 `[O]` `[I]` `[H]` `[VP]` `[DP]`。後面每個階段都用它。
2. 每個網站的檔案放在 `research/<網域>/`（網域去掉 `www.`）：

```
research/<網域>/
├── summary.md          # 最後才寫、最先給人讀：一頁、少術語的設計師摘要
├── observations.md     # 第 0–2 階段：背景、擷取清單、證據清單
├── report.md           # 第 3–6 階段：分析、模式、設計語言、綜合、自我審查
├── source/             # page.md（markdown）、branding.json、links.json
├── screenshots/        # desktop.png、tablet.png、mobile.png
└── _slices/            # 切圖，只給本次研究用
```

範本在 `templates/`。

## 第 0 階段：背景與範圍

先弄清楚網站是誰、這一頁的任務是什麼、給誰看，寫進 `observations.md` §0。
設計是為任務服務的，不知道任務就無法判斷設計選擇是否合理。這一階段只寫有來源的事實，不評價設計。

## 第 1 階段：擷取

用 Firecrawl 的 `firecrawl_scrape`，**每次都加 `maxAge: 0`**（快取可能是幾天前的版本，三個寬度會對不上）：

| 擷取 | 參數 |
|---|---|
| 內容與 branding | `formats: ["markdown", "branding", "links", "screenshot"]`，`screenshotOptions: {"fullPage": true}` |
| 平板 | `formats: ["screenshot"]`，`screenshotOptions: {"fullPage": true, "viewport": {"width": 768, "height": 1024}}` |
| 手機 | `mobile: true`，`formats: ["screenshot"]`，`screenshotOptions: {"fullPage": true}` |

- markdown 存成 `source/page.md`（之後用行號當證據 `M-L42`），branding 存成 `source/branding.json`，links 存成 `source/links.json`。過長又和設計無關的欄位（例如 logo 的 data URI）可以省略，但要在檔內註明。
- 截圖網址是暫時的，立刻用 curl 下載到 `screenshots/`。
- 遇到速率限制就分開送請求，並在擷取清單註明。
- 桌機寬度用 Firecrawl 預設的 1920（Playwright 則用 1440），擷取清單寫明實際寬度。
- **A/B 實驗**：同一網址在不同請求可能拿到不同版本（例如 meta 有 experiment 欄位、三個寬度的文案不一致）。登記成 `X-`，只出現在單一寬度的差異不要拿來當響應式模式。
- 研究重點是動態時，可以隔幾秒再拍一次首屏（`waitFor`），比對出來的差異記成 `I-`（E3）。

**可以直連網站時**（先用 `curl -sI <網址>` 確認），再用 Playwright（Chromium 在 `/opt/pw-browsers`，不要執行 `playwright install`）補上 E1 證據：
- `getComputedStyle`（body、h1–h3、主要／次要按鈕、連結），以及 `:root` 上的 CSS 變數（讀得到就是最直接的 tokens 證據）。
- hover、focus（Tab）、點擊後的狀態，記下 `transition` 的時長與 easing。
- **動態要在觸發的同時開始記錄**：捲動或載入後立刻用 `recordVideo`，或每 100ms 拍一張、持續 1.5 秒。晚了就會錯過進場動畫，只拍到結束狀態。
- 開一個 `reducedMotion: 'reduce'` 的 context 重拍一次，比較網站怎麼處理減少動態。
- Playwright 的額外產物放在 `screenshots/pw/`，量測資料（computed style、序列結果）存成 `source/pw/*.json`，讓每個 `C-`、`I-` 都對得到檔案。

互動型網站（要點按鈕才進入主內容）一定要這一步，否則只看得到入口。

**寬度與工具不一致時**：每個 `S-`、`P-`、`C-` 證據都要記下它的 viewport 寬度，因為座標和版面只在同一寬度內可比。
Firecrawl 和 Playwright 在相近寬度（例如 360 與 390）看到不同畫面時，兩個都記下並登記成 `X-`，不要挑一個當事實；
兩者衝突的數值以 Playwright 的 E1 為準，但要說明差異。
網站被網路政策擋住時（curl 回 403、Playwright 出現 `ERR_TUNNEL_CONNECTION_FAILED`），把它登記成缺口 `X-`，不要繞過。
Playwright 出現 `ERR_CERT_AUTHORITY_INVALID`（curl 卻能連上）時，是瀏覽器還不信任環境的代理憑證，不要關掉憑證檢查；把環境提供的 CA 加進瀏覽器的憑證庫即可（雲端環境的 CA 在 `/root/.ccr/agent-proxy-ca.crt`）：
`apt-get install -y libnss3-tools && certutil -A -d sql:$HOME/.pki/nssdb -t "C,," -n proxy-ca -i <CA 檔>`

## 第 2 階段：觀察

目的是建立**證據清單**，讓後面的分析只需要引用、不需要重看網站。這一階段只記錄看到什麼，不寫解讀。

1. 切圖並檢查空白：

```bash
python .claude/skills/website-research/scripts/capture_tools.py slice screenshots/desktop.png _slices --prefix d
python .claude/skills/website-research/scripts/capture_tools.py blank screenshots/desktop.png
```

   平板用 `--prefix t`，手機用 `--prefix m`。小字看不清時，可以改小 `--height` 或把 `--scale` 調到 1。
   腳本路徑是相對於 repo 根目錄；在其他目錄執行時改用絕對路徑。切圖一定放在這個網站自己的 `_slices/`：
   多個研究共用暫存資料夾，會讀到別的網站的圖。
   `blank` 回報「延伸到截圖底部」的空白時，代表內容要捲動才會出現，或截圖碰到高度上限，那段截圖不能當證據，要登記成 `X-`。
2. 用 Read 逐段看切圖，每段在證據清單寫一行 `S-` 紀錄。
3. 用 `capture_tools.py sample` 取樣關鍵色彩（`P-`），和 branding（`B-`）比對；兩者衝突時兩個都記下。
4. 從 markdown、圖片網址、meta 找 `M-` 和 `H-` 證據（例如 `fallback-*.webp` 暗示有動態主視覺）。

## 第 3 階段：維度分析

讀 [`references/analysis-dimensions.md`](references/analysis-dimensions.md)，依序寫 `report.md` 第 1–4 節：視覺、UX、動態、響應式。

- 每句結論前加層級標記，句末附證據 ID。只引用證據清單裡的 ID；缺證據時回到第 2 階段補，並登記新 ID。
- 每節最後回答該節的**核心問題**。清單是為了不漏看，核心問題才是分析的目的。
- 四個維度各管各的：視覺不評論 UX，響應式只寫「隨寬度改變的部分」，不重做視覺分析。

## 第 4 階段：模式抽取

只從第 3 階段的四節裡找**重複出現的設計決策**（結構、互動、視覺處理、響應式行為、UX 決策），
每個模式至少 2 處出現位置，編號 `VP-01`、`VP-02`…，格式見 evidence-and-claims.md §5。
不要重新分析網站，也不要把「卡片」「按鈕」這種元件名稱當成模式。

## 第 5 階段：設計語言與設計系統推論

從模式抽象出色彩、字體、版面、互動、動態、響應式、資訊層級的「哲學」，每一項都指出根據的 VP。
接著推論可能存在的 tokens、components、variants、states，全部標成推論（evidence-and-claims.md §6）。
這一階段不引入新觀察：如果需要新證據，代表前面的階段漏了，回去補。

## 第 6 階段：綜合與自我審查

到這裡才寫：一句話總結、可遷移的設計原則 `[DP]`、設計取捨、最值得帶走的一件事。
每條原則都要指出來自哪個 VP。不寫評分表：沒有依據的分數就是主觀評語。

然後回答範本 §8 的五個自我審查問題（證據等級分布、單一證據的結論、無法觀察的維度、重述而非引用、下一次要補的證據）。
這一步讓讀者知道哪些結論可以直接用、哪些要先驗證。

### 設計師摘要（summary.md）

report.md 為了可查核，充滿證據 ID 和層級標記，設計師讀起來很慢。所以全部完成後，再用 `templates/summary.md` 寫一份一頁的摘要：
**最後寫、最先讀**（和 oss-research 的 `00-summary.md` 一樣）。這不違反「最後才下結論」，因為摘要只濃縮 report.md 已經成立的結論，不新增任何判斷。

- 用一般設計語言，不放證據 ID；把層級翻成白話（「截圖上量得到」「推測，還沒驗證」）。
- 每個重點用一個連結指回 report.md 的對應段落或 VP，想查證的人一點就到。
- 篇幅控制在一頁：讀者應該兩分鐘內知道「這個網站最值得學的 3–5 個設計決定、它們的代價、哪些還不確定」。
- 摘要裡的每個絕對或否定說法（「全部」「沒有」「只有」），都要回到**截圖本身**再看一次，不能只對照 observations.md：文字紀錄可能本來就寫錯。
- 寫摘要時發現 report.md 有錯，先回頭修正 report.md（和相關的 VP），再寫摘要。摘要不能和報告說法不一致。

最後在 `research/README.md` 的索引表加一行，連結指向 summary.md。回覆使用者時給 3–5 點摘要和檔案路徑，以及最重要的不確定之處，不要把整份報告貼進對話。

## 多網站比較

1. 每個網站各自完成第 0–5 階段（第 6 階段的自我審查可以合併到比較報告）。
2. 用 `templates/comparison.md` 寫 `research/comparisons/<YYYY-MM-DD>-<主題>.md`。範本最上面的「摘要」一節最後才寫，規則同設計師摘要。
3. 比較報告**只引用**各站報告的段落與 VP 編號。必須重述數值時，先寫一句「這裡新增的比較角度是…」。
   跨站模式（`XP-`）必須在兩站都有對應的 VP。
4. 比較三個以上網站、單一對話裝不下時，可以每站派一個子代理做第 0–2 階段，由主對話接手後面的階段。

## 在子代理中執行時

有些環境不允許子代理寫報告檔。被擋下時**不要用 Bash 或其他方式繞過**，改成在最後回覆裡附上每個檔案的完整內容，格式如下，由主對話存檔：

```
===== FILE: research/<網域>/observations.md =====
<內容>
===== FILE: research/<網域>/report.md =====
<內容>
```

截圖、切圖、source/ 這類非報告檔照常寫入。
