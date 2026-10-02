# Vercel 首頁 觀察紀錄

- **網址**：https://vercel.com
- **研究日期**：2026-10-01
- **研究頁面**：首頁（整頁，從頁首到頁尾；不含子頁）
- **擷取方式**：Firecrawl（三次請求皆 `maxAge: 0`，15:34–15:35 UTC）＋ Playwright Chromium（網站可直連，`curl -sI` 回 HTTP/2 200，15:36–15:46 UTC）

## 0. 網站背景（Context）

- **網站是誰**：Vercel，雲端部署／基礎設施平台；頁面標題「Agentic Infrastructure - Vercel」，描述「The autonomous stack for every app and agent.」（H-03）
- **頁面任務**：讓訪客開始部署或聯絡業務。Hero 兩個 CTA「Deploy now」「Talk to sales」（C-button.primary、C-button.secondary），頁尾前再出現「Deploy now」與「Onboard your agent」（M-L73）；頁首常駐「Get a Demo / Log In / Sign Up」（C-button.header）。
- **目標使用者**：[O] 文案直接點名「coding agents」「apps and agents」（I-12、M-L11）；[H] 主要是開發者與技術決策者，branding 的 personality 也推估為「developers and tech companies」（B-personality，E4）。
- **研究重點**：使用者指定「動態效果」與「手機版的變化」，並要求「照這個風格做一個類似的首頁」（依 skill 範圍，本研究只寫實作交接摘要，不實作）。

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×6118 | 15:34 UTC，maxAge 0 | Firecrawl 預設寬度；y≥2716 空白（X-01） |
| screenshots/tablet.png | 768 | 768×7688 | 15:35 UTC，maxAge 0 | 唯一完整渲染到頁尾的 Firecrawl 截圖 |
| screenshots/mobile.png | 360 | 360×6645 | 15:35 UTC，maxAge 0 | `mobile: true`；y≥2448 空白（X-02） |
| source/page.md | — | 73 行 | 15:34 UTC | Firecrawl markdown；沒有 h1 與 Hero 清單文字（X-09） |
| source/branding.json | — | — | 15:34 UTC | Firecrawl branding；logo 欄位只留網址，metadata 摘要附在 `_metadata` |
| source/links.json | — | 6 筆 | 15:34 UTC | Firecrawl links |
| screenshots/pw/desktop-*.png、hero-seq-*、canvas-*、nav-*、hover-*、focus-*、drag-over.png、card-passport-* | 1440 | 1440×900 視窗 | 15:36–15:44 | Playwright；desktop-full-after-scroll.png 1440×5930（y≥2532 空白，X-03） |
| screenshots/pw/tablet768-* | 768 | 768×1024 | 15:42 | Playwright |
| screenshots/pw/mobile390-* | 390 | 390×844（DPR 2） | 15:42 | Playwright，isMobile、hasTouch、iPhone UA |
| screenshots/pw/desktop1440-rm-*、mobile390-rm-* | 1440／390 | — | 15:42 | `reducedMotion: 'reduce'` |
| screenshots/pw/video-desktop/desktop-1440-session.webm | 1440 | — | 15:37 | 載入到捲動的整段錄影 |
| source/pw/desktop.json、interactions.json、desktop-details.json、stylesheet-motion.json | 1440 | — | 15:37–15:46 | computed style、CSS 變數、動畫時序、keyframes、reduced-motion 規則 |
| source/pw/tablet768.json、mobile390.json、*-rm.json、desktop1440b.json、hero-subline-sequence.json | 768／390／1440 | — | 15:42–15:44 | 響應式與減少動態比對 |

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 截圖分段（S-，E3）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | 桌機 1920，y=0–2200：頁首（logo、Products／Resources／Enterprise／Pricing、右側 Get a Demo／Log In／Sign Up）；置中公告「Ship 26 is coming to SF · Get your ticket ›」；Hero 三欄：左「Agentic Infrastructure」＋兩顆膠囊按鈕、中央黑色三角形與柔和陰影、右側三行清單；一排 7 個客戶 logo（Meta…Polymarket）；「Build agents on infrastructure that thinks like them」標題靠左、Notion 產品畫面在左、數據句與 Features 清單在右；下一段標題開始 |
| S-d01 | E3 | 桌機 1920，y=2200–4400：「Ship apps…」標題靠右、Zapier 產品畫面在右、數據句與 Features 在左；y≈2716 起全白（X-01） |
| S-d02 | E3 | 桌機 1920，y=4400–6118：全白（X-01） |
| S-t00 | E3 | 平板 768，y=0–2200：頁首只剩 logo 與漢堡；公告；三角形移到標題**上方**；標題置中、下接等寬字一行「For coding agents」、兩顆按鈕並排置中；logo 列左右被裁切（從 charles SCHWAB 開始、右邊 Po… 被切）；Notion 區塊改成單欄：標題 → 產品畫面 → 數據句 → Features |
| S-t01 | E3 | 平板，y=2200–4400：Zapier、Mintlify 同樣單欄結構；「Recently shipped」標題 |
| S-t02 | E3 | 平板，y=4400–6600：Recently shipped 卡片單欄堆疊（eve、Passport、Containers）；「Built by you, or your agents」置中＋Deploy now／Onboard your agent；頁尾三欄連結 |
| S-t03 | E3 | 平板，y=6600–7688：頁尾其餘連結、logo、「ALL SYSTEMS NORMAL.」藍色狀態字、主題切換圖示 |
| S-m00 | E3 | 手機 360，y=0–2200：頁首 logo＋漢堡；公告兩行（文字與「Get your ticket」分行）；三角形在上、標題置中兩行、等寬字「For coding agents」、**Deploy now 與 Talk to sales 改成全寬上下堆疊**；logo 列被裁切（The Weather Company、Polymarket、Meta）；Notion 段單欄；Zapier 產品畫面為手機版構圖（前後兩層卡片） |
| S-m01 | E3 | 手機 360，y=2200–4400：Zapier 數據句與 Features；y≈2448 起全白（X-02） |
| S-m02 | E3 | 手機 360，y=4400–6600：全白（X-02） |
| S-m03 | E3 | 手機 360，y=6600–6645：全白 |
| S-dpw00 | E3 | Playwright 1440 整頁，y=0–2200：版面同 S-d00，內容寬度貼齊 24px 邊距 |
| S-dpw01–02 | E3 | Playwright 1440 整頁，y≥2532 空白（X-03） |
| S-pwd-sec | E3 | Playwright 1440 視窗截圖（desktop-scroll-h20…h26-00.png）：Notion／Zapier／Mintlify 三段、Recently shipped（左大卡 eve、右上 Passport、右下 Containers 的兩欄格局）、Built by you 置中 CTA、頁尾 6 欄連結 |
| S-pwm-sec | E3 | Playwright 390 視窗截圖（mobile390-sec0…6-1.png）：三段產品敘事單欄；Recently shipped 卡片單欄堆疊；Built by you 標題兩行置中、按鈕並排置中；頁尾 2 欄連結 |
| S-pwm-hero | E3 | mobile390-hero.png：三角形有陰影光暈；標題置中；全寬按鈕；logo 列被裁切 |
| S-pwm-rm-hero | E3 | mobile390-rm-hero.png（減少動態）：三角形是**平面、無陰影光暈**；其餘版面相同 |

