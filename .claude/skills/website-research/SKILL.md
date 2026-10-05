---
name: website-research
description: 研究「別人的、已上線的網站」想達成什麼商業目標、想讓誰產生什麼感受，以及如何透過視覺、UX、動態、響應式實現，產出設計師可以直接吸收的研究筆記，存進 research/ 底下以網域命名的資料夾。分三種深度：Daily（預設，約 5 分鐘、一頁摘要，適合每天看一個網站累積設計知識）、Standard（加上瀏覽器實測的截圖、DOM、CSS、互動證據）、Deep（完整的證據鏈、像素取樣、動態量測、三寬度比較、設計系統推論與自我審查）。只要使用者想弄懂某個網站的版面、字體、配色、間距、動態、導覽、CTA、轉換路徑、品牌風格、文案語氣、手機版或整體設計語言，或想比較多個網站、從 Awwwards 等網站挑一個來學，就用這個 skill；只給網域或品牌名、沒說「研究」也算。使用者說「分析 X 然後照它的風格做一個」時也先用這個 skill：它產出研究與實作交接摘要，不直接寫程式。不要用於：修自己專案的程式或跑版、直接從零做頁面或建設計系統、無障礙檢查、網站是否當機、比較功能／定價／市占的市場競品分析（這個 skill 只分析頁面如何設計轉換與品牌感，不做市場研究）。
---

# 網站設計研究

這個 skill 的目的是**每天餵自己一點高品質的設計知識**：看懂一個網站做了哪些設計決定、為什麼有效、可以帶走什麼。
不是網站描述，也不是 UI 評論；即使是最快的模式，也要講出「為什麼」和「可以帶走什麼」。

研究要回答的不只是「這個網站怎麼設計」，而是：**它想達成什麼商業目標？想讓誰產生什麼感受？又如何透過視覺、UX、動態、響應式把兩者實現？**
所以研究面向的順序固定是：

| 順序 | 面向 | 回答的問題 |
|---|---|---|
| 1 | 商業／轉換 | 這個網站想達成什麼？怎麼把訪客帶到那裡？ |
| 2 | 品牌／風格 | 它想讓使用者如何感受這個品牌？ |
| 3 | 視覺 | 它具體用什麼視覺語言？ |
| 4 | UX | 它如何引導使用者操作與理解？ |
| 5 | 動態 | 動態如何強化體驗、品牌與轉換？ |
| 6 | 響應式 | 這套體驗如何適應不同裝置？ |

前兩項是後四項的判斷標準。新增它們的目的是讓分析有方向，不是讓報告變長：每個面向仍然只寫有理由的重點，同一件事只寫在一個面向，其他面向引用。

## 先選模式

| | Daily（預設） | Standard | Deep |
|---|---|---|---|
| 用途 | 每天看一個網站，累積設計直覺 | 想認真參考某個網站，需要可查證的數值 | 要拿來當實作依據、或要完整拆解 |
| 研究面向 | 背景、商業／轉換、品牌／風格、視覺、UX、動態、響應式、模式 | 同 Daily，每項都有證據 | 同 Standard，再加設計語言、設計原則與設計系統推論 |
| 資料來源 | Firecrawl 桌機＋手機；擷取不完整時加分段擷取（fallback） | ＋Playwright 量測工具（`scripts/pw/`）：三寬度截圖、分段捲動、DOM、computed CSS、CTA、hover／focus／點擊／選單 | ＋證據 ID、證據等級、像素取樣、減少動態、動態量測、三寬度對照表、自我審查 |
| 產出 | `summary.md`（一頁） | `summary.md`＋`notes.md` | `summary.md`＋`observations.md`＋`report.md` |
| 可靠度 | Capture Quality＋Research Reliability（Capture、Responsive） | ＋Interaction、DOM/CSS 與能力狀態表 | 同 Standard |
| 大約時間 | 5 分鐘（fallback 另加最多 3 分鐘） | 15–20 分鐘（量測上限 12 分鐘） | 15–40 分鐘 |

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
- 寫「全部」「沒有」「只有」這類絕對說法前，回到截圖再看一次；有例外就寫出例外。截圖有擷取缺口的區域，不能寫這類說法（沒看到不代表沒有）。
- 不寫評分表。沒有依據的分數就是主觀評語。
- **不聲稱轉換效果**：沒有 analytics、A/B test 或轉換資料，不寫「這個設計提高了轉換率」。只寫轉換策略、轉換機制、轉換假設（標推測）和可觀察的阻力：分析「它如何設計轉換」，不是「它真的提高了多少」。
- **品牌定位是詮釋**：分開「網站用了什麼」（視覺特徵，可以直接看到）和「這些選擇共同傳達什麼」（品牌詮釋）。網站沒有自己寫明的定位、客群與品牌個性，用「可能」「推測」「從……可以觀察到」，並指出根據的觀察。

