# Vercel 首頁 設計研究

- **網址**：https://vercel.com　**研究日期**：2026-10-01
- **證據來源**：[observations.md](observations.md)（本報告只引用證據 ID，不重貼內容）

> **研究範圍與限制**：研究首頁整頁，重點是動態與手機版變化。資料來自 Firecrawl（1920／768／360）與 Playwright（1440／768／390，含減少動態）。
> Firecrawl 桌機與手機截圖下半頁空白（X-01、X-02），Playwright 整頁截圖也一樣（X-03），所以下半頁的版面只靠 Playwright 逐段視窗截圖（S-pwd-sec、S-pwm-sec）與平板完整截圖（S-t00–t03）。
> 兩個工具寬度不同（X-07），版面只在同寬內比較。深色模式沒有擷取（X-08）。三次 1440 執行中有一次字族不同（X-04），該次數值不採用。

## 1. 視覺

**Color**
- [O] 頁面幾乎只有灰階：背景 #FAFAFA、文字 #171717、次要文字 #4D4D4D、主要按鈕 #171717、次要按鈕白底（P-01, P-02, P-03, C-body, C-nav, C-button.primary, C-button.secondary）。
- [O] `:root` 定義了 10 階灰（`--ds-gray-100…1000`）與藍、紅、琥珀色階（C-var），但首頁可見的藍色只出現在 focus 外框與頁尾的「ALL SYSTEMS NORMAL.」（C-focus, S-t03）。
- [O] branding 把 #0072F5 判成 primary、#FFC96B 判成 secondary、#9A050F 判成 link（B-colors.primary, B-colors.secondary, B-colors.link），但在截圖的主要畫面中看不到這三色當成品牌色使用；#0072F5 和 focus 外框的 rgb(0,114,245) 相同（C-focus）。兩種說法並列：branding 抓到的是系統色，不是畫面上的主色。
- [O] Hero 三角形是純黑 #000000，比文字的 #171717 更深（P-04）。
- [I] 色彩的工作全部交給明度：黑＝可以點／主張，深灰＝補充，淺灰底＝場地。唯一的彩度保留給「系統在跟你說話」的時刻（focus、狀態）（依據 O：C-focus, S-t03, C-stat）。

**Typography**
- [O] 只用 GeistSans 一個字族處理所有標題與內文；Geist Mono 只出現在 768／390 的 Hero 副標與 Recently shipped 的 CLI 畫面（C-body, C-sub@390, S-t02）。
- [O] 字級（1440）：h1 64、h2 56、數據句 24、內文 16、導覽與 Features 14（C-h1, C-h2, C-stat, C-body, C-nav, C-features）。branding 的 body 14px（B-typography）指的是導覽／清單字級，實際內文是 16px（C-body）。
- [O] 大標題字距固定約 −0.06em：h1 64px／−3.84px、h2 56px／−3.36px、手機 h1 48px／−2.88px；數據句 24px／−0.96px（−0.04em）（C-h1, C-h2, C-stat）。
- [O] 標題行高等於字級（64/64、56/56），字重 400–450，不用粗體（C-h1, C-h2）。
- [I] 大字＋細字重＋緊字距，讓標題像一個圖形而不是一句話；層級靠尺寸差而不是粗細（依據 O：C-h1, C-h2）。

**Layout／Grid／Spacing**
- [O] 1440 的內容貼齊 24px 側邊距，外層 max-width 1448px；頁尾 6 欄、每欄 212、欄距 24（C-layout）。
- [O] Hero 是三欄：左標題＋CTA、中央三角形、右側三行清單（S-d00, S-dpw00）。
- [O] 三段產品敘事的標題 x 依序是 24 → 495 → 24，產品圖寬 921，左右交替（C-layout, S-pwd-sec）。
- [O] Recently shipped 在 1440 是兩欄：左邊一張大卡（eve），右邊上下兩張（Passport、Containers）（S-pwd-sec）。
- [I] 段落之間用大片留白分隔，而不是色塊或分隔線（S-d00, S-pwd-sec）。[H] 間距是 4 的倍數（B-spacing，E4）；驗證：量取各段 padding 的 computed style。

