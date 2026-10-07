# 擷取品質、失敗處理與研究可靠度

三種模式都適用。Daily 讀 §0–4、§6.1、§7–9；Standard 再讀 §5–6（含 §6.2 Action Verification）；Deep 全部。
修改這份規則或 `scripts/` 時，`python evals/run_checks.py` 的 regression（REG-01～REG-08 來自 2026-10-05、REG-09～REG-14 來自 2026-10-06 的實際案例）必須全部通過。
這份規則從 2026-10-05 之後的研究開始生效，不回頭改寫舊研究（§10）。

## 目錄
0. 三條原則
1. 這幾個東西不要混在一起
2. Capture Quality（A–D）、Final Capture Quality（證據集合）、Evidence Quality 與 Evidence Coverage
3. 擷取流程：Primary → Check → Fallback → Re-evaluate → Final
4. 擷取不完整時怎麼寫
5. Research Value 與 Research Feasibility（選 Standard）
6. 失敗、逾時與降級規則（6.1 Research Environment Failure、6.2 Action Verification）
7. Research Reliability
8. Evidence 與 Reliability 要分開
9. 截圖引用、打包與交付驗證
10. 生效範圍

## 0. 三條原則

> **Research completeness should degrade gracefully.**
> 研究工具拿不到某項資料時，降低「那一項證據」的完整度，而不是讓整份研究失敗。

> **Research value and research feasibility are separate dimensions.**
> 值得研究，不代表這次一定能完整量測；能量測，也不代表值得研究。

> **Never treat missing evidence as evidence of absence.**
> 沒有看到，不代表網站沒有。

這三條是後面所有規則的理由。遇到這份文件沒寫到的情況，就照這三條判斷。

## 1. 這幾個東西不要混在一起

| 名稱 | 回答什麼 | 範圍 | 值 | 誰產生 |
|---|---|---|---|---|
| **Capture Quality** | 這「一次擷取」拿到的畫面完不完整？ | 一張整頁截圖或一組分段截圖 | A–D | `quality_check.py image／segments` |
| **Final Capture Quality** | 把這個裝置的所有擷取（Initial＋Fallback）放在一起，這次研究能支撐到什麼程度？ | 一個裝置（桌機／平板／手機） | A–D，或 environment-failure | `quality_check.py final` |
| **Evidence Quality／Evidence Coverage** | 拍到的畫面本身正不正常？合起來涵蓋了多少頁面／視窗／段落？（Final 的兩個依據，§2.2） | 一次擷取／一個裝置的證據集合 | Quality A–D；Coverage 比例、屏數、頁首／中段／頁尾、最大缺口 | `quality_check.py final` |
| **Action Verification** | 這一個互動量測（點擊、hover、focus）是不是真的驗證了我們要驗證的東西？ | 一次互動 | verified／failed／unverified | `scripts/pw/action_verify.py` |
| **能力狀態** | 這個「研究能力」（截圖、捲動、hover…）在這個寬度成功了嗎？ | 一個能力 × 一個寬度 | ok／fallback／partial／unverified／unavailable／skipped／na | `scripts/pw/` 的工具 |
| **Research Reliability** | 這份研究「取得證據」整體有多可靠？ | 一份研究，分四個面向＋Overall | A–D | `reliability.py` |
| **Evidence Confidence** | 「某一句結論」有多確定？ | 一句結論 | 來源標記與（推測）；Deep 用 E1–E5＋[O]/[I]/[H] | 研究者 |

它們**都不是**網站設計的評分。能力狀態 ok 也不等於 Action Verification verified：點擊成功只代表「有點到」，不代表「點到對的東西、得到對的結果」。Reliability C 的意思是「這次研究環境拿到的資料有限」，不是「這個網站設計得普通」。
報告裡寫 Reliability 時一律附上「證據取得的可靠度，不是網站設計的好壞」這句話（`reliability.py --markdown` 會自動加）。

所有工具共用一個狀態檔：`research/<網域>/source/capture-status.json`（格式見 `scripts/wr_status.py`）。

## 2. Capture Quality

每次擷取完（Firecrawl 整頁截圖、fallback 分段截圖、Playwright 分段截圖）都先判斷等級，再開始寫結論。

| 等級 | 名稱 | 意思 | 研究上的意義 |
|---|---|---|---|
| A | Complete | 主要內容完整取得 | 可以正常研究 |
| B | Partial | 部分區域缺失 | 可以研究；缺失的區域列為缺口，不在那裡下結論 |
| C | Degraded | 大量空白、動畫沒跑完、內容缺失 | 只能有限研究；只有拿得到的部分能下結論 |
| D | Failed | 不足以支撐可靠研究 | 不能用來下視覺或版面結論 |

**自動判定**（`quality_check.py image`，門檻寫在程式開頭，改了要同步改這張表）：

| 條件 | 至少降到 |
|---|---|
| 檔案讀不到、高度 < 100px、或 95% 以上是空白 | D |
| 空白比例 ≥ 60% | D |
| 只取得首屏（內容只在第一個視窗附近，下面一路空白到底；或截圖只有一屏高但頁面明顯更長） | C |
| 空白比例 ≥ 25%、底部連續空白 ≥ 2 個視窗高、或截圖高度和頁面高度差 ≥ 50% | C |
| 空白比例 ≥ 8%、最長空白 ≥ 1.5 個視窗高、高度差 30–50%、截圖只有一屏高（不知道網站是不是單屏）、或截圖高度剛好是常見上限 | B |

