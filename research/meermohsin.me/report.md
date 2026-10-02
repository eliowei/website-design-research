# MEER MOHSIN 設計研究

- **網址**：https://www.meermohsin.me/　**研究日期**：2026-10-02
- **證據來源**：[observations.md](observations.md)（本報告只引用證據 ID，不重貼內容）；原始碼摘錄見 [source/js-excerpts.md](source/js-excerpts.md)

> **研究範圍與限制**：研究首頁（單頁式作品集）。Firecrawl 桌機全頁截圖逾時（X-01），桌機全頁改用 Playwright 1440 逐屏截圖；Firecrawl 768／360 全頁截圖有大段空白（X-02、X-03），以 Playwright 768／390 逐屏補上。
> 最大的限制是**量測環境太慢**（軟體 WebGL，約 0.5–2 fps，X-04）：所有動態的「時長」只引用程式碼**設定值**（H-，E2），實測（I-，E1）只用來證明先後順序與最終狀態。聯絡表單、部落格與作品側欄、完整選單沒有觀察到（X-06、X-07）。

## 1. 視覺

**Color**
- [O] 色彩只有黑、紅、白三族：背景 #000000（P-01, B-colors），大面積紅底 #990000（P-02, P-05），標題紅 #D60407（P-03, C-cinematic），hover 與首屏高光紅 #CF0808／#D50407（C-cta, P-06），文字白 #F5F5F5（C-hero-para）。branding 的五個色值都能在畫面上找到對應（B-colors 與 P-02、P-03 一致）。
- [O] 其他色相只出現在兩處：作品 mockup（紫、橘、綠，S-pw1440-sec13–18）與 Awwwards 證書板（青綠、紫，S-pw1440-sec25–27）。
- [O] 紅色有兩種用法：整面鋪底（預載、數字段，S-pw1440-load-00, S-pw1440-sec03）和當文字色（THIS WILL FEEL DIFFERENT、流程步驟、AWARDS，C-cinematic, C-process, C-awards-h2）。紅底上的文字改成黑（C-numbers）。
- [I] 色彩數量極少，讓「紅」同時承擔品牌、情緒和段落切換的功能：每次從黑切到紅（或反過來）就是一次章節轉換（S-pw1440-sec02→03→04, S-t00–t01）。

**Typography**
- [O] 三個字族：Stack Sans Headline 的 ExtraLight（light-font）與 Regular（regular-font），加上草寫體 Ruthie（C-fonts, H-css-fonts）。branding 只抓到 Ruthie（B-typography），漏了實際用量最大的 Stack Sans。
- [O] 字級落差極大：1440 寬時跑馬燈 228px、THIS WILL FEEL DIFFERENT 192px、AWARDS 156px、數字 120px、結尾標題 90px，而內文與導覽只有 12–14px（C-marquee, C-cinematic, C-awards-h2, C-numbers, C-cta-title, C-hero-para, C-nav）。中間層級（20–40px）只出現在「My work」、數字說明等少數地方（C-numbers, stable-d1440.json headings）。
- [O] 同一句話常同時用無襯線與草寫兩種字：「THIS WILL [草寫 FEEL] DIFFERENT」、「[草寫 AWARDS &] RECOGNIZATIONS」、「VISUAL [草寫 JOURNAL]」、「EVERY GREAT STORY… [草寫 ENDING.]」（S-t00, S-t08, S-t09, S-t12）。
- [O] 無襯線大標多用細字重 100–200（C-awards-h2, C-cta-title, C-process），例外是 THIS WILL FEEL DIFFERENT 的 700（C-cinematic）。
- [I] 草寫體被當成「情緒字」：只套在形容感受或結局的詞（FEEL、ENDING、AWARDS、步驟名），無襯線負責陳述，兩者一組形成「陳述＋語氣」的標題結構。

**Layout／Grid／Spacing**
- [O] 字級與間距以 rem 寫成，而 `html{font-size:.8333vw}`，1rem 在 1440 是 12px、在 390 是 3.25px（C-html-rem）；≤800px 另有 131 條覆寫規則（H-css-mq）。
- [O] 沒有一致的欄網格：首屏是「左上段落／右上導覽／中央人像／右下職稱」四角分佈（S-pw1440-hero）；數字段是左數字右說明兩欄（S-pw1440-sec03）；流程步驟左右交錯 x=72／936（C-process）；部落格三欄（S-pw1440-sec23）。
- [I] 以 vw 縮放整頁，等於把版面當成固定比例的畫面而不是流動版面：在 800px 以上，排版是同一張圖等比放大（依據 C-html-rem；1920 只有進場中途的首屏可比，X-05）。
- [H] 間距沒有可辨識的基準單位：branding 說 4（B-spacing），但 CSS 全用 rem 且值零散；驗證：統計 CSS 中 margin／padding 的 rem 值分布。

