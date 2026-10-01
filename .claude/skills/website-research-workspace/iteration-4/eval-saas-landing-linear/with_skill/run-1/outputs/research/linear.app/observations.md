# Linear 首頁 觀察紀錄

- **網址**：https://linear.app
- **研究日期**：2026-10-01
- **研究頁面**：首頁（整頁，從導覽列到頁尾）
- **擷取方式**：Firecrawl（三個寬度皆 `maxAge: 0`，即時抓取）＋ Playwright／Chromium（1440×900、768×1024、390×844；E1 證據）。`curl -sI https://linear.app` 回 HTTP/2 200，網站可直連。

## 0. 網站背景（Context）

只寫有來源的事實，不評價設計。

- **網站是誰**：Linear，產品開發／專案管理工具（M-L3「The product development system for teams and agents」；meta title「Linear – The system for product development」，見 source/branding.json `metadata`）。
- **頁面任務**：讓訪客理解產品的四大能力並註冊或聯絡業務。主要 CTA 是「Sign up」（導覽列）與頁尾前的「Get started」「Contact sales」（M-L600）；次要路徑是各段的「Learn more→」（M-L129、L265、L389、L439）。
- **目標使用者**：[O] 文案對象是「product teams」「modern teams with AI workflows」（M-L94、M-L594）；[H] 主要是軟體團隊的工程與產品角色——示範內容全是 issue 編號、PR、程式碼 diff（M-L441–534）。
- **研究重點**：使用者想「學它的設計語言」，之後做自己產品官網時參考。因此重點放在：視覺語言（色彩、字體、版面）、反覆出現的區塊結構、動態手法與它們的功能，以及可推論的 tokens。

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×10024 | 2026-10-01，maxAge 0 | Firecrawl 預設桌機寬度 |
| screenshots/tablet.png | 768 | 768×9525 | 2026-10-01，maxAge 0 | viewport 768×1024 |
| screenshots/mobile.png | 360 | 360×5908 | 2026-10-01，maxAge 0 | `mobile: true`；寬度 360（Firecrawl 預設） |
| source/page.md | — | 600 行 | 2026-10-01，maxAge 0 | Firecrawl markdown（桌機請求） |
| source/branding.json | — | — | 同上 | Firecrawl branding；logo 的 SVG data URI 已省略（檔內註明） |
| source/links.json | — | 19 筆 | 同上 | Firecrawl links |
| source/pw/computed.json | 1440 | — | 2026-10-01 | Playwright `getComputedStyle`、@keyframes、media queries、字型載入 |
| source/pw/states.json | 1440 | — | 2026-10-01 | hover 前後、鍵盤 focus、header 捲動前後、點擊「+」結果 |
| source/pw/responsive.json | 1440／768／390 | — | 2026-10-01 | 三寬度的字級、區塊高度與顯示狀態 |
| screenshots/pw/hover-*.png | 1440 | 裁切 | 2026-10-01 | 9 組 hover 前後 |
| screenshots/pw/focus-*.png | 1440 | 裁切 | 2026-10-01 | Tab 鍵 focus |
| screenshots/pw/scroll-*.png | 1440 | 1440×900 | 2026-10-01 | 14 個捲動位置 |
| screenshots/pw/hero-load-*.png | 1440 | 1440×900 | 2026-10-01 | 從 `commit` 起每 500ms 一張，共 12 張（約 6 秒） |
| screenshots/pw/seq-{figs,intake,planning,ai,build}-*.png | 1440 | 1440×900 | 2026-10-01 | 捲到各段後每 500ms 一張，各 10 張 |
| screenshots/pw/rm-*.png | 1440 | 1440×900 | 2026-10-01 | `reducedMotion: 'reduce'` 下的同樣序列 |
| screenshots/pw/nav-product-hover.png、feature-click.png、m390-*.png | — | — | 2026-10-01 | 導覽下拉、功能「+」點擊、手機 390 |