「空白」是至少 300px 高、幾乎單色的連續區段。工具**偵測不到**「畫面有東西但內容不對」，例如只拍到模糊背景、動畫拍到一半、版面錯位。
研究者看過切圖後可以覆寫等級（`--override C --reason "…"`），**一定要寫理由**，理由會和自動等級一起留在狀態檔。覆寫可以往下（常見），也可以往上（例如確認大段空白是設計本身的留白），往上時理由要指出根據的切圖。

**分段截圖的判定**（`quality_check.py segments`）：每一張分段截圖分成
- `content`：畫面上有內容，而且 DOM 說有文字或圖像的位置確實畫出來了；
- `empty-by-design`：畫面是平的，DOM 也說這一屏沒有內容（設計留白，算有取得）；
- `unrendered`：DOM 說有內容，畫面上那些位置卻是平的，或內容仍是透明的（進場動畫沒跑完）；
- `not-moved`：捲動沒有移動。

覆蓋率 = 取得內容的分段 ÷ 預計分段數：≥ 90% → A、≥ 70% → B、≥ 40% → C、其餘 D。

### 2.1 Final Capture Quality：以「證據集合」判定

Initial Capture（primary：Firecrawl、Playwright 正式量測）與 Fallback Capture（分段擷取、加長等待重拍）**不是互斥的結果**，
也不是「後面那次取代前面那次」。它們都是證據，放在同一個集合裡判定：

> **Final Capture Quality = 綜合目前可用的 evidence 後，這次研究實際能支撐到什麼程度。**
> 它**不是**取 Initial／Fallback 中最高的等級，**也不是**單純採用最後一次擷取的結果。

判定依據（§2.2 有定義與門檻）：

| 依據 | 問的是 |
|---|---|
| Evidence quality | 拍到的畫面本身正不正常？（不是預載畫面、全空白、模糊背景、被選單或 cookie 蓋住） |
| Evidence coverage | 所有擷取合起來，涵蓋了頁面高度的多少？ |
| Viewport coverage | 合起來大約是幾個視窗高的內容？ |
| Page coverage | 頁首、中段、頁尾是不是都有取到？ |
| Capture gap | 合起來之後，是否仍有明顯的連續缺口（≥ 1 個視窗高）？ |

規則（`quality_check.py final <網站資料夾>` 實作，結果寫進 `capture-status.json` 的 `final_capture`）：

1. 同一個裝置的所有擷取都是證據：primary、每一次 fallback、同一種擷取重拍前的舊紀錄（`attempts`，不會被覆蓋）。
2. 畫面品質 A／B 的擷取把各自涵蓋的頁面範圍合起來（聯集）。**Final ≤ Coverage 等級，且 ≤ 參與者中最差的 Quality。**
   一次失敗的 fallback（D）不參與聯集，所以不會把已經取得的證據拉低。
3. **Fallback A 但只拍到 1 個視窗或少數幾段，不會自動把整份研究提升為 A**：它的畫面品質是 A，涵蓋率卻很低。
4. 聯集後仍有 ≥ 1 個視窗高的連續缺口 → 最多 B（明顯的 capture gap 仍在）。
5. 不同擷取的位置只能近似對齊（Firecrawl 1920 與 Playwright 1440 的版面高度不同）：聯集最多比單次擷取中最好的等級高 1 級。
6. Research Environment Failure 的擷取不算證據（§6.1）。某裝置只有這種擷取 → 該裝置 `environment-failure`、Final D；桌機是 environment-failure → 整份研究 `research_status: environment-failure`。
7. 工具偵測不到「畫面有東西但內容不對」：研究者看過切圖後，可以把單次擷取往下覆寫（`image --override C`，等於說畫面品質有問題），
   或用 `final --override desktop=B --reason "…"` 調整 Final，理由要指出依據哪幾次擷取。
8. 沒有 Coverage 資料的舊紀錄（10/05 以前的狀態檔）沿用舊規則（取該紀錄的等級），`rule` 欄位會註明。
9. Research Reliability 的 Capture／Responsive 都用 Final，不用單一擷取。

