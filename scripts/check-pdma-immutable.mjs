#!/usr/bin/env node

import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const snapshot = JSON.parse(fs.readFileSync(path.join(root, "docs/pdma2026/immutable-surfaces.json"), "utf8"))
const failures = []

for (const [relative, expected] of Object.entries(snapshot)) {
  const file = path.join(root, relative)
  if (!fs.existsSync(file)) {
    failures.push(`${relative} is missing`)
    continue
  }
  const actual = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex")
  if (actual !== expected) failures.push(`${relative} changed; update the immutable baseline only with explicit approval`)
}

if (failures.length) {
  console.error("PDMA immutable-surface guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}
console.log(`PDMA immutable-surface guard passed (${Object.keys(snapshot).length} protected files).`)
