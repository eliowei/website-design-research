# Vercel 首頁 觀察紀錄

- **網址**：https://vercel.com
- **研究日期**：2026-10-01
- **研究頁面**：首頁（整頁，不只 Hero）
- **擷取方式**：Firecrawl `firecrawl_scrape`，全部 `maxAge: 0`（即時擷取，非快取）；Playwright 無法使用（直連被網路政策擋，見 X-03）

## 0. 網站背景（Context）

只寫有來源的事實，不評價設計。

- **網站是誰**：Vercel，雲端部署／基礎設施平台；頁面 title 為「Agentic Infrastructure - Vercel」，meta description「The autonomous stack for every app and agent.」（H-05）
- **頁面任務**：讓訪客開始部署（主 CTA「Deploy now」連到 /new）或聯絡業務（「Talk to sales」），並讓 AI agent 接手註冊（「Onboard your agent／Paste to your agent」）（M-L67、S-d00、S-t04）
- **目標使用者**：[O] branding 推估為「developers and tech companies」（B-personality.targetAudience）；[H] 文案三段分別對應「做 agent 的團隊」「做大流量 app 的團隊」「做多租戶平台的團隊」（M-L11、M-L25、M-L39），推測首頁同時服務這三類客群
- **研究重點**：使用者特別要求「動態效果」與「手機版的變化」；另要求「照這個風格做一個類似的首頁」——依 skill 範圍規則，本次只做研究，報告末附「實作交接摘要」

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×6118 | 2026-10-01 10:41 UTC，maxAge 0 | fullPage；y≥2716 空白（X-01） |
| screenshots/tablet.png | 768 | 768×7688 | 2026-10-01 約 10:42 UTC，maxAge 0 | fullPage，viewport 768×1024；**唯一完整渲染到頁尾的截圖** |
| screenshots/mobile.png | 360 | 360×6645 | 2026-10-01 約 10:42 UTC，maxAge 0 | `mobile: true`，fullPage；y≥2448 空白（X-02）；Firecrawl 回報被併發限制排隊約 5 秒 |
| screenshots/mobile-wait6s.png | 360 | 360×800 | 2026-10-01 約 10:44 UTC，maxAge 0 | `mobile: true`，`waitFor: 6000`，僅首屏；用來和 mobile.png 比對時間差（I-01、I-02） |
| source/page.md | — | — | 2026-10-01 10:41 UTC | Firecrawl markdown（與 desktop 同一次請求） |
| source/branding.json | — | — | 同上 | Firecrawl branding（E4） |
| source/links.json | — | — | 同上 | Firecrawl links，只抓到 6 條 |

