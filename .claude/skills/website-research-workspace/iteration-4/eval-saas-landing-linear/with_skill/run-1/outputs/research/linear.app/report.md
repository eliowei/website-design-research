# Linear 首頁 設計研究

- **網址**：https://linear.app　**研究日期**：2026-10-01
- **證據來源**：[observations.md](observations.md)（本報告只引用證據 ID，不重貼內容）

> **研究範圍與限制**：只研究首頁。資料來源是 Firecrawl（1920／768／360 全頁截圖、markdown、branding，皆即時抓取）與 Playwright（1440／768／390 的 computed style、hover／focus、點擊、每 500ms 的時間序列、reduced-motion 對照）。
> 無法取得或不完整的部分：網站自己的 CSS 變數（X-05）、手機漢堡選單展開（X-04）、捲入瞬間的進場動畫（X-03，等待 0.9 秒後才拍）、見證輪播是否自動播放（X-07）、亮色模式（X-09）。
> 影響：tokens 只能從 computed 值反推（第 6 節全部是推論）；「捲動進場」類動態的結論停在 [H]。

<a id="s1"></a>
## 1. 視覺

**Color**
- [O] 整頁是單一暗色背景：body 為 rgb(8,9,10)＝#08090A，導覽、Hero、各段、頁尾取樣都落在 #070909–#090909（C-body, P-01, P-02, P-05, P-10, B-colors.background）；meta `theme-color` 也是 #08090a（H-03）。
- [O] 文字至少有四個亮度層級：rgb(247,248,248) 標題與主文字（C-h1, C-body）、rgb(208,214,224) 段落說明（C-p.section）、rgb(138,143,152) 副標／導覽／頁尾連結（C-p.hero, C-nav, C-link.footer）、rgb(98,102,109) 等寬註記（C-mono）。
- [O] 行銷層的外框（導覽、標題、說明、按鈕、頁尾）沒有彩色：主按鈕是近白 rgb(229,229,230)，次按鈕是 5% 白（C-button.primary, C-button.secondary）。
- [O] 彩度出現在四類地方：產品介面內（Slack 送出鈕 #6873D4 P-08、規劃圖的青綠散點 S-d02、diff 的紅綠行與狀態黃色圖示 S-d03）、Changelog 第一個紅點 #EB5757（P-09）、兩張見證卡（淡藍紫 #DBE4FF 與螢光黃綠 #E4F222，P-06, P-07）、鍵盤 focus 的藍紫 rgb(94,106,210)（I-07）。
- [O] branding 把 #5E6AD2 當 primary、#E4F222 當 accent／link（B-colors.primary, B-colors.accent）；畫面上 #E4F222 只出現在 Ramp 見證卡（P-07），一般連結不是這個顏色（C-link.learnmore 為白色）。branding 的 textPrimary #08090A 與背景同色，是誤判（B-colors.textPrimary vs C-body）。
- [I] 色彩分工清楚：網站的「殼」只用灰階，顏色被保留給「產品本身」與「社會證明」，訪客看到的彩色幾乎都在說「這是 Linear 裡會看到的東西」或「這是客戶的話」（依據 O：P-06–P-09, C-button.*）。

**Typography**
- [O] 只有兩個字族：Inter Variable（所有標題與內文）與 Berkeley Mono（12px 註記）（C-fonts, C-body, C-mono）。branding 說 heading 是 SF Pro Display（B-typography），但它只是 fallback 字堆的第二順位（C-body），實際載入的是 Inter Variable。
- [O] 實際字級（1440）：72（結尾 H2）／64（H1）／48（區段 H2）／24（段落說明）／20（介面內 H3）／16（內文、按鈕）／15（Hero 副標）／13（導覽、頁尾、小按鈕）／12（等寬註記）（C-h2.prefooter, C-h1, C-h2.section, C-p.section, C-h3.ui, C-body, C-p.hero, C-nav, C-mono）。
- [O] 標題字重全部是 510，介面內 H3 是 590，內文 400（C-h1, C-h2.section, C-h3.ui）：可變字型的非整百字重。
- [O] 大字的行高等於字級（64/64、48/48、72/72），字距約 −0.022em（−1.408px／64、−1.056px／48、−1.584px／72）；24px 說明行高 1.33、字距 −0.012em；13px 頁尾 −0.01em（C-h1, C-h2.section, C-h2.prefooter, C-p.section, C-h3.footer）。
- [O] 全站開啟 Inter 的 `cv01`、`ss03` 字形變體（C-body）。
- [O] 區段說明（24px）比 Hero 副標（15px）大很多，Hero 副標是灰色小字（C-p.section, C-p.hero）。
- [I] 字體策略是「一個字族、一個標題字重、靠尺寸與亮度分層」：不用粗細或第二個展示字體製造對比，語氣一致、偏工程感；緊字距＋1.0 行高讓大標題成為緊密字塊（依據 O：C-h1, C-h2.*）。
- [I] Hero 副標刻意做小、做灰，讓 H1 和下方產品介面成為首屏兩個主角（依據 O：C-p.hero, S-d00）。