| Initial | Fallback | Final | 說明（實例） |
|---|---|---|---|
| B | D | **B** | Spyker Cars（10/05）：fallback 捲動被接管、幾乎全白；已取得的 B 仍然成立 |
| C | A（10/10 分段） | **A** | Brilean（10/05）：捲動進場段在整頁截圖中空白，分段擷取補齊整頁 |
| D | A（7/7 分段） | **A** | bleibtgleich'26 手機（10/05）：Firecrawl 只拍到預載「97%」，分段擷取涵蓋整頁 |
| B | D → A（同一種重拍） | **A** | Nightkidz 手機（10/05）：第一次 fallback 只拍到像素預載（D，保留在 attempts），加長等待重拍為 A |
| B | A（只拍到 1 屏） | **B** | aardvarkbookclub（10/06）：頁面初始高度被鎖成 900px，fallback 只拍到首屏；Firecrawl 的 2 屏缺口仍在 |
| B | A（低幀率只拍 3 張） | **B** | sharplink（10/06）：3 張取樣沒有補到 Firecrawl 的 1.6 屏缺口 |
| D | A（頭、中、尾 3 張） | **C** | otsuka-air（10/06，regression）：畫面正常但只涵蓋 7–10% 的頁面；頁首／中段／頁尾都有取樣 → C，不是 A |
| C | D | **B** | sstr（10/06）：失敗的 fallback 不拉低；Firecrawl 涵蓋約 3/4，仍有 5 屏缺口 → B |
| D（環境失敗） | D（環境失敗） | **environment-failure** | Santioni Spirits（10/05）：兩種方式都只拿到「Your browser is not supported」 |

### 2.2 Evidence Quality 與 Evidence Coverage

Capture Quality 至少要分成兩個問題，不能混在一起：

| | 問的是 | 怎麼判斷 |
|---|---|---|
| **Evidence Quality** | 取得的畫面本身是否正常？ | 檔案可讀、不是 95% 以上空白；研究者看切圖發現預載、模糊背景、動畫中途、被蓋住時往下覆寫 |
| **Evidence Coverage** | 取得了多少頁面／視窗／段落？ | 整頁截圖：扣掉空白缺口後的範圍；分段擷取：每一張「有內容」的分段在頁面上的位置（`segments-*.json` 的 `positions`、`est_height`） |

```
High quality + Low coverage   ≠   High quality + High coverage
（一張正常的截圖、3 張取樣）        （整頁都取得）
```

不要因為一張正常的截圖就認定整個網站 Capture A。

Coverage 的門檻（`quality_check.py` 開頭的常數，改了要同步改這張表）：

| 條件 | Coverage 等級 |
|---|---|
| 涵蓋頁面高度 ≥ 85% | A |
| ≥ 60% | B |
| ≥ 25% | C |
| < 25%，但頁首、中段、頁尾都有取樣而且合計約 ≥ 2.5 個視窗 | C（骨架式取樣） |
| 其他（例如只拍到 1 屏） | D |
| 聯集後仍有 ≥ 1 個視窗高的連續缺口 | 最多 B |

- 小於半個視窗高的未涵蓋區不算缺口（設計留白）；同一組分段擷取裡，相鄰兩張之間 < 1 個視窗高的間距視為取樣間距。
- 某次擷取看到的頁面長度 < 其他擷取的 60%（例如捲動被鎖、頁面只有 1 屏高）→ 視為被截斷，它的涵蓋範圍從頁首起算，不會被放大成整頁。
- 只有一張一屏高的截圖、頁面長度未知時，Final 不會比那張截圖自己的判定更好。

## 3. 擷取流程：Primary → Check → Fallback → Re-evaluate → Final

Fallback 是研究流程的**正式步驟**，不是例外處理。每個網站、每個裝置都走同一個流程：

```
① Primary Capture       Firecrawl 桌機＋手機（Standard 另有 Playwright 1440／390／768 分段）
        ↓
② Capture Quality Check  quality_check.py image（加 --page-url／--page-title，抓研究環境失敗）
        ├─ A ─────────────────────────────────────────────┐
        ├─ B／C／D：缺口、預載、動畫中途 → ③               │
        └─ Research Environment Failure → ③（換一種方式）    │
③ Fallback Capture      scroll_page.py --capture-only、加大 waitFor 重拍…（每種方法最多 2 次）
        ↓
④ Re-evaluate           每一次 fallback 都記錄等級（scroll_page.py 自動記錄；其他方式用 quality_check.py image --as fallback-…）
        ↓                                                  │
⑤ Final Capture Quality quality_check.py final ←───────────┘
        ├─ ok／degraded → 依 Final 與缺口寫報告（缺口寫「未觀察到」）
        └─ environment-failure → 記為研究環境失敗，不寫設計結論，補位
```

以下是 ③ 的細節。

**什麼時候要啟動**：Capture Quality 低於 A，尤其是
- 大段連續空白；
- 空白比例異常高；
- 明顯只取得首屏；
- 頁面高度和實際內容明顯不符（截圖很短但 markdown 很長、截圖剛好卡在高度上限）。

這時**不要只標「推測」就往下寫**，先做 fallback。

**策略（依序，依工具能力選擇做法）**：

1. **捲動後再擷取**：先把整頁捲過一遍，觸發 lazy loading 與捲動進場，再回到頂端重拍。
2. **固定捲動位置分段擷取**：在平均分布的捲動位置各拍一張視窗截圖，涵蓋整頁高度。
3. **其他現有可用方式**：工具支援就用，例如 Firecrawl 的 scroll／wait actions、加大 `waitFor` 重拍（適合長預載）、單屏網站改拍互動後的畫面。

目前環境的實作：`scripts/pw/scroll_page.py --capture-only`（Playwright；wheel → 觸控 → 鍵盤 → scrollTo，捲動後在固定位置截圖、每張截圖用 DOM 驗證有沒有真的畫出來）。
沒有 Playwright 或網站無法直連時，用當下可用的工具做同樣的事；都做不到就記錄「fallback 不可用」，直接進入降級。