**Shape／Border／Shadow**
- [O] 元件幾乎沒有圓角：CTA 框、表單 input 圓角 0（C-cta, C-submit），圓形只出現在送出鈕（100×100）和作品編號圓圈（C-submit, S-pw1440-sec14）。
- [O] 分隔靠細線與材質邊界：數字段的細橫線（S-pw1440-sec03）、服務段的暗紅幾何線（S-pw1440-sec05–11）、火焰剪影（S-pw1440-sec02, sec04）、撕紙邊（S-pw1440-sec12）。CTA 的 box-shadow 是 none（C-cta），截圖上也沒有看到投影。
- [I] 深度不是用陰影做，而是用 WebGL 光影、模糊背景與真實 3D 場景（S-pw1440-sec16 模糊作品背景、S-pw1440-sec25–28）。

**Imagery／Iconography**
- [O] 影像分三類：本人照片（首屏人像、站立剪影，S-pw1440-hero, sec21）、紅色調處理的拼貼圖（服務段方形圖、火焰、撕紙、墜落人物，S-pw1440-sec06–12, H-assets）、作品 mockup（S-pw1440-sec13–18）。紅色金屬「翅膀面具」圖形反覆出現（S-pw1440-hero, sec01, sec02, sec21, S-pw768-sec26）。
- [O] 圖示只有細線「+」（選單、底部列）與 X 關閉（M-L6, H-html-bar）。

**Visual hierarchy／Composition／Density**
- [O] 首屏第一眼是人像與紅面具（畫面中央、最高對比），第二眼是穿過人像的白色超大跑馬燈字（S-pw1440-hero）；字在人像**後面**（人臉遮住字）。
- [O] 每屏資訊極少：多數屏只有一句話或一個詞加一張圖（S-pw1440-sec05–11, sec19–22）；1440 頁長 28172px（約 31 屏），其中服務段 7 屏、作品 6 屏、獎項 3D 場景 4 屏（C-sections, I-08）。
- [I] 低密度＋超長頁是刻意的「電影分鏡」：每屏是一個鏡頭，資訊量讓位給氣氛。這和頁面任務（展示動態與 3D 能力）一致，但也讓具體資訊（服務內容、作品說明）變成小字配角（C-process, S-pw1440-sec18）。

**核心問題的答案**：[I] 黑紅白三色、超大細字與草寫的對比、紅色調拼貼與 3D 場景，共同形成「暗黑電影海報」的視覺語言；紅色負責章節切換與情緒，草寫負責語氣，超大字負責節奏，具體資訊則被壓到 12–14px 的配角層級。

## 2. 使用者體驗

**Information Architecture**
- [O] 區塊順序：首屏 → 宣言（THIS WILL FEEL DIFFERENT）→ 數字（10+／25+／6+）→ 服務（LEGACY／UI-UX／3D WEB）→ 轉場（墜落人物）→ 作品 5 件 → 流程 4 步 → 部落格 3 篇 → 獎項 → 結尾 CTA → 頁尾跑馬燈（C-sections, M-L33–102, S-pw1440-sec00–30）。
- [I] 分段依據是「故事」而不是「客戶問題」：從自我宣告、墜落（M-L56）、作品、流程到「powerful ending」，文案本身就是三幕劇（M-L31, M-L56–57, M-L100）。

**Navigation**
- [O] 桌機：右上兩欄小字導覽，6 個錨點＋3 個社群（S-pw1440-hero, C-nav）；往下捲時逐字藏起、停 3 秒或往上捲回來（H-js-navhide；S-pw1440-sec09、sec13 導覽字被切半）。768 與 390：改為漢堡，開啟全螢幕紅色選單（C-nav, I-06, H-js-menu）。
- [O] 錨點捲動的設定時長：桌機 2.5s、手機 1.5s（H-js-lenis）。
- [O] 左上 logo、左下音樂波形、底部 TENSION／IMMERSION／IMPACT 列在每一張逐屏截圖都在；右下 Let's Connect 只在頁頂出現，往下捲就滑出（I-11, H-js-cta）。底部列的三個詞是 `<p>`，不是連結（H-html-bar）。
- [I] 底部常駐列佔據視窗最底約 60px，卻只承載品牌關鍵字、不能點；它的功能是讓長頁的每一屏都帶著同一個「畫框」（I-11, H-html-bar）。

