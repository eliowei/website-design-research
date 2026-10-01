# 網站設計研究

用 Claude Code 研究網站設計，產出結構化的分析報告。

## 使用方式

在 Claude Code 裡直接說：

- `/website-research https://stripe.com`
- 「分析 linear.app 的首頁設計」
- 「比較 stripe.com、linear.app、vercel.com 的首頁設計」
- 「研究 notion.so 的定價頁，著重配色和 CTA」

報告會存在 `research/<網域>/report.md`，多網站比較存在 `research/comparisons/`，
索引在 [research/README.md](research/README.md)。

## 結構

```
.claude/skills/website-research/   研究流程（SKILL.md）與報告範本（template.md）
research/                          研究成果
```