**Layout**
- [O] 區塊順序：導覽 → Hero（H1、副標、New Loops、產品介面）→ 客戶 logo 列 → 宣言 H2 → 三欄 Fig 價值主張 → 四個功能段（Intake／Planning／AI／Build）→ Changelog → 見證卡 → 40,000 數字行 → 結尾 CTA → 頁尾（S-d00–S-d04, M-L3–600）。
- [O] 四個功能段高度幾乎相同（1226／1229／1232／1220px），上下 padding 各 128px（C-sections, C-layout）。
- [O] 桌機上整頁靠左，置中的只有結尾「Built for the future. Available today.」與它的兩顆按鈕（S-d04, C-h2.prefooter）。
- [I] 靠左對齊配上兩欄網格，讓整頁像一份文件或產品規格；只在收尾改成置中，讓「行動」那一刻在版面上明顯不同（依據 O：S-d00–S-d04, C-layout）。

**Grid**
- [O] 主容器 max-width 1436px、左右內距 46px；功能段寬 1344px，內部兩欄 672px＋672px，標題在左欄（x=78）、說明在右欄（x=752）（C-layout, C-h2.section, C-p.section）。
- [O] Features 清單從右欄起（x≈752）；頁尾欄位每欄 224px（x=304/528/752/976）（C-layout, C-h3.footer）。
- [I] 1344 寬切成兩半、再細分成 224px 欄寬，讓「左標題／右說明」與頁尾欄位共用同一組垂直線（依據 O：C-layout, C-h3.footer）。

**Spacing**
- [O] 功能段上下 padding 128px；Fig 區與 Intake 段之間有 336px 的純背景區（C-layout, X-01）。
- [O] branding 推估基準單位 4（B-spacing）；量到的 32（導覽與小按鈕高）、44（主按鈕高）、12／20（按鈕左右 padding）、128（段距）都可被 4 整除（C-nav, C-button.*, C-layout）。
- [I] 段間留白遠大於段內間距，讓每個功能段像獨立章節（依據 O：C-sections, S-d01）。

**Shape**
- [O] 行銷層的按鈕（Sign up、Get started、Contact sales）與導覽 hover 底色都是膠囊形（border-radius 9999px）（C-nav, C-button.*, I-03）。
- [O] 產品介面視窗、見證卡、Fig 卡（平板）、Tech specs 面板是小圓角矩形（S-d00, S-d03, S-t00, I-09）；branding 推估 8px（B-spacing），卡片圓角未用 computed 確認。
- [I] 「可點的行銷按鈕是膠囊、內容容器是小圓角」，讓按鈕在大量矩形介面截圖中仍好辨認（依據 O：C-button.*, S-d00）。

**Border**
- [O] 導覽列底線 1px rgba(255,255,255,0.08)（C-header）；功能段之間整寬細橫線，Fig 三欄之間、Features 兩欄之間有細直線（S-d01, S-d02）。
- [O] 次按鈕用內陰影描邊（3% 白內框＋4% 白頂部內光＋60% 黑外框）而非 border（C-button.secondary）。
- [I] 分隔幾乎都用極低對比細線，而不是底色差，背景因此保持一整片（依據 O：C-header, S-d01）。

**Shadow／Elevation**
- [O] 主按鈕有五層、最高 8% 不透明度的極淡陰影；次按鈕用內光＋外框陰影（C-button.signup, C-button.secondary）。
- [O] Hero 產品介面下方有灰色光暈底板（中心 #787B80、邊緣 #424447），是全頁最亮的非文字區（P-03, P-04, S-d00）。
- [O] 導覽列是 `backdrop-filter: blur(20px)` 的透明層（C-header）。
- [I] 層級主要用「光」表現：Hero 光暈把產品介面托出背景，按鈕陰影淡到只剩邊緣處理（依據 O：P-03, P-04, C-button.*）。

**Imagery**
- [O] 主視覺幾乎全是產品介面：Hero、Intake、Planning、AI、Build 五處（S-d00–S-d03）；Hero 介面文字是 DOM 文字（M-L13–90, H-01）。
- [O] 例外：Fig 0.1–0.3 是線框立體插圖（S-d00, S-d01）；見證卡是色塊＋淡色 logo 浮水印（S-d03）。行銷層沒有人物照片，人像只以頭像出現在介面示意中（S-d01）。
- [I] 用「可讀的介面」而不是概念插畫說明功能，頁面同時就是產品 demo（依據 O：S-d00–S-d03, M-L13–90）。