**規則**
- Fallback 截圖是正式證據：存在 `screenshots/fb/fb-d-sNN.png`（桌機）、`fb-m-sNN.png`（手機），引用時寫 `（截圖：fb-d-s03）`，Deep 的證據 ID 是 `S-fb-d-s03`。
- Daily 允許用 Playwright 做 fallback **擷取**，但不做 Playwright **量測**（DOM／CSS 數值、hover、focus 仍是 Standard 的工作）。
- 時間上限：Daily 每站 fallback 最多 3 分鐘、每種方法最多 2 次。
- Fallback 之後重新判定：跑 `quality_check.py final`，以證據集合判定 Final Capture Quality（§2.1），不是取最後一次。
- Fallback 仍然救不回來，才接受 B／C／D，並把缺口寫進「還不確定」。

## 4. 擷取不完整時怎麼寫

1. **沒看到 ≠ 沒有**。缺口裡的東西一律寫「未觀察到（擷取缺口）」，不寫「沒有」「不存在」「只有」。

   | 不要寫 | 改成 |
   |---|---|
   | 「頁面沒有價格資訊」 | 「擷取到的段落中未觀察到價格；y≈4,000–9,000 是擷取缺口（Capture C）」 |
   | 「中段沒有 CTA」 | 「中段在截圖中空白，CTA 是否存在未確認」 |
   | 「手機版拿掉了作品區」 | 「手機截圖未取得作品區（Capture C），是否拿掉需 Standard 確認」 |

2. **絕對與否定說法**（「全部」「沒有」「只有」「從不」）只能建立在該區域 Capture A 的證據上，或 Standard 的 DOM 檢查上。
3. **缺口不影響其他地方的結論**：首屏 Capture A 的觀察，不會因為下半頁空白就變成推測。降級的是「那一塊」，不是整份。
4. 等級低於 A 時，在報告開頭的可靠度欄位寫出等級，在「還不確定」寫出缺口位置。

## 5. Research Value 與 Research Feasibility（選 Standard）

從多個 Daily 挑 Standard 時，分兩個維度判斷，**不要用「Daily 最不確定」直接代替「最適合 Standard」**：WebGL、3D、自訂捲動的網站往往最值得研究，也最容易量不到。

**Research Value**（值不值得研究；研究者判斷，每項 0–2 分，滿分 16）

| 項目 | 2 分的例子 |
|---|---|
| Visual novelty | 少見的視覺語言或處理方式 |
| UX novelty | 少見的導覽、操作或資訊結構 |
| Motion novelty | 承擔敘事或功能的動態 |
| Responsive novelty | 手機不是縮小版，而是重新設計 |
| Business insight | 清楚、可驗證的轉換機制 |
| Brand insight | 品牌感由可追溯的手段建立 |
| Daily uncertainty | Daily 留下的推測，**而且 Standard 有機會驗證** |
| Learning value | 可以遷移到其他專案 |

**Research Feasibility**（這次能量到多少；`scripts/pw/preflight.py`，≤ 90 秒，**一站一站跑**，見 §5.1）

檢查：首屏能否在合理時間取得、能否捲動、DOM／CSS 是否取得、是否大量依賴 WebGL／canvas、smooth scroll／scroll hijacking 跡象、幀率、手機 viewport 能否載入、逾時次數。

| 結果 | 意思 | 建議範圍 |
|---|---|---|
| High | 都正常 | full |
| Medium | 有 smooth scroll、大面積 canvas、慢載入或樣式表無法讀取等，但能量測 | full（預期部分能力降級） |
| Low | 捲不動、首屏 > 30 秒、低幀率 canvas、手機載不了、反覆逾時 | reduced：截圖張數減半、hover 只量 3 個、略過 768、時間上限縮短 |
| Blocked | 無法載入或首屏完全拍不到 | 這次不做 Standard |

**選站流程（Standard Candidate Pipeline；每日排程：N = 10、K = 3）**

```
Daily × N（Research Environment Failure 的網站不進管線，並補位）
    ↓ Research Value 排序
Standard Candidate Pool（Value 前 2K 個）
    ↓ Feasibility Preflight（池裡「每一站」都做，同一套 preflight.py，每站 ≤ 90 秒）
可量測（High／Medium） ／ 低可量測（Low） ／ 不可量測（Blocked）
    ↓ Research Value × Feasibility 綜合判斷（scripts/select_standard.py）
K 個 Standard ＋ 量測順序、scope、時間上限、不可驗證項目
```

- 候選池任何一站沒有 preflight → `select_standard.py` 以 Pipeline Error 結束：不能有些網站做了 preflight、有些憑印象判斷。
- 不在候選池的網站不需要 preflight，表格上寫「不在候選池」。
- 可量測候選不足 K 個時，Low 依 Value 補位（同樣縮小範圍、排在最後），名額不空著。

### 5.1 Preflight 不要讓量測互相干擾（Research Environment Load ≠ Website Performance）

fps、首屏時間、逾時、CDP 備援這些**性能相關**的訊號，量到的是「網站＋研究環境」。2026-10-06 三站同時跑 preflight，
三個 Chromium（軟體渲染 WebGL）互搶 CPU，fps 讀數偏低，Low 判定可能過度保守：研究環境的負載被誤認成網站效能。

