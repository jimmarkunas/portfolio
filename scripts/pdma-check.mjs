#!/usr/bin/env node

import { spawnSync } from "node:child_process"

const args = process.argv.slice(2)
const slideIndex = args.indexOf("--slide")
const slide = slideIndex >= 0 ? args[slideIndex + 1]?.padStart(2, "0") : null
const hasAll = args.includes("--all") || args.length === 0

if (slide && !/^0[1-9]$|^1[0-5]$/.test(slide)) throw new Error("Usage: npm run pdma:check -- --slide 02")
if (slide && args.some((arg, index) => arg === "--all" || (arg === "--slide" && index !== slideIndex))) throw new Error("Choose one PDMA check scope: --slide 01 or --all")

const run = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, { stdio: "inherit" })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

if (slide) {
  run("npm", ["run", "check:pdma-slide", "--", "--slides", slide])
  run("npm", ["run", "check:pdma-assets-manifest"])
  run("npm", ["run", "check:pdma-geometry"])
  run("npm", ["run", "typecheck"])
  console.log(`PDMA targeted check passed for slide-${slide}.`)
} else if (hasAll) {
  run("npm", ["run", "check:pdma"])
  run("npm", ["run", "check:pdma-geometry-inventory"])
  run("npm", ["run", "check:pdma-unified-geometry"])
  run("npm", ["run", "typecheck"])
  console.log("PDMA full check passed.")
}
