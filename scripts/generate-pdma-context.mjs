#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const docsRoot = path.join(root, "docs/pdma2026")
const { pdmaValidation } = await import("../src/app/pdma2026/pdma.validation.ts")
const canvas = { width: 1920, height: 1080 }
const slides = pdmaValidation.slideKeys.map((key, index) => {
  const doc = pdmaValidation.docs[key]
  const contract = pdmaValidation.contracts[key]
  return {
    key,
    number: index + 1,
    title: doc.title,
    component: doc.component,
    assets: pdmaValidation.runtimeAssets[key],
    routeLinks: key === "slide-14" ? [pdmaValidation.routeLinks.exercise] : [],
    contract,
    geometry: doc.geometry,
    rendering: {
      canvas: "PdmaSlideCanvas",
      surface: "PdmaSlideSurface",
      body: "PdmaSlideBody",
      geometry: doc.geometry,
      primitives: "pdmaPrimitives",
      animation: "motion/react + useReducedMotion",
    },
    verification: {
      check: `npm run pdma:check -- --slide ${key.slice(-2)}`,
      capture: `npm run pdma:qa -- --slide ${key.slice(-2)}`,
    },
  }
})

fs.mkdirSync(docsRoot, { recursive: true })
const indexPath = path.join(docsRoot, "slide-index.json")
fs.writeFileSync(indexPath, `${JSON.stringify({ generatedBy: "scripts/generate-pdma-context.mjs", canvas, slides }, null, 2)}\n`)

const markdown = [
  "# PDMA 2026 Developer Context",
  "",
  "Generated exclusively from the typed PDMA validation configuration. Use `slide-index.json` for machine-readable detail.",
  "",
  "| Slide | Component | Geometry | Targeted checks |",
  "| --- | --- | --- | --- |",
  ...slides.map((slide) => `| ${slide.key} | ${slide.component} | ${slide.geometry} | ${slide.verification.check} · ${slide.verification.capture} |`),
  "",
  "Shared rendering contract: `PdmaSlideCanvas` → `PdmaSlideSurface` → `PdmaSlideBody` → typed geometry/primitives/animation.",
  "",
  "Canonical configuration: `src/app/pdma2026/pdma.config.ts` and its typed validation declarations.",
].join("\n") + "\n"
fs.writeFileSync(path.join(docsRoot, "DEV_CONTEXT.md"), markdown)
console.log(`Generated ${path.relative(root, indexPath)} and ${path.relative(root, path.join(docsRoot, "DEV_CONTEXT.md"))}.`)
