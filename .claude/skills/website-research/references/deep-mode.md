# Deep 模式流程

只有選了 Deep 模式才讀這份。SKILL.md 的共同規則（研究範圍、檔案位置、子代理）仍然適用。
Deep 的目標是「每個結論都能回答：你怎麼知道？有多確定？」，代價是時間：單站約 15–40 分鐘、15–30 萬 token。

開始前先讀 [`evidence-and-claims.md`](evidence-and-claims.md)（證據 ID、證據等級 E1–E5、結論層級）與
[`capture-reliability.md`](capture-reliability.md)（Capture Quality、fallback、失敗與逾時規則、Research Reliability），
第 3 階段再讀 [`analysis-dimensions.md`](analysis-dimensions.md)。

Deep 的檔案結構：

```
research/<網域>/
├── summary.md          # 最後才寫、最先給人讀：一頁、少術語的設計師摘要
├── observations.md     # 第 0–2 階段：背景、擷取清單、證據清單
├── report.md           # 第 3–6 階段：分析、模式、設計語言、綜合、自我審查
├── source/             # page.md、branding.json、links.json、*-excerpts.md、pw/*.json
├── screenshots/        # desktop.png、tablet.png、mobile.png、pw/
└── _slices/            # 切圖，只給本次研究用
```

範本：`templates/observations.md`、`templates/report.md`、`templates/summary.md`、`templates/comparison.md`。

## 第 0 階段：背景與範圍

先弄清楚網站是誰、這一頁的任務是什麼、給誰看、靠什麼賺錢（賣產品、收名單、預約、下載、招募…），寫進 `observations.md` §0。
設計是為任務與商業目標服務的，不知道目標就無法判斷設計選擇是否合理。這一階段只寫有來源的事實（網站自己寫明的目標、CTA 文字、價格），不評價設計；推得的客群與定位標 `[H]`，留到第 3 階段再詮釋。

## 第 1 階段：擷取

用 Firecrawl 的 `firecrawl_scrape`，**每次都加 `maxAge: 0`**（快取可能是幾天前的版本，三個寬度會對不上）：

| 擷取 | 參數 |
|---|---|
| 內容與 branding | `formats: ["markdown", "branding", "links", "screenshot"]`，`screenshotOptions: {"fullPage": true}` |
| 平板 | `formats: ["screenshot"]`，`screenshotOptions: {"fullPage": true, "viewport": {"width": 768, "height": 1024}}` |
| 手機 | `mobile: true`，`formats: ["screenshot"]`，`screenshotOptions: {"fullPage": true}` |

- markdown 存成 `source/page.md`（之後用行號當證據 `M-L42`），branding 存成 `source/branding.json`，links 存成 `source/links.json`。過長又和設計無關的欄位（例如 logo 的 data URI）可以省略，但要在檔內註明。
- 截圖網址是暫時的，立刻用 curl 下載到 `screenshots/`。
- 每張整頁截圖下載後跑 `quality_check.py image … --record`；低於 A 就照 capture-reliability.md §3 做 fallback 分段擷取，再登記 `X-` 缺口。
- 遇到速率限制就分開送請求，並在擷取清單註明。
- **固定寬度**：兩個工具的寬度不同，各自固定下來，比較只在同一工具、同一寬度內做：

  | | 桌機 | 平板 | 手機 |
  |---|---|---|---|
  | Firecrawl | 1920（預設） | 768 | 360（`mobile: true`） |
  | Playwright | 1440×900 | 768×1024 | 390×844，加 `isMobile: true`、`hasTouch: true` |
