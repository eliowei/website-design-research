# MEER MOHSIN 觀察紀錄

- **網址**：https://www.meermohsin.me/（canonical 為 https://meermohsin.me/）
- **研究日期**：2026-10-02
- **研究頁面**：首頁（單頁式作品集，導覽全部是頁內錨點）
- **擷取方式**：Firecrawl（全部 `maxAge: 0`）＋ Playwright（Chromium `/opt/pw-browsers/chromium`，網站可直連：`curl -sI` 回 200，Vercel）＋ 下載 JS／CSS 原始碼摘錄（[source/js-excerpts.md](source/js-excerpts.md)）

## 0. 網站背景（Context）

- **網站是誰**：Meer Mohsin（也寫作 Mohsin Meer）的個人作品集；meta description 寫「Front-End Developer, UI/UX Designer, and 3D Web Developer from Pakistan」，技術關鍵字 Three.js、GSAP、WebGL（H-meta）。首屏自我定位「VISUAL STORYTELLER / UI/UX DESIGNER / 3D WEB DEVELOPER」（M-L26）。
- **Awwwards 背景（使用者提供）**：Site of the Day，2026-09-26；標籤 Design Agencies、Web & Interactive、Animation、Storytelling、3D；評分 Design 7.28、Usability 6.94、Creativity 7.75、Content 7.19；Developer Award 中 Animations/Transitions 8.00、Accessibility 6.60。頁面本身也展示了這些獎項（S-pw1440-sec25–28）。
- **頁面任務**：讓潛在客戶認識他、看作品、聯絡他。聯絡出口有三個：右下常駐「ONLINE / Let's Connect」（點擊開 WhatsApp，H-js-cta）、導覽的 CONTACT US（開啟表單面板，H-js-contact）、選單內的 e-mail 與社群（M-L7–10）。
- **目標使用者**：[H] 想委託高互動、品牌感強網站的客戶或代理商，依據是文案以「experiences」「immersive」「memorable」為主軸、服務列「UI-UX / 3D WEB / LEGACY」（M-L27, M-L45–47）；沒有價格、流程以外的商業資訊。
- **研究重點**：使用者只說「挑一個 Awwwards 網站分析」；本次分析整個首頁，因為它的得獎項目是 Animation／Storytelling／3D，動態與敘事節奏是重點。

## 1. 擷取清單

| 檔案 | 工具／寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | Firecrawl 1920 全頁 | — | — | **沒有產生**：全頁截圖連續 3 次逾時（MCP 60 秒上限、`timeout: 55000` 也失敗），見 X-01 |
| screenshots/fc-viewport-wait5s.png | Firecrawl 1920 視窗 | 1920×1080 | maxAge 0，`waitFor: 5000` | 只有首屏，進場動畫進行中（S-d-vp） |
| screenshots/tablet.png | Firecrawl 768 全頁 | 768×28122 | maxAge 0 | 切成 S-t00–t12；大段空白（X-02） |
| screenshots/mobile.png | Firecrawl 360（`mobile: true`）全頁 | 360×21171 | maxAge 0 | 切成 S-m00–m09；首屏與大段空白（X-03） |
| source/page.md | Firecrawl markdown | — | maxAge 0，2026-10-02 | 整理方式見檔頭（逐詞斷行合併、SVG data URI 改寫） |
| source/branding.json | Firecrawl branding | — | maxAge 0 | metadata 欄位省略 |
| source/links.json | Firecrawl links | — | maxAge 0 | 10 個連結，6 個是頁內錨點 |
| source/index.html、source/assets/index.js、index.css | curl | — | 2026-10-02 | 原始碼，摘錄在 source/js-excerpts.md |
| screenshots/pw/d1440-load-00…01.png | Playwright 1440×900，第一次造訪 | 1440×900 | — | 連拍原本要每 100ms，實際只拍到 2 張（X-04） |
| screenshots/pw/d1440-hero.png、d1440-sec00…30.png | Playwright 1440×900，第一次造訪，等穩定後每 900px 捲一次 | 1440×900 | — | 31 張，source/pw/stable-d1440.json |
| screenshots/pw/t768-hero.png、t768-sec00…26.png | Playwright 768×1024，重新整理後（跳過預載） | 768×1024 | — | 27 張，source/pw/stable-t768.json |
| screenshots/pw/m390-hero.png、m390-sec00…26.png | Playwright 390×844，`isMobile`、`hasTouch`，重新整理後 | 390×844 | — | 27 張，source/pw/stable-m390.json |
| screenshots/pw/i1440-*.png、i390-*.png | Playwright 互動（hover、Tab、選單、點擊） | — | — | source/pw/interact-i1440.json、interact-i390.json |
| screenshots/pw/rm1440-load-00.png | Playwright 1440，`reducedMotion: 'reduce'`，第一次造訪 | 1440×900 | — | source/pw/load-rm1440.json |
| source/pw/load-d1440*.json | Playwright 頁內 rAF 量測 | — | — | 有截圖／無截圖兩次，記錄預載計數、Lenis 狀態、臉部 transform |