切圖：桌機每段 1100px（縮 0.5）、平板每段 1400px（縮 0.7）、手機每段 1400px（縮 0.8），都在 `_slices/`。另有放大切圖 `d-hero-zoom.png`、`d-hero-list-zoom.png`、比較圖 `m-compare-time.png`。

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 截圖分段（S-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | 桌機 y=0–1100：頂部導覽（左：▲ logo、Products▾、Resources▾、Enterprise、Pricing；右：Get a Demo〔白底細框〕、Log In〔白底細框〕、Sign Up〔黑底〕）；下方置中一行公告「Ship 26 is coming to SF　Get your ticket ›」；Hero 三欄：左「Agentic / Infrastructure」兩行大標＋「Deploy now」（黑膠囊）「Talk to sales」（白膠囊），中央黑色三角形帶白色光暈與下方陰影，右側三行文字「For coding agents / To ship apps and agents / Automated by agents」；y≈1000 一排 7 個客戶 logo（Meta、Charles Schwab、DoorDash、OpenAI、SpaceX、The Weather Company、Polymarket），完整顯示、左右對齊內容寬度 |
| S-d00a | E3 | 放大 Hero 中央（`_slices/d-hero-zoom.png`，原圖 x=760–1520, y=280–700）：三角形上緣有白色高光、下方與兩側是柔和灰色陰影，背景有比底色更白的圓形光暈 |
| S-d00b | E3 | 放大 Hero 右側清單（`_slices/d-hero-list-zoom.png`）：三行皆為無襯線字、同色同字重，無項目符號 |
| S-d01 | E3 | 桌機 y=1100–2200：區塊「Build agents on infrastructure that thinks like them」（標題靠左，兩行）；中間是 Notion 產品畫面（左：Notion logo＋淡化的「Strategy doc」頁；右：浮起的「New AI chat」對話視窗），產品畫面下緣漸淡到底色；右欄：數據句「Notion powers millions」（深色）＋「of agent conversations daily on Vercel.」（灰色），其下「Features」小標與 4 個功能名稱 |
| S-d02 | E3 | 桌機 y=2200–3300：區塊「Ship apps that scale from zero to millions instantly」，**標題移到中右側**；左欄是數據句「Zapier serves over 100 million monthly website visits on Vercel.」＋ Features 清單；右側是 Zapier 網站截圖（瀏覽器畫面樣式）；y≈2716 以下全空白 |
| S-d03–S-d05 | — | 桌機 y=3300–6118：全空白（見 X-01） |
| S-t00 | E3 | 平板 y=0–1400：導覽只剩 ▲ logo 與右上漢堡選單（≡）；公告列置中單行；Hero 改為單欄置中：三角形在上、「Agentic / Infrastructure」置中、其下等寬字（monospace）一行「For coding agents」、兩個膠囊 CTA 並排置中；logo 列左側被截斷（最左只看到「…H」），顯示 OpenAI、SpaceX、Weather、Polymarket、Meta；之後「Build agents…」標題靠左 |
| S-t01 | E3 | 平板 y=1400–2800：Notion 產品畫面（全寬）→ 數據句 → Features 清單，三者**上下堆疊**；「Ship apps…」標題靠左 → Zapier 畫面全寬 |
| S-t02 | E3 | 平板 y=2800–4200：Zapier 數據句＋Features；「Host platforms that serve every customer」→ Mintlify 文件站畫面（全寬、下緣漸淡）→ 數據句「Mintlify powers documentation for over 20,000 companies on Vercel.」→ Features 清單 |
| S-t03 | E3 | 平板 y=4200–5600：「Recently shipped」標題；三張全寬卡片垂直堆疊：eve（線條幾何圖形＋「A framework for building durable agents.」）、Passport（傾斜的黑色護照實物圖）、Containers（傾斜的終端機畫面「▲ vercel deploy … ✓ Building image… Production: https://my-server.vercel.app」）；卡片淺色底、細框、小圓角 |
| S-t04 | E3 | 平板 y=5600–7000：「Built by you, or your agents」置中大標；「Deploy now」（黑膠囊）＋「Onboard your agent」（白膠囊，左側 3 個 AI 工具小圖示、右側複製圖示）；大段留白後是頁尾 3 欄連結（Agent Stack、Core Platform、Security、Tools、Frameworks、SDKs、Build、Learn、Explore…），部分項目帶灰底「New」小標籤 |
| S-t05 | E3 | 平板 y=7000–7688：頁尾續（Company、Legal & Trust、Social）；▲ logo；左下藍點＋等寬大寫「ALL SYSTEMS NORMAL.」；右下主題切換（系統／亮／暗三個圖示）與一個圖示按鈕 |
| S-m00 | E3 | 手機 y=0–1400：▲ logo＋漢堡選單；公告**斷成兩行**（「Ship 26 is coming to SF」／「Get your ticket ›」）；三角形；「Agentic / Infrastructure」置中；等寬字「For coding agents」；**兩顆 CTA 改成全寬、上下堆疊**（Deploy now 黑、Talk to sales 白）；logo 列只露出約 2.5 個（…ather Company、Polymarket、Meta）；「Build agents on / infrastructure that / thinks like them」三行靠左；Notion 畫面縮小版 |
| S-m01 | E3 | 手機 y=1400–2800：數據句三行（深＋灰）→ Features；「Ship apps that / scale from zero to / millions instantly」三行；Zapier 畫面是**兩張重疊卡片的不同構圖**（左後方一張「AI agents t… across you…」卡，右前方是 Zapier 手機版頁面），和平板／桌機的單張瀏覽器畫面不同；之後數據句＋Features；y≈2448 以下空白 |
| S-m02–S-m04 | — | 手機 y=2800–6645：全空白（見 X-02） |
| S-t04-gap | E3 | 平板 y=6012–6344 有 332px 單色區（`blank` 偵測），位於最終 CTA 與頁尾之間，下方仍有內容，不屬於未渲染 |

