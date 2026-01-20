import * as fs from "fs";
import * as path from "path";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("用法: npx ts-node scripts/new.ts <題目路徑>");
  console.log("範例: npx ts-node scripts/new.ts array/049-group-anagrams");
  console.log("範例: npx ts-node scripts/new.ts two-pointers/015-3sum");
  process.exit(1);
}

const input = args[0].replace(/\.(ts|md)$/, "");
const [topic, problemName] = input.split("/");

if (!topic || !problemName) {
  console.log("❌ 格式錯誤，請使用: <主題>/<題號-題名>");
  console.log("範例: array/049-group-anagrams");
  process.exit(1);
}

const rootDir = path.join(__dirname, "..");
const topicDir = path.join(rootDir, topic);

// 確保主題資料夾存在
if (!fs.existsSync(topicDir)) {
  fs.mkdirSync(topicDir, { recursive: true });
}

const tsPath = path.join(topicDir, `${problemName}.ts`);
const mdPath = path.join(topicDir, `${problemName}.md`);

// 從題名提取資訊
const match = problemName.match(/^(\d+)-(.+)$/);
const problemNumber = match ? match[1] : "???";
const problemTitle = match
  ? match[2]
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  : problemName;

// TypeScript 模板
const tsTemplate = `// LeetCode ${problemNumber}. ${problemTitle}
// https://leetcode.com/problems/${match ? match[2] : problemName}/
//
// Description:
//
//
// Example 1:
// Input:
// Output:
// Explanation:
//
// Example 2:
// Input:
// Output:
//
// Constraints:
//
//

// Approach:
// Time: O(?), Space: O(?)
function solution() {
  // Your solution here
}

// Test cases
import { runTests, estimateTimeComplexity } from "../test-utils";

runTests(solution, [
  // Basic cases
  // { input: [], expected: [], description: "Basic case 1" },

  // Edge cases
  // { input: [], expected: [], description: "Min/max constraints" },
  // { input: [], expected: [], description: "Empty or single element" },
  // { input: [], expected: [], description: "Duplicates" },
  // { input: [], expected: [], description: "Negative numbers" },
]);

// Time complexity test (optional - uncomment to run)
// estimateTimeComplexity((n) => {
//   // Generate test data of size n
//   solution(/* test data */);
// });
`;

// Markdown 模板
const mdTemplate = `# ${problemTitle}

## 題目連結
https://leetcode.com/problems/${match ? match[2] : problemName}/

## 類型
<!-- Array, HashMap, Two Pointers, etc. -->

## 思路

<!-- 你的解題思路 -->

## Big O
- Time:
- Space:

## 易錯點

<!-- 你踩過的坑 -->

## 類似題

<!-- 相關題目 -->
`;

// 寫入檔案
let created = [];

if (!fs.existsSync(tsPath)) {
  fs.writeFileSync(tsPath, tsTemplate);
  created.push(`${topic}/${problemName}.ts`);
} else {
  console.log(`⚠️  ${topic}/${problemName}.ts 已存在，跳過`);
}

if (!fs.existsSync(mdPath)) {
  fs.writeFileSync(mdPath, mdTemplate);
  created.push(`${topic}/${problemName}.md`);
} else {
  console.log(`⚠️  ${topic}/${problemName}.md 已存在，跳過`);
}

if (created.length > 0) {
  console.log(`\n✅ 已建立:`);
  created.forEach((f) => console.log(`   ${f}`));
  console.log(`\n🚀 開始刷題:`);
  console.log(`   npx ts-node ${topic}/${problemName}.ts\n`);
}
