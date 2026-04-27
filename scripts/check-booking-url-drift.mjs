#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const BOOKING_POLICY_PATH = "src/content/site/booking-policy.json"
const SOURCE_ROOT = "src"
const SOURCE_ALLOWLIST = new Set([])
const PUBLIC_HTML_ROOT = "public"
const STATIC_FOUNDER_HTML_ALLOWLIST = new Set([
  "public/founder/cwg/index.html",
  "public/founder/zevo/index.html",
])
const BOOKING_URL_MATCH_PATTERNS = [
  /https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]+/g,
  /https:\/\/meetings(?:-[a-z0-9]+)?\.hubspot\.com\/[A-Za-z0-9_-]+(?:\?[A-Za-z0-9=&%._-]+)?/g,
]
const BOOKING_URL_VALIDATE_PATTERNS = [
  /^https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]+$/,
  /^https:\/\/meetings(?:-[a-z0-9]+)?\.hubspot\.com\/[A-Za-z0-9_-]+(?:\?[A-Za-z0-9=&%._-]+)?$/,
]
const REQUIRED_POLICY_KEYS = [
  "siteShell",
  "homepageHero",
  "caseStudyDefault",
  "founderCaseStudy",
]

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

function readBookingPolicy() {
  if (!fs.existsSync(BOOKING_POLICY_PATH)) {
    throw new Error(`Booking URL drift check failed: missing ${BOOKING_POLICY_PATH}`)
  }

  const sourceText = fs.readFileSync(BOOKING_POLICY_PATH, "utf8")
  const policy = JSON.parse(sourceText)

  for (const key of REQUIRED_POLICY_KEYS) {
    const value = policy[key]
    const hasValidBookingUrl =
      typeof value === "string" &&
      BOOKING_URL_VALIDATE_PATTERNS.some((pattern) => pattern.test(value))
    if (!hasValidBookingUrl) {
      throw new Error(
        `Booking URL drift check failed: ${BOOKING_POLICY_PATH} must contain a valid calendar URL for "${key}"`,
      )
    }
  }

  return policy
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

function findBookingUrlMatches(sourceText) {
  const matches = []
  for (const pattern of BOOKING_URL_MATCH_PATTERNS) {
    const regex = new RegExp(pattern.source, "g")
    for (const match of sourceText.matchAll(regex)) {
      matches.push(match)
    }
  }

  return matches.sort((left, right) => (left.index ?? 0) - (right.index ?? 0))
}

const bookingPolicy = readBookingPolicy()
const founderBookingUrl = bookingPolicy.homepageHero

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
  const matches = findBookingUrlMatches(sourceText)
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
  const matches = findBookingUrlMatches(sourceText)
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
  console.error(`Booking URL drift check failed: found direct calendar URLs outside ${BOOKING_POLICY_PATH}`)
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
