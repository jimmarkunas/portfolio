#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const SITE_CONFIG_PATH = "src/content/site/config.ts"
const SOURCE_ROOT = "src"
const SOURCE_ALLOWLIST = new Set([SITE_CONFIG_PATH])
const PUBLIC_HTML_ROOT = "public"
const STATIC_FOUNDER_HTML_ALLOWLIST = new Set([
  "public/founder/cwg/index.html",
  "public/founder/zevo/index.html",
])
const BOOKING_URL_PATTERN = /https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]+/g

function walkFiles(dirPath, collector, fileFilter) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, collector, fileFilter)
      continue
    }

    if (!entry.isFile()) {
      continue
    }

    if (!fileFilter(fullPath)) {
      continue
    }

    collector.push(fullPath.replaceAll(path.sep, "/"))
  }
}

function readFounderBookingUrl() {
  if (!fs.existsSync(SITE_CONFIG_PATH)) {
    throw new Error(`Booking URL drift check failed: missing ${SITE_CONFIG_PATH}`)
  }

  const sourceText = fs.readFileSync(SITE_CONFIG_PATH, "utf8")
  const founderBookingUrlMatch = sourceText.match(
    /const\s+HOMEPAGE_HERO_BOOKING_URL\s*=\s*"(https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]+)"/,
  )

  if (!founderBookingUrlMatch) {
    throw new Error(
      "Booking URL drift check failed: could not determine founder booking URL from src/content/site/config.ts",
    )
  }

  return founderBookingUrlMatch[1]
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

const founderBookingUrl = readFounderBookingUrl()

const sourceFiles = []
walkFiles(
  SOURCE_ROOT,
  sourceFiles,
  (fullPath) => fullPath.endsWith(".ts") || fullPath.endsWith(".tsx"),
)

const driftFindings = []
for (const filePath of sourceFiles) {
  if (SOURCE_ALLOWLIST.has(filePath)) {
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

const publicHtmlFiles = []
walkFiles(PUBLIC_HTML_ROOT, publicHtmlFiles, (fullPath) => fullPath.endsWith(".html"))

const staticFounderFindings = []
for (const filePath of publicHtmlFiles) {
  const sourceText = fs.readFileSync(filePath, "utf8")
  const matches = [...sourceText.matchAll(BOOKING_URL_PATTERN)]
  if (matches.length === 0) {
    continue
  }

  if (!STATIC_FOUNDER_HTML_ALLOWLIST.has(filePath)) {
    staticFounderFindings.push({
      type: "unexpected-file",
      filePath,
      value: matches[0][0],
      line: getLineNumber(sourceText, matches[0].index ?? 0),
    })
    continue
  }

  for (const match of matches) {
    if (match[0] === founderBookingUrl) {
      continue
    }

    staticFounderFindings.push({
      type: "unexpected-url",
      filePath,
      value: match[0],
      line: getLineNumber(sourceText, match.index ?? 0),
    })
  }
}

if (driftFindings.length > 0 || staticFounderFindings.length > 0) {
  console.error("Booking URL drift check failed: found direct calendar URLs outside src/content/site/config.ts")
  for (const finding of driftFindings) {
    console.error(`- ${finding.filePath}:${finding.line} -> ${finding.value}`)
  }

  for (const finding of staticFounderFindings) {
    if (finding.type === "unexpected-file") {
      console.error(
        `- ${finding.filePath}:${finding.line} -> ${finding.value} (static HTML calendar links are only allowed in founder case-study files)`
      )
      continue
    }

    console.error(
      `- ${finding.filePath}:${finding.line} -> ${finding.value} (founder static pages must use ${founderBookingUrl})`
    )
  }

  process.exit(1)
}

console.log("Booking URL drift check passed.")
console.log(`Founder static booking URL policy: ${founderBookingUrl}`)