速率限制：未遇到。

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 2.1 截圖分段（S-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | 桌機 y=0–2200：頂部導覽（logo 左；Product／Resources／Customers／Pricing／Now／Contact、分隔線、Log in、白色膠囊 Sign up 靠右）；Hero 標題兩行靠左、副標一行；右側同一基線有「New Loops →」；下方一張大型產品介面截圖（側欄＋issue 詳情＋右側 Linear agent 面板），下緣有灰色光暈底板；客戶 logo 一列（OpenAI、Vercel、Salesforce、Figma、Cursor、Coinbase、Ramp），其下一行等寬小字「POWERING THE COMPANIES BUILDING THE FUTURE」；宣言式 H2「A new species of product tool.」前半白、後半灰；三欄 Fig 0.1–0.3 線框立體插圖開頭 |
| S-d01 | E3 | 桌機 y=2200–4400：三欄 Fig 卡片文字（標題＋兩行說明），欄間有細直線；整寬細橫線分段；「Intake and integrations」段：左 H2（兩行）、右大字說明＋「Learn more →」；下方 Slack 風格 thread 卡疊在 issue 看板上，看板右側漸隱；「Features」小標＋兩欄「Linear Agent +」「Triage +」「Customer Requests +」「Linear Asks +」；「Planning and monitoring」段開頭，同樣左 H2／右說明＋Learn more；時間軸與「Cycle time by agent」散點圖 |
| S-d02 | E3 | 桌機 y=4400–6600：規劃段散點圖（青綠色點）與時間軸；Features 清單（Projects、Pulse、Visual planning、Documents、Initiatives、Insights）；「AI and automations」段（同結構）；四個並排的 agent 視窗（Cursor／Linear／ChatPRD…），兩側視窗被裁切並變暗；Features 清單；「Build, review, and ship」段開頭 |
| S-d03 | E3 | 桌機 y=6600–8800：issue 清單（In Review／In Progress／Todo）與程式碼 diff 視窗（紅綠底標示行）；Features 清單；「Changelog」H2，四欄時間軸（第一個點紅色、其餘灰色）、標題、兩行摘要、等寬日期；「View all →」；兩張見證卡：左張淡藍紫漸層底＋大型淡色 logo 浮水印、右張螢光黃綠底，深色大字引言＋左下 logo、姓名、職稱 |
| S-d04 | E3 | 桌機 y=8800–10024：「Linear powers over 40,000 product teams…」一行＋右側「Customer stories →」；置中大標「Built for the future. Available today.」兩行；淺色膠囊「Get started」＋深色膠囊「Contact sales」；細線分隔後頁尾：logo＋五欄連結（Product／Features／Company／Resources／Connect）；最下 Privacy／Terms／DPA／AUP |
| S-t00 | E3 | 平板 y=0–2200：導覽只剩 logo、Log in、Sign up、漢堡選單；H1 兩行占滿寬；副標斷成兩行；「New Loops →」改到副標下方靠左；產品截圖右側被裁切；logo 列從左側被截斷（ma…）；宣言 H2 縮小、四行；Fig 卡片改成有底色的卡片並橫向排列、第三張被裁切 |
| S-t01 | E3 | 平板 y=2200–4400：Intake 段 H2、說明、Learn more 改為上下堆疊；thread 卡＋看板（看板右側被裁切）；Features 兩欄清單保留；Planning 段同樣堆疊；散點圖 |
| S-t02 | E3 | 平板 y=4400–6600：Features 清單；AI 段堆疊；agent 視窗只剩兩個可見；Features；Build 段堆疊；issue 清單＋diff 視窗 |
| S-t03 | E3 | 平板 y=6600–8800：Features 清單；Changelog 畫面上可見兩欄（New controls…、Loops…），右側沒有露出第三欄；見證卡變成三張橫向排列，第三張（藍底）被裁切；**沒有**「40,000」那行；置中結尾 CTA |
| S-t04 | E3 | 平板 y=8800–9525：頁尾連結改成三欄兩列（第二列 Resources／Connect／Legal），Legal 從底部列改成一欄 |
| S-m00 | E3 | 手機 y=0–2200：導覽 logo＋Log in＋Sign up＋漢堡；H1 四行；副標兩行；New Loops；產品截圖縮小（完整可見）；logo 列截斷；宣言 H2 六行；Fig 卡片只見第一張（右側露出下一張邊緣）；thread 卡（Intake 的視覺）出現在 Intake 標題**之前** |
| S-m01 | E3 | 手機 y=2200–4400：每段都是「視覺 → H2 → 說明 → Learn more」；**沒有** Features 清單；AI 段視覺是「Assign to…」清單（Codex、Steven、Ema、GitHub Copilot、Cursor），和桌機的 agent 視窗不同；Build 段視覺是程式碼視窗；見證卡開頭 |
| S-m02 | E3 | 手機 y=4400–5908：見證卡（第二張只露邊）；**沒有** Changelog、沒有「40,000」行；置中 CTA；頁尾連結兩欄多列 |