**User flow／CTA**
- [O] 主要 CTA 是右下「ONLINE / Let's Connect」，點擊直接開 WhatsApp（H-js-cta），hover 時變紅底並有磁吸位移（I-04, C-cta）。往下捲時滑出畫面，往上捲才回來（H-js-cta, I-11）。
- [O] 「ONLINE」旁的紅點是 CSS 無限閃爍動畫（H-css-live）。[H] 它不代表真實在線狀態，因為 JS 中沒有找到改變它的程式；驗證：在不同時段造訪，或搜尋打包前的原始碼。
- [O] 其他出口：導覽 CONTACT US 開聯絡表單（H-js-contact）、選單內 e-mail（預填主旨與內文，M-L7–8）、結尾荊棘圈「LET'S BE CREATIVE」（M-L102, S-pw1440-sec29）。
- [I] CTA 的設計重心是「低門檻即時對話」（WhatsApp、e-mail 預填），而不是表單或預約；但它在往下讀的時候是隱藏的，等於只在頁頂或使用者往回捲時出現。

**Content hierarchy**
- [O] 作品段每件作品是「大標 → 圖 → 一句說明 → 編號」（S-pw1440-sec14–18, S-pw390-sec12–16）；markdown 中作品段相關的動作字只有一個「VIEW」（M-L67）。
- [O] 數字段 10+／25+／6+ 沒有寫數的是什麼（M-L36–41）。
- [I] 內容層級為了敘事犧牲了可掃讀性：數字、服務、作品都只給「感覺」而少給「事實」。

**Affordance／Feedback**
- [O] 系統游標在 CTA 等元素上被隱藏（`cursor: none`，C-cta），改用自訂紅色游標（S-pw1440-hover-cta）。
- [O] 預載寫「CLICK ANYWHERE TO ACTIVATE THE EXPERIENCE」，但點擊只啟動背景音樂，不點也會自動進入（H-js-sound, H-js-preloader, I-05）。
- [O] 左下 40 條紅色細 bar 是音樂開關（H-js-sound, I-05），外觀沒有文字或圖示標示。

**Form／Error／Success**
- [O] 聯絡表單 4 欄（姓名、電話、e-mail、訊息）全部 required，placeholder 當標籤（source/index.html）；失敗時用瀏覽器 `alert()`（H-js-contact）。成功與錯誤畫面沒有觀察到（X-07）。

**Cognitive load 與操作負擔**
- [O] 第一次造訪時，首屏內容的設定延遲是 8.5–9 秒，捲動被鎖 6 秒（H-js-herodelay, H-js-lenis）；重新整理或同一分頁再訪則跳過（H-js-firstvisit, I-01）。
- [O] Tab 焦點先進入隱藏的聯絡表單 5 次、沒有焦點樣式，第 6 次才到可見的 HOME（C-focus, S-pw1440-focus-tab3）。
- [O] 網站沒有處理 `prefers-reduced-motion`（H-rm, I-10）。
- [O] 隱藏面板中有未完成的 lorem ipsum 佔位文字（H-html-modals, M-L16–18, M-L62–63）。

**核心問題的答案**：[I] 這頁把使用者當「觀眾」而不是「訪客」：用預載、捲動鎖和長篇分鏡控制節奏，讓人先感受再理解；轉換路徑壓縮成一個即時聯絡按鈕。它降低了「聯絡」的門檻（一鍵 WhatsApp），但提高了「理解」與「操作」的負擔（第一次等待、資訊不具體、鍵盤焦點失序、無減少動態選項）。

## 3. 動態

Duration 欄全部是**設定值**（程式碼裡寫的數字，H-，E2）；「實測」欄只記錄在本環境量到的先後順序或狀態（I-，E1），不代表一般裝置的速度（X-04）。

