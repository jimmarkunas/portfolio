#!/usr/bin/env node
// Edit map for one production slide: which composition, component, stylesheet and content own it.
import { readDeck } from "./pdma-deck-slides.mjs"

const slideIndex = process.argv.indexOf("--slide")
const slide = slideIndex >= 0 ? process.argv[slideIndex + 1]?.padStart(2, "0") : null
if (!slide || !/^0[1-9]$|^1[0-5]$/.test(slide)) throw new Error("Usage: npm run pdma:edit -- --slide 03")
const entry = readDeck().find(({ number }) => number === Number(slide))
if (!entry) throw new Error(`Unknown PDMA slide: ${slide}`)
console.log(`PDMA edit map: ${entry.key}`)
console.log(`Title: ${entry.title}`)
console.log(`Composition: ${entry.composition} (${entry.family})`)
console.log(`Component: ${entry.component}`)
console.log(`Stylesheet: ${entry.stylesheet}`)
console.log(`Copy: ${entry.content}`)
console.log("Verify: npm run pdma:check && npm run pdma:qa")