**Shape／Border／Shadow**
- [O] 兩種圓角：頁面級 CTA 用膠囊（Deploy now、Talk to sales），頁首按鈕與卡片用 6px（C-button.primary, C-button.header, C-card）。
- [O] 外框一律用 1px 的 box-shadow 環（rgb(235,235,235)），不是 border；頁首捲動後也是用 `0 1px 0 rgba(0,0,0,0.08)` 當底線（C-button.secondary, C-card, C-header）。
- [O] 唯一明顯的陰影是 Hero 三角形的光暈，而且是 canvas 畫出來的（P-05, C-canvas, I-01）。

**Imagery／Iconography**
- [O] 圖像幾乎都是「客戶產品的實際介面」：Notion AI 對話、Zapier 首頁、Mintlify 文件站，各有手機／桌機 × 深／淺四個版本（H-02, S-d00, S-pwd-sec）。
- [O] Recently shipped 卡片用線條插畫、護照實物感圖、CLI 輸出（S-t02, S-pwd-sec）。

**Visual hierarchy／Composition／Density**
- [O] 第一眼是左上的 64px 標題與中央的純黑三角形（S-d00, P-04）。
- [O] 首屏只有兩個主要動作（Deploy now、Talk to sales），加上頁首三個（C-button.primary, C-button.header）。
- [I] 每屏資訊量低：一個標題、一張產品圖、一句數據、四個功能名稱；頁面長度 1440 下約 5930px（source/pw/desktop.json `pageHeight`；S-pwd-sec），對「建立信任＋導向部署」的任務是夠用的密度。

**核心問題的答案**：[I] 這是一套「灰階＋大字＋留白」的視覺語言，把畫面讓給兩樣東西：會動的品牌符號（三角形）與客戶的真實產品畫面。色彩幾乎不承擔品牌任務，品牌感來自字距、明度對比和三角形（依據 O：P-04, C-h1, C-var, H-02）。

## 2. 使用者體驗

- [O] **IA**：首頁依「客群／用途」分三段：建 agent（Notion）、做會擴展的 app（Zapier）、做多租戶平台（Mintlify），之後是新功能與最終 CTA（M-L11, M-L28, M-L45, M-L59, M-L71）。
- [O] **Navigation**：1440 有 Products、Resources 兩個 mega menu 和 Enterprise、Pricing 直連；hover 展開時頁面其餘部分變灰（I-06）。頁首是 sticky（C-header）。
- [O] **User flow／CTA**：Hero 的「Deploy now」（自助）與「Talk to sales」（業務）並列，最終 CTA 又是「Deploy now」與「Onboard your agent」（C-button.primary, C-button.secondary, M-L73）；頁首常駐 Get a Demo／Log In／Sign Up（C-button.header）。
- [O] **Content hierarchy**：三段產品敘事每段都是「標題 → 客戶產品畫面 → 一句客戶數據 → Features 清單」（M-L11–23, M-L28–40, M-L45–57）。
- [O] **Affordance**：主要動作是黑底膠囊，次要是白底細環（C-button.primary, C-button.secondary）；Features 清單項目是 500 字重的黑字，標籤「Features」是 400 灰字（C-features）。[H] 清單項目是連結；驗證：讀取元素 tag 與 href。
- [O] **Discoverability**：1440 的 Hero 清單只顯示三個短語，完整說明要 hover 才出現（I-04）；手機上沒有 hover，只看得到短語輪播（I-12, C-sub@390）。
- [O] **Feedback**：按鈕 hover 變色、導覽 hover 變黑、頁首捲動後出現底線、拖檔案進頁面會出現「Drop to deploy」（I-05, C-header, I-08）。
- [O] **Form／Error／Success**：首頁沒有表單，錯誤與成功狀態看不到（X-11）。
- [I] **Cognitive load**：每段只有一個主張與一個數據，專有名詞集中在 Features 清單（「Fluid Compute」「Tenant Isolation」），對新訪客門檻在清單、不在標題（依據 O：M-L17–23, C-stat）。

**核心問題的答案**：[I] 頁面用「三個客群 × 同一套敘事」讓不同訪客各自找到自己的段落，每段都以真實客戶數據當證據，再把轉換集中在頭尾兩組 CTA，同時保留自助與業務兩條路。負擔主要被降在視覺上（每屏一件事），代價是細節（Hero 說明）被藏在 hover 後面（依據 O：M-L11–57, I-04, M-L73）。

