#!/usr/bin/env node

import { execFileSync } from "node:child_process"

const slideIndex = process.argv.indexOf("--slide")
const slide = slideIndex >= 0 ? process.argv[slideIndex + 1]?.padStart(2, "0") : null
if (!slide || !/^0[1-9]$|^1[0-5]$/.test(slide)) throw new Error("Usage: npm run pdma:edit-check -- --slide 03")

const run = (command, args) => execFileSync(command, args, { stdio: "inherit" })
run("npm", ["run", "check:pdma-slide", "--", "--slides", slide])
run("npm", ["run", "check:pdma-assets-manifest"])
run("npm", ["run", "check:pdma-geometry"])
run("npm", ["run", "typecheck"])
run("npm", ["run", "qa:pdma:capture", "--", "--slides", slide])
console.log(`PDMA edit check passed for slide-${slide}.`)