### 像素取樣與量測（P-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | 桌機 (20,200) = #FAFAFA，頁面背景；平板 (32,6270)、手機 (10,600) 同為 #FAFAFA |
| P-02 | E3 | 桌機 (960,500)、(960,560) = #000000，Hero 三角形；三角形實心範圍 x=865–1054、y=429–593（約 190×165px） |
| P-03 | E3 | 桌機 (380,596) = #171717，「Deploy now」按鈕底色；手機 (40,612) = #171717 同一按鈕 |
| P-04 | E3 | 手機 (40,664) = #FFFFFF，「Talk to sales」按鈕底色 |
| P-05 | E3 | 桌機文字最深像素：h1 #171717；數據句前半 #171717、後半 #4D4D4D；「Features」小標 #4D4D4D；功能名稱 #171717；導覽項目 #4D4D4D；公告 #171717 |
| P-06 | E3 | 桌機 (649,1500) = #EFEFEF、(661,1500) = #FFFFFF：Notion 產品畫面左卡的邊緣是淺灰細線，卡內白色 |
| P-07 | E3 | 標題行距（相鄰兩行文字頂端距離）：h1 桌機 64px（行 y=426–482／490–537）、平板 64px、手機 56px；h2 桌機 56px（y=1294／1350）、平板 56px、手機 40px（三行） |
| P-08 | E3 | 版心：桌機導覽與 h1 左緣 x≈260、Sign Up 右緣 x≈1659 → 內容寬約 1400px；手機 CTA x=24–335（左右各 24px 邊距）、h2 左緣 x≈26 |
| P-09 | E3 | 手機三角形 x=97–262（約 165px 寬），桌機約 190px，縮放比例遠小於版寬比例（360/1920） |
| P-10 | E3 | 桌機 Deploy now 按鈕 y=578–618（高約 40px）、x=260–383；手機同按鈕 y=593–631（高約 38px）、全寬 311px |

### branding（B-，E4）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colors | E4 | primary #0072F5、secondary #FFC96B、accent #171717、background #FAFAFA、textPrimary #171717、link #9A050F |
| B-typography | E4 | 字族 GeistSans（標題與內文同一字族）；h1 64px、h2 56px、body 14px |
| B-spacing | E4 | baseUnit 4、borderRadius 6px |
| B-components | E4 | buttonPrimary：#171717 底、白字、圓角 33554400px（＝完全膠囊）、無陰影；buttonSecondary：白底、#171717 字、膠囊、以 `0 0 0 1px rgb(235,235,235)` 陰影當外框 |
| B-colorScheme | E4 | light；B-designSystem.framework = tailwind |

### 頁面文字（M-，E2）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L1 | E2 | 「Skip to content」連到 `#geist-skip-nav` |
| M-L3–L5 | E2 | 「Ship 26 is coming to SF」「Get your ticket」 |
| M-L7 | E2 | 兩張主視覺圖片：`fallback-dark-glow-mobile.*.webp` 與 `fallback-dark-glow-desktop.*.webp` |
| M-L9 | E2 | 「Drop to deployLoading」（無對應可見元素） |
| M-L11–L23 | E2 | 「Build agents on infrastructure that thinks like them」；notion-mobile-dark/light、notion-desktop-dark/light 四張圖；「Notion powers millions of agent conversations daily on Vercel.」；Features：Durable Orchestration、Sandboxed Environments、AI Model Gateway、Fluid Compute |
| M-L25–L37 | E2 | 「Ship apps that scale from zero to millions instantly」；zapier-mobile/desktop × dark/light 四張圖；Zapier 數據句；Features 4 項 |
| M-L39–L51 | E2 | 「Host platforms that serve every customer」；mintlify-mobile/desktop × dark/light 四張圖；Mintlify 數據句；Features 4 項 |
| M-L53–L63 | E2 | 「Recently shipped」；Passport 連結；Containers 卡的 CLI 文字 |
| M-L65–L67 | E2 | 「Built by you, or your agents」；「Deploy now」→ /new；「Onboard your agent」「Paste to your agent」「Onboard your agent」（同一文字出現兩次＋一個替代文字） |
| M-h1 | E2 | markdown 中**沒有**「Agentic Infrastructure」標題文字，也沒有 Hero 右側三行文字與 logo 列 |