**寬度與工具**：Firecrawl 桌機只有 1920 首屏，Playwright 桌機是 1440。兩者比較只在各自寬度內做；首屏差異登記為 X-05。
**環境限制（重要）**：這台機器的 Chromium 用軟體算繪 WebGL（`ANGLE … SwiftShader`），本站首屏有多個 WebGL canvas，量到 1440 寬 5 幀／9.5 秒、390 寬 16 幀／8 秒（X-04）。所以本次所有「實測時間」都只能證明**先後順序與最終狀態**，不能當成網站在一般裝置上的播放時長。

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 2.1 Firecrawl 截圖（S-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d-vp | E3 | 1920 首屏（waitFor 5s）：黑底、左上紅色漸層暗角；中央人像很暗（臉部尚未亮起），臉上疊一個紅色金屬感的對稱「翅膀／面具」圖形；橫跨畫面的超大白色無襯線字「…S ALWAYS GOIN…」，下緣被裁切；左上白色 logo、左側小段落白字；右上 HOME／ABOUT／SERVICES，WORK 只露出上半（逐字升起中）；右側三行 VISUAL STORYTELLER／UI/UX DESIGNER／3D WEB DEVELOPER；右下 ONLINE／Let's Connect 小框；底部一列 + TENSION + IMMERSION + IMPACT +，「IMPACT」字母高低不齊（升起中）；左下一列紅色細直線 |
| S-t00 | E3 | 768 y=0–2200：首屏人像（已亮起）＋紅色漸層、右上漢堡兩條線；接著黑底紅色大字「THIS WILL / DIFFERENT」，中間疊一行紅色草寫體「FEEL」；底部 TENSION／IMMERSION／IMPACT 列出現在 y≈980（全頁截圖把固定元素印在當下位置）；紅色小字段落；之後紅底火焰剪影邊界，「10+」黑色草寫數字＋右側黑色大寫說明 |
| S-t01 | E3 | 768 y=2200–4400：紅底「25+」「6+」，每列以細線分隔；火焰剪影把紅底切回黑底；右對齊紅字段落「Design attracts attention…」；下方開始出現暗紅色細線幾何（菱形、方框、對角線） |
| S-t02–t04 | E3 | 768 y=4400–11000：暗紅幾何線條背景上，紅色草寫「LEGACY」「UI - UX」「3D WEB」，右側紅字清單（UIUX、3D Web development、Problem Solver、User Research；Frontend Engineering、Three.js / WebGL、GSAP Animation、Performance Opt…，最後一行被截斷）；y≈10200 起全黑 |
| S-t05 | E3 | 768 y=11000–13200：作品「CODENARTS」：螢幕實拍 mockup，白色大標疊在圖上，下方置中白字一句說明，字距異常緊（字詞黏在一起） |
| S-t06–t07 | E3 | 768 y=13200–17600：全黑（X-02） |
| S-t08 | E3 | 768 y=17600–19800：白字「From the First Idea to」逐字變灰、右對齊段落後半變灰；中央垂直紅色光柱與人物剪影；白色草寫「Creative Direction」「Digital Craftsmanship」「Launch & Evolution」；接著「VISUAL / JOURNAL」紅色大字（無襯線＋草寫）疊在 3D 岩石圖上，部落格卡片開始 |
| S-t09 | E3 | 768 y=19800–22000：兩張部落格卡（灰底圖片、紅色標題、灰色日期）；「AWARDS & / RECOGNIZATIONS」紅色草寫＋無襯線大字，紅色小段落與之重疊 |
| S-t10–t11 | E3 | 768 y=22000–26400：全黑（X-02） |
| S-t12 | E3 | 768 y=26400–28122：紅字「EVERY GREAT ST / ORY NEEDS A / POWERFUL」（字被斷在 ST／ORY）＋草寫「ENDING.」；荊棘圈中「LET'S BE CREATIVE」；底部紅色草寫「GOING」與紅色漸層；右緣 Awwwards「Site of the Day」紅色直式徽章 |
| S-m00 | E3 | 360 y=0–2200：y=0–712 全黑（首屏沒有渲染，X-03）；之後「THIS WILL FEEL DIFFERENT」、紅字段落、火焰邊界、紅底 10+／25+／6+ |
| S-m01 | E3 | 360 y=2200–4400：火焰邊界、右對齊紅字段落、草寫「LEGACY」，其餘全黑 |
| S-m06 | E3 | 360 y=13200–15400：紅色光柱與人物剪影，白字「From the First Idea to」，「VISUAL JOURNAL」 |
| S-m07 | E3 | 360 y=15400–17600：三張部落格卡（直向堆疊），「AWARDS & RECOGNIZATIONS」 |
| S-m09 | E3 | 360 y=19800–21171：上半黑，下方「EVERY GREAT STORY NEEDS A POWERFUL ENDING.」與荊棘圈 |
| S-m02–m05、S-m08 | E3 | 幾乎全黑（X-03） |

