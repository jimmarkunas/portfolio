#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { execSync } from "node:child_process"

function parseArgs(argv) {
  const args = {
    sha: process.env.NEXT_PUBLIC_DEPLOY_SHA?.trim() || "",
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === "--sha") {
      args.sha = (argv[i + 1] ?? "").trim()
      i += 1
    }
  }

  return args
}

const { sha } = parseArgs(process.argv.slice(2))
const expectedSha = sha || execSync("git rev-parse HEAD", { encoding: "utf8" }).trim()

const root = process.cwd()
const checks = [
  { route: "home", file: "out/index.html" },
  { route: "cv", file: "out/cv/index.html" },
  { route: "work", file: "out/work/index.html" },
  { route: "agents", file: "out/agents/index.html" },
]

function fail(message) {
  console.error(message)
  process.exitCode = 1
}

let failed = false

for (const { route, file } of checks) {
  const path = resolve(root, file)
  if (!existsSync(path)) {
    fail(`Missing deploy artifact: ${file}`)
    failed = true
    continue
  }

  const contents = readFileSync(path, "utf8")
  const routeMarker = `data-gpme-route="${route}"`
  const shaMarker = `data-gpme-deploy-sha="${expectedSha}"`

  if (!contents.includes(routeMarker)) {
    fail(`Missing route marker in ${file}: ${routeMarker}`)
    failed = true
  }

  if (!contents.includes(shaMarker)) {
    const hasAnySha = contents.includes("data-gpme-deploy-sha=")
    fail(hasAnySha
      ? `Build SHA mismatch in ${file}: expected ${expectedSha}`
      : `Missing build SHA marker in ${file}: ${shaMarker}`)
    failed = true
  }
}

if (failed) {
  process.exit(1)
}

console.log(`Deploy artifacts passed structural marker checks for ${expectedSha}.`)
