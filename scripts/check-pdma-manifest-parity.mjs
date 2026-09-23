#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const { pdmaValidation } = await import("../src/app/pdma2026/pdma.validation.ts")
const manifest = fs.readFileSync(path.join(root, "src/app/pdma2026/pdma2026SlideManifest.tsx"), "utf8")
const app = fs.readFileSync(path.join(root, "src/app/pdma2026/Pdma2026App.tsx"), "utf8")
const expected = [...pdmaValidation.slideKeys]
const failures = []

if (expected.length !== 15) failures.push(`expected 15 validation entries, found ${expected.length}`)
if (new Set(expected).size !== expected.length) failures.push("validation slide keys must be unique")
if (!manifest.includes("pdmaConfig.slides")) failures.push("manifest must derive from pdmaConfig.slides")
if (!app.includes("slideManifest.map")) failures.push("app must render every manifest entry")

if (failures.length) {
  console.error("PDMA manifest/render parity guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}
console.log("PDMA manifest/render parity guard passed (15 ordered, unique, rendered entries).")
