#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const targets = [
  "src/app/pdma2026/components/Batch01Slides.tsx",
  "src/app/pdma2026/components/CanonicalSlide08.tsx",
  "src/app/pdma2026/components/CanonicalSlides11to15.tsx",
  "src/app/pdma2026/components/slides",
]
const failures = []

function walk(file) {
  if (fs.statSync(file).isDirectory()) for (const entry of fs.readdirSync(file)) walk(path.join(file, entry))
  else if (/\.tsx?$/.test(file)) {
    const text = fs.readFileSync(file, "utf8")
    if (/\b(?:vw|vh|dvw|dvh)\b/.test(text)) failures.push(`${path.relative(root, file)} uses viewport-relative geometry`)
  }
}

for (const target of targets) walk(path.join(root, target))
if (failures.length) {
  console.error("PDMA geometry guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}
console.log("PDMA geometry guard passed (slide bodies contain no viewport-relative geometry).")
