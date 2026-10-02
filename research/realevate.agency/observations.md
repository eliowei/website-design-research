# Realevate 觀察紀錄

- **網址**：https://realevate.agency/
- **研究日期**：2026-10-01
- **研究頁面**：首頁（包含首頁內可直接開啟的兩個覆蓋層：「Our Selection」分類選單與漢堡選單；不研究 /about、/contact 與四個分類頁本身）
- **擷取方式**：Firecrawl（三個寬度皆 `maxAge: 0`）＋ Playwright（Chromium，網站可直連：`curl -sI` 回 HTTP/2 200，Netlify＋Cloudflare）。CSS／JS 以 curl 下載後摘錄到 `source/pw/code-excerpts.txt`

## 0. 網站背景（Context）

- **網站是誰**：Realevate，自稱「global real estate agency」，經營賽普勒斯、蒙特內哥羅、喬治亞三地的房地產（meta description，見 `source/branding.json` metadata；M-L29）。
- **Awwwards 背景**：任務說明提供：2026-09-27 Awwwards Site of the Day，標籤 Real Estate、Animation、Fullscreen、Menu - Horizontal、Microinteractions，技術 GSAP。本研究沒有另外打開 Awwwards 頁面核對（X-08）；GSAP 由 H-html-scripts 獨立證實。
- **頁面任務**：首頁沒有長內容，只有一句定位（H1）、一個價格門檻、兩個動作：「Our Selection」（打開四個物件分類）與漢堡選單（Home／About／Contact＋WhatsApp／Email）（M-L29、M-L31、M-L33、C-selection-btn、I-11、I-13）。
- **目標使用者**：[O] 文案寫「Invest in Exceptional Real Estate Properties」與「Starting from 100,000€」（M-L29、M-L31）；[H] 對象是有投資或第二住所需求、預算 10 萬歐元以上的海外買家（meta description 提到 investment、vacation homes、wellness living）。
- **研究重點**：使用者只說「找一個 Awwwards 網站分析看看」，沒指定面向；因為得獎標籤偏重動畫、全螢幕與微互動，動態與互動用 Playwright 補足 E1 證據。

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×1080 | 2026-10-01，maxAge 0 | Firecrawl fullPage，但頁面只有一屏；拍到**進場動畫中途**（頂部藍色幕、標語被遮罩切半），見 X-01 |
| screenshots/tablet.png | 768 | 768×1024 | 同上 | Firecrawl；拍到**預載畫面**（藍底、計數 55），見 X-01 |
| screenshots/mobile.png | 360 | 360×800 | 同上 | Firecrawl `mobile: true`；拍到**預載畫面**（計數 42），見 X-01 |
| source/page.md | — | — | 同上 | Firecrawl markdown（33 行），不含導覽連結 |
| source/branding.json | — | — | 同上 | Firecrawl branding＋metadata（完整保留） |
| source/links.json | — | — | 同上 | 只有 WhatsApp、Email 兩個連結，見 X-02 |
| screenshots/pw/load-1440-00…59.png | 1440 | 1440×900 | Playwright，自 `commit` 後 300ms 起連拍 | 實際間隔約 210ms／張（截圖本身耗時），共 60 張約 12.5 秒 |
| screenshots/pw/final-1440.png | 1440 | 1440×900 | Playwright | 進場結束後的穩定狀態 |
| screenshots/pw/hover-*.png、focus-tab*.png | 1440 | 裁切 | Playwright | hover 0／300／900ms；Tab 1–4 |
| screenshots/pw/wheel-00…15.png、wheel-final.png | 1440 | 1440×900 | Playwright | 滾輪 deltaY=400 之後連拍 |
| screenshots/pw/click-selection-*.png、click-menu-*.png | 1440 | 1440×900 | Playwright | 點擊後每 100ms（實際約 230ms）連拍 16 張＋最終 |
| screenshots/pw/selection-hover-card1.png、menu-after-escape.png、selection-click-preview.png | 1440 | 1440×900 | Playwright | 卡片 hover、Esc 關選單、點底部縮小首頁返回 |
| screenshots/pw/rm-1440-*.png | 1440 | 1440×900 | Playwright `reducedMotion: 'reduce'` | 等待 30 秒以上 |
| screenshots/pw/tablet-768-*.png | 768 | 768×1024 | Playwright，isMobile＋hasTouch | 最終、選單 |
| screenshots/pw/mobile-390-*.png | 390 | 780×1688（DPR 2） | Playwright，isMobile＋hasTouch | 最終、選單、Our Selection、上滑手勢 |
| screenshots/pw/mobile-844x390-landscape-*.png | 844 | 844×390 | Playwright | 手機橫放 |
| source/pw/desktop-1440.json | 1440 | — | Playwright | computed style、CSS 變數、marquee 速度、hover／focus 序列、滾輪 |
| source/pw/overlays-1440.json | 1440 | — | Playwright | 選單與分類覆蓋層的文字樣式、連結 |
| source/pw/responsive.json | 768／390／844 橫／1440 RM | — | Playwright | 各寬度關鍵元素尺寸、減少動態結果 |
| source/pw/code-excerpts.txt | — | — | curl | CSS／JS／HTML 摘錄，`H-` 證據的出處 |

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 截圖（S-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | Firecrawl 1920，y=0–1080：頂部 y=0–59 一條深藍色帶；About（左上）、REALEVATE 字標上半被切掉、Contact 文字下移被切；中段「Elevating Life」巨字只露出上半（y≈525–615 以下被截掉）；右下「Our Selection ::」外框按鈕＋深藍方塊選單鈕；其餘全白 |
| S-t00 | E3 | Firecrawl 768，y=0–1024：全畫面深藍，中央一張約 236px 的方形照片（球場鳥瞰，照片內再疊一張小照片），底部中央白色數字「55」 |
| S-m00 | E3 | Firecrawl 360，y=0–800：與 S-t00 同構，中央方形照片、底部數字「42」 |
| S-p1440 | E3 | Playwright 1440 穩定狀態（final-1440.png）：三角構圖——上排左 About、中 REALEVATE 字標、右 Contact；中間一行約 218px 的「Elevating Life」巨字橫貫全寬，正中疊一張 273×273 方形照片（女子在石造陽台看海）；下方置中兩行 H1 與外框標籤「STARTING FROM 100,000€」；底排左「Realevate® 2026」、右「Our Selection ::」＋深藍選單方塊。背景全白、文字全為同一深藍 |
| S-p1440-load | E3 | load-1440-00…23：00–03 全藍；04 起中央出現小方形照片＋底部計數（27→42→68→92→99→77）；照片在約 5 張圖之間切換並逐步放大；19–20 藍色幕由下往上收起露出白底；21–23 巨字從遮罩下方升起、H1／標籤／按鈕陸續出現；24 之後巨字持續向左移動 |
| S-p1440-sel | E3 | wheel-final.png／click-selection-final.png：背景淺灰；上方四張等寬直立卡片（深藍、深綠、深紫、近黑），每張左上白色「R」符號、左下兩行白色說明、右側直排白色大標（By The Sea／Evergreen／Urban Living／Rare Gems）、下方約 180px 高的照片；下方中央是縮小的首頁（About、字標、Contact、巨字仍在跑） |
| S-p1440-sel-seq | E3 | wheel-00…04：首頁先整頁縮小並往下沉，四張卡片由上方錯落落下（02 時高度不一），約第 4 張（約 1 秒內）排齊 |
| S-p1440-menu | E3 | click-menu-final.png：整頁蓋上一層灰藍；右下出現 314×326 深藍方塊（由選單鈕位置向上向左展開），內有三行白色襯線大字 Home／About／Contact，底部 WhatsApp、Email 兩個帶圖示的小字連結，右下一條短橫線 |
| S-p1440-menu-seq | E3 | click-menu-00…04：00 按鈕被按下；01 灰藍罩出現、深藍方塊已在右下但還沒有文字；02 方塊變大、文字逐行從下方遮罩升起（第三行 Contact 只露一半）；03 後穩定 |
| S-p1440-hover | E3 | hover-selection：0ms 白底外框；300ms 深藍從左往右填滿約 90%；900ms 全深藍、字轉白。hover-about：0ms 無底線，900ms 出現與文字等寬的 1px 底線。hover-menu：兩條橫線長短互換（上長下短 → 上短下長） |
| S-p1440-focus | E3 | focus-tab1（字標）：無可見焦點框；focus-tab2（About）：出現 1px 底線；focus-tab4（Our Selection）：外觀與未聚焦相同 |
| S-p1440-cardhover | E3 | selection-hover-card1.png：第一張卡片（By The Sea）照片比 wheel-final 略放大、略亮；其他三張不變 |
| S-rm1440 | E3 | rm-1440-final.png（減少動態，等待 >30 秒）：只看得到 About、字標、Contact、中央方形照片、左下 Realevate® 2026、右下深藍選單方塊；**沒有**巨字、H1、價格標籤、Our Selection 按鈕；全程沒有藍色預載畫面（rm-1440-load-00 是白畫面） |
| S-p768 | E3 | tablet-768-final.png：與 1440 同一構圖（About／字標／Contact 一排、巨字＋方圖、H1 置中、右下 CTA 組、左下版權），全部等比例縮小 |
| S-p768-menu | E3 | tablet-768-menu.png：同 1440，右下深藍方塊 Home／About／Contact |
| S-p390 | E3 | mobile-390-final.png：上方只剩置中字標（About、Contact 消失）；巨字＋方圖；H1 三行置中；價格標籤；Our Selection＋選單方塊**置中**；最底置中「Realevate® 2026」 |
| S-p390-menu | E3 | mobile-390-menu.png：深藍方塊置中、寬度幾乎滿版，蓋住 H1；Home／About／Contact 襯線字；WhatsApp／Email |
| S-p390-sel | E3 | mobile-390-selection.png：四張分類卡改為**橫向長條**（左色塊＋水平大標＋說明，右側照片），上下堆疊；最下方露出縮小首頁的字標 |
| S-p390-swipe | E3 | mobile-390-swipe.png：在首頁做一次上滑手勢後，畫面與 S-p390-sel 相同 |
| S-p844L | E3 | mobile-844x390-landscape-final.png：全畫面深藍，置中白字「Please rotate your device」 |