## 3. 動態

每一項都附證據來源；靜態截圖之外的動態全部來自 Playwright（E1），除非註明。

| Trigger | Target | Property | Duration／Easing | Sequence | 證據 | 層級 |
| --- | --- | --- | --- | --- | --- | --- |
| 載入 | Hero 三角形 canvas | 透明度 0→1；之前先顯示平面三角形 | 1200ms linear；約在 DOMContentLoaded 後 3.4 s 開始；之後一個 DIV 700ms linear | 平面三角形 → canvas 光暈淡入 → DIV 淡入 | I-01, H-01 | [O] |
| 時間（持續） | Hero canvas | 光影／陰影方向緩慢變化 | 未觀察（每 500ms 皆有差異） | — | I-02 | [O]；方向描述為目測 |
| 游標移動 | Hero canvas | 未確定 | 未觀察 | — | I-03, X-06 | [H] |
| 時間（約 3.3 s 一輪） | 768／390 的 Hero 等寬副標 | 內容替換：隨機字母亂碼逐步解出新短語 | 停留約 2.7 s、解碼約 0.5–0.7 s（200ms 取樣）；easing 未觀察 | For coding agents → To ship apps and agents → Automated by agents | I-12, C-sub@390, X-10 | [O] |
| 時間（持續） | 768／390 的客戶 logo 列 | 水平位移（無限循環） | 40000ms linear，約 25px/s | 兩組 logo 首尾相接 | I-10, H-06 | [O] |
| hover | 1440 Hero 三行清單 | 文字顏色；被 hover 的一行展開說明，其他行變淺 | color 0.5s cubic-bezier(0,0,0.2,1) | — | I-04 | [O] |
| hover | 主要／次要按鈕 | 背景色 #171717→#383838、#FFF→#F2F2F2，無位移 | 150ms cubic-bezier(0.4,0,0.2,1) | — | I-05, C-button.primary | [O] |
| hover | 導覽連結 | 顏色 #4D4D4D→#171717 | 立即 | — | I-05 | [O] |
| hover | Products／Resources | 展開 mega menu、頁面其他區域變灰 | 未觀察 | — | I-06 | [O] |
| 捲動 | 頁首 | 透明 → #FAFAFA＋1px 底線 | 背景變化時長未觀察；頁首有 opacity 0.3s 轉場 | — | C-header | [O] |
| 捲動進入畫面 | 各段內容 | 沒有偵測到進場動畫 | — | — | I-09 | [O]（不存在） |
| hover | Recently shipped 的 Passport 卡片 | 光暈透明度、橢圓光移動 | 1000ms cubic-bezier(0,0,0.2,1)、1200ms linear | — | I-16, H-04 | [O] |
| 拖曳檔案 | 整頁 | 隱藏頁首與 Hero 文字，顯示「Drop to deploy」 | 未觀察 | — | I-08, M-L9 | [O] |
| 點擊 | 390 漢堡選單 | 全螢幕選單出現；visibility 轉場 | 150ms cubic-bezier(0.4,0,0.2,1)（在減少動態的執行中量到） | — | I-14, I-15 | [O] |
| 點擊（複製） | 底部「Onboard your agent」 | 文字換成「Paste to your agent」並淡入 | 推測 200ms（`command-fade-in`） | — | H-07, H-04 | [H]；驗證：點擊後連拍 |
| focus | 連結、logo | 2px #0072F5 外框、offset 4px | 立即 | — | C-focus, I-07 | [O] |
| 載入 | 文字 | 襯線備援字 → GeistSans | — | — | I-17 | [O] |

**減少動態（prefers-reduced-motion）**
- [O] `reduce` 時：沒有任何 Web Animation、沒有 canvas（Hero 只剩平面三角形）、logo 不移動、副標固定在「For coding agents」（I-13, C-canvas, S-pwm-rm-hero）。
- [O] CSS 層也有對應：頁首轉場關閉、游標動畫暫停；Tailwind `motion-safe:` 前綴包住副標淡入與 marquee 的 will-change（H-05, H-06）。
- [O] 有兩條規則把「減少動態」和「寬度 ≤601px」放在同一個條件裡，關掉打字游標與描線動畫（H-05）。

