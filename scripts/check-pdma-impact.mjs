#!/usr/bin/env node

import { execFileSync } from "node:child_process"

const status = execFileSync("git", ["status", "--short"], { encoding: "utf8" })
const changedFiles = status.split("\n").filter(Boolean).map((line) => line.slice(3).trim()).filter(Boolean)
const slides = new Set()
const reasons = new Map()
let qaMode = "none"
const add = (slide, reason) => {
  slides.add(slide)
  const prior = reasons.get(slide) ?? []
  reasons.set(slide, [...prior, reason])
}
const allSlides = Array.from({ length: 15 }, (_, index) => String(index + 1).padStart(2, "0"))

for (const file of changedFiles) {
  const slideMatch = file.match(/slide-(\d{2})/)
  if (slideMatch) { add(slideMatch[1], file); if (file.startsWith("public/") || file.startsWith("src/")) qaMode = qaMode === "full" ? "full" : "targeted" }
  else if (/src\/app\/pdma2026\/components\/slides\/Slide(\d{2})\.tsx$/.test(file)) { add(file.match(/Slide(\d{2})/)?.[1], file); qaMode = qaMode === "full" ? "full" : "targeted" }
  else if (/src\/app\/pdma2026\/(index\.css|layout\.tsx|Pdma2026App\.tsx|pdma2026SlideManifest\.tsx|pdmaAssets\.ts|pdmaSlideAssets\.ts|pdma\.config\.ts|pdma\.validation\.ts|pdmaGeometry\.ts|PdmaPresentationShell\.tsx|components\/(PdmaTitleBlock|PdmaSlideBody|pdmaPrimitives|pdmaPrimitives)\.tsx|components\/slides\/slideShared\.tsx)/.test(file)) {
    for (const slide of allSlides) add(slide, file)
    qaMode = "full"
  } else if (/scripts\/.*pdma|docs\/pdma2026\/(slide-contracts|immutable-surfaces)/.test(file) || file === "package.json") {
    console.log(`PDMA impact: tooling-only change ${file}; no screenshot QA required.`)
  }
}

if (slides.size === 0) {
  console.log("PDMA impact: no changed files detected.")
  process.exit(0)
}

console.log(`PDMA impact: ${slides.size} affected slide${slides.size === 1 ? "" : "s"}.`)
console.log(`QA scope: ${qaMode === "full" ? "full-deck QA required" : "targeted QA sufficient"}.`)
for (const slide of allSlides.filter((value) => slides.has(value))) console.log(`- slide-${slide}: ${reasons.get(slide).join(", ")}`)
console.log(`Suggested QA: npm run qa:pdma:capture${qaMode === "full" ? "" : ` -- --slides ${allSlides.filter((value) => slides.has(value)).join(",")}`}`)