### 像素取樣（P-，E3）

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | desktop.png (50,200) = #FAFAFA，頁面背景 |
| P-02 | E3 | desktop.png (268,590) = #171717，「Deploy now」按鈕底色 |
| P-03 | E3 | pw/desktop-hero.png (170,507) = #FFFFFF，「Talk to sales」按鈕底色 |
| P-04 | E3 | pw/desktop-hero.png (720,450) = #000000，Hero 三角形本體（比文字的 #171717 更黑） |
| P-05 | E3 | pw/desktop-hero.png (620,520) = #E7E7E7，三角形下緣陰影 |
| P-06 | E3 | desktop.png (1900,3000) = #FAFAFA，空白段落的背景（與 P-01 相同） |

### 頁面文字（M-，E2）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L3–L5 | E2 | 「Ship 26 is coming to SF」「Get your ticket」 |
| M-L7 | E2 | 兩張圖片：`fallback-dark-glow-mobile.*.webp`、`fallback-dark-glow-desktop.*.webp` |
| M-L9 | E2 | 「Drop to deployLoading」 |
| M-L11、M-L28、M-L45 | E2 | 三段標題：Build agents… / Ship apps… / Host platforms… |
| M-L13–L15 | E2 | Notion 圖片四個版本：mobile-dark、mobile-light、desktop-dark、desktop-light（Zapier M-L30–32、Mintlify M-L47–49 相同） |
| M-L17、M-L34、M-L51 | E2 | 三句客戶數據：「Notion powers millions of agent conversations daily on Vercel.」等 |
| M-L19–L23 | E2 | 「Features」＋四個功能名稱（另兩段 M-L36–40、M-L53–57 相同結構） |
| M-L59–L69 | E2 | 「Recently shipped」＋卡片（Passport、Dockerfile 部署的 CLI 輸出） |
| M-L71–L73 | E2 | 「Built by you, or your agents」「Deploy now」「Onboard your agent / Paste to your agent」 |

