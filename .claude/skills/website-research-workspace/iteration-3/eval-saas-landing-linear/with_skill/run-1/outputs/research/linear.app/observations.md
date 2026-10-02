# Linear 首頁觀察紀錄

- **網址**：https://linear.app
- **研究日期**：2026-10-01
- **研究頁面**：首頁（整頁，從導覽列到頁尾）
- **擷取方式**：Firecrawl `firecrawl_scrape`，三次請求都加 `maxAge: 0`（即時抓取）；網站直連被網路政策擋下（`curl -sI` 回 403），所以沒有 Playwright 的 computed style 與互動紀錄（X-01）

## 0. 網站背景（Context）

只寫有來源的事實，不評價設計。

- **網站是誰**：Linear，一套產品開發工具；頁面標題「Linear – The system for product development」，meta description「Purpose-built for planning and building products with AI agents.」（B-metadata.title、M-L3、M-L5）
- **頁面任務**：讓訪客註冊（`Get started` → /signup）或聯絡業務（`Contact sales`），次要出口為登入、下載、深入四個產品領域頁（/intake、/plan、/ai、/build）（M-L129、M-L265、M-L389、M-L439、M-L600）
- **目標使用者**：[O] 文案明確寫「teams and agents」「product teams」「From ambitious startups to major enterprises」（M-L3、M-L594）；[H] 主要讀者是工程與產品團隊的決策者與使用者，因為示範內容全是 issue、PR、diff、code review（M-L443–534）
- **研究重點**：使用者想學 Linear 首頁的「設計語言」，以便日後設計自己產品官網時參考。因此本研究偏重可遷移的模式與原則，並附上設計系統推論；使用者沒有要求實作，所以不做實作交接。

## 1. 擷取清單

| 檔案 | 寬度 | 尺寸 | 時間／快取 | 備註 |
| --- | --- | --- | --- | --- |
| screenshots/desktop.png | 1920 | 1920×10024 | 2026-10-01，maxAge 0 | 與 markdown／branding／links 同一次請求；Firecrawl 回報有排隊（concurrency throttled，約 6.7 秒），內容未受影響 |
| screenshots/tablet.png | 768 | 768×9525 | 2026-10-01，maxAge 0 | viewport 768×1024 |
| screenshots/mobile.png | 360 | 360×5908 | 2026-10-01，maxAge 0 | `mobile: true`；同樣有排隊約 5 秒 |
| source/page.md | — | — | 同桌機請求 | Firecrawl markdown，共 600 行；只有桌機版本（X-06） |
| source/branding.json | — | — | 同桌機請求 | Firecrawl branding；logo 的 data URI 以摘要取代 |
| source/links.json | — | — | 同桌機請求 | 19 個連結 |

`capture_tools.py blank` 結果：桌機 y=2404–2740、y=7412–7716 兩段單色區，都**沒有**延伸到截圖底部，切圖確認是區塊之間的留白（見 S-d01、S-d03）；平板與手機沒有偵測到大段空白。所以整頁截圖都可以當證據使用。

切圖比例：所有 `_slices/` 分段都縮成 0.5 倍；下表的 y 範圍一律是**原圖座標**。另有 `_slices/dz-*.png`（桌機原尺寸局部）與 `_slices/mz-*.png`（手機原尺寸局部）供量測。

## 2. 證據清單（只記錄看到什麼，不寫解讀）

