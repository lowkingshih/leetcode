# Two Sum

## 題目連結
https://leetcode.com/problems/two-sum/

## 類型
Array, HashMap

## 思路

一開始只有暴力解 O(n^2) 的想法
原本有嘗試能不能先排序後，再用雙指標的方式解決，但題目說要 HashMap 解法
所以我思考能不能將兩兩相加的解存進 map value，map key 存放 index 的總和，但我發現會有重複的問題 => [0,4],[1,3] 的 map key 都會是 4
所以就直接看解答了呵呵

梳理一下用 HashMap 的解法：
1. 建立一個空的 HashMap
2. 迴圈跑 nums 裡的每個數字 num
3. 計算 complement = target - num
4. 檢查 complement 是否在 HashMap 裡
  - 如果在，代表找到了兩個數字，回傳它們的 index
  - 如果不在，將 num 和它的 index 存進 HashMap 裡
5. 如果迴圈結束還沒找到，回傳空陣列

其中 3 是有點難懂的，所以我用一個簡單的範例，來演示遍歷的過程：
假設 nums = [2,7,11,15], target = 9
- i = 0, num = 2, complement = 9 - 2 = 7, HashMap = {}
    - complement 不在 HashMap 裡，存進 HashMap => {2:0}
- i = 1, num = 7, complement = 9 - 7 = 2, HashMap = {2:0}
    - complement 在 HashMap 裡，找到了兩個數字 2 和 7，回傳它們的 index => [0,1]


我有個疑惑是：為什麼 complement 要放在前面檢查，而不是先把 num 放進 HashMap 裡？
答案是因為這樣可以避免使用同一個數字兩次的問題
假設我們先把 num 放進 HashMap 裡，當 i = 0 時，num = 2，complement = 7
- 我們會先把 2 放進 HashMap => {2:0}
- 當 i = 1 時，num = 7，complement = 2
- 這時候我們會發現 complement 2 在 HashMap 裡，但這是我們剛剛放進去的，代表我們使用了同一個數字兩次，這是不符合題意的



## Big O
- Time:
- Space:

## 易錯點
一開始很容易陷入：我要把「所有結果存起來」的迷思


## 類似題

<!-- 相關題目 -->
