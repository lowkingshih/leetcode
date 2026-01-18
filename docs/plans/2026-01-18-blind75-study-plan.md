# Blind75 刷題計畫

## 背景

- 三年前端工程師
- 目標：本土科技公司面試（蝦皮、LINE、Gogoro 等）
- 時間：1-3 個月
- 每日時間：平日 30-60 分鐘，假日 30-120 分鐘（約每週 6 小時）
- 語言：TypeScript

---

## 主題順序與時間規劃

| 週次 | 主題 | 題數 | 核心概念 |
|------|------|------|----------|
| 第 1 週 | Array & Hashing | 9 | HashMap 使用、頻率統計 |
| 第 2 週 | Two Pointers | 5 | 雙指標、相向/同向移動 |
| 第 2-3 週 | Sliding Window | 6 | 固定/變動視窗、最佳化區間 |
| 第 3 週 | Stack | 3 | 單調棧、括號配對 |
| 第 4 週 | Binary Search | 5 | 二分變形、搜尋條件設計 |
| 第 4-5 週 | Linked List | 6 | 快慢指標、反轉、合併 |
| 第 5-6 週 | Tree | 11 | DFS/BFS、遞迴思維 |
| 第 7 週 | Heap / Priority Queue | 3 | Top K 問題 |
| 第 7-8 週 | Graph | 6 | DFS/BFS、拓撲排序 |
| 第 8-9 週 | 1-D DP | 10 | 狀態定義、轉移方程 |
| 第 10 週 | 2-D DP | 5 | 二維狀態、路徑問題 |
| 第 10-11 週 | Greedy & Intervals | 6 | 區間合併、貪心策略 |

---

## 每題學習流程（30-45 分鐘）

### Step 1：讀題與分析（5-8 分鐘）

**1.1 讀題三遍**
- 第一遍：快速掃過，了解大意
- 第二遍：標記關鍵字（`sorted`、`unique`、`contiguous`、`in-place` 等）
- 第三遍：看 Constraints — 決定可接受的複雜度

**1.2 從 Constraints 推算目標 Big O**

| n 的範圍 | 可接受的複雜度 | 常見對應技巧 |
|---------|---------------|-------------|
| n ≤ 10 | O(n!) 或 O(2^n) | 暴力、回溯、全排列 |
| n ≤ 100 | O(n³) | 三層迴圈 |
| n ≤ 1,000 | O(n²) | 雙層迴圈、簡單 DP |
| n ≤ 10⁴ | O(n²) 勉強 | 需要開始優化 |
| n ≤ 10⁵ | O(n log n) 或 O(n) | 排序、HashMap、雙指標 |
| n ≤ 10⁶ | O(n) 或 O(log n) | 線性掃描、二分搜尋 |

**1.3 確認輸入輸出**
- 輸入型別？（陣列、字串、樹、圖）
- 回傳什麼？（index、值、boolean、新陣列）
- 特殊限制？（不能用額外空間、必須 in-place）

**1.4 手寫範例**
- 用題目範例走一遍
- 自己想 edge cases：空陣列、單一元素、全部相同、負數、零

---

### Step 2：思考解法（5-10 分鐘）

**2.1 先想暴力解**
- 最直觀的方法是什麼？
- 暴力解的 Big O 是多少？
- 對照 constraints，能過嗎？

**2.2 優化方向檢查清單**

| 問題 | 如果是，考慮用 |
|-----|---------------|
| 有重複計算嗎？ | DP、Memoization |
| 需要快速查找某個值？ | HashMap、HashSet |
| 資料已排序或可以排序？ | Binary Search、Two Pointers |
| 需要維護最大/最小值？ | Heap (Priority Queue) |
| 有配對、嵌套結構？ | Stack |
| 需要找連續區間？ | Sliding Window |
| 有層級關係或連通性？ | BFS / DFS |

**2.3 模式匹配**

```
「找兩數之和」→ HashMap 存已遍歷的值
「找連續子陣列最大/最小」→ Sliding Window
「括號配對」→ Stack
「排序陣列找目標」→ Binary Search
「樹的遍歷」→ DFS 遞迴 或 BFS 佇列
「最短路徑」→ BFS
「所有可能組合」→ Backtracking
「最佳解有重疊子問題」→ DP
```