### 像素取樣（P-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | final-1440 (20,20) = #FFFFFF，首頁背景 |
| P-02 | E3 | final-1440 (1350,815) = #1F2B5E，選單方塊 |
| P-03 | E3 | load-1440-02 (720,450) = #1F2B5E，預載畫面底色 |
| P-04 | E3 | desktop.png (960,20) = #1F2B5E，Firecrawl 1920 頂部色帶 |
| P-05 | E3 | wheel-final (20,20) = #E3E5EB，分類覆蓋層背景 |
| P-06 | E3 | wheel-final (200,200) = #222A4C，By The Sea 卡片 |
| P-07 | E3 | wheel-final (550,200) = #36614D，Evergreen 卡片 |
| P-08 | E3 | wheel-final (900,200) = #2D1C2D，Urban Living 卡片 |
| P-09 | E3 | wheel-final (1220,200) = #1C181D，Rare Gems 卡片 |
| P-10 | E3 | click-menu-final (20,20) = #AEB3C5，選單開啟時的頁面遮罩 |
| P-11 | E3 | click-menu-final (1200,560) = #1F2B5E，選單面板 |

### Branding（B-，Firecrawl 1920 自動萃取）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colors.primary | E4 | #1F2B5E（另 secondary #38416A、accent／link #1C2755） |
| B-colors.textPrimary | E4 | #000000（與 C-body 的 rgb(31,43,94) 衝突） |
| B-colors.background | E4 | #FFFFFF；colorScheme light |
| B-fonts | E4 | Google Sans（body）、Roslindale Display（heading）、Monument Extended（display）、Arial、Georgia |
| B-typography.fontSizes | E4 | h1／h2 33.33px、body 23.04px（1920 寬；與 C-h1 的比例見 report） |
| B-spacing | E4 | baseUnit 4、borderRadius 0px |
| B-meta.theme-color | E4 | #000000 |

