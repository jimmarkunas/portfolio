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
const diffChannelThreshold = Number(process.env.PDMA_DIFF_CHANNEL_THRESHOLD ?? 16)
const maxDiffPixels = Number(process.env.PDMA_MAX_DIFF_PIXELS ?? 250000)
const maxDiffRatio = Number(process.env.PDMA_MAX_DIFF_RATIO ?? 0.12)
const slideArgumentIndex = process.argv.indexOf("--slides")
const requestedSlides = slideArgumentIndex >= 0 ? process.argv[slideArgumentIndex + 1]?.split(",").map((value) => value.padStart(2, "0")) : null
const slidesToCapture = requestedSlides?.length ? requestedSlides : Array.from({ length: 15 }, (_, index) => String(index + 1).padStart(2, "0"))
if (slidesToCapture.some((slide) => !/^0[1-9]$|^1[0-5]$/.test(slide))) throw new Error(`Invalid --slides value; expected comma-separated 01–15, received ${slidesToCapture.join(",")}`)
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
  const { data, info } = await sharp(render).raw().toBuffer({ resolveWithObject: true })
  const { data: referenceData } = await sharp(reference).raw().toBuffer({ resolveWithObject: true })
  let differingPixels = 0
  for (let offset = 0; offset < data.length; offset += info.channels) {
    let differs = false
    for (let channel = 0; channel < Math.min(3, info.channels); channel += 1) {
      if (Math.abs(data[offset + channel] - referenceData[offset + channel]) > diffChannelThreshold) differs = true
    }
    if (differs) differingPixels += 1
  }
  const ratio = differingPixels / (info.width * info.height)
  if (differingPixels > maxDiffPixels || ratio > maxDiffRatio) {
    throw new Error(`Slide ${slide} exceeds visual diff threshold: ${differingPixels} pixels (${(ratio * 100).toFixed(2)}%), limits ${maxDiffPixels} / ${(maxDiffRatio * 100).toFixed(2)}%`)
  }
  return { differingPixels, ratio }
}

async function main() {
  fs.mkdirSync(qaRoot, { recursive: true })
  await ensureServer()
  const browserOptions = { headless: true }
  if (process.env.CHROME_BIN) browserOptions.executablePath = process.env.CHROME_BIN
  const browser = await chromium.launch(browserOptions)
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 })
    await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "dark" })
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" })
    await page.evaluate(() => document.fonts?.ready)
    for (let index = 1; index <= 15; index += 1) {
      const slide = String(index).padStart(2, "0")
      if (!slidesToCapture.includes(slide)) {
        if (index < 15) await page.getByRole("button", { name: "Next slide" }).click()
        continue
      }
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
  const { execFileSync } = await import("node:child_process")
  execFileSync(process.execPath, [path.join(root, "scripts/generate-pdma-qa-index.mjs")], { cwd: root, stdio: "inherit" })
  console.log(`PDMA QA capture passed (${slidesToCapture.length} slide${slidesToCapture.length === 1 ? "" : "s"}: ${slidesToCapture.join(", ")}).`)
}

try {
  await main()
} finally {
  if (server) server.kill("SIGTERM")
}
