#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const appRoot = path.join(root, "src/app/pdma2026")
const docsRoot = path.join(root, "docs/pdma2026")
const manifest = fs.readFileSync(path.join(appRoot, "pdma2026SlideManifest.tsx"), "utf8")
const assets = fs.readFileSync(path.join(appRoot, "pdmaSlideAssets.ts"), "utf8")
const contracts = JSON.parse(fs.readFileSync(path.join(docsRoot, "slide-contracts.json"), "utf8"))
const css = fs.readFileSync(path.join(appRoot, "index.css"), "utf8")
const componentPaths = new Map()
for (const match of manifest.matchAll(/import \{([^}]+)\} from "([^"]+)"/g)) {
  for (const name of match[1].split(",").map((value) => value.trim()).filter(Boolean)) componentPaths.set(name, `${match[2].replace(/^\.\//, "src/app/pdma2026/")}.tsx`)
}

const slides = Array.from({ length: 15 }, (_, index) => {
  const key = `slide-${String(index + 1).padStart(2, "0")}`
  const entry = manifest.match(new RegExp(`key: "${key}"[\\s\\S]*?tocTitle: "([^"]+)"[\\s\\S]*?component: (\\w+)`))
  const assetMatch = assets.match(new RegExp(`"${key}": \\[([\\s\\S]*?)\\]`))
  const selectorPattern = new RegExp(`(?:\\.pdma-s${String(index + 1).padStart(2, "0")}|\\.s${String(index + 1).padStart(2, "0")}-[A-Za-z0-9_-]+)`, "g")
  const selectors = [...new Set(css.match(selectorPattern) ?? [])].sort()
  return {
    key,
    number: index + 1,
    title: entry?.[1] ?? "",
    component: entry?.[2] ? componentPaths.get(entry[2]) ?? null : null,
    assets: assetMatch ? [...assetMatch[1].matchAll(/"([^\"]+)"/g)].map((match) => match[1]) : [],
    contract: contracts[key] ?? { required: [], forbidden: [] },
    selectors,
    geometry: key === "slide-03" ? "src/app/pdma2026/pdmaGeometry.ts#slide03" : null,
    verification: {
      contract: `npm run check:pdma-slide -- --slides ${String(index + 1).padStart(2, "0")}`,
      capture: `npm run qa:pdma:capture -- --slides ${String(index + 1).padStart(2, "0")}`,
    },
  }
})

fs.mkdirSync(docsRoot, { recursive: true })
const indexPath = path.join(docsRoot, "slide-index.json")
fs.writeFileSync(indexPath, `${JSON.stringify({ generatedBy: "scripts/generate-pdma-context.mjs", canvas: { width: 1920, height: 1080 }, slides }, null, 2)}\n`)

const markdown = [
  "# PDMA 2026 Developer Context",
  "",
  "Generated from the slide manifest, asset map, visual contracts, and active CSS. Use `slide-index.json` for machine-readable detail.",
  "",
  "| Slide | Component | Targeted checks |",
  "| --- | --- | --- |",
  ...slides.map((slide) => `| ${slide.key} | ${slide.component ?? "missing"} | check:pdma-slide -- --slides ${slide.key.slice(-2)} · qa:pdma:capture -- --slides ${slide.key.slice(-2)} |`),
  "",
  "Shared sources: `pdma2026SlideManifest.tsx`, `pdmaAssets.ts`, `pdmaGeometry.ts`, `index.css`.",
].join("\n") + "\n"
fs.writeFileSync(path.join(docsRoot, "DEV_CONTEXT.md"), markdown)
console.log(`Generated ${path.relative(root, indexPath)} and ${path.relative(root, path.join(docsRoot, "DEV_CONTEXT.md"))}.`)
