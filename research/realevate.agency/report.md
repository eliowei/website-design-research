# Realevate 設計研究

- **網址**：https://realevate.agency/　**研究日期**：2026-10-01
- **證據來源**：[observations.md](observations.md)（本報告只引用證據 ID，不重貼內容）

> **研究範圍與限制**：只研究首頁，以及在首頁內直接打開的兩個覆蓋層（Our Selection 分類選單、漢堡選單）；分類頁、About、Contact 不在範圍內（X-10）。
> Firecrawl 三張截圖都落在進場動畫中途（X-01），所以穩定狀態、尺寸與動態一律以 Playwright 的 E1 證據為準，Firecrawl 只用來證明「不同時間點畫面不同」（I-02）。
> 連拍間隔約 0.2 秒（X-03），動畫時長以程式設定值（H-js-*）為主、連拍只證明先後順序。減少動態的結果只在 Chromium 模擬下看過一次（X-09）。

## 1. 視覺

**Color**
- [O] 首頁介面只有兩個顏色：白底 #FFFFFF 與品牌深藍 #1F2B5E；所有文字、外框、選單方塊、預載底色都是同一個深藍（P-01、P-02、P-03、C-body、C-selection-btn、C-var.color）。
- [O] Firecrawl branding 把 textPrimary 判為 #000000（B-colors.textPrimary），但瀏覽器算出的文字色是 rgb(31,43,94) = #1F2B5E（C-body）；以 E1 為準，branding 在這裡是錯的。
- [O] 介面中唯一的高彩度來自照片：首頁方圖（S-p1440）與分類卡照片（S-p1440-sel）。
- [O] 分類覆蓋層換成四個低明度的分類色：#222A4C、#36614D、#2D1C2D、#1C181D，底色是淺灰 #E3E5EB（P-05–P-09，C-var.color）。這四色在 CSS 裡是具名變數，各有 `-muted` 版（C-var.color）。
- [O] 選單打開時頁面蓋上一層灰藍 #AEB3C5（P-10）；沒有深色模式的證據（B-colors.background 為 light，未見 `prefers-color-scheme` 斷點：H-css-media）。
- [I] 單色介面讓「深藍＝Realevate」和「照片＝物件」兩件事完全分開：介面不和照片搶色，照片就成為每一屏的視覺重心（依據 O：P-01、P-02、S-p1440）。

**Typography**
- [O] 三個字族各有固定角色：Google Sans 500 用在幾乎所有文字（巨字、H1、導覽、按鈕、卡片標題）；Monument Extended（寬體大寫，字距 +0.08em）只用在「STARTING FROM 100,000€」標籤；Roslindale Display（襯線、weight 300）只用在選單的 Home／About／Contact（C-body、C-marquee、C-h1、C-price-tag、C-card-type、H-css-nav-menu-links、S-p1440-menu）。
- [O] 1440 寬的實際字級：巨字 218.3px、卡片標題 44.2px、H1 23.7px、導覽／按鈕 17.1px、本文基準 16.4px、價格標籤 13.0px、卡片說明 12.3px（C-marquee、C-card-type、C-h1、C-nav-links、C-body、C-price-tag）。最大與 H1 相差約 9.2 倍。
- [O] Google Sans 一律負字距（本文 −0.01em、巨字 −0.02em），寬體標籤則是正字距 +0.08em（C-body、C-marquee、C-price-tag）；巨字 line-height 1，H1 1.3，`--body-leading` 1.35（C-marquee、C-h1、C-var.grid）。
- [O] 語意上的 H1 是 23.7px 的定位句，視覺上最大的「Elevating Life」不是標題元素，而是 5 個重複的 `.marquee-text`（C-h1、C-marquee、M-L19–27、M-L29）。
- [O] Firecrawl 推估 h1 為 33.3px（1920 寬，B-typography.fontSizes），換算到 1440 約 25px，與 E1 的 23.7px 接近；差異來自字級隨高度再縮放（C-var.scale），以 E1 為準。
- [I] 字級幾乎只有「巨大」和「小」兩級，中間層級空著：巨字負責氣氛，所有資訊都放在 13–24px 的小字裡，閱讀順序因此非常短（依據 O：C-marquee、C-h1、C-nav-links）。