**核心問題的答案**：[I] 動態在這頁承擔三種功能：(1) **品牌氛圍**：會呼吸的三角形光暈，是全站唯一的「表情」（I-01, I-02）；(2) **在有限空間裡輪播資訊**：手機副標輪播與 logo 跑馬燈，都是桌機上「並列展示」的替代品（I-10, I-12）；(3) **小而快的回饋**：150ms 的色彩變化、頁首底線（I-05, C-header）。它刻意**不用**捲動進場動畫（I-09），內容一出現就是完整的。而且每一層動態都可以被拿掉，頁面仍然完整（I-13）。

## 4. 響應式

寬度：桌機 1440（Playwright；Firecrawl 1920 版面相同，S-d00）、平板 768、手機 390（Playwright；Firecrawl 360 版面相同，S-m00）。

| 維度 | 桌機 1440 | 平板 768 | 手機 390 | 重新分配的邏輯 |
| --- | --- | --- | --- | --- |
| Layout：Hero | 三欄：標題＋CTA｜三角形｜清單（S-dpw00） | 單欄：三角形在上、標題置中、CTA 置中（S-t00, C-h1） | 同平板（S-m00, S-pwm-hero） | 少了橫向空間，就把品牌符號放到最上方當入口，文字改置中成為單一視覺軸 |
| Layout：三段產品敘事 | 兩欄、左右交替（C-layout） | 單欄，標題 → 圖 → 數據 → 清單（S-t00, S-t01） | 同平板（S-pwm-sec） | 交替只在有兩欄時才有意義；單欄時保留原本的閱讀順序 |
| Layout：Recently shipped | 兩欄（1 大＋2 小）（S-pwd-sec） | 單欄堆疊（S-t02） | 單欄堆疊（S-pwm-sec） | 不重排卡片順序，只改欄數 |
| Layout：頁尾 | 6 欄（C-layout） | 3 欄（S-t02） | 2 欄（S-pwm-sec） | 欄數依寬度減半，連結全數保留 |
| Typography | h1 64/64 靠左、h2 56/56（C-h1, C-h2） | h1 64 置中、h2 48/56（C-h1, C-h2） | h1 48/56 置中、h2 32/40（C-h1, C-h2） | h1 在平板不縮、到手機才縮；h2 先縮。字距一直維持約 −0.05～−0.06em |
| Spacing | 側邊距 24（C-layout） | 側邊距 24（C-h2 寬 720） | 側邊距 24（C-h1 x=24、寬 342） | 邊距固定，不隨寬度變化 |
| Navigation | 完整導覽＋三顆按鈕、hover 開 mega menu（S-d00, I-06） | logo＋44×44 漢堡（C-menubtn） | logo＋漢堡；點開全螢幕選單、Products／Resources 變成可展開項、三顆按鈕全寬堆疊且 Sign Up 在最下面（I-14） | hover 的 mega menu 換成點擊的全螢幕手風琴；按鈕保留但從並排改成堆疊 |
| Content priority：Hero 副標 | 三行短語，hover 才看到說明（I-04） | 一行等寬字，三句輪播（S-t00, C-sub@390） | 同平板（I-12） | 三句並列換成同一位置輪播；hover 才有的說明在小螢幕上不顯示 |
| Content priority：客戶 logo | 7 個全部顯示、靜止（I-10, I-11） | 跑馬燈，畫面裁切（I-10, S-t00） | 跑馬燈（I-10, S-m00） | 放不下全部時改成時間輪替，而不是縮小或換行 |
| Content priority：公告列 | 一行（S-d00） | 一行（S-t00） | 360 寬分兩行（S-m00） | 不刪文字，只換行 |
| Components：Hero CTA | 並排、寬 124／130（C-btn@390 對照 C-button.primary） | 並排置中（C-btn@390） | 全寬 342、上下堆疊（C-btn@390） | 手機上把主要動作放大成拇指可及的全寬目標 |
| Components：底部 CTA | 並排置中（S-pwd-sec） | 並排置中（S-t02） | 仍並排置中（S-pwm-sec） | 例外：底部 CTA 不改成全寬 |
| Components：產品圖 | `*-desktop-*.webp`（H-02） | 未量測 | 手機專用構圖（前後兩層）（S-m00, H-02） | 換成手機專用素材，而不是把桌機截圖等比縮小 |
| Interaction／Motion | hover 揭露、Hero canvas、logo 靜止（I-04, I-10） | canvas、marquee、副標輪播（C-canvas, I-10） | 同平板；≤601px 另外關掉游標與描線動畫（H-05） | 小螢幕的動態用來「省空間」，同時關掉一部分裝飾性動態 |