**檔案位置**：每個網站一個資料夾 `research/<網域>/`（網域去掉 `www.`）。截圖放 `screenshots/`（fallback 分段截圖在 `screenshots/fb/`，Playwright 在 `screenshots/pw/`），切圖與暫存檔放這個網站自己的 `_slices/`，不要用共用暫存區（會讀到別的網站的圖）。擷取品質、能力狀態與可靠度記在 `source/capture-status.json`，由工具寫入，不要手改。

**擷取的基本做法**
- Firecrawl 的 `firecrawl_scrape` 每次都加 `maxAge: 0`，不用快取。截圖網址是暫時的，立刻用 curl 下載。
- 長截圖用 Read 看之前先切段：

  ```bash
  SCRIPT=<SKILL.md 所在的資料夾>/scripts/capture_tools.py   # 用絕對路徑
  python "$SCRIPT" slice screenshots/desktop.png _slices --prefix d
  python "$SCRIPT" blank screenshots/desktop.png             # 找出空白段
  ```

  `blank` 回報「延伸到截圖底部」的空白，代表那段截圖不可信（內容可能還沒渲染），不要拿來下結論，也不要直接推定成「捲動才淡入」。
- **每次擷取後先判斷 Capture Quality**（A Complete／B Partial／C Degraded／D Failed），低於 A 就做 fallback 分段擷取，見「擷取品質與研究可靠度」。
- 網站被網路政策擋住（curl 回 403、Playwright 出現 `ERR_TUNNEL_CONNECTION_FAILED`）就寫明限制，不要繞過。
  Playwright 出現 `ERR_CERT_AUTHORITY_INVALID`（curl 卻能連上）是瀏覽器還不信任環境的代理憑證：不要關掉憑證檢查，把環境的 CA 加進瀏覽器憑證庫（雲端環境的 CA 在 `/root/.ccr/agent-proxy-ca.crt`）：
  `apt-get install -y libnss3-tools && certutil -A -d sql:$HOME/.pki/nssdb -t "C,," -n proxy-ca -i <CA 檔>`

**收尾**
- 跑 `python "$SCRIPTS/reliability.py" research/<網域> --mode <daily|standard|deep> --markdown --write`，把輸出的「研究可靠度」貼到報告開頭（Standard 連同能力狀態表）。
- 跑 `python "$SCRIPTS/validate_refs.py" research/<網域>`：報告引用的每張截圖、每個 source/ 檔案都要存在。有錯就修正引用，不要交出有死連結的報告。
- 在 `research/README.md` 的索引表加一行（欄位：網站｜研究日期｜連結），連結指向 summary.md，連結文字寫模式，例如 `[摘要（Daily）](<網域>/summary.md)`；不要改動其他列。
- 回覆使用者時給 3–5 點重點和檔案路徑，以及最重要的不確定之處與 Overall 可靠度，不要把整份內容貼進對話。

（`SCRIPTS=<SKILL.md 所在的資料夾>/scripts`，用絕對路徑。）

## 擷取品質與研究可靠度（三種模式都適用）

三條原則，遇到下面沒寫到的情況就照它們判斷：

- **Research completeness should degrade gracefully.** 工具拿不到某項資料時，降低那一項證據的完整度，而不是讓整份研究失敗。
- **Research value and research feasibility are separate dimensions.** 值得研究，不代表這次一定能完整量測。
- **Never treat missing evidence as evidence of absence.** 沒有看到，不代表網站沒有。

