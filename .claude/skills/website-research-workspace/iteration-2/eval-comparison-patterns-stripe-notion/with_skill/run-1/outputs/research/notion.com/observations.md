# Notion 觀察紀錄

- **網址**：https://www.notion.com
- **研究日期**：2026-10-01
- **研究頁面**：首頁（完整長頁）
- **擷取方式**：Firecrawl `firecrawl_scrape`，三次請求皆 `maxAge: 0`；未被限速。Playwright 未使用：`curl -sI https://www.notion.com` 回 403（網路政策），見 X-01。

## 0. 網站背景（Context）

- **網站是誰**：Notion，自稱「The AI workspace that works for you」（H-01 meta title）；description：「Build Custom Agents, search across all your apps, and automate busywork. The AI workspace where teams get more done, faster.」（H-01）
- **頁面任務**：免費註冊（「Get Notion free」→ /signup，S-d00 Hero、M-L118 頁尾 CTA），次要任務是預約展示（「Request a demo」→ /contact-sales，M-L118；導覽列也有，S-d00）。
- **目標使用者**：[O] 文案以「teams」為主詞（「Where teams and agents … together」S-d00；「AI where your team works.」M-L13；「Trusted by teams that ship.」M-L67），use case 偏產品、支援、資安、營運團隊（M-L41–65）；branding 推估「professionals and teams」（B-personality）。
- **研究重點**：與 Stripe 首頁比較，找共通模式與設計語言差異。

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×4810 | 2026-10-01 約 10:42 UTC，maxAge 0 | 同一請求也取得 markdown／branding／links |
| screenshots/tablet.png | 768 | 768×4914 | 約 10:43 UTC，maxAge 0 | viewport 768×1024 |
| screenshots/mobile.png | 360 | 360×3946 | 約 10:43 UTC，maxAge 0 | `mobile: true` |
| source/page.md | — | 118 行 | 同桌機請求 | Firecrawl markdown；**沒有 H1 文字**（X-02） |
| source/branding.json | — | — | 同桌機請求 | Firecrawl branding |
| source/links.json | — | — | 同桌機請求 | Firecrawl links |

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 截圖分段（S-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | 桌機 y=0–2200：白底導覽列（左 Notion 方塊 logo；中間 Product／Resources 下拉、Pricing、Request a demo；右「Log in」文字與藍底「Get Notion free」）。Hero **置中**：H1 兩行超大黑字「Where teams and / agents [● Ship] together.」，「Ship」放在淺綠膠囊內、前方綠色圓點；副標一行；藍底「Get Notion free」＋淺藍底「Request a demo」。下方大張產品畫面（Ramp HQ 工作區：側欄、看板欄位 In progress／In review／Complete），左側與右上有黑白線條手繪人物插圖，看板上散落幾個彩色貼紙式圖示。「The most ambitious companies run on Notion.」小字 ＋ 兩列黑白客戶 logo（可見 17 個：第一列 OpenAI…TOYOTA 9 個、第二列 clay…Discord 8 個；markdown 列了 23 個，dolby、1Password、L’Oréal、Volvo、Remote、Patreon 未出現在畫面上）。「AI where your team works.」靠左大標，下方兩張並排淺灰底卡（Capture knowledge／Find answers），每張：小標籤 → 粗體一句 → 右側黑色圓形箭頭 → 卡內產品畫面（Meetings 資料庫、H2 Deal Flow Dashboard） |
| S-d01 | E3 | y=2200–4400：全寬淺灰卡「Automate busywork / Keep work moving 24/7 with agents.」＋黑色圓形箭頭、右側 Engineering Tasks 與 Coding Agent 對話畫面。「See what Notion can do」下 5 張等寬白卡（細灰框）：彩色吉祥物圖示 → 粗體兩行標題＋「→」。「Trusted by teams that ship.」靠左大標，3 張見證卡：人物影片截圖被單色濾鏡（紅／藍／黃褐）覆蓋，左上白色客戶 logo，下方襯線體引言＋姓名職稱。一列數據（Over 50% of YC companies、1.4M+ community members、62% of Fortune 100…、G2’s #1…、100M users…），每項前有灰色小圖示，左右兩端文字被裁切（「ountries」「1.4M+ c…」）。淺暖灰底 CTA 區置中「Get started today.」＋藍底「Get Notion free」＋白底「Request a demo」 |
| S-d02 | E3 | y=4400–4810：頁尾：左側 Notion logo＋襯線體引言「We shape our tools, and thereafter our tools shape us.」— Marshall McLuhan；右側 4 欄連結（Product、Resources、Company、Notion for），灰色小標；「Explore more →」；© 2026 Notion Labs, Inc.、Cookie settings、語言選單膠囊「English (US)」 |
| S-t00 | E3 | 平板 y=0–2200：導覽列只剩 logo、藍底「Get Notion free」、漢堡圖示。Hero 置中：H1 上方多一列 7 個圓形頭像插圖（重疊排列）；H1「Where teams and / agents [● Think] together.」——膠囊內字變成「Think」、藍點淺藍底（桌機是「Ship」綠色）；副標兩行；兩顆 CTA 並排。**沒有產品畫面**，直接接 logo 列：單列、左右被裁切（CURSOR、ramp、FedEx、Figma、A24、OpenAI、PATR…）。「AI where your team works.」三張卡改為單欄上下堆疊，各自含產品畫面 |
| S-t01 | E3 | y=2200–4400：Automate 卡；「See what Notion can do」5 項改成全寬單欄列表（圖示＋標題＋→）；「Trusted by teams that ship.」見證卡橫向排列、第 2 張被右緣裁切；數據列被裁切；淺灰底 CTA 區；頁尾開頭（logo、Product／Resources 兩欄） |
| S-t02 | E3 | y=4400–4914：頁尾 2 欄、語言選單、Cookie settings、版權 |
| S-m00 | E3 | 手機 y=0–2200：logo、藍底「Get Notion free」、漢堡。頭像列；H1 斷成 3 行「Where teams / and agents / [● Think] together.」；副標；兩顆 CTA **全寬上下堆疊**（藍底、淺藍底）。logo 列單列、裁切（YOTA、NVIDIA、substack）。「AI where your team works.」三張卡單欄，產品畫面縮小；use case 列表前 3 項 |
| S-m01 | E3 | y=2200–3946：use case 後 2 項；「Trusted by teams that ship.」見證卡一次一張、右緣露出下一張；數據列裁切；CTA 區按鈕全寬堆疊；頁尾 2 欄、語言選單、版權 |

