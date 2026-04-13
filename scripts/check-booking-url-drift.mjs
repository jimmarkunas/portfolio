#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const SOURCE_ROOT = "src"
const ALLOWED_FILES = new Set(["src/content/site/config.ts"])
const BOOKING_URL_PATTERN = /https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]+/g

function walkFiles(dirPath, collector) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, collector)
      continue
    }

    if (!entry.isFile()) {
      continue
    }

    if (!fullPath.endsWith(".ts") && !fullPath.endsWith(".tsx")) {
      continue
    }

    collector.push(fullPath.replaceAll(path.sep, "/"))
  }
}

function getLineNumber(sourceText, index) {
  let line = 1
  for (let i = 0; i < index; i += 1) {
    if (sourceText[i] === "\n") {
      line += 1
    }
  }
  return line
}

const sourceFiles = []
walkFiles(SOURCE_ROOT, sourceFiles)

const driftFindings = []
for (const filePath of sourceFiles) {
  if (ALLOWED_FILES.has(filePath)) {
    continue
  }

  const sourceText = fs.readFileSync(filePath, "utf8")
  const matches = sourceText.matchAll(BOOKING_URL_PATTERN)
  for (const match of matches) {
    const line = getLineNumber(sourceText, match.index ?? 0)
    driftFindings.push({
      filePath,
      line,
      value: match[0],
    })
  }
}

if (driftFindings.length > 0) {
  console.error("Booking URL drift check failed: found direct calendar URLs outside src/content/site/config.ts")
  for (const finding of driftFindings) {
    console.error(`- ${finding.filePath}:${finding.line} -> ${finding.value}`)
  }
  process.exit(1)
}

console.log("Booking URL drift check passed.")