完整規則（門檻、fallback、時間預算、失敗對照表、Reliability 算法）在 [`references/capture-reliability.md`](references/capture-reliability.md)。重點：

- **Capture Quality**（每次擷取）：`python "$SCRIPTS/quality_check.py" image screenshots/desktop.png --record research/<網域> --as firecrawl-desktop`（手機用 `--as firecrawl-mobile`）。工具只偵測空白與高度不符；看過切圖發現「有畫面但內容不對」（只拍到模糊背景、動畫拍到一半）時用 `--override <等級> --reason "…"` 調低，理由必填。
- **Fallback 分段擷取**：等級低於 A（大段空白、只取得首屏、高度和內容不符）時，不要只標「推測」。依序嘗試：捲動後再擷取 → 在固定捲動位置分段截圖 → 其他現有可用方式（例如工具支援的 scroll／wait actions、加大 `waitFor`）。目前的實作是 `python "$SCRIPTS/pw/scroll_page.py" <網址> research/<網域> --viewport 1440 --capture-only`（手機 `--viewport 390`），截圖存 `screenshots/fb/`，是正式證據。Fallback 也救不回來，才接受 B／C／D。
- **缺口的寫法**：擷取缺口裡的東西寫「未觀察到（擷取缺口）」，不寫「沒有」。「全部」「沒有」「只有」只能建立在那個區域 Capture A 的證據或 DOM 檢查上。缺口只降級那一塊，不影響其他區域的結論。
- **Research Reliability**：每份報告開頭寫一行 Capture／Interaction／Responsive／DOM/CSS／Overall（A Reliable、B Mostly reliable、C Partially reliable、D Limited），由 `reliability.py` 產生。它是「這次取得證據的可靠度」，**不是網站設計的評分**。
- **Evidence 與 Reliability 分開**：單一結論多確定，看那句結論自己的證據（來源標記、推測；Deep 用 E1–E5）。Capture C 的研究裡，實測到的數值仍然是實測值；Capture A 的研究裡，推測仍然是推測。Reliability 只限制「範圍性」的結論（全頁幾個 CTA、某元素存不存在、手機拿掉了什麼）：對應面向低於 B 時改寫成「在取得的範圍內…」。
- **截圖引用**寫完整名稱：`（截圖：pw1440-s07）`、`（截圖：fb-d-s03）`、範圍寫 `pw1440-s01～pw1440-s05`。`validate_refs.py` 依這個寫法檢查引用是否存在、是否已上傳。

## Daily 模式

目標：5 分鐘內產出一頁「今天學到什麼」。只做快速觀察，不建立證據清單。

1. **擷取**（兩次 Firecrawl 呼叫）
   - 桌機：`formats: ["markdown", "branding", "screenshot"]`，`screenshotOptions: {"fullPage": true}`，`onlyMainContent: true`（回傳太大時工具會另存成檔案，只讀出 markdown 和 branding 就好）
   - 手機：`mobile: true`，`formats: ["screenshot"]`，`screenshotOptions: {"fullPage": true}`

   下載成 `screenshots/desktop.png`、`screenshots/mobile.png`，切段後用 Read 看過一遍。markdown 和 branding 只在對話中參考，不用存檔。
   branding 是工具自動推估的，和截圖看到的不一致時，以截圖為準。
2. **Capture Quality**：兩張截圖各跑一次 `quality_check.py image … --record`（桌機加 `--content-chars <markdown 字數>`，讓「截圖很短、內容很長」被抓出來）。
   看切圖時發現工具沒抓到的問題（模糊背景、只有預載畫面、動畫中途），用 `--override` 調低並寫理由。
3. **Fallback**（等級低於 A 才做；每站最多 3 分鐘、每種方法最多 2 次）：照上一節的分段擷取策略補截圖，
   再用 `quality_check.py segments source/fallback-d.json --record … --as fallback-desktop`（`scroll_page.py --capture-only` 已自動記錄）。
   Daily 可以用 Playwright 做 fallback **擷取**，但不做 Playwright **量測**。網站無法直連、Playwright 不可用時，記錄「fallback 不可用」並接受原等級。