### 原始碼與檔名線索（H-，E2）

| ID | 等級 | 內容 |
| --- | --- | --- |
| H-01 | E2 | Hero 有 `fallback-dark-glow-{mobile,desktop}.webp`（M-L7），DOM 有一個 `<canvas class="absolute inset-0 block … opacity-0 transition…">`（source/pw/desktop.json `loadFrames`） |
| H-02 | E2 | 每段產品畫面都有 mobile／desktop × dark／light 四張圖（M-L13–15 等）；1440 只顯示 `*-desktop-light.webp`，寬 921px（source/pw/desktop-details.json `imgs`） |
| H-03 | E2 | meta：title「Agentic Infrastructure - Vercel」、`theme-color` #FAFAFA、`color-scheme: dark light`、viewport `maximum-scale=1`（source/branding.json `_metadata`） |
| H-04 | E2 | 樣式表中有 54 個 @keyframes，包括 `logo-carousel`、`marquee`、`fade-in`、`fade-slide-in`、`blue-glow`、`thinking-loader`、`sandbox-left/right`、`flip-front/back`、`border-trail`、`passport-glow-ellipse-x`、`eaE5iq_reveal`、`knmcua_drawPath`（source/pw/stylesheet-motion.json `kf`） |
| H-05 | E2 | 7 條 `prefers-reduced-motion` 規則：`reduce` 時頁首 `transition: none`、`.AEUiAq_cursor` 暫停；**`(prefers-reduced-motion: reduce), (max-width: 601px)`** 同時關掉 `.eaE5iq_cursor` 與 `.knmcua_*` 的描線動畫；`no-preference` 時才給 gateway 漸層淡出 0.7s／90ms ease-out（stylesheet-motion.json `rm`） |
| H-06 | E2 | class 名稱：`motion-safe:animate-command-fade-in`、`motion-safe:will-change-transform`、`gap-(--marquee-gap)`、`focus-visible:outline-2 outline-[var(--ds-focus-color)] outline-offset-4`（probe 輸出，stylesheet-motion.json `sub`） |
| H-07 | E2 | 底部 CTA 的文字容器是 grid 疊放：兩個 `invisible` 的「Onboard your agent」「Paste to your agent」撐出寬度，第三個可見 span 帶 `motion-safe:animate-command-fade-in`（source/pw/hero-subline-sequence.json `mobileHtml`） |

### Branding 自動萃取（B-，E4）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colors.primary | E4 | #0072F5 |
| B-colors.secondary | E4 | #FFC96B |
| B-colors.link | E4 | #9A050F |
| B-colors.background | E4 | #FAFAFA |
| B-colors.textPrimary | E4 | #171717 |
| B-typography | E4 | GeistSans；h1 64px、h2 56px、body 14px |
| B-spacing | E4 | baseUnit 4、borderRadius 6px |
| B-components | E4 | buttonPrimary #171717 底白字膠囊；buttonSecondary 白底 + `0 0 0 1px rgb(235,235,235)` |
| B-personality | E4 | tone modern、energy medium、targetAudience developers and tech companies |

### Computed style、CSS 變數（C-，E1；未註明者為 1440 寬）

