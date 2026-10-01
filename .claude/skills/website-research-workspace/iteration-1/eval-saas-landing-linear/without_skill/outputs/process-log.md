1. 用 Bash 建立 outputs/screenshots/ 目錄。
2. Firecrawl 抓取 https://linear.app（markdown + branding + 全頁截圖，waitFor 3000），取得頁面文字、字體／色彩／字級 branding 資料和桌面截圖網址。
3. 用 curl 下載桌面全頁截圖（1920×10024），並用 Pillow 確認尺寸。
4. Firecrawl 以 mobile 模式抓取全頁截圖（360px 寬）。
5. 用 query 格式查 CSS token，被 rate limit 擋下。
6. 下載行動版截圖（360×5896）；把桌面截圖切成 8 段（縮至 960 寬），行動版切成 9 段。
7–14. 逐一檢視 desktop-part00 到 07：導覽列 + Hero、Logo 牆 + 宣言 + 三支柱、Intake、Planning、AI、Build、Changelog + 見證 + CTA、Footer。
15. 把行動版的 9 段拼成兩張 contact sheet，並刪除分段檔。
16–17. 檢視 mobile-sheet0、mobile-sheet1（行動版導覽、Hero、章節堆疊、見證卡、Footer 2 欄）。
18. 重試 Firecrawl query 查 CSS token：回傳「未指定」，沒有可用資料。
19. 用 Pillow 第一次取樣色值（背景、導覽列、邊線、按鈕、H1、副標）；有一個座標超出範圍，報錯。
20. 用 Pillow 第二次取樣（宣言白／灰、見證卡黃／藍紫、CTA 按鈕、Footer、卡片內文）。
21. 綜合 Markdown、branding、截圖目測和像素取樣，撰寫繁體中文報告。
22. 嘗試用 Write 存 report.md，被工具擋下（子代理不得寫報告檔），因此改為把報告和流程紀錄放在回報裡。

已存檔案（/home/user/website-design-research/.claude/skills/website-research-workspace/iteration-1/eval-saas-landing-linear/without_skill/outputs/screenshots/）：desktop-full.png、mobile-full.png、desktop-part00.png 至 desktop-part07.png、mobile-sheet0.png、mobile-sheet1.png。
