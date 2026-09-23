#!/usr/bin/env node

import { spawnSync } from "node:child_process"

const args = process.argv.slice(2)
const slideIndex = args.indexOf("--slide")
const slide = slideIndex >= 0 ? args[slideIndex + 1]?.padStart(2, "0") : null
const captureArgs = slide ? ["--slides", slide] : args

if (slide && !/^0[1-9]$|^1[0-5]$/.test(slide)) throw new Error("Usage: npm run pdma:qa -- --slide 02")
if (slide && args.some((arg, index) => arg === "--slides" || (arg === "--slide" && index !== slideIndex))) throw new Error("Use either --slide 02 or --slides 02,03")

const run = (script, scriptArgs = []) => {
  const result = spawnSync(process.execPath, [`scripts/${script}`, ...scriptArgs], { stdio: "inherit" })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run("capture-pdma-qa.mjs", captureArgs)
run("generate-pdma-qa-index.mjs")
console.log(slide ? `PDMA QA completed for slide-${slide}.` : "PDMA QA completed for the full deck.")