**Iconography**
- [O] 介面示意內圖示為細線、單色，與 13px 字同高（S-d00 側欄、S-d01 Slack 工具列）；行銷層只用「→」與「+」兩個符號（M-L129, M-L251–259）。

**Visual hierarchy**
- [O] 首屏第一眼是 64px 白色 H1，第二眼是帶光暈的產品介面；導覽與副標都是 13–15px 灰字（C-h1, P-04, C-nav, C-p.hero）。
- [O] 宣言 H2 前半白、後半灰（S-d00, C-h2.manifesto）；「40,000」在灰色句子中是白色粗體（S-d04, M-L594）。
- [I] 層級幾乎只靠亮度：同一字級內用白／灰切出重點，比換色或換字重更安靜（依據 O：C-h2.manifesto, S-d04）。

**Composition**
- [O] 功能段的產品介面常在邊緣裁切或漸隱：Intake 看板右側漸隱、AI 段兩側視窗被裁切並變暗、Build 清單底部漸隱（S-d01, S-d02, S-d03）。
- [I] 裁切與漸隱讓介面「比畫面大」，暗示背後是完整產品，同時集中視線（依據 O：S-d01–S-d03）。

**Density**
- [O] 全頁約 9960px（1440 寬）、5876px（390 寬）（C-sections, C-resp.390）；每個功能段約 1.4 個螢幕高（1220–1232／900）。
- [O] 行銷文案每段只有 H2＋2–3 行說明，資訊密度集中在介面示意（M-L125–129, S-d01）。
- [I] 行銷層低密度、介面層高密度：閱讀負擔小，想細看的人可從介面讀到大量具體細節（依據 O：M-L125–129, M-L131–249）。

**核心問題的答案**：[I] Linear 的視覺語言是「暗色、灰階、單一字族的文件式版面，把顏色和細節都留給產品介面本身」。殼（導覽、標題、按鈕、頁尾）用亮度階層與細線維持安靜一致；產品介面示意承擔展示功能、提供彩度與資訊密度；見證卡是唯一的大面積高彩區，成為長頁後段的視覺高峰（依據 O：C-body, P-06–P-09, S-d00–S-d03）。

<a id="s2"></a>
## 2. 使用者體驗

**Information Architecture**
- [O] 內容依產品工作流程分段：Intake → Planning → AI → Build，與導覽下拉 Product 的四項一致（M-L125, L261, L385, L435, H-04）。
- [I] 首頁和導覽用同一套四段分類，訪客讀一次首頁就學會全站心智模型（依據 O：H-04, M-L125–439）。

**Navigation**
- [O] 桌機主選單：Product、Resources（下拉）、Customers、Pricing、Now、Contact；分隔線後 Log in 與 Sign up（S-d00, C-nav）。導覽列 fixed、捲動時常駐且樣式不變（C-header, I-16）。
- [O] 平板與手機收成 logo＋Log in＋Sign up＋漢堡（S-t00, S-m00）；選單展開狀態未取得（X-04）。
- [I] 收合時保留 Sign up，主 CTA 在所有寬度常駐（依據 O：S-t00, S-m00）。

**User flow**
- [O] 三條路徑：自助註冊（Sign up／Get started）、業務（Contact sales）、深入了解（四個 Learn more、Changelog View all、Customer stories）（M-L129, L265, L389, L439, L578, L596, L600）。
- [O] 結尾 CTA 區在 markdown 中還有 Open app 與 Download（M-L600），截圖上只看到 Get started 與 Contact sales（S-d04）。

**Content hierarchy**
- [O] 四個功能段都依「標題 → 說明 → Learn more → 產品示意 → Features 清單」排列（S-d01–S-d03, M-L125–550）。

**CTA**
- [O] 註冊類 CTA 兩處（導覽 Sign up、結尾 Get started），文案不同；業務 CTA 只在結尾（S-d00, S-d04）。
- [O] 主 CTA 近白膠囊、次 CTA 深色膠囊，同尺寸並排（C-button.primary, C-button.secondary）。
- [O] 功能段內沒有註冊按鈕，只有 Learn more 文字連結（S-d01–S-d03）。
- [I] 中段不催促轉換，只給「了解更多」；轉換請求集中在常駐導覽與最後一屏（依據 O：S-d01–S-d04）。

**Affordance**
- [O] 前往他頁的連結以「→」標示（Learn more、View all、Customer stories、Loops），可展開項目以「+」標示（Features）（M-L7, L129, L251–259, L578, L596）。
- [O] 點「+」打開右側 Tech specs 對話框而非跳頁（I-09）。
- [I] 用符號而非底線或顏色表示可點，配合灰階外觀；「→ 去別頁」「+ 就地展開」對應兩種結果（依據 O：M-L129, M-L251, I-09）。

