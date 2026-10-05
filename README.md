# 網站設計研究

用 Claude Code 研究別人的網站設計，每天累積一點高品質的設計知識。

每次研究都回答：這個網站**想達成什麼商業目標**、**想讓誰產生什麼感受**，又如何透過**視覺、UX、動態、響應式**把兩者實現。研究面向依序是：商業／轉換 → 品牌／風格 → 視覺 → UX → 動態 → 響應式，最後歸納成模式。

## 使用方式

在 Claude Code 裡直接說，或打 `/website-research`：

| 模式 | 什麼時候用 | 產出 | 大約時間 |
|---|---|---|---|
| **Daily**（預設） | 每天看一個網站，累積設計直覺 | 一頁摘要：今天學到的 3 件事、各面向速記（含轉換路徑與品牌感）、不要照抄的地方 | 2–5 分鐘 |
| **Standard** | 想認真參考，需要實測的數值 | 摘要＋研究筆記（瀏覽器實測的截圖、DOM、CSS、互動、CTA 清單與轉換路徑，每個結論附來源；量不到的能力會降級標示） | 15–20 分鐘 |
| **Deep** | 要拿來當實作依據或完整拆解 | 摘要＋觀察紀錄＋完整報告（證據 ID、像素取樣、動態量測、三寬度比較、設計語言與設計系統推論、自我審查） | 15–40 分鐘 |

例如：

- 「從 Awwwards 挑一個網站看一下」→ Daily
- 「用 Standard 研究 linear.app」
- 「Deep 拆解 vercel.com 的動態和手機版」
- 「把 moto-card.com 升級成 Standard」→ 沿用已抓的資料，補上實測證據
- 「比較 stripe.com 和 notion.com 的首頁」

每份研究開頭都有一行**研究可靠度**（Capture／Interaction／Responsive／DOM/CSS／Overall，A–D），說明這次研究取得證據的完整度：例如 WebGL 網站截圖大段空白、手機版量不到。它不是網站設計的評分。擷取不完整時會先做分段擷取補救，補不回來的部分寫成「未觀察到」，不會寫成網站沒有。

商業與品牌分析只看「頁面如何設計轉換與品牌感」：沒有實際轉換資料時，不會聲稱某個設計提高了轉換率；品牌定位除非網站寫明，都會標成推測。

研究只做研究，不會直接寫網頁程式碼；要求「照這個風格做一個」時，會附上實作交接摘要，由你決定要不要另外開始實作。

## 成果

- 每個網站一個資料夾：`research/<網域>/`，先讀 `summary.md`
- 多網站比較：`research/comparisons/`
- 索引：[research/README.md](research/README.md)

## 結構

```
.claude/skills/website-research/        研究 skill
├── SKILL.md                            模式選擇、共同規則、Daily 與 Standard 流程
├── references/deep-mode.md             Deep 流程（只在選 Deep 時讀）
├── references/evidence-and-claims.md   證據 ID、證據等級、結論層級、轉換與品牌的說法規則（Deep）
├── references/analysis-dimensions.md   商業／品牌／視覺／UX／動態／響應式的分析清單（Deep）
├── references/capture-reliability.md   擷取品質、fallback、選 Standard、失敗與逾時規則、研究可靠度（三種模式）
├── templates/                          各模式的範本
└── scripts/
    ├── capture_tools.py                切長截圖、取樣色碼、偵測空白
    ├── quality_check.py                Capture Quality（A–D）與缺口
    ├── reliability.py                  Research Reliability
    ├── pack_assets.py                  依類型配額打包截圖（被引用的優先）
    ├── validate_refs.py                報告引用的截圖是否存在、是否已上傳
    ├── wr_status.py                    共用狀態檔 source/capture-status.json
    └── pw/                             Playwright 量測工具（preflight、run_standard、capture／scroll／inspect／CTA／hover／focus／responsive）
.claude/hooks/session-start.sh          雲端 session 啟動時設定 Pillow 與瀏覽器憑證
evals/                                  skill 的測試案例、評估報告、fixtures 與 run_checks.py（lint／驗證／工具測試）
research/                               研究成果
```

## 雲端環境注意

在 Claude Code 雲端環境使用時，環境的網路存取要放寬（或把要研究的網站加進允許清單），Standard 與 Deep 才能用瀏覽器直接開網站。設定方式見 https://code.claude.com/docs/en/claude-code-on-the-web 。