### HTML／檔名線索（H-，E2）

| ID | 等級 | 內容 |
| --- | --- | --- |
| H-01 | E2 | 主視覺有 `fallback-dark-glow-mobile` 與 `fallback-dark-glow-desktop` 兩個版本（M-L7） |
| H-02 | E2 | 每個客戶案例都有 `-mobile-` 與 `-desktop-` 兩套圖，各再分 `-dark` 與 `-light`（M-L13–15、M-L27–29、M-L41–43） |
| H-03 | E2 | meta `color-scheme: dark light`；`theme-color` #FAFAFA |
| H-04 | E2 | meta `viewport: width=device-width, initial-scale=1, maximum-scale=1` |
| H-05 | E2 | title「Agentic Infrastructure - Vercel」；description「The autonomous stack for every app and agent.」；`next.appdir: true`（Next.js App Router） |
| H-06 | E2 | 跳過導覽的錨點名稱 `#geist-skip-nav`（Geist 為 Vercel 設計系統／字型名稱） |

### 互動／時間差紀錄（I-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E3 | 比對 mobile.png（載入後立即）與 mobile-wait6s.png（等 6 秒）：Hero 等寬副標由「For coding agents」變成「To ship apps and agents」（`_slices/m-compare-time.png`）。屬於「不同時間截圖比對」，不是 Playwright 實際操作，因此標 E3 |
| I-02 | E3 | 同一組比對：手機 logo 列內容向左位移——前一張是「…ather Company / Polymarket / Meta」，後一張是「…olymarket / Meta / charles SCHWAB」 |
| I-03 | E3 | 平板（S-t00）與手機（S-m00）logo 列都在左右兩端截斷 logo；桌機（S-d00）同一列 7 個 logo 完整、不截斷 |

### 缺口（X-）

| ID | 內容 |
| --- | --- |
| X-01 | 桌機截圖 y=2716–6118（3402px）單色，`blank` 判定延伸到底部：Zapier 區塊之後的 Mintlify、Recently shipped、最終 CTA、頁尾在桌機都沒渲染，不能當桌機證據 |
| X-02 | 手機截圖 y=2448–6645（4197px）單色，延伸到底部：Zapier 區塊之後在手機都沒渲染 |
| X-03 | `curl -sI https://vercel.com` 回 403（網路政策）→ 無法用 Playwright：沒有 computed style（C-）、沒有 hover／focus／捲動／點擊的實際操作、沒有動畫的 duration／easing |
| X-04 | 漢堡選單展開後的樣子（手機／平板）無法觀察 |
| X-05 | 桌機導覽 Products▾／Resources▾ 的下拉內容無法觀察 |
| X-06 | 「Drop to deploy」「Loading」（M-L9）對應的介面狀態沒有出現在任何截圖 |
| X-07 | 暗色模式：有 dark 版圖片與主題切換（H-02、H-03、S-t05），但沒擷取到暗色模式畫面 |
| X-08 | `prefers-reduced-motion` 支援與否無法確認；也沒有看到暫停鈕 |
| X-09 | Hero 三角形本身是否在動（WebGL／影片／靜態圖）無法從兩張靜態截圖確認：兩張手機截圖中三角形外觀幾乎相同 |
| X-10 | 桌機 Hero 右側三行清單是否也會輪播、桌機 logo 列是否會動：只有一張桌機截圖 |
