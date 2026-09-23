#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const manifest = fs.readFileSync(path.join(root, "src/app/pdma2026/pdma.config.ts"), "utf8")
const entries = [...manifest.matchAll(/key:\s*"(slide-\d{2})"[\s\S]*?id:\s*"(slide-\d{2})"[\s\S]*?tocTitle:\s*"([^"]+)"[\s\S]*?title:\s*\{/g)]
const keys = entries.map(([, key]) => key)
const ids = entries.map(([, , id]) => id)
const expected = Array.from({ length: 15 }, (_, index) => `slide-${String(index + 1).padStart(2, "0")}`)
const failures = []

if (keys.length !== 15) failures.push(`expected 15 manifest entries, found ${keys.length}`)
if (keys.join("|") !== expected.join("|")) failures.push(`manifest order must be ${expected.join(", ")}`)
if (new Set(keys).size !== keys.length) failures.push("manifest slide keys must be unique")
if (new Set(ids).size !== ids.length) failures.push("manifest slide IDs must be unique")
if (entries.some(([, key, id, title]) => key !== id || !title.trim())) failures.push("every manifest entry must have matching key/id and a TOC title")
if (!/const\s+slides:\s+readonly/.test(manifest)) failures.push("config must own the slide collection")
if (!/slideManifest\.map\(\(\{ component: Component, key \}\) => <Component key=\{key\} \/>\)/.test(fs.readFileSync(path.join(root, "src/app/pdma2026/Pdma2026App.tsx"), "utf8"))) failures.push("app must render every manifest entry")

if (failures.length) {
  console.error("PDMA manifest/render parity guard failed:\n- " + failures.join("\n- "))
  process.exit(1)
}
console.log("PDMA manifest/render parity guard passed (15 ordered, unique, rendered entries).")