| ID | 等級 | 內容 |
| --- | --- | --- |
| C-body | E1 | GeistSans 16px／24px，#171717 on #FAFAFA |
| C-h1 | E1 | 1440：64px／64px、weight 400、letter-spacing −3.84px、靠左、寬 444；768：64px、**置中**；390：48px／56px、ls −2.88px、置中、寬 342 |
| C-h2 | E1 | 1440：56px／56px、weight 450、ls −3.36px；768：48px／56px、ls −2.88px；390：32px／40px、ls −1.6px |
| C-stat | E1 | 數據句 24px／32px、weight 450、ls −0.96px；前半「Notion powers millions」#171717，後半 #4D4D4D |
| C-features | E1 | 「Features」14px／20px、400、#4D4D4D；功能名稱 14px、500、#171717 |
| C-button.primary | E1 | Deploy now：#171717 底、白字、16px／500、高 40、padding 0 12px、圓角 3.35544e7px（膠囊）、`transition: 0.15s cubic-bezier(0.4,0,0.2,1)` |
| C-button.secondary | E1 | Talk to sales：白底、#171717 字、外框是 `0 0 0 1px rgb(235,235,235)` 的 box-shadow，其餘同上 |
| C-button.header | E1 | Sign Up：#171717 底、14px／500、高 32、圓角 **6px**；Get a Demo／Log In：白底 1px 環 |
| C-nav | E1 | 導覽項目 14px／20px、#4D4D4D |
| C-header | E1 | `sticky top-0`、高 64；scrollY=0 背景透明、無陰影；scrollY=300 與 1200 背景 #FAFAFA、`0 1px 0 rgba(0,0,0,0.08)`；`transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1)` |
| C-focus | E1 | 第一個 Tab 是 Skip link（`0 0 0 2px #fff, 0 0 0 4px rgb(0,114,245)`）；logo focus `outline 2px solid rgb(0,114,245)`、offset 4px |
| C-var | E1 | `:root` 有 `--ds-gray-100…1000`（95%→9% 亮度）、`--ds-gray-alpha-*`、`--ds-blue/red/amber-*` 100–1000、`--ds-background-100` #FFF、`--ds-background-200` #FAFAFA（source/pw/desktop.json `cssVars`） |
| C-card | E1 | Recently shipped 卡片：圓角 6px、底色 #FAFAFA、1px 環形 box-shadow |
| C-layout | E1 | 三段 h2 的 x：24 → 495 → 24；產品圖寬 921，x 分別 24／495；外層 max-width 1448px；頁尾 6 欄每欄寬 212、間距 24 |
| C-btn@390 | E1 | 390 寬：Deploy now、Talk to sales 都寬 342，y=624 與 676（上下堆疊）；768 寬：寬 124／130 並排置中 |
| C-sub@390 | E1 | 390 與 768 的 Hero 副標為 `"Geist Mono"` 16px；1440 改為三行 GeistSans 16px 清單（y=387／419／451） |
| C-menubtn | E1 | 768 與 390：頁首只剩 logo 與 `aria-label="Open menu"` 44×44 按鈕 |
| C-canvas | E1 | 一般動態：canvas 存在（1440 盒 1080×720、768 盒 768×650、390 盒 390×400）；`reducedMotion: reduce`：1440 與 390 都**沒有 canvas** |