- **A/B 實驗與版本差異**：同一網址在不同請求可能拿到不同版本，不只文案，字型、樣式、版面也可能不同（例如 meta 有 experiment 欄位、同寬度兩次執行的字族不一樣）。登記成 `X-`，只出現在單一次執行或單一寬度的差異，不要拿來當響應式模式或設計結論。
- 研究重點是動態時，可以隔幾秒再拍一次首屏（`waitFor`），比對出來的差異記成 `I-`（E3）。
- **有預載或長進場動畫的網站**（例如全螢幕單屏、載入數秒才出現內容）：Firecrawl 的截圖常常落在動畫中途，每次時間點還不一樣。
  先用 `waitFor` 加大到超過進場時間再拍；仍然不穩定時，Firecrawl 截圖只拿來證明「不同時間點畫面不同」，
  穩定狀態的截圖改由 Playwright 等到 `document.getAnimations()` 全部結束（或網站加上「已就緒」的 class）後再拍，並登記 `X-` 說明。

**可以直連網站時**（先用 `curl -sI <網址>` 確認），先跑 `scripts/pw/preflight.py` 與 `scripts/pw/run_standard.py` 取得三寬度的基本量測（截圖、捲動、DOM、CSS、CTA、hover、focus、選單，各有時間上限，失敗會降級而不是中止），
再用 Playwright（Chromium 在 `/opt/pw-browsers`，不要執行 `playwright install`）補上 Deep 需要的其他 E1 證據；手寫的量測同樣要有逾時、最多重試一次、只量看得見的元素：
- `getComputedStyle`（body、h1–h3、主要／次要按鈕、連結），以及 `:root` 上的 CSS 變數（讀得到就是最直接的 tokens 證據）。
- **CTA 清單**：三個寬度各列出所有**可見**的 CTA（按鈕與主要行動連結）：文字、所在段落、頁面 y 座標、連結目標（`href` 或點擊後實際發生什麼）、主要／次要樣式。存成 `source/pw/cta-<寬度>.json`，每個 CTA 是一筆 `C-`。
- **轉換相關區塊**：價格、FAQ、見證／客戶 logo／數據／認證、表單出現的段落與 y 座標，以及表單欄位數。
- **文案樣本**：h1–h3 與所有 CTA 的原文（品牌語氣分析用；`M-` 已有的可以直接引用行號）。
- hover、focus（Tab）、點擊後的狀態，記下 `transition` 的時長與 easing。
- **動態要在觸發的同時開始記錄**：捲動或載入後立刻用 `recordVideo`，或每 100ms 拍一張、持續 1.5 秒。晚了就會錯過進場動畫，只拍到結束狀態。
- 開一個 `reducedMotion: 'reduce'` 的 context 重拍一次，比較網站怎麼處理減少動態。
- Playwright 的額外產物放在 `screenshots/pw/`，量測資料（computed style、序列結果）存成 `source/pw/*.json`，讓每個 `C-`、`I-` 都對得到檔案。
  Playwright 截圖的證據 ID 用 `S-pw<寬度>-<名稱>`（例如 `S-pw1440-hero`、`S-pw390-sec03`、`S-pw1440-load-07`），命名規則見 evidence-and-claims.md §2。