### 2.2 Playwright 截圖（S-pw）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-pw1440-load-00 | E3 | 第一次造訪、導覽後 5ms 請求：整面 #990000 紅（P-05） |
| S-pw1440-load-01 | E3 | 3100ms 請求（實際成像時間較晚，見 X-04）：紅底帶細顆粒雜訊，中央超大黑色草寫數字「054」，下方黑色小字「CLICK ANYWHERE TO ACTIVATE THE EXPERIENCE」 |
| S-pw1440-rm-load-00 | E3 | reduced motion，導覽後 3ms：同樣整面 #990000 紅 |
| S-pw1440-hero | E3 | 1440 穩定首屏：人像全亮、背景右上 #D50407 紅漸層到左下黑；白色超大字「AYS GOING TO B…」從人像後方穿過（人像在字前面，字被臉遮住）；紅色金屬面具；右上兩欄小字導覽（HOME…CONTACT US／TIKTOK、INSTAGRAM、BEHANCE）；左上 logo；左 13px 段落；右下 Let's Connect 框（138×42，1px 半透明白框）；左下紅色細直線；底部 + TENSION + IMMERSION + IMPACT + |
| S-pw1440-sec00 | E3 | scrollY 0：同首屏，跑馬燈位置不同（「S GO…TO B」） |
| S-pw1440-sec01 | E3 | scrollY 900：黑底，紅色「TH_S WILL」「DI_FERE_T」部分字母較暗或缺（逐字顯現中），中間草寫「FEEL」；紅色面具圖形疊在字上 |
| S-pw1440-sec02 | E3 | 1800：紅字段落逐詞散布在畫面不同位置（「DON'T JUST BUILD WEBSITES」「THE SMALLEST」「SMOOTH, MEMORABLE」…），面具在中，下緣紅色火焰 |
| S-pw1440-sec03–04 | E3 | 2700–3600：紅底 #990000，黑色草寫「10+」「25+」、右側黑色大寫說明；細橫線分隔；火焰把紅底切回黑；右下紅色小字段落 |
| S-pw1440-sec05–11 | E3 | 4500–9900：服務段被釘住（同一個暗紅幾何線條構圖連續 7 屏），中央草寫「LEGACY」→「UI-UX」→「3D WEB」依序替換，中央小方形圖片也跟著換（紅色調處理的人像、電視、雕像）；右側紅字清單逐行出現 |
| S-pw1440-sec12 | E3 | 10800：上下撕紙邊緣框住紅色帶，中間墜落人物剪影 |
| S-pw1440-sec13–18 | E3 | 11700–16200：作品段被釘住：左側白色大標（CODENARTS、AZ-DIGITAL-VENTURES、AMRON、CHATONE、FINANCE），中央大圖，上下各一張小縮圖（前一個／下一個作品），右側說明小字與圓圈編號 01–05；背景是當前作品圖的放大模糊版 |
| S-pw1440-sec19–22 | E3 | 17100–19800：黑底中央垂直紅色光柱；只有紅字「From」可見（其餘逐字顯現中）；光柱下人物剪影與大面具；sec22 底部出現部落格卡片頂端 |
| S-pw1440-sec23 | E3 | 20700：三張部落格卡橫排，灰階圖片、紅色標題、灰色日期 |
| S-pw1440-sec24 | E3 | 21600：紅色草寫「AWARDS &」＋無襯線「RECOGNIZATIONS」，被一個 3D 場景的直立板塊切開 |
| S-pw1440-sec25–28 | E3 | 22500–25200：WebGL 3D 場景：紅色低多邊形地面、直立的 Awwwards 證書板（Honors Aug 19 2026、Developer Award、Site of the Day Sep 26 2026），相機隨捲動移動 |
| S-pw1440-sec29 | E3 | 26100：紅字「EVERY GREAT STORY NEEDS A POWE…」被遮罩切一半（升起中），荊棘圈 |
| S-pw1440-sec30 | E3 | 27000：底部紅色草寫跑馬燈「…IS WAY. IT WA…」（同一句 It Was Always Going to Be This Way. 改用草寫）、紅色漸層；右緣 Awwwards 徽章 |
| S-pw768-hero | E3 | 768 首屏：人像佔上半，跑馬燈字較小；段落與職稱移到人像下方左右並排；漢堡選單取代兩欄導覽；Let's Connect 框放大（294×79） |
| S-pw768-sec12、sec14 | E3 | 768 作品：標題疊在圖片中央、編號圓圈在圖片下緣中央，上下仍有縮圖 |
| S-pw768-sec17 | E3 | 768 流程：白字標題與段落、草寫步驟名「Discovery」直接可讀（不是逐字顯現中的狀態） |
| S-pw768-sec22、sec24 | E3 | 768 3D 獎項場景，同桌機 |
| S-pw390-hero | E3 | 390 首屏：同 768 的重排，段落在人像下方左，職稱右；Let's Connect 150×54 |
| S-pw390-sec01–03 | E3 | 390：「THIS WILL FEEL DIFFERENT」、散布的紅字、紅底數字段、LEGACY |
| S-pw390-sec04–09 | E3 | 390 服務段釘住：幾何線條框＋草寫 LEGACY／UI-UX／3D WEB＋右下紅字清單 |
| S-pw390-sec11–16 | E3 | 390 作品：一張圖一屏，標題與一句說明疊在圖上，編號圓圈 |
| S-pw390-sec17–18 | E3 | 390 流程：大段白字可讀，草寫步驟名＋段落左右交錯 |
| S-pw390-sec19–20 | E3 | 390 部落格：卡片直向堆疊 |
| S-pw390-sec21–24 | E3 | 390 3D 獎項場景，證書板佔畫面大部分 |
| S-pw390-sec26 | E3 | 390 結尾「EVERY GREAT STORY NEEDS A POWERFUL ENDING.」＋荊棘圈 |
| S-pw1440-hover-cta | E3 | 滑鼠移到 Let's Connect：框變紅底、字變深色，紅色自訂游標箭頭出現 |
| S-pw1440-focus-tab3 | E3 | 按 3 次 Tab：畫面上看不到任何焦點指示 |
| S-pw390-menu-open | E3 | 390 點漢堡後約 4 秒（慢環境）：整個畫面被紅色覆蓋，看不到選單文字 |
| S-pw390-menu-close | E3 | 再點一次後：紅色收回，但頁面停在結尾段（scrollY 改變，原因見 X-08） |