### Computed style 與 CSS 變數（C-，Playwright，未註明者為 1440×900）

| ID | 等級 | 內容 |
| --- | --- | --- |
| C-body | E1 | Google Sans 16.37px／500，letter-spacing −0.16px，color rgb(31,43,94)，背景 #FFF，`overflow: hidden`；scrollHeight = 900（=視窗高，頁面不捲動） |
| C-marquee | E1 | `.marquee-text`「Elevating Life」×5：Google Sans 218.27px／500，line-height 1，letter-spacing −4.37px（−0.02em），寬 1314px |
| C-h1 | E1 | H1「Invest in…Georgia.」：Google Sans 23.68px／500，line-height 30.79px（1.3），置中，寬 477.5px，分成兩行 `.split-line` |
| C-price-tag | E1 | `.hero-content p`「Starting from 100,000€」：Monument Extended 13.03px／500，uppercase，letter-spacing 1.04px（0.08em），padding 6.5/13/5.2px，外框以 linear-gradient 背景畫成 |
| C-nav-links | E1 | About／Contact：Google Sans 17.05px／500，#1F2B5E；About 左 x=61.4、Contact 右緣 x=1378.6 |
| C-logo | E1 | 字標 SVG 寬 272.8px（x=583.6–856.4），與 C-hero-visual 同寬同 x |
| C-hero-visual | E1 | 方形照片 272.8×272.8，x=583.6，y=232.6；transform none，滑鼠移動前後位置不變 |
| C-selection-btn | E1 | `.our-selection-btn`：185.4×45.8，1px #1F2B5E 外框、圓角 0、文字 #1F2B5E 17.05px；背景為 `linear-gradient(90deg, #1F2B5E 50%, transparent 50%)`、size 200%，`transition: background-position .75s cubic-bezier(.7,.6,0,1), color .75s …` |
| C-menu-btn | E1 | `.menu-btn`：51.3×45.8，背景 #1F2B5E，圖示白色，aria-label「Open menu」 |
| C-footer | E1 | 「Realevate® 2026」17.05px，x=61.4，y=814.6 |
| C-underline | E1 | About `::after`：靜止 `scaleX(0)`，transform-origin 左，`transition: transform .65s cubic-bezier(.7,.6,0,1)` |
| C-var.color | E1 | `--brand-navy #1F2B5E`、`--muted #626C95`、`--white #FFFFFF`；分類色 `--category-by-the-sea-color #222A4C`、`evergreen #36614D`、`urban-living #2D1C2D`、`rare-gems #1C181D`（各有 `-muted` 版） |
| C-var.font | E1 | `--sans-font: "Google Sans"…`、`--display-font: "Roslindale Display", Georgia…` |
| C-var.easing | E1 | `--standard-easing` 與 `--cta-motion-easing` 都是 `cubic-bezier(.7,.6,0,1)`；`--overlay-duration .8s` |
| C-var.scale | E1 | `--h1-size: calc(16vw × layout-scale)`、`--lead-size 1.736vw`、`--text-size 1.2vw`、`--nav-footer-text-size 1.25vw`、`--logo-width 20vw`、`--hero-visual-width 20vw`；`--layout-size-scale = responsive-scale × min(1, 100svh/950px)` |
| C-var.grid | E1 | `--grid-columns 12`、`--grid-padding 4.5vw×scale`、`--grid-gap 2.601vw×scale`、`--body-leading 1.35` |
| C-menu-type | E1 | 選單內 WhatsApp／Email 13.64px Google Sans 白色；選單大字的字族來自 H-css-nav-menu-links（Playwright 沒有抓到該元素的 computed style，X-05） |
| C-card-type | E1 | 分類卡標題 44.2px Google Sans／500，`writing-mode: vertical-rl`，白色；說明 12.28px，line-height 16.58px |
| C-sel-links | E1 | 分類覆蓋層連結：/、/bythesea、/evergreen、/urbanliving、/raregems（第一個是縮小首頁「Homepage」） |
| C-768 | E1 | 768×1024：`--grid-columns 8`、`--responsive-size-scale 1.54`；巨字 189.2px、方圖 236.5px、H1 20.53px、About 可見、CTA 160.9×39.7 在右下（x=503） |
| C-390 | E1 | 390×844：`--grid-columns 4`、scale 2.25；About／Contact `display:none`；巨字 140.4px、方圖 175.5px（45vw）、H1 21.45px 三行、價格標籤 10.05px、CTA 186.1×42.5 從 x=74.7 起（置中）、版權置中 x=148 |
| C-844L | E1 | 844×390 橫放：`.rotate-phone-overlay` display grid、0,0,844,390 全覆蓋；底下頁面字級縮成 4–6px |
| C-rm | E1 | reducedMotion：33.8 秒後 body class 仍是 `spa-transition-scroll-locked`（從未出現 `is-ready`）；`.marquee-text`、H1、價格標籤、Our Selection 皆 `visibility:hidden`；`.site-preloader` 不存在於 DOM 查詢結果 |

