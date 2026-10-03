#!/usr/bin/env node
/**
 * Static contract check for /pdma2026-templates.
 * Contract: docs/pdma2026/template-system/{TEMPLATE_ARCHITECTURE_CONTRACT,IMPLEMENTATION_MANIFEST}.md
 *
 * Fails on: pdmaGeometry imports, absolute-positioned content, missing 10-template parity,
 * missing/paraphrased mapped copy, missing or mismatched Canon v4 assets, legacy slide imports,
 * missing header/footer labels, scroll/overflow contract violations, base64 payloads, and
 * uncommitted changes to the staged Canon v4 assets.
 */
import { execFileSync } from "node:child_process"
import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { copyRegistry } from "./pdma-template-copy.mjs"

const root = process.cwd()
const TREE = "src/app/pdma2026-templates"
const PRODUCTION_CONTENT = "src/app/pdma2026/presentation/pdma2026Content.ts"
const FIXTURES = `${TREE}/templateGalleryFixtures.ts`
const SHARED = "src/components/presentation"
const TEMPLATES = `${SHARED}/templates`
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
const sourceFiles = [...files.filter((file) => /\.(tsx?|css)$/.test(file)), ...fs.readdirSync(path.join(root, TEMPLATES)).filter((file) => /\.(tsx?|css)$/.test(file)).map((file) => `${TEMPLATES}/${file}`)]
const templateContent = read(`${TREE}/templateManifest.tsx`)
const galleryContent = `${templateContent}\n${read(FIXTURES)}`

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
const css = read(`${TEMPLATES}/templates.css`)
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
const galleryOrder = ["slide01", "slide16", "slide14", "slide15", "slide03", "slide09", "slide08", "slide06", "slide07", "slide10"]
const declaredOrder = (read(FIXTURES).match(/export const templateContent = \[([^\]]*)\]/)?.[1] ?? "").split(",").map((name) => name.trim()).filter(Boolean)
if (JSON.stringify(declaredOrder) !== JSON.stringify(galleryOrder)) fail(`templateGalleryFixtures.ts: gallery order ${JSON.stringify(declaredOrder)} ≠ ${JSON.stringify(galleryOrder)}`)
const declaredKinds = new Set([...galleryContent.matchAll(/^\s*kind:\s*"([a-z-]+)"/gm)].map(([, kind]) => kind))
for (const kind of requiredKinds) if (!declaredKinds.has(kind)) fail(`gallery content: no ${kind} template content declared`)
const registrySource = read(`${SHARED}/presentationTemplateRegistry.tsx`)
for (const kind of requiredKinds) if (!new RegExp(`(?:^|\\n)\\s*(?:"${kind}"|${kind}):`, "m").test(registrySource)) fail(`shared template registry: no renderer for ${kind}`)
const componentTargets = ["TitleTemplate", "EndCardTemplate", "ExerciseTemplate", "EmbeddedAppTemplate", "CompareContrastTemplate", "FlowScenarioTemplate", "DecisionSpectrumTemplate", "HubEcosystemTemplate", "ScorecardTemplate", "StructuredActionTemplate"]
for (const name of componentTargets) if (!fs.existsSync(path.join(root, TEMPLATES, `${name}.tsx`))) fail(`missing shared template ${TEMPLATES}/${name}.tsx`)
const sharedPresentation = "src/components/presentation/TemplatePrimitives.tsx";
const sharedPresentationSource = read(sharedPresentation);
for (const name of ["ContentCard", "IconCircle", "FlowRail", "Connector", "TakeawayBand", "DownloadModule", "EmbeddedAppFrame"]) {
  if (!new RegExp(`export function ${name}\\b`).test(sharedPresentationSource)) fail(`missing shared presentation primitive ${name}`);
}
if (!fs.existsSync(path.join(root, "src/components/presentation/PresentationCanvas.tsx"))) fail("missing shared PDMA PresentationCanvas");
for (const file of sourceFiles) if (/components\/shared\/|templateTypes/.test(read(file))) fail(`${file}: stale template-local shared ownership`);

