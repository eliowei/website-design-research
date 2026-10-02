# Vercel 設計分析

> **研究範圍限制**
> - 直連 vercel.com 被網路政策擋下（curl 回 403），沒辦法用 Playwright 捲動、hover 或錄影，只能用 Firecrawl 抓到的資料分析。
> - 這次的研究重點是動態效果，但靜態截圖拍不到動畫，所以第 5 章全部是間接推測。我用 Firecrawl 的 query 問過頁面上的 CSS 動畫和斷點，回答是「沒有相關資訊」。
> - 兩張截圖的下半部都是空白（桌機 y≥2700、手機 y≥2440），所以 Mintlify 案例、Recently shipped、結尾 CTA 和頁尾在截圖裡都看不到，只能從 markdown 得知內容。

- 網址：https://vercel.com
- 研究日期：2026-10-01
- 研究頁面：首頁（重點：動態效果、手機版）
- 類型：SaaS／開發者平台落地頁

![桌機版](screenshots/desktop.png)

## 一句話總結
這是一個近乎單色的極簡頁面：`#FAFAFA` 底配 `#171717` 黑字，用 Geist 字型和大量留白撐起畫面，Hero 只放一個帶光暈的黑色三角形。版面用「大標題＋客戶產品截圖＋一句數據」的案例模組串起來，動態效果（推測）集中在 Hero 和捲動進場。

## 1. 版面結構
由上到下：
1. 導覽列（約 64px）：左邊是 Logo 和 Products▾／Resources▾／Enterprise／Pricing；右邊是 Get a Demo、Log In、Sign Up（黑底）。
2. 公告列：「Ship 26 is coming to SF · Get your ticket ›」。
3. Hero（約 900px）：三欄。左欄是 H1「Agentic Infrastructure」加 Deploy now／Talk to sales；中欄是有光暈的三角形；右欄是三行標語。
4. 客戶 Logo 列：七個單色 Logo（Meta、Charles Schwab、DoorDash、OpenAI、SpaceX、The Weather Company、Polymarket）。
5. 案例區塊 ×3（Notion、Zapier、Mintlify）：H2、產品截圖、數據句、Features 清單（4 項）。桌機上左右交錯排列。
6. Recently shipped、結尾 CTA「Built by you, or your agents」、頁尾：截圖中未渲染（未觀察）。

- 內容寬度約 1400px（在 1920 寬的畫面上兩側各留 260px）；手機左右各留 24px。
- 網格推測是 12 欄。Hero 是 4／4／4；案例區塊的圖約 7 欄、文字約 3–4 欄。

**可以學的地方**：同一種案例模組重複三次、每次左右交換，整頁節奏一致又不單調。

## 2. 配色
| 用途 | 色碼 | 使用位置 |
| --- | --- | --- |
| 主色 | #171717 | 標題、主要按鈕、Logo |
| 輔助色 | 約 #666–#8F8F8F（目測，推測） | 數據句後半段、「Features」標籤 |
| 背景 | #FAFAFA | 全頁（取樣是 rgb(250,250,250)，theme-color 也是這個） |
| 文字 | #171717 | 內文、導覽 |
| 強調／CTA | #171717 底配白字；次要按鈕是白底配 #EBEBEB 1px 外框 | 按鈕 |

- branding 回傳的 #0072F5、#FFC96B、#9A050F 在上半頁看不到，推測是設計系統 token，或用在沒渲染的下半部。
- 深色模式：有。`color-scheme: dark light`，每張案例圖都有 -dark／-light 兩個版本。
- 漸層和陰影：Hero 有白色徑向光暈；案例截圖底部漸層淡出到背景色；按鈕沒有陰影。

**可以學的地方**：只用黑、白、灰，把顏色留給產品截圖；截圖底部用漸層淡出，看起來不像貼上去的圖片。