**Layout／Grid**
- [O] 首頁是單一全螢幕：`body overflow:hidden`，scrollHeight 等於視窗高 900（C-body）。
- [O] 構圖是「四角＋中軸」：左上 About、右上 Contact、左下版權、右下 CTA 組，中間一條垂直軸由字標、方圖、H1、價格標籤組成（S-p1440）。
- [O] 字標與方圖同寬（272.8px）且 x 座標相同（583.6），兩者都是 `20vw × scale`（C-logo、C-hero-visual、C-var.scale）。
- [O] 左側元素都對齊 x=61.4（About、版權），右側元素的右緣都在 x=1378.6（Contact、選單鈕）（C-nav-links、C-footer、C-menu-btn）。61.4 = 4.5vw（64.8）× 高度係數 min(1, 900/950)=0.947，正好是 `--grid-padding`（C-var.grid、C-var.scale）。
- [O] 網格變數是 12 欄、gap 2.601vw（C-var.grid）；首頁的四角＋中軸構圖沒有在截圖上顯示出欄位，欄數只影響未研究的子頁（H-css-root 裡的 `--cat-row-*`、`--contact-hero-*` 變數）。
- [I] 用「字標寬＝方圖寬」把上下兩個中心元素綁成一條看得見的軸，四角的小字則把畫面撐到邊界，所以只有十幾個元素也不顯得空（依據 O：C-logo、C-hero-visual、S-p1440）。

**Spacing**
- [O] 間距與尺寸都用 vw 定義再乘係數（`--grid-padding 4.5vw`、`--grid-gap 2.601vw`、`--nav-action-height 3.356vw`）（C-var.grid、C-var.scale）。
- [O] Firecrawl 推估 baseUnit 4（B-spacing），但 E1 量到的 61.4、45.8、185.4 都不是 4 的倍數（C-var.grid、C-selection-btn）；這個網站的間距是比例制，不是 4px 網格。

**Shape／Border／Shadow**
- [O] 圓角一律 0：按鈕、選單鈕、方圖、選單面板、分類卡（C-selection-btn、C-menu-btn、B-spacing、S-p1440-menu、S-p1440-sel）。
- [O] 外框只出現在兩處，都是 1px 深藍：Our Selection 按鈕與價格標籤（C-selection-btn、C-price-tag）。
- [O] 沒有任何陰影；層級用「疊放」表示：方圖疊在巨字上（S-p1440），選單用灰藍遮罩把頁面壓到後面（P-10）。

**Imagery／Iconography**
- [O] 首頁只有一張方形生活照（女子在蒙特內哥羅海岸陽台，M-L17）；預載時在 5 張照片之間切換，最後一張就是首頁方圖（H-html-preloader、S-p1440-load）。圖片都是 AVIF（H-assets）。
- [O] 圖示都是極簡幾何：Our Selection 的四點「::」、選單鈕的兩條長短不一的線、分類卡左上的「R」字標（S-p1440、S-p1440-sel）。
- [I] 「::」四個點對應覆蓋層裡的四張分類卡，是按鈕在預告它打開的內容（依據 O：S-p1440、S-p1440-sel）。這點是推論，沒有文字說明。

**Visual hierarchy／Composition／Density**
- [O] 第一眼是中央的巨字＋方圖（面積最大、位置正中），第二眼是同一軸線上的 H1 與價格標籤，四角的小字最後（S-p1440、C-marquee、C-h1）。
- [O] 整頁可讀文字約 25 個英文字（M-L19–33），一屏就是全部內容（C-body）。
- [I] 低密度符合頁面任務：首頁只負責讓人決定要不要「進去看物件」，資訊留給分類頁（依據 O：C-sel-links、M-L29、M-L31）。

**核心問題的答案**：[I] 這是一套「單色介面＋全彩照片＋超大／超小兩級字」的視覺語言：深藍白負責品牌、照片負責慾望，直角、細線、無陰影讓介面退到後面；四角＋中軸的對稱構圖給出穩定、像海報的第一印象（依據：P-01、P-02、C-marquee、C-h1、C-selection-btn、S-p1440）。

## 2. 使用者體驗

