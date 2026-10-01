# Stripe 觀察紀錄

- **網址**：https://stripe.com
- **研究日期**：2026-10-01
- **研究頁面**：首頁（完整長頁，不只 Hero）
- **擷取方式**：Firecrawl `firecrawl_scrape`，三次請求皆 `maxAge: 0`（即時抓取，非快取）；平板與手機請求被 Firecrawl 排入並行佇列（concurrencyQueueDurationMs 6562／3401），但都完成。Playwright 未使用：`curl -sI https://stripe.com` 回 403（網路政策），見 X-01。

## 0. 網站背景（Context）

- **網站是誰**：Stripe，自稱「financial services platform」，協助企業收款、建立計費模式、管理資金流動（H-01 meta description）。
- **頁面任務**：讓訪客開戶（Hero「Get started」→ dashboard.stripe.com/register，M-L7；頁尾「Start now」同一網址，M-L1276），次要任務是聯絡業務（導覽列與頁尾「Contact sales」，S-d00、M-L1276）與開發者進入文件（M-L1036、M-L1138）。
- **目標使用者**：[O] 文案同時點名企業（「Stripe for enterprises」S-d02）、新創（「Stripe for startups」S-d02、M-L722）、SaaS 平台（「Stripe for platforms」S-d03）與開發者（「View developer docs」M-L1036）；branding 自動推估為「businesses and developers」（B-personality.targetAudience）。
- **研究重點**：使用者要比較 Stripe 與 Notion 首頁，找出兩邊共通、可沿用的設計模式，以及設計語言的差異。

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×14828 | 2026-10-01 約 10:41 UTC，maxAge 0 | 同一請求也取得 markdown／branding／links；實驗分組 `wpp_react_homepage_aa.control`（H-03） |
| screenshots/tablet.png | 768 | 768×15414 | 約 10:42 UTC，maxAge 0 | viewport 768×1024；實驗分組 `wpp_react_homepage_aa.treatment`、`wpp_curator_h2.treatment`（H-03） |
| screenshots/mobile.png | 360 | 360×20630 | 約 10:42 UTC，maxAge 0 | `mobile: true`；y≥16384 全白（X-03） |
| source/page.md | — | 1288 行 | 同桌機請求 | Firecrawl markdown |
| source/branding.json | — | — | 同桌機請求 | Firecrawl branding，另附 metadata 中的實驗分組 |
| source/links.json | — | — | 同桌機請求 | 由 page.md 抽出的連結（不含圖片 CDN） |

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 截圖分段（S-）