**Discoverability**
- [O] 細節功能名稱（Customer Requests、Pulse、Linear MCP 等）只在 Features 清單以小字出現，要點開才有說明（S-d01–S-d03, I-09）。
- [I] 首頁只負責讓人認得名稱，細節延後；代價是想快速比對功能的人需逐一點開（依據 O：I-09, S-d01）。

**Feedback**
- [O] hover：導覽項目變白並出現 8% 白膠囊底；主按鈕變純白；次按鈕底色變 rgb(25,26,27)；頁尾連結變白；Learn more 與「+」變亮（I-01–I-05）。量到的元素都沒有位移或縮放（I-06）。
- [O] focus：outline 1px 藍紫、offset 2px；第一個 Tab 是整列藍紫的「Skip to content」（I-07）。

**Form**
- [O] 首頁沒有表單；介面示意中的輸入框是展示用（S-d00–S-d04, S-d01）。

**Error／Success states**
- 無法觀察（X-08）。

**Cognitive load**
- [O] 功能段每屏只有一個 Learn more 和一組 Features（S-d01–S-d03）。
- [O] 介面示意含大量工程術語（PR、diff、GraphQL、vehicle_state）（M-L13–90, M-L441–534）。
- [I] 選擇少、內容門檻高：對工程團隊是「看得懂所以可信」，對非技術訪客較難進入（依據 O：M-L441–534）。

**核心問題的答案**：[I] 頁面用與導覽一致的四段工作流程帶訪客從收需求走到出貨，每段給同一套結構與同一個「了解更多」出口，轉換請求只放在常駐導覽與最後一屏。它降低了選擇負擔（每屏一個出口、細節點開才看），但把理解門檻放在介面的真實細節上，篩選出懂這些細節的工程與產品團隊（依據 O：H-04, S-d01–S-d04, I-09）。

<a id="s3"></a>
## 3. 動態

| Trigger | Target | Property | Duration／Easing | Sequence | 證據 | 層級 |
| --- | --- | --- | --- | --- | --- | --- |
| 載入 | Hero：H1、副標、產品介面、New Loops、agent 面板 | 出現（介面先以低不透明度浮現） | 總長約 3 秒；單一元件時長與曲線未觀察 | H1＋副標（≈1.5s）→ 產品介面（≈1.5–2s）→ New Loops（≈2.5s）→ agent 面板＋對話（≈3s） | I-10 | [O] 順序；[H] 屬性為 opacity，驗證：100ms 逐格或 Web Animations API |
| 時間（循環） | Hero 與 AI 段的 agent 視窗 | 內容替換（提示 → Thinking… → 結果） | 每步數秒；曲線未觀察 | 提示 →「Thinking…」→「Worked for N sec」＋結果卡 → 清空 → 下一則 | I-10, I-12 | [O] |
| 時間 | Build 段 issue 清單 | 狀態文字「Working…」 | 未觀察 | 未觀察 | M-L471, M-L477, M-L485 | [H] 有動態狀態；5 秒內截圖無變化（I-15）；驗證：更長序列 |
| 時間（循環） | Intake 段 Slack 輸入框 | 文字游標閃爍 | 約 1 秒週期 | — | I-13 | [O] |
| 時間（循環） | Fig 0.2 插圖 | 5×5 點陣變化 | 未觀察 | 依行列各有一組 keyframes | I-14, C-keyframes | [O] 有變化；[I] 對應 `grid-dot-*` |
| hover | 導覽項目、按鈕、頁尾連結、Learn more、「+」 | 文字色、背景色（只改亮度） | 導覽 0.1s、按鈕 0.16s，cubic-bezier(0.25,0.46,0.45,0.94) | — | I-01–I-06, C-nav, C-button.signup | [O] |
| hover | 導覽 Product | 下拉面板出現 | 未觀察 | — | I-08 | [O] |
| 點擊 | Features「+」 | 右側對話框出現、背景變暗 | 未觀察（存在 dialogOpen／slideFromRight keyframes） | — | I-09, C-keyframes | [O] 出現；[H] 從右滑入，驗證：逐格錄影 |
| 捲動 | 各功能段 | 未觀察 | 未觀察 | 未觀察 | I-15, X-03 | [H] 可能有捲入進場；驗證：捲動後 0–1 秒每 100ms 拍攝 |
| 捲動 | 導覽列 | 不變 | — | — | I-16 | [O] |

- **Page transition／Loading**：未觀察到頁面轉場；Loading 只以介面內文案（Thinking…、Working…）出現（I-12, M-L471）。
- **prefers-reduced-motion**：[O] 有支援。CSS 有 6 條相關規則（圖表 transition 關閉、smooth scroll 只在 no-preference 啟用、某些 chips 隱藏）（C-media）；reduce 下 Hero 不分段進場，agent 面板直接顯示完成狀態，AI 段循環近乎靜止（I-11, I-12）。[O] 但 Intake 游標與 Fig 0.2 點陣在 reduce 下仍會變化（I-13, I-14）。
- [I] reduce 的處理是「直接給最終狀態」，不是「拿掉內容」（依據 O：I-11）。