### 2.3 像素取樣（P-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | tablet.png (700,1600) = #000000，主背景 |
| P-02 | E3 | tablet.png (384,2400) = #990000，數字段紅底；tablet.png (300–500, 2300–2500) 區域主色 #990000 |
| P-03 | E3 | tablet.png「THIS WILL」「DIFFERENT」字面主色 (214,4,7) = #D60407 |
| P-04 | E3 | fc-viewport-wait5s.png 面具區最亮紅 #FF1F1F 附近（金屬高光） |
| P-05 | E3 | d1440-load-00.png 全畫面 #990000；rm1440-load-00.png (10,10)、(720,450) 皆 #990000 |
| P-06 | E3 | d1440-hero.png 右上 (1435,5) = #D50407，左上 (5,5) = #280101，左下 = #000000（首屏紅黑對角漸層） |
| P-07 | E3 | tablet.png 部落格標題主色 #990000 |
| P-08 | E3 | tablet.png (50,27900) = #660203，頁尾紅色漸層 |

### 2.4 Branding（B-，E4）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colors | E4 | primary #990000、secondary #CF0808、accent／link #D60407、background #000000、textPrimary #F5F5F5；colorScheme dark |
| B-typography | E4 | 字族「Ruthie」（display），fontStacks 全是 `regular-font`；fontSizes h1 79.9968px、h2 207.992px、body 79.9968px（body 數值明顯不合理） |
| B-spacing | E4 | baseUnit 4、borderRadius 100px |
| B-components | E4 | buttonPrimary：透明底、#F5F5F5 字、#F3F3F3 框、圓角 479.981px；input：透明底、無框、圓角 0 |