**核心問題的答案**：[I] 視窗變窄時，Vercel 的策略是「保留全部內容，只換呈現方式」：多欄變單欄但順序不變；放不下的並列資訊（Hero 三句、7 個 logo）改成在同一位置隨時間輪播；主要動作放大成全寬。唯一被丟掉的是 hover 才看得到的 Hero 說明，因為手機沒有 hover（依據 O：C-layout, I-10, I-12, C-btn@390, I-04）。

## 5. 模式

本節只從第 1–4 節抽取，不重新分析網站。

### VP-01 動態是可移除的加強層
- 類型：互動／視覺處理
- 出現位置：Hero 先顯示平面三角形再淡入 canvas（I-01, H-01）；減少動態時 canvas、marquee、副標輪播全部不出現（I-13, C-canvas）；副標淡入與 marquee 用 `motion-safe:` 包住（H-06）；頁首轉場在 `reduce` 時關閉（H-05）
- 不變的部分：先有完整的靜態版本，動態只在允許時疊上去
- 會變的部分：關閉的條件（只看 reduced-motion，或也看 ≤601px）
- 推測目的：[I] 讓動態永遠不是理解內容的前提；canvas 晚 3 秒出現也不會造成空白

### VP-02 灰階承擔層級，彩度只給系統訊號
- 類型：視覺處理
- 出現位置：按鈕黑白（C-button.primary, C-button.secondary）；文字 #171717／#4D4D4D（C-body, C-nav, C-stat）；藍色只在 focus 與系統狀態（C-focus, S-t03）
- 不變的部分：可點、主張＝最深色；補充＝中灰；背景＝#FAFAFA
- 會變的部分：三角形用純黑（P-04），比文字更深一階
- 推測目的：[I] 讓客戶產品截圖成為畫面中唯一有顏色的東西，同時讓 focus 一眼可見

### VP-03 「黑色主句＋灰色補充」的兩段式文字
- 類型：視覺處理
- 出現位置：數據句「Notion powers millions」黑、後半灰（C-stat）；Hero 清單 hover 時短語黑、說明灰（I-04）；Features 清單標籤灰、項目黑（C-features）
- 不變的部分：同一句或同一組只用兩個明度，重點在深色
- 會變的部分：深淺的前後順序（數據句是前黑後灰，Features 是標籤灰、項目黑）
- 推測目的：[I] 掃讀時只讀黑字就能得到重點

### VP-04 同一敘事模板重複三次，用左右交替製造變化
- 類型：結構
- 出現位置：Notion 段（M-L11–23）、Zapier 段（M-L28–40）、Mintlify 段（M-L45–57）；1440 的 x 位置 24／495／24（C-layout）
- 不變的部分：標題 → 客戶產品畫面 → 客戶數據句 → Features 清單
- 會變的部分：桌機上標題與圖片在左或右
- 推測目的：[I] 訪客學會一次讀法就能快速比較三種用途

### VP-05 多欄降成單欄時保留原本順序
- 類型：響應式行為
- 出現位置：Hero（S-dpw00 → S-t00）；三段產品敘事（C-layout → S-t01, S-pwm-sec）；Recently shipped（S-pwd-sec → S-t02）；頁尾 6 → 3 → 2 欄（C-layout, S-t02, S-pwm-sec）
- 不變的部分：內容與順序不變、側邊距 24（C-h1, C-h2）
- 會變的部分：欄數；Hero 的三角形移到標題上方（例外：唯一改變順序的地方）
- 推測目的：[I] 手機和桌機講的是同一個故事，只是一欄讀完

