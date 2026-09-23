#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"

const root = process.cwd()
const sourceRoot = path.join(root, "src/app/pdma2026")
const publicRoot = path.join(root, "public")
const { pdmaValidation } = await import("../src/app/pdma2026/pdma.validation.ts")

const failures = []
const sourceFiles = []
const maxRuntimeAssetBytes = 4 * 1024 * 1024
const runtimeAssetHashes = new Map()
const referencedRuntimeAssets = new Set()

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
    else if (entry.isFile() && !file.includes(`${path.sep}originals${path.sep}`)) {
      const stats = fs.statSync(file)
      if (stats.size > maxRuntimeAssetBytes) failures.push(`${path.relative(root, file)} exceeds the 4 MB runtime asset limit`)
      const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex")
      const files = runtimeAssetHashes.get(hash) ?? []
      files.push(file)
      runtimeAssetHashes.set(hash, files)
    }
  }
}

walkRuntimeAssets(path.join(root, "public/pdma2026"))

const expectedKeys = [...pdmaValidation.slideKeys]
const declaredAssets = expectedKeys.flatMap((key) => pdmaValidation.runtimeAssets[key])
if (new Set(expectedKeys).size !== expectedKeys.length) failures.push("validation metadata contains duplicate slide keys")
if (Object.keys(pdmaValidation.runtimeAssets).sort().join("|") !== expectedKeys.slice().sort().join("|")) failures.push("validation metadata must declare runtime assets for every slide")

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8")
  if (text.includes("https://www.figma.com/api/mcp/asset/")) {
    failures.push(`${path.relative(root, file)} contains a remote Figma asset URL`)
  }
}

for (const assetPath of declaredAssets) {
  const absolute = path.join(publicRoot, assetPath.replace(/^\//, ""))
  if (!fs.existsSync(absolute)) failures.push(`declared runtime asset is missing: ${assetPath}`)
  else referencedRuntimeAssets.add(absolute)
}

for (const files of runtimeAssetHashes.values()) {
  const referencedFiles = files.filter((file) => referencedRuntimeAssets.has(file))
  if (referencedFiles.length < 2) continue
  const slideDirectories = new Set(referencedFiles.map((file) => path.dirname(file)))
  if (slideDirectories.size === 1) {
    failures.push(`duplicate referenced asset bytes in ${referencedFiles.map((file) => path.relative(root, file)).join(", ")}`)
  }
}

if (failures.length) {
  console.error("PDMA asset/manifest guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}

console.log(`PDMA asset/manifest guard passed (${expectedKeys.length} slides, ${declaredAssets.length} declared runtime assets).`)
