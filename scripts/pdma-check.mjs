#!/usr/bin/env node
// PDMA static checks: production deck + template gallery contracts, then typecheck.
// `--slide NN` and `--all` are accepted for compatibility; the deck is always checked as one unit.
import { spawnSync } from "node:child_process"

const run = (command, args) => {
  const result = spawnSync(command, args, { stdio: "inherit" })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run(process.execPath, ["scripts/pdma-deck-check.mjs"])
run(process.execPath, ["scripts/pdma-template-check.mjs"])
run("npm", ["run", "typecheck"])
console.log("PDMA full check passed.")