### 2.2 像素取樣（P-）

座標為 screenshots/desktop.png（1920 寬）原圖座標，`capture_tools.py sample`。

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | (50,50) = #090909，導覽列背景 |
| P-02 | E3 | (100,600) = #070909，Hero 背景 |
| P-03 | E3 | (30,1300) = #424447，產品截圖下方光暈底板邊緣 |
| P-04 | E3 | (960,1300) = #787B80，光暈底板中央（最亮處） |
| P-05 | E3 | (100,2000) = #08090A，Fig 區背景 |
| P-06 | E3 | (800,8500) = #DBE4FF，OpenAI 見證卡底色 |
| P-07 | E3 | (1400,8500) = #E4F222，Ramp 見證卡底色 |
| P-08 | E3 | (690,3474) = #6873D4，Slack 示意圖送出鈕 |
| P-09 | E3 | (324,7844) = #EB5757，Changelog 時間軸第一個點 |
| P-10 | E3 | (1200,9900) = #08090A，頁尾背景 |

### 2.3 Branding 自動萃取（B-，E4）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colorScheme | E4 | dark |
| B-colors.primary | E4 | #5E6AD2 |
| B-colors.accent | E4 | #E4F222（同時被標成 link 色） |
| B-colors.background | E4 | #08090A |
| B-colors.textPrimary | E4 | #08090A（與背景同色，明顯是誤判；畫面文字是 rgb(247,248,248)，見 C-body） |
| B-colors.secondary | E4 | #D0D6E0 |
| B-typography | E4 | 字族 Inter（body）、SF Pro Display（heading）；h1 64px、h2 48px、body 15px |
| B-spacing | E4 | baseUnit 4、borderRadius 8px |
| B-buttonPrimary／Secondary | E4 | 主按鈕 #E5E5E6 底、#08090A 字、9999px 圓角；次按鈕 #141516 底、#F7F8F8 字、9999px 圓角、內陰影描邊 |

### 2.4 Computed style（C-，E1，Playwright 1440×900）