**2.4 確認解法可行性**
- 時間複雜度符合 constraints？
- 空間複雜度可接受？
- 能處理所有 edge cases？

**⚠️ 10-15 分鐘沒想法 → 直接看提示或解答**

---

### Step 3：實作（10-15 分鐘）

**3.1 先寫框架**

```typescript
function solve(nums: number[]): number {
  // 1. Edge cases 先寫
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // 2. 初始化變數

  // 3. 核心邏輯

  // 4. 回傳結果
}
```

**3.2 常見 Edge Cases**

| 資料類型 | 要考慮的 Edge Cases |
|---------|-------------------|
| Array | 空陣列、單一元素、全部相同、已排序、逆序 |
| String | 空字串、單一字元、全部相同字元 |
| Number | 0、負數、極大值 |
| Linked List | null、單一節點、有環 |
| Tree | null、只有根、只有左/右子樹 |

**3.3 變數命名清楚**

```typescript
// ✅ 好
let left = 0, right = nums.length - 1;
let slow = head, fast = head;
let windowStart = 0;
let maxLength = 0;

// ❌ 不好
let i = 0, j = 0;
let a = head, b = head;
```

**3.4 邊寫邊 Dry Run**

每寫幾行就用簡單範例在腦中跑一遍。

**3.5 提交後分析錯誤**
- Wrong Answer → 看錯在哪個 test case，手動跑一遍
- Time Limit Exceeded → Big O 不夠好，考慮換解法

---

### Step 4：複習與筆記（5-10 分鐘）

**4.1 看別人的解法**

即使解出來，也去看 Discussion 按讚最多的解法。

**4.2 比較 Big O**

```
我的解法：O(n²) 時間、O(1) 空間
最佳解法：O(n) 時間、O(n) 空間
→ 用空間換時間
```

**4.3 寫筆記**

```markdown
## Two Sum

**類型**: Array, HashMap
**技巧**: 用 HashMap 存 {值: index}，查找配對 O(1)
**Big O**: Time O(n), Space O(n)
**一句話**: 找配對問題，HashMap 把 O(n²) 降到 O(n)
**易錯點**: 先查再存，避免同一元素用兩次
**類似題**: 3Sum, Two Sum II
```

**4.4 複習週期**

| 時間點 | 做什麼 |
|-------|-------|
| 解完當天 | 睡前 2 分鐘回想怎麼解 |
| 隔天 | 不看答案重寫一次 |
| 一週後 | 複習該週所有題的筆記 |
| 面試前 | 掃過所有筆記，重做卡住的題 |

---

## 專案結構

```
leetcode/
├── array/
│   ├── 001-two-sum.ts
│   ├── 001-two-sum.md
│   └── _patterns.md
├── two-pointers/
│   ├── 015-3sum.ts
│   ├── 015-3sum.md
│   └── _patterns.md
├── sliding-window/
│   └── ...
└── _overview.md
```

---

## 面試表達流程

### 1. 釐清問題（2-3 分鐘）

```
「輸入會有重複值嗎？」
「多組解要回傳全部還是任一組？」
「可能是空陣列嗎？」
```

### 2. 說明思路（3-5 分鐘）

```
「暴力解是雙層迴圈 O(n²)，但 n 到 10⁵ 會太慢。
 用 HashMap 優化到 O(n)，空間換時間。
 這個 trade-off OK 嗎？」
```

等面試官同意再寫。

### 3. 邊寫邊講（10-15 分鐘）

保持溝通，不要悶頭寫。

### 4. 測試驗證（3-5 分鐘）

主動用範例走一遍，再測 edge case。

### 5. 複雜度分析（1 分鐘）

```
「時間 O(n)，遍歷一次。空間 O(n)，HashMap 最多存 n 個。」
```

---

## 資源

| 資源 | 用途 |
|-----|------|
| [LeetCode](https://leetcode.com) | 主力刷題 |
| [NeetCode](https://neetcode.io) | Blind75 整理 + 影片解說 |
| [VisuAlgo](https://visualgo.net) | 視覺化理解演算法 |
