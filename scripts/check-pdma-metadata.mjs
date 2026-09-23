#!/usr/bin/env node

const { pdmaValidation } = await import("../src/app/pdma2026/pdma.validation.ts")
const failures = []
const keys = pdmaValidation.slideKeys
if (new Set(keys).size !== keys.length || keys.length !== 15) failures.push("slide keys must be exactly 15 and unique")
for (const key of keys) {
  const slide = pdmaValidation.slides.find(({ key: slideKey }) => slideKey === key)
  const doc = pdmaValidation.docs[key]
  const contract = pdmaValidation.contracts[key]
  if (!slide) { failures.push(`${key}: missing slide definition`); continue }
  if (slide.component !== key) failures.push(`${key}: component ID must equal its typed slide ID`)
  if (!doc?.geometry || !new RegExp(`^pdmaGeometry\\.slide${key.slice(-2)}$`).test(doc.geometry)) failures.push(`${key}: missing typed geometry declaration`)
  if (!contract || !Array.isArray(contract.required) || !Array.isArray(contract.forbidden)) failures.push(`${key}: missing typed contract`)
  if (!["targeted", "full"].includes(slide.qa)) failures.push(`${key}: missing valid QA scope`)
  if (!Array.isArray(slide.assets)) failures.push(`${key}: missing typed assets declaration`)
}
if (failures.length) { console.error("PDMA metadata guard failed:\n- " + failures.join("\n- ")); process.exit(1) }
console.log(`PDMA metadata guard passed (${keys.length} typed slide definitions checked).`)
