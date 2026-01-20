# 🚀 每日刷題速查表

## 3 個核心指令（背起來！）

```bash
npm run next        # 產生下一題
npm run <題名>       # 執行測試
npm run done ...    # 標記完成
```

## 完整流程範例

```bash
# Step 1: 產生下一題
npm run next
# 輸出: 📝 下一題: LeetCode 217. contains-duplicate

# Step 2: 填寫題目內容和解答
# 在 VSCode 中編輯 array/217-contains-duplicate.ts

# Step 3: 執行測試
npx ts-node array/217-contains-duplicate.ts

# Step 4: 標記完成（自動更新 README）
npm run done array/217-contains-duplicate

# Step 5: 重複 Step 1
```

## 其他常用指令

```bash
npm run readme      # 手動更新 README
npm run status      # 查看進度
```

## 多解法策略

如果想嘗試不同解法，建立不同檔案：

```
array/
├── 001-two-sum.ts         # 最佳解（Hash Map）
└── 001-two-sum.brute.ts   # 暴力解
```

## 檔案說明

| 檔案 | 用途 |
|------|------|
| `problems.json` | 所有題目清單（57 題） |
| `README.md` | 自動生成的進度表 |
| `array/_patterns.md` | 該主題的通用技巧 |
| `xxx.ts` | 程式碼 + 題目描述 |
| `xxx.md` | 個人筆記 |

## 狀態說明

- ⬜ 尚未開始
- 🔄 進行中（檔案已建立但未標記完成）
- ✅ 已完成（有 `// DONE` 標記）

## 🧪 測試功能說明

### 如何知道答案對還錯？

執行 `npm run <題名>` 會自動運行測試：

```bash
npm run two-sum

# 輸出：
🧪 Running 6 test(s)...

✅ PASS Answer at beginning
✅ PASS Answer in middle
❌ FAIL Negative numbers     # 錯誤會顯示期望值 vs 實際值
   Expected: [1,2]
   Got:      [1,3]

📊 Results: 5 passed, 1 failed
```

### 如何測量時間複雜度？

取消註解程式碼中的 `estimateTimeComplexity()` 區塊：

```typescript
estimateTimeComplexity((n) => {
  const nums = Array.from({ length: n }, (_, i) => i);
  twoSum(nums, n * 2);
});
```

會顯示：
```
⏱️  Time Complexity Estimation:

   n= 100: 0.123ms
   n= 200: 0.245ms
   n= 400: 0.490ms
   n= 800: 0.980ms

   Growth rate:
   100 → 200: 1.99x (size: 2x)  # 接近 2x = O(n)
   200 → 400: 2.00x (size: 2x)
   400 → 800: 2.00x (size: 2x)

   Hint:
   - Ratio ≈ 1x: O(1) or O(log n)
   - Ratio ≈ 2x (same as size): O(n)
   - Ratio ≈ 4x: O(n²)
```

### 空間複雜度？

空間複雜度需要自己分析：
- 用了 Map/Set/Array？→ O(n)
- 只用了幾個變數？→ O(1)
- 遞迴深度？→ O(遞迴深度)
