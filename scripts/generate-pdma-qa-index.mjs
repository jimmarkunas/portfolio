#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const qaRoot = path.join(root, "qa/pdma2026")
fs.mkdirSync(qaRoot, { recursive: true })

const slides = Array.from({ length: 15 }, (_, index) => {
  const slide = String(index + 1).padStart(2, "0")
  const overlay = `slide-${slide}-overlay.png`
  const diff = `slide-${slide}-diff.png`
  const hasOverlay = fs.existsSync(path.join(qaRoot, overlay))
  const hasDiff = fs.existsSync(path.join(qaRoot, diff))
  const state = hasOverlay && hasDiff ? "PASS ARTIFACTS PRESENT" : "AWAITING ARTIFACTS"
  return `<article><h2>Slide ${slide}</h2><p>${state}</p><div><a href="${overlay}">Overlay</a> · <a href="${diff}">Diff</a></div></article>`
}).join("\n")

const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PDMA 2026 Visual QA</title>
<style>body{margin:0;padding:32px;background:#090909;color:#f2f2f5;font:16px/1.4 system-ui,sans-serif}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}article{padding:18px;border:1px solid #44464a;background:#15181b}h1,h2{margin:0 0 8px}p{color:#ff2fae;font-size:12px;letter-spacing:1px}a{color:#f2f2f5}</style></head>
<body><h1>PDMA 2026 Visual QA</h1><p>Expected artifacts: one overlay and one diff per slide at 1920×1080.</p><main>${slides}</main></body></html>
`

fs.writeFileSync(path.join(qaRoot, "index.html"), html)
console.log(`Generated ${path.relative(root, path.join(qaRoot, "index.html"))}.`)