### 2.1 截圖分段（S-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| S-d00 | E3 | 桌機 y=0–2200。y=0–72 導覽列：左 Linear 標誌，右側 Product／Resources／Customers／Pricing／Now／Contact 六個灰字項目、一條直線分隔、Log in（灰字）、Sign up（淺灰膠囊按鈕）；導覽列底部有 1px 線。y≈280–400 靠左大標題兩行「The product development / system for teams and agents」，白字；y≈443 灰色副標，同一行最右側「New　Loops →」。y≈530–1245 一張完整的產品 UI 截圖（左側邊欄＋issue「Faster app launch」＋右側 Linear agent 對話框顯示「Thinking...」），UI 底下有一圈由中央往外的灰色光暈（y≈1000–1360，左右延伸到接近全寬）。y≈1470–1510 七個客戶 logo 單行（OpenAI、Vercel、Salesforce、Figma、Cursor、Coinbase、Ramp），全為白色單色；下方小字等寬大寫「POWERING THE COMPANIES BUILDING THE FUTURE」。y≈1660–1800 三行大字陳述，前半「A new species of product tool.」白色、後半灰色。y≈1940 起三欄「FIG 0.1／0.2／0.3」等寬小標＋線框 3D 插畫（疊層方塊、立方體群、直立薄片），欄間有細直線。 |
| S-d01 | E3 | 桌機 y=2200–4400。y≈2340–2400 三欄卡片的標題（Purpose-built／Powered by agents／Designed for speed）與兩行灰字說明。y=2404–2740 留白，y≈2568 一條全寬細線。y≈2740–2830 左欄兩行標題「Intake / and integrations」，右欄（x≈992 起）三行較大的淺灰說明文字＋「Learn more →」。y≈2960–3520 產品 UI 組合：左前方是 Slack 風格「Thread #product」對話框（三則訊息＋「@Linear create issues and assign to me」輸入框，送出鈕紫色），後方是看板（Todo 71、In Progress 3、Done，最左與最右欄淡出）。y≈3650–3700 一列「Features」標籤（左）＋兩欄項目各附「+」：Linear Agent、Triage｜Customer Requests、Linear Asks，兩欄之間有細直線。y≈3838 全寬細線。y≈3980 起「Planning / and monitoring」同樣左標題右說明。 |
| S-d02 | E3 | 桌機 y=4400–6600。y≈4400–4800 Planning 的產品畫面：左側時間軸（Split fares、Autonomy telemetry reliability 等專案條），右側「Cycle time by agent」青綠色散點圖，散點群間有紅橘色細線；整個畫面四周淡出。y≈4876–4932 Features 列（Projects、Pulse、Visual planning｜Documents、Initiatives、Insights）。y≈5076 全寬細線。y≈5220–5300「AI and / automations」左標題右說明＋Learn more。y≈5536–6090 四個並排的對話視窗（左右兩個被裁切淡出；可辨識標題列「Cursor」「Linear Opus 5」「ChatPRD」），每個視窗上方有一則使用者訊息與「added to context」標記，下方大部分是空的深色面。y≈6146 Features 列（Linear Agent、Triage｜Coding sessions、Linear MCP）。y≈6318 全寬細線。y≈6450–6540「Build, review, / and ship」左標題右說明。 |
| S-d03 | E3 | 桌機 y=6600–8800。y≈6700–7280 左側 issue 清單（In Review 3 綠色圖示、In Progress 4 黃色圖示、Todo 4 空心圓，下方列逐漸變暗），右側 code diff 視窗「kinetic-ios/src/screens/Home/HomeScreen.tsx」左右兩欄、刪除行紅底、新增行綠線、程式碼有語法上色。y≈7346 Features 列（Issues、Guided reviews、Diffs｜Git automations、Cycles、Releases）。y=7412–7716 留白（無分隔線）。y≈7730「Changelog」標題（單欄、靠左）。y≈7844 一條水平時間線，四個圓點，第一個是紅色、其餘灰色；下方四欄：粗體標題、兩行灰字摘要（以「...」截斷）、等寬大寫日期（SEP 24, 2026 等）。y≈8116「View all →」。y≈8300–8780 兩張見證卡：左寬卡（約 2/3 寬）淺藍到淺紫漸層底＋OpenAI 大型浮水印，黑字引言；右窄卡亮黃綠底，黑字引言；兩張卡的底部都是 logo＋姓名＋職稱。 |
| S-d04 | E3 | 桌機 y=8800–10024。y≈8840 一行「Linear powers over **40,000** product teams…」（40,000 為白字，其餘灰）＋右側「Customer stories →」。y≈9080–9220 置中兩行大字「Built for the future. / Available today.」。y≈9284 兩顆置中膠囊按鈕：「Get started」淺灰底深色字、「Contact sales」深灰底白字。y≈9530 全寬細線。y≈9590–10060 頁尾：左側只有 logo 符號，右側五欄（Product、Features、Company、Resources、Connect），欄標白字、連結灰字；最底一列 Privacy／Terms／DPA／AUP 灰字。 |
| S-t00 | E3 | 平板 y=0–2200。導覽列只剩 logo、Log in、Sign up 膠囊、漢堡選單圖示。大標題兩行靠左（行距約 64px），副標斷成兩行，「New Loops →」移到副標下方獨立一行。產品 UI 截圖從左邊距開始、右側被裁切出畫面（agent 面板看不到）。客戶 logo 列左右兩端都被裁成半個字（「se」「co」），順序與桌機不同（ramp、OpenAI、Vercel…）。陳述段四行。FIG 三張卡改成有外框的卡片並排，第三張被右緣裁切。 |
| S-t01 | E3 | 平板 y=2200–4400。「Intake / and integrations」標題在上、說明在下（單欄堆疊），Learn more。Thread 對話框在左、看板在後方右側被裁切；時間顯示「6:42 AM」。Features 列改為：標籤在上，兩欄項目在下。「Planning / and monitoring」單欄堆疊。產品畫面只有「Cycle time by agent」散點圖，沒有時間軸。 |
| S-t02 | E3 | 平板 y=4400–6600。Planning Features 列。「AI and / automations」單欄。只顯示兩個對話視窗（左側一個標題被切掉、右側「Linear Opus 5」），內容與桌機同位置不同（左窗是 Cursor 的訊息）。AI Features 列。「Build, review, / and ship」單欄。issue 清單＋code diff，diff 內容是 `CodeReview` / `<Diff.Provider>` 那段，而不是桌機的 HomeScreen.tsx。 |
| S-t03 | E3 | 平板 y=6600–8800。Build Features 列。「Changelog」＋時間線只顯示兩則（New controls…、Loops for product management），時間線延伸到右緣。View all。見證卡三張並排：OpenAI（淺藍紫漸層）、Ramp（黃綠）、第三張亮藍底被右緣裁切（可見「Linear i… just exc…」）。沒有「Linear powers over 40,000」那一行。置中 CTA 標題與兩顆按鈕。 |
| S-t04 | E3 | 平板 y=8800–9525。頁尾：logo 在左，右側 3 欄 × 2 列（Product、Features、Company／Resources、Connect、Legal），Legal 從桌機的底列改成一欄。 |
| S-m00 | E3 | 手機 y=0–2200。導覽列：logo、Log in、Sign up 膠囊、漢堡圖示。大標題四行靠左（約 40px 字、24px 左邊距）；副標兩行；「New Loops →」獨立一行。產品 UI 截圖整張縮小放進畫面寬度（不裁切，左右各約 10px 邊距）。logo 列兩端被裁切。陳述段 7 行。FIG 卡片一次一張（Purpose-built），右緣露出下一張的邊。y≈1940 起已經出現 Intake 的 Thread 對話框，**在 Intake 標題之前**。 |
| S-m01 | E3 | 手機 y=2200–4400。y≈2340–2400「Intake / and integrations」標題、說明、Learn more；沒有 Features 列。下一段先出現時間軸（UI Refresh、Autonomy status clarity）畫面，然後才是「Planning / and monitoring」標題。接著是「Assign to...」下拉選單畫面（Codex Agent、Steven、Ema、GitHub Copilot Agent、Cursor Agent），然後「AI and / automations」標題。再來是 code 視窗（註解「A slow and fragmented code review experience」與 `CodeReview` 程式），然後「Build, review, / and ship」。所有段落都沒有 Features 列。沒有 Changelog。 |
| S-m02 | E3 | 手機 y=4400–5908。一張 OpenAI 見證卡佔滿寬度，右緣露出黃綠卡的邊。沒有「40,000」那一行。置中 CTA 標題兩行、兩顆按鈕並排。頁尾 2 欄 × 3 列（Product、Features／Company、Resources／Connect、Legal），logo 符號不在頁尾。 |