### 像素取樣（P-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | desktop (100,100) = #FFFFFF，頁面背景 |
| P-02 | E3 | desktop (590,159) = #0D0D0D，H1 文字最深像素 |
| P-03 | E3 | desktop (601,374) = #1A1A1A，Hero 副標文字最深像素 |
| P-04 | E3 | desktop (820,432) = #0075DE，「Get Notion free」按鈕底色 |
| P-05 | E3 | desktop (975,420) = #E6F3FE，「Request a demo」按鈕底色；(1020,445) 同色 |
| P-06 | E3 | desktop (836,300) = #1AAE39，H1 膠囊內綠色圓點 |
| P-07 | E3 | desktop (400,1780) = #F9F9F8，「AI where your team works」功能卡底色；(1200,1880) 同色；卡片邊緣 x=334 處無框線（左側 #FFFFFF → #F9F9F8） |
| P-08 | E3 | desktop (334,2860) = #E5E5E5，use case 卡 1px 外框（兩側 #FFFFFF） |
| P-09 | E3 | desktop (400,3400) = #DB513F，見證卡 1 紅色濾鏡；(1000,3400) = #337CB9 藍；(1400,3400) = #AA6C18 黃褐 |
| P-10 | E3 | desktop (200,4000) = #F6F5F4，CTA 區背景（暖灰） |
| P-11 | E3 | desktop (200,4600) = #FFFFFF，頁尾背景 |
| P-12 | E3 | desktop (908,1826) = #505050，功能卡小標籤附近文字 |
| P-13 | E3 | tablet (296,280) = #097FE8，H1 膠囊「Think」的藍色圓點；tablet (400,262) = #E6F3FE 膠囊底 |
| P-14 | E3 | tablet (60,1000) = #F9F9F8，平板功能卡底色（與 P-07 相同） |
| P-15 | E3 | desktop 逐點掃描：use case 卡列左框 x=334、右框 x=1585（內容寬約 1252px）；功能卡左緣同為 x=334 |
| P-16 | E5 | 從 S-d00 目測：H1 兩行基線間距約 100px，與 B-typography.fontSizes.h1 96px 相符；「AI where your team works.」「Trusted by teams that ship.」字級目測約 54–60px，與 B h2 54px 相符；H1 約為副標（約 20px）的 4–5 倍 |