| ID | 等級 | 內容 |
| --- | --- | --- |
| C-body | E1 | font-family "Inter Variable", "SF Pro Display", -apple-system…；16px／24px；color rgb(247,248,248)；background rgb(8,9,10)；`font-feature-settings: "cv01", "ss03"` |
| C-fonts | E1 | `document.fonts` 已載入：Inter Variable（100–900）、Berkeley Mono（100–900） |
| C-h1 | E1 | 64px／64px（行高 1.0）、字重 510、letter-spacing −1.408px（−0.022em）、rgb(247,248,248)；兩行靠左，x=78 |
| C-h2.manifesto | E1 | 「A new species…」48px／48px、510、−1.056px；整體色 rgb(138,143,152)，前半句另外是白色（S-d00） |
| C-h2.section | E1 | 四個功能段與 Changelog：48px／48px、510、−1.056px、rgb(247,248,248)；寬 542px |
| C-h2.prefooter | E1 | 「Built for the future…」72px／72px、510、−1.584px，置中 |
| C-h3.ui | E1 | 產品截圖內「Faster app launch」20px、590、rgb(208,214,224) |
| C-h3.footer | E1 | 頁尾欄標題 13px／19.5px、510、−0.13px、白 |
| C-p.hero | E1 | Hero 副標 15px／24px、400、−0.165px、rgb(138,143,152) |
| C-p.section | E1 | 段落說明 24px／31.92px（1.33）、400、−0.288px、rgb(208,214,224)，x=752（右欄） |
| C-mono | E1 | 「FIG 0.1」、logo 列標語、Changelog 日期：Berkeley Mono 12px／16.8px；顏色 rgb(138,143,152) 或 rgb(98,102,109) |
| C-nav | E1 | 導覽項目 13px、400、rgb(138,143,152)、高 32px、padding 0 12px、圓角 9999px；transition color／background 0.1s cubic-bezier(0.25,0.46,0.45,0.94) |
| C-button.signup | E1 | 13px、510、高 32px、padding 0 12px、背景 rgb(229,229,230)、字 rgb(8,9,10)、1px 同色邊、圓角 9999px、五層極淡陰影；transition 0.16s 同一條 cubic-bezier（border、background-color、color、box-shadow、opacity、filter、transform） |
| C-button.primary | E1 | 「Get started」16px、510、高 44px、padding 0 20px，其餘同 Sign up |
| C-button.secondary | E1 | 「Contact sales」16px、510、高 44px、背景 rgba(255,255,255,0.05)、字 rgb(247,248,248)、圓角 9999px、陰影：白 3% 內描邊＋白 4% 頂部內光＋黑 60% 外描邊＋黑 10% 4px 投影 |
| C-link.learnmore | E1 | 「Learn more→」16px／24px、400 |
| C-link.footer | E1 | 頁尾連結 13px、rgb(138,143,152)、transition color 0.1s |
| C-header | E1 | `position: fixed`、高 73px、背景透明、`backdrop-filter: blur(20px)`、底線 1px rgba(255,255,255,0.08)；捲動到 y=1200 後數值不變 |
| C-layout | E1 | 主容器 max-width 1436px、左右 padding 46px；功能段 `section` 寬 1344px、上下 padding 128px；段內為 `grid-template-columns: 672px 672px`；標題欄內縮 32px，標題 x=78、說明 x=752 |
| C-sections | E1 | 四個功能段高度 1226／1229／1232／1220px；Changelog H2 y=7644；見證區 y=8226、高 564；prefooter y=9014、高 228 |
| C-keyframes | E1 | 99 組 @keyframes，包括 `grid-dot-{r}-{c}-upDown／pong／agent`（5×5 點陣動畫）、fadeIn／fadeOut、slideFrom{Top,Bottom,Left,Right}、dialogOpen／dialogClose、highlight |
| C-media | E1 | media queries：max-width 1280／1024／768／640／600；`(hover: hover) and (pointer: fine)`、`(hover: none) and (pointer: coarse)`；`prefers-reduced-motion`（共 6 條規則，例如圖表的 `.K64U9a_line…{transition:none}`、`.ISg3cq_chips{display:none}`、smooth-scroll 只在 no-preference 時啟用） |
| C-vars | E1 | `:root` 上只找到 tweet 嵌入元件的 CSS 變數（`--tweet-*`）以及 `--ink-a: #7b83eb`、`--ink-b: #deb949`；網站本身的色彩變數沒有掛在可讀取的 `:root` 規則上（見 X-05） |
| C-resp.768 | E1 | 768：H1 56px／61.6px；功能段 H2 40px／44px；宣言 H2 32px／36px；結尾 H2 40px；功能段 padding 48px；見證區 `.hide-laptop` 為 display:none（改用另一個輪播元件，見 S-t03） |
| C-resp.390 | E1 | 390：H1 38px／41.8px；功能段與宣言 H2 24px／31.92px；結尾 H2 38px；功能段 padding 0、display:flex；Changelog H2 寬高為 0（隱藏）；Features 清單按鈕高 0（隱藏）；Intake 段的 thread 卡 y=1707 早於該段 H2 y=2251 |
| C-resp.cta | E1 | 「Get started」在三個寬度都是 16px、高 44px、寬 127px（不隨寬度縮放） |