### 原始碼與檔名（H-、M-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| H-html-scripts | E2 | 載入 gsap.min.js、scrolltrigger.min.js、splittext.min.js、slider-manifest.js、site-preloader.timing.js、realevate-app.js |
| H-html-links | E2 | HTML 內部連結：/about、/contact、/bythesea、/evergreen、/urbanliving、/raregems |
| H-html-preloader | E2 | `.site-preloader` 內有 `__bg--blue`、5 個 `__frame`（最後一個 `--final`）、`__counter` |
| H-js-preloader | E2 | site-preloader.timing.js：imageDelay .5、counterEnterDuration .85、counterExitDuration .95、exitRevealDelay .5、bgWipeDuration 1.2、bgWipeBezier [.73,.15,.15,.99]、morphDelay .1、morphDuration .8（秒） |
| H-js-hero-reveal | E2 | realevate-app.js：`{duration:.55, ease:"power2.out", yPercentHidden:50}`；逐一揭示的目標包含 `.hero-content h1, h3, p, .about-btn, .contact-btn, .site-footer > a…`，以及 `.hero-section .marquee-reveal` |
| H-js-wheel | E2 | realevate-app.js 設定 `{threshold:1100, thresholdMobile:900, wheelMaxDelta:64, followSmoothness:.1, …, exitScaleDurationMs:750}`；監聽 wheel、touchstart、touchmove（passive:false） |
| H-js-reduced | E2 | app.js 只有一個 `matchMedia("(prefers-reduced-motion: reduce)")` 判斷函式 |
| H-css-root | E2 | `:root` 以 `--desktop-*` vw 值定義整套字級（h1 16vw … text 1.2vw），再乘 `--responsive-size-scale`（桌機 1／平板 1.54／手機 2.25） |
| H-css-media | E2 | 斷點：`max-width:1024px`、`max-width:650px and (orientation:portrait)`（14 次）、`min-width:1025px and max-height:949px`、`max-height:650px and max-width:1024px and landscape`、`hover:hover`、`hover:none／pointer:coarse` |
| H-css-underline | E2 | `.link-underline:after` 1px 底線，`transition: transform .65s var(--standard-easing)`；About／Contact 在 hover 與 `:focus-visible` 時 scaleX(1) |
| H-css-selection-btn | E2 | `.our-selection-btn` 以 200% 寬的半色漸層背景＋`background-position` 100%→0 做填色 |
| H-css-menu-btn | E2 | `.menu-btn:focus, .menu-btn:focus-visible { outline:none }` |
| H-css-nav-menu-links | E2 | `.nav-menu__links a { font-family: var(--display-font); font-weight:300; line-height:1.08; font-size: var(--nav-menu-link-size) }` |
| H-css-selection-card | E2 | `.selection-card:hover { filter:brightness(1.08) }`；圖片 hover `scale(1.045)`＋`brightness(1.14) saturate(1.12)`；`--selection-hover-duration .8s`、`--selection-hover-easing cubic-bezier(.18,.13,0,.99)` |
| H-css-reduced-motion | E2 | 5 個 `prefers-reduced-motion` 區塊：關 will-change、底線與選單 transition 設 none、分類頁轉場 transition none、`.site-preloader { display:none !important }` |
| H-css-rotate | E2 | `.rotate-phone-overlay` 在 `max-height:650px and max-width:1024px and landscape` 時顯示，`html, body { overflow:hidden !important }` |
| H-css-hero-intro | E2 | 首頁未 ready 時方圖 `clip-path: inset(50% 50% 50% 50%); transform: scale(1.5)` |
| H-assets | E2 | 圖片皆 AVIF：`bythesea-card-cover`、`evergreen-card-cover`、`urban-living-card-cover`、`rare-gems-card-cover`、`hero-load-visual`（＋`-400w`）（M-L3–17） |
| M-L1 | E2 | 「Please rotate your device」 |
| M-L13 | E2 | 「0123456789」（M-L15 重複），預載計數用的數字帶 |
| M-L17 | E2 | 方圖 alt「Woman overlooking the Montenegro coast from a stone balcony」 |
| M-L19 | E2 | 「Elevating Life」（L19–27 共 5 次） |
| M-L29 | E2 | H1「Invest in Exceptional Real Estate Properties in Cyprus, Montenegro, and Georgia.」 |
| M-L31 | E2 | 「Starting from 100,000€」 |
| M-L33 | E2 | WhatsApp（wa.me/972…）、Email（mailto:info@realevate.agency） |

