#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const appRoot = path.join(root, "src/app/pdma2026")
const stylesRoot = path.join(appRoot, "styles")
const sourcePath = path.join(stylesRoot, "pdma-source.css")
const indexPath = path.join(appRoot, "index.css")
fs.mkdirSync(stylesRoot, { recursive: true })

if (!fs.existsSync(sourcePath)) {
  const current = fs.readFileSync(indexPath, "utf8")
  if (current.includes("@import \"./styles/base.css\"")) throw new Error("Cannot initialize CSS source from generated index.css")
  fs.writeFileSync(sourcePath, current)
}

const source = fs.readFileSync(sourcePath, "utf8")
const extracted = new Map(Array.from({ length: 15 }, (_, index) => [String(index + 1).padStart(2, "0"), []]))
const rulePattern = /([^{}]+\{[^{}]*\})/g
let base = source
for (const match of source.matchAll(rulePattern)) {
  const rule = match[1]
  const slideNumbers = [...rule.matchAll(/(?:pdma-s|s)(0[1-9]|1[0-5])[-.\s:{]/g)].map((item) => item[1])
  const uniqueSlides = [...new Set(slideNumbers)]
  if (uniqueSlides.length !== 1) continue
  extracted.get(uniqueSlides[0]).push(rule)
  base = base.replace(rule, "")
}

fs.writeFileSync(path.join(stylesRoot, "base.css"), `${base.trim()}\n`)
for (const [slide, rules] of extracted) fs.writeFileSync(path.join(stylesRoot, `slide-${slide}.css`), `/* Generated from pdma-source.css. Edit the source, then run npm run pdma:css. */\n${rules.join("\n")}\n`)
const imports = ["@import \"./styles/base.css\";", ...[...extracted.keys()].map((slide) => `@import \"./styles/slide-${slide}.css\";`)].join("\n")
fs.writeFileSync(indexPath, `${imports}\n`)
console.log(`Generated active PDMA CSS entrypoint, base.css, and ${extracted.size} slide-scoped stylesheets.`)