### Branding（B-，E4）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colors.primary | E4 | #0075DE（accent 同值） |
| B-colors.secondary | E4 | #FFF5E0 |
| B-colors.textPrimary | E4 | #0D0D0D |
| B-colors.link | E4 | #E6F3FE（實為次要按鈕底色，見 P-05） |
| B-fonts | E4 | Inter（body 與 heading），後接系統字堆疊 |
| B-typography.fontSizes | E4 | h1 96px、h2 54px、body 14px |
| B-spacing | E4 | baseUnit 4、borderRadius 8px |
| B-components.buttonPrimary | E4 | 底 #0075DE、字 #FFFFFF、圓角 8px、無陰影 |
| B-components.buttonSecondary | E4 | 底 #E6F3FE、字 #005BAB、圓角 8px |
| B-images.logo | E4 | SVG class `globalNavigation-module-scss-module__HWB10a__logoStickerized` |

### 頁面文字（M-）與檔案線索（H-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L1 | E2 | 7 張 Hero 圖 `teams-agents-hero/pile_1.webp`～`pile_7.webp` |
| M-L3, M-L5 | E2 | 插圖 `accent-illustrations/agentTop.png`、`personPeekLeft2.png` |
| M-L7 | E2 | 「![](<Base64-Image-Removed>)Pause」——Hero 附近有一個文字為「Pause」的元素 |
| M-L9–11 | E2 | 「The most ambitious companies run on Notion.」＋ 23 個 logo，其中 9 個連到 /customers/… |
| M-L13–33 | E2 | H2「AI where your team works.」，三個「Try it」分別連到 /product/features#capture、#find、#automate（M-L15、L23、L31）；圖檔 `capture_desktop.jpg`、`find_desktop.png`、`automate_front_desktop.jpg` |
| M-L35–65 | E2 | 「See what Notion can do」5 項，每項標題以「→」結尾（M-L41、47、53、59、65），圖示檔 `front-static/agents/mailbox.png`、`rock.png`、`sign.png`、`apple.png`、`light_bulb.png` |
| M-L67–84 | E2 | H2「Trusted by teams that ship.」3 則引言（Cursor、Faire、Ramp），每則整張卡是連到 /customers/… 的連結 |
| M-L86–114 | E2 | 5 項數據文字完全相同地出現 3 次（M-L86、L96、L106 起） |
| M-L116–118 | E2 | 「Get started today.」「Get Notion free」「Request a demo」 |
| H-01 | E2 | meta title「The AI workspace that works for you. \| Notion」；description 見 §0；og:image `teams-and-agents.jpg` |
| H-02 | E2 | meta `messages`：`{"frontProductPage.logoSection.title":"Trusted by teams at"}`，與畫面上的 logo 標題（M-L9）不同 |
| H-03 | E2 | logo 的 class 含 `logoStickerized`（B-images.logo） |

### 互動／時間差紀錄（I-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E3 | 三次擷取間 H1 膠囊內的字不同：桌機（約 10:42）「Ship」綠點綠底（S-d00、P-06）；平板與手機（約 10:43）「Think」藍點藍底（S-t00、S-m00、P-13）。比對不同時間截圖得出，不是 Playwright 操作 |

### 缺口（X-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| X-01 | — | 無法直連：`curl -sI https://www.notion.com` 回 403。沒有 C-、沒有 Playwright 互動；hover、focus、下拉、Pause 按鈕作用都看不到 |
| X-02 | — | markdown 完全沒有 H1 與 Hero 副標文字（page.md 從圖片直接跳到 logo 列），H1 只有截圖證據（E3），無法確認 DOM 中的文字或輪播的完整字彙表 |
| X-03 | — | 桌機 y=4196–4496 偵測到 300px 單色區（`blank`）：位在 CTA 區（P-10 暖灰）內，截圖可見是 CTA 上下的留白，下方仍有頁尾，非截斷 |
| X-04 | — | 動態只有間接證據（I-01、M-L7、M-L86–114、截圖兩端裁切）；時長、曲線、捲動觸發未觀察 |
| X-05 | — | 平板／手機看不到桌機 Hero 的產品畫面；無法判斷是刻意移除或延遲載入（同一位置被頭像列取代） |