## 3. 字型
| 層級 | 字型 | 字級 | 字重 | 行高 |
| --- | --- | --- | --- | --- |
| H1 | GeistSans | 64px（手機約 48px） | 推測 600 | 約 1.0–1.1 |
| H2 | GeistSans | 56px（手機約 32px） | 推測 600 | 約 1.1 |
| 內文 | GeistSans | 14px | 400／500 | 推測 1.5 |
| 按鈕 | GeistSans | 約 14px（手機約 16px） | 500 | — |
| 手機 Hero 副標 | 推測 Geist Mono | 約 16px | 400 | — |

**可以學的地方**：標題字距收緊、字級拉大，和 14px 內文形成強烈對比；同一句話用黑和灰兩種灰階區分重點。

## 4. 元件與視覺元素
- 按鈕全部是膠囊形（radius 9999px），主要按鈕是黑底，次要按鈕是白底加 1px 外框，都沒有陰影。
- 沒有傳統卡片，直接放產品截圖，配細邊框和底部淡出。
- 圖示是線條風格。
- Hero 的三角形有 3D 光影感，推測真實頁面是 WebGL 或動態光暈，截圖拍到的是靜態 fallback。
- 案例圖桌機和手機各有一張不同構圖的圖。

**可以學的地方**：手機另外準備構圖；動態視覺先備好靜態 fallback 圖。

## 5. 互動與動態（全部是推測或未觀察）
- **捲動觸發渲染或淡入（證據強）**：截圖下半部空白，但 markdown 裡有內容，頁面高度也已經保留。截圖工具不會捲動，這些區塊就停在初始的隱藏狀態。
- **Hero 拖放部署**：markdown 出現「Drop to deploy」「Loading」。
- **Hero 光暈或 3D 動畫**：有 `fallback-dark-glow-mobile/desktop.webp` 這組備援圖。
- **標語輪播**：桌機右欄同時列出三句，手機只顯示一句等寬字。
- **Logo 跑馬燈**：手機上 Logo 列左右兩邊被裁切。
- hover、頁面轉場、prefers-reduced-motion：未觀察。

**可以學的地方**：動態集中在 Hero 和捲動進場兩類。但「內容預設隱藏、靠 JS 淡入」會讓爬蟲和沒有 JS 的環境看到一片空白，實作時應該讓內容預設可見。

## 6. 文案與資訊架構
- 主標語「Agentic Infrastructure」；meta 描述是「The autonomous stack for every app and agent.」
- 語氣專業、自信。標題用動詞開頭（Build／Ship／Host），每句都有可量化的承諾。
- CTA：Deploy now、Talk to sales、Get a Demo、Sign Up，以及「Onboard your agent / Paste to your agent」（直接對 AI agent 喊話）。
- 導覽列：Products、Resources、Enterprise、Pricing。

**可以學的地方**：數據句套固定句型「<客戶> <動詞> <數字> on Vercel.」，把社會證明和功能介紹放進同一個模組。

## 7. 響應式設計
![手機版](screenshots/mobile.png)
- Hero 從三欄、靠左改成單欄、置中，三角形在最上面，接著是 H1、一行等寬副標，最後是兩顆上下疊的滿版膠囊 CTA（左右各留 24px）。
- 案例區塊改成單欄（H2 → 圖 → 數據 → Features），左右交錯取消；案例圖換成手機構圖；數據句放大到約 22px。
- Logo 列變成被裁切的單列（推測是跑馬燈）。
- 導覽列只留 Logo 和漢堡選單；公告列拆成兩行。選單展開後的樣子未觀察。

**可以學的地方**：手機版是重新排過，不是單純縮小。CTA 改成滿版比較好點，案例圖換成直式構圖，重要的數據反而放大。

## 優點與可改進處
**優點**
- 色彩紀律很強。
- 案例模組化，讀起來一致。
- 手機版有專門設計。
- 深色和淺色模式的資源都準備齊全。

**可改進處**
- 下半頁要靠 JS 才會進場，截圖裡超過一半是空白。
- 淺灰色的次要文字在 #FAFAFA 背景上對比可能偏低（推測，未實測）。
- Hero 太抽象，第一屏看不出具體的產品功能。

## 參考價值評分
| 面向 | 分數 |
| --- | --- |
| 視覺美感 | 5 |
| 資訊清晰度 | 4 |
| 轉換導向 | 4 |
| 獨特性 | 3 |