- **Information Architecture**：[O] 物件依「生活型態」分四類（By The Sea、Evergreen、Urban Living、Rare Gems），每類一個網址（C-sel-links、H-html-links）。[O] H1 用國家描述業務（Cyprus、Montenegro、Georgia，M-L29），但入口不按國家分（C-sel-links）。[I] 分類是在回答「你想過哪種生活」而不是「你想投資哪裡」，和「Elevating Life」標語同一個方向（依據 O：M-L19、C-sel-links）。
- **Navigation**：[O] 桌機與平板：About、Contact 在上方兩角，Our Selection＋選單鈕在右下（S-p1440、S-p768）。手機：About、Contact 被 `display:none`，只剩字標、Our Selection 與選單鈕（C-390、S-p390）。選單內容是 Home／About／Contact＋WhatsApp／Email（S-p1440-menu、S-p390-menu）。
- **User flow**：[O] 進站 → 預載約 4 秒（I-01）→ 三種方式打開分類覆蓋層：點 Our Selection、桌機滾輪、手機上滑（I-10、I-11、I-15）→ 點卡片進分類頁（C-sel-links）。聯絡分支：選單內 WhatsApp／Email 或 Contact（S-p1440-menu）。
- **CTA**：[O] 主要動作只有 Our Selection 一個，外框樣式；旁邊的選單鈕是實心深藍方塊（C-selection-btn、C-menu-btn）。[I] 視覺上最重的實心方塊是選單鈕而不是主 CTA；兩者緊貼成一組，所以實心方塊也把視線帶到 CTA 上（依據 O：S-p1440、C-menu-btn）。[O] 頁面上沒有「聯絡我們」型的大按鈕，聯絡都收在選單與 Contact 連結（S-p1440、M-L33）。
- **Affordance／Discoverability**：[O] 首頁沒有任何「往下捲」的提示，但滾輪與上滑都會打開分類覆蓋層（S-p1440、I-10、I-15）。[I] 這讓「習慣性捲動」直接變成主要行動，不需要先發現按鈕；代價是使用者無法預期這個結果（依據 O：I-10）。[O] 向上滾不會關閉覆蓋層，要點底部縮小的首頁才回去（I-10、I-14）。
- **Feedback**：[O] 三個主要控制項都有 hover 回饋：底線長出（About／Contact）、深藍由左填滿（Our Selection）、線條長短互換（選單鈕）（I-05、I-06、I-07）。分類卡 hover 只放大該卡的照片（I-12）。
- **鍵盤焦點**：[O] 所有元素 outline none；只有 About／Contact 聚焦時出現底線，字標、Our Selection、選單鈕聚焦時外觀不變（I-09、H-css-menu-btn）。
- **Form／Error／Success**：[O] 首頁沒有表單（M-L1–33）；錯誤與成功狀態無法觀察（X-07）。
- **Cognitive load**：[O] 每屏可做的選擇：首頁 2 個主動作＋2 個角落連結（S-p1440）；覆蓋層 4 張卡＋返回（S-p1440-sel）；選單 3 個連結＋2 個聯絡方式（S-p1440-menu）。
- **進入成本**：[O] 正常模式下要等約 4 秒的預載才能操作（I-01）；手機橫放直接被「Please rotate your device」擋住（S-p844L、H-css-rotate）；減少動態模式下主要文字與 CTA 一直沒有出現（C-rm、I-16）。

**核心問題的答案**：[I] 首頁被設計成「一個決定」：先用預載和巨字建立氛圍，然後把點擊、滾輪、上滑三種最自然的動作都導向同一個分類選單，選擇數壓到最少。負擔則轉移到別處：4 秒等待、不能預期的捲動行為、幾乎看不到的鍵盤焦點，以及減少動態使用者看不到主要內容（依據：I-01、I-10、I-11、I-15、I-09、C-rm）。

## 3. 動態