### 互動紀錄（I-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E1 | 載入序列（S-p1440-load）：藍底預載 → 方圖在多張照片間切換、底部計數上升到 99 → 藍幕由下往上收起 → 巨字升起、文字逐行出現。768／390 的 `is-ready` 分別在 4.0／4.2 秒出現（C-，responsive.json readyAtMs） |
| I-02 | E3 | Firecrawl 三次擷取分別停在不同進場階段：768 計數 55、360 計數 42、1920 已露出白底但巨字仍在遮罩中（S-t00、S-m00、S-d00） |
| I-03 | E1 | 巨字跑馬燈：1 秒內 x 從 −184.1 → −280.0，即約 −96px/s（1440 寬），持續向左循環（減少動態模式下同樣量到 −96px/s，但元素是 hidden，見 C-rm） |
| I-04 | E1 | 滑鼠從 (100,100) 移到 (1340,800)：方圖與巨字沒有位移或傾斜（transform none） |
| I-05 | E1 | hover About：`::after` scaleX 0→0.30（100ms）→0.80（200ms）→0.96（300ms）→1（600ms） |
| I-06 | E1 | hover Our Selection：background-position 100%→81.8%（100ms）→59%（200ms）→13.5%（300ms）→0（700ms）；文字色 #1F2B5E→白 同步 |
| I-07 | E1 | hover 選單鈕：背景色不變；兩條線長短互換（S-p1440-hover） |
| I-08 | E1 | hover 字標：transform、opacity 不變 |
| I-09 | E1 | Tab 順序：字標（aria-label「Realevate - home」）→ About → Contact → Our Selection → 選單鈕 → body。outline 全部 none、box-shadow none；About／Contact 聚焦時出現底線，其餘無可見變化（S-p1440-focus） |
| I-10 | E1 | 1440 滾輪 deltaY=400：第一張連拍時 body 已加上 `selection-open`，URL 不變、scrollY 0；之後向上滾 400 沒有關閉覆蓋層 |
| I-11 | E1 | 點 Our Selection：結果與滾輪相同（click-selection-final 與 wheel-final 只在底部 y≥830 的跑馬燈位置不同） |
| I-12 | E1 | 分類卡 hover：只有被 hover 的卡片照片放大變亮（S-p1440-cardhover） |
| I-13 | E1 | 點選單鈕：灰藍罩＋深藍方塊從右下展開，文字逐行升起（S-p1440-menu-seq）；Esc 可關閉（body class 回到 `is-ready`） |
| I-14 | E1 | 在分類覆蓋層點底部縮小首頁：回到首頁（body class `is-ready`，URL 不變） |
| I-15 | E1 | 390 手機上滑一次：開啟分類覆蓋層（body `selection-open`），與點 Our Selection 相同（S-p390-swipe、S-p390-sel） |
| I-16 | E1 | reducedMotion：沒有預載畫面，但主要文字與 CTA 在 30 秒以上都沒有出現；點選單鈕 200ms 時方塊已展開但還沒有文字（rm-1440-menu-200ms） |