### 2.5 Computed style 與 CSS（C-，E1；寬度註明）

| ID | 等級 | 內容 |
| --- | --- | --- |
| C-html-rem | E1 | `html{font-size:.8333vw}`（CSS 唯一的 html 字級規則）；body 字級 1440 = 11.9995px、768 = 6.39974px、390 = 3.24987px（stable-*.json） |
| C-fonts | E1 | `document.fonts`：light-font（Stack Sans Headline ExtraLight）、regular-font（Stack Sans Headline Regular）、ruthie，三者皆 loaded（1440） |
| C-root-vars | E1 | `:root` 沒有任何 CSS 變數（1440，stable-d1440.json `rootVars: {}`） |
| C-marquee | E1 | 1440 `.scrolling-text .rail h4`：light-font 227.991px／500／line-height 227.991px，uppercase，#FFFFFF，寬 4000px；390：113.745px |
| C-cinematic | E1 | 1440 `h1.cinematic-title`「This Will Feel Different」：light-font 191.992px／700／line-height 153.594px，rgb(214,4,7)；768：140.794px；390：71.4971px |
| C-numbers | E1 | 1440 `.numbers-facts`：ruthie 119.995px／100，黑色；`.para-facts`：regular-font 23.999px／200，uppercase，黑色；390：64.9974px／16.2493px |
| C-process | E1 | 1440 流程步驟 h1（Discovery…）：ruthie 71.9971px／100／line-height 86.3966px，rgb(153,0,0)，左右交錯 x=72／936；「From the First Idea…」light-font 59.9976px／200，rgb(153,0,0)；390：步驟 34.1236px，交錯 x=17／91 |
| C-awards-h2 | E1 | 1440 `AWARDS & RECOGNIZATIONS`：regular-font 155.994px／100／line-height 132.595px，rgb(153,0,0)；390：42.2483px |
| C-cta-title | E1 | 1440 結尾 h1：regular-font 89.9964px／100，rgb(228,224,224)；390：48.7481px |
| C-hero-para | E1 | 1440 `.para-introduce-hero`：light-font 13.1995px／400，line-height 15.8394px，letter-spacing 0.264px，#F5F5F5，寬 303px；768：21.1192px，寬 416px；390：10.7246px，寬 211px |
| C-nav | E1 | 1440 `.active-animate`（頂部導覽連結）：light-font 14.3994px／200，#F5F5F5，`transition: 0.3s`；768 與 390 寬度為 0（隱藏）；`.menu-2-bar` 1440 寬 0（隱藏），768／390 為 82×82 |
| C-menu-link | E1 | `.menu-navigate-scroll a`（全螢幕選單項目）：regular-font 131.995px（1440 計算值）／100 |
| C-cta | E1 | 1440 `.cta-connect`：138×42，`border: 1px solid rgba(230,225,225,0.486)`，透明底，圓角 0，`transition: 2s cubic-bezier(0.075,0.82,0.165,1)`，`cursor: none`；hover 後 background rgba(207,8,8,0.92)、color rgb(19,19,19)、transform translate(5.8px,1.9px)（interact-i1440.json） |
| C-submit | E1 | `.cta-submit`：ruthie 14.3994px，uppercase，透明底、1px #F3F3F3 框、圓角 359.986px（100×100 圓形），`transition: border-color 0.35s`；表單 input：light-font，uppercase，無框 |
| C-sections | E1 | 1440 區塊 top：home 0、about 900、services 4317、services-project（釘住）4635、work 11745、blog 20342、contact（結尾 CTA）26372、footer 27272；scrollHeight 28172。768：28262；390：23294 |
| C-focus | E1 | 1440 與 390 按 Tab：前 5 次焦點進入隱藏的聯絡表單（3 個 input、textarea、Submit），`outline-style: none`、無 box-shadow；第 6 次才到可見連結（1440：HOME，`outline: auto 1px`）（interact-*.json） |
| C-rm | E1 | `reducedMotion: 'reduce'` 下 `matchMedia('(prefers-reduced-motion: reduce)')` 為 true，預載照常顯示、計數照常進行、Lenis 照常鎖定（load-rm1440.json） |