- **預設 serial**：`preflight.py` 用檔案鎖排隊，同一台機器一次只有一個 preflight 在量（`--allow-concurrent` 才會並行，不建議）。
  不要用 `&` 平行啟動；就算平行啟動，它們也會排隊。
- **記錄 concurrency**：`source/preflight.json` 的 `concurrency` 記錄 mode（serial／concurrent）、排隊秒數、
  量測時同時在量的其他 preflight 數、量測前後每顆 CPU 的負載。
- **標記 load_affected**：量測時有其他 preflight 同時在量，或每顆 CPU 負載 ≥ 1.0 → `load_affected: true`。這時：
  - 性能相關的訊號只能降到 **Medium**，理由後面加「研究環境負載下量測，可能偏低」，不能單獨造成 Low；
  - 結構性的訊號（捲動被鎖、DOM 幾乎是空的、手機載不了、研究環境被拒絕）不受影響，照常判 Low／Blocked；
  - `select_standard.py` 在選站表標「⚠ 負載下量測」並列出警告，建議 serial 重跑那一站的 preflight。
- 舊版 preflight 沒有 `concurrency` 欄位：選站表會警告「無法確認量測時的研究環境負載」。

**例外**：不要因此永遠排除 WebGL／3D 網站。Low 的網站 Value 明顯最高（≥ 12/16，而且比第 K 名可量測候選高 3 分以上）時，可以佔用**最多 1 個**名額，但必須：
- 用 reduced 範圍（`run_standard.py --scope reduced`，或讓 `--scope auto` 讀 preflight 結果）；
- 設定較短的時間上限（量測 ≤ 480 秒；`run_standard.py` 在 reduced 範圍自動套用）；
- 明確標記不可驗證項目（`select_standard.py` 依 preflight 理由列出，例如「大面積 canvas 裡的內容」「首屏以下的版面與動態」）；
- 在 notes.md 開頭與每日總覽寫明「低可量測、縮小範圍」；
- 不阻塞其他網站：它排在最後一個量測。

Value 決定「值不值得研究」，Feasibility 決定「這次能研究到多少」。兩個分數都寫進每日總覽的選站表。

## 6. 失敗、逾時與降級規則

**時間預算**（預設值寫在 `scripts/pw/common.py` 的 `BUDGET`，改了要同步改這張表）

| 範圍 | 上限 |
|---|---|
| Feasibility preflight | 每站 90 秒（子行程，超過＋15 秒強制中止） |
| Standard 量測（`run_standard.py`） | 每站 720 秒（12 分鐘）；寫筆記另計，整站 Standard 約 20 分鐘 |
| Standard 量測，reduced（Low） | 每站 480 秒（8 分鐘），排在最後量測 |
| 單一 viewport | 1440：300 秒、390：240 秒、768：150 秒；超過＋30 秒整組強制中止（連同 Chromium） |
| 載入頁面 | 45 秒，最多 2 次 |
| 單張截圖 | 20 秒，逾時改用 CDP 擷取一次 |
| 每個 hover 目標 | 15 秒 |
| focus（Tab 走一遍） | 40 秒 |
| 點擊 | 20 秒 |
| Daily fallback | 每站 3 分鐘，每種方法最多 2 次 |

**低幀率（主執行緒很忙）時改用不會卡住的方式**：WebGL 在沒有 GPU 的環境常常只有每秒個位數幀，這時瀏覽器的原生輸入（wheel、滑鼠移動、鍵盤、點擊）要等畫面回應，單次可能卡住數十秒（實測 USAvionix 一次 wheel 卡 91 秒）。
工具量到幀率 < 15，或一次原生輸入超過 8 秒時，自動改用：

| 能力 | 一般情況 | 低幀率時 | 狀態 |
|---|---|---|---|
| 捲動 | 原生 wheel → 觸控 → 鍵盤 | 頁面內合成的 WheelEvent（smooth scroll 程式庫會接手）→ scrollTo | fallback |
| Hover | 滑鼠移到元素上 | CDP 強制 `:hover`（CSS 的 hover 效果量得到，JS 驅動的 hover 量不到） | fallback |
| Focus | 按 Tab | 依近似 Tab 順序 `focus({focusVisible: true})` | fallback |
| 點擊（CTA、選單） | 原生點擊 | 頁面內 `click()` | 照結果 |

幀率 < 5 時分段截圖最多 3 張（頭、中、尾），而且 DOM／CSS／CTA 在捲動前先盤點，避免很慢的截圖把它們擠掉。

這是「優先用原生 wheel／pointer」的例外：原生輸入在這種網站會拖垮整個 pipeline，而改用的方式都會記成 fallback，報告看得出來。

