#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const docsRoot = path.join(root, "docs/pdma2026")
const { pdmaValidation } = await import("../src/app/pdma2026/pdma.validation.ts")
const slides = pdmaValidation.slideKeys.map((key, index) => {
  const doc = pdmaValidation.docs[key]
  const contract = pdmaValidation.contracts[key]
  return {
    key,
    number: index + 1,
    title: doc.title,
    component: doc.component,
    assets: pdmaValidation.runtimeAssets[key],
    routeLinks: pdmaValidation.slides[index].routeLinks ?? [],
    contract,
    geometry: doc.geometry,
    rendering: { ...pdmaValidation.rendering, geometry: doc.geometry },
    verification: {
      check: `npm run pdma:check -- --slide ${key.slice(-2)}`,
      capture: `npm run pdma:qa -- --slide ${key.slice(-2)}`,
    },
  }
})

fs.mkdirSync(docsRoot, { recursive: true })
const indexPath = path.join(docsRoot, "slide-index.json")
fs.writeFileSync(indexPath, `${JSON.stringify({ generatedBy: "scripts/generate-pdma-context.mjs", canvas: pdmaValidation.canvas, rendering: pdmaValidation.rendering, slides }, null, 2)}\n`)

const markdown = [
  "# PDMA 2026 Developer Context",
  "",
  "Generated exclusively from the typed PDMA validation configuration. Use `slide-index.json` for machine-readable detail.",
  "",
  "| Slide | Component | Geometry | Targeted checks |",
  "| --- | --- | --- | --- |",
  ...slides.map((slide) => `| ${slide.key} | ${slide.component} | ${slide.geometry} | ${slide.verification.check} · ${slide.verification.capture} |`),
  "",
  `Shared rendering contract: ${pdmaValidation.rendering.canvas} → ${pdmaValidation.rendering.surface} → ${pdmaValidation.rendering.body} → typed geometry/${pdmaValidation.rendering.primitives}/${pdmaValidation.rendering.animation}.`,
  "",
  "Canonical configuration: `src/app/pdma2026/pdma.config.ts` and its typed validation declarations.",
].join("\n") + "\n"
fs.writeFileSync(path.join(docsRoot, "DEV_CONTEXT.md"), markdown)
console.log(`Generated ${path.relative(root, indexPath)} and ${path.relative(root, path.join(docsRoot, "DEV_CONTEXT.md"))}.`)
