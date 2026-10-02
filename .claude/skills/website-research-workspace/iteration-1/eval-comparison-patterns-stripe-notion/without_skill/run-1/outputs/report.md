# Stripe vs Notion 首頁設計比較

> 研究日期：2026-10-01｜對象：https://stripe.com 、https://www.notion.com（英文版首頁，美國區）
> 資料來源：Firecrawl 抓取的 markdown、branding 萃取（色彩、字型、元件樣式）、桌機全頁截圖（寬 1920）、手機首屏截圖（360×800）

## 0. 一句話總結
- **Stripe** 是把產品本身當插畫、資訊很密、技術感精緻的路線：漸層光帶、大量真實 UI 模型、深色開發者區、數字牆。首頁約 15,000px，讀起來像產品型錄。
- **Notion** 是把產品介面當主角、周圍用手繪角色點綴的極簡親和路線：黑白為主、只有 CTA 用藍色、粗黑大標、手繪插畫。首頁約 4,800px，只講三件事就收尾。
- 兩站用的是同一套 SaaS 首頁骨架：Hero → Logo 牆 → 功能卡 → 客戶故事 → 數字 → 收尾 CTA → 大型頁尾。差別在資訊密度、色彩情緒、字重，以及「人味」從哪裡來。

## 1. 頁面結構對照
| 順序 | Stripe | Notion |
|---|---|---|
| 1 | 導覽列（Products/Solutions/Developers/Resources/Pricing/Guide me），右側 Sign in、Contact sales | 導覽列置中（Product/Resources/Pricing/Request a demo），右側 Log in、Get Notion free |
| 2 | Hero：先一行會即時跳動的小字「Global GDP running on Stripe 1.72…%」；H1 前半句黑色、後半延伸句灰藍色；雙 CTA（Get started／Sign up with Google）；右上大面積漸層光帶 | Hero：置中的超大粗體 H1「Where teams and agents [Ship] together.」，中間詞是會輪播的膠囊標籤；接副標和雙 CTA（Get Notion free／Request a demo） |
| 3 | Logo 跑馬燈緊貼 Hero 底部 | 產品視窗大圖（Ramp HQ 看板），手繪人物從邊緣探頭 |
| 4 | Bento 格 6 張產品卡，每張是可動的 UI 模型（POS、Checkout、計費、AI 購物、發卡、加密貨幣、Connect） | 兩行灰階 Logo 牆：「The most ambitious companies run on Notion.」 |
| 5 | AI 推薦輸入框（輸入公司網址或業務描述，拿產品建議） | 「AI where your team works.」三張功能卡（Capture/Find/Automate），2+1 排法 |
| 6 | Stripe Sessions 影片 banner | 「See what Notion can do」5 張用例小卡，配手繪圖示 |
| 7 | 「The backbone of global commerce」4 個大數字，配放射線資料視覺 | 「Trusted by teams that ship.」3 張品牌色濾鏡人像引言卡 |
| 8 | 依公司規模分段：企業（手風琴故事）→ 新創（輪播）→ 平台（嵌入元件）→ 引言輪播 | 數據跑馬燈 |
| 9 | 深海軍藍開發者區：架構圖、API 數字、三種整合路徑（含程式碼編輯器模型） | 淺灰底收尾 CTA「Get started today.」 |
| 10 | What's happening 新聞輪播 → Book of the week | 頁尾：Logo、McLuhan 名言、4 欄連結、語系選單 |
| 11 | 收尾 CTA「Ready to get started?」 | — |
| 12 | 5 欄超大頁尾（約 30 個產品、25 種解決方案） | — |

