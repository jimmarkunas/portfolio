#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const sourceRoot = path.join(root, "src/app/pdma2026")
const publicRoot = path.join(root, "public")
const manifestPath = path.join(sourceRoot, "pdma2026SlideManifest.tsx")
const contentPath = path.join(root, "src/content/pdma2026/types.ts")
const titlePath = path.join(sourceRoot, "pdmaTitleConfig.tsx")

const failures = []
const sourceFiles = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(file)
    else if (/\.(tsx?|css)$/.test(entry.name)) sourceFiles.push(file)
  }
}

walk(sourceRoot)

const manifest = fs.readFileSync(manifestPath, "utf8")
const content = fs.readFileSync(contentPath, "utf8")
const titleConfig = fs.readFileSync(titlePath, "utf8")
const expectedKeys = Array.from({ length: 15 }, (_, index) => `slide-${String(index + 1).padStart(2, "0")}`)
const manifestKeys = [...manifest.matchAll(/"(slide-\d{2})":\s*\(\)\s*=>/g)].map((match) => match[1])
const contentKeys = [...content.matchAll(/`slide-\$\{String\(index \+ 1\)\.padStart\(2, "0"\)\}`/g)]

if (manifestKeys.join("|") !== expectedKeys.join("|")) {
  failures.push(`manifest renderers must contain slides 01–15 in order; found ${manifestKeys.join(", ")}`)
}

if (contentKeys.length !== 1) {
  failures.push("PDMA content slide order must remain derived from the 15-slide sequence")
}

for (let slide = 1; slide <= 15; slide += 1) {
  if (!new RegExp(`(?:^|,)\\s*${slide}:\\s*\\{`, "m").test(titleConfig)) {
    failures.push(`missing title configuration for slide ${String(slide).padStart(2, "0")}`)
  }
}

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8")
  for (const match of text.matchAll(/["'`]([^"'`]*\/pdma2026\/[^"'`]*)["'`]/g)) {
    const assetPath = match[1]
    if (assetPath.includes("${")) continue
    const absolute = path.join(publicRoot, assetPath.replace(/^\//, ""))
    if (!fs.existsSync(absolute)) {
      failures.push(`${path.relative(root, file)} references missing asset ${assetPath}`)
    }
  }
}

if (failures.length) {
  console.error("PDMA asset/manifest guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}

console.log(`PDMA asset/manifest guard passed (${expectedKeys.length} slides, ${sourceFiles.length} source files scanned).`)