切圖指令：`capture_tools.py slice … --prefix d|t|m`（預設高 2200、縮放 0.5）。

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | 桌機 y=0–2200：白底導覽列（logo、Products／Solutions／Developers／Resources 有下拉箭頭、Pricing；右側白底「Sign in」與紫底「Contact sales ›」）。Hero 靠左：小字「Global GDP running on Stripe: 1.72480178%」；H1 一段話兩種顏色——第一句深色、後續句子灰藍；紫底「Get started ›」＋白底細框「Sign up with Google」並排。右上一條橘／粉／紫漸層緞帶從畫面外延伸進來並覆蓋到 logo 列。logo 列 7 個灰階客戶 logo（Ford、coinbase、Google、shopify、mindbody、MetLife、ramp）。頁面兩側各有一條細垂直線（約 x=328、x=1592），內容被框在線內。「Flexible solutions for every business model.」標題同樣深色＋灰藍兩色、靠左。下方 bento 網格：第一列一大一小兩張卡（收款：刷卡機＋德文結帳畫面；計費：Pro Plan 用量表），第二列三張等寬卡（agentic commerce 對話、發卡、穩定幣地球）。每張卡左上是標題、右上一個方形「展開」圖示，卡片底部有漸層光暈 |
| S-d01 | E3 | y=2200–4400：bento 續（商品卡、VISA 卡片、點陣地球）；全寬卡「Embed payments in your platform」放 Zenflow 後台表格與 Daybreak Yoga 收據，右上同樣有展開圖示。Stripe Sessions 橫幅：演講照片、白底「Watch now ›」、右下「stripe sessions」。淺灰底區塊置中標題「The backbone of global commerce」，4 組數字（135+ 深色，$1.9T／99.999%／200M+ 灰色），135+ 上方有一段紫色細線。下方紫色放射線條插圖 |
| S-d02 | E3 | y=4400–6600：「Powering businesses of all sizes.」兩色標題。左「Transform your enterprise with agile financial infrastructure」＋紫底「Stripe for enterprises ›」，右側一段說明。Hertz 展開項：方形 logo、標題、右側白底細框「Read the story ›」、大張空拍照、3 欄數據列。下方 URBN／Instacart／Le Monde 三列收合項，右側淡紫方形「+」。「Realize value faster with dedicated experts」三欄：方框線條圖示 → 粗體開頭句接灰色說明 → 紫色「View … ›」連結。分隔線後「Build a foundation for your startup…」＋「Stripe for startups ›」 |
| S-d03 | E3 | y=6600–8800：右上 ←／→ 方形箭頭；客戶故事橫向卡片列（Lovable、Gamma、Runway、Supabase，第 4 張被右緣裁切）；卡片下方粗體標題＋紫色「Read …’s story ›」。兩張並排推廣卡（Stripe Startups program、Stripe Atlas），右側幾何漸層圖形。「Make your SaaS platform a complete financial operating system」＋「Stripe for platforms ›」。橘粉漸層底圖上放 Zenflow 後台，四張浮動白卡各附一行程式碼 `stripeConnectInstance.create('…')`。三欄（圖示 → 粗體開頭句 → 「Read the guide ›」）。底部一個圓形頭像 |
| S-d04 | E3 | y=8800–11000：置中引言（Mindbody，Kurtis Moyer）＋「Read the story ›」；下方 4 個 logo 頁籤（mindbody 深色且上方有線，其餘淡灰）。接著深藍底區塊：「Reliable, extensible infrastructure for every stack.」白＋灰藍兩色標題，紫底「View developer docs ›」＋深底細框「View Stripe’s GitHub」。「Connect to existing systems.」架構圖：中央 stripe 方塊，周圍 SDK、Event Destinations、App Marketplace、Data Pipeline、Orchestration 紫色節點，下接 4 個 PSP。「Scale with confidence.」下方約 350px 空白深藍區，再下方 3 個漸層色數字（500M+ 橘粉、10K+ 粉紫、150K+ 紫）。「Choose an integration path.」標題 |
| S-d05 | E3 | y=11000–13200：深藍區內三張卡（Don’t code? 對話＋QR、預整合平台 logo 方格、Build your own integration 程式編輯器畫面）＋紫色連結。白底「What’s happening / See the latest from Stripe.」兩行標題（第二行灰），右側 ←／→；大張紫色「Annual letter 2025」卡＋右側 3 張窄圖片條；下方標題段落＋白底細框「Read the letter ›」。「Book of the week / Entrepreneurship starts with ideas.」：左側棕底書封、右側淺灰底書介，右上「The Library of Stripe」印章，底部 Stripe Press／Works in Progress 小膠囊 |
| S-d06 | E3 | y=13200–14828：淺灰底「Ready to get started?」＋說明＋紫底「Start now ›」＋白底細框「Contact sales」；右側兩個小區塊（方框圖示＋「See what you’ll pay」／「Start building」＋紫色連結）。頁尾 4 欄連結（Products and pricing、Solutions、Developers、Integrations…、Resources、Company、Support），左下「United States (English)」地球圖示，右下深色平行四邊形 logo |
| S-t00 | E3 | 平板 y=0–2200：導覽列只剩 logo 與右側方形漢堡按鈕。H1 同樣兩色、斷成 5 行，CTA 仍左右並排。logo 列顯示的是 ramp、Marriott、Figma、woo（與桌機不同），左右被裁切。bento 改成 2 欄等寬，每張卡仍有展開圖示 |
| S-t01 | E3 | y=2200–4400：bento 末兩張。**桌機沒有的**「Get Stripe product recommendations」輸入區（textarea、「Input strength」與 Business website／What you sell／How you charge／Who you sell to 標籤、0/500 計數、送出箭頭、AI 使用聲明）。Sessions 橫幅。「The backbone of global commerce」區塊改為深藍→紫漸層底、白色數字、2×2 排列，下方線條球體插圖 |
| S-t02 | E3 | y=4400–6600：「Powering businesses…」；enterprise 標題、說明、按鈕改為上下堆疊；Hertz 展開項＋3 列收合項（仍是「+」）；專業服務三項改成 2＋1 排列；startup 區；客戶故事卡片列開頭 |
| S-t03 | E3 | y=6600–8800：客戶故事卡 3 張可見（第 4 張在畫面外）；Startups／Atlas 兩卡並排；platforms 區堆疊；後台＋浮動元件卡；三項指南改 2＋1；Mindbody 引言；logo 頁籤列 |
| S-t04 | E3 | y=8800–11000：深藍區：兩色標題、兩顆按鈕並排；架構圖等比縮小；「Scale with confidence.」下方同樣有空白區後接 3 欄漸層數字；整合方式卡改 2 欄，第 3 張（程式碼）換到下一列 |
| S-t05 | E3 | y=11000–13200：程式碼卡；What’s happening（大卡＋右側一張窄圖）；Book of the week 改成上圖下文單欄 |
| S-t06 | E3 | y=13200–15400：CTA 區、兩個小區塊並排；頁尾改 2 欄；地區與版權 |
| S-t07 | E3 | y=15400–15414：14px 頁尾底邊，無內容 |
| S-m00 | E3 | 手機 y=0–2200：logo＋漢堡；H1 **只剩第一句**「Financial infrastructure to grow your revenue.」（深色＋漸層色字），後半句不見；兩顆 CTA 全寬上下堆疊；logo 列只見 Marriott、Figma；標題「Flexible solutions…」；bento 改為單欄，每張卡仍有展開圖示；計費卡出現長條圖（桌機沒看到） |
| S-m01 | E3 | y=2200–4400：發卡卡片內容區為空白（只有標題與展開圖示）；地球卡；Embed payments 卡；Sessions 橫幅改成直式（logo 在上、標題、按鈕、人物在下） |
| S-m02 | E3 | y=4400–6600：「The backbone…」深藍→紫漸層底、2×2 白字數據；「Powering businesses…」；enterprise 區單欄；Hertz 與 URBN **都以展開狀態**依序排列（照片、數據、「Read the story ›」），沒有「+」 |
| S-m03 | E3 | y=6600–8800：Instacart、Le Monde 同樣展開；專業服務三項單欄；startup 區按鈕全寬 |
| S-m04 | E3 | y=8800–11000：客戶故事卡一次一張（右緣露出下一張）；Startups／Atlas 改上下堆疊；platforms 區按鈕全寬；後台畫面縮成手機版 Zenflow；指南單欄 |
| S-m05 | E3 | y=11000–13200：引言；logo 頁籤只見 mindbody 與被裁切的 JOBBER；深藍區兩顆按鈕全寬上下堆疊；架構圖保留但縮小；500M+ 開始 |
| S-m06 | E3 | y=13200–15400：數字改單欄；整合方式三卡單欄；What’s happening 開頭 |
| S-m07 | E3 | y=15400–17600：Annual letter 段落；Book of the week 卡片在書介中段被切斷，y≈16384 起全白 |
| S-m08 | E3 | y=17600–19800：全白 |
| S-m09 | E3 | y=19800–20630：全白 |