| Trigger | Target | Property | Duration／Easing | Sequence | 證據 | 層級 |
| --- | --- | --- | --- | --- | --- | --- |
| 載入 | 預載畫面（藍底、方圖、計數） | 照片逐張替換並放大；數字 0→99 | 設定值：imageDelay .5s、counter 進 .85s／出 .95s；整段到 `is-ready` 約 4.0–4.2 秒 | 藍底 → 方圖出現 → 照片 5 張輪替、計數上升 → 計數離開 | S-p1440-load、I-01、H-js-preloader、M-L13 | O |
| 載入 | 藍色背景幕 | 由下往上收起，露出白底 | 設定值 bgWipeDuration 1.2s，bezier(.73,.15,.15,.99) | 計數結束後 | S-p1440-load（19–20）、S-d00、H-js-preloader | O |
| 載入 | 預載最後一張照片 → 首頁方圖 | 同一張照片留在中央，成為首頁方圖 | 設定值 morphDelay .1s、morphDuration .8s；CSS 起始狀態 clip-path inset(50%)＋scale 1.5 | 背景幕收起時 | S-p1440-load（18–21）、H-css-hero-intro、H-html-preloader | O（連續性）／H（clip 與 scale 的實際過程未逐格看到，X-06） |
| 載入 | 巨字、H1 各行、標籤、角落連結、CTA | 從遮罩下方升起（yPercent 50→0） | 設定值 .55s power2.out | 巨字先、H1 逐行、再標籤與按鈕 | S-p1440-load（21–24）、S-d00、H-js-hero-reveal | O |
| 時間（常駐） | 巨字「Elevating Life」 | 水平位移，向左循環 | 約 −96px/s（1440） | 5 段文字接續 | I-03 | O |
| hover／focus | About、Contact 底線 | scaleX 0→1，由左長出 | .65s cubic-bezier(.7,.6,0,1)（量到 600ms 達 1） | — | I-05、C-underline、H-css-underline | O |
| hover | Our Selection | 深藍由左往右填滿，文字轉白 | .75s cubic-bezier(.7,.6,0,1)（量到 700ms 完成） | 背景與文字同步 | I-06、C-selection-btn | O |
| hover | 選單鈕兩條線 | 長短互換 | 未觀察 | — | I-07、S-p1440-hover | O（時長未觀察） |
| 滾輪／上滑／點擊 | 整個首頁＋分類卡 | 首頁縮小並沉到下方；四張卡由上方錯落落下 | 連拍約 1 秒內完成（X-03）；easing 未觀察 | 首頁先縮 → 卡片不等高落下 → 對齊 | S-p1440-sel-seq、I-10、I-11、I-15 | O（順序）／H（時長） |
| 點擊 | 選單 | 灰藍遮罩；深藍方塊從右下展開；文字逐行升起 | `--overlay-duration .8s` 是否套用未驗證 | 遮罩與方塊 → 文字逐行 | S-p1440-menu-seq、I-13、C-var.easing | O（順序）／H（時長） |
| hover | 分類卡照片 | scale 1→1.045，亮度 1.14、飽和 1.12；整卡 brightness 1.08 | .8s cubic-bezier(.18,.13,0,.99) | 只有被 hover 的卡 | I-12、H-css-selection-card | O |
| 滑鼠移動 | 方圖、巨字 | 無變化 | — | — | I-04 | O |
| reduced motion | 預載、轉場 | 預載移除、底線與分類頁 transition 設 none | — | 但首頁主要文字與 CTA 一直保持 hidden | H-css-reduced-motion、C-rm、S-rm1440、I-16 | O（Chromium 模擬，X-09） |

- [O] 兩種 easing 在全站共用：控制項用 `--standard-easing` = `--cta-motion-easing` = cubic-bezier(.7,.6,0,1)，分類卡照片用 cubic-bezier(.18,.13,0,.99)（C-var.easing、H-css-selection-card）。
- [O] 沒有捲動驅動的視差：頁面不捲動（C-body），滾輪事件被拿來觸發覆蓋層（I-10、H-js-wheel）。ScrollTrigger 有載入（H-html-scripts），但首頁沒有看到它的作用；[H] 它用在分類頁（驗證：研究分類頁）。
- [O] 減少動態：CSS 有 5 個對應區塊、JS 有一個判斷函式（H-css-reduced-motion、H-js-reduced），但在 Chromium 模擬下首頁停在 `spa-transition-scroll-locked`，巨字、H1、價格標籤、Our Selection 都是 hidden（C-rm、S-rm1440）。[H] 原因是進場動畫負責把這些元素設成可見，而預載被 `display:none` 後動畫沒有被觸發；驗證：在實機開啟「減少動態」重看，並追 app.js 中預載結束的事件。

