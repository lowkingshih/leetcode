import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const rootDir = path.join(__dirname, "..");
const problemsPath = path.join(rootDir, "problems.json");

// 讀取題目清單
const problemsData = JSON.parse(fs.readFileSync(problemsPath, "utf-8"));
const problems = problemsData.problems;

// 找出下一題（第一個狀態為 todo 的題目）
const nextProblem = problems.find((p: any) => p.status === "todo");

if (!nextProblem) {
  console.log("🎉 恭喜！所有題目都完成了！");
  process.exit(0);
}

const { id, name, topic } = nextProblem;
const problemPath = `${topic}/${String(id).padStart(3, "0")}-${name}`;

console.log(`\n📝 下一題: LeetCode ${id}. ${name}`);
console.log(`📂 位置: ${problemPath}\n`);

// 執行 new 腳本建立題目
try {
  execSync(`npm run new ${problemPath}`, { stdio: "inherit" });
} catch (error) {
  console.log("\n⚠️  題目可能已存在");
}

console.log(`\n💡 提示: 完成後執行 npm run done ${problemPath} 標記完成\n`);
