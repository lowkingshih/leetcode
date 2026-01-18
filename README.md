# Blind75 刷題專案

## 每日流程

```bash
# 1. 看今天要刷什麼
npm run status

# 2. 開始刷題（以 Two Sum 為例）
npm run solve array/001-two-sum.ts

# 3. 完成後，標記完成
npm run done array/001-two-sum
```

## 筆記放哪？

| 類型 | 位置 | 用途 |
|-----|------|------|
| 單題筆記 | `array/001-two-sum.md` | 該題的思路、易錯點 |
| 主題模式 | `array/_patterns.md` | 這類題的通用技巧 |
| 進度總覽 | `_overview.md` | 追蹤完成進度 |
| 完整計畫 | `docs/plans/2026-01-18-blind75-study-plan.md` | 刷題方法論 |

## 建立新題目

```bash
# 自動建立 .ts 和 .md 檔案
npm run new two-pointers/015-3sum
```

## 刷題提醒

1. **讀題** - 看 constraints 推算 Big O（5-8 分鐘）
2. **想解法** - 暴力解 → 優化，卡 15 分鐘就看答案（5-10 分鐘）
3. **實作** - 先處理 edge cases（10-15 分鐘）
4. **筆記** - 記錄類型、技巧、易錯點（5-10 分鐘）

## 題目順序

依照 `_overview.md` 的順序刷，從 Array 開始。