4. **快速觀察**，每個面向只抓最突出的 1–2 件事（寧可少而有理由，不要列清單），並想清楚「為什麼這樣設計」：
   - **背景**：網站是誰、這一頁要訪客做什麼。
   - **商業／轉換**：快速回答「這個網站怎麼引導轉換？」：主要商業目標、Primary CTA（文案與大約出現幾次）、從進站到行動的主路徑，以及最明顯的一個轉換機制或可觀察的阻力。CTA 次數是從截圖數的，寫「截圖上約 N 次」。
   - **品牌／風格**：快速回答「它想建立什麼風格與品牌感？」：它可能想讓誰感受到什麼（標推測），最主要靠哪 1–2 個手段（例如攝影、單一字重、極短標題）；文案語氣一句話。
   - **視覺**：配色、字體、版面中最有特色的選擇。只寫「用了什麼、承擔什麼功能」，品牌感寫在上一項。
   - **UX**：訪客怎麼操作與找到資訊（導覽、段落結構、需要展開或離站的地方）；CTA 策略寫在商業／轉換，這裡不重複。
   - **動態**：截圖看得出來的動態線索（例如輪播、跑馬燈、預載畫面），一律標（推測）。看不出來就寫「這次沒有觀察動態」，不要猜。
   - **響應式**：手機版和桌機版最大的差別，以及這樣改的理由。
   - **模式**：在頁面裡重複出現至少 2 次的設計決策（結構、視覺處理、互動、轉換、品牌表現），不是元件名稱。
5. **寫 `summary.md`**，用 [`templates/daily.md`](templates/daily.md)，一頁以內：開頭第二行是 `reliability.py --mode daily --markdown` 產生的研究可靠度；背景寫在「這個網站在做什麼」，其餘面向寫在速記（每項一到兩行）；「不要照抄的地方」最多 3 點；最大的不確定之處用一行寫在最後。
   篇幅和以前一樣是一頁：多了兩個面向，就把每項寫得更短，不是把頁面拉長。
   Fallback 之後仍有缺口時，缺口裡的內容寫「未觀察到」，不寫「沒有」；CTA 次數寫「截圖上約 N 次（Capture B，中段有缺口）」這類帶範圍的說法。
   引用 fallback 截圖時寫完整名稱（`（截圖：fb-d-s03）`），收尾跑 `validate_refs.py`。

Daily 不做：Playwright **量測**（DOM／CSS 數值、hover、focus、點擊；fallback 擷取除外）、證據 ID、像素取樣、減少動態、平板寬度、設計系統推論、自我審查。

## Standard 模式

目標：15–20 分鐘，讓重要的結論都有實際的截圖、DOM、CSS 或互動證據可以查；量不到的部分明確降級，而不是讓整份研究失敗。

0. **Feasibility Preflight**（≤ 90 秒）：`python "$SCRIPTS/pw/preflight.py" <網址> research/<網域>`。
   得到 High／Medium／Low／Blocked 與建議範圍（full／reduced）。Blocked 就不做 Standard（只保留 Daily，並說明原因）；Low 用縮小範圍。
   從多個 Daily 挑 Standard 時，這一步在選站階段就做（見「從多個 Daily 選 Standard」）。