**核心問題的答案**：[I] 動態主要用來**示範產品**：讓 agent 看起來真的在工作（提示 → 思考 → 結果、Working…），其次才是引導注意（Hero 分段進場把視線從標題帶到介面再到 agent）。外殼的回饋動態刻意極短、只改亮度，不搶產品示範的戲（依據 O：I-10, I-12, I-01–I-06）。

<a id="s4"></a>
## 4. 響應式

三個寬度：桌機 1440（Playwright）／1920（Firecrawl）、平板 768、手機 390（Playwright）／360（Firecrawl）。

| 維度 | 桌機 | 平板 | 手機 | 重新分配的邏輯 |
| --- | --- | --- | --- | --- |
| Layout | 功能段兩欄：左 H2／右說明（C-layout） | 單欄堆疊：H2 → 說明 → Learn more → 示意（S-t01） | 單欄，**示意移到標題前**：視覺 → H2 → 說明 → Learn more（S-m01, C-resp.390） | 手機每段以產品畫面開場 |
| Typography | H1 64、區段 H2 48、宣言 48、結尾 72（C-h1, C-h2.*） | H1 56、區段 H2 40、宣言 32、結尾 40（C-resp.768） | H1 38、區段 H2 與宣言 24、結尾 38（C-resp.390） | 區段 H2 降幅最大（48→24），H1 與結尾保持最大；Hero 副標三寬度皆 15px |
| Spacing | 段 padding 128（C-layout） | 48（C-resp.768） | 0，改 flex（C-resp.390） | 留白大幅收斂，手機靠視覺本身分隔 |
| Navigation | 完整選單＋Log in＋Sign up（S-d00） | logo＋Log in＋Sign up＋漢堡（S-t00） | 同平板（S-m00） | 次要選單收合，Sign up 常駐 |
| Content priority | Features、Changelog 四則、40,000 行都在（S-d01–S-d04） | Features 在；Changelog 可見兩則；**刪除** 40,000 行（S-t03, C-resp.768） | **刪除** Features、Changelog、40,000 行（S-m01, S-m02, C-resp.390） | 先刪次要證據與深入細節，保留四段主幹、見證、CTA |
| Components | 見證兩張並排（S-d03）；Fig 三欄無底卡（S-d00）；AI 四視窗（S-d02） | 見證三張橫排、第三張裁切（S-t03）；Fig 改有底色卡片橫排、第三張裁切（S-t00）；AI 可見兩視窗（S-t02） | 見證、Fig 只露第一張＋下一張邊（S-m00, S-m02）；AI 示意換成「Assign to…」清單（S-m01） | 多欄不堆疊而改露邊橫排；AI 段換成較簡單示意 |
| Interaction | hover 回饋（I-01–I-05） | 未測試觸控 | 未測試觸控；CSS 有 `(hover: none) and (pointer: coarse)`（C-media） | [H] 觸控裝置關閉 hover 樣式；驗證：`hasTouch` 下比較 computed style |

- [O] 不變：「Get started」三寬度都是 16px、44px 高、127px 寬（C-resp.cta）；Hero 副標 15px（C-p.hero, C-resp.*）。
- [O] 疑點：Hero 產品介面在 Firecrawl 360 整個縮小可見（S-m00），在 Playwright 390 只露右半與 agent 面板（X-06）。

**核心問題的答案**：[I] 寬度變小時，Linear 優先保留「四段工作流程＋產品畫面＋CTA」主幹，先刪深入細節（Features）和次要證據（Changelog、40,000）；並排內容不堆疊，改成露邊橫排，延續「後面還有」的暗示；手機把產品畫面移到標題前。按鈕尺寸不縮，觸控目標一致（依據 O：C-resp.768, C-resp.390, S-t00, S-m01, C-resp.cta）。

<a id="s5"></a>
## 5. 模式
本節只從第 1–4 節抽取，不重新分析網站。

<a id="vp-01"></a>
### VP-01 四個功能段共用同一套「章節模板」
- 類型：結構
- 出現位置：Intake（M-L125–259, S-d01）、Planning（M-L261–383, S-d01–S-d02）、AI（M-L385–433, S-d02）、Build（M-L435–550, S-d02–S-d03）
- 不變的部分：左 H2 兩行（48px，第二行以 and／, and 接續）＋右欄 24px 說明＋「Learn more →」→ 產品介面示意 →「Features」＋兩欄「名稱 +」清單；段高 1220–1232px、padding 128px（C-sections, C-layout）
- 會變的部分：示意的內容與形式（thread＋看板、時間軸＋散點圖、多 agent 視窗、清單＋diff）；Features 項目 4 或 6 個
- 推測目的：[I] 讀過一段就知道其他段怎麼讀，注意力全放在「每段產品畫面的差異」

