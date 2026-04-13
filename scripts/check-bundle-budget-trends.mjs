#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import zlib from "node:zlib"

const NEXT_DIR = ".next"
const APP_MANIFEST_PATH = path.join(NEXT_DIR, "app-build-manifest.json")
const BASELINE_PATH = "scripts/bundle-budget-trend-baseline.json"
const SNAPSHOT_PATH = path.join(NEXT_DIR, "bundle-budget-trend-current.json")

const ROUTE_TARGETS = [
  "/work/[slug]/page",
  "/work/[slug]/press/[filename]/page",
  "/page",
]

const CHUNK_TARGETS = [
  {
    name: "/work/[slug]/page app chunk",
    route: "/work/[slug]/page",
    mode: "sum",
    isMatch: (file) => routeToAppChunkRegex("/work/[slug]/page").test(file),
  },
  {
    name: "/work/[slug]/page largest shared chunk",
    route: "/work/[slug]/page",
    mode: "max",
    isMatch: (file) => {
      const appChunkRegex = routeToAppChunkRegex("/work/[slug]/page")
      return file.endsWith(".js") && !appChunkRegex.test(file) && !file.includes("main-app-")
    },
  },
  {
    name: "/page app chunk",
    route: "/page",
    mode: "sum",
    isMatch: (file) => routeToAppChunkRegex("/page").test(file),
  },
  {
    name: "/page largest shared chunk",
    route: "/page",
    mode: "max",
    isMatch: (file) => {
      const appChunkRegex = routeToAppChunkRegex("/page")
      return file.endsWith(".js") && !appChunkRegex.test(file) && !file.includes("main-app-")
    },
  },
]

