# Blind75 刷題專案

## ⚡ 每日手順（只需記這 3 個指令）

```bash
npm run next        # 1️⃣ 產生下一題（自動建立 .ts 和 .md）
npm run two-sum     # 2️⃣ 執行測試
npm run done ...    # 3️⃣ 標記完成（自動更新 README）
```

## 📖 指令速查表

| 指令 | 功能 | 範例 |
|------|------|------|
| `npm run next` | 🎯 自動產生下一題（.ts + .md） | - |
| `npm run <題名>` | ▶️ 執行測試（自動顯示 ✅/❌） | `npm run two-sum` |
| `npm run done <路徑>` | ✅ 標記完成 + 更新 README | `npm run done array/001-two-sum` |
| `npm run readme` | 📝 手動更新 README 題目清單 | - |
| `npm run status` | 📊 查看進度統計 | - |
| `npm run new <路徑>` | 🆕 手動建立題目 | `npm run new array/049-group-anagrams` |

## 🧪 測試功能

每個題目都自動包含測試工具：

```typescript
runTests(solution, [
  { input: [[2, 7, 11, 15], 9], expected: [0, 1], description: "Basic case" },
  // 更多測試案例...
]);
```

執行後會顯示：
- ✅ PASS - 答案正確
- ❌ FAIL - 答案錯誤（會顯示期望值 vs 實際值）
- 📊 統計：x passed, y failed

### 測量時間複雜度（選用）

```typescript
// 取消註解以測量不同輸入大小的執行時間
estimateTimeComplexity((n) => {
  const nums = Array.from({ length: n }, (_, i) => i);
  twoSum(nums, n * 2);
});
```

會顯示：
- 不同輸入大小的執行時間
- 時間增長率（判斷是 O(n)、O(n²) 等）

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


<!-- PROBLEMS_START -->

## 📋 題目清單 (1/57 - 2%)