**重試上限**：每個動作最多 2 次（重試 1 次）。被網路政策擋住（`ERR_TUNNEL_CONNECTION_FAILED`、`ERR_BLOCKED_BY_CLIENT`、403）不重試、不繞過。
**停止條件**：同一 viewport 連續 3 張截圖失敗 → 停止截圖；所有捲動方式都沒移動 → 記為 scroll locked，不再重試；剩餘預算不足 45 秒的 viewport → skipped。
**隔離**：每個 viewport 是獨立子行程；一個 viewport 失敗、逾時或被強制中止，不影響其他 viewport，也不會讓整份 Standard 失敗。
**先存再做**：首屏截圖與每一段分段截圖一取得就寫檔、記狀態；之後就算被強制中止，已經取得的證據仍然算數（狀態記為 partial）。

**能力失敗 → 證據狀態 → 報告怎麼寫**

| 失敗 | 備援 | 備援也失敗時的狀態 | 對報告的影響 |
|---|---|---|---|
| 一般截圖逾時 | CDP 直接擷取 | screenshot: unavailable | 該寬度的視覺證據不可用；Responsive 證據 partial／unavailable，改用 Firecrawl 截圖並註明 |
| 整頁截圖空白 | 分段擷取（§3） | 依覆蓋率降級 Capture | 缺口區域寫「未觀察到」 |
| 捲動失敗 | wheel → 觸控 → 鍵盤 → scrollTo | scroll: unavailable（locked） | Motion／Responsive 證據 partial；首屏以下沿用 Firecrawl 或 fallback |
| Hover 失敗（看不見、被遮住、逾時） | 換下一個目標 | hover: unverified | hover 行為寫「未驗證」 |
| Focus 失敗（Tab 沒反應） | 無 | focus: unavailable | focus 行為寫「未驗證」 |
| DOM 取不到 | 重新注入一次 | dom／css: unavailable | CSS 數值、結構、CTA 次數只能從截圖推（標推測） |
| CTA 點擊沒有可觀察的變化 | 無 | cta_click: unverified | 轉換路徑那一步寫「未驗證」 |
| 選單打不開 | 試第二個候選按鈕 | menu: unverified | 手機導覽寫「未驗證」 |
| 頁面載入失敗（該寬度） | 重試 1 次 | 該寬度全部 unavailable | 其他寬度照常；Responsive 降級 |
| 預檢 Blocked | — | 不做 Standard | 只保留 Daily |
| 研究環境被拒絕（browser unsupported 等） | 換另一種擷取方式一次 | Research Environment Failure | 不寫設計結論，記入研究限制並補位（§6.1） |
| 互動目標選錯／結果不符預期 | 換下一個轉換候選（不點 consent／法律元素） | Action Verification Failed（能力記 unverified） | 那個行為寫「未驗證」，並寫出失敗的是哪一層（§6.2） |
| preflight 量測時研究環境有負載（並行、CPU 高） | serial 重測 | `load_affected`（性能訊號最多降到 Medium） | 選站表標「⚠ 負載下量測」；不要把研究環境的負載寫成網站效能差（§5.1） |
| 截圖引用超過 24 張 | 減少重複引用後重新打包 | Pipeline Error（deployment gate FAIL） | 不發佈；不能提高上限、不能刪被引用的圖（§9） |

沒有任何一項失敗會讓整份研究「失敗」。研究照常寫完，只是對應的段落降級，並在可靠度與「限制」裡寫清楚。
唯一的例外是 Research Environment Failure：那不是「證據不完整」，而是「沒有拿到網站」，見 §6.1。

### 6.1 Research Environment Failure

網站拒絕的是**研究環境**（headless 瀏覽器、軟體渲染 WebGL、資料中心 IP），不是網站本身壞掉：

| 訊號（`quality_check.environment_failure()`） | 例子 |
|---|---|
| 被導向 `/unsupported`、`/browser-not-supported`、`/blocked`、`/captcha` 這類網址 | Santioni Spirits → `https://santionispirits.com/unsupported` |
| 標題或（短）內文是拒絕訊息：browser not supported、update your browser、verify you are human、access denied、enable JavaScript | 「Your browser is not supported」 |
| HTTP 401／403／429 | — |

處理：
1. 那一次擷取記成 D 並標 `environment_failure`；**不能覆寫成較好的等級**（畫面上可能有 logo 與文字，空白偵測抓不到，所以一定要帶 `--page-url`／`--page-title`）。
2. 換另一種擷取方式再試一次（Firecrawl ↔ Playwright fallback）。仍被拒絕 → `research_status: environment-failure`。
3. 不寫任何設計結論（拒絕頁面不是網站的設計），在總覽「研究限制」寫明「研究環境被拒絕，不代表網站有問題」，並從候選補位。
4. Preflight 遇到同樣的訊號 → Blocked（不是 Low），`run_standard.py` 不執行。
5. 不要嘗試偽裝或繞過網站的偵測（同「被網路政策擋住不要繞過」）。

### 6.2 Action Verification

「成功 click」不等於「CTA 已驗證」。2026-10-05 的 Nightkidz：工具把 cookie 橫幅裡按鈕樣式的 Privacy Policy 當成 Primary CTA 點下去，
紀錄只寫了「點擊後沒有變化」，看不出其實是**目標選錯**。每一個互動量測都要分三層確認：

