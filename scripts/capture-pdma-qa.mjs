#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import { spawn } from "node:child_process"
import { chromium } from "playwright"
import sharp from "sharp"

const root = process.cwd()
const qaRoot = path.join(root, "qa/pdma2026")
const referenceRoot = path.join(qaRoot, "reference")
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const route = "/pdma2026/"
let server

async function isHealthy() {
  try {
    const response = await fetch(`${baseUrl}${route}`)
    return response.ok
  } catch {
    return false
  }
}

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (await isHealthy()) return
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  throw new Error(`Timed out waiting for ${baseUrl}${route}`)
}

async function ensureServer() {
  if (await isHealthy()) return
  server = spawn("npm", ["run", "dev"], {
    cwd: root,
    env: { ...process.env, NEXT_DIST_DIR: ".next-dev" },
    stdio: "inherit",
  })
  await waitForServer()
}

async function createDiffArtifacts(slide) {
  const render = path.join(qaRoot, `slide-${slide}-render.png`)
  const reference = path.join(referenceRoot, `slide-${slide}.png`)
  const overlay = path.join(qaRoot, `slide-${slide}-overlay.png`)
  const diff = path.join(qaRoot, `slide-${slide}-diff.png`)
  if (!fs.existsSync(reference)) throw new Error(`Missing reference artifact: ${path.relative(root, reference)}`)
  const renderMeta = await sharp(render).metadata()
  const referenceMeta = await sharp(reference).metadata()
  if (renderMeta.width !== 1920 || renderMeta.height !== 1080) throw new Error(`Render ${slide} is not 1920×1080`)
  if (referenceMeta.width !== 1920 || referenceMeta.height !== 1080) throw new Error(`Reference ${slide} is not 1920×1080`)
  await sharp(render).composite([{ input: reference, blend: "over", opacity: 0.5 }]).png().toFile(overlay)
  await sharp(render).composite([{ input: reference, blend: "difference" }]).png().toFile(diff)
}

async function main() {
  fs.mkdirSync(qaRoot, { recursive: true })
  await ensureServer()
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_BIN ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" })
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 })
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" })
    await page.evaluate(() => document.fonts?.ready)
    for (let index = 1; index <= 15; index += 1) {
      const slide = String(index).padStart(2, "0")
      await page.screenshot({ path: path.join(qaRoot, `slide-${slide}-render.png`), animations: "disabled" })
      await createDiffArtifacts(slide)
      if (index < 15) {
        await page.getByRole("button", { name: "Next slide" }).click()
        await page.waitForTimeout(500)
      }
    }
  } finally {
    await browser.close()
  }
  console.log("PDMA QA capture passed (15 renders, overlays, and diffs generated).")
}

try {
  await main()
} finally {
  if (server) server.kill("SIGTERM")
}
