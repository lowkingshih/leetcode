import * as fs from "fs";
import * as path from "path";

const rootDir = path.join(__dirname, "..");
const problemsPath = path.join(rootDir, "problems.json");
const readmePath = path.join(rootDir, "README.md");

// 讀取題目清單
const problemsData = JSON.parse(fs.readFileSync(problemsPath, "utf-8"));
const problems = problemsData.problems;

// 掃描現有檔案，更新狀態
problems.forEach((problem: any) => {
  const expectedPath = `${problem.topic}/${String(problem.id).padStart(3, "0")}-${problem.name}.ts`;
  const fullPath = path.join(rootDir, expectedPath);

  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, "utf-8");
    problem.status = content.includes("// DONE") ? "✅" : "🔄";
  } else {
    problem.status = "⬜";
  }
});

// 統計進度
const completed = problems.filter((p: any) => p.status === "✅").length;
const total = problems.length;
const percentage = Math.round((completed / total) * 100);

// 生成題目表格
let tableContent = `## 📋 題目清單 (${completed}/${total} - ${percentage}%)\n\n`;
tableContent += `| # | 題目 | 難度 | 主題 | 狀態 | 筆記 |\n`;
tableContent += `|---|------|------|------|------|------|\n`;

problems.forEach((problem: any) => {
  const problemPath = `${problem.topic}/${String(problem.id).padStart(3, "0")}-${problem.name}`;
  const tsLink = `[${problem.name}](${problemPath}.ts)`;
  const mdLink = fs.existsSync(path.join(rootDir, `${problemPath}.md`))
    ? `[📝](${problemPath}.md)`
    : "";

  tableContent += `| ${problem.id} | ${tsLink} | ${problem.difficulty} | ${problem.topic} | ${problem.status} | ${mdLink} |\n`;
});

// 讀取現有 README
let readmeContent = fs.readFileSync(readmePath, "utf-8");

// 找到或建立題目清單區塊
const startMarker = "<!-- PROBLEMS_START -->";
const endMarker = "<!-- PROBLEMS_END -->";

if (readmeContent.includes(startMarker) && readmeContent.includes(endMarker)) {
  // 替換現有內容
  const before = readmeContent.substring(0, readmeContent.indexOf(startMarker) + startMarker.length);
  const after = readmeContent.substring(readmeContent.indexOf(endMarker));
  readmeContent = `${before}\n\n${tableContent}\n${after}`;
} else {
  // 新增區塊
  readmeContent += `\n\n${startMarker}\n\n${tableContent}\n${endMarker}\n`;
}

// 寫回 README
fs.writeFileSync(readmePath, readmeContent);

console.log(`✅ README.md 已更新`);
console.log(`📊 進度: ${completed}/${total} (${percentage}%)`);