### 像素取樣（P-）

指令：`capture_tools.py sample screenshots/<檔> <x,y>`。

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | desktop (100,100) = #FFFFFF，頁面背景 |
| P-02 | E3 | desktop (452,331) = #030827，H1 第一句文字最深像素 |
| P-03 | E3 | desktop (457,400) = #41658C，H1 第二句（灰藍）文字最深像素 |
| P-04 | E3 | desktop (470,602) = #533AFD，Hero「Get started」按鈕底色 |
| P-05 | E3 | desktop (100,3720) = #F8F9FD，「The backbone」區塊背景（淺灰藍） |
| P-06 | E3 | desktop (433,3969) = #061B31，數據「135+」文字 |
| P-07 | E3 | desktop (747,3990) = #7D8BA4，數據「$1.9T」文字；(1060,3970) 同為 #7D8BA4（「99.999%」） |
| P-08 | E3 | desktop (100,9400) = #0D1738，開發者區塊深藍背景；(960,10820) 同色 |
| P-09 | E3 | desktop (360,9448) = #533AFD，深藍區「View developer docs」按鈕底色（與 P-04 相同） |
| P-10 | E3 | desktop (100,14000) = #F8FAFD，CTA／頁尾背景 |
| P-11 | E3 | desktop (343,1600) = #E5EDF5，bento 卡片 1px 外框（左右鄰點皆 #FFFFFF） |
| P-12 | E3 | desktop (1550,1180) = #F5F5FF，「Enable any billing model」卡片內底色 |
| P-13 | E3 | tablet (40,3620) = #141E4B，平板「The backbone」區塊背景（桌機同區為 P-05 淺色） |
| P-14 | E3 | mobile (40,360) = #533AFD，手機全寬「Get started」按鈕 |
| P-15 | E3 | desktop 逐點掃描：y=2000 與 y=7000 兩列的非白像素從 x=327 開始、到 x=1592 結束（兩條垂直細線）；bento 卡框在 x=343 與 x=1576（內容寬約 1234px，距細線各 16px） |
| P-16 | E5 | 從 S-d00 目測：H1 行距約 55px（四行基線間距），與 B-typography.fontSizes.h1 48px 相符；H1 與第一個 H2 字級目測相近（H2 約 36–40px） |

