#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), "utf8")
const rel = (file) => path.relative(root, file)
const manifestFile = "src/app/pdma2026/pdma2026SlideManifest.tsx"
const manifest = read(manifestFile)
const sourceCssFile = "src/app/pdma2026/styles/pdma-source.css"
const sourceCss = read(sourceCssFile)
const shellFile = "src/app/pdma2026/PdmaPresentationShell.tsx"
const shell = read(shellFile)
const geometryFile = "src/app/pdma2026/pdmaGeometry.ts"
const geometry = read(geometryFile)
const failures = []

const imports = new Map(
  [...manifest.matchAll(/import \{ (\w+) \} from "(.+?)";/g)].map(([, name, importPath]) => [name, importPath]),
)
const entries = [...manifest.matchAll(/\{ key: "(slide-\d{2})"[\s\S]*?component: (\w+),/g)]

if (entries.length !== 15) failures.push(`expected 15 manifest entries, found ${entries.length}`)

const inventory = entries.map(([, slide, component]) => {
  const importPath = imports.get(component)
  if (!importPath) {
    failures.push(`${slide}: component import not found for ${component}`)
    return { slide, component, importPath: null, file: null, ownership: "unknown" }
  }

  const file = `${path.posix.normalize(path.posix.join(path.posix.dirname(manifestFile), importPath))}.tsx`
  const absolute = path.join(root, file)
  if (!fs.existsSync(absolute)) {
    failures.push(`${slide}: component file not found at ${file}`)
    return { slide, component, importPath, file, ownership: "missing" }
  }

  const text = fs.readFileSync(absolute, "utf8")
  const usesCanvas = text.includes("PdmaSlideCanvas") || /\bStage\b/.test(text)
  const usesInlineGeometry = /style=\{\{[\s\S]*?(?:left|top|width|height|fontSize|transform)/.test(text)
  const usesSharedPrimitives = /\b(?:Stage|T|B|Img|ImageLayer|Layer)\b/.test(text)
  const ownership = usesInlineGeometry ? "inline" : usesSharedPrimitives ? "shared-primitives" : "stylesheet"

  if (!usesCanvas) failures.push(`${slide}: does not render through PdmaSlideCanvas`)
  if (/\b(?:vw|vh|dvw|dvh)\b/.test(text)) failures.push(`${slide}: contains viewport-relative geometry`)

  return { slide, component, file, ownership }
})

const protectedSelectors = [
  ".pdma-global-header",
  ".pdma-global-right",
  ".pdma-bottom-bar",
  ".pdma-bottom-identity",
  ".pdma-bottom-controls",
  ".pdma-bottom-right",
]
for (const selector of protectedSelectors) {
  if (!sourceCss.includes(selector)) failures.push(`protected selector missing from ${sourceCssFile}: ${selector}`)
}

const protectedValues = [
  ["canonical canvas", geometry.includes("width: 1920") && geometry.includes("height: 1080")],
  ["header height", /\.pdma-global-header\{[^}]*height:100px/.test(sourceCss)],
  ["footer height", /\.pdma-bottom-bar\{[^}]*height:95px/.test(sourceCss)],
  ["logical canvas", /\.pdma-logical-canvas\{[^}]*width:1920px;height:1080px/.test(sourceCss)],
  ["shell top-biased contain", shell.includes("const extraY = Math.max(0, stage.clientHeight - renderedHeight)") && shell.includes("top: extraY * 0.25")],
]
for (const [label, present] of protectedValues) if (!present) failures.push(`protected value missing: ${label}`)

const report = {
  source: { manifest: manifestFile, shell: shellFile, geometry: geometryFile, css: sourceCssFile },
  slideCount: inventory.length,
  slides: inventory,
  protectedSelectors,
  protectedValues: Object.fromEntries(protectedValues),
  failures,
}

if (process.argv.includes("--json")) console.log(JSON.stringify(report, null, 2))
else {
  console.log("PDMA geometry inventory")
  for (const item of inventory) console.log(`${item.slide}: ${item.file ?? "missing"} [${item.ownership}]`)
  console.log(`Protected selectors: ${protectedSelectors.length} present`)
  console.log(`Protected values: ${protectedValues.filter(([, present]) => present).length}/${protectedValues.length} present`)
}

if (failures.length) {
  console.error("PDMA geometry inventory failed:\n- " + failures.join("\n- "))
  process.exit(1)
}

console.log("PDMA geometry inventory passed (15 render paths and protected values audited).")