<a id="vp-02"></a>
### VP-02 用「可讀的真實產品介面」當主視覺
- 類型：視覺處理
- 出現位置：Hero（S-d00, M-L13–90, H-01）、Intake（S-d01）、Planning（S-d01–S-d02）、AI（S-d02）、Build（S-d03）、Tech specs 對話框示意（I-09）
- 不變的部分：示意是 Linear 介面本身，文字可讀，內容是同一個虛構專案（iOS 啟動速度、ride 相關 issue）（M-L13–90, M-L131–249, M-L441–534）
- 會變的部分：裁切方式；有的循環播放，有的靜態
- 推測目的：[I] 首頁本身就是產品 demo；同一個虛構專案串起所有畫面
- 例外：Fig 0.1–0.3 用線框插圖、見證卡用色塊

<a id="vp-03"></a>
### VP-03 殼是灰階，彩度只給產品與社會證明
- 類型：視覺處理
- 出現位置：外框灰階（C-body, C-button.primary, C-button.secondary, C-nav）；彩色在產品介面內（P-08, S-d02, S-d03）、Changelog 紅點（P-09）、見證卡（P-06, P-07）、focus（I-07）
- 不變的部分：背景 #08090A，文字四級灰階，行銷按鈕無彩色
- 會變的部分：介面內的語意色（狀態、標籤、圖表）；見證卡每張一色
- 推測目的：[I] 彩度是稀缺資源，顏色自動指向「產品」或「客戶」

<a id="vp-04"></a>
### VP-04 同一行用亮度切出重點（白＋灰）
- 類型：視覺處理
- 出現位置：宣言 H2 前半白、後半灰（S-d00, C-h2.manifesto）；Hero「New」白＋「Loops →」灰（S-d00）；導覽下拉底部「New」白＋說明灰（H-04）；「40,000」白色粗體在灰句中（S-d04, M-L594）
- 不變的部分：同字級、同字族，用亮度（40,000 另加粗）標出關鍵詞
- 會變的部分：位置（標題、標籤、數據句）
- 推測目的：[I] 不換色、不放大就做出「先讀這幾個字」的層級

<a id="vp-05"></a>
### VP-05 等寬小字當「註記層」
- 類型：視覺處理
- 出現位置：「FIG 0.1–0.3」、logo 列標語、Changelog 日期（C-mono, S-d00, S-d03）、Tech specs 對話框的「TECH SPECS」「LINEAR AGENT IN SLACK」（I-09）
- 不變的部分：Berkeley Mono 12px、灰色、多為大寫
- 會變的部分：內容（編號、日期、分類標籤）
- 推測目的：[I] 用另一種字族標出後設資訊，像技術文件的圖號與欄位名，強化工程語氣

<a id="vp-06"></a>
### VP-06 互動回饋只改亮度，不動位置
- 類型：互動
- 出現位置：導覽項目（I-03）、主按鈕（I-01）、次按鈕（I-02）、頁尾連結（I-04）、Learn more 與「+」（I-05）
- 不變的部分：hover 時文字或底色變亮；量到的元素無 transform、位移、陰影變化（I-06）；0.1–0.16s、同一條 cubic-bezier（C-nav, C-button.signup）
- 會變的部分：變亮的是文字、底色或兩者
- 推測目的：[I] 回饋快而輕，與安靜的殼一致，不和介面示意的動態搶注意

<a id="vp-07"></a>
### VP-07 可點的行銷按鈕是膠囊
- 類型：視覺處理
- 出現位置：Sign up（C-button.signup）、Get started（C-button.primary）、Contact sales（C-button.secondary）、導覽 hover 底（C-nav, I-03）
- 不變的部分：9999px 圓角；主＝近白底深字，次＝5% 白底白字＋內光描邊
- 會變的部分：尺寸（32px 導覽級、44px 頁面級）
- 推測目的：[I] 在滿是矩形介面截圖的頁面中，膠囊形本身就是「行銷層按鈕」的辨識線索

<a id="vp-08"></a>
### VP-08 產品示意出血、裁切、漸隱，暗示「還有更多」
- 類型：視覺處理
- 出現位置：Intake 看板右側漸隱（S-d01）、AI 段兩側視窗裁切並變暗（S-d02）、Build 清單底部漸隱（S-d03）、Planning 圖表邊緣漸隱（S-d02）
- 不變的部分：只有一塊清楚的焦點，周圍被裁掉或壓暗
- 會變的部分：漸隱方向
- 推測目的：[I] 讓介面「比畫面大」，同時集中視線

