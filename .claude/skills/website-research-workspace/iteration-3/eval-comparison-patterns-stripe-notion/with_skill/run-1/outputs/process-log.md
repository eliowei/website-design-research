# Process log

1. 讀 skill-snapshot/SKILL.md，再讀 references/evidence-and-claims.md、references/analysis-dimensions.md、templates/observations.md、report.md、comparison.md，以及 capture_tools.py 的說明。
2. 在 output root 建立 research/stripe.com、research/notion.com（source/、screenshots/、_slices/）與 research/comparisons/。確認 Pillow 12.3.0 已安裝。
3. `curl -sI` 測試兩站：皆回 403（網路政策）→ 不用 Playwright，登記為 X-01（兩站）。
4. 載入 Firecrawl scrape 工具。Stripe 桌機：formats markdown/branding/links/screenshot、fullPage、maxAge 0；立刻 curl 下載截圖（1920×14828）。
5. Stripe 平板（768×1024 viewport）與手機（mobile: true），maxAge 0；兩次都被 Firecrawl 排入並行佇列但完成；下載（768×15414、360×20630）。注意到三個請求的 A/B 實驗分組不同（H-03／X-04）。
6. Notion 桌機／平板／手機同樣三次擷取（maxAge 0），下載（1920×4810、768×4914、360×3946）。發現 Notion markdown 沒有 H1（X-02）。
7. 把 markdown 存成 source/page.md（Stripe 1288 行、Notion 118 行），branding 存成 source/branding.json（附 metadata 實驗分組），links 存成 source/links.json（Stripe 的 links 由 page.md 抽出）。
8. 對 6 張截圖執行 `capture_tools.py slice`（prefix d/t/m，放各站 _slices/）與 `blank`。Stripe 桌機／平板各有一段 ~350px 空白（X-02）；Stripe 手機 y≥16384 全白到底（X-03）；Notion 桌機一段 300px（CTA 留白，X-03）。
9. 用 Read 逐段檢視全部切圖（Stripe d00–d06、t00–t06、m00–m08；Notion d00–d02、t00–t02、m00–m01），每段寫一行 S- 紀錄。Stripe t07（14px）與 m09（全白）只依尺寸／blank 結果記錄。
10. 用輔助 Python 找文字最深像素的座標，再用 `capture_tools.py sample` 取樣（P-）；逐點掃描卡片邊框與內容寬度（P-15）；目測字級行距記為 E5（P-16）。
11. 用 grep 取得 page.md 的行號作為 M- 證據；從 meta 與檔名整理 H- 證據；比對不同時間擷取的差異整理 I- 證據（Stripe I-01–I-05、Notion I-01）。
12. 寫 stripe.com/observations.md 與 notion.com/observations.md（§0–2）。核對引用行號，修正一處（M-L884）與 Notion logo 數量。
13. 依 analysis-dimensions 寫 Stripe report.md（第 3–6 階段）。Write 被環境擋下（「Subagents should return findings as text」）→ 依 skill 的子代理規則，不用 Bash 繞過，改在最後回覆以 FILE 區塊附上 report.md、Notion report.md 與比較報告全文。
14. research/README.md 索引寫入成功（output root 原本沒有 README，所以新建一份，只含本次三行）。
15. 撰寫 Notion report.md 與 comparisons/2026-10-01-stripe-vs-notion-homepage.md（以 FILE 區塊交付），比較報告只引用各站 VP／章節；跨站模式 XP-01–XP-08 每個都對應兩站的 VP。
16. 寫本檔 process-log.md。

## 不確定 skill 要什麼的地方

- **切圖指令路徑**：SKILL.md 寫 `python .claude/skills/website-research/scripts/capture_tools.py`（相對路徑），任務指示用 snapshot 的絕對路徑；我照任務指示用絕對路徑，並在各站資料夾內執行，讓 `_slices` 落在該站底下。
- **links.json**：SKILL 的目錄結構列了 links.json，但第 1 階段只說存 page.md 與 branding.json。我還是存了；Stripe 的 links 改由 page.md 抽出（Firecrawl 回傳的 links 清單和 markdown 內的連結相同，但較長，未逐字保存）。
- **branding.json 的內容**：我省略了 logo 的內嵌 SVG（很長、與設計判斷無關），並在 `_metadata` 加入實驗分組與 meta；不確定 skill 是否要求原封不動。
- **報告檔被擋**：observations.md 與 README.md 可以寫入，但 report.md 被擋。依 skill「被擋下時不要繞過」的規則，以 FILE 區塊交付三份報告。
- **多站比較的第 6 階段**：skill 說自我審查「可以」合併到比較報告。我兩邊都做：各站 §8 寫本站的證據分布，比較報告 §4 寫跨站的審查。
- **A/B 實驗**：skill 沒提到同一網址在不同請求落在不同實驗分組的情況。我把它登記成 X-04，並把只在平板出現的差異排除在模式之外。
- **手機 16384px 全白**：`blank` 判定為「捲動才進場」，但 16384 = 2¹⁴，比較像截圖高度上限。我兩種可能都寫進 X-03，不下結論。
- **README 索引**：真正 repo 的 research/README.md 已有其他網站；任務要求不碰它，所以在 output root 新建一份，只放本次的列。
- **桌機寬度**：templates 寫 1920，analysis-dimensions 寫 1440 或 1920；Firecrawl 預設給 1920，我沿用。手機寬 360（Firecrawl mobile 預設），在 360–390 範圍內。