### 互動紀錄（I-，Playwright E1，除非註明）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E1 | 載入：先出現平面三角形（hero-seq-00…12）；DOMContentLoaded 後約 3.4 s，canvas 以 `opacity 1200ms linear` 由 0 淡入，之後一個 DIV `opacity 700ms linear`（約 4.8–5.3 s）；三角形周圍出現陰影光暈（hero-seq-14…24，interactions.json `heroLoad`） |
| I-02 | E1 | 閒置時 canvas 持續變化：每 500ms 拍一張共 6 張，相鄰兩張都有差異（canvas-idle-0…5）；肉眼看到陰影方向緩慢移動 |
| I-03 | E1 | 滑鼠移到三角形左上與右下時兩張不同（canvas-mouse-a/b），但閒置本來就在動，無法分辨是否跟隨游標（X-06） |
| I-04 | E1 | 1440 hover Hero 清單「Automated by agents」：該行變成「Automated by agents **who autonomously investigate errors, plan fixes, and open PRs.**」（後半灰），其他兩行變淺；`transition: color 0.5s cubic-bezier(0,0,0.2,1)`（herolist-hover-Automated-full.png） |
| I-05 | E1 | 按鈕 hover：primary #171717→#383838、secondary #FFFFFF→#F2F2F2，hover 當下未變、300ms 後已變（150ms 轉場）；transform 都是 none；導覽連結 #4D4D4D→#171717 立即改變（interactions.json `hover`） |
| I-06 | E1 | hover「Products」：展開三欄 mega menu（Agent Stack／Core Platform／Tools，項目字級明顯大於導覽列），頁面其餘內容變灰；`aria-expanded=true`（nav-products-6.png） |
| I-07 | E1 | Tab 順序：Skip to content → logo → Products → Resources → Enterprise → Pricing（interactions.json `focus`） |
| I-08 | E1 | 在頁面送出 dragenter／dragover（含檔案）：頁首與 Hero 文字消失，三角形下方出現「Drop to deploy」（drag-over.png） |
| I-09 | E1 | 1440 捲到每個 h2 後 0–1.4 s 連拍（desktop-scroll-h20…h26）：畫面無差異、沒有 running 動畫；另兩次 1440 執行中只有 Notion 段（一次）與頁尾一小塊有差異（desktop1440b.json、desktop1440-rm.json `sections`） |
| I-10 | E1 | Logo 列：1440 位置固定（OpenAI x=673，3 秒不變、無動畫）；768 與 390 有兩組 logo，`marquee` 40000ms linear 無限循環，每 500ms 左移約 12.5px（tablet768.json、mobile390.json `logo`） |
| I-11 | E3 | Firecrawl 1920 的 logo 列完整 7 個置中排列（S-d00），768 與 360 的 logo 列從中間被裁切（S-t00、S-m00） |
| I-12 | E1 | 390 Hero 等寬副標：「For coding agents」→「To ship apps and agents」→「Automated by agents」循環，每句停留約 2.7 s，切換時以隨機字母亂碼逐步解出正確文字約 0.5–0.7 s（取樣間隔 200ms；hero-subline-sequence.json） |
| I-13 | E1 | 減少動態（1440 與 390）：沒有任何 Web Animation（`allAnims` 空）、logo 不移動、沒有 canvas、副標固定「For coding agents」不換字（mobile390-rm.json、desktop1440-rm.json、hero-subline-sequence.json） |
| I-14 | E1 | 390 點漢堡：全螢幕選單覆蓋，Products、Resources 為可展開項（右側箭頭），Enterprise、Pricing；下方全寬 Get a Demo／Log In／**Sign Up（黑底）** 上下堆疊；漢堡變 ×；`aria-expanded` false→true（mobile390-menu-*.png） |
| I-15 | E1 | 減少動態的 390 開選單時可量到 `visibility 150ms cubic-bezier(0.4,0,0.2,1)`（mobile390-rm.json `menuFrames`） |
| I-16 | E1 | 1440 hover「Passport」卡片：光暈 `opacity 1000ms cubic-bezier(0,0,0.2,1)` 與 `passport-glow-ellipse-x 1200ms linear` 開始執行（desktop-details.json `cardHoverAnims`） |
| I-17 | E1 | 載入第 0 張（約 0.3 s）標題用襯線備援字，第 1 張起換成 GeistSans（desktop-load-00/01.png） |

### 缺口（X-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| X-01 | — | Firecrawl 1920 截圖 y≥2716 空白（`blank` 延伸到底），Zapier 之後無法用這張當證據；改用 Playwright 視窗截圖 S-pwd-sec |
| X-02 | — | Firecrawl 360 截圖 y≥2448 空白（延伸到底）；改用 Playwright 390 視窗截圖 S-pwm-sec |
| X-03 | — | Playwright 1440 fullPage 截圖即使先捲過整頁，y≥2532 仍空白；只有逐段視窗截圖可用 |
| X-04 | — | 三次 1440 執行中有一次（desktop1440b）字族回報為 `Inter, -apple-system…`、h2 寬 561（其他兩次 GeistSans、673）。原因未知（實驗分流或字型載入），該次字型數值不採用 |
| X-05 | — | Hero 清單前兩行的 hover 定位逾時，只有第三行有 hover 紀錄（I-04） |
| X-06 | — | canvas 是否跟隨游標無法判定（I-03） |
| X-07 | — | 寬度不一致：Firecrawl 1920／768／360 對 Playwright 1440／768／390。版面描述只在同寬度內比較；手機數值以 390 的 C- 為準 |
| X-08 | — | 深色模式沒有擷取（`color-scheme: dark light`、有 dark 圖片，H-02、H-03），不在本次範圍 |
| X-09 | — | markdown 沒有 h1「Agentic Infrastructure」與 Hero 清單，這兩者只有 C- 與截圖證據 |
| X-10 | — | 副標亂碼解碼只以 200ms 取樣，沒有量到逐字的時長與 easing |
| X-11 | — | 頁面沒有表單；錯誤／成功狀態、載入狀態（除了 M-L9 的「Loading」字串）都看不到 |
| X-12 | — | 平板 768 沒有做 hover／選單以外的互動；平板的 canvas、marquee 結論只來自 tablet768.json |