| # | 題目 | 難度 | 主題 | 狀態 | 筆記 |
|---|------|------|------|------|------|
| 217 | [contains-duplicate](array/217-contains-duplicate.ts) | Easy | array | ⬜ |  |
| 242 | [valid-anagram](array/242-valid-anagram.ts) | Easy | array | ⬜ |  |
| 1 | [two-sum](array/001-two-sum.ts) | Easy | array | ✅ | [📝](array/001-two-sum.md) |
| 49 | [group-anagrams](array/049-group-anagrams.ts) | Medium | array | ⬜ |  |
| 347 | [top-k-frequent-elements](array/347-top-k-frequent-elements.ts) | Medium | array | ⬜ |  |
| 238 | [product-of-array-except-self](array/238-product-of-array-except-self.ts) | Medium | array | ⬜ |  |
| 271 | [encode-and-decode-strings](array/271-encode-and-decode-strings.ts) | Medium | array | ⬜ |  |
| 128 | [longest-consecutive-sequence](array/128-longest-consecutive-sequence.ts) | Medium | array | ⬜ |  |
| 125 | [valid-palindrome](two-pointers/125-valid-palindrome.ts) | Easy | two-pointers | ⬜ |  |
| 15 | [3sum](two-pointers/015-3sum.ts) | Medium | two-pointers | ⬜ |  |
| 11 | [container-with-most-water](two-pointers/011-container-with-most-water.ts) | Medium | two-pointers | ⬜ |  |
| 121 | [best-time-to-buy-and-sell-stock](sliding-window/121-best-time-to-buy-and-sell-stock.ts) | Easy | sliding-window | ⬜ |  |
| 3 | [longest-substring-without-repeating-characters](sliding-window/003-longest-substring-without-repeating-characters.ts) | Medium | sliding-window | ⬜ |  |
| 424 | [longest-repeating-character-replacement](sliding-window/424-longest-repeating-character-replacement.ts) | Medium | sliding-window | ⬜ |  |
| 76 | [minimum-window-substring](sliding-window/076-minimum-window-substring.ts) | Hard | sliding-window | ⬜ |  |
| 20 | [valid-parentheses](stack/020-valid-parentheses.ts) | Easy | stack | ⬜ |  |
| 153 | [find-minimum-in-rotated-sorted-array](binary-search/153-find-minimum-in-rotated-sorted-array.ts) | Medium | binary-search | ⬜ |  |
| 33 | [search-in-rotated-sorted-array](binary-search/033-search-in-rotated-sorted-array.ts) | Medium | binary-search | ⬜ |  |
| 206 | [reverse-linked-list](linked-list/206-reverse-linked-list.ts) | Easy | linked-list | ⬜ |  |
| 21 | [merge-two-sorted-lists](linked-list/021-merge-two-sorted-lists.ts) | Easy | linked-list | ⬜ |  |
| 141 | [linked-list-cycle](linked-list/141-linked-list-cycle.ts) | Easy | linked-list | ⬜ |  |
| 143 | [reorder-list](linked-list/143-reorder-list.ts) | Medium | linked-list | ⬜ |  |
| 19 | [remove-nth-node-from-end-of-list](linked-list/019-remove-nth-node-from-end-of-list.ts) | Medium | linked-list | ⬜ |  |
| 23 | [merge-k-sorted-lists](linked-list/023-merge-k-sorted-lists.ts) | Hard | linked-list | ⬜ |  |
| 226 | [invert-binary-tree](tree/226-invert-binary-tree.ts) | Easy | tree | ⬜ |  |
| 104 | [maximum-depth-of-binary-tree](tree/104-maximum-depth-of-binary-tree.ts) | Easy | tree | ⬜ |  |
| 100 | [same-tree](tree/100-same-tree.ts) | Easy | tree | ⬜ |  |
| 572 | [subtree-of-another-tree](tree/572-subtree-of-another-tree.ts) | Easy | tree | ⬜ |  |
| 235 | [lowest-common-ancestor-of-bst](tree/235-lowest-common-ancestor-of-bst.ts) | Easy | tree | ⬜ |  |
| 102 | [binary-tree-level-order-traversal](tree/102-binary-tree-level-order-traversal.ts) | Medium | tree | ⬜ |  |
| 98 | [validate-binary-search-tree](tree/098-validate-binary-search-tree.ts) | Medium | tree | ⬜ |  |
| 230 | [kth-smallest-element-in-a-bst](tree/230-kth-smallest-element-in-a-bst.ts) | Medium | tree | ⬜ |  |
| 105 | [construct-binary-tree-from-preorder-and-inorder](tree/105-construct-binary-tree-from-preorder-and-inorder.ts) | Medium | tree | ⬜ |  |
| 124 | [binary-tree-maximum-path-sum](tree/124-binary-tree-maximum-path-sum.ts) | Hard | tree | ⬜ |  |
| 297 | [serialize-and-deserialize-binary-tree](tree/297-serialize-and-deserialize-binary-tree.ts) | Hard | tree | ⬜ |  |
| 295 | [find-median-from-data-stream](heap/295-find-median-from-data-stream.ts) | Hard | heap | ⬜ |  |
| 200 | [number-of-islands](graph/200-number-of-islands.ts) | Medium | graph | ⬜ |  |
| 133 | [clone-graph](graph/133-clone-graph.ts) | Medium | graph | ⬜ |  |
| 207 | [course-schedule](graph/207-course-schedule.ts) | Medium | graph | ⬜ |  |
| 417 | [pacific-atlantic-water-flow](graph/417-pacific-atlantic-water-flow.ts) | Medium | graph | ⬜ |  |
| 261 | [graph-valid-tree](graph/261-graph-valid-tree.ts) | Medium | graph | ⬜ |  |
| 323 | [number-of-connected-components](graph/323-number-of-connected-components.ts) | Medium | graph | ⬜ |  |
| 70 | [climbing-stairs](dp-1d/070-climbing-stairs.ts) | Easy | dp-1d | ⬜ |  |
| 198 | [house-robber](dp-1d/198-house-robber.ts) | Medium | dp-1d | ⬜ |  |
| 213 | [house-robber-ii](dp-1d/213-house-robber-ii.ts) | Medium | dp-1d | ⬜ |  |
| 5 | [longest-palindromic-substring](dp-1d/005-longest-palindromic-substring.ts) | Medium | dp-1d | ⬜ |  |
| 647 | [palindromic-substrings](dp-1d/647-palindromic-substrings.ts) | Medium | dp-1d | ⬜ |  |
| 91 | [decode-ways](dp-1d/091-decode-ways.ts) | Medium | dp-1d | ⬜ |  |
| 322 | [coin-change](dp-1d/322-coin-change.ts) | Medium | dp-1d | ⬜ |  |
| 152 | [maximum-product-subarray](dp-1d/152-maximum-product-subarray.ts) | Medium | dp-1d | ⬜ |  |
| 139 | [word-break](dp-1d/139-word-break.ts) | Medium | dp-1d | ⬜ |  |
| 300 | [longest-increasing-subsequence](dp-1d/300-longest-increasing-subsequence.ts) | Medium | dp-1d | ⬜ |  |
| 62 | [unique-paths](dp-2d/062-unique-paths.ts) | Medium | dp-2d | ⬜ |  |
| 1143 | [longest-common-subsequence](dp-2d/1143-longest-common-subsequence.ts) | Medium | dp-2d | ⬜ |  |
| 57 | [insert-interval](greedy-intervals/057-insert-interval.ts) | Medium | greedy-intervals | ⬜ |  |
| 56 | [merge-intervals](greedy-intervals/056-merge-intervals.ts) | Medium | greedy-intervals | ⬜ |  |
| 435 | [non-overlapping-intervals](greedy-intervals/435-non-overlapping-intervals.ts) | Medium | greedy-intervals | ⬜ |  |

<!-- PROBLEMS_END -->