| 層 | 問題 | Primary CTA 的檢查 | 失敗時 |
|---|---|---|---|
| ① Target Correctness | 找到的是不是預期元素？ | 不在 cookie／consent 橫幅裡（`consent` 欄位）；不是 consent 按鈕（Accept／Essential Only…）、法律連結（Privacy、Terms、Cookie）、導覽工具（Cart、Menu、Sign in、語言）；沒有被蓋住 | failed：不點；換下一個轉換候選；沒有候選 → unverified |
| ② Action Success | 動作真的發生了嗎？ | click 沒有丟錯；hover 目標是最上層；focus 真的移到元素上 | unverified |
| ③ Expected Outcome | 結果符合預期嗎？ | 換頁到商品頁／表單／checkout／contact flow，或開出非 cookie 的對話框；落地網址不是 privacy／cookie／terms；有 href 時落地網址對得上 | 結果不符 → failed；沒有可觀察的結果 → unverified |

```
CTA 候選（cta-<寬>.json；consent／法律／導覽元素標 conversion: false）
   ↓ ① 確認目標元素（action_verify.target_check）
click
   ↓ ② 動作是否發生
檢查 URL／route／modal／state
   ↓ ③ 結果是否符合預期（action_verify.outcome_check）
verified → cta_click: ok      failed／unverified → cta_click: unverified（click-<寬>.json 的 verification 寫明哪一層）
```

**「click 成功」不等於「CTA flow verified」**（2026-10-06：三站的工具自動點擊都選錯目標）：

| 情況 | 實例 | 判定 |
|---|---|---|
| 目標是頁內控制：捲動提示、輪播 Previous／Next、分頁、Show point、播放鍵 | Aevion「Scroll Down」、Decathlon Yestalgia「Previous」 | Target Correctness 失敗 → Failed（不是轉換行動） |
| 目標沒有實際目的地（`href="#"`、`javascript:`、沒有 href 的按鈕），點擊後沒有可觀察的變化 | ERA Residence「BOOK A CALL」（`href="#"`） | Unverified |
| 同上，只看到「頁面狀態改變」 | — | Unverified（無法確認是 CTA flow） |
| 同上，開出非 cookie 的表單對話框 | ERA 的 Book a call 表單 | 可以 verified（有可驗證的 modal） |
| click 成功，但落地結果不符預期（目標 /contact，落在 /blog） | — | Failed（Expected Outcome 不符） |
| 換頁了，但落地頁是機器人驗證（Cloudflare「Just a moment...」、網址有 `__cf_chl`） | Decathlon「BOUTIQUE」→ decathlon.fr | Unverified（研究環境被落地站拒絕，不代表連結有問題，不要繞過） |

- 選 Primary CTA 時，**有實際目的地（href 會換頁或開新分頁）的轉換候選優先**；頁內控制不進候選。
- `click-<寬>.json` 記錄落地頁的 `title`，讓 Expected Outcome 看得出驗證頁。
- Hover：只量轉換 CTA 與常駐導覽，不量 consent 元素；目標被蓋住記 unverified。
- Focus：落在看不見元素、或沒有焦點指示的步驟不算驗證到的步驟；驗證到的步驟少於 3 步 → partial。
- 報告寫法：verdict 不是 verified 時，寫「Action Verification Failed（目標是 cookie 橫幅的 Privacy Policy）」或「未驗證（點擊後沒有可觀察的結果）」，**不能寫「CTA 已驗證」或「點擊後進入…」**。
- 手寫 Playwright 補量互動時，同樣記錄三層結果（`action_verify.verify(target, result)` 可以直接用）。

## 7. Research Reliability

每份研究（Daily、Standard、Deep）都在開頭寫一行 Research Reliability。用 `reliability.py <網站資料夾> --mode daily|standard|deep --markdown --write` 產生，不要手算。

| 面向 | 意思 | Daily | Standard／Deep |
|---|---|---|---|
| Capture | 主要內容（桌機）擷取的完整度 | 桌機各擷取中最好的 Capture Quality | 同左（含 Playwright 分段） |
| Interaction | hover、focus、CTA 點擊、選單有沒有實測到 | N/A（不量測） | 四項能力的取得比例：ok=1、fallback=0.75、partial=0.5、其他 0（na 不計）；≥90% A、≥60% B、≥30% C、其餘 D |
| Responsive | 不同寬度的證據 | 桌機與手機 Capture 中較差的那個 | 1440、390、768 都取得 → A；1440＋390 → B；只有手機 Firecrawl 截圖 ≥ B 或 390 只有首屏 → C；其餘 D |
| DOM/CSS | DOM 結構與 computed style | N/A（不量測） | 三個寬度 × DOM、CSS 的取得比例，門檻同 Interaction |
| **Overall** | 整體 | 在範圍內的面向取中位數（偶數個取較差的那個）；Capture 是 D 時 Overall 一定是 D；Overall 最多只比 Capture 好一級 | 同左 |

等級：A — Reliable、B — Mostly reliable、C — Partially reliable、D — Limited / insufficient。

範例（Standard）：Capture B、Interaction C、Responsive D、DOM/CSS A → 排序 A, B, C, D → 中間兩個 B、C 取較差 → **Overall C**。

研究者可以覆寫某個面向（`--override responsive=C --reason "…"`），理由會記在狀態檔。
**Reliability 不是 Design Quality Score**：不能拿來比較網站好壞，也不能寫成「這個網站得到 C」。