**核心問題的答案**：[I] 動態在這裡承擔三個功能：(1) 品牌氛圍與等待包裝——預載用物件照片輪播把 4 秒等待變成作品集預告，最後一張照片直接留下來變成首頁主圖，所以等待和內容是連續的；(2) 狀態轉換——覆蓋層用「縮小首頁、卡片落下」說明你仍在首頁之上；(3) 微互動回饋——同一條 easing、同一種「由左填滿」語彙。代價是內容的可見性綁在動畫上（依據：S-p1440-load、H-js-preloader、S-p1440-sel-seq、I-05、I-06、C-rm）。

## 4. 響應式

三個寬度都用 Playwright 的穩定狀態（C-768、C-390、S-p768、S-p390）；Firecrawl 三張只拍到進場中途，不拿來比較（X-01）。另加手機橫放（C-844L）。

| 維度 | 桌機 1440×900 | 平板 768×1024 | 手機 390×844 | 重新分配的邏輯 |
| --- | --- | --- | --- | --- |
| Layout | 四角＋中軸；12 欄變數 | 不變（四角＋中軸）；8 欄 | 四角收掉：上方只剩置中字標，CTA 組與版權移到中軸；4 欄 | 窄螢幕放不下四角的張力，全部收進中軸 |
| Typography | 巨字 218px、H1 23.7px（2 行）、標籤 13px | 巨字 189px、H1 20.5px（2 行）、標籤 11.3px | 巨字 140px、H1 21.5px（3 行）、標籤 10px | 全部由 vw×係數（1／1.54／2.25）產生；手機 H1 相對寬度反而放大（約 5.5vw），讓定位句在巨字之後仍讀得到 |
| Spacing | 左右邊距 61.4px（4.5vw×0.947） | 53.2px | 未直接量（元素多為置中） | 同一公式隨寬度與高度縮放 |
| Navigation | About／Contact 在上角；選單鈕在右下 | 同桌機 | About／Contact `display:none`，只能從選單進入 | 減少頂部元素，把導覽集中到一個按鈕 |
| Content priority | 全部內容 | 全部內容 | 內容不刪，About／Contact 改在選單內 | 內容量本來就少，只調整入口位置 |
| Components | 分類卡：直立長卡、直排標題；選單：右下角方塊 | 選單：右下角方塊（同桌機） | 分類卡：橫向長條、水平標題、照片在右；選單：置中近滿寬方塊 | 卡片方向跟著螢幕方向轉：直螢幕用橫條堆疊 |
| Interaction | hover 回饋；滾輪開覆蓋層 | 未測 hover（觸控模擬）；點選單可開 | 上滑開覆蓋層；hover 樣式只在 `hover:hover` 時套用 | 把「捲動即前進」從滾輪換成手勢 |

- [O] 證據：C-768、C-390、S-p768、S-p768-menu、S-p390、S-p390-menu、S-p390-sel、I-15、H-css-media、C-var.scale。
- [O] 尺寸也跟著視窗**高度**縮放：`--layout-size-scale = 裝置係數 × min(1, 100svh/950px)`，所以 1440×900 的所有尺寸都是 1440×950 時的 0.947 倍（C-var.scale、C-var.grid）。
- [O] 手機橫放（高 ≤650、寬 ≤1024）被整頁藍色「Please rotate your device」蓋住，底下的字級已縮到 4–6px（C-844L、S-p844L、H-css-rotate、M-L1）。
- [O] 平板與手機的斷點以「寬度＋方向」判斷（`max-width:650px and (orientation:portrait)` 出現 14 次），不是單純寬度（H-css-media）。

**核心問題的答案**：[I] 這個網站的響應式策略是「等比例縮放整張海報」，而不是重排資訊：同一個公式讓構圖在任何寬高下都剛好一屏；只有在手機直向才做兩件結構性調整——四角收進中軸、分類卡由直立改成橫條；無法維持一屏構圖的手機橫向則直接擋掉（依據：C-var.scale、C-768、C-390、S-p390-sel、C-844L）。

## 5. 模式
本節只從第 1–4 節抽取，不重新分析網站。

