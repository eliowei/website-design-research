# 擷取品質、失敗處理與研究可靠度

三種模式都適用。Daily 讀 §0–4、§7–9；Standard 再讀 §5–6；Deep 全部。
這份規則從 2026-10-05 之後的研究開始生效，不回頭改寫舊研究（§10）。

## 目錄
0. 三條原則
1. 四個不同的東西：不要混在一起
2. Capture Quality（A–D）
3. Fallback：分段擷取策略
4. 擷取不完整時怎麼寫
5. Research Value 與 Research Feasibility（選 Standard）
6. 失敗、逾時與降級規則
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

## 1. 四個不同的東西：不要混在一起

| 名稱 | 回答什麼 | 範圍 | 值 | 誰產生 |
|---|---|---|---|---|
| **Capture Quality** | 這「一次擷取」拿到的畫面完不完整？ | 一張整頁截圖或一組分段截圖 | A–D | `quality_check.py` |
| **能力狀態** | 這個「研究能力」（截圖、捲動、hover…）在這個寬度成功了嗎？ | 一個能力 × 一個寬度 | ok／fallback／partial／unverified／unavailable／skipped／na | `scripts/pw/` 的工具 |
| **Research Reliability** | 這份研究「取得證據」整體有多可靠？ | 一份研究，分四個面向＋Overall | A–D | `reliability.py` |
| **Evidence Confidence** | 「某一句結論」有多確定？ | 一句結論 | 來源標記與（推測）；Deep 用 E1–E5＋[O]/[I]/[H] | 研究者 |

它們**都不是**網站設計的評分。Reliability C 的意思是「這次研究環境拿到的資料有限」，不是「這個網站設計得普通」。
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

## 3. Fallback：分段擷取策略

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
- Fallback 之後重新判定 Capture Quality：取「整頁截圖」與「fallback」中較好的那個當這個寬度的 Capture。
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

**Research Feasibility**（這次能量到多少；`scripts/pw/preflight.py`，≤ 90 秒）

檢查：首屏能否在合理時間取得、能否捲動、DOM／CSS 是否取得、是否大量依賴 WebGL／canvas、smooth scroll／scroll hijacking 跡象、幀率、手機 viewport 能否載入、逾時次數。

| 結果 | 意思 | 建議範圍 |
|---|---|---|
| High | 都正常 | full |
| Medium | 有 smooth scroll、大面積 canvas、慢載入或樣式表無法讀取等，但能量測 | full（預期部分能力降級） |
| Low | 捲不動、首屏 > 30 秒、低幀率 canvas、手機載不了、反覆逾時 | reduced：截圖張數減半、hover 只量 3 個、略過 768、時間上限縮短 |
| Blocked | 無法載入或首屏完全拍不到 | 這次不做 Standard |

**選站流程**

```
N 個 Daily（排程設定，例如 5 或 10）
    ↓ Research Value 排序
候選網站（取前 2K 個，K = 要選的 Standard 數）
    ↓ Feasibility Preflight（每站 ≤ 90 秒）
可量測（High／Medium） ／ 低可量測（Low） ／ 不可量測（Blocked）
    ↓
從可量測候選中依 Value 選 K 個
```

**例外**：不要因此永遠排除 WebGL／3D 網站。Low 的網站 Value 明顯最高（≥ 12/16，而且比第 K 名可量測候選高 3 分以上）時，可以佔用**最多 1 個**名額，但必須：
- 用 reduced 範圍（`run_standard.py --scope reduced`，或讓 `--scope auto` 讀 preflight 結果）；
- 設定較短的時間上限（量測 ≤ 8 分鐘）；
- 在 notes.md 開頭與每日總覽寫明「低可量測、縮小範圍」；
- 不阻塞其他網站：它排在最後一個量測。

Value 決定「值不值得研究」，Feasibility 決定「這次能研究到多少」。兩個分數都寫進每日總覽的選站表。

## 6. 失敗、逾時與降級規則

**時間預算**（預設值寫在 `scripts/pw/common.py` 的 `BUDGET`，改了要同步改這張表）

| 範圍 | 上限 |
|---|---|
| Feasibility preflight | 每站 90 秒（子行程，超過＋15 秒強制中止） |
| Standard 量測（`run_standard.py`） | 每站 720 秒（12 分鐘）；寫筆記另計，整站 Standard 約 20 分鐘 |
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

沒有任何一項失敗會讓整份研究「失敗」。研究照常寫完，只是對應的段落降級，並在可靠度與「限制」裡寫清楚。

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

- 研究收尾：`validate_refs.py <網站資料夾>`（引用的檔案都存在）。
- 打包後：`validate_refs.py <網站資料夾> --manifest <manifest.json>`。
- 發佈前：`validate_refs.py <網站資料夾> --day <day.json> --domain <網域>`。

## 10. 生效範圍

- 這些規則從 2026-10-05 之後的研究開始生效。
- 不重新研究 10/01–10/04 的網站，不替舊報告補寫不存在的證據，也不把新格式硬套到舊研究。
- 舊報告沒有 Research Reliability 欄位，代表「當時沒有記錄」，不代表 D。
- 舊研究升級成 Standard 時，用新流程重新取得證據，新的 notes.md 才有 Reliability。