| Trigger | Target | Property | Duration／Easing（設定值） | Sequence／實測 | 證據 | 層級 |
| --- | --- | --- | --- | --- | --- | --- |
| 載入（第一次造訪） | 預載計數 | 文字 000→100 | 設定值 3.5s power2.inOut | 實測順序：計數先跑；Lenis 解鎖時計數約 063–069 | H-js-preloader, I-02 | [O] |
| 載入 +2.9s | 預載 WebGL 畫面 | shader uTransition 0→1，完成後移除預載 | 設定值 3s power2.inOut | 實測：預載在計數到 100 之後才移除 | H-js-preloader, I-02 | [O] |
| 載入 | 整頁捲動 | 鎖定 | 設定值 6s（setTimeout，牆鐘計時） | 實測：解鎖早於預載移除（與設定值的順序不同，見下） | H-js-lenis, I-02 | [O] |
| 載入 +8.5s | 首屏文字：底部列與頂部導覽逐字、段落逐行、跑馬燈升起 | yPercent 100→0、opacity、blur 4px→0 | 設定值 0.8–2s，power3.out，stagger 0.01–0.03 | 實測：在臉部之前完成 | H-js-herodelay | [O] |
| 載入 +9s | 人像 | scale 0.9→1、y 49.5→0、brightness 0→1 | 設定值 3.5s（未指定 ease） | 實測：連續插值 13 個中間值，順序在預載移除之後 | H-js-herodelay, I-03 | [O] |
| 重新整理／同分頁再訪 | 上述全部 | — | 設定值 delay 0.1s，無預載 | 實測：預載 display none、無捲動鎖 | H-js-firstvisit, I-01 | [O] |
| 持續＋捲動 | 首屏與頁尾跑馬燈 | 水平無縫循環；捲動時加速、往上捲倒轉 | 設定值：0.2s 內升到 6.25 倍、0.3s 後用 1s 降回 | 實測：不同截圖位置不同 | H-js-marquee, S-pw1440-hero vs sec00 | [O] |
| 持續 | 3D logo | rotationY 360° | 設定值 8s linear 無限；hover timeScale ×6 | 實測：每張截圖角度不同 | H-js-logo, I-11 | [O] |
| 持續 | ONLINE 紅點 | 顏色、放大 | 設定值 CSS 1.5s ease-in-out 無限 | 未實測 | H-css-live | [O] |
| 捲動（pin＋scrub） | 服務段 | SVG 線條描繪、中心詞與圖替換、清單逐行 | 設定值 pin `+=690%`，scrub 0.7 | 實測：1440 連續 7 屏同構圖 | H-js-pins, I-08 | [O] |
| 捲動（pin＋scrub） | 作品段 | 逐案切換標題、圖、說明；背景模糊大圖 | 設定值 scrub 0.15 | 實測：連續 6 屏，上下縮圖預告前後作品 | H-js-pins, I-08 | [O] |
| 捲動（pin＋scrub） | 獎項 3D 場景 | 相機位置與旋轉 | 設定值 `innerHeight*4.5`，scrub 0.4 | 實測：4 屏相機逐步推近證書 | H-js-pins, S-pw1440-sec25–28 | [O] |
| 捲動進入 | 宣言、流程、結尾標題 | 逐字／逐詞顯現（顏色或遮罩） | 未取得各自設定值 | 實測：多張截圖拍到顯現中狀態 | I-09 | [O] |
| 捲動方向 | 頂部導覽 | 逐字 yPercent 藏起／回來 | 設定值 0.35s power3.out，靜止 3s 後回來 | 截圖中導覽字被切半 | H-js-navhide, S-pw1440-sec09 | [O] |
| 捲動方向 | Let's Connect | x 滑出 300%／回 0 | 設定值 0.5s power3.out | 實測：只在 scrollY 0 的截圖出現 | H-js-cta, I-11 | [O] |
| 捲動 | 底部列的「+」 | 旋轉 | 依捲動位移 ×0.3，無固定時長 | 實測：不同捲動位置角度不同 | H-html-bar, I-11 | [O] |
| hover | Let's Connect | 背景色、字色、磁吸位移；離開 elastic 回彈 | 設定值 CSS `2s cubic-bezier(.075,.82,.165,1)`；GSAP 0.4s，離開 0.8s elastic.out(1,0.4) | 實測：hover 後底色與位移改變 | C-cta, H-js-cta, I-04 | [O] |
| 點擊 | 漢堡選單 | 5 條 bar scaleX、線變 X、文字逐行升起去模糊 | 設定值 0.8s power4.inOut，stagger 0.06；文字 0.8s stagger 0.03 | 實測：只拍到 bar 蓋滿的中途 | H-js-menu, I-06, X-06 | [O]（設定）／[H]（完整樣貌） |
| 第一次點擊 | 背景音樂、波形 | 音量 0→0.5、bar scaleY | 設定值 1.5s／0.35s | 實測：波形 class off→on | H-js-sound, I-05 | [O] |
| 點擊 CONTACT | 聯絡面板 | clipPath 由下往上展開 | 設定值 1.2s power4.inOut | 未觀察 | H-js-contact, X-07 | [O]（設定） |
| `prefers-reduced-motion` | — | 無對應處理 | — | 實測：預載與捲動鎖照常 | H-rm, I-10 | [O] |