### 2.2 像素取樣（P-）

原圖座標；`capture_tools.py sample`，文字區用「區域內最亮像素」量文字色（同一指令以 Pillow 取區域極值）。

| ID | 等級 | 內容 |
| --- | --- | --- |
| P-01 | E3 | 桌機 (100,100)、(1000,140)、(200,2566)、(1580,9800) = `#08090A`，頁面背景（導覽、Hero、區塊間、頁尾一致）；手機 (10,150)、平板 (10,150) 也是 `#08090A` |
| P-02 | E3 | 桌機 (1000,72) = `#1C1C1C`（導覽列底線）；(1000,2569) = `#1B1C1D`（區塊分隔線）；(200,2568) = `#000000`（同一條線靠左端較暗） |
| P-03 | E3 | 桌機 Hero 下方光暈：(40,1300) = `#424548`、(1000,1290) = `#767A7F`、(960,1340) = `#7D8186`（中性灰，無色相） |
| P-04 | E3 | 產品 UI 面板：(800,1200) = `#151617`；Intake 看板 (400,3200) = `#111213`、(1100,3200) = `#151517`；平板 (600,2950) = `#101012` |
| P-05 | E3 | 文字最亮像素：H1 區 `#F7F8F8`；陳述段前半 `#F7F8F8`、後半 `#8A8F98`；Hero 副標 `#8A8F98`；區塊說明（Intake 右欄）`#D0D6E0`；Learn more `#8A8F98`；導覽項目 `#8A8F98`；頁尾欄標 `#F7F8F8`、頁尾連結 `#8A8F98` |
| P-06 | E3 | 三級小字：「POWERING THE COMPANIES…」、Features 標籤、Changelog 日期 = `#62666D` |
| P-07 | E3 | 主要按鈕底色：Sign up (1535,25) = `#E5E5E6`、Get started (835,9275) = `#E5E5E6`；手機 Sign up (248,32) = `#E3E3E4` |
| P-08 | E3 | 次要按鈕底色：Contact sales (970,9275) = `#141516` |
| P-09 | E3 | 紫色只出現在產品 UI：Thread 送出鈕 (685,3475) = `#5E6AD2`；手機同一按鈕 (276,2194) = `#5E6AD2` |
| P-10 | E3 | 黃綠：Ramp 見證卡 (1400,8600) = `#E4F222`；藍：OpenAI 見證卡 (600,8400) = `#D6E5FF` |
| P-11 | E3 | Changelog 時間線第一個圓點 (324,7844) = `#EB5757`（紅） |
| P-12 | E3 | 客戶 logo 區最亮像素 `#FFFFFF`（logo 為單色白） |