### VP-06 小螢幕把空間上的並列換成時間上的輪播
- 類型：響應式行為
- 出現位置：Hero 三行短語 → 一行輪播（C-sub@390, I-12）；7 個 logo 靜止 → 跑馬燈（I-10, I-11）
- 不變的部分：內容全保留，只是同一時間只看到一部分
- 會變的部分：輪播方式（逐字亂碼解碼、等速捲動）
- 推測目的：[I] 不縮小、不換行就能保留桌機上的資訊量；代價是需要等待才能看完

### VP-07 手機上把主要動作放大成全寬
- 類型：響應式行為／UX 決策
- 出現位置：Hero 的 Deploy now／Talk to sales 在 390 變成寬 342 堆疊（C-btn@390）；手機選單的 Get a Demo／Log In／Sign Up 全寬堆疊（I-14）
- 不變的部分：主次之分（黑底主要、白底次要）
- 會變的部分：底部 CTA 是例外，仍並排置中（S-pwm-sec）
- 推測目的：[I] 首屏與選單是最常轉換的地方，給最大的觸控目標

### VP-08 介面回饋小而快，只變色不位移
- 類型：互動
- 出現位置：按鈕 hover 150ms 變色、transform none（I-05）；導覽連結立即變色（I-05）；頁首捲動後只加 1px 底線（C-header）；Hero 清單 0.5s 變色（I-04）
- 不變的部分：只改顏色或一條線，不縮放、不位移
- 會變的部分：時長（立即／150ms／500ms）；展示物例外：Passport 卡片 hover 有 1000–1200ms 的光暈（I-16）
- 推測目的：[I] 介面元件安靜，把「表演」留給三角形和展示卡片

### VP-09 外框用 1px 陰影環，圓角分兩級
- 類型：視覺處理
- 出現位置：次要按鈕、頁首按鈕、卡片的 1px 環（C-button.secondary, C-button.header, C-card）；頁首底線 0 1px 0（C-header）；頁面 CTA 膠囊 vs 頁首按鈕與卡片 6px（C-button.primary, C-button.header, C-card）
- 不變的部分：不用 border、不用大陰影
- 會變的部分：膠囊只給頁面級 CTA
- 推測目的：[H] 用 box-shadow 而不是 border，是為了不影響元件尺寸並讓 hover 狀態可以只換陰影；驗證：檢查 hover 狀態的 box-shadow 是否改變

## 6. 設計語言與設計系統推論

本節只從第 5 節的模式（與少數有證據的 [I]）抽象，不引入新觀察。

| 面向 | 設計語言（一句話） | 根據 |
| --- | --- | --- |
| 色彩哲學 | 灰階負責層級，彩度是稀缺資源，只用在系統訊號 | VP-02, VP-03 |
| 字體哲學 | 一個字族、大字細重緊字距；等寬字只用在「機器在說話」的地方 | 第 1 節 Typography [I]、VP-06 |
| 版面哲學 | 一套敘事模板重複使用，用左右位置而不是新版型製造節奏 | VP-04, VP-05 |
| 互動哲學 | 元件回饋安靜、快速、只變色 | VP-08, VP-09 |
| 動態哲學 | 動態是可以拿掉的一層；氛圍集中在一個品牌符號 | VP-01, VP-08 |
| 響應式哲學 | 內容不刪，只把並列換成堆疊或輪播；主要動作放大 | VP-05, VP-06, VP-07 |
| 資訊層級 | 每段一個主張＋一個數據，重點用深色、補充用灰色 | VP-03, VP-04 |