### Branding（B-，E4）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colors.primary | E4 | #533AFD（accent、link 同值；textPrimary 也被推為 #533AFD） |
| B-colors.secondary | E4 | #E2E4FF |
| B-colors.background | E4 | #FFFFFF |
| B-fonts | E4 | Sohne（body）、SF Pro Display（heading）；heading 字族堆疊仍以 Sohne 開頭 |
| B-typography.fontSizes | E4 | h1 48px、h2 32px、body 32px |
| B-spacing | E4 | baseUnit 8、borderRadius 0px |
| B-components.buttonPrimary | E4 | 底 #533AFD、字 #FFFFFF、圓角 4px、無陰影 |
| B-components.buttonSecondary | E4 | 底 #FFFFFF、字 #533AFD、框 #B9B9F9、圓角 4px |
| B-personality | E4 | tone professional、energy medium、targetAudience businesses and developers |

### 頁面文字（M-）與檔案線索（H-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L1 | E2 | 「Global GDP running on Stripe:1.72480179%1.72480179%」（數字出現兩次） |
| M-L3 | E2 | H1：「_Financial infrastructure to grow your revenue._ Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.」第一句以斜體標記；M-L5 整句重複一次 |
| M-L7 | E2 | 「Get started」→ dashboard.stripe.com/register；「Sign up with Google」 |
| M-L11–15 | E2 | H2「Flexible solutions for every business model.」後接兩個版本的說明句（長版 M-L13、短版 M-L15） |
| M-L17–281 | E2 | 收款 bento 卡：同一套結帳 UI 文字以英文／德文／日文各出現一次再回到英文（例：M-L21–27「Pay Roastery／Cartsy bezahlen／Showflix に支払う／Pay Roastery」） |
| M-L283, L299, L327, L329, L333 | E2 | 其餘 bento 卡標題：billing、agentic commerce、card issuing、stablecoins、embed payments |
| M-L333–541 | E2 | Embed payments 卡內三組不同商家（Jackson Hot Yoga、Quiet Fire Yoga、Daybreak Yoga）各自的結帳→「Thank you!」狀態（M-L357、L395、L429） |
| M-L543 | E2 | 「Building the economic infrastructure for AI [Watch now]」 |
| M-L545–573 | E2 | H2「The backbone of global commerce」＋4 組數字，整組重複兩次（M-L547、M-L563） |
| M-L577–659 | E2 | 「Powering businesses of all sizes.」＋4 個客戶案例，每個都有「Read the story」與數據、Products used |
| M-L661–679 | E2 | 「Realize value faster with dedicated experts」三項：Professional services／Stripe-certified experts／Support plans，各附 View … 連結 |
| M-L681–720 | E2 | 8 張客戶故事卡（Lovable…Decagon），每張「Read …’s story」 |
| M-L722–730 | E2 | Stripe Startups program「Apply now」、Stripe Atlas「Start your company」 |
| M-L734–988 | E2 | Connect 元件說明，每項附 `stripeConnectInstance.create('…')`（如 M-L740），後台內容出現兩個版本（M-L774 起「Action required」、M-L884 起「Your information is in review」） |
| M-L990–1006 | E2 | 三項指南：Get to market faster／Grow new lines of revenue／Manage platform risk，各「Read the guide」 |
| M-L1008–1030 | E2 | 4 則引言（Mindbody、Jobber、Substack、Lightspeed），各「Read the story」 |
| M-L1032–1036 | E2 | H2「Reliable, extensible infrastructure for every stack.」；「View developer docs」「View Stripe’s GitHub」 |
| M-L1042 | E2 | 「Interactive diagram showing how Stripe connects into business systems…」 |
| M-L1074–1088 | E2 | 「Scale with confidence.」＋500M+／10K+／150K+ |
| M-L1090–1138 | E2 | 「Choose an integration path.」三條路：Don’t code?（M-L1108）、pre-integrated platform（M-L1114）、Build your own integration（M-L1134） |
| M-L1140–1186 | E2 | 8 則「What’s happening」項目，各有一個動詞連結（Read the letter、See the numbers、Get the data、Watch video…） |
| M-L1188 | E2 | 「Item 1 of 8: Businesses on Stripe generated $1.9T in 2025.」 |
| M-L1255–1270 | E2 | 「Book of the week」Polio: An American Story |
| M-L1272–1288 | E2 | 「Ready to get started?」「Start now」「Contact sales」；See what you’ll pay → Pricing details；Start building → Integration options |
| H-01 | E2 | meta title「Stripe \| Financial Infrastructure to Grow Your Revenue」；description「Stripe is a financial services platform that helps all types of businesses accept payments, build flexible billing models, and manage money movement.」 |
| H-02 | E2 | Hero 圖檔名 `wave-fallback-desktop-1x.fba6fa88.webp`（M-L9） |
| H-03 | E2 | meta `experiment-treatments`：桌機 `wpp_react_homepage_aa.control`、`wpp_curator_h2.control`；平板 `wpp_react_homepage_aa.treatment`、`wpp_curator_h2.treatment`；手機 `wpp_react_homepage_aa.control`、`wpp_curator_h2.treatment`；三者皆有 `wpp_acquisition_mobile_sticky_hamburger.control`、`wpp_curator_input_strength.treatment` |
| H-04 | E2 | 圖檔名 `DatavizStatic3x.png`（M-L575） |
| H-05 | E2 | 同一內容有桌機／手機兩張圖：`connect-bento-card-background-image.jpg` 與 `ConnectMobileBackground.jpg`（M-L539）；`sessions-2026-on-demand-bg.png` 與 `…-bg-mobile.png`（M-L541）；What’s happening 圖檔皆為 `*-mobile.png`（M-L1190 起） |
| H-06 | E2 | 客戶案例圖 alt 文字：「…crosswalks form a slanted parallelogram, imitating the Stripe logo」等，4 張皆描述「形成 Stripe 平行四邊形 logo」（M-L585、L605、L625、L645） |