## 8. Evidence 與 Reliability 要分開

```
Evidence（截圖、DOM、CSS、互動紀錄）
   ↓
Claim（一句結論）
   ↓
Confidence（這句結論多確定：看它自己的證據）
```

Research Reliability 描述的是「這次研究環境取得資料的品質」，Evidence Confidence 描述的是「某一句結論多確定」。兩者不能互相代替：

- **Capture C 不會讓所有結論變成錯的或推測**。首屏 computed style 量到的字級，在 Capture C 的研究裡仍然是實測值。
- **Capture A 也不會讓推測變成事實**。從截圖推得的品牌定位，仍然要標推測。
- Reliability 影響的是**能不能做「範圍性」的結論**：全頁有幾個 CTA、某元素是否存在、手機版拿掉了什麼。這類結論需要對應面向 ≥ B，否則改寫成「在取得的範圍內…」。
- Deep 的證據等級 E1–E5 是「單一證據」的等級，不是 Reliability；兩者都寫，不要合併。

## 9. 截圖引用、打包與交付驗證

**引用寫法**（`validate_refs.py` 依這套規則解析）
- 截圖名稱寫完整：`（截圖：pw1440-s07）`、`（截圖：int1440-cta-hover）`、`（截圖：fb-d-s03）`、`（截圖：desktop）`。
- 範圍寫 `pw1440-s01～pw1440-s05`（或 `pw1440-s01～s05`），會展開成每一張。
- 同一個括號裡接著寫的 `s05`、`s07` 會沿用前一個名稱的前綴。
- Firecrawl 切圖 `d03`／`m02` 對應整頁截圖 `desktop`／`mobile`（切圖本身不上傳）。

**打包**（`pack_assets.py`）不是只看總數上限：
1. 報告引用到的截圖一定先打包；引用數超過上限就失敗，不默默丟圖。
2. 其餘名額依類型保留最低配額：desktop 7、mobile 6、tablet 3、interaction 4、fallback 4（總上限預設 24）。
3. 配額用完還有名額，依 desktop → mobile → interaction → tablet → fallback 補滿。

**交付驗證**：報告只能引用實際存在、實際上傳的圖片。

```
報告的截圖引用
      ↓
validate_refs.py：檔案存在？已打包？有上傳網址？
   ↓ 是            ↓ 否
  OK          Pipeline Error（結束碼 1）→ 修正引用或補上傳，不要部署
```

- 研究收尾：`validate_refs.py <網站資料夾>`（引用的檔案都存在；引用不存在的截圖 → Pipeline Error，結束碼 1）。
- 打包：`pack_assets.py` 在引用數超過上限時以 Pipeline Error 結束，**不默默刪圖**，也不留下上一次的 manifest（避免被誤當成這次的結果）。
  **24 張是硬上限**（`validate_refs.HARD_MAX`）：`--max` 只能調低，不能提高。處理方式是減少報告的重複引用
  （同一段落只引代表性的 1–3 張；長範圍改成代表張），然後重新打包。
- 打包後：`validate_refs.py <網站資料夾> --manifest <manifest.json>`（manifest 不存在也是 Pipeline Error）。
- 發佈前：`validate_refs.py <網站資料夾> --day <day.json> --domain <網域>`。

**Deployment gate**（`scripts/deploy_gate.py`）：packaging validation 是部署的關卡，不是事後檢查。

```
Research → Package → Validate references → Validate image limit → Packed → Uploaded
                                                                  ├─ 全部 PASS → Deploy
                                                                  └─ 任何一站 FAIL → Stop / Repair（不發佈）
```

`python deploy_gate.py --research research --assets <打包資料夾> --day <day.json>`：沒有 manifest（打包失敗）、引用不存在、
打包或引用超過 24 張、引用沒有被打包、沒有上傳網址，任何一項失敗就以結束碼 1 結束。
不要用提高上限、刪除被引用的圖、或略過這個檢查的方式讓部署通過。

## 10. 生效範圍

- 這些規則從 2026-10-05 之後的研究開始生效。
- 不重新研究 10/01–10/04 的網站，不替舊報告補寫不存在的證據，也不把新格式硬套到舊研究。
- 舊報告沒有 Research Reliability 欄位，代表「當時沒有記錄」，不代表 D。
- Final Capture Quality（§2.1）、Research Environment Failure（§6.1）、Action Verification（§6.2）與 Standard Candidate Pipeline（§5）從 2026-10-06 之後的研究生效；
  10/05 的報告不回頭改寫，它們的異常已轉成 `evals/run_checks.py` 的 regression（REG-01～REG-08）。
- 舊研究升級成 Standard 時，用新流程重新取得證據，新的 notes.md 才有 Reliability。
- Evidence Quality × Evidence Coverage（§2.1、§2.2）、preflight serial／load_affected（§5.1）、頁內控制與 `href="#"` 的 Action Verification（§6.2）、
  24 張硬上限與 deployment gate（§9）從 2026-10-07 之後的研究生效；10/06 的報告不回頭改寫，它的實例已轉成
  `evals/run_checks.py` 的 regression（REG-09～REG-14）。
