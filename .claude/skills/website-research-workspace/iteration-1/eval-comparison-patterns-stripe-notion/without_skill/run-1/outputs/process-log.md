# Process log

1. ToolSearch 載入 `mcp__Firecrawl__firecrawl_scrape`。
2. firecrawl_scrape https://stripe.com（markdown + branding + 全頁截圖，onlyMainContent=false）。
3. firecrawl_scrape https://www.notion.com（同上）。
4. Bash：curl 下載兩張全頁截圖到 `screenshots/`，確認尺寸（Stripe 1920×15266、Notion 1920×4810）。
5. Bash（Pillow）：把全頁截圖切成縮小分段 `stripe-part1~6.jpg`、`notion-part1~3.jpg`。
6. Read stripe-part1.jpg（導覽、Hero、Logo 跑馬燈、Bento 產品卡）。
7. Read notion-part1.jpg（導覽、Hero 輪播詞、產品視窗、Logo 牆）。
8. Read notion-part2.jpg（AI 功能卡、用例小卡、客戶故事標題）。
9. Read notion-part3.jpg（客戶引言卡、數據跑馬燈、收尾 CTA、頁尾）。
10. Read stripe-part2.jpg（Connect 模型、AI 推薦輸入框、Sessions banner、數字區、放射線視覺）。
11. Read stripe-part3.jpg（企業手風琴故事、專家服務、新創輪播）。
12. Read stripe-part4.jpg（平台嵌入元件、引言、深色開發者區開頭）。
13. Read stripe-part5.jpg（整合架構圖、API 數字、整合路徑、What's happening）。
14. Read stripe-part6.jpg（Book of the week、收尾 CTA、大型頁尾）。
15. firecrawl_scrape stripe.com（mobile=true，首屏截圖）。
16. firecrawl_scrape notion.com（mobile=true，首屏截圖）。
17. Bash：下載兩張手機截圖並合成 `mobile-side-by-side.jpg`。
18. Read mobile-side-by-side.jpg（比較手機 Hero、CTA、Logo 牆；發現 Notion 輪播詞變成 Think）。
19. 分析：彙整 markdown 內容的段落順序、branding token（色碼、字型、字級、圓角、間距基準）與截圖觀察，整理共通模式與差異。
20. Write report.md —— 被工具拒絕（子代理不允許寫報告檔），改為將完整報告內容放在回傳訊息中。
21. Write process-log.md（本檔）。
