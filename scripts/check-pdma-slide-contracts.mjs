#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const contracts = JSON.parse(fs.readFileSync(path.join(root, "docs/pdma2026/slide-contracts.json"), "utf8"))
const sourceRoot = path.join(root, "src/app/pdma2026")
const sourceFiles = []
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(file)
    else if (/\.tsx?$/.test(entry.name)) sourceFiles.push(file)
  }
}
walk(sourceRoot)
const source = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n")
const failures = []
const expected = Array.from({ length: 15 }, (_, index) => `slide-${String(index + 1).padStart(2, "0")}`)
const slideArgumentIndex = process.argv.indexOf("--slides")
const requestedSlides = slideArgumentIndex >= 0 ? process.argv[slideArgumentIndex + 1]?.split(",").map((value) => value.padStart(2, "0")).map((value) => `slide-${value}`) : expected
if (Object.keys(contracts).sort().join("|") !== expected.join("|")) failures.push("contracts must define exactly slides 01–15")
for (const slide of requestedSlides) {
  const contract = contracts[slide]
  if (!contract) { failures.push(`${slide} has no contract`); continue }
  for (const selector of contract.required ?? []) if (!source.includes(selector)) failures.push(`${slide} requires selector/class ${selector}`)
  for (const selector of contract.forbidden ?? []) if (source.includes(selector)) failures.push(`${slide} forbids selector/class ${selector}, but it exists in PDMA source`)
}
if (failures.length) {
  console.error("PDMA slide-contract guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}
console.log(`PDMA slide-contract guard passed (${requestedSlides.length} slide contract${requestedSlides.length === 1 ? "" : "s"} checked).`)