<a id="vp-09"></a>
### VP-09 窄寬度下並排內容改成露邊的橫向排列
- 類型：響應式行為
- 出現位置：Fig 卡（S-t00, S-m00）、見證卡（S-t03, S-m02）、客戶 logo 列（S-t00, S-m00）
- 不變的部分：不堆疊成直列；下一張露出邊緣
- 會變的部分：一次可見張數（平板 2＋邊、手機 1＋邊）
- 推測目的：[I] 控制頁面長度，延續 VP-08 的暗示；[H] 可橫向滑動，驗證：觸控拖曳測試

<a id="vp-10"></a>
### VP-10 先刪細節與次要證據，保留主幹
- 類型：UX 決策／響應式行為
- 出現位置：40,000 行在平板與手機刪除（S-t03, S-m02）；Features 在手機刪除（C-resp.390, S-m01）；Changelog 在手機刪除（C-resp.390, S-m02）；AI 段示意在手機換成較簡單的清單（S-m01）
- 不變的部分：四段標題＋說明＋Learn more、見證、結尾 CTA 三寬度都保留
- 會變的部分：刪減深度（平板一項，手機三項）
- 推測目的：[I] 手機只留能說服人的主線，細節交給子頁

<a id="vp-11"></a>
### VP-11 首頁只給標題級資訊，細節分層延後
- 類型：UX 決策
- 出現位置：Features「+」→ Tech specs 對話框（I-09）；Learn more → 子頁（M-L129, L265, L389, L439）；Changelog View all（M-L578）；Customer stories（M-L596）；導覽下拉鏡像四段並各附一行說明（H-04）
- 不變的部分：首頁只出現名稱與一句話，深入內容在點擊之後
- 會變的部分：就地對話框 vs. 跳頁
- 推測目的：[I] 降低每屏閱讀量，同時給有興趣的人明確下一步

<a id="vp-12"></a>
### VP-12 動態用來「演出產品在工作」，reduce 下直接給結果
- 類型：互動
- 出現位置：Hero agent 面板對話（I-10）、AI 段 agent 視窗循環（I-12）、Build 段「Working…」（M-L471, L477, L485）、Intake 輸入游標（I-13）
- 不變的部分：動態內容是介面狀態變化（提示 → Thinking… → 結果），不是裝飾位移
- 會變的部分：循環（AI 段）或一次性（Hero）；reduce 下 Hero 與 AI 段停在結果（I-11, I-12），游標與 Fig 點陣仍會動（I-13, I-14）
- 推測目的：[I] 讓「AI agent 會幫你做事」從文案變成看得到的過程

<a id="s6"></a>
## 6. 設計語言與設計系統推論
本節只從第 5 節的模式（與少數有證據的 [I]）抽象，不引入新觀察。

| 面向 | 設計語言（一句話） | 根據 |
| --- | --- | --- |
| 色彩哲學 | 殼用灰階，顏色是稀缺資源，只留給產品與客戶 | VP-03 |
| 字體哲學 | 一個字族、一個標題字重，用尺寸與亮度分層；等寬字只做註記 | VP-04, VP-05 |
| 版面哲學 | 文件式靠左兩欄＋重複章節模板，收尾才置中 | VP-01 |
| 互動哲學 | 回饋快、輕、只改亮度；可點的東西用膠囊與符號（→／+）辨識 | VP-06, VP-07, VP-11 |
| 動態哲學 | 動態是產品示範不是裝飾；不能動時給最終狀態 | VP-12 |
| 響應式哲學 | 保留主幹、刪除細節；並排改露邊橫排；手機先給畫面 | VP-09, VP-10 |
| 資訊層級 | 首頁只到標題級，細節分層到對話框與子頁；產品畫面承擔密度 | VP-02, VP-08, VP-11 |

**設計系統推論**（全部是從渲染結果推論，不代表網站有正式設計系統）：
- **Tokens（色彩）**：[I] 背景 `#08090A`；文字四階 `#F7F8F8`／`#D0D6E0`／`#8A8F98`／`#62666D`；分隔線與 hover 底 `rgba(255,255,255,0.08)`；次按鈕底 `rgba(255,255,255,0.05)`；focus／品牌藍紫 `#5E6AD2`（C-body, C-p.*, C-mono, C-header, I-03, C-button.secondary, I-07, B-colors.primary）。[H] 見證卡色（`#DBE4FF`、`#E4F222`）是個別素材色而非系統 token；驗證：看其他頁的見證元件。
- **Tokens（字級）**：[I] 72／64／48／24／20／16／15／13／12；標題 510、強調 590、內文 400；display 行高 1.0、字距約 −0.022em。[H] 字距以 em 比例定義（三個字級換算一致）；驗證：讀原始 CSS。
- **Tokens（間距）**：[H] 4px 基準（B-spacing＋量到的值皆為 4 的倍數）；段距 128／48／0 三階（C-layout, C-resp.*）。
- **Tokens（圓角）**：[I] pill 9999px；logo 連結 6px（C-nav）；[H] 卡片約 8px（只有 E4 的 B-spacing）。
- **Tokens（動態）**：[I] easing `cubic-bezier(0.25,0.46,0.45,0.94)`；100ms（文字類）、160ms（按鈕類）（C-nav, C-button.signup）。
- **Components／Variants**：[I] Button primary／secondary × small 32px／large 44px（C-button.*）；NavItem（灰字＋hover 膠囊）；SectionHeader（左 H2／右說明＋Learn more）；FeatureList（「名稱 +」→ TechSpecs 對話框）；Testimonial card（色塊底＋引言＋logo＋姓名職稱）；Changelog item（點＋標題＋摘要＋等寬日期）（VP-01, VP-07, VP-11, S-d03）。
- **States**：[O] hover（I-01–I-05）、focus-visible（I-07）、dialog open（I-09）、dropdown open（I-08）。disabled、loading、error 未觀察（X-08）。

