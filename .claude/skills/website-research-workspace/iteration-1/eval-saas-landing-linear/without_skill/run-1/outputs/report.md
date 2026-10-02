# Linear 首頁設計語言研究

- 研究對象：https://linear.app（首頁）
- 擷取日期：2026-10-01
- 擷取方式：Firecrawl（桌面 1920px 全頁截圖、行動版 360px 全頁截圖、Markdown 內容、branding 品牌資料），再用 Pillow 從截圖取樣實際像素色值
- 截圖：`screenshots/desktop-full.png`、`screenshots/mobile-full.png`；分段檢視用 `desktop-part00`–`07.png`、`mobile-sheet0`–`1.png`

> 註：Linear 首頁內容常常更新（例如目前主打 AI agent 與「Loops」）。本報告記錄的是 2026-10 這個版本；設計原則多年來大致穩定，具體文案與示意畫面則會一直換。

## 1. 一句話總結
**「把產品本身當成主視覺的暗色極簡風」**：近乎純黑的背景、單一無襯線字體（Inter）、極度克制的配色，再用大量**以 HTML 重建、可互動的產品 UI** 取代插畫與行銷圖。整頁讀起來像一份精心排版的產品說明書，而不像廣告。

## 2. 頁面結構（由上而下）
| # | 區塊 | 內容 | 版面 |
|---|---|---|---|
| 1 | 導覽列 | Logo／Product、Resources、Customers、Pricing、Now、Contact／Log in + Sign up（白色膠囊按鈕） | 固定在頂端，下方有 1px 細邊線 |
| 2 | Hero | H1「The product development system for teams and agents」+ 一行副標 +「New Loops →」公告連結 | **靠左對齊**；公告連結放在右側 |
| 3 | Hero 產品畫面 | 完整的 Linear App 介面（側邊欄、Issue 詳情、AI Agent 對話視窗） | 寬約 1300px，下方有灰色聚光燈式漸層 |
| 4 | Logo 牆 | OpenAI、Vercel、Salesforce、Figma、Cursor、Coinbase、Ramp + 等寬小字「POWERING THE COMPANIES BUILDING THE FUTURE」 | 單排、單色 |
| 5 | 品牌宣言 | 「**A new species of product tool.** Purpose-built for…」 | 大字段落，前半句白、後半句灰 |
| 6 | 三大支柱 | Fig 0.1／0.2／0.3：Purpose-built、Powered by agents、Designed for speed | 三欄，線框等角插圖 + 細直分隔線 |
| 7–10 | 四個功能章節 | Intake and integrations／Planning and monitoring／AI and automations／Build, review, and ship | 固定模板：左大標、右說明 + Learn more →，下方產品 UI 示意，最底是「Features」子功能清單（帶 + 號） |
| 11 | Changelog | 4 則最新更新，時間軸樣式 | 四欄 |
| 12 | 客戶見證 | OpenAI（淡藍紫漸層卡）、Ramp（螢光黃卡）+「40,000 product teams」 | 全頁唯一的大面積亮色 |
| 13 | 最終 CTA | 「Built for the future. Available today.」+ Get started／Contact sales | 置中，全頁唯一置中的大標 |
| 14 | Footer | 6 欄連結 | 左側只放 Logo 圖示 |

**敘事節奏：** 我們是什麼 → 誰在用 → 為什麼不同 → 能做什麼（四個章節的順序就是產品開發流程：收集 → 規劃 → AI → 建構）→ 持續進步中 → 別人怎麼說 → 行動。

## 3. 色彩系統（截圖像素取樣 + branding）
| 角色 | 色值 | 用法 |
|---|---|---|
| 背景 | `#08090A` | 全頁底色，帶一點冷調的近黑（theme-color 也是這個值） |
| 主要文字 | `#F7F8F8` | 標題、重點字；不是純白 |
| 次要文字 | `#8A8F98` | 副標、說明、宣言後半句 |
| 卡片內文 | 約 `#C6C9CF` | 三支柱描述 |
| 分隔線 | `#1C1C1C`–`#2A2C2E` | 導覽列底線、章節之間的 1px 線 |
| 主按鈕 | `#E5E5E6` 底 + 黑字 | Sign up、Get started |
| 次按鈕 | `#141516` 底 + 白字 | Contact sales |
| 品牌紫 | `#5E6AD2` | 只出現在產品 UI 示意裡，行銷層幾乎不用 |
| 強調螢光黃 | `#E4F222` | Ramp 見證卡、連結強調 |
| 淡藍紫 | `#E6E4FF` → `#DCE5FF` | OpenAI 見證卡漸層 |
| 狀態色 | 黃／綠／紅／青綠 | 只出現在產品 UI 裡 |

觀察重點：(1) 灰階占了 95%，品牌色被收進產品畫面裡；(2) 亮色只在頁尾前用一次，是長頁面的視覺高潮；(3) 文字層級靠亮度區分，不靠字重或顏色。

## 4. 字體排印
- 字體：`Inter Variable`，後備為系統字（SF Pro Display、-apple-system、Segoe UI、Roboto…），標題和內文共用。
- 等寬字：用在「POWERING THE COMPANIES…」「FIG 0.1」、Changelog 日期等小標籤，大寫加寬字距，營造技術文件／圖說的質感。
- 尺寸（branding 抓到的值）：H1 64px、H2 48px、內文 15px。
- 標題字重偏中等（目測約 500–510，不用粗體）、字距收緊、行高約 1.0–1.1。章節標題刻意強制斷成兩行（「Intake / and integrations」）。
- 內文 15–16px、灰色、段落短（2–3 行）。