### 2.3 Branding（B-，Firecrawl 自動萃取）

| ID | 等級 | 內容 |
| --- | --- | --- |
| B-colorScheme | E4 | dark |
| B-colors.background | E4 | `#08090A` |
| B-colors.primary | E4 | `#5E6AD2` |
| B-colors.secondary | E4 | `#D0D6E0` |
| B-colors.accent / link | E4 | `#E4F222` |
| B-colors.textPrimary | E4 | `#08090A`（與背景同色） |
| B-fonts | E4 | Inter（body）、SF Pro Display（heading）；字族堆疊兩者都以 Inter 開頭 |
| B-typography.fontSizes | E4 | h1 64px、h2 48px、body 15px |
| B-spacing | E4 | baseUnit 4、borderRadius 8px |
| B-components.buttonPrimary | E4 | 底 `#E5E5E6`、字 `#08090A`、radius 9999px、5 層極淡陰影 |
| B-components.buttonSecondary | E4 | 底 `#141516`、字 `#F7F8F8`、radius 9999px、內側 1px 白 3–4% 描邊＋外側黑 60% 1px 環 |
| B-components.input | E4 | 透明底、radius 0、無陰影（首頁上沒有看到實際表單） |
| B-metadata | E4 | theme-color `#08090a`；apple-mobile-web-app-status-bar-style black；personality tone modern、energy medium |

