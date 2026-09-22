#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const qaRoot = path.join(root, "qa/pdma2026")
const failures = []
const summaryPath = path.join(qaRoot, "diff-summary.json")

function pngDimensions(file) {
  const buffer = fs.readFileSync(file)
  if (buffer.length < 24 || buffer.readUInt32BE(0) !== 0x89504e47) return null
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
}

if (!fs.existsSync(qaRoot)) failures.push("qa/pdma2026 directory is missing")
else {
  if (!fs.existsSync(summaryPath)) failures.push("qa/pdma2026/diff-summary.json is missing")
  for (let index = 1; index <= 15; index += 1) {
    const slide = String(index).padStart(2, "0")
    const referenceRelative = `qa/pdma2026/reference/slide-${slide}.png`
    const referenceFile = path.join(root, referenceRelative)
    if (!fs.existsSync(referenceFile)) failures.push(`${referenceRelative} is missing from the visual reference library`)
    else {
      const referenceDimensions = pngDimensions(referenceFile)
      if (!referenceDimensions) failures.push(`${referenceRelative} is not a readable PNG`)
      else if (referenceDimensions.width !== 1920 || referenceDimensions.height !== 1080) failures.push(`${referenceRelative} must be 1920×1080, found ${referenceDimensions.width}×${referenceDimensions.height}`)
    }
    for (const kind of ["render", "overlay", "diff"]) {
      const relative = `qa/pdma2026/slide-${slide}-${kind}.png`
      const file = path.join(root, relative)
      if (!fs.existsSync(file)) {
        failures.push(`${relative} is missing`)
        continue
      }
      const dimensions = pngDimensions(file)
      if (!dimensions) failures.push(`${relative} is not a readable PNG`)
      else if (dimensions.width !== 1920 || dimensions.height !== 1080) failures.push(`${relative} must be 1920×1080, found ${dimensions.width}×${dimensions.height}`)
    }
  }
}

if (failures.length) {
  console.error("PDMA QA guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}

console.log("PDMA QA guard passed (15 renders, 15 overlays, and 15 diffs at 1920×1080).")