## 5. 版面與網格
- 主要內容寬約 1280–1300px（在 1920px 螢幕上兩側各留約 310px）。
- 雙欄章節：左大標約占 1/3，右側說明從中線開始。
- 章節之間留白很大（約 200px 以上），用極淡的全寬 1px 線分隔。
- 4px 間距基準、卡片圓角約 8px、按鈕是全圓角膠囊形。
- 全站靠左，只有最後的 CTA 置中，用來收尾。

## 6. 元件語彙
- 主按鈕：淺灰白 `#E5E5E6`、黑字、膠囊形、小尺寸；次按鈕：`#141516`、白字。
- 文字連結：「Learn more →」灰字 + 箭頭、無底線。
- 公告標籤：「New」白 +「Loops →」灰，不用徽章底色。
- 功能清單：「Linear Agent +」可展開，分欄排列。
- 圖說標號：「FIG 0.1」等寬小字，模仿技術手冊。
- 插圖：細線框等角立體圖，單色、低對比。
- 產品示意：用 HTML／CSS 重建的看板、時間軸、程式碼 diff、聊天串，邊緣淡出到背景。
- 見證卡：大字引言 + 左下角 Logo、姓名、職稱，整張卡用單一亮色。
- 時間軸：小圓點 + 水平細線。

## 7. 視覺手法與動態（從靜態截圖推斷）
- 聚光燈漸層：Hero 產品畫面下方有一片灰色光暈，把產品托起來。
- 邊緣淡出（mask）：看板、時間軸、diff 的左右兩側淡出到黑色，暗示畫面外還有更多。
- 重疊層次：Slack 對話框疊在看板上、多個 agent 視窗橫排、Issue 清單疊上 diff，用「疊」來表達工作流程的串接。
- 假互動：游標、「Working…」、「Worked for 10 sec」等文字，暗示畫面有打字和狀態切換動畫。
- Markdown 裡同一段 H1 出現三次，表示不同斷點各有一個手動斷行的版本。

## 8. 文案語氣
- 短、篤定、少形容詞（「Purpose-built」「Built for the future. Available today.」）。
- 自己定義品類（「A new species of product tool」），不跟競品比較。
- 兩段式句型：白色主張 + 灰色補充。
- 全頁圍繞「teams and agents」，把 AI 定位成隊友。
- 用加粗的數字背書（40,000）。

## 9. 響應式（360px）
- 導覽列：Logo + Log in + Sign up + 漢堡選單（Sign up 不收進選單）。
- H1 斷成 4 行，約 36–40px，仍然靠左。
- 產品 UI 不縮小，保持原尺寸，只裁切顯示局部。
- 雙欄改單欄；三支柱和 Changelog 改成垂直堆疊；見證卡改成橫向滑動（右側露出下一張）；Footer 6 欄變 2 欄。

## 10. 可以帶回自己官網的原則
1. 讓產品自己當主角：Hero 放一張高品質、有真實資料感的產品畫面。
2. 背景用近黑（`#08090A`），文字用 `#F7F8F8`，不要用純黑純白。
3. 色彩要極少：行銷層只用灰階，品牌色留給產品畫面，亮色整頁只用一次。
4. 用亮度建立文字層級：主句白、補充灰。
5. 一套無襯線字（中等字重 + 收緊字距）+ 一套等寬字當小標籤。
6. 章節用固定模板，讀者學一次就會讀全部。
7. 用大留白 + 1px 淡分隔線切分章節，不用色塊背景。
8. 用邊緣淡出 + 聚光燈漸層，讓截圖融入暗色背景。
9. 手動控制標題斷行，並為行動版另外設計。
10. 文案篤定：定義品類、少形容詞、用一個具體數字背書。

注意事項：這套風格很依賴產品 UI 本身好看；灰字對比要檢查（`#8A8F98`／`#08090A` 約 6:1 尚可，再暗就不夠）；用 HTML 重建 UI 成本高，小團隊可以先用截圖 + CSS mask；Linear 風格已經被大量模仿，可以借它的結構和克制，但強調色、插圖和語氣要做出自己的區隔。

## 11. 起手 CSS Token（非官方）
```css
:root{
  --bg:#08090A; --surface:#141516; --border:#23252A;
  --text-primary:#F7F8F8; --text-secondary:#8A8F98; --text-tertiary:#62666D;
  --brand:#5E6AD2; --accent:#E4F222; --btn-primary-bg:#E5E5E6;
  --font-sans:"Inter Variable","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  --font-mono:ui-monospace,"SF Mono",Menlo,monospace;
  --h1:64px; --h2:48px; --body:15px;
  --radius-card:8px; --radius-pill:9999px; --space-unit:4px; --content-max:1280px;
}
h1,h2{font-weight:510;letter-spacing:-0.022em;line-height:1.05;}
```
註：--border、--text-tertiary、字重、letter-spacing 是目測推估；其餘色值來自截圖取樣或 Firecrawl branding。