### VP-01 單色介面，彩度只交給照片
- 類型：視覺處理
- 出現位置：首頁文字與控制項（C-body、C-selection-btn、C-menu-btn、P-02）、預載畫面（P-03）、選單面板（P-11）、分類卡色塊與照片（P-06–P-09、S-p1440-sel）
- 不變的部分：介面元素只用一個深色＋白色；照片是畫面中唯一的高彩度
- 會變的部分：分類覆蓋層把深藍換成各分類自己的深色（仍是低明度單色）
- 推測目的：[I] 讓物件照片在每一屏都是視覺重心，介面色只負責品牌識別（§1 Color）

### VP-02 直角、細線、無陰影
- 類型：視覺處理
- 出現位置：Our Selection 按鈕與價格標籤（C-selection-btn、C-price-tag）、選單鈕與選單面板（C-menu-btn、S-p1440-menu）、方圖與分類卡（C-hero-visual、S-p1440-sel）
- 不變的部分：圓角 0；需要邊界時用 1px 同色線；沒有陰影
- 會變的部分：實心（選單鈕、選單面板、分類色塊）或外框（CTA、標籤）
- 推測目的：[I] 讓介面看起來像印刷品的版面，不像 App 的元件（§1 Shape）

### VP-03 遮罩內逐行升起的文字揭示
- 類型：互動（動態）
- 出現位置：首頁進場的巨字、H1 各行、角落連結（S-p1440-load、S-d00、H-js-hero-reveal）、選單的 Home／About／Contact（S-p1440-menu-seq）
- 不變的部分：文字被裁在自己的行框裡，從下方往上移入；多行時逐行先後出現
- 會變的部分：時長（首頁設定 .55s power2.out；選單未量到）
- 推測目的：[I] 每次出現新的文字層都用同一種「升起」語彙，呼應「Elevating」的品牌字義（§3）；字義的連結是推論

### VP-04 由左往右「長出」的 hover 回饋，共用一條 easing
- 類型：互動
- 出現位置：About／Contact 底線（I-05、C-underline）、Our Selection 填色（I-06、C-selection-btn）
- 不變的部分：方向由左到右；cubic-bezier(.7,.6,0,1)；約 0.65–0.75 秒
- 會變的部分：作用的屬性（底線 scaleX 或背景位置＋文字色）
- 推測目的：[I] 用一種動作語彙讓所有可點的東西被認出來，而且回饋比一般網站慢，配合整體從容的節奏（§2 Feedback、§3）

### VP-05 覆蓋層取代換頁，首頁始終留在畫面裡
- 類型：結構／UX 決策
- 出現位置：分類覆蓋層（首頁縮小在底部，點它即返回：S-p1440-sel、I-14）、選單（首頁在灰藍遮罩後：S-p1440-menu、P-10）、手機分類覆蓋層（S-p390-sel）
- 不變的部分：首頁不消失，只被縮小或壓暗；URL 不變（I-10、I-14）
- 會變的部分：首頁被縮小（分類）或被遮罩（選單）
- 推測目的：[I] 讓使用者清楚自己仍在入口，返回路徑永遠可見（§2 User flow）

### VP-06 所有自然動作都導向同一個主行動
- 類型：UX 決策
- 出現位置：點 Our Selection（I-11）、桌機滾輪（I-10）、手機上滑（I-15）
- 不變的部分：結果都是打開分類覆蓋層
- 會變的部分：觸發方式依裝置不同
- 推測目的：[I] 首頁只有一件事要做，所以不論使用者用哪種方式「往前」，都會到物件分類（§2 核心問題）

### VP-07 尺寸由寬度×裝置係數×高度係數一次決定
- 類型：響應式行為
- 出現位置：字級（C-marquee、C-768、C-390）、字標與方圖寬（C-logo、C-hero-visual）、邊距與按鈕高（C-var.grid、C-var.scale）、手機橫放的極小字級（C-844L）
- 不變的部分：所有值都是 `desktop vw 值 × responsive-size-scale × min(1, 100svh/950px)`
- 會變的部分：裝置係數 1／1.54／2.25 與欄數 12／8／4
- 推測目的：[I] 保證任何視窗都剛好是一屏完整構圖（§4 核心問題）