## 2. 兩邊都能用的設計模式
1. **雙 CTA：自助開始配找業務**。主按鈕用實心品牌色，次按鈕降一級（描邊或淡底）。同一組按鈕在導覽列、Hero、收尾區重複三次。手機版改成滿版寬、上下堆疊。
2. **Hero 後馬上接 Logo 牆**。Logo 一律做成單色，不跟 CTA 搶顏色。
3. **拿真實產品 UI 當插畫**。Stripe 用前端元件做出 Checkout、POS、儀表板，還會切換多語系和幣別；Notion 在 Hero 下方直接放完整工作區視窗。目標是讓訪客 5 秒內看到產品長什麼樣。
4. **不等寬的 Bento 功能卡**。每張卡是「小標＋標題＋一張產品畫面」，用卡片大小暗示重要性。
5. **大數字區**。3–5 個「數字＋一行說明」，可以靜態排列（Stripe），也可以做成跑馬燈（Notion）。
6. **人像加引言的客戶故事**。都附姓名、職稱、公司，再加 Read the story 連到深度頁。
7. **淺灰底收尾 CTA 加多欄頁尾**。頁尾都放一點品牌人格：Notion 放名言，Stripe 放書單和 Stripe Press。
8. **標題用句號結尾的完整短句**，語氣篤定（Scale with confidence.／Trusted by teams that ship.）。
9. **動畫只用來強化訊息**。Stripe 用跳動的 GDP 數字和幣別切換；Notion 用輪播詞，並提供可暫停動畫的 Pause 按鈕，對無障礙有加分。
10. **手機版共同做法**：漢堡選單、標題斷成 3–4 行、滿版 CTA、Logo 牆改成跑馬燈。Stripe 手機版拿掉 H1 的灰色延伸句；Notion 把主 CTA 常駐在手機 header。

## 3. 設計語言差異
| 面向 | Stripe | Notion |
|---|---|---|
| 個性 | 精密、技術、份量感，像金融基礎設施 | 簡潔、溫暖、有點俏皮的工作空間 |
| 主色 | 紫 #533AFD；深藍黑 #061B31 | 亮藍 #0075DE，只用在 CTA；文字 #0D0D0D |
| 輔助色 | 淡紫 #E2E4FF、描邊 #B9B9F9，大量橘→粉→紫漸層 | 淡藍 #E6F3FE、米黃 #FFF5E0；膠囊淺綠；客戶卡紅、藍、黃 |
| 背景節奏 | 白 → 淡紫灰 → 整段深海軍藍 → 白 → 淡灰 | 全程白，只有收尾區是淺灰 |
| 字型 | Söhne（sohne-var） | Inter；引言改用襯線體 |
| 字級與字重 | H1 48px、H2 32px，字重偏細 | H1 96px、H2 54px，粗體加緊字距 |
| 標題技巧 | 同一句分兩色：黑色主句＋灰藍延伸句 | 超大粗體，中間嵌輪播彩色膠囊詞 |
| 圓角 | 按鈕 4px，偏銳利 | 按鈕 8px，卡片 8–12px，偏柔和 |
| 間距基準 | 8px | 4px |
| 插畫 | 漸層光帶、粒子與放射線資料視覺、把斜四邊形 Logo 藏進街景攝影 | 黑白手繪角色、線稿頭像、物件圖示 |
| 「人味」從哪來 | 攝影、書單 | 手繪角色、名言、襯線引言 |
| 格線 | 看得到的細縱線和分隔線，像藍圖或帳本 | 沒有可見格線，靠純留白 |
| 資訊密度 | 很高（約 12 段） | 很低（約 7 段） |
| 受眾分流 | 依企業、新創、平台、開發者分段 | 不分流，用三個動詞講完 |

**Stripe 的關鍵**：漸層光帶是品牌簽名，貫穿全頁。細字配雙色標題。藍圖感格線帶出工程精準。中段切成深色開發者區，配程式碼和架構圖。用資料當裝飾，把規模視覺化。用密度建立可信度。

**Notion 的關鍵**：黑白為底只點一抹藍，顏色少，所以每一處都醒目。超粗大標本身就是主視覺。手繪角色讓 AI 工具顯得友善。產品介面就是 Hero。段落極度克制。襯線引言和名言帶出溫度。

## 4. 借用建議
- 多產品線、多受眾，或要傳達可靠、規模感：偏向 Stripe（分段、深色技術區、數字牆、銳利圓角）。
- 單一核心產品、想降低上手門檻，或設計資源有限：偏向 Notion（黑白配一色、大標、產品截圖就能成立）。
- 安全的混搭：Notion 的「少段落＋大標＋產品截圖 Hero」骨架，加上 Stripe 的互動 Bento 產品卡和數字區，再用兩者共通的雙 CTA 重複三次。避免把 Stripe 的細字漸層和 Notion 的粗字手繪混在一起，兩種調性會打架。

## 5. 研究限制
- 這只是單次快照。兩站都在跑 A/B 實驗：Stripe 的 meta 裡有 experiment-treatments；Notion 的輪播詞兩次抓到分別是 Ship 和 Think。其他時間或地區看到的可能不同。
- 色碼和字型來自 Firecrawl 的 branding 自動萃取加上目測，沒有逐行核對 CSS。
- 手機版只看了首屏，hover 和捲動動畫只能從靜態截圖推斷。