### 2.4 頁面文字（M-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| M-L1 | E2 | 「Skip to content →」連結（#skip-nav） |
| M-L3 | E2 | H1 文字出現三次，斷行不同：「The productdevelopmentsystem for teamsand agents」「The product development  system for teams and agents」「The product development system for teams and agents」 |
| M-L5 | E2 | 副標「Purpose-built for planning and building products. Designed for the AI era.」 |
| M-L7 | E2 | 「NewLoops →」連結出現兩次，都連到 /now/introducing-loops |
| M-L13–61 | E2 | Hero 產品 UI 的完整文字：issue「Faster app launch」、Activity、agent 對話，包含「Worked for 10 sec」「Pushed and opened a draft PR…」「Changed2 files+22−10」「Reply…」 |
| M-L92 | E2 | 「Powering the companies building the future」 |
| M-L94 | E2 | H2：「**A new species of product tool.** Purpose-built for modern teams…」（前半粗體） |
| M-L96–122 | E2 | 三個價值點文字出現兩次：一次純文字（L96–106），一次帶「Fig 0.1／0.2／0.3」（L108–122） |
| M-L125–129 | E2 | 「Intake  and integrations」＋說明＋「Learn more→」/intake |
| M-L131–249 | E2 | Intake 看板（Backlog 8、Todo 71、In Progress 3、Done 53）與 Slack 對話文字，時間「6:41 AM」 |
| M-L251–259 | E2 | Features：Linear Agent+、Customer Requests+、Triage+、Linear Asks+ |
| M-L261–265 | E2 | 「Planning  and monitoring」＋說明＋Learn more /plan |
| M-L267–361 | E2 | 時間軸月份、週數、專案名（UI Refresh、Split fares、Autonomy…）、「Oct 2025」–「Feb 2026」 |
| M-L371–383 | E2 | Features：Projects、Documents、Pulse、Initiatives、Visual planning、Insights（各附 +） |
| M-L385–389 | E2 | 「AI and  automations」＋說明＋Learn more /ai |
| M-L391–423 | E2 | 四段 agent 對話文字，含「Worked for 8 sec」「Worked for 1 min」「added to context」 |
| M-L425–433 | E2 | Features：Linear Agent、Coding sessions、Triage、Linear MCP |
| M-L435–439 | E2 | 「Build, review,  and ship」＋說明＋Learn more /build |
| M-L443–501 | E2 | issue 清單：In Review 3、In Progress 4（三列有「Working…Working…」）、Todo 4 |
| M-L505–534 | E2 | 檔名「kinetic-ios/src/screens/Home/HomeScreen.tsx」與三段程式碼：修改前、修改後（同一段內容出現兩次）、`CodeReview` / `<Diff.Provider>` / `<Slow /> <Fragmented /> <HumanOnly /> <Frictionless /> <Integrated /> <AgentReady />` |
| M-L538–550 | E2 | Features：Issues、Git automations、Guided reviews、Cycles、Diffs、Releases |
| M-L552–578 | E2 | 「Changelog」四則（Sep 24／Sep 10／Sep 3／Aug 19, 2026）＋「View all→」 |
| M-L580–592 | E2 | 見證：第一組三則（OpenAI、Ramp、Opendoor，只有公司名），第二組兩則（OpenAI、Ramp，含職稱） |
| M-L594–596 | E2 | 「Linear powers over **40,000** product teams. From ambitious startups to major enterprises.」＋「Customer stories→」 |
| M-L598–600 | E2 | 「Built for the future. Available today.」＋ Get started、Contact sales、Open app、Download |

### 2.5 HTML／檔名線索（H-）

