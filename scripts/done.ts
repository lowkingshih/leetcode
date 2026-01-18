import * as fs from "fs";
import * as path from "path";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("用法: npx ts-node scripts/done.ts <題目路徑>");
  console.log("範例: npx ts-node scripts/done.ts array/001-two-sum");
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

console.log(`✅ 已標記完成: ${filePath}`);
console.log(`\n📊 查看進度: npx ts-node scripts/status.ts`);
