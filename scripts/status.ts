import * as fs from "fs";
import * as path from "path";

const TOPICS = [
  { name: "array", label: "Array & Hashing", week: "1" },
  { name: "two-pointers", label: "Two Pointers", week: "2" },
  { name: "sliding-window", label: "Sliding Window", week: "2-3" },
  { name: "stack", label: "Stack", week: "3" },
  { name: "binary-search", label: "Binary Search", week: "4" },
  { name: "linked-list", label: "Linked List", week: "4-5" },
  { name: "tree", label: "Tree", week: "5-6" },
  { name: "heap", label: "Heap", week: "7" },
  { name: "graph", label: "Graph", week: "7-8" },
  { name: "dp-1d", label: "1-D DP", week: "8-9" },
  { name: "dp-2d", label: "2-D DP", week: "10" },
  { name: "greedy-intervals", label: "Greedy & Intervals", week: "10-11" },
];

const rootDir = path.join(__dirname, "..");

function getProblems(topic: string): { total: number; done: number; next: string | null } {
  const topicDir = path.join(rootDir, topic);
  if (!fs.existsSync(topicDir)) return { total: 0, done: 0, next: null };

  const files = fs.readdirSync(topicDir).filter((f) => f.endsWith(".ts") && !f.startsWith("_"));
  const doneFiles = files.filter((f) => {
    const content = fs.readFileSync(path.join(topicDir, f), "utf-8");
    return content.includes("// DONE") || content.includes("//DONE");
  });

  const notDone = files.filter((f) => !doneFiles.includes(f));
  const next = notDone.length > 0 ? `${topic}/${notDone[0]}` : null;

  return { total: files.length, done: doneFiles.length, next };
}

console.log("\n📊 Blind75 進度\n");
console.log("─".repeat(50));

let totalAll = 0;
let doneAll = 0;
let nextProblem: string | null = null;

for (const topic of TOPICS) {
  const { total, done, next } = getProblems(topic.name);
  totalAll += total;
  doneAll += done;

  if (!nextProblem && next) {
    nextProblem = next;
  }

  const bar = total > 0 ? "✅".repeat(done) + "⬜".repeat(total - done) : "(尚無題目)";
  const status = total > 0 ? `${done}/${total}` : "-";
  console.log(`Week ${topic.week.padEnd(4)} ${topic.label.padEnd(20)} ${status.padStart(5)}  ${bar}`);
}

console.log("─".repeat(50));
console.log(`\n總進度: ${doneAll}/${totalAll}\n`);

if (nextProblem) {
  console.log(`🎯 下一題: ${nextProblem}`);
  console.log(`   npx ts-node ${nextProblem}\n`);
} else if (totalAll === 0) {
  console.log("📝 開始刷題:");
  console.log("   npx ts-node scripts/new.ts array/001-two-sum\n");
} else {
  console.log("🎉 全部完成！\n");
}
