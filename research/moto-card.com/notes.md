# Moto Finance 研究筆記（Standard）

- **網址**：https://www.moto-card.com/　**研究日期**：2026-10-02
- **資料來源**：Firecrawl（1920、360，沿用 Daily 的擷取：`screenshots/desktop.png`、`screenshots/mobile.png`）、Playwright（1440、768、390；量測在 `source/pw/`，截圖在 `screenshots/pw/`）
  - `source/pw/dom-css-{1440,768,390}.json`：標題、連結、區塊、`:root` 變數、transition、canvas／video、載入的腳本
  - `source/pw/interactions.json`：hover、Tab focus、手機選單、FAQ 展開、捲動後的 nav 狀態
  - 截圖命名：`pw<寬>-hero`、`pw<寬>-sNN`（每捲一個視窗高拍一張，NN 是第幾張）、`int1440-*`／`int390-*`（互動）
- **限制**：整頁截圖在 WebGL 區塊會空白，所以改成逐視窗捲動截圖；捲動動畫只拍了幾個捲動位置的靜態畫面，沒有連拍，動態的「怎麼動」仍是推測。CTA 只在桌機 Chromium 點過一次（開到 Google Play），iOS 是否導去 App Store 沒測。

每個結論後面用括號標來源：`（截圖：pw1440-s03）`、`（CSS：h1）`、`（DOM）`、`（互動：hover CTA）`、`（branding）`；推出來的標 `（推測）`。

## 背景
Moto 是 Visa Infinite 會員卡（背後是鏈上、自託管錢包，FAQ「How does Moto work?」寫明 collateral-backed credit limit）（DOM）。首頁的任務只有一個：讓訪客按「Apply for Access」。實測這顆按鈕的 `href` 是 Google Play 的 App 頁，`target="_blank"`，點下去開新分頁到 Play 商店（互動：click CTA；DOM）；頁面裡有一個 `display:none` 的「Get early access」popup，按鈕上有 `data-popup-open="false"`、`data-device-download="true"`（DOM），所以「申請」實際上是「下載 App」，可能依裝置切換商店（推測）。

## 視覺
- **配色**：`:root` 直接定義了整套灰階：`--_colors---dark #080808`（body 底色）、`--_colors---light #e1e5e5`（body 文字、主要按鈕底）、grey100–800（`#e1e5e5`→`#1c2227`）（CSS：:root、body）。淺色段落不是同一個灰：0 FX 段 `section.numbers` 底色是 `rgb(237,239,239)`＝`#EDEFEF`，「Made for the places…」和 FAQ 是純白 `#FFFFFF`（CSS：section）。全站沒有任何彩色，唯一的「色」來自照片與影片。
- **字體**：全站單一字族 `Neuemontreal`，字重全部 500（含 body、h1–h3、按鈕）（CSS：body、h1–h3）。桌機階層：h1 64px／行高 64px（1.0）、h2 64／52／42px 三種、h3 18px、body 16px／行高 1.3、小字 14px（nav 連結）、FAQ 分組標 12px 灰 `#666F76`（CSS：h1–h3、:root `--text--h1 6.4rem`、`--text--h2 5.2rem`、`--text--h3 4.2rem`）。大標全大寫、字距 -0.008em，body 字距 -0.003em（CSS）。只靠大小與大寫製造層次，不用粗細。
- **版面與間距**：`html` 字級 10px，所有尺寸用 rem（1rem＝10px）（CSS：html）。左右留白 `--padding-global: 3.2rem`（32px），區塊上下 `--padding-section: 12rem`（120px），容器寬 `--container-medium 100rem`、`--container-small 60rem`（CSS：:root）。版面在兩種模式之間切換：置中單欄（Hero、Infrastructure、The card、0 FX、Access our network）和左右兩欄（Concierge 標題靠左、Made 清單、FAQ、footer）（截圖：pw1440-s00～s13）。
- **形狀與層次**：按鈕圓角 `1425.6px`（全膠囊），沒有陰影、沒有邊框（CSS：.button）。主要按鈕淺底 `#E1E5E5`＋黑字，高 52px、padding 18/24px；nav 按鈕深底 `#1C2227`＋淺字，高 48px、padding 16/32px（CSS：.button）。清單與 FAQ 用 1px 細線分隔（截圖：pw1440-s09、s11）。
- **圖像**：Hero 是一支滿版影片（`video.sheep_video.js-video-scroll`，1440×900），內容是黑色岩壁前石台上的金屬卡（DOM；截圖：pw1440-hero）。之後有三個 `<canvas>`：`canvas.canvas_earth`（地球）、`canvas#card_canvas`（卡片與周圍照片）、`canvas.numbers_overlay_canvas`（貨幣數字）（DOM）。照片全是低飽和的混凝土空間、窗簾、檯燈（截圖：pw1440-s03、s07、s10）。
- **合起來的感覺**：一個字族、一個字重、一組灰、一種膠囊按鈕，所有「豐富感」都交給影片、WebGL 和攝影。介面本身刻意退後，讓卡片和空間照片當主角，所以讀起來像私人會所的目錄，而不是金融產品頁。