- [I] **設定值與實測的先後順序不一致，本身就是一個發現**：捲動解鎖用 `setTimeout`（牆鐘），預載與首屏進場用 GSAP（隨畫面更新推進）。設定上兩者大約同時（6s 解鎖、約 5.9s 移除預載），本環境中解鎖卻比預載移除早約 36 秒（I-02）。[H] 在效能差的真實裝置上，使用者可能在預載還蓋著畫面時就能捲動；驗證：在中階手機用 Performance 面板錄一次第一次造訪。
- [O] 第一次造訪時，到穩定首屏的設定總長約 12.5 秒（9s 延遲＋3.5s 臉部進場，H-js-herodelay）。

**核心問題的答案**：[I] 動態在這裡是**敘事的剪輯手段**：預載與延遲進場決定「開場」，pin＋scrub 把服務、作品、獎項做成用捲動控制的鏡頭，逐字顯現控制閱讀速度，跑馬燈、旋轉 logo 與「+」隨捲動反應，讓畫面永遠不靜止。回饋型動態（hover、選單）延續同一套 power3／power4 的緩出曲線，但沒有提供減少動態的替代路徑。

## 4. 響應式

比較 Playwright 1440／768／390（主要），Firecrawl 768／360 為輔；Firecrawl 1920 只有進場中途的首屏（X-01, X-05）。

| 維度 | 桌機 1440 | 平板 768 | 手機 390 | 重新分配的邏輯 |
| --- | --- | --- | --- | --- |
| Layout | 首屏四角分佈；數字段左右兩欄；部落格三欄；流程步驟左右交錯（S-pw1440-hero, sec03, sec23, C-process） | 首屏段落與職稱移到人像下方左右並排（S-pw768-hero）；作品標題移到圖片中央（S-pw768-sec12） | 同 768 的首屏重排（S-pw390-hero）；部落格直向堆疊（S-pw390-sec19–20）；流程交錯幅度縮小（C-process） | 窄寬時把「圍繞人像」的四角資訊收成人像下方一列，讓人像獨佔上半屏 |
| Typography | 1rem=12px；跑馬燈 228px、宣言 192px、段落 13px（C-marquee, C-cinematic, C-hero-para） | ≤800px 規則接手；宣言 141px、段落 21px（stable-t768.json） | 宣言 71px、跑馬燈 114px、段落 10.7px（C-cinematic, C-marquee, C-hero-para） | 標題按 vw 等比縮小；768 段落反而比 1440 大（21 vs 13px），390 又最小（10.7px） |
| Spacing | 以 vw 換算的 rem | 同上，另有 ≤800px 覆寫 | 同上 | 間距跟字級一起按視窗寬度縮放，沒有看到獨立的手機間距尺度（C-html-rem） |
| Navigation | 右上兩欄文字導覽＋社群（C-nav） | 漢堡（82×82），全螢幕紅色選單（C-nav） | 同 768（I-06） | 800px 前後二選一（H-css-mq） |
| Content priority | 頁長 28172px（C-sections） | 28262px | 23294px；作品改成一件一屏（S-pw390-sec11–16） | 多數區塊照搬；流程段在 768／390 截到的是可讀段落（S-pw768-sec17, S-pw390-sec17–18），1440 截到的是逐字顯現中（S-pw1440-sec19–20）[H] 可能只是截圖時間點不同，驗證：在 768 與 1440 同一捲動進度連拍 |
| Components | CTA 138×42（C-cta） | CTA 294×79（S-pw768-hero） | CTA 150×54（S-pw390-hero） | CTA 在觸控寬度放大 |
| Interaction | hover 磁吸 CTA、自訂游標、logo hover 加速（H-js-cta, H-js-logo） | 未觀察 hover 替代 | Lenis `syncTouch`；錨點捲動 1.5s（H-js-lenis） | 捲動驅動的 pin／3D 場景三個寬度都保留（S-pw390-sec04–09, sec21–24）；hover 效果在觸控上沒有看到替代 |