| ID | 等級 | 內容 |
| --- | --- | --- |
| H-01 | E2 | H1 在 markdown 中有三種斷行版本（M-L3）；「New Loops」連結有兩份（M-L7） |
| H-02 | E2 | Hero 有兩張 `width=2560` 的大圖（M-L9、M-L11，Cloudflare imagedelivery），其餘產品 UI 是文字＋小圖組成 |
| H-03 | E2 | 三個價值點文字有兩份，一份帶「Fig 0.x」（M-L96–122） |
| H-04 | E2 | 見證有兩組不同內容的副本（M-L580–592） |
| H-05 | E2 | 狀態文字「Working…Working…」重複兩次（M-L471、M-L477、M-L485）；agent 對話有完成態文字「Worked for 10 sec」「Pushed and opened a draft PR」（M-L49–51） |
| H-06 | E2 | 程式碼區有修改前、修改後、`CodeReview` 三段（M-L507–534） |
| H-07 | E2 | meta：theme-color `#08090a`、status bar black、viewport-fit=cover；連結清單 19 個，主要是四個產品領域頁、changelog、customers、signup、contact/sales、login、download（source/links.json） |
| H-08 | E2 | 頁首「Skip to content」跳過連結（M-L1） |

### 2.6 跨擷取比較（I-，比對不同時間／寬度的截圖）

| ID | 等級 | 內容 |
| --- | --- | --- |
| I-01 | E3 | Hero agent 面板：桌機截圖顯示「Thinking...」（S-d00），markdown 同時含有完成態「Worked for 10 sec / Pushed and opened a draft PR」（M-L49–51） |
| I-02 | E3 | Slack 訊息時間：桌機截圖與 markdown 是「6:41 AM」（S-d01、M-L227），平板與手機截圖是「6:42 AM」（S-t01、S-m01；三次請求相隔約 1 分鐘內） |
| I-03 | E3 | Build 段 code 視窗：桌機顯示 HomeScreen.tsx 的左右 diff（S-d03）；平板顯示 `CodeReview` / `<Diff.Provider>`（S-t02）；手機顯示含「A slow and fragmented code review experience」註解的 `CodeReview`（S-m01） |
| I-04 | E3 | AI 段畫面：桌機四個視窗（S-d02）、平板兩個視窗且左窗內容不同（S-t02）、手機是「Assign to...」下拉選單（S-m01） |
| I-05 | E3 | 客戶 logo 列：桌機 7 個完整、從 OpenAI 開始（S-d00）；平板從被裁切的「se」開始、順序 ramp→OpenAI→Vercel…（S-t00）；手機從 Vercel 開始且兩端裁切（S-m00） |
| I-06 | E3 | Planning 段畫面：桌機時間軸＋散點圖（S-d01–d02）；平板只有散點圖（S-t01）；手機只有時間軸（S-m01） |

### 2.7 缺口（X-）

| ID | 內容 |
| --- | --- |
| X-01 | `curl -sI https://linear.app` 回 403（網路政策），沒有用 Playwright：沒有 `C-` computed style，字級、行高、字距、字重都只能從截圖量（E3／E5）或用 branding（E4） |
| X-02 | hover、focus、active、disabled 狀態都看不到（導覽項目、按鈕、Learn more、Features 的「+」、見證卡） |
| X-03 | 所有動態的觸發方式、時長、easing、順序都沒有直接觀察；只有 I-01–I-06 的間接證據 |
| X-04 | 導覽列 Product／Resources 是否有下拉選單、手機漢堡選單打開後的內容都看不到 |
| X-05 | Features 列每個項目的「+」點開後顯示什麼看不到 |
| X-06 | 平板與手機只有截圖，沒有各自的 markdown；無法確認手機版拿掉的區塊（Features、Changelog、40,000）是 DOM 不存在還是隱藏 |
| X-07 | 桌機截圖只看到兩張見證卡；markdown 的第三則（Opendoor）在桌機截圖中看不到，平板則露出第三張藍卡的邊緣 |
| X-08 | 實際載入的字型檔看不到；branding 說 Inter／SF Pro Display（E4），未驗證 |
| X-09 | `prefers-reduced-motion` 支援與否看不到；頁面上沒有看到暫停鈕 |
| X-10 | 頁面上沒有表單或輸入框（除產品 UI 截圖中的假輸入框），所以錯誤／成功狀態不適用 |