### VP-08 四角框住中軸的對稱構圖
- 類型：結構
- 出現位置：桌機首頁（S-p1440）、平板首頁（S-p768）
- 不變的部分：四個角各一個小元素，中軸放字標、方圖、H1、標籤
- 會變的部分：手機直向把四角收進中軸（S-p390、C-390）
- 推測目的：[I] 以極少元素撐滿整個畫面，造出海報式的穩定感（§1 Layout）

### VP-09 次要字族各只承擔一個角色
- 類型：視覺處理
- 出現位置：Monument Extended 只用在價格標籤（C-price-tag）；Roslindale Display 只用在選單大字（H-css-nav-menu-links、S-p1440-menu）
- 不變的部分：Google Sans 承擔其餘所有文字；次要字族各只出現在一個位置
- 會變的部分：次要字族的性格（寬體大寫 vs 細襯線）
- 推測目的：[I] 讓「價格」和「選單」這兩個時刻在字形上就和其他內容不同，同時不打散整體一致性（§1 Typography）

## 6. 設計語言與設計系統推論
本節只從第 5 節的模式（與少數有證據的 [I]）抽象，不引入新觀察。

| 面向 | 設計語言（一句話） | 根據 |
| --- | --- | --- |
| 色彩哲學 | 介面單色、照片全彩；換場景時換的是整組單色，而不是加強調色 | VP-01 |
| 字體哲學 | 一個無襯線家族打底，特殊字族只在特定時刻出場；字級只有巨大和小兩級 | VP-09、§1 Typography |
| 版面哲學 | 每個畫面都是一張完整的海報：四角＋中軸，一屏即全部 | VP-08、VP-07 |
| 互動哲學 | 首頁只有一個方向，任何「往前」的動作都去同一處；回饋一律由左長出 | VP-06、VP-04 |
| 動態哲學 | 「升起」是主要語彙；狀態轉換用縮放與疊層，不用換頁 | VP-03、VP-05 |
| 響應式哲學 | 等比例縮放優先，只在直向手機改結構；無法保持構圖時寧可擋住 | VP-07、§4 |
| 資訊層級 | 氛圍（巨字＋照片）在上、資訊（H1、價格）在下、導覽退到四角 | VP-08、§1 Visual hierarchy |

**設計系統推論**（全部是從渲染結果與 CSS 推論，不代表網站有正式設計系統）：
- Tokens：
  - [I] 色彩：`brand-navy #1F2B5E`、`muted #626C95`、`white`，加 4 組分類色（base＋muted）。這些是 CSS 變數，E1 可讀（C-var.color）；「分類色是一套換膚機制」是推論。
  - [I] 字級：以 `--desktop-h1…h6／text` 的 vw 值為基礎，乘 `--responsive-size-scale`（1／1.54／2.25）和高度係數（C-var.scale、H-css-root）。
  - [I] 間距：`--grid-padding 4.5vw`、`--grid-gap 2.601vw`，沒有 4px 基準（C-var.grid、§1 Spacing）。
  - [I] 圓角：只有一個值 0（VP-02）。
  - [I] 動態：`standard-easing` cubic-bezier(.7,.6,0,1)、卡片 hover easing cubic-bezier(.18,.13,0,.99)、`overlay-duration .8s`（C-var.easing、H-css-selection-card）。
- Components／Variants：
  - [I] Button：外框版（Our Selection）與實心方塊版（選單鈕），兩者等高、緊貼成一組（C-selection-btn、C-menu-btn）。
  - [I] Link：`.link-underline` 一種，hover／focus 時底線由左長出（H-css-underline）。
  - [I] Tag：寬體大寫＋1px 外框（C-price-tag）。
  - [I] Selection card：直立（桌機）與橫條（手機）兩種版型，同一套色塊＋標題＋說明＋照片（S-p1440-sel、S-p390-sel）。
  - [I] Overlay：分類覆蓋層與選單面板（VP-05）。
- States：
  - [O] hover：連結、按鈕、選單鈕、分類卡都看得到（I-05、I-06、I-07、I-12）。
  - [O] focus：只有 About／Contact 有可見狀態，其他控制項看不到（I-09）。
  - disabled、選中、錯誤：首頁上看不到（X-07）。

