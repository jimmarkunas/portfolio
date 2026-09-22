#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const sourceRoot = path.join(root, "src/app/pdma2026")
const publicRoot = path.join(root, "public")
const manifestPath = path.join(sourceRoot, "pdma2026SlideManifest.tsx")

const failures = []
const sourceFiles = []
const maxRuntimeAssetBytes = 4 * 1024 * 1024

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(file)
    else if (/\.(tsx?|css)$/.test(entry.name)) sourceFiles.push(file)
  }
}

walk(sourceRoot)

function walkRuntimeAssets(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) walkRuntimeAssets(file)
    else if (entry.isFile() && !file.includes(`${path.sep}originals${path.sep}`) && fs.statSync(file).size > maxRuntimeAssetBytes) {
      failures.push(`${path.relative(root, file)} exceeds the 4 MB runtime asset limit`)
    }
  }
}

walkRuntimeAssets(path.join(root, "public/pdma2026"))

const manifest = fs.readFileSync(manifestPath, "utf8")
const expectedKeys = Array.from({ length: 15 }, (_, index) => `slide-${String(index + 1).padStart(2, "0")}`)
const manifestKeys = [...manifest.matchAll(/key:\s*"(slide-\d{2})"/g)].map((match) => match[1])

if (manifestKeys.join("|") !== expectedKeys.join("|")) {
  failures.push(`manifest renderers must contain slides 01–15 in order; found ${manifestKeys.join(", ")}`)
}

const manifestEntries = [...manifest.matchAll(/key:\s*"(slide-\d{2})"[\s\S]*?id:\s*"(slide-\d{2})"[\s\S]*?tocTitle:\s*"([^"]+)"[\s\S]*?title:\s*\{/g)]
if (manifestEntries.length !== expectedKeys.length) failures.push(`manifest must define ${expectedKeys.length} complete slide entries; found ${manifestEntries.length}`)

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8")
  if (/https?:\/\/www\.figma\.com\/api\/mcp\/asset\//.test(text)) {
    failures.push(`${path.relative(root, file)} contains a remote Figma asset URL`)
  }
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
