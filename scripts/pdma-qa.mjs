#!/usr/bin/env node
// PDMA browser QA: production deck, template gallery, exercise, then decoration lab.
// --route selects one visual suite; --slide narrows that suite to one slide.
import { spawnSync } from "node:child_process"
import { performance } from "node:perf_hooks"

const args = process.argv.slice(2)
const option = (name) => {
  const index = args.indexOf(name)
  if (index < 0) return undefined
  const value = args[index + 1]
  if (!value || value.startsWith("--")) throw new Error(`${name} requires a value`)
  return value
}

const routeArg = option("--route")
const slideArg = option("--slide")
const route = routeArg?.replace(/\/+$/, "")
const slide = slideArg === undefined ? undefined : Number(slideArg)
if (slideArg !== undefined && (!Number.isInteger(slide) || slide < 1)) throw new Error(`--slide must be a positive integer; received ${slideArg}`)
if (route && route !== "/pdma2026" && route !== "/pdma2026-templates") throw new Error(`Unsupported PDMA QA route: ${routeArg}`)

const consumed = new Set()
for (const name of ["--route", "--slide"]) {
  const index = args.indexOf(name)
  if (index >= 0) { consumed.add(index); consumed.add(index + 1) }
}
const extraArgs = args.filter((_, index) => !consumed.has(index))

const run = (script, forwarded = []) => {
  const started = performance.now()
  const result = spawnSync(process.execPath, [`scripts/${script}`, ...forwarded], { stdio: "inherit" })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
  if (slide !== undefined) console.log(`PDMA_QA_TARGET: suite=${script} slide=${slide} elapsed=${((performance.now() - started) / 1000).toFixed(2)}s`)
}

if (!route && slide === undefined) {
  // Keep the no-argument release QA suite and its order unchanged.
  run("pdma-deck-visual-qa.mjs", extraArgs)
  run("pdma-template-visual-qa.mjs")
  run("pdma-exercise-qa.mjs")
  run("pdma-lab-visual-qa.mjs")
} else {
  const selectedRoute = route ?? "/pdma2026"
  if (selectedRoute === "/pdma2026") {
    const forwarded = [...extraArgs, "--route", selectedRoute]
    if (slide !== undefined) forwarded.push("--slide", String(slide))
    run("pdma-deck-visual-qa.mjs", forwarded)
  } else if (slide !== undefined) {
    run("pdma-template-visual-qa.mjs", [...extraArgs, "--slide", String(slide)])
  } else {
    run("pdma-template-visual-qa.mjs", extraArgs)
  }
}