### 2.5 頁面文字（M-，E2，source/page.md 行號）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L3 | E2 | H1「The product development system for teams and agents」，重複出現 3 種斷行版本（不同寬度用的標題變體） |
| M-L5 | E2 | 副標「Purpose-built for planning and building products. Designed for the AI era.」 |
| M-L7 | E2 | 「New Loops →」重複兩次（兩種寬度變體） |
| M-L13–90 | E2 | Hero 產品介面內的假資料（issue「Faster app launch」、Activity、agent 對話、Properties） |
| M-L92 | E2 | 「Powering the companies building the future」 |
| M-L94 | E2 | H2「A new species of product tool.」＋同一句後半段 |
| M-L96–122 | E2 | 三個價值主張（Purpose-built／Powered by agents／Designed for speed），各有「Fig 0.x」編號，並出現兩次（兩種排版變體） |
| M-L125–129 | E2 | 「Intake and integrations」＋說明＋Learn more |
| M-L251–259 | E2 | 「Features」＋四個「…+」項目（Intake 段） |
| M-L261–265 | E2 | 「Planning and monitoring」＋說明＋Learn more |
| M-L371–383 | E2 | Features＋六項（Planning 段） |
| M-L385–389 | E2 | 「AI and automations」＋說明＋Learn more |
| M-L425–433 | E2 | Features＋四項（AI 段） |
| M-L435–439 | E2 | 「Build, review, and ship」＋說明＋Learn more |
| M-L471、L477、L485 | E2 | 「Working…Working…」狀態文字（Build 段 issue 清單） |
| M-L538–550 | E2 | Features＋六項（Build 段） |
| M-L552–578 | E2 | Changelog 四則＋「View all→」 |
| M-L580–592 | E2 | 見證引言：第一組 3 則（L580–586；OpenAI、Ramp、Opendoor，只有公司名）、第二組 2 則（L588–592；含職稱） |
| M-L594–596 | E2 | 「Linear powers over **40,000** product teams…」＋「Customer stories→」 |
| M-L598–600 | E2 | 「Built for the future. Available today.」＋ Get started／Contact sales／Open app／Download |

### 2.6 原始碼／檔名線索（H-，E2）

| ID | 等級 | 內容 |
| --- | --- | --- |
| H-01 | E2 | 產品畫面圖片皆由 `linear.app/cdn-cgi/imagedelivery/...` 提供，Hero 兩張寬 2560（M-L9、L11）；Hero 介面的文字是真實 DOM 文字（M-L13–90 可被抓到），不是單張圖片 |
| H-02 | E2 | class 名稱為雜湊前綴（`b-30Va_root`、`_7bwwmq_homepage`、`Dc5tqa_container hide-laptop`、`dYXc1G_homepagePrefooter`），可見 CSS modules 類工具與 `hide-laptop` 這類顯示工具類 |
| H-03 | E2 | meta `theme-color: #08090a`；`apple-mobile-web-app-status-bar-style: black` |
| H-04 | E2 | 導覽下拉（Product）內容：Intake／Plan and monitor／AI and automations／Build, review and ship，各附一行說明；右欄 Integration directory、Changelog、Mobile、Security；底部「New  New controls for Linear coding agent」＋Learn more（screenshots/pw/nav-product-hover.png） |

