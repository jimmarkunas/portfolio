#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const cssFiles = ["index.css", "batch01.css", "batch02.css", "batch03.css", "batch04.css"]
const allowed = new Set([
  ".s03-left",
  ".s03-right",
  ".s03-columns",
  ".s03-columns b",
  ".s03-columns small",
  ".s03-takeaway",
  ".s04-cards",
  ".s04-cards article",
])
const definitions = new Map()

for (const fileName of cssFiles) {
  const file = path.join(root, "src/app/pdma2026", fileName)
  const text = fs.readFileSync(file, "utf8").replace(/\/\*[\s\S]*?\*\//g, "")
  for (const match of text.matchAll(/([^{}]+)\{/g)) {
    for (const selector of match[1].split(",").map((value) => value.trim()).filter((value) => value && !value.startsWith("@"))) {
      const locations = definitions.get(selector) ?? []
      locations.push(fileName)
      definitions.set(selector, locations)
    }
  }
}

const duplicates = [...definitions.entries()]
  .filter(([selector, locations]) => new Set(locations).size > 1 && !allowed.has(selector))
  .map(([selector, locations]) => `${selector} (${[...new Set(locations)].join(", ")})`)

if (duplicates.length) {
  console.error("PDMA duplicate-selector guard failed:\n- " + duplicates.join("\n- "))
  process.exit(1)
}

console.log(`PDMA duplicate-selector guard passed (${allowed.size} documented overrides).`)