### 2.6 原始碼與 HTML（H-，E2；細節見 source/js-excerpts.md）

| ID | 等級 | 內容 |
| --- | --- | --- |
| H-meta | E2 | title「Meer Mohsin \| Front-End Developer, UI/UX Designer & 3D Web Developer」；theme-color #0D0D0D；og:description「Crafting immersive and cinematic digital experiences using Three.js, GSAP, WebGL…」 |
| H-js-firstvisit | E2 | 預載只在非重新整理、且 sessionStorage 沒有 loaderPlayed 時播放 |
| H-js-preloader | E2 | 設定值：計數 000→100 3.5s power2.inOut；之後數字淡出 1.45s、2.85s、0.5s；WebGL 轉場 setTimeout 2.9s 後開始、3s power2.inOut，完成即移除預載 |
| H-js-herodelay | E2 | 設定值：第一次造訪首屏內容 delay 8.5s（底部列逐字、頂部導覽逐字、段落、跑馬燈升起、選單鈕）、9s（臉 3.5s 由暗轉亮、CTA）；重新整理 delay 0.1s |
| H-js-marquee | E2 | 跑馬燈是無縫水平循環；每次捲動速度 0.2s 內升到 6.25 倍、再用 1s 降回，往上捲時倒轉 |
| H-css-live | E2 | ONLINE 紅點是 CSS `liveBlink` 1.5s 無限閃爍（#0c0c0c↔#ff2b2b），JS 沒有狀態邏輯 |
| H-html-bar | E2 | 底部 TENSION／IMMERSION／IMPACT 是 `.fixed-bar-ledger` 裡的 `<p>`，不是連結；「+」是 `.plus-rotate` 圖片，捲動時依位移量×0.3 旋轉 |
| H-js-lenis | E2 | Lenis duration 1.2；第一次造訪鎖捲動 6s；錨點捲動桌機 2.5s／手機 1.5s，easeOutQuart |
| H-js-sound | E2 | 第一次點擊任意處播放背景音樂（1.5s 漸大到 0.5）；左下 40 條 bar 波形是音樂開關 |
| H-js-menu | E2 | 漢堡選單：5 條紅色 bar 依序 scaleX 0→1（0.8s，stagger 0.06，power4.inOut），完成後線條轉成 X、文字逐行升起並去模糊（0.8s，stagger 0.03） |
| H-js-cta | E2 | Let's Connect：磁吸跟隨（0.4s）、離開 elastic 回彈（0.8s）、往下捲超過 100px 滑出畫面、往上捲回來；點擊開 wa.me |
| H-js-navhide | E2 | 頂部導覽往下捲時逐字藏起（0.35s），停 3 秒或往上捲回來 |
| H-js-pins | E2 | 服務段 pin `+=690%` scrub 0.7；作品段 pin scrub 0.15；獎項 3D 場景 pin `innerHeight*4.5` scrub 0.4 |
| H-js-logo | E2 | 3D logo 每 8s 自轉一圈，hover 加速 6 倍 |
| H-js-contact | E2 | CONTACT 開啟聯絡面板（clipPath 由下往上 1.2s），送到 web3forms，失敗用 alert() |
| H-css-fonts | E2 | 三個 @font-face：light-font、regular-font（Stack Sans Headline）、ruthie |
| H-css-mq | E2 | `@media (max-width: 800px)` 131 次，另有 768／700／720 少量規則；一條拼錯的 `max-wdth` |
| H-css-transition | E2 | CSS transition 設定值：最多是 `.3s ease`、`.5s ease`、`.45s cubic-bezier(.23,1,.32,1)` |
| H-css-radius | E2 | border-radius 多為 50rem 等「藥丸／圓形」值，另有 .5rem、1px 各一次 |
| H-rm | E2 | JS 與 CSS 都沒有 `prefers-reduced-motion` |
| H-html-modals | E2 | HTML 內預先放好聯絡表單、部落格側欄（`modal-blogs`）、全螢幕選單；部落格側欄與 gallery 區塊是「lorem ipsum」佔位文字（M-L16–18、M-L62–63） |
| H-assets | E2 | 素材檔名：fire-*.gif（火焰）、paper-tore-*.png（撕紙）、falling-*.gif（墜落人物）、mohsin-standing-*.avif、shade-*.webp、ring-*.avif（荊棘圈）、SERVICES-1…8 |

