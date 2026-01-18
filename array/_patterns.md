# Array & Hashing 模式

## 核心技巧

### HashMap 查找配對
- **使用時機**: 找兩數之和、找重複、統計頻率
- **模板**: 遍歷時查 map，沒有就存入
- **複雜度**: O(n) time, O(n) space

### 頻率統計
- **使用時機**: 判斷 anagram、找出現最多/最少的元素
- **模板**: `Map<element, count>`

### 原地標記
- **使用時機**: 找缺失數字、找重複（要求 O(1) space）
- **技巧**: 用正負號或 index 當作標記

---

## 題目清單

| # | 題目 | 難度 | 狀態 | 核心技巧 |
|---|------|------|------|----------|
| 1 | Two Sum | Easy | ⬜ | HashMap |
| 49 | Group Anagrams | Medium | ⬜ | HashMap + 排序 |
| 128 | Longest Consecutive Sequence | Medium | ⬜ | HashSet |
| 217 | Contains Duplicate | Easy | ⬜ | HashSet |
| 238 | Product of Array Except Self | Medium | ⬜ | Prefix/Suffix |
| 242 | Valid Anagram | Easy | ⬜ | 頻率統計 |
| 271 | Encode and Decode Strings | Medium | ⬜ | 編碼設計 |
| 347 | Top K Frequent Elements | Medium | ⬜ | HashMap + Bucket |
| 659 | Encode and Decode Strings | Medium | ⬜ | 編碼設計 |

---

## 學到的教訓

<!-- 記錄你在這個主題踩過的坑 -->