**設計系統推論**（全部是從渲染結果推論，不代表網站有正式設計系統）：
- Tokens：
  - [I] 色彩：`--ds-background-200` #FAFAFA（頁面）、`--ds-gray-1000` #171717（主要文字與主要按鈕）、#4D4D4D（次要文字，接近 `--ds-gray-900`）、#EBEBEB 環線、#F2F2F2 次要按鈕 hover、#383838 主要按鈕 hover、focus 藍 #0072F5（C-var, C-button.*, I-05, C-focus）。
  - [I] 字級：64／56／48／32／24／16／14；顯示字距約 −0.06em（C-h1, C-h2, C-stat, C-body）。
  - [I] 圓角：膠囊（9999px 等效）與 6px（C-button.primary, C-card）。
  - [I] 間距：側邊距 24、欄距 24（C-layout）；[H] 4px 基準（B-spacing）。
  - [I] 動態：UI 轉場 150ms `cubic-bezier(0.4,0,0.2,1)`；揭露 500ms `cubic-bezier(0,0,0.2,1)`；氛圍 1000–1200ms；跑馬燈 40s linear（I-05, I-04, I-01, I-16, I-10）；[H] 文字替換 200ms（H-07）。
- Components／Variants：
  - [I] Button：primary（黑底）／secondary（白底＋1px 環）× size（頁面級 40 高膠囊／頁首 32 高 6px）（C-button.*）。
  - [I] 產品敘事段：標題、產品圖（手機／桌機 × 深／淺素材）、數據句、Features 清單；variant：左／右對齊（VP-04, H-02）。
  - [I] Logo 列：靜止（寬）／跑馬燈（窄）（VP-06）。
  - [I] Hero 副標：清單＋hover 揭露（寬）／等寬字輪播（窄）（VP-06）。
  - [I] 頁首：透明（頂部）／實底＋底線（捲動後）；導覽：mega menu（寬）／全螢幕手風琴（窄）（C-header, I-06, I-14）。
- States：
  - [O] hover（按鈕、導覽、Hero 清單、卡片）、focus（藍色外框）、expanded（選單）、drag-over（Drop to deploy）（I-04–I-08, I-14, I-16）。
  - 缺口：disabled、loading（只有 M-L9 的「Loading」字串）、錯誤／成功都沒有觀察到（X-11）。

## 7. 綜合

- **設計原則**（可遷移到其他專案）：
  1. [DP] 先做出完整的靜態頁面，再把動態當成可拔除的一層疊上去：減少動態時整層消失，頁面仍然成立（VP-01）。
  2. [DP] 把彩度當稀缺資源：層級用明度建立，顏色只留給 focus 與系統狀態（VP-02, VP-03）。
  3. [DP] 一個敘事模板重複使用，用位置交替而不是新版型製造變化（VP-04）。
  4. [DP] 小螢幕放不下的次要資訊，用「同一位置的時間輪播」取代刪除或縮小；主要動作則放大成全寬（VP-06, VP-07）。
  5. [DP] 介面元件的回饋要小而快（約 150ms 變色），把長時間、氛圍型的動態集中在一兩個展示物上（VP-08）。
- **設計取捨**：
  - 品牌動態（canvas 光暈）約在 DOMContentLoaded 後 3.4 秒才淡入，第一印象其實是平面三角形（I-01）；換來的是載入不被動畫卡住。
  - Hero 的完整說明藏在 hover 後面，手機訪客看不到（I-04, I-12）；換來的是首屏極簡。
  - 手機的 logo 跑馬燈與副標輪播讓畫面一直在動，資訊要等才能看完（I-10, I-12）；換來的是不必縮小字或刪 logo。
  - 沒有捲動進場動畫（I-09），長頁面少了節奏提示，但內容一出現就能讀。
- **一句話總結**：Vercel 首頁用灰階、大字與一套重複的敘事模板建立安靜的骨架，把動態集中在一個可拔除的品牌符號和「小螢幕上代替並列的輪播」上。
- **最值得帶走的一件事**：動態是加強層，不是內容本身：先讓靜態版本完整，再決定哪些地方值得動（DP-1，來自 VP-01）。

## 實作交接摘要

使用者要求「照這個風格幫我做一個類似的首頁」。依研究範圍，本次**沒有寫任何 HTML／CSS／元件程式碼**；以下是給實作任務的起點。實作要另開任務，由使用者決定是否開始。