- 動畫時長與 easing 有兩種來源，寫的時候要分開：**設定值**（CSS `transition`、GSAP 等程式碼裡寫的數字，`H-`，E2）和**實測值**（Web Animations API、錄影逐格量到，`I-`／`C-`，E1）。
  只有設定值時，動態表的 Duration 欄寫成「設定值 0.55s」，不要寫成量到的。

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
SCRIPT=<SKILL.md 所在的資料夾>/scripts/capture_tools.py   # 用絕對路徑，在哪個目錄執行都能用
python "$SCRIPT" slice screenshots/desktop.png _slices --prefix d
python "$SCRIPT" blank screenshots/desktop.png
```

   平板用 `--prefix t`，手機用 `--prefix m`。小字看不清時，可以改小 `--height` 或把 `--scale` 調到 1。
   切圖一定放在這個網站自己的 `_slices/`：
   多個研究共用暫存資料夾，會讀到別的網站的圖。
   `blank` 回報「延伸到截圖底部」的空白時，原因可能是內容要捲動才出現、截圖碰到高度上限，或整頁截圖功能本身沒渲染。那段截圖不能當證據，要登記成 `X-`；
   能用 Playwright 時，改成捲到每一段再拍視窗截圖（`S-pw<寬度>-sec01`…）補上，並用連拍確認是不是真的有進場動畫，不要直接推定成「捲動淡入」。
2. 用 Read 逐段看切圖，每段在證據清單寫一行 `S-` 紀錄。
3. 用 `capture_tools.py sample` 取樣關鍵色彩（`P-`），和 branding（`B-`）比對；兩者衝突時兩個都記下。
4. 從 markdown、圖片網址、meta 找 `M-` 和 `H-` 證據（例如 `fallback-*.webp` 暗示有動態主視覺）。
5. 把 CTA 出現位置整理成 `observations.md` 的「CTA 清單」表，並登記價格、FAQ、信任元素、表單的位置。標題與 CTA 文案的原文用 `M-` 行號登記，品牌語氣分析只引用這些 ID。

## 第 3 階段：維度分析

讀 [`analysis-dimensions.md`](analysis-dimensions.md)，依序寫 `report.md` 第 1–6 節：商業／轉換、品牌／風格、視覺、UX、動態、響應式。
先寫商業與品牌，是因為後面四節要用它們當判斷標準：視覺、UX、動態、響應式是在實現「網站想達成什麼」和「想讓人怎麼感受」。

- 每句結論前加層級標記，句末附證據 ID。只引用證據清單裡的 ID；缺證據時回到第 2 階段補，並登記新 ID。
- 每節最後回答該節的**核心問題**。清單是為了不漏看，核心問題才是分析的目的。
- 六個維度各管各的（分工表見 analysis-dimensions.md 開頭）：品牌節引用視覺節的觀察、不重列色碼；UX 節引用商業節的 CTA 清單、不重寫轉換策略；響應式只寫「隨寬度改變的部分」。
- 商業節不能聲稱轉換效果，品牌節要分開「網站用了什麼」和「這些選擇傳達什麼」，規則見 evidence-and-claims.md §4。

## 第 4 階段：模式抽取

只從第 3 階段的六節裡找**重複出現的設計決策**（結構、互動、視覺處理、響應式行為、UX 決策、商業轉換、品牌表現），
每個模式至少 2 處出現位置，編號 `VP-01`、`VP-02`…，格式見 evidence-and-claims.md §5。
不要重新分析網站，也不要把「卡片」「按鈕」這種元件名稱當成模式。

## 第 5 階段：設計語言與設計系統推論

從模式抽象出轉換、品牌與語氣、色彩、字體、版面、互動、動態、響應式、資訊層級的「哲學」，每一項都指出根據的 VP。
接著推論可能存在的 tokens、components、variants、states，以及有對應模式時的轉換元件與文案語氣規則，全部標成推論（evidence-and-claims.md §6）。
這一階段不引入新觀察：如果需要新證據，代表前面的階段漏了，回去補。

## 第 6 階段：綜合與自我審查

到這裡才寫：一句話總結（要同時回答「想達成什麼商業目標、想讓誰產生什麼感受、怎麼透過視覺／UX／動態／響應式實現」）、可遷移的設計原則 `[DP]`、設計取捨、最值得帶走的一件事。
每條原則都要指出來自哪個 VP。不寫評分表：沒有依據的分數就是主觀評語。

然後回答範本 §10 的六個自我審查問題（證據等級分布、單一證據的結論、無法觀察的維度、重述而非引用、轉換與品牌的說法是否越界、下一次要補的證據），
並對照 Research Reliability：落在 C／D 面向裡的範圍性說法（「全部」「沒有」「只有」）要改寫或刪除。
這一步讓讀者知道哪些結論可以直接用、哪些要先驗證。

### 設計師摘要（summary.md）

report.md 為了可查核，充滿證據 ID 和層級標記，設計師讀起來很慢。所以全部完成後，再用 `templates/summary.md` 寫一份一頁的摘要：
**最後寫、最先讀**（和 oss-research 的 `00-summary.md` 一樣）。這不違反「最後才下結論」，因為摘要只濃縮 report.md 已經成立的結論，不新增任何判斷。

- 用一般設計語言，不放證據 ID；把層級翻成白話（「截圖上量得到」「推測，還沒驗證」）。
- 每個重點用一個連結指回 report.md 的對應段落或 VP，想查證的人一點就到。
- 篇幅控制在一頁：讀者應該兩分鐘內知道「這個網站最值得學的 3–5 個設計決定、它們的代價、哪些還不確定」。
- 摘要裡的每個絕對或否定說法（「全部」「沒有」「只有」），都要回到**截圖本身**再看一次，不能只對照 observations.md：文字紀錄可能本來就寫錯。
- 寫摘要時發現 report.md 有錯，先回頭修正 report.md（和相關的 VP），再寫摘要。摘要不能和報告說法不一致。

寫完後跑 `reliability.py --mode deep --markdown --write` 與 `validate_refs.py`，把可靠度放進 report.md 與 summary.md 開頭。
最後在 `research/README.md` 的索引表加一行（欄位：網站｜研究日期｜連結），有 summary.md 就連到它，沒有才連 report.md；不要改動其他列。回覆使用者時給 3–5 點摘要和檔案路徑，以及最重要的不確定之處，不要把整份報告貼進對話。


## 實務注意（來自實際研究的教訓）

**擷取與等待**
- `document.getAnimations()` 常常永遠不會清空：網站有常駐的無限動畫（波形、閃爍點），而 GSAP 這類程式庫直接改 inline style，根本不出現在裡面。等「進場結束」時，改成輪詢 2–3 個終點狀態（預載節點消失、主視覺 transform 回到 identity、捲動鎖的 class 移除）。
- 有些網站的預載只在第一次造訪播放（用 navigation type 或 sessionStorage 判斷）。研究開場時用全新的 browser context；拍穩定狀態時可以利用網站自己的跳過機制（先載入再重新整理），但要在擷取清單寫明是「第一次造訪」還是「再訪」。
- Firecrawl 加大 `waitFor` 會碰到工具約 60 秒的上限，全頁截圖可能逾時。拿不到時登記 `X-`，改用 Playwright 逐屏截圖補上。
- 用 `scrollTo` 跳到每一屏拍照，會觸發依捲動方向變化的行為（例如往下捲就藏 CTA）。寫「每屏都有」「一直都在」之前，要確認不是逐屏截圖本身造成的。
- 暫存檔（contact sheet、比對圖）也放在這個網站自己的資料夾（`_slices/` 或 `screenshots/pw/`），不要放共用暫存區。

**動態量測**
- 第 1 階段先用 `requestAnimationFrame` 量一次幀率。低於約 30 fps（例如沒有 GPU 的環境跑 WebGL），實測時長就失真：時長只引用設定值，實測只拿來證明先後順序與最終狀態，並登記 `X-`。
- 網站可能同時用兩種計時：`setTimeout`（照真實時間）和動畫程式庫（跟著幀走）。慢環境下兩者的先後會錯開，這本身就是值得寫的發現：比對「哪些用真實時間、哪些跟幀走」。
- 連拍時在頁面內記錄 `performance.now()`，因為慢環境下「發出截圖請求的時間」和「畫面真正成像的時間」可能差好幾秒。
- computed style 讀到的 `transition`、`animation-duration` 是瀏覽器解析後的**設定值**：記成 `C-`（E1，代表「瀏覽器確實套用了這個設定」），但動態表的 Duration 欄仍寫「設定值 0.15s」。只有 Web Animations API 的實際時間軸或逐格錄影，才算實測播放時長。