1. **擷取**：先做 Daily 的兩次 Firecrawl（從 Daily 升級時沿用）與 Capture Quality。網站可以直連時（`curl -sI <網址>` 確認），用量測工具一次跑完三個寬度：

   ```bash
   python "$SCRIPTS/pw/run_standard.py" <網址> research/<網域>          # --scope auto 會讀 preflight 結果
   ```

   它依序量 1440 → 390 → 768，每個寬度是獨立子行程、有自己的時間上限（1440：300 秒、390：240 秒、768：150 秒，合計 ≤ 720 秒），逾時就整組強制中止，**某個寬度失敗不影響其他寬度**。量測內容：
   - **截圖**：首屏＋分段捲動截圖（`screenshots/pw/pw<寬>-hero.png`、`pw<寬>-sNN.png`）。截圖逾時自動改用 CDP 擷取。
   - **捲動**：滑鼠 wheel →（手機）觸控手勢 → 鍵盤 → scrollTo，用 scrollY、捲動容器、smooth-scroll 包裝層的 transform 判斷有沒有真的移動；全部捲不動就記為 locked，不再重試。
     WebGL 讓幀率很低時，原生輸入會卡住數十秒，工具會自動改用頁面內的合成事件（記為 fallback）。
   - **可見元素、DOM、CSS**：只算真的看得見、可以互動的元素（display、visibility、opacity、bounding box、與 viewport 有交集；隱藏複本排除），標題層級、computed style、`:root` 變數、`prefers-reduced-motion` 規則（`source/pw/dom-css-<寬>.json`）。
   - **CTA 清單**：每個寬度所有可見 CTA 的文字、段落、y、連結目標、主次樣式、是否常駐；1440 點一次 Primary CTA，記錄實際結果與落地頁表單欄位（不送出）。
   - **Hover**：比對按鈕本身＋子孫＋`::before／::after` 的 color、background、opacity、transform、border、box-shadow 等，hover 寫在內層也量得到。
   - **Focus**：Tab 走 8 步，記錄焦點位置、`:focus-visible`、outline／box-shadow，以及焦點落在看不見元素的次數。
   - **選單與響應式對照**：找選單按鈕並打開一次，最後產生三寬度對照表（`source/pw/responsive.json`）。

   選元素的順序是 semantic element → role → aria → data-* → DOM 結構，最後才用文字。各工具也能單獨執行（`capture_page.py`、`scroll_page.py`、`inspect_visible.py`、`measure_cta.py`、`measure_hover.py`、`measure_focus.py`、`measure_responsive.py`），用法見 [`scripts/pw/README.md`](scripts/pw/README.md)。
   工具量不到、需要補一個特定證據時才手寫 Playwright，同樣只量看得見的元素、守住時間上限，結果也存 `source/pw/`。
   跑完後看 `run_standard.py` 印出的**能力狀態表**：每一格是 ok／fallback／partial／unverified／unavailable／skipped／na。不能直連時退回 Daily 的資料來源，並在 notes.md 開頭寫明。
   視窗截圖數量很多時，可以拼成對照圖再看，拼好的圖放 `_slices/`。
2. **寫 `notes.md`**，用 [`templates/standard.md`](templates/standard.md)。開頭是 `reliability.py --mode standard --markdown` 產生的研究可靠度與能力狀態表。研究面向和順序同 Daily，每個結論後面用括號標出來源：
   `（截圖：pw1440-hero）`、`（CSS：h1）`、`（DOM）`、`（互動：hover CTA）`、`（CTA 清單）`、`（文案：h1）`、`（branding）`，推出來的標 `（推測）`。截圖名稱寫完整（`pw1440-s07`、`int1440-hover-1-after`），範圍寫 `pw1440-s01～pw1440-s05`。
   - **依能力狀態降級，不要中止**：screenshot unavailable → 該寬度的視覺證據改用 Firecrawl 並註明；scroll unavailable → 首屏以下的動態與響應式寫 partial；hover／focus／cta_click／menu 是 unverified 或 unavailable → 那個行為寫「未驗證」；dom／css unavailable → 數值與結構只能從截圖推（標推測）。對照表在 references/capture-reliability.md §6。
   - 商業／轉換：CTA 位置與次數用 CTA 清單的實際數字；寫出轉換路徑與步驟數；價格、FAQ、信任元素放在哪裡、各自在處理什麼（慾望、信任、疑慮）。轉換假設標（推測），不寫效果。
   - 品牌／風格：每個品牌詮釋都要指向支撐它的 CSS、文案或截圖；分開「用了什麼」和「傳達什麼」。
   - 模式要列出至少 2 個出現位置；商業或品牌的重複決策也可以是模式。
   - 動態只寫看得到或量得到的：CSS 的 transition／animation 設定值、hover 前後的差異；進場動畫和捲動動畫若沒有實際拍到，標（推測）。
   - 響應式比較桌機、手機兩種寬度（平板有明顯不同才寫）。
3. **寫 `summary.md`**（同 Daily 範本），每一點連回 notes.md 的段落。