**核心問題的答案**：[I] 響應式策略是「等比縮放的同一部片」：vw 換算的 rem 讓桌機與手機看到同一套分鏡與 3D 場景，只在 800px 把導覽換成漢堡、把首屏四角資訊收到人像下方、把作品與部落格改為直向。它優先保留氣氛與動態，代價是手機段落降到約 11px。

## 5. 模式

本節只從第 1–4 節抽取，不重新分析網站。

### VP-01 「陳述字＋草寫語氣字」的雙字體標題
- 類型：視覺處理
- 出現位置：THIS WILL [FEEL] DIFFERENT（S-t00, S-pw1440-sec01）、[AWARDS &] RECOGNIZATIONS（S-t09, S-pw1440-sec24）、VISUAL [JOURNAL]（S-t08）、EVERY GREAT STORY… [ENDING.]（S-t12, S-pw390-sec26）、「…Unforgettable [Digital Experience.]」（S-pw768-sec17）
- 不變的部分：無襯線（Stack Sans）負責主句、全大寫或細字重；Ruthie 草寫套在情緒詞，疊在主句之間或之下
- 會變的部分：顏色（紅或白）、草寫是疊在中間還是接在後面
- 推測目的：[I] 用字體切換當作「語氣重音」，讓標語像旁白一樣有抑揚（依據 §1 Typography）

### VP-02 紅黑切換當章節邊界
- 類型：視覺處理／結構
- 出現位置：預載整面紅 → 首屏紅黑漸層（S-pw1440-load-00, S-pw1440-hero）、宣言黑 → 火焰 → 數字段紅 → 火焰 → 黑（S-pw1440-sec02–04, S-t00–t01）、撕紙紅帶（S-pw1440-sec12）、流程段的垂直紅光柱（S-pw1440-sec20）、頁尾紅漸層（S-pw1440-sec30, P-08）
- 不變的部分：只在 #990000／#D60407 與 #000000 之間切換；邊界用有機材質（火焰、撕紙、光）而不是直線
- 會變的部分：邊界的素材
- 推測目的：[I] 在沒有傳統區塊標題的長頁裡，用色場轉換標示「換幕」（依據 §1 Color、§2 IA）

### VP-03 釘選＋scrub 的「捲動即播放」段落
- 類型：互動／結構
- 出現位置：服務段（I-08, H-js-pins）、作品段（I-08）、獎項 3D 場景（S-pw1440-sec25–28）；三個寬度都保留（S-pw390-sec04–09, sec21–24）
- 不變的部分：段落被 pin 住數屏，內容隨捲動量替換，背景或構圖不變
- 會變的部分：替換的內容（字詞＋圖、作品、相機位置）與 scrub 平滑值（0.15–0.7）
- 推測目的：[I] 讓捲動變成「快轉／倒帶」的播放控制，把清單型內容（服務、作品、獎項）變成時間軸（依據 §3）

### VP-04 逐字／逐行顯現的文字進場
- 類型：互動（動態）
- 出現位置：首屏底部列與導覽逐字、段落逐行去模糊（H-js-herodelay, H-js-navhide）、宣言與流程與結尾標題（I-09）、選單文字逐行（H-js-menu）
- 不變的部分：拆成字／行，yPercent 100→0 或遮罩升起，power3／power4 緩出，stagger 0.01–0.03
- 會變的部分：觸發（載入、捲動、點擊）、是否加 blur
- 推測目的：[I] 控制閱讀速度，讓文字像字幕一樣「被說出來」（依據 §3）

### VP-05 隨捲動方向退讓的常駐畫框
- 類型：結構／互動
- 出現位置：左上 logo、底部 TENSION／IMMERSION／IMPACT 列、左下音樂波形在 1440／768／390 每一屏都在（I-11）；頂部導覽往下捲逐字藏起（H-js-navhide, S-pw1440-sec09）；Let's Connect 往下捲滑出、往上捲回來（H-js-cta, I-11）
- 不變的部分：固定在視窗四邊，內容不隨區塊改變
- 會變的部分：品牌元素（logo、底部列）一直在並持續微動（自轉、「+」隨捲動旋轉）；功能元素（導覽、CTA）往下讀時退開、往回捲時出現
- 推測目的：[I] 讓長頁每一屏都在同一個「片框」裡，同時在閱讀時把可操作的東西讓開（依據 §2 Navigation、§3）