const sharedFiles = walk(SHARED).filter((file) => /\.(tsx?|css)$/.test(file))
for (const file of sharedFiles) if (/from\s+["'][^"']*(?:app\/pdma2026|content\/pdma2026)/.test(read(file))) fail(`${file}: shared presentation imports PDMA-owned source`)
for (const file of files.filter((file) => /\.(tsx?|css)$/.test(file))) if (/from\s+["'][^"']*(?:pdma2026Content|PdmaScenarioExercise)/.test(read(file))) fail(`${file}: gallery route imports production content or the live PDMA exercise`)
if (/export const decorativeVariants/.test(read(`${TEMPLATES}/DecorativeLayer.tsx`))) fail("DecorativeLayer.tsx owns recipe configuration instead of only rendering caller recipes")

// 5. Mapped copy parity. Every string must exist verbatim in its copy authority AND in the gallery's content sources.
const normalizedContent = normalize(galleryContent)
for (const { kind, sources, strings } of copyRegistry) {
  const authority = normalize(sources.map(read).join("\n"))
  for (const value of strings) {
    const needle = normalize(value)
    if (!authority.includes(needle)) fail(`copy[${kind}]: "${value}" not found verbatim in copy authority (${sources.join(", ")})`)
    if (!normalizedContent.includes(needle)) fail(`copy[${kind}]: "${value}" missing from gallery content`)
  }
}
// Header/footer labels are chrome copy: every template declares three header labels and a footer label.
const headerBlocks = [...galleryContent.matchAll(/headerLabels:\s*\[([^\]]*)\]/g)].map(([, list]) => list.split(",").map((s) => s.trim()).filter(Boolean))
if (headerBlocks.some((labels) => labels.length !== 3)) fail("gallery content: every template needs exactly three header labels")
if ([...galleryContent.matchAll(/footerLabel:\s*"([^"]+)"/g)].length !== headerBlocks.length) fail("gallery content: every template needs a footer label")

// 6. Single-URL rule for the End Card download module.
const downloadModule = sharedPresentationSource
const hrefs = [...downloadModule.matchAll(/href=\{([^}]+)\}/g)].map(([, expr]) => expr.trim())
if (hrefs.length < 2 || new Set(hrefs).size !== 1 || !/<NativeQrCode value=\{url\}/.test(downloadModule)) fail("TemplatePrimitives.tsx: QR code and round CTA must consume the same single url value")

// 7. Canon v4 assets: present and byte-identical.
const references = JSON.parse(read(REFERENCES))
for (const [file, meta] of Object.entries(references.files)) {
  const full = path.join(root, ASSETS, file)
  if (!fs.existsSync(full)) { fail(`missing Canon v4 asset ${ASSETS}/${file}`); continue }
  const digest = crypto.createHash("sha256").update(fs.readFileSync(full)).digest("hex")
  if (digest !== meta.sha256) fail(`SHA-256 mismatch ${ASSETS}/${file}`)
}
const decorative = read(`${TEMPLATES}/templateDecorationRecipes.ts`)
for (const [kind, entry] of Object.entries(references.templates)) {
  for (const asset of entry.assets) if (!decorative.includes(asset.split("/").pop())) fail(`DecorativeLayer.tsx: approved ${kind} asset not used → ${asset}`)
}
const assetSources = [read(PRODUCTION_CONTENT), read(`${TREE}/templateGalleryFixtures.ts`), read(`${TREE}/galleryDecorationRecipes.ts`), read("src/app/pdma2026/presentation/pdmaDecorativeRecipes.ts")].join("\n")
for (const [, asset] of assetSources.matchAll(/"(\/[^" ]+\.(?:svg|png|jpe?g|webp))"/gi)) {
  if (!fs.existsSync(path.join(root, "public", asset.slice(1)))) fail(`referenced presentation asset is missing: ${asset}`)
}

// 8. Exercise the actual TypeScript validator with a fresh deck and invalid references.
try {
  const require = createRequire(import.meta.url)
  const ts = require("typescript")
  const source = read(`${SHARED}/presentationSpec.ts`)
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
  const module = { exports: {} }
  new Function("exports", "require", "module", compiled)(module.exports, require, module)
  const validate = module.exports.validatePresentationSpec
  const catalog = { chromeIds: new Set(["pbds"]), navigationCopyIds: new Set(["nav"]), compositionIds: new Set(["local"]), decorationRecipeIds: new Set(["none"]), slotIds: new Set(["smoke-slot"]), assetIds: new Set(["/smoke.svg"]) }
  const slide = (id, composition = { type: "template", templateId: "title", content: { speaker: { name: "A", role: "B" } } }) => ({ id, tocTitle: id, headerLabels: ["A", "B", "C"], footerLabel: "Footer", title: { white: id, size: 32 }, composition, decoration: { recipeId: "none" }, assetIds: ["/smoke.svg"], slots: { app: "smoke-slot" } })
  const coldStart = { schemaVersion: 1, id: "cold-start", chromeId: "pbds", metadata: { title: "Smoke", brandLabel: "SMOKE BRAND" }, navigationCopyId: "nav", slides: [slide("title"), slide("structured", { type: "template", templateId: "structured-content-action", content: { requirements: [], steps: [], takeaway: "" } }), slide("local", { type: "deck-local", compositionId: "local", content: {} })] }
  if (validate(coldStart, catalog) !== true) fail("machine validator: three-slide cold-start spec did not validate")
  const badCases = [
    ["duplicate slide ID", { ...coldStart, slides: [slide("same"), slide("same")] }, /duplicate slide ID/],
    ["unknown template ID", { ...coldStart, slides: [slide("bad", { type: "template", templateId: "unknown", content: {} })] }, /unknown template ID/],
    ["unknown composition ID", { ...coldStart, slides: [slide("bad", { type: "deck-local", compositionId: "unknown", content: {} })] }, /unknown composition ID/],
    ["unknown recipe ID", { ...coldStart, slides: [{ ...slide("bad"), decoration: { recipeId: "unknown" } }] }, /unknown decoration recipe/],
    ["unknown slot ID", { ...coldStart, slides: [{ ...slide("bad"), slots: { app: "unknown" } }] }, /unknown slot ID/],
    ["unknown asset ID", { ...coldStart, slides: [{ ...slide("bad"), assetIds: ["/missing.svg"] }] }, /unknown asset ID/],
  ]
  for (const [label, invalid, expected] of badCases) {
    let message = ""; try { validate(invalid, catalog) } catch (error) { message = String(error.message) }
    if (!expected.test(message) || !message.includes("cold-start")) fail(`machine validator: ${label} did not return a deck/field-specific error (got '${message}')`)
  }
} catch (error) { fail(`machine validator smoke failed: ${error.message}`) }

// 9. No base64 payloads in the new tree or its scripts.
for (const file of [...sourceFiles, "scripts/pdma-template-check.mjs", "scripts/pdma-template-visual-qa.mjs", "scripts/pdma-template-copy.mjs"].filter((f) => fs.existsSync(path.join(root, f)))) {
  const text = read(file)
  if (/data:[a-z]+\/[a-z0-9.+-]+;base64,/i.test(text) || /[A-Za-z0-9+/]{400,}={0,2}/.test(text)) fail(`${file}: base64 payload detected`)
}
for (const file of ["src/components/presentation/TemplatePrimitives.tsx", "src/components/presentation/qrMatrix.ts"]) {
  const text = read(file)
  if (/data:[a-z]+\/[a-z0-9.+-]+;base64,/i.test(text) || /[A-Za-z0-9+/]{400,}={0,2}/.test(text)) fail(`${file}: base64 payload detected`)
}

// 9. Read-only surfaces unchanged versus HEAD (working tree + index).
try {
  const changed = execFileSync("git", ["status", "--porcelain", "--", ASSETS], { cwd: root, encoding: "utf8" }).trim()
  if (changed) fail(`Canon v4 asset directory has uncommitted changes:\n${changed}`)
} catch (error) {
  fail(`git status failed: ${error.message}`)
}

if (failures.length) {
  console.error(`pdma-template-check: FAIL (${failures.length})`)
  for (const message of failures) console.error(`  ✗ ${message}`)
  process.exit(1)
}
const copyCount = copyRegistry.reduce((sum, { strings }) => sum + strings.length, 0)
console.log(`pdma-template-check: PASS — 10 shared templates, gallery-owned fixtures, ${copyCount} exemplar copy strings, machine validator cases, ${Object.keys(references.files).length} Canon v4 assets byte-identical`)
