import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/app/pdma2026/components/poc");
if (!fs.existsSync(root)) {
  console.log("PDMA POC guard: no imported POC directory; nothing to check.");
  process.exit(0);
}

const files = fs.readdirSync(root, { recursive: true })
  .map((file) => path.join(root, file))
  .filter((file) => /\.(css|tsx?|jsx?)$/.test(file));

const forbidden = [
  { pattern: /<\/?(?:header|footer)\b/i, label: "header/footer markup" },
  { pattern: /\b(?:title|subtitle|slide-title|slide-subtitle)\b/i, label: "title/subtitle naming" },
  { pattern: /pdma-(?:global|bottom|title|header|footer|count|presentation)/i, label: "shared chrome selector" },
  { pattern: /(?:width|height)\s*:\s*1920px|(?:width|height)\s*:\s*1080px/i, label: "fixed presentation-canvas dimension" },
  { pattern: /overflow\s*:\s*(?:hidden|scroll|auto)/i, label: "overflow rule; contain overflow in the shared body boundary" },
];

const violations = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const { pattern, label } of forbidden) {
    if (pattern.test(text)) violations.push(`${path.relative(process.cwd(), file)}: ${label}`);
  }
}

if (violations.length) {
  console.error("PDMA POC guard failed:\n- " + violations.join("\n- "));
  process.exit(1);
}

console.log(`PDMA POC guard passed (${files.length} imported file${files.length === 1 ? "" : "s"}).`);