## UX
- **頁面結構與導覽**：區塊順序（1440）：Hero 影片（0–900）→ 地球 `section.earth`（1035 起，外面包 `pin-spacer`，會被釘住）→ 卡片 `section.card`（1935–4185）→ 0 FX `section.numbers`（4185–5535，淺底）→ Concierge `section#benefits`（5535–7875，影片）→ Made `section.made`（7875–8885，白底）→ Access our network `section.luxury`（8885–9785）→ FAQ `section#faq`（9785–11063，白底）→ footer（深底）（DOM）。只有一個 h1，其餘大標都是 h2，Made 清單的五項和 FAQ 分組是 h3（DOM）。桌機導覽：logo、Membership／Partnership、右側 CTA；捲動後中間兩個連結會收起（`.nav_menu` 寬高變 0、`transition: transform 0.5s`），只剩 logo＋CTA（截圖：pw1440-s01；DOM）。
- **主要行動**：「Apply for Access」桌機可見 6 次：nav、Hero、地球段、卡片段、Access our network、footer，全部連到同一個 Google Play 網址（DOM）。手機選單裡再加一顆淺色「Become a Partner」和深色「Apply for Access」（截圖：int390-menu-open）。footer 另有 App Store／Google Play 下載徽章（DOM）。價格只在 FAQ「What does Moto Membership cost?」裡（DOM）。
- **回饋**：
  - 主要按鈕 hover：文字 `#080808`→`#666F76`、底 `#E1E5E5`→`#DFE3E3`，`transition: color 0.2s, background-color 0.2s`，大小與位置不變（互動：hover CTA；截圖：int1440-cta-before、int1440-hover-cta）。效果是「字變淡」，不是常見的變亮或位移。
  - nav 按鈕 hover：文字 `#E1E5E5`→`#C0C4C6`、底 `#1C2227`→`#12191C`（互動：hover nav CTA）。
  - nav 連結：非目前頁的 Partnership 平時 `opacity: 0.5`，hover 變 1，`transition: opacity 0.3s`（互動：hover nav）。
  - Tab focus：依序是 logo → Membership → Partnership → nav CTA → Hero CTA，全部 `:focus-visible` 成立，用瀏覽器預設的 auto outline，在深底上看得到白色外框（互動：Tab；截圖：int1440-focus-tab4）。
  - FAQ：預設展開第一題；點第二題後第一題收起（高 197→51px、opacity 1→0.5），一次只開一題；未展開的問題 `opacity 0.5`，`transition: opacity 0.3s`（互動：FAQ；截圖：int1440-faq-before、int1440-faq-after）。
- **它怎麼引導訪客**：每一段都是「一句大標＋同一顆 CTA」，CTA 永遠在 nav 右上可按；捲動後 nav 只剩 CTA，等於把導覽縮成一個動作。需要細節的人才會往下讀到白底的清單和 FAQ，價格放在最後。