### 缺口（X-）

| ID | 內容 |
| --- | --- |
| X-01 | Firecrawl 三張截圖都落在進場動畫中途（I-02），不能當穩定狀態證據；穩定狀態一律以 Playwright 截圖為準。`blank` 回報的空白（桌機 y=124–528、616–932；平板 y=0–396、632–948；手機 y=0–320）是藍底預載與白底留白，不是內容延遲載入 |
| X-02 | Firecrawl markdown 與 links 沒有導覽連結（About、Contact、四個分類），只抓到 WhatsApp／Email；導覽以 H-html-links、C-sel-links 為準 |
| X-03 | 連拍間隔受截圖耗時限制（約 210–230ms），進場與覆蓋層開啟的總時長只能估到 ±0.25 秒；精確值只有 H-js-preloader 等程式設定值 |
| X-04 | 跑馬燈速度只量了 1440 一個寬度；平板、手機速度未量 |
| X-05 | 選單大字（Home／About／Contact）的 computed style 沒抓到，字族只有 CSS 原始碼與截圖目測（襯線） |
| X-06 | 沒有錄影，GSAP 動畫的 easing 只有程式設定值，沒有逐格驗證 |
| X-07 | 沒有測試觸控長按、鍵盤操作覆蓋層（Tab 進入卡片、Enter 開啟）、螢幕閱讀器行為 |
| X-08 | Awwwards 得獎資訊來自任務說明，未打開 Awwwards 頁面核對 |
| X-09 | 減少動態的結果（C-rm、I-16）只在 Playwright Chromium 模擬下觀察一次；未在真實裝置的系統設定下驗證，也沒有找出程式碼中卡住的原因 |
| X-10 | 分類覆蓋層之後的分類頁、About、Contact 不在範圍內，沒有看 |
