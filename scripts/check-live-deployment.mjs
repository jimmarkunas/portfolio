#!/usr/bin/env node

import { randomUUID } from "node:crypto"
import { setTimeout as delay } from "node:timers/promises"

function parseArgs(argv) {
  const args = {
    baseUrl: "",
    sha: "",
    retries: 24,
    delayMs: 5000,
    requestTimeoutMs: 15000,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === "--base-url") {
      args.baseUrl = (argv[i + 1] ?? "").trim()
      i += 1
    } else if (arg === "--sha") {
      args.sha = (argv[i + 1] ?? "").trim()
      i += 1
    } else if (arg === "--retries") {
      args.retries = Number.parseInt(argv[i + 1] ?? "", 10)
      i += 1
    } else if (arg === "--delay-ms") {
      args.delayMs = Number.parseInt(argv[i + 1] ?? "", 10)
      i += 1
    } else if (arg === "--request-timeout-ms") {
      args.requestTimeoutMs = Number.parseInt(argv[i + 1] ?? "", 10)
      i += 1
    }
  }

  return args
}

const { baseUrl, sha, retries, delayMs, requestTimeoutMs } = parseArgs(process.argv.slice(2))

if (!baseUrl) {
  console.error("Missing --base-url")
  process.exit(1)
}

if (!sha) {
  console.error("Missing --sha")
  process.exit(1)
}

const routes = [
  { path: "/", route: "home" },
  { path: "/cv/", route: "cv" },
  { path: "/work/", route: "work" },
  { path: "/agents/", route: "agents" },
]

function buildUrl(path) {
  return new URL(path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`).toString()
}

const executionNonce = `${Date.now()}-${randomUUID()}`

async function fetchRoute(url) {
  const timeoutSignal = typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function"
    ? AbortSignal.timeout(requestTimeoutMs)
    : undefined

  const response = await fetch(url, {
    redirect: "follow",
    cache: "no-store",
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
    ...(timeoutSignal ? { signal: timeoutSignal } : {}),
  })

  const text = await response.text()
  return { response, text }
}

function routeMarkers(route) {
  return {
    routeMarker: `data-gpme-route="${route}"`,
    shaMarker: `data-gpme-deploy-sha="${sha}"`,
  }
}

let lastError = null

for (let attempt = 1; attempt <= retries; attempt += 1) {
  try {
    for (const { path, route } of routes) {
      const routeUrl = buildUrl(path)
      const url = `${routeUrl}${routeUrl.includes("?") ? "&" : "?"}gpme_deploy_check=${encodeURIComponent(`${sha}-${executionNonce}-${attempt}`)}`
      const { response, text } = await fetchRoute(url)

      if (!response.ok) {
        throw new Error(`${url} returned HTTP ${response.status}`)
      }

      const { routeMarker, shaMarker } = routeMarkers(route)

      if (!text.includes(routeMarker)) {
        throw new Error(`${url} missing route marker ${routeMarker}`)
      }

      if (!text.includes(shaMarker)) {
        throw new Error(`${url} missing expected deploy SHA ${sha}`)
      }
    }

    console.log(`Live deployment verified for ${sha}.`)
    process.exit(0)
  } catch (error) {
    lastError = error
    if (attempt < retries) {
      await delay(delayMs)
    }
  }
}

console.error(`Live deployment verification failed after ${retries} attempts for ${sha}.`)
if (lastError) {
  console.error(lastError instanceof Error ? lastError.message : String(lastError))
}
process.exit(1)