### 缺口（X-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| X-01 | — | 無法直連：`curl -sI https://stripe.com` 回 403（網路政策）。沒有 Playwright 的 computed style（C-）與互動紀錄（I-）；hover、focus、下拉選單、accordion 展開、展開圖示點擊後的狀態都看不到 |
| X-02 | — | 桌機 y=10352–10704（平板 y=9844–10192）「Scale with confidence.」下方 ~350px 單色深藍區（`blank` 偵測）。下方仍有內容，所以不是頁尾截斷；該區應有的視覺內容沒有渲染 |
| X-03 | — | 手機 y=16384–20630 全白、延伸到截圖底部（`blank` 偵測）。16384 剛好是 2¹⁴，可能是瀏覽器截圖高度上限，也可能是捲動才進場的內容沒渲染；無法分辨。手機版 Book of the week 之後（CTA、頁尾）沒有截圖證據 |
| X-04 | — | 三個寬度落在不同的 A/B 實驗分組（H-03）。平板多出的 AI 輸入區（S-t01）與深色數據區（P-13）可能是實驗差異，不一定是響應式差異 |
| X-05 | — | 動態全部只有間接證據（重複的多語系文字、fallback 檔名、不同時間 logo 列不同）；時長、曲線、觸發條件都未觀察 |
| X-06 | — | 手機發卡卡片內容區空白（S-m01），桌機與平板都有卡片圖；原因不明（延遲載入或動畫起始狀態） |