### VP-06 「第一次才完整播放」的開場
- 類型：UX 決策
- 出現位置：預載只在第一次造訪（H-js-firstvisit, I-01）、首屏延遲 8.5–9s 只在第一次（H-js-herodelay）、捲動鎖只在第一次（H-js-lenis）
- 不變的部分：以 navigation type 與 sessionStorage 判斷，重新整理或同分頁再訪全部改成 0.1s
- 會變的部分：無
- 推測目的：[I] 保留開場儀式感，同時避免回訪者每次都等（依據 §2、§3）

### VP-07 紅色調拼貼影像
- 類型：視覺處理
- 出現位置：服務段方形圖（S-pw1440-sec06–11）、火焰（S-pw1440-sec02, sec04）、墜落人物與撕紙（S-pw1440-sec12）、站立剪影與光柱（S-pw1440-sec21）、紅面具（S-pw1440-hero, sec01, sec21）
- 不變的部分：單色紅＋黑的高對比處理，顆粒或撕裂邊緣
- 會變的部分：主體（人、物件、材質）
- 推測目的：[I] 把來源各異的素材統一成同一套紅色調，只有作品 mockup 與獎項證書保留原色（依據 §1 Color／Imagery）

## 6. 設計語言與設計系統推論

本節只從第 5 節的模式（與少數有證據的 [I]）抽象，不引入新觀察。

| 面向 | 設計語言（一句話） | 根據 |
| --- | --- | --- |
| 色彩哲學 | 單一紅色的明暗兩階＋黑，用色場切換代替區塊標題；作品與獎項是少數保留原色的地方 | VP-02, VP-07 |
| 字體哲學 | 細無襯線說事實，草寫說情緒，兩者在同一句裡對話 | VP-01 |
| 版面哲學 | 每屏是一個鏡頭；版面按視窗等比縮放而不重新排版 | VP-03, §4 |
| 互動哲學 | 捲動是播放控制；按鈕少，但有物理感回饋（磁吸、回彈），並在閱讀時退讓 | VP-03, VP-05 |
| 動態哲學 | 文字被「念出來」、段落被「播放」、畫框永遠在微動 | VP-03, VP-04, VP-05 |
| 響應式哲學 | 同一部片縮小播放，只在 800px 換導覽形式 | §4 核心問題 |
| 資訊層級 | 情緒＞事實：超大字留給宣言，具體資訊放 12–14px | §1 Typography, §2 Content hierarchy |

**設計系統推論**（全部是從渲染結果推論，不代表網站有正式設計系統）：
- Tokens：
  - [I] 色彩：`bg #000000`、`red-deep #990000`、`red #D60407`、`red-hover #CF0808`、`text #F5F5F5`（P-01, P-02, P-03, C-cta, B-colors）。CSS 沒有 `:root` 變數（C-root-vars），這些值寫死在各規則中。
  - [I] 字族：`script = Ruthie`、`sans-light = Stack Sans Headline ExtraLight`、`sans = Stack Sans Headline Regular`（C-fonts）。
  - [H] 字級：rem，html = 0.8333vw；CSS 中最常見 5rem、1.5rem、1.2rem、4rem；驗證：把每個 font-size 對回元素層級。
  - [H] 動態：緩出集中在 power3.out／power4.inOut，stagger 0.03（H-js-herodelay, H-js-menu），可整理成「進場」與「面板」兩個 easing token。
- Components／Variants：
  - [I] 標題：雙字體標題（VP-01），紅字版與白字版。
  - [I] CTA：框線長方形 Let's Connect（C-cta）與圓形描邊送出鈕（C-submit）；沒有看到實心的主按鈕（Let's Connect 只在 hover 時變實心，I-04）。
  - [I] 段落轉場素材：火焰、撕紙、光柱（VP-02）。
  - [I] 釘選展示段：服務型（字＋圖替換）、作品型（模糊背景＋縮圖預告）、3D 場景型（VP-03）。
- States：
  - [O] hover：CTA 紅底＋磁吸（I-04）；logo 加速（H-js-logo）。
  - [O] focus：沒有自訂焦點樣式，隱藏表單的焦點完全不可見（C-focus）。
  - [O] open／closed：選單、聯絡面板、部落格側欄（H-js-menu, H-js-contact）。
  - disabled、error、success：未觀察（X-07）。

