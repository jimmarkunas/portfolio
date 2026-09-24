#!/usr/bin/env node
// Regenerates docs/pdma2026/slide-index.json and DEV_CONTEXT.md from the production deck content.
import fs from "node:fs"
import path from "node:path"
import { CONTENT, readDeck } from "./pdma-deck-slides.mjs"

const root = process.cwd()
const docsRoot = path.join(root, "docs/pdma2026")
const slides = readDeck(root)
const rendering = { canvas: "PdmaSlideCanvas (1920×1080, uniform contain scaling)", slide: "TemplateSlide", decoration: "DecorativeLayer", content: CONTENT, manifest: "src/app/pdma2026/presentation/pdma2026Manifest.tsx" }
fs.mkdirSync(docsRoot, { recursive: true })
const indexPath = path.join(docsRoot, "slide-index.json")
fs.writeFileSync(indexPath, `${JSON.stringify({ generatedBy: "scripts/generate-pdma-context.mjs", canvas: { width: 1920, height: 1080 }, rendering, slides }, null, 2)}\n`)
const markdown = [
  "# PDMA 2026 Developer Context",
  "",
  "Generated from the production deck content (`npm run pdma:context`). Use `slide-index.json` for machine-readable detail.",
  "",
  "| Slide | Title | Composition | Component |",
  "| --- | --- | --- | --- |",
  ...slides.map((slide) => `| ${slide.key} | ${slide.title} | ${slide.composition} | \`${slide.component}\` |`),
  "",
  `Rendering: ${rendering.canvas} → ${rendering.slide} (Grid/Flex content, bounded ${rendering.decoration}).`,
  "",
  `Copy: \`${CONTENT}\`. Checks: \`npm run pdma:check\` · \`npm run pdma:qa\`.`,
].join("\n") + "\n"
fs.writeFileSync(path.join(docsRoot, "DEV_CONTEXT.md"), markdown)
console.log(`Generated ${path.relative(root, indexPath)} and docs/pdma2026/DEV_CONTEXT.md.`)