**從 Daily 升級時**：沿用已有的 Firecrawl 截圖，在 notes.md 加一節「Daily 推測的驗證結果」（每個推測一行：證實／修正／推翻，附來源；Daily 估的 CTA 次數、轉換路徑、品牌推測也要驗證），summary.md 只放三到五行重點。
為了驗證某個推測，可以在幾個固定捲動位置多拍幾張、或隔一兩秒再拍一張；但不要擴大成整套動態量測，那是 Deep 的工作。

Standard 不做：證據 ID 與 E1–E5 等級、像素取樣、減少動態的重拍（CSS 裡有沒有 `prefers-reduced-motion` 規則可以順手記一句）、動態連拍量測、Deep 的三寬度逐項對照表（`responsive.json` 的簡表可以引用）、設計系統推論、自我審查。

## 從多個 Daily 選 Standard

一次研究多個網站（例如每日排程：N 個 Daily 選 K 個 Standard）時，**Research Value 和 Research Feasibility 分開判斷**，不要把「Daily 最不確定」直接當成「最適合 Standard」：WebGL、3D、自訂捲動的網站往往最值得研究，也最容易量不到。

```
N 個 Daily → Research Value 排序 → 前 2K 個候選 → Feasibility Preflight（每站 ≤ 90 秒）
→ 可量測（High／Medium）／低可量測（Low）／不可量測（Blocked）→ 從可量測候選中依 Value 選 K 個
```

- **Research Value**（研究者判斷，8 項各 0–2 分）：Visual novelty、UX novelty、Motion novelty、Responsive novelty、Business insight、Brand insight、Daily uncertainty（Standard 有機會驗證的才算）、Learning value。
- **Research Feasibility**：`preflight.py` 的結果。
- **例外**：Low 的網站 Value 明顯最高（≥ 12/16，且比第 K 名可量測候選高 3 分以上）時，可以佔最多 1 個名額，但要縮小範圍（`--scope reduced`）、量測 ≤ 8 分鐘、排在最後量測，並在 notes.md 與總覽寫明限制。Blocked 這次不做 Standard。
- 把每個候選的 Value、Feasibility 與選擇理由寫成一張表，放進總覽。

Value 決定「值不值得研究」，Feasibility 決定「這次能研究到多少」。細節見 references/capture-reliability.md §5。

## Deep 模式

讀 [`references/deep-mode.md`](references/deep-mode.md)，照它的第 0–6 階段做；擷取、失敗處理與可靠度照 [`references/capture-reliability.md`](references/capture-reliability.md)。
它會再帶你讀 `references/evidence-and-claims.md`（證據 ID、證據等級、結論層級、轉換與品牌的說法規則）和 `references/analysis-dimensions.md`（商業／轉換 14 項、品牌／風格三組、視覺 13 項、UX 11 項、動態 6 欄、響應式三寬度表）。
Deep 會把商業與品牌的重複決策納入模式（VP），再進到設計語言、設計原則、設計系統推論與自我審查。

## 多網站比較

1. 每個網站先用同一個模式各自研究（各自一個資料夾）。
2. 再寫 `research/comparisons/<YYYY-MM-DD>-<主題>.md`：
   - Daily／Standard：一頁內，寫兩站共同的模式（各自的例子）、商業目標與品牌定位的差異如何導致設計語言的差異、各自適合借鏡的情境。
   - Deep：用 `templates/comparison.md`，規則見 deep-mode.md。
3. 比較時只引用各站的 summary／notes／report，不重新描述各站資料；必須重述數值時，先寫一句這裡新增的比較角度。

## 在子代理中執行時

有些環境不允許子代理寫報告檔，而且哪些檔案會被擋並不一致。規則：每個檔案都先試著正常寫入；**被擋下的檔案不要用 Bash 或其他方式繞過**，改成在最後回覆裡附上完整內容，由主對話存檔。回覆開頭列出哪些檔案已寫入、哪些放在 FILE 區塊。格式：

```
===== FILE: research/<網域>/summary.md =====
<內容>
```

截圖、切圖、source/ 這類非報告檔照常寫入。
