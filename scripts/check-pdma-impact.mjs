#!/usr/bin/env node
// Maps working-tree changes to the PDMA surfaces they affect and the checks to run.
import { execFileSync } from "node:child_process"
import { readDeck } from "./pdma-deck-slides.mjs"

const changed = execFileSync("git", ["status", "--short"], { encoding: "utf8" }).split("\n").filter(Boolean).map((line) => line.slice(3).trim())
const deck = readDeck()
const shared = /^src\/app\/pdma2026\/(PdmaPresentationShell|components\/|styles\/|presentation\/(presentationTypes|pdma2026Manifest|Pdma2026Presentation))|^src\/app\/pdma2026-templates\/(components\/(TemplateSlide|DecorativeLayer|shared\/)|styles\/)/
const impact = new Map()
for (const file of changed) {
  if (shared.test(file)) { impact.set("all slides + gallery", [...(impact.get("all slides + gallery") ?? []), file]); continue }
  if (file.includes("pdma2026Content.ts") || file.startsWith("public/pdma2026")) { impact.set("deck copy/assets", [...(impact.get("deck copy/assets") ?? []), file]); continue }
  for (const slide of deck) if (file === slide.component) impact.set(slide.key, [...(impact.get(slide.key) ?? []), file])
  if (file.startsWith("src/app/pdma2026-templates/") || file.startsWith("public/pdma2026-templates/")) impact.set("template gallery", [...(impact.get("template gallery") ?? []), file])
  if (file.startsWith("src/app/pdma2026/exercise/")) impact.set("/pdma2026/exercise", [...(impact.get("/pdma2026/exercise") ?? []), file])
}
if (!impact.size) { console.log("No PDMA surface changed."); process.exit(0) }
console.log("PDMA impact:")
for (const [surface, files] of impact) console.log(`- ${surface}: ${files.join(", ")}`)
console.log("Run: npm run pdma:check && npm run pdma:qa")