### 2.7 頁面文字（M-，E2，source/page.md 行號）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L4–5 | E2 | ONLINE / Let's Connect |
| M-L6 | E2 | 導覽：HOME、ABOUT、SERVICES、WORK、BLOG、CONTACT（皆為 # 錨點） |
| M-L7–10 | E2 | MY E-MAIL（mailto，預填主旨與內文）、SOCIAL：INSTAGRAM、BEHANCE、TIKTOK |
| M-L11 | E2 | GET IN TOUCH（聯絡面板標題） |
| M-L14–15 | E2 | CLICK ANYWHERE TO ACTIVATE THE EXPERIENCE／000 |
| M-L16–18 | E2 | lorem ipsum／LOREM IPSUM／Lorem ipsum…（部落格側欄佔位） |
| M-L22–24 | E2 | TENSION、IMMERSION、IMPACT |
| M-L26–28 | E2 | VISUAL STORYTELLER UI/UX DESIGNER 3D WEB DEVELOPER；「I create digital experiences that aren't just seen they're felt…」 |
| M-L31–32 | E2 | It Was Always Going to Be This Way.（兩份，跑馬燈） |
| M-L33–34 | E2 | This Will Feel Different；「I don't just build websites I create experiences…」 |
| M-L36–41 | E2 | 10+／25+／6+ 與三句說明（沒有寫是什麼的數量） |
| M-L43 | E2 | Design attracts attention. Development brings it to life… |
| M-L45–55 | E2 | UI-UX、3DWEB、LEGACY 與技能清單 |
| M-L56–57 | E2 | The fall was always part of the path. / And from that point, everything began to rebuild with intention. |
| M-L62–63 | E2 | gallery 區塊的 lorem ipsum 佔位 |
| M-L70–71 | E2 | My work／Scroll down for more |
| M-L73–82 | E2 | 四個流程步驟：Discovery、Creative Direction、Digital Craftsmanship、Launch & Evolution（拼字 "viual" 為原文） |
| M-L83 | E2 | From the First Idea to the Final Frame Every Step Is Crafted to Create an Unforgettable Digital Experience. |
| M-L84–94 | E2 | VISUAL JOURNAL 與三篇文章（2026-07-01、06-14、05-22） |
| M-L95–99 | E2 | AWARDS & RECOGNIZATIONS（出現兩次）與說明句（也出現兩次） |
| M-L100–102 | E2 | Every Great Story Needs A Powerful Ending.／LET'S BE CREATIVE |

