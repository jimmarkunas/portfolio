#!/usr/bin/env node
/**
 * Static contract check for the production /pdma2026 deck.
 *
 * Fails on: wrong slide order/count, TOC/header/footer drift, any canonical copy string missing
 * from its slide's content block, the named A.G.E.N.T.S. framework appearing before Slide 11,
 * pdmaGeometry anywhere in /pdma2026, absolute-positioned content outside the decorative
 * layer, inline layout offsets, legacy slide imports, and base64 payloads.
 */
import fs from "node:fs"
import path from "node:path"
import { deckCopyRegistry } from "./pdma-deck-copy.mjs"

const root = process.cwd()
const DECK = "src/app/pdma2026"
const PRESENTATION = `${DECK}/presentation`
const CONTENT = `${PRESENTATION}/pdma2026Content.ts`
const failures = []
const fail = (message) => failures.push(message)
const read = (file) => fs.readFileSync(path.join(root, file), "utf8")
const walk = (dir) => fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((entry) => {
  const rel = path.join(dir, entry.name)
  return entry.isDirectory() ? walk(rel) : [rel]
})
const normalize = (text) => text
  .replace(/\\n/g, " ")
  .replace(/\\u00a0/g, " ")
  .replace(/ /g, " ")
  .replace(/\s+/g, " ")
  .trim()

const expectedCompositions = ["title", "shift-boundary", "compare-contrast", "work-map", "ambiguity-gate", "hub-ecosystem", "scorecard", "decision-spectrum", "flow-scenario", "structured-content-action", "agents-reveal", "framework-to-product", "idea-to-spec", "exercise", "embedded-app", "end-card"]

// 1. Sixteen slide blocks, in narrative order, one composition each.
const content = read(CONTENT)
const blocks = content.split(/\n(?=\/\/ \d\d — )/).filter((block) => /^\/\/ \d\d — /.test(block))
if (blocks.length !== 16) fail(`pdma2026Content.ts: expected 16 slide blocks, found ${blocks.length}`)
blocks.forEach((block, index) => {
  const number = Number(block.slice(3, 5))
  if (number !== index + 1) fail(`pdma2026Content.ts: block ${index + 1} is labelled slide ${number}`)
  const kind = block.match(/^\s*kind:\s*"([a-z-]+)"/m)?.[1]
  if (kind !== expectedCompositions[index]) fail(`slide ${index + 1}: composition ${kind} ≠ ${expectedCompositions[index]}`)
})
const order = (content.match(/export const pdma2026Slides = \[([^\]]*)\]/)?.[1] ?? "").split(",").map((name) => name.trim()).filter(Boolean)
if (JSON.stringify(order) !== JSON.stringify(Array.from({ length: 16 }, (_, i) => `slide${String(i + 1).padStart(2, "0")}`))) fail(`pdma2026Slides order drifted: ${order.join(", ")}`)

// 2. Canonical copy + chrome parity per slide.
let checked = 0
deckCopyRegistry.forEach(({ slide, toc, header, footer, body }) => {
  const block = normalize(blocks[slide - 1] ?? "")
  const has = (value) => block.includes(normalize(value)) || (value.includes(" • ") && value.split(" • ").every((part) => block.includes(normalize(part))))
  checked += 1
  if (!block.includes(`tocTitle: "${toc}"`)) fail(`slide ${slide}: TOC title "${toc}" drifted`)
  checked += 1
  if (!block.includes(`headerLabels: [${header.map((label) => `"${label}"`).join(", ")}]`)) fail(`slide ${slide}: header labels ${header.join(" • ")} drifted`)
  checked += 1
  if (!block.includes(`footerLabel: "${footer}"`)) fail(`slide ${slide}: footer "${footer}" drifted`)
  for (const value of body) {
    checked += 1
    if (!has(value)) fail(`slide ${slide}: canonical copy missing or paraphrased → "${value}"`)
  }
})

// 3. A.G.E.N.T.S. is first named on Slide 11.
blocks.slice(0, 10).forEach((block, index) => { if (/A\.G\.E\.N\.T\.S/.test(block)) fail(`slide ${index + 1}: names A.G.E.N.T.S. before the Slide 11 reveal`) })

// 4. Architecture: no geometry system, bounded absolute positioning, no inline offsets, no legacy slide imports.
const sources = walk(DECK).filter((file) => /\.(tsx?|css)$/.test(file))
for (const file of sources) {
  const text = read(file)
  if (/pdmaGeometry/.test(text)) fail(`${file}: references pdmaGeometry`)
  if (/components\/slides\/Slide\d\d|CanonicalSlide0\d|pdmaPrimitives|PdmaSlideBody|pdma\.config|pdma2026SlideManifest/.test(text)) fail(`${file}: references a removed legacy slide module`)
  if (/data:[a-z]+\/[a-z0-9.+-]+;base64,/i.test(text) || /[A-Za-z0-9+/]{400,}={0,2}/.test(text)) fail(`${file}: base64 payload detected`)
}
const allowedAbsolute = /\.pdmat-deco/
for (const match of read(`${PRESENTATION}/presentation.css`).matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const [, selector, body] = match
  if (/position\s*:\s*(absolute|fixed)/.test(body) && !allowedAbsolute.test(selector)) fail(`presentation.css: absolute/fixed positioning outside the decorative layer → ${selector.trim()}`)
  if (/overflow(-[xy])?\s*:\s*(auto|scroll)/.test(body)) fail(`presentation.css: scrolling overflow → ${selector.trim()}`)
}
for (const file of walk(PRESENTATION).filter((f) => f.endsWith(".tsx"))) {
  const text = read(file)
  if (/position\s*:\s*["'](absolute|fixed)["']/.test(text)) fail(`${file}: inline absolute/fixed positioning`)
  if (/style=\{\{[^}]*\b(left|top|right|bottom)\s*:/.test(text)) fail(`${file}: inline left/top/right/bottom layout style`)
}
if (fs.existsSync(path.join(root, DECK, "pdmaGeometry.ts"))) fail("src/app/pdma2026/pdmaGeometry.ts still exists")
const page = read(`${DECK}/page.tsx`)
if (!/Pdma2026Presentation/.test(page)) fail("src/app/pdma2026/page.tsx does not render Pdma2026Presentation")

// 5. Kit URL: one value shared by the QR and CTA (DownloadModule binds both to download.url).
if ((content.match(/https:\/\/github\.com\/jimmarkunas\/agents-enterprise-ai-operating-model/g) ?? []).length !== 1) fail("pdma2026Content.ts: the kit URL must be declared exactly once")

if (failures.length) {
  console.error(`pdma-deck-check: FAIL (${failures.length})`)
  for (const message of failures) console.error(`  ✗ ${message}`)
  process.exit(1)
}
console.log(`pdma-deck-check: PASS — 16 slides in narrative order, ${checked} canonical copy/chrome strings verified, A.G.E.N.T.S. first named on Slide 11, no pdmaGeometry, bounded positioning only`)