## 動態
看得到或量得到的：
- **CSS transition**：按鈕 `color 0.2s, background-color 0.2s`；nav 連結與 FAQ `opacity 0.3s`；nav 選單 `transform 0.5s`；footer 連結 `color 0.2s`；下載徽章 `opacity 0.2s`（DOM：transitions）。沒有任何 CSS `animation`（DOM：animated 為空），動態都由 JS 驅動。
- **JS 工具**：載入 Lenis 1.3.18（`html.lenis`，平滑捲動）、GSAP 3.15、ScrollTrigger、SplitText（DOM：scripts）。
- **地球段被釘住**：`section.earth` 外層是 GSAP 的 `pin-spacer`（DOM）。捲到 900 時地球在下緣、浮著「Transaction Successfull」「Jet Booked」；捲到 1300 時地球變大上移，多了「Hotel Booked」、「Transaction Successfull」變淡（截圖：int1440-earth-y900、int1440-earth-y1300）。通知泡泡隨捲動出現與淡出，這點有拍到；中間的過程是推測。
- **卡片隨捲動轉向**：同一段在 2400、3000、3600 三個捲動位置，卡片分別是側面一條細線、斜向正面、直立正面，周圍的照片面板散在不同深度（截圖：int1440-ring-y2400、y3000、y3600）。轉向角度隨捲動改變有拍到；是否連續旋轉是推測。
- **0 FX 段**：左右兩欄貨幣金額在 DOM 裡是透明文字（`color: rgba(0,0,0,0)`），實際看到的是 `numbers_overlay_canvas` 畫出來的，不同列有不同的模糊與大小（中間列較大、上下列模糊）（DOM；截圖：int1440-numbers-t0）。同一捲動位置隔 1.2 秒拍兩張，畫面相同（截圖：int1440-numbers-t0、t1200ms），所以不是依時間自動跑的跑馬燈；隨捲動移動是推測。「Frictionless／One system everywhere／Global spend」三行的 `filter` 被設成 `blur(0px)`（其他元素是 `none`）（CSS），代表有程式在控制模糊值，進場時從模糊變清楚（推測）。
- **footer 進場**：載入時 footer 大標「A QUIETER WAY…」是 `opacity: 0`、`transform: translateY(50px)`（CSS：h2），捲到後變清楚（截圖：pw1440-s12）。淡入上移有量到起始值；時長與曲線沒有量。
- **時鐘**：Concierge 與 Made 段之間的時區列是即時時間，兩次擷取秒數不同（02:41:13 → 02:46:22 UTC）（DOM）。例外：其中一個「11:20:29 PM GST」在兩次擷取都一樣，而且和 UTC+4 對不起來，看起來是沒在更新的值（DOM）。
- **減少動態**：CSS 裡沒有 `prefers-reduced-motion` 規則（DOM：reducedMotionQueries 為空）；JS 有沒有處理沒有測。

## 響應式
- **導覽**：1440 是 logo＋兩個連結＋CTA；768 和 390 都換成漢堡選單（截圖：pw768-s00、pw390-s00）。手機選單是從上往下的面板，背景整片模糊（`css-nav-blur`），內含 Membership、Partnership（16.6px）、「Become a Partner」與「Apply for Access」兩顆滿寬膠囊（截圖：int390-menu-open；DOM）。
- **字級**：390 的 `html` 字級變成 10.374px（1440、768 都是 10px），所以 rem 隨寬度微縮；同時標題換了一組 rem：h1 64→37.3px、body 16→14.5px、Made 標題 42→24.9px、h3 18→14.5px（CSS：html、h1–h3）。768 的字級和 1440 完全一樣（h1 64px），只有導覽換成漢堡（CSS）。
- **版面**：置中的區塊直接縮窄；CTA 在手機變成 349px 寬的滿寬膠囊（高 43.6px）（CSS：.button 390）。Concierge 的條列在手機變成右下角靠右的大寫堆疊字（截圖：pw390-s07）。Made 清單和 FAQ 在 390 仍保留左右兩欄（左邊編號／分組，右邊說明／問題），右欄很窄（截圖：pw390-s09、pw390-s11）。
- **內容取捨**：手機沒有拿掉任何區塊，三個 canvas 在三種寬度都存在，區塊順序一致（DOM：sections 768、390）。
- **理由**：品牌體驗（影片、地球、卡片）被當成不能刪的核心，所以手機只縮字與改導覽；兩欄清單保留，是為了維持「編號＋說明」的目錄感（推測）。

## 模式
### 一句大標＋同一顆膠囊 CTA
- 出現位置：Hero（h1＋CTA）、Infrastructure（h2＋說明＋CTA）、The card is only the beginning、Access our network、footer（DOM；截圖：pw1440-s00、s01、s04、s10、s13）。
- 共同規則：大標全大寫、行高 1.0、置中或靠左兩行；CTA 文案、尺寸（253×52）、顏色完全相同（CSS：.button）。
- 可能的目的：每一屏都是一個獨立的「海報」，訪客在任何一屏決定都按得到。

