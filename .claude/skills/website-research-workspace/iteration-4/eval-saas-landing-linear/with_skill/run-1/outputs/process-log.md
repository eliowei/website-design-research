# Process log：linear.app 首頁設計研究

## 步驟（依實際順序）
1. 讀 SKILL.md、references/evidence-and-claims.md、references/analysis-dimensions.md、templates/observations.md、report.md、summary.md，以及 capture_tools.py 的 --help。
2. 在 output root 建 `research/linear.app/{source,screenshots,_slices}`；`curl -sI https://linear.app` 回 200，確認可直連；Pillow 12.3.0 已安裝。
3. 第 0–1 階段：用 Firecrawl 抓桌機（markdown＋branding＋links＋fullPage screenshot，maxAge 0），截圖立刻用 curl 下載成 desktop.png（1920×10024）。
4. Firecrawl 抓平板（768×1024 viewport）與手機（mobile: true），都加 maxAge 0；下載成 tablet.png（768×9525）、mobile.png（360×5908）。沒有遇到速率限制。
5. 把 markdown 存成 source/page.md（600 行），branding 存成 source/branding.json（省略 logo 的 SVG data URI 並在檔內註明），links 存成 source/links.json。
6. 第 2 階段：`capture_tools.py slice`（d／t／m 三組，共 13 段）與 `blank`；桌機回報兩段內容之間的空白，沒有延伸到底部的空白。
7. 用 Read 逐段檢視 13 張切圖。
8. `capture_tools.py sample` 取樣 15 個點（登記其中 10 個為 P-）。
9. Playwright probe 1（1440×900）：body／h1–h3／段落／導覽／按鈕／連結的 getComputedStyle、容器鏈、section padding、@keyframes、media queries、reduced-motion 規則、已載入字型。
10. Playwright probe 2：讀 CSS 變數（只找到 tweet 元件的變數）；從 `commit` 起每 500ms 拍 Hero 共 12 張；9 個元素的 hover 前後（computed＋裁切截圖）；hover Product 下拉；Tab focus 6 次；點擊 Features「+」；捲動前後 header；14 個捲動位置截圖；五個區段各 10 張 500ms 序列；再開 `reducedMotion: 'reduce'` 的 context 重拍 Hero 與三個區段。
11. 用 PIL 算相鄰影格差異（像素數與 bounding box）找出真的有動的地方，再把 Hero、reduce Hero、AI 段做成聯絡表檢視；hover 前後拼成一張檢視。
12. Playwright probe 3：1440／768／390（390 用 isMobile＋DPR 2）量字級、section padding 與 display、Features／Changelog／40,000 是否可見、Intake 視覺與標題的上下順序；嘗試點開手機漢堡選單（沒成功，點到 Hero 內的按鈕）。
13. 寫 observations.md（成功寫入），之後回頭修正兩處用詞（平板 Changelog 改成「可見兩欄」、見證引言補上行號）。
14. 第 3–6 階段：寫 report.md，寫入時被環境擋下（「Subagents should return findings as text」）。依 skill 的子代理規則，沒有用其他方式繞過，改成在回覆中附上 FILE 區塊。
15. 寫 summary.md 前，回到截圖重新檢查每個絕對或否定說法（「功能段沒有註冊按鈕」「手機刪除 Changelog」「所有按鈕都是膠囊」「唯一置中」）。依檢查結果把 report 的「所有按鈕」縮限為「行銷層按鈕」、「唯一置中」限定為「桌機上」、hover「都沒有位移」限定為「量到的元素」。
16. 撰寫 summary.md、research/README.md 索引與本 process log，都以 FILE 區塊交付。

## Skill 不清楚的地方
- **.md 寫入的封鎖時點不一致**：observations.md 寫入成功，report.md 卻被擋。Skill 說「被擋下時改用 FILE 區塊」，但沒說已經成功寫入的檔案要不要也放進 FILE 區塊；這次只把被擋的檔案放進回覆。
- **Playwright 額外產物放哪裡**：目錄結構只列 desktop／tablet／mobile.png 與 source 的三個檔案。hover、序列、reduce 對照等幾十張圖，這次自行放在 `screenshots/pw/`，computed 資料放在 `source/pw/*.json`，聯絡表放在 `_slices/motion/`。
- **桌機寬度不一致**：Firecrawl 預設 1920，Playwright 建議 1440；skill 只說「擷取清單寫明」，沒說 C- 與 S-d 數值要怎麼對應（例如 x 座標不能直接比對）。這次 C- 一律記 1440、S-／P- 一律記 1920 原圖座標。
- **手機寬度**：analysis-dimensions 說 360–390；Firecrawl mobile 是 360，Playwright 用 390，兩者的 Hero 呈現不同（X-06）。Skill 沒提到兩種工具在同一寬度帶出現差異時以哪個為準。
- **CSS 變數**：證據表沒有給「設計 tokens 原始碼」的 ID 類型。這次讀不到 `:root` 變數，登記成 X-05；如果讀得到，該用 C- 還是 H- 不明確。
- **動態證據等級**：Playwright 的 500ms 連拍算「Playwright 操作（E1）」還是「比對不同時間的截圖（E3）」，界線模糊。這次因為是在受控瀏覽器內定時拍攝，記成 E1，但結論只寫順序與「有變化」，不寫時長和曲線。
- **實作交接摘要**：使用者說「之後做自己產品官網時參考」，不是「照這個風格做一個」。依範本規則沒有寫交接摘要；把可遷移原則放在 §7、tokens 推論放在 §6。這個判斷 skill 沒有明說。
- **E5 計數**：自我審查要列 E5 筆數，但 skill 沒說 E5 推測要不要先登記在證據清單；這次沒有登記，只在自我審查中點名。

===== END =====