- **建議沿用的原則**（依可信度排序）：
  1. 灰階層級＋單一系統色（DP-2；VP-02、VP-03，E1 computed style）。
  2. 小而快的元件回饋：150ms `cubic-bezier(0.4,0,0.2,1)` 只變背景色（DP-5；VP-08，E1）。
  3. 動態可拔除：所有動態包在 `prefers-reduced-motion: no-preference` 裡，先有靜態 fallback（DP-1；VP-01，E1＋E2）。
  4. 一套敘事模板重複＋桌機左右交替、手機單欄同順序（DP-3；VP-04、VP-05，E1＋E3）。
  5. 手機：Hero 置中單欄、主要 CTA 全寬堆疊；放不下的次要資訊改輪播（DP-4；VP-06、VP-07，E1）。
- **Tokens 起點**（推論值，實作時要校正）：
  - 色：背景 #FAFAFA、主要文字與主要按鈕 #171717、次要文字 #4D4D4D、環線 #EBEBEB、hover #383838／#F2F2F2、focus 藍 1 個（Vercel 用 #0072F5，建議換成自己的系統色）。
  - 字：一個無襯線字族＋一個等寬字族；字級 64／56／48／32／24／16／14；顯示字距 −0.06em；標題字重 400–450。
  - 形：頁面級 CTA 膠囊、其他 6px；外框用 1px box-shadow 環。
  - 版：側邊距 24、max-width 約 1448；斷點至少在 768 附近（變單欄）與 ≤601（關閉部分動態）。
  - 動：150ms（UI）、500ms（hover 揭露）、1000–1200ms（氛圍）、40s linear（跑馬燈）；200ms 文字替換尚待驗證。
- **不能當規格的部分**：
  - canvas 光暈的實際畫法、是否跟隨游標（I-02、I-03、X-06）：只知道「有在動」，不知道怎麼動。
  - 副標亂碼解碼的逐字時長與 easing（X-10）：只有 200ms 取樣。
  - 底部 CTA 點擊後的文字替換（H-07，停在 [H]）。
  - 間距的 4px 基準（B-spacing，E4）、mega menu 的開合時長（I-06 未量到）。
  - 深色模式完全沒研究（X-08）。
- **品牌界線**：不要沿用 Vercel 的三角形、Geist 字型的品牌用法、「Agentic Infrastructure」等文案、Notion／Zapier／Mintlify 等客戶 logo 與產品截圖、「Drop to deploy」這類產品專屬互動。要借的是結構與節奏，不是符號。

## 8. 自我審查

1. **證據等級分布**：E1 34 筆（C- 18、I- 16）、E2 16 筆（M- 9、H- 7）、E3 24 筆（S- 17、P- 6、I-11）、E4 9 筆（B-）、E5 2 處（I-02 光影方向、I-06 mega menu 字級比較）。最弱的環節是 canvas 的實際行為與副標解碼的時序，只有連拍，沒有逐格量測。
2. **只有單一證據或停在 [H] 的重要結論**：canvas 是否跟隨游標（I-03）、底部 CTA 的文字替換（H-07）、4px 間距基準（B-spacing）、box-shadow 外框的目的（VP-09 推測目的）。「沒有捲動進場動畫」只來自 1440 的三次執行（I-09），手機只比較每段 0.15 與 1.35 秒兩張（S-pwm-sec）。
3. **無法觀察的維度**：下半頁的 Firecrawl 證據（X-01、X-02、X-03）→ 下半頁版面只靠 Playwright 視窗截圖與平板截圖；深色模式（X-08）→ 色彩結論只適用淺色；錯誤／成功／載入狀態（X-11）→ States 推論不完整；Hero 清單前兩行的 hover（X-05）→ I-04 的揭露行為假設三行一致；一次執行字族不同（X-04）→ 未判定是否為 A/B 實驗。
4. **是否有重述而非引用**：第 4 節的表格重新列出了字級數值（第 1 節已有），因為響應式需要逐寬度比較；數值皆引用 C-h1、C-h2，沒有新增觀察。第 6 節 Tokens 重列了色碼，同樣只引用 C- 與 I-。
5. **下一次最值得補的證據**：(a) 用 `requestAnimationFrame` 逐格讀取副標文字，量出亂碼解碼時長；(b) 固定游標長時間錄影，判斷 canvas 是否跟隨游標；(c) 深色模式（`colorScheme: 'dark'`）三寬度重拍；(d) 手機上逐段 100ms 連拍，確認沒有進場動畫；(e) 點擊底部「Onboard your agent」後連拍。