### 2.7 互動紀錄（I-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E1 | hover「Sign up」「Get started」：背景 rgb(229,229,230) → rgb(255,255,255)，其餘不變（hover-signup、hover-getStarted） |
| I-02 | E1 | hover「Contact sales」：背景 rgba(255,255,255,0.05) → rgb(25,26,27) |
| I-03 | E1 | hover 導覽項目（Log in、Pricing）：字色 rgb(138,143,152) → rgb(247,248,248)，背景透明 → rgba(255,255,255,0.08) 膠囊 |
| I-04 | E1 | hover 頁尾連結：字色 rgb(138,143,152) → rgb(247,248,248)，無底線、無背景 |
| I-05 | E3 | hover「Learn more →」與 Features「Linear Agent +」：截圖上文字與「+」變亮（hover-learnMore、hover-featureLinearAgent）；computed style 在外層元素上沒有變化，變化在子元素上 |
| I-06 | E1 | 所有量到的 hover 都沒有 transform、位移或陰影變化 |
| I-07 | E1 | 鍵盤 Tab：第一個焦點是「Skip to content →」（藍底 rgb(94,106,210) 整列橫條）；之後焦點元素 outline 1px rgb(94,105,209)、offset 2px（focus-0、focus-2） |
| I-08 | E1 | hover 導覽「Product」：出現下拉面板，深灰底、圓角、細框，兩欄四項＋右欄連結（H-04） |
| I-09 | E1 | 點擊 Features「Linear Agent +」：右側滑出 `role="dialog"` 面板，標題列等寬小字「TECH SPECS」、大標「Linear Agent」、說明、示意圖、「LINEAR AGENT IN SLACK」、Integrations 表格；背景頁變暗（feature-click.png） |
| I-10 | E1 | Hero 進場（hero-load-00～05）：0–1 秒只有導覽列；約 1.5 秒 H1 與副標出現、產品介面以低不透明度浮現；約 2 秒介面清楚；約 2.5 秒「New Loops →」出現；約 3 秒右側 agent 面板出現並開始對話；frame diff 範圍 y=280–900 |
| I-11 | E1 | reducedMotion: reduce（rm-hero-load）：前 3.5 秒全黑（只有導覽列），約 4 秒時 H1、介面、agent 面板一次出現，agent 面板直接是完成狀態「Worked for 10 sec」；之後 frame diff 為 0 |
| I-12 | E1 | AI 段（seq-ai）：中間 Linear agent 視窗內容每隔數秒替換：提示「Review today's mobile triage…」→ 結果 → 清空 → 新提示「Fix the dimmed ride rows…」→「Thinking…」→「Worked for 10 sec」＋變更檔案卡；兩側視窗保持變暗。reduced motion 下（rm-seq-ai）6 張之間 diff ≤ 69px，近乎靜止 |
| I-13 | E1 | Intake 段（seq-intake）：輸入框文字游標每約 1 秒閃爍（diff 區 2×21px）；reduced motion 下仍閃爍 |
| I-14 | E1 | Fig 區（seq-figs）：Fig 0.2 範圍內每 500ms 有 17–49px 的小變化（對應 `grid-dot-*` keyframes）；reduced motion 下仍有 21–66px 的變化 |
| I-15 | E1 | Planning、Build 段捲入後 5 秒內 frame diff 為 0（在 0.9 秒等待之後才開始拍） |
| I-16 | E1 | header 在頂部與捲動後的 computed style 相同（C-header），沒有捲動後變色或縮小 |

### 2.8 缺口（X-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| X-01 | — | `capture_tools.py blank` 在桌機回報 y=2404–2740 與 y=7412–7716 兩段單色區；兩段都在內容之間（區塊 padding），沒有延伸到截圖底部，不影響證據使用；平板、手機無空白 |
| X-02 | — | Firecrawl 全頁截圖是進場動畫結束前後的某個狀態：AI 段 agent 視窗在 desktop.png 內大多是空的（S-d02），而 Playwright 捲入後會播放內容（I-12）；全頁截圖不能代表動畫中的狀態 |
| X-03 | — | 捲入各段時是否有淡入／位移：Playwright 在捲動後等 0.9 秒才開始拍（I-15），可能錯過進場；未做逐格（<100ms）錄影 |
| X-04 | — | 手機漢堡選單展開狀態未取得（Playwright 點到的是 Hero 介面內的按鈕，m390-menu-open.png 沒有選單） |
| X-05 | — | 網站自己的設計 tokens（CSS 變數）沒有在可讀取的 `:root` 規則中找到；tokens 只能從 computed 值反推 |
| X-06 | — | Firecrawl 手機（360）與 Playwright 手機（390）的 Hero 產品介面呈現不同：前者整個介面縮小可見（S-m00），後者只露出右半部與 agent 面板（m390-menu-open.png）。未確認是寬度斷點差異還是 UA 差異 |
| X-07 | — | 見證區有兩套元件（M-L580 三則、M-L588 兩則；C-resp.768 `.hide-laptop`），各寬度顯示哪一套只部分確認（1440 兩張、768 三張輪播）；輪播是否自動播放未觀察 |
| X-08 | — | disabled、error、loading 狀態：首頁沒有表單，未觀察 |
| X-09 | — | 只有暗色模式；`prefers-color-scheme: dark` media query 存在（C-media），但未測試亮色系統設定下是否改變 |
| X-10 | — | 沒有 A/B 跡象：三次 Firecrawl 請求的 sentry-release 都是 linear-web@1.79935.0，三寬度文案一致；M-L3、L7、L96–122 的重複是同一頁的響應式變體，不是實驗 |