### 2.8 互動與時間序列（I-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E1 | 第一次造訪（navType navigate）：預載可見（visibility visible、display flex），計數從 000 開始，`html.lenis-stopped`；重新整理（navType reload）：預載 `display:none`、沒有 lenis-stopped（interact-i1440.json、interact-i390.json） |
| I-02 | E1（只有順序可信） | 1440 第一次造訪量到的順序與牆鐘時間（stable-d1440.json，見 X-04）：計數 009（1.9s）→ 063 且 Lenis 解鎖（≤15.6s）→ 100（39s）→ 預載從 DOM 移除（45.7s）→ 臉部開始由暗轉亮（≈190s）→ 臉部到 identity、brightness(1)（222s）。另一次無截圖量測：Lenis 在 9.5s 解鎖時計數才 069（load-d1440-noshots.json） |
| I-03 | E1 | 臉部進場是連續的 scale 0.9→1、translateY 49.5→0、brightness 0→1（stable-d1440.json 中 13 個中間值） |
| I-04 | E1 | hover Let's Connect：底色變 rgba(207,8,8,0.92)、字變深、元素朝游標位移 5.8px／1.9px，出現自訂紅色游標（S-pw1440-hover-cta, C-cta） |
| I-05 | E1 | 第一次點擊畫面：`.sound-wave` class 由 off 變 on（interact-*.json） |
| I-06 | E1（狀態可信、時序不可信） | 390 點漢堡：`.navigation-menu` visibility hidden→visible，畫面全紅（S-pw390-menu-open）；再點：visibility→hidden（S-pw390-menu-close） |
| I-07 | E3 | Firecrawl 1920 在 waitFor 5s 時拍到進場中途（WORK、IMPACT 字母升起一半、臉部仍暗），Playwright 穩定首屏全亮（S-d-vp vs S-pw1440-hero） |
| I-08 | E3 | 服務段在 1440 連續 7 屏（sec05–11）構圖相同、只換中心字與圖，作品段連續 6 屏（sec13–18）同構圖換作品，3D 獎項場景 4 屏（sec25–28）——對應 H-js-pins 的釘選 |
| I-09 | E3 | 多處截圖拍到「逐字／逐詞顯現中」：S-pw1440-sec01（THIS WILL 缺字）、sec19（只有 From）、sec29（標題被遮罩切半）、S-t08（文字漸灰） |
| I-10 | E1 | reduced motion 下預載、計數、捲動鎖照常（C-rm、S-pw1440-rm-load-00） |
| I-11 | E3 | 底部 TENSION／IMMERSION／IMPACT 列、左上 logo、左下紅色音樂波形在 1440、768、390 的每一張逐屏截圖都在同一位置；桌機右上導覽也都在，但部分截圖中字被切半（S-pw1440-sec09、sec13，逐字藏起中）。右下 Let's Connect **只出現在 scrollY 0 的截圖**（S-pw1440-hero／sec00、S-pw768-hero、S-pw390-hero），往下的逐屏截圖都沒有它（對應 H-js-cta 的往下捲滑出）。列中的「+」在不同捲動位置呈現不同旋轉角度（S-pw768-sec01 為 ×，S-pw768-hero 為 +；S-pw390-sec03 為 ×），logo 每張角度不同（S-pw1440-sec00 正面、S-pw1440-sec16 側面窄條） |

### 2.9 缺口（X-）

| ID | 內容 |
| --- | --- |
| X-01 | Firecrawl 1920 全頁截圖 3 次逾時，沒有 desktop.png 與 S-d 切圖；桌機全頁以 Playwright 1440 逐屏截圖（S-pw1440-sec00–30）代替，兩者寬度不同 |
| X-02 | tablet.png 空白：y=3392–4096、10240–11828、12288–17656、20884–21328、21504–26500、27100–27500（`blank` 輸出）。原因：釘選段（pin）與捲動觸發內容在整頁截圖時沒有被捲到；以 S-pw768-sec* 補上 |
| X-03 | mobile.png 空白：y=0–712（首屏）、2828–9240、9600–13784、16320–16688、16800–20840。首屏空白的原因未確認（[H] 預載剛結束或臉部 brightness(0) 尚未亮起）；以 S-pw390-* 補上 |
| X-04 | 量測環境過慢：軟體 WebGL，1440 寬約 0.5 fps、390 寬約 2 fps（fps.js 測試）；連拍原定每 100ms，實際每張截圖要數秒，`msSinceGoto` 是「請求時間」不是「成像時間」（S-pw1440-load-01 請求於 3.1s，畫面上的 054 在無截圖量測中約 10s 才出現）。因此所有實測時長都不能代表一般裝置 |
| X-05 | Firecrawl 1920 首屏（進場中途）與 Playwright 1440 首屏（穩定）時間點不同、寬度不同，不能互相比較字級或位置 |
| X-06 | 沒有拍到桌機全螢幕選單與漢堡選單的完整開啟狀態（1440 沒有可見的漢堡；390 只拍到紅色 bar 蓋滿的中途畫面） |
| X-07 | 沒有開啟聯絡表單面板、部落格側欄、作品的 case-study 側欄；表單送出成功／失敗狀態無法觀察（不送出真實表單） |
| X-08 | S-pw390-menu-close 頁面跑到結尾段的原因未確認；[H] 第 6 次 Tab 焦點落在 y=1457 的連結造成原生捲動 |
| X-09 | 背景音樂內容、音量體驗無法在 headless 觀察，只知道開關狀態（I-05） |
| X-10 | 頂部導覽 hover 狀態沒有拍到（Playwright hover 步驟沒有找到 `.active-animate a`，連結本身就是 `.active-animate`） |