<a id="s7"></a>
## 7. 綜合
- **設計原則**（可遷移到其他專案）：
  1. [DP] 把彩度當稀缺資源：外殼用灰階，顏色只出現在「產品本身」和「客戶的聲音」上（VP-03）。
  2. [DP] 用亮度而不是字重或顏色建立層級：一個字族、一個標題字重，同一行內用白／灰標出要先讀的字；後設資訊用另一種字族（VP-04、VP-05）。
  3. [DP] 讓產品畫面當主視覺，並讓它「做事」：可讀的真實介面與狀態變化，比插畫或形容詞更有說服力（VP-02、VP-12）。
  4. [DP] 一套章節模板跑完所有功能，讓讀者專注在差異上（VP-01）。
  5. [DP] 首頁只到標題級，細節分層延後；窄螢幕先刪細節、保留主幹（VP-10、VP-11）。
  6. [DP] 外殼的互動回饋要比內容動態更安靜：快速、只改亮度、不移動（VP-06）。
- **設計取捨**：
  - 灰階＋暗色讓產品畫面突出，但 rgb(138,143,152)／rgb(98,102,109) 的小字在暗底上對比偏低（C-nav, C-mono）；[H] 部分小字可能低於 WCAG AA，驗證：對比度計算（本研究範圍不含無障礙檢查）。
  - 介面示意高度工程化（M-L441–534），對工程團隊是可信度，對非技術決策者是門檻。
  - 中段沒有註冊 CTA（第 2 節 CTA），轉換依賴常駐導覽與最後一屏。
  - 手機刪掉 Changelog（VP-10），手機訪客看不到「產品持續更新」的證據。
  - 動態示範依賴腳本循環（VP-12），全頁截圖或預覽只看得到空視窗（X-02）。
- **最值得帶走的一件事**：把彩度和細節都留給產品畫面本身，外殼只做安靜的灰階框架（DP-1、DP-3，來自 VP-03、VP-02）。
- **一句話總結**：Linear 首頁是一份「暗色、灰階、文件式」的產品規格書，用同一套章節模板反覆展示會動的真實介面，把顏色、密度與動態全部集中在產品本身，外殼保持極度克制。

<a id="s8"></a>
## 8. 自我審查
1. **證據等級分布**：E1 41 筆（C- 26、Playwright I- 15）、E2 24 筆（M- 20、H- 4）、E3 24 筆（S- 13、P- 10、I-05）、E4 9 筆（B-）、E5 未登記，但報告中「卡片圓角約 8px」「露邊列可滑動」屬推測。最弱的環節是動態的時長與曲線：除 hover transition 外，進場與循環動畫的 duration／easing 都沒量到。
2. **只有單一證據或停在 [H] 的重要結論**：Hero 進場屬性是 opacity（只有 500ms 間隔截圖）；捲入進場是否存在（X-03）；觸控裝置 hover 處理；字距以 em 定義；卡片圓角 8px（只有 E4）。
3. **無法觀察的維度**：CSS 變數（X-05）→ 第 6 節 tokens 只能反推；手機選單展開（X-04）→ Navigation 只到「收合」；亮色模式（X-09）；見證輪播是否自動播放（X-07）；Hero 360／390 呈現不一致（X-06）→ 手機 Hero 只寫可見事實；disabled／error／loading（X-08）。
4. **是否有重述而非引用**：第 5 節「不變的部分」重述了部分數值（128px、9999px）以讓 VP 自足；第 6 節 tokens 重述第 1 節的色碼與字級，屬整理而非新觀察；第 7 節沒有新觀察。
5. **下一次最值得補的證據**：(a) Playwright `recordVideo` 或 100ms 間隔拍攝捲入各段的 0–1.5 秒（X-03、進場曲線）；(b) 讀原始 CSS 找出 tokens（X-05）；(c) 390 寬 `hasTouch` 下正確點擊漢堡並測試 Fig／見證列能否滑動（X-04、VP-09 的 [H]）；(d) 比較 360 與 390 的 Hero 斷點（X-06）。