## 7. 綜合

- **設計原則**（可遷移到其他專案）：
  1. [DP] 用「主句＋情緒詞換字體」做標題重音，比加粗或變色更能傳達語氣；情緒字要少，否則失去重音（VP-01）。
  2. [DP] 在沒有區塊標題的長頁，用整面色場與有機邊界標示換幕，讓章節不靠文字也能被感覺到（VP-02, VP-07）。
  3. [DP] 把清單型內容（服務、作品、獎項）做成 pin＋scrub 的時間軸時，保留不變的構圖、只替換主體，使用者才看得出「同一段在前進」（VP-03）。
  4. [DP] 昂貴的開場只給第一次：用導覽類型或 session 記住「看過了」，回訪直接進入內容（VP-06）。
  5. [DP] 固定在視窗邊緣的元素分兩種：品牌元素常駐，功能元素（導覽、CTA）在往下讀時退開、往回捲時出現（VP-05）。
- **設計取捨**：
  - 開場儀式 vs 等待：第一次造訪的設定總長約 12.5 秒才到穩定首屏，捲動鎖 6 秒（H-js-herodelay, H-js-lenis）；解鎖用牆鐘、進場隨畫面更新，慢裝置上兩者可能錯位（I-02，[H] 見 §3）。
  - 氣氛 vs 資訊：數字沒寫單位、作品只有一句話、手機段落約 11px（M-L36–41, C-hero-para）。
  - 沉浸 vs 可及性：沒有 reduced-motion 處理、Tab 焦點先落入隱藏表單且不可見、部分元素隱藏系統游標（H-rm, C-focus, C-cta）。這和 Awwwards 評分中 Accessibility 6.60 是使用者提供的所有分數裡最低的一致。
  - 轉換 vs 閱讀：唯一常見的 CTA 在往下讀時看不到（VP-05）。
  - 效能：多個 WebGL canvas 讓軟體算繪環境只有 0.5–2 fps（X-04）；[H] 低階裝置也會受影響，驗證方法同 §3。
- **最值得帶走的一件事**：把捲動當成「播放控制」——pin 住構圖、只替換主體，讓清單變成可以快轉倒帶的鏡頭（VP-03；與 VP-02 的色場換幕一起用效果最好）。
- **一句話總結**：MEER MOHSIN 用黑紅兩色、雙字體標題和 pin＋scrub 分鏡，把個人作品集做成一部用捲動播放的暗黑短片；它換來強烈的品牌記憶，代價是第一次造訪的等待、資訊的具體度與可及性。

## 8. 自我審查

1. **證據等級分布**：E1 27 筆（C- 16、I- 中 E1 的 7 筆、另 4 筆 I- 只有順序或狀態可信）、E2 約 46 筆（H- 24、M- 22）、E3 約 75 筆（S- 與 P-）、E4 4 筆（B-）、E5 0 筆。最弱的環節是**動態時長**：全部只有設定值（E2），本環境的實測只能證明順序（X-04）。
2. **只有單一證據或停在 [H] 的重要結論**：「慢裝置上捲動解鎖早於預載移除」只在本環境量到（I-02），推到真實裝置是 [H]；「ONLINE 不代表真實狀態」是 [H]；流程段在桌機與手機呈現不同是 [H]（可能只是截圖時間點）；間距基準與字級 token 是 [H]；選單開啟後的完整樣貌只有設定值（X-06）。
3. **無法觀察的維度**：桌機 1920 全頁（X-01）讓 1920 的響應式結論只能推論「800px 以上等比放大」（C-html-rem）；聯絡表單、部落格與作品側欄、錯誤／成功狀態（X-07）讓 §2 Form 與 §6 States 不完整；頂部導覽 hover（X-10）；音樂內容（X-09）。
4. **是否有重述而非引用**：§3 動態表重述了 js-excerpts.md 的設定值數字，為了把設定值與實測並排；§6 的 tokens 重述色碼，屬於推論輸出。其餘段落只引用 ID。
5. **下一次最值得補的證據**：(a) 在有 GPU 的機器或實體中階手機上，用 Performance 面板錄第一次造訪，量真實的預載與首屏時長、確認解鎖與預載的順序；(b) 打開選單、聯絡面板、部落格與作品側欄並逐格錄影；(c) 1920 全頁逐屏截圖，驗證等比放大；(d) 在 768 與 1440 的同一捲動進度連拍流程段。
