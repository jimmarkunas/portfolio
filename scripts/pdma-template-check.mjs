#!/usr/bin/env node
/**
 * Static contract check for /pdma2026-templates.
 * Contract: docs/pdma2026/template-system/{TEMPLATE_ARCHITECTURE_CONTRACT,IMPLEMENTATION_MANIFEST}.md
 *
 * Fails on: pdmaGeometry imports, absolute-positioned content, missing 10-template parity,
 * missing/paraphrased mapped copy, missing or mismatched Canon v4 assets, legacy slide imports,
 * missing header/footer labels, scroll/overflow contract violations, base64 payloads, and
 * any change to the read-only /pdma2026 tree or staged Canon v4 assets.
 */
import { execFileSync } from "node:child_process"
import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { copyRegistry } from "./pdma-template-copy.mjs"

const root = process.cwd()
const TREE = "src/app/pdma2026-templates"
const LIVE = "src/app/pdma2026"
const ASSETS = "public/pdma2026-templates/assets"
const REFERENCES = "docs/pdma2026/template-system/approved-template-references.json"
const MANIFEST_DOC = "docs/pdma2026/template-system/IMPLEMENTATION_MANIFEST.md"
const failures = []
const fail = (message) => failures.push(message)
const read = (file) => fs.readFileSync(path.join(root, file), "utf8")
const walk = (dir) => fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((entry) => {
  const rel = path.join(dir, entry.name)
  return entry.isDirectory() ? walk(rel) : [rel]
})

/** Collapse JSX/TS string formatting so copy can be compared verbatim across sources. */
const normalize = (text) => text
  .replace(/<br\s*\/?>/g, " ")
  .replace(/\{"\\n"\}/g, " ")
  .replace(/\\n/g, " ")
  .replace(/\\u00a0/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/&apos;/g, "'")
  .replace(/\u00a0/g, " ")
  .replace(/\s+/g, " ")

const files = walk(TREE)
const sourceFiles = files.filter((file) => /\.(tsx?|css)$/.test(file))
const templateContent = read(`${TREE}/templateContent.ts`)

// 1. No pdmaGeometry anywhere in the new tree.
for (const file of sourceFiles) if (/pdmaGeometry/.test(read(file))) fail(`${file}: references pdmaGeometry`)

// 2. No legacy slide component imports.
for (const file of sourceFiles.filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))) {
  for (const line of read(file).split("\n").filter((l) => /^\s*import\s/.test(l))) {
    if (/components\/slides\/Slide\d\d|CanonicalSlide0\d|components\/Slide02|pdmaPrimitives|PdmaSlideBody/.test(line)) fail(`${file}: imports legacy slide/primitive module → ${line.trim()}`)
    if (/pdma2026SlideManifest/.test(line) && !/^\s*import\s+type\s/.test(line)) fail(`${file}: runtime import of legacy slide manifest → ${line.trim()}`)
  }
}

