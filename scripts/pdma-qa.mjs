#!/usr/bin/env node
// PDMA browser QA: production /pdma2026 deck, the /pdma2026-templates gallery, then the
// Slide 15 exercise (SCC parity, brief, fit).
// Extra args (--out, --reference-dir, --route) pass through to the deck QA.
import { spawnSync } from "node:child_process"

const passthrough = process.argv.slice(2).filter((arg, index, all) => !(arg === "--slide" || all[index - 1] === "--slide"))
const run = (script, args = []) => {
  const result = spawnSync(process.execPath, [`scripts/${script}`, ...args], { stdio: "inherit" })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run("pdma-deck-visual-qa.mjs", passthrough)
run("pdma-template-visual-qa.mjs")
run("pdma-exercise-qa.mjs")