## 7. 綜合
- **設計原則**（可遷移到其他專案）：
  1. [DP] 把介面壓成單色，讓照片成為唯一的彩度來源；需要區分內容類別時，換整組單色而不是加強調色（VP-01）。
  2. [DP] 用少量元素做「四角＋中軸」的海報構圖，並讓尺寸同時跟寬度和高度縮放，保證每個視窗都是完整的一屏（VP-08、VP-07）。
  3. [DP] 微互動只用一種方向、一條 easing；文字出場也只用一種動作，讓整站的動作像同一個人做的（VP-04、VP-03）。
  4. [DP] 入口頁只放一個主行動，並把使用者最自然的「往前」手勢都接到它（VP-06）；同時用疊層而非換頁，讓返回路徑一直看得見（VP-05）。
  5. [DP] 次要字族只給一個角色，用字形標記少數關鍵時刻（VP-09）。
- **設計取捨**：
  - 氛圍換時間：每次進站約 4 秒預載才可操作（I-01）。
  - 一致性換可預期性：滾輪與上滑被拿去開覆蓋層，使用者無法從畫面上預期（I-10、I-15、§2 Affordance）。
  - 美感換可及性：鍵盤焦點幾乎看不見（I-09）；在 Chromium 減少動態模擬下，主要文字與 CTA 沒有出現（C-rm，X-09 尚待實機驗證）。
  - 構圖完整換裝置相容：手機橫放被整頁擋住（S-p844L）。
  - 視覺標題換語意標題：最大的字是裝飾跑馬燈，真正的 H1 只有 23.7px（C-h1、C-marquee）；搜尋與螢幕閱讀器拿到的是定位句，眼睛先看到的是標語。
- **最值得帶走的一件事**：預載的最後一張照片直接留在原位成為首頁主圖，等待和內容之間沒有斷點——這是 VP-01（照片是主角）與 VP-03（同一種揭示語彙）在進場時的組合，也是本站動態最有說服力的地方（S-p1440-load、H-js-preloader）。
- **一句話總結**：Realevate 首頁把房地產網站做成一張會動的海報：介面單色、照片全彩，所有動作都導向同一個分類選單；它用一致的動作語彙換到強烈的品牌感，代價是等待時間、捲動行為難以預期，以及鍵盤與減少動態使用者的可及性。

## 8. 自我審查
1. **證據等級分布**：E1 38 筆（C- 23、I- 15，不含 I-02）、E2 25 筆（H- 18、M- 7）、E3 32 筆（S- 20、P- 11、I-02）、E4 7 筆（B-）、E5 少數（選單大字為襯線、照片內容描述、「::」對應四張卡）。最弱的環節是動畫的實際時長與 easing：除了 hover 有 E1 序列，其他都只有程式設定值（E2）加 0.2 秒間隔的連拍（X-03、X-06）。
2. **只有單一證據或停在 [H] 的重要結論**：減少動態下內容不出現（只有一次 Chromium 模擬，原因停在 [H]）；選單與覆蓋層的動畫時長（[H]）；預載方圖 clip-path／scale 的實際過程（[H]）；「::」圖示預告四張卡、「升起」呼應 Elevating 是 [I] 的推論，沒有直接證據。
3. **無法觀察的維度**：表單、錯誤與成功狀態（X-07）；觸控與鍵盤操作覆蓋層（X-07）；平板、手機的跑馬燈速度（X-04）；選單大字 computed style（X-05）；子頁（X-10）。這些限制主要影響 §2 Feedback／鍵盤可及性與 §4 Interaction 欄。
4. **是否有重述而非引用**：§4 表格重寫了 C-768、C-390 的字級數字，因為三寬度比較需要並列；§1 Typography 列出 1440 的字級是第一次出現於分析，其餘段落只引用 ID。
5. **下一次最值得補的證據**：(a) 以 `recordVideo` 錄下進場、分類覆蓋層、選單開啟，逐格量時長；(b) 在實機（iOS／macOS）開啟「減少動態」重看首頁；(c) 鍵盤進入覆蓋層的焦點順序；(d) 打開 Awwwards 頁面核對得獎資訊（X-08）。
