# 執行紀錄

1. 讀 skill-snapshot/SKILL.md 和 template.md；看了 repo 的 research/README.md（只讀不寫），建立輸出目錄 research/vercel.com/screenshots/。
2. 用 ToolSearch 載入 firecrawl_scrape。
3. 用 firecrawl_scrape 抓 vercel.com：markdown、branding、links、全頁 screenshot（成功）。同時送出的手機版截圖請求被速率限制擋下。
4. 用 curl 下載桌機截圖，存成 desktop.png（1920×6118）；確認 Pillow 可以用。
5. 重送手機版截圖請求（mobile:true、fullPage），成功。
6. 下載手機截圖，存成 mobile.png（360×6645）；切片存到共用的 scratchpad。
7. 用 Read 看桌機切片 d0–d3：導覽、Hero、Logo 列、Notion 和 Zapier 案例；d2、d3 是空白。
8. 看了 d4、d5。d5 不是 Vercel（是 scratchpad 裡別次執行留下的 Linear 截圖），判定是污染，捨棄。
9. 看手機切片 m0–m3 時又讀到一張外來的圖（1120 寬，不是我的 360 寬截圖），捨棄。這次回應被安全分類器中斷一次，之後接續執行（協調者指示要記錄為「API 錯誤中斷一次後恢復」）。
10. 把手機截圖重新切片到 scratchpad/vercel/，看了 m0（手機 Hero）、m4、m8（空白）。
11. 用 Pillow 計算像素：桌機約 y=2700、手機約 y=2440 以下都是空白；背景取樣是 rgb(250,250,250)。
12. 用 Firecrawl 的 query 問動畫／斷點的證據，第一次被速率限制擋下。
13. 依協調者指示，在 outputs/_slices/ 重新切片（d0、d1、m0–m3）；重送 query，回答是「沒有相關資訊」。
14. 用 Read 看 _slices 裡的 m1、m2、d1，確認手機和桌機的案例區塊。
15. 用 curl 直連 vercel.com，回 403（CONNECT tunnel failed），確認不能用 Playwright 研究即時網站，要在報告開頭寫明限制。
16. 撰寫 research/vercel.com/report.md 時被 harness 擋下（「Subagents should return findings as text, not write report files」）。我沒有繞過，報告內容改放進最後回覆。
17. 建立 demo-homepage/index.html：虛構品牌 Northwind，套用研究得到的風格（單色、Geist、膠囊按鈕、光暈 Logo、標語輪播、Logo 跑馬燈、左右交錯的案例模組、捲動進場但預設可見、支援 reduced-motion、深色模式、手機重排）。
18. 用本機 Playwright 截 1440 和 390 寬的圖：沒有水平捲動；手機版內容貼邊（padding 簡寫蓋掉了 .wrap 的左右留白）。
19. 改成 padding-block，重新截圖，確認左右 24px 留白恢復。
20. 寫這份 process-log.md。

## 不確定的地方

- **「照這個風格幫我做一個類似的首頁」不在 skill 範圍內**：skill 只負責研究和寫報告。我決定照使用者明確的要求做，但另外放在 demo-homepage/，不放進 research/。用的是虛構品牌，沒有用 Vercel 的名稱、Logo 或文案，三角形也改成倒三角。
- **研究重點是「動態效果」，但 skill 的抓取流程（靜態截圖）拍不到動畫**，網路政策又擋住了 Playwright。所以第 5 章只能用間接證據推測，並全部標上推測或未觀察。
- skill 要求在 research/README.md 加一行索引。輸出根目錄下沒有這個檔案，而且 .md 檔被 harness 擋下，所以沒有更新，改在最後回覆中列出要加的那一行。