// 3. Absolute positioning only inside bounded decorative/connector layers.
const css = read(`${TREE}/styles/templates.css`)
const allowedAbsolute = /\.pdmat-deco\b|\.pdmat-deco-item|\.pdmat-deco-fade|\.pdmat-connector__dot|\.pdmat-fan\b|\.pdmat-fan >|\.pdmat-fan__dot/
for (const match of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const [, selector, body] = match
  if (/position\s*:\s*(absolute|fixed)/.test(body) && !allowedAbsolute.test(selector)) fail(`templates.css: absolute/fixed positioning outside decorative/connector layer → ${selector.trim()}`)
  if (/overflow(-[xy])?\s*:\s*(auto|scroll)/.test(body)) fail(`templates.css: scrolling overflow violates single-viewport contract → ${selector.trim()}`)
  if (/@media[^{]*(max|min)-width/.test(selector)) fail(`templates.css: breakpoint media query implies responsive stacking → ${selector.trim()}`)
}
if (/@media[^{]*(max|min)-(width|height)/.test(css)) fail("templates.css: width/height media query found (no responsive compositions allowed)")
for (const file of sourceFiles.filter((f) => f.endsWith(".tsx"))) {
  const text = read(file)
  if (/position\s*:\s*["'](absolute|fixed)["']/.test(text)) fail(`${file}: inline absolute/fixed positioning`)
  if (/style=\{\{[^}]*\b(left|top|right|bottom)\s*:/.test(text)) fail(`${file}: inline left/top/right/bottom layout style`)
}

// 4. 10-template manifest parity (order fixed by the architecture contract §2).
const requiredKinds = ["title", "end-card", "exercise", "embedded-app", "compare-contrast", "flow-scenario", "decision-spectrum", "hub-ecosystem", "scorecard", "structured-content-action"]
const declaredKinds = [...templateContent.matchAll(/^\s*kind:\s*"([a-z-]+)"/gm)].map(([, kind]) => kind)
if (JSON.stringify(declaredKinds) !== JSON.stringify(requiredKinds)) fail(`templateContent.ts: template kinds/order ${JSON.stringify(declaredKinds)} ≠ ${JSON.stringify(requiredKinds)}`)
const manifestSource = read(`${TREE}/templateManifest.tsx`)
for (const kind of requiredKinds) if (!new RegExp(`case "${kind}": return <`).test(manifestSource)) fail(`templateManifest.tsx: no renderer for ${kind}`)
const componentTargets = ["TitleTemplate", "EndCardTemplate", "ExerciseTemplate", "EmbeddedAppTemplate", "CompareContrastTemplate", "FlowScenarioTemplate", "DecisionSpectrumTemplate", "HubEcosystemTemplate", "ScorecardTemplate", "StructuredActionTemplate"]
for (const name of componentTargets) if (!fs.existsSync(path.join(root, TREE, "components/templates", `${name}.tsx`))) fail(`missing component target components/templates/${name}.tsx`)
for (const name of ["ContentCard", "IconCircle", "FlowRail", "Connector", "TakeawayBand", "DownloadModule", "EmbeddedAppFrame"]) if (!fs.existsSync(path.join(root, TREE, "components/shared", `${name}.tsx`))) fail(`missing shared component components/shared/${name}.tsx`)

// 5. Mapped copy parity. Every string must exist verbatim in its live copy authority AND in templateContent.ts.
const normalizedContent = normalize(templateContent)
for (const { kind, sources, strings } of copyRegistry) {
  const authority = normalize(sources.map(read).join("\n"))
  for (const value of strings) {
    const needle = normalize(value)
    if (!authority.includes(needle)) fail(`copy[${kind}]: "${value}" not found verbatim in copy authority (${sources.join(", ")})`)
    if (!normalizedContent.includes(needle)) fail(`copy[${kind}]: "${value}" missing from templateContent.ts`)
  }
}
// Header/footer labels are chrome copy: every template declares three header labels and a footer label.
const headerBlocks = [...templateContent.matchAll(/headerLabels:\s*\[([^\]]*)\]/g)].map(([, list]) => list.split(",").map((s) => s.trim()).filter(Boolean))
if (headerBlocks.length !== 10 || headerBlocks.some((labels) => labels.length !== 3)) fail("templateContent.ts: every template needs exactly three header labels")
if ([...templateContent.matchAll(/footerLabel:\s*"([^"]+)"/g)].length !== 10) fail("templateContent.ts: every template needs a footer label")

// 6. Single-URL rule for the End Card download module.
const downloadModule = read(`${TREE}/components/shared/DownloadModule.tsx`)
const hrefs = [...downloadModule.matchAll(/href=\{([^}]+)\}/g)].map(([, expr]) => expr.trim())
if (hrefs.length < 2 || new Set(hrefs).size !== 1 || !/<NativeQrCode value=\{url\}/.test(downloadModule)) fail("DownloadModule.tsx: QR code and round CTA must consume the same single url value")

// 7. Canon v4 assets: present and byte-identical.
const references = JSON.parse(read(REFERENCES))
for (const [file, meta] of Object.entries(references.files)) {
  const full = path.join(root, ASSETS, file)
  if (!fs.existsSync(full)) { fail(`missing Canon v4 asset ${ASSETS}/${file}`); continue }
  const digest = crypto.createHash("sha256").update(fs.readFileSync(full)).digest("hex")
  if (digest !== meta.sha256) fail(`SHA-256 mismatch ${ASSETS}/${file}`)
}
const decorative = read(`${TREE}/components/DecorativeLayer.tsx`)
for (const [kind, entry] of Object.entries(references.templates)) {
  for (const asset of entry.assets) if (!decorative.includes(asset.split("/").pop())) fail(`DecorativeLayer.tsx: approved ${kind} asset not used → ${asset}`)
}

// 8. No base64 payloads in the new tree or its scripts.
for (const file of [...sourceFiles, "scripts/pdma-template-check.mjs", "scripts/pdma-template-visual-qa.mjs", "scripts/pdma-template-copy.mjs"].filter((f) => fs.existsSync(path.join(root, f)))) {
  const text = read(file)
  if (/data:[a-z]+\/[a-z0-9.+-]+;base64,/i.test(text) || /[A-Za-z0-9+/]{400,}={0,2}/.test(text)) fail(`${file}: base64 payload detected`)
}

// 9. Read-only surfaces unchanged versus HEAD (working tree + index).
try {
  const changed = execFileSync("git", ["status", "--porcelain", "--", LIVE, "public/pdma2026", ASSETS], { cwd: root, encoding: "utf8" }).trim()
  if (changed) fail(`read-only PDMA surfaces changed:\n${changed}`)
} catch (error) {
  fail(`git status failed: ${error.message}`)
}

if (failures.length) {
  console.error(`pdma-template-check: FAIL (${failures.length})`)
  for (const message of failures) console.error(`  ✗ ${message}`)
  process.exit(1)
}
const copyCount = copyRegistry.reduce((sum, { strings }) => sum + strings.length, 0)
console.log(`pdma-template-check: PASS — 10 templates, ${copyCount} mapped copy strings verified against live authority, ${Object.keys(references.files).length} Canon v4 assets byte-identical, no pdmaGeometry, read-only surfaces unchanged`)