function normalizeAppRouteKey(routeKey) {
  return routeKey.replace(/\/\([^/]+\)/g, "")
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function routeToAppChunkRegex(route) {
  const normalizedRoute = route.replace(/^\//, "")
  const escapedRoute = escapeRegExp(normalizedRoute)
  return new RegExp(`^static/chunks/app/(?:\\([^/]+\\)/)*${escapedRoute}-`)
}

function readAppManifest() {
  if (!fs.existsSync(APP_MANIFEST_PATH)) {
    console.error("Bundle trend check failed: .next/app-build-manifest.json not found.")
    console.error("Run `npm run build` before `npm run check:bundle-budget-trends`.")
    process.exit(1)
  }

  return JSON.parse(fs.readFileSync(APP_MANIFEST_PATH, "utf8"))
}

function resolveAppRouteKey(pageFiles, routeKey) {
  if (pageFiles[routeKey]) {
    return routeKey
  }

  const matchingRoute = Object.keys(pageFiles).find(
    (manifestRoute) => normalizeAppRouteKey(manifestRoute) === routeKey,
  )

  return matchingRoute ?? null
}

function gzipSizeKiB(filePath) {
  const gzipBytes = zlib.gzipSync(fs.readFileSync(filePath)).length
  return gzipBytes / 1024
}

function measureRouteTotals(pageFiles) {
  const totals = {}

  for (const route of ROUTE_TARGETS) {
    const resolvedRouteKey = resolveAppRouteKey(pageFiles, route)
    const routeFiles = (resolvedRouteKey ? pageFiles[resolvedRouteKey] : []).filter((file) => file.endsWith(".js"))

    if (routeFiles.length === 0) {
      throw new Error(`Missing route chunks for '${route}' in app-build-manifest.json`)
    }

    totals[route] = routeFiles.reduce((total, file) => {
      const absolutePath = path.join(NEXT_DIR, file)
      if (!fs.existsSync(absolutePath)) {
        throw new Error(`Missing chunk file for '${route}': ${absolutePath}`)
      }

      return total + gzipSizeKiB(absolutePath)
    }, 0)
  }

  return totals
}

function measureChunkMetrics(pageFiles) {
  const metrics = {}

  for (const target of CHUNK_TARGETS) {
    const resolvedRouteKey = resolveAppRouteKey(pageFiles, target.route)
    const routeFiles = [...new Set((resolvedRouteKey ? pageFiles[resolvedRouteKey] : []).filter((file) => file.endsWith(".js")))]

    const matchedFiles = routeFiles.filter((file) => target.isMatch(file))
    if (matchedFiles.length === 0) {
      throw new Error(`No matching chunks found for '${target.name}'`)
    }

    const measuredChunkValues = matchedFiles.map((file) => {
      const absolutePath = path.join(NEXT_DIR, file)
      if (!fs.existsSync(absolutePath)) {
        throw new Error(`Missing chunk file for '${target.name}': ${absolutePath}`)
      }

      return gzipSizeKiB(absolutePath)
    })

    metrics[target.name] =
      target.mode === "max"
        ? Math.max(...measuredChunkValues)
        : measuredChunkValues.reduce((sum, value) => sum + value, 0)
  }

  return metrics
}

function roundToOne(value) {
  return Math.round(value * 10) / 10
}

function writeSnapshot(snapshot) {
  fs.writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`)
}

function readBaseline() {
  if (!fs.existsSync(BASELINE_PATH)) {
    throw new Error(`Missing baseline file: ${BASELINE_PATH}`)
  }

  return JSON.parse(fs.readFileSync(BASELINE_PATH, "utf8"))
}

function run() {
  const manifest = readAppManifest()
  const pageFiles = manifest?.pages ?? {}

  const routeTotals = measureRouteTotals(pageFiles)
  const chunkMetrics = measureChunkMetrics(pageFiles)

  const snapshot = {
    generatedAt: new Date().toISOString(),
    routeTotalsKiB: Object.fromEntries(
      Object.entries(routeTotals).map(([route, value]) => [route, roundToOne(value)]),
    ),
    chunkMetricsKiB: Object.fromEntries(
      Object.entries(chunkMetrics).map(([name, value]) => [name, roundToOne(value)]),
    ),
  }

  writeSnapshot(snapshot)

  if (process.argv.includes("--write-baseline")) {
    const baseline = {
      thresholdsKiB: {
        routeTotalIncrease: 6,
        chunkIncrease: 4,
      },
      routeTotalsKiB: snapshot.routeTotalsKiB,
      chunkMetricsKiB: snapshot.chunkMetricsKiB,
    }

    fs.writeFileSync(BASELINE_PATH, `${JSON.stringify(baseline, null, 2)}\n`)
    console.log(`Bundle budget trend baseline written to ${BASELINE_PATH}`)
    return
  }

  const baseline = readBaseline()
  const routeThreshold = baseline.thresholdsKiB?.routeTotalIncrease ?? 6
  const chunkThreshold = baseline.thresholdsKiB?.chunkIncrease ?? 4

  let hasFailure = false

  console.log("Bundle budget trend report (KiB):")
  console.log("Route totals:")
  for (const [route, baselineValue] of Object.entries(baseline.routeTotalsKiB ?? {})) {
    const currentValue = snapshot.routeTotalsKiB[route]
    if (typeof currentValue !== "number") {
      hasFailure = true
      console.error(`- ${route}: missing in current snapshot`)
      continue
    }

    const delta = roundToOne(currentValue - baselineValue)
    const status = delta <= routeThreshold ? "PASS" : "FAIL"
    const line = `- ${route}: baseline ${baselineValue.toFixed(1)} -> current ${currentValue.toFixed(1)} (delta ${delta.toFixed(1)}, threshold +${routeThreshold.toFixed(1)}) [${status}]`
    if (status === "PASS") {
      console.log(line)
    } else {
      hasFailure = true
      console.error(line)
    }
  }

  console.log("Chunk metrics:")
  for (const [name, baselineValue] of Object.entries(baseline.chunkMetricsKiB ?? {})) {
    const currentValue = snapshot.chunkMetricsKiB[name]
    if (typeof currentValue !== "number") {
      hasFailure = true
      console.error(`- ${name}: missing in current snapshot`)
      continue
    }

    const delta = roundToOne(currentValue - baselineValue)
    const status = delta <= chunkThreshold ? "PASS" : "FAIL"
    const line = `- ${name}: baseline ${baselineValue.toFixed(1)} -> current ${currentValue.toFixed(1)} (delta ${delta.toFixed(1)}, threshold +${chunkThreshold.toFixed(1)}) [${status}]`
    if (status === "PASS") {
      console.log(line)
    } else {
      hasFailure = true
      console.error(line)
    }
  }

  console.log(`Current snapshot written to ${SNAPSHOT_PATH}`)

  if (hasFailure) {
    process.exit(1)
  }
}

run()
