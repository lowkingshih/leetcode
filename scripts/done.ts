import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("用法: npm run done <題目路徑>");
  console.log("範例: npm run done array/001-two-sum");
  process.exit(1);
}

let filePath = args[0];
if (!filePath.endsWith(".ts")) {
  filePath += ".ts";
}

const fullPath = path.join(__dirname, "..", filePath);

if (!fs.existsSync(fullPath)) {
  console.log(`❌ 找不到檔案: ${filePath}`);
  process.exit(1);
}

let content = fs.readFileSync(fullPath, "utf-8");

if (content.includes("// DONE")) {
  console.log(`✅ ${filePath} 已經標記為完成`);
  process.exit(0);
}

// 在檔案開頭加上 // DONE
content = "// DONE\n" + content;
fs.writeFileSync(fullPath, content);

// 更新 problems.json
const problemsPath = path.join(__dirname, "..", "problems.json");
if (fs.existsSync(problemsPath)) {
  const problemsData = JSON.parse(fs.readFileSync(problemsPath, "utf-8"));
  const match = filePath.match(/(\d+)-(.+)\.ts$/);
  if (match) {
    const problemId = parseInt(match[1]);
    const problem = problemsData.problems.find((p: any) => p.id === problemId);
    if (problem) {
      problem.status = "done";
      fs.writeFileSync(problemsPath, JSON.stringify(problemsData, null, 2));
    }
  }
}

console.log(`✅ 已標記完成: ${filePath}`);

// 自動更新 README
try {
  execSync("npm run readme", { stdio: "inherit" });
} catch (error) {
  // 忽略錯誤
}

console.log(`\n📊 查看進度: npm run status`);
