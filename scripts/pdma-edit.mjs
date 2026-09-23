#!/usr/bin/env node

const slideIndex = process.argv.indexOf("--slide")
const slide = slideIndex >= 0 ? process.argv[slideIndex + 1]?.padStart(2, "0") : null
if (!slide || !/^0[1-9]$|^1[0-5]$/.test(slide)) throw new Error("Usage: npm run pdma:edit -- --slide 03")

const { pdmaValidation } = await import("../src/app/pdma2026/pdma.validation.ts")
const key = `slide-${slide}`
const index = pdmaValidation.slideKeys.indexOf(key)
if (index < 0) throw new Error(`Unknown PDMA slide: ${key}`)
const slideConfig = pdmaValidation.slides[index]
const doc = pdmaValidation.docs[key]

const componentPath = slide === "02" ? "src/app/pdma2026/components/Slide02.tsx" : slide === "06" ? "src/app/pdma2026/components/CanonicalSlide06Exact.tsx" : slide === "08" ? "src/app/pdma2026/components/CanonicalSlide08.tsx" : `src/app/pdma2026/components/slides/Slide${slide}.tsx`
console.log(`PDMA edit map: ${key}`)
console.log(`Title: ${doc.title}`)
console.log(`Component ID: ${slideConfig.component}`)
console.log(`Component: ${componentPath}`)
console.log(`Geometry: ${doc.geometry}`)
console.log(`Assets: ${slideConfig.assets.length ? slideConfig.assets.join(", ") : "none declared"}`)
console.log(`CSS: src/app/pdma2026/styles/slide-${slide}.css`)
console.log(`Contract: required=${pdmaValidation.contracts[key].required.join(", ") || "none"}; forbidden=${pdmaValidation.contracts[key].forbidden.join(", ")}`)
console.log(`QA scope: ${slideConfig.qa}`)
console.log(`Targeted check: npm run pdma:check -- --slide ${slide}`)
console.log(`Targeted QA: npm run pdma:qa -- --slide ${slide}`)
