#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pdmaRoot = path.join(root, "src/app/pdma2026");
const files = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(tsx?|mjs)$/.test(entry.name)) files.push(fullPath);
  }
};
walk(pdmaRoot);

const rules = [
  { source: /\/pdma\.config\.ts$/, forbidden: /\/(components|PdmaPresentationShell|pdma2026SlideManifest|pdmaAssets|pdmaSlideAssets|pdma\.validation)\b/, message: "config must remain data-only" },
  { source: /\/pdma\.validation\.ts$/, forbidden: /\/(components|PdmaPresentationShell|pdma2026SlideManifest|pdmaAssets|pdmaSlideAssets)\b/, message: "validation must not import runtime rendering modules" },
  { source: /\/components\/(?!PdmaTitleBlock\.tsx$)/, forbidden: /\/pdma(\.config|\.validation)|\/pdma2026SlideManifest\b/, message: "slide components must not import config, validation, or manifest" },
];

const violations = [];
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/(?:import|export)\s+(?:[^"']+?\s+from\s+)?["']([^"']+)["']/g)) {
    const specifier = match[1];
    if (!specifier.startsWith(".")) continue;
    const resolved = path.normalize(path.join(path.dirname(file), specifier));
    const forbiddenRule = rules.find(({ source: sourcePattern, forbidden }) => sourcePattern.test(file) && forbidden.test(resolved));
    if (forbiddenRule) violations.push(`${path.relative(root, file)} imports ${specifier}: ${forbiddenRule.message}`);
  }
}

if (violations.length) {
  console.error("PDMA import-boundary guard failed:");
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}
console.log(`PDMA import-boundary guard passed (${files.length} PDMA source files checked).`);