### 編號／分組＋細線＋右側說明
- 出現位置：Made（01–05，右上角寫總數 05）、FAQ（ABOUT MOTO／COSTS & BENEFITS／USAGE，右上角寫總數 13）（截圖：pw1440-s09、s11；DOM）。
- 共同規則：白底、h2 42px 靠左、下面一條細線；左欄小字標籤、右欄內容；非焦點項目 `opacity 0.5`，焦點項目為 1（CSS：.accordion；截圖：pw1440-s09 中 01 Hotels 是黑字，02–05 是灰字）。
- 可能的目的：把「說明型」內容收成型錄格式，和前面的影像段落換一種閱讀節奏。

### 用透明度表示「現在看哪一個」
- 出現位置：nav 連結（目前頁 1、其他 0.5）、FAQ（展開項 1、其他 0.5）、Made 清單（第一項黑、其餘灰）（CSS；互動：hover nav、FAQ；截圖：pw1440-s09）。
- 共同規則：不換色、不加底線，只調整 opacity，transition 0.3s。
- 可能的目的：配合單一字重、單一灰階的系統，用最少的變數做出狀態差異。

### 影像上壓一行小字資訊列
- 出現位置：Concierge 影片下緣的時區列、Made 段上方照片下緣的時區列（截圖：pw1440-s06、s09）。
- 共同規則：一行小字、等距排開、左邊「● 24/7」。
- 可能的目的：用即時資料當作「全天候、全球」的證明。

## Daily 推測的驗證結果

| Daily 的說法 | Standard 結果 | 依據 |
|---|---|---|
| 第二屏卡片周圍「排成弧形的 3D 照片環」（推測） | **部分修正**：卡片確實是 WebGL（`canvas#card_canvas`），而且隨捲動轉向（側面→斜向→正面）；但周圍照片不是規則的環，而是散在不同深度的面板。這段是第三個區塊，不是第二屏（第二屏是地球）。 | DOM；截圖：int1440-ring-y2400／3000／3600 |
| 0 FX 下方條列「捲動時逐行對焦」（推測） | **大致成立，仍是推測**：三行文字有被程式設定的 `filter: blur()`，穩定後是 `blur(0px)`；Daily 截圖看到的模糊是動畫中途。確切觸發方式沒拍到。 | CSS：filter；截圖：int1440-numbers-t0 |
| 貨幣金額是「一條貨幣跑馬燈」（推測） | **推翻**：不是橫向跑馬燈，而是左右兩欄直排的金額，由 `numbers_overlay_canvas` 畫出、各列有不同模糊；固定捲動位置時 1.2 秒內不動，所以不是依時間播放。DOM 裡的金額文字是透明的，所以 markdown 才抓到大量重複。 | DOM；截圖：int1440-numbers-t0、t1200ms |
| 地球上的通知泡泡「可能依序跳出」（推測） | **確認會變化**：捲動 900→1300 時多出「Hotel Booked」、「Transaction Successfull」變淡；變化跟著捲動，地球段被 GSAP 釘住。 | DOM：pin-spacer；截圖：int1440-earth-y900、y1300 |
| 手機 Hero 看不到標題與導覽，可能是擷取問題 | **確認是擷取問題**：390 寬度下 h1「BUILT FOR MODERN WEALTH」存在（37.3px，在畫面上），右上有漢堡選單，打開後有完整連結。 | 截圖：pw390-s00、int390-menu-open；CSS：h1 |
| 截圖大段空白是 3D／捲動區塊沒渲染 | **確認**：桌機空白段對應 `section.card`（WebGL 卡片）；頁尾空白是 footer 大標初始 `opacity: 0`、`translateY(50px)`，逐視窗截圖裡都有內容。 | DOM；CSS：footer h2；截圖：pw1440-s03、s12 |
| CTA「Apply for Access」出現 4 次 | **修正**：桌機可見 6 次（nav、Hero、地球段、卡片段、Access our network、footer），而且全部連到 Google Play，不是申請表單。 | DOM；互動：click CTA |
| 0 FX 段是接近 `#E1E5E5` 的淺灰 | **修正**：實測是 `#EDEFEF`；`#E1E5E5` 是按鈕底與 body 文字色。 | CSS：section.numbers |
| 字體 Neue Montreal、主要按鈕淺灰膠囊黑字（branding） | **確認**：`Neuemontreal`、字重 500；按鈕 `#E1E5E5` 底、`#080808` 字、全圓角。 | CSS：body、.button |
| 手機的 Made／FAQ 保留兩欄，右欄很窄 | **確認**。 | 截圖：pw390-s09、s11 |
| 時區時鐘是「看得見的資料」 | **確認是即時時間**，但有一個 GST 值沒有更新。 | DOM |
