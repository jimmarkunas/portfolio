#!/usr/bin/env node
/**
 * Browser QA for /pdma2026-templates (Playwright).
 *
 * Captures every template at desktop and portrait-tablet viewports and asserts:
 * zero document/slide scrolling, one uniformly scaled 16:9 canvas, no responsive stacking
 * (logical layout identical across viewports), header/footer/navigation intact, all mapped
 * copy present and unclipped, decorative layers loaded, the embedded app live and contained,
 * and one URL shared by the End Card QR + CTA. Approved references and live exemplars are
 * rendered side by side for review.
 *
 * Usage: node scripts/pdma-template-visual-qa.mjs [--out <dir>]   (BASE_URL defaults to http://localhost:3000)
 * Exit: 0 PASS · 1 FAIL · 2 VISUAL_QA: REQUIRES_EXTERNAL_REVIEW (browser or server unavailable)
 */
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { chromium } from "playwright"
import sharp from "sharp"
import { copyRegistry } from "./pdma-template-copy.mjs"

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const outIndex = process.argv.indexOf("--out")
const outDir = outIndex > 0 ? path.resolve(process.argv[outIndex + 1]) : path.join(os.tmpdir(), "pdma-template-qa")
const route = "/pdma2026-templates/"
const assets = "public/pdma2026-templates/assets"
const kinds = ["title", "end-card", "exercise", "embedded-app", "compare-contrast", "flow-scenario", "decision-spectrum", "hub-ecosystem", "scorecard", "structured-content-action"]
const references = { "end-card": "end-card/end-card-reference-v1.png", "flow-scenario": "flow-scenario/flow-scenario-reference-v1.png", "hub-ecosystem": "hub-ecosystem/hub-ecosystem-reference-v1.png", "structured-content-action": "structured-content-action/structured-content-action-reference-v1.png", "embedded-app": "embedded-app/embedded-app-reference-v1.png" }
const liveExemplars = { title: 1, exercise: 14, "compare-contrast": 3, "decision-spectrum": 8, scorecard: 7 }
const viewports = [
  { name: "desktop-1920x1080", width: 1920, height: 1080 },
  { name: "laptop-1366x768", width: 1366, height: 768 },
  { name: "tablet-portrait-820x1180", width: 820, height: 1180 },
  { name: "tablet-portrait-768x1024", width: 768, height: 1024 },
]
const failures = []
const fail = (message) => failures.push(message)
const requireExternalReview = (reason) => {
  console.log(`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW — ${reason}`)
  process.exit(2)
}

try {
  const response = await fetch(`${baseUrl}${route}`)
  if (!response.ok) requireExternalReview(`${baseUrl}${route} returned ${response.status}`)
} catch (error) {
  requireExternalReview(`server unreachable at ${baseUrl} (${error.message})`)
}

let browser
for (const options of [{}, { channel: "chrome" }]) {
  try { browser = await chromium.launch(options); break } catch { /* try next channel */ }
}
if (!browser) requireExternalReview("no Playwright-compatible browser could be launched")
fs.mkdirSync(outDir, { recursive: true })

const normalize = (text) => text.replace(/ /g, " ").replace(/\s+/g, " ").trim()
const copyFor = (kind) => copyRegistry.filter((entry) => entry.kind === kind).flatMap((entry) => entry.strings)

async function openDeck(page) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" })
  await page.waitForSelector(".pdmat-slide")
  await page.waitForTimeout(700)
}

async function goToSlide(page, index) {
  await page.evaluate(() => (document.activeElement instanceof HTMLElement) && document.activeElement.blur())
  const current = Number((await page.locator(".pdma-count").textContent()).split("/")[0].trim()) - 1
  const key = index > current ? "ArrowRight" : "ArrowLeft"
  for (let i = 0; i < Math.abs(index - current); i += 1) { await page.keyboard.press(key); await page.waitForTimeout(120) }
  await page.waitForFunction((kind) => document.querySelector(".pdmat-slide")?.getAttribute("data-template-kind") === kind, kinds[index])
  await page.waitForTimeout(650)
}

/** In-page measurements for the current slide. Layout is reported in logical canvas pixels. */
async function measure(page) {
  return page.evaluate(() => {
    const canvas = document.querySelector(".pdma-logical-canvas")
    const slide = document.querySelector(".pdmat-slide")
    const canvasRect = canvas.getBoundingClientRect()
    const scale = canvasRect.width / 1920
    const toLogical = (rect) => ({ x: Math.round((rect.left - canvasRect.left) / scale), y: Math.round((rect.top - canvasRect.top) / scale), w: Math.round(rect.width / scale), h: Math.round(rect.height / scale) })
    const layout = {}
    slide.querySelectorAll(".pdmat-stage [class*='pdmat-']").forEach((element, index) => {
      if (element.closest(".pdmat-deco")) return
      layout[`${index}:${element.className.toString().split(" ")[0]}`] = toLogical(element.getBoundingClientRect())
    })
    window.scrollTo(0, 5000)
    const scrolled = window.scrollY
    window.scrollTo(0, 0)
    // Shell chrome glyphs (not the transparent gradient boxes) that slide copy must never sit under.
    const chrome = [...document.querySelectorAll(".pdma-global-row > *, .pdma-bottom-identity > *, .pdma-bottom-bar button")].map((element) => element.getBoundingClientRect()).filter((rect) => rect.width > 0 && rect.height > 0)
    const intersects = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
    const clippedText = []
    const walker = document.createTreeWalker(slide.querySelector(".pdmat-stage"), NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) {
      const node = walker.currentNode
      if (!node.textContent.trim()) continue
      const range = document.createRange()
      range.selectNodeContents(node)
      for (const rect of range.getClientRects()) {
        if (rect.width === 0) continue
        const outsideCanvas = rect.left < canvasRect.left - 1 || rect.right > canvasRect.right + 1 || rect.top < canvasRect.top - 1 || rect.bottom > canvasRect.bottom + 1
        const underChrome = chrome.some((chromeRect) => intersects(rect, chromeRect))
        if (outsideCanvas || underChrome) clippedText.push(`${node.textContent.trim().slice(0, 60)} [${Math.round(rect.top)}–${Math.round(rect.bottom)}]`)
      }
    }
    const hiddenOverflow = [...slide.querySelectorAll(".pdmat-app-frame__viewport, .pdmat-xapp__panel, .pdmat-worksheet, .pdmat-card, .pdmat-scorecard__matrix")]
      .filter((element) => element.scrollHeight > element.clientHeight + 2 || element.scrollWidth > element.clientWidth + 2)
      .map((element) => `${element.className.toString().split(" ")[0]} ${element.scrollWidth}x${element.scrollHeight} > ${element.clientWidth}x${element.clientHeight}`)
    const deco = slide.querySelector(".pdmat-deco")
    const decoImages = [...slide.querySelectorAll(".pdmat-deco-item")]
    return {
      kind: slide.getAttribute("data-template-kind"),
      viewport: { width: innerWidth, height: innerHeight },
      document: { scrollHeight: document.documentElement.scrollHeight, scrollWidth: document.documentElement.scrollWidth, scrolled },
      canvas: { x: canvasRect.left, y: canvasRect.top, width: canvasRect.width, height: canvasRect.height, scale },
      headerLabels: [...document.querySelectorAll(".pdma-global-right b")].map((b) => b.textContent.trim()),
      footerLabel: document.querySelector(".pdma-bottom-identity span")?.textContent.trim(),
      navigation: [...document.querySelectorAll(".pdma-bottom-bar button")].filter((b) => { const r = b.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.bottom <= innerHeight }).length,
      titleBlock: Boolean(document.querySelector(".pdma-logical-canvas .pdma-title-block h1")),
      text: document.body.innerText,
      hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
      layout,
      clippedText,
      hiddenOverflow,
      decoVariant: deco?.getAttribute("data-decorative-variant"),
      decoImages: decoImages.map((img) => ({ src: img.getAttribute("src"), loaded: img.complete && img.naturalWidth > 0 })),
    }
  })
}

const baseline = {}
const report = []
for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: "reduce" })
  const page = await context.newPage()
  const errors = []
  page.on("pageerror", (error) => errors.push(String(error)))
  await openDeck(page)
  fs.mkdirSync(path.join(outDir, viewport.name), { recursive: true })
  for (const [index, kind] of kinds.entries()) {
    if (index > 0) await goToSlide(page, index)
    const shot = path.join(outDir, viewport.name, `t${String(index + 1).padStart(2, "0")}-${kind}.png`)
    await page.screenshot({ path: shot })
    const m = await measure(page)
    const tag = `[${viewport.name}] ${String(index + 1).padStart(2, "0")} ${kind}`
    if (m.kind !== kind) fail(`${tag}: rendered kind ${m.kind}`)
    if (m.document.scrollHeight > m.viewport.height + 1 || m.document.scrollWidth > m.viewport.width + 1 || m.document.scrolled !== 0) fail(`${tag}: document scrolls (${m.document.scrollWidth}x${m.document.scrollHeight}, scrolled ${m.document.scrolled})`)
    if (Math.abs(m.canvas.width / m.canvas.height - 16 / 9) > 0.01) fail(`${tag}: canvas not 16:9 (${m.canvas.width}x${m.canvas.height})`)
    if (m.canvas.x < -1 || m.canvas.y < -1 || m.canvas.x + m.canvas.width > m.viewport.width + 1 || m.canvas.y + m.canvas.height > m.viewport.height + 1) fail(`${tag}: canvas exceeds viewport`)
    if (!m.titleBlock) fail(`${tag}: shell title block missing`)
    if (m.navigation < 4) fail(`${tag}: navigation controls not visible (${m.navigation})`)
    const text = normalize(m.text)
    for (const value of copyFor(kind)) {
      if (value.startsWith("/") || value.startsWith("http")) { if (!m.hrefs.includes(value)) fail(`${tag}: link target missing ${value}`); continue }
      if (!text.includes(normalize(value))) fail(`${tag}: copy missing "${value}"`)
    }
    if (m.clippedText.length) fail(`${tag}: text outside canvas or under header/footer chrome → ${m.clippedText.slice(0, 4).join(" | ")}`)
    if (m.hiddenOverflow.length) fail(`${tag}: hidden overflow → ${m.hiddenOverflow.join(" | ")}`)
    if (m.decoVariant !== "none" && (m.decoImages.length === 0 || m.decoImages.some((img) => !img.loaded))) fail(`${tag}: decorative layer missing/unloaded ${JSON.stringify(m.decoImages)}`)
    if (!baseline[kind]) baseline[kind] = m.layout
    else {
      const drift = Object.entries(baseline[kind]).filter(([key, rect]) => { const other = m.layout[key]; return !other || Math.abs(other.x - rect.x) > 2 || Math.abs(other.y - rect.y) > 2 || Math.abs(other.w - rect.w) > 2 || Math.abs(other.h - rect.h) > 2 })
      if (drift.length) fail(`${tag}: logical layout differs from desktop (stacking/reflow) → ${drift.slice(0, 3).map(([key]) => key).join(", ")}`)
    }
    report.push({ viewport: viewport.name, slide: index + 1, kind, scale: Number(m.canvas.scale.toFixed(4)), header: m.headerLabels.join(" • "), footer: m.footerLabel, deco: m.decoImages.length, screenshot: shot })
  }
  if (errors.length) fail(`[${viewport.name}] page errors: ${errors.join(" | ")}`)

  if (viewport.name.startsWith("desktop")) {
    // End Card: QR and CTA share one URL value.
    await goToSlide(page, 1)
    const urls = await page.evaluate(() => ({ qr: document.querySelector(".pdmat-qr")?.getAttribute("data-qr-value"), qrLink: document.querySelector(".pdmat-download__qr")?.getAttribute("href"), cta: document.querySelector(".pdmat-download__cta")?.getAttribute("href") }))
    if (!urls.qr || urls.qr !== urls.cta || urls.qrLink !== urls.cta) fail(`end-card: QR/CTA URL mismatch ${JSON.stringify(urls)}`)
    await page.locator(".pdmat-download__qr").screenshot({ path: path.join(outDir, "end-card-qr.png") })

    // Embedded app: live, contained, keyboard-isolated, completes the full exercise flow.
    await goToSlide(page, 3)
    const input = page.locator(".pdmat-xapp__initiative input")
    await input.fill("Retention agent")
    for (const key of ["ArrowRight", "Space", "f", "ArrowLeft"]) await input.press(key)
    if ((await page.locator(".pdma-count").textContent())?.trim() !== "4 / 10") fail("embedded-app: typing inside the app changed the slide")
    await page.getByRole("button", { name: /Start exercise/ }).click()
    for (let step = 0; step < 8; step += 1) {
      await page.locator(".pdmat-xapp__choice").first().click()
      const overflow = await page.evaluate(() => { const panel = document.querySelector(".pdmat-xapp__panel"); return panel.scrollHeight > panel.clientHeight + 2 })
      if (overflow) fail(`embedded-app: decision ${step + 1} panel overflows its frame`)
      await page.screenshot({ path: path.join(outDir, `embedded-app-step-${step + 1}.png`) })
      await page.locator(".pdmat-xapp__footer .is-primary").click()
    }
    const result = await page.evaluate(() => {
      const frame = document.querySelector(".pdmat-app-frame__viewport").getBoundingClientRect()
      const app = document.querySelector(".pdmat-xapp").getBoundingClientRect()
      const panel = document.querySelector(".pdmat-xapp__panel")
      return { text: panel.innerText, contained: app.left >= frame.left - 1 && app.right <= frame.right + 1 && app.top >= frame.top - 1 && app.bottom <= frame.bottom + 1, overflow: panel.scrollHeight > panel.clientHeight + 2 }
    })
    await page.screenshot({ path: path.join(outDir, "embedded-app-result.png") })
    if (!/PRODUCTIZATION BRIEF/i.test(result.text) || !result.text.includes("Retention agent")) fail("embedded-app: result brief not generated from live state")
    if (!result.contained) fail("embedded-app: app escapes its frame")
    if (result.overflow) fail("embedded-app: result panel overflows")
  }
  await context.close()
}

// Live exemplars for side-by-side review (desktop).
const liveContext = await browser.newContext({ viewport: { width: 1920, height: 1080 }, reducedMotion: "reduce" })
const livePage = await liveContext.newPage()
await livePage.goto(`${baseUrl}/pdma2026/`, { waitUntil: "networkidle" })
await livePage.waitForTimeout(700)
const liveShots = {}
let current = 1
for (const [kind, slideNumber] of Object.entries(liveExemplars).sort((a, b) => a[1] - b[1])) {
  while (current < slideNumber) { await livePage.keyboard.press("ArrowRight"); current += 1; await livePage.waitForTimeout(250) }
  await livePage.waitForTimeout(700)
  liveShots[kind] = path.join(outDir, `live-slide-${String(slideNumber).padStart(2, "0")}.png`)
  await livePage.screenshot({ path: liveShots[kind] })
}
await liveContext.close()
await browser.close()

const compareDir = path.join(outDir, "compare")
fs.mkdirSync(compareDir, { recursive: true })
const similarity = []
const grey = (file) => sharp(file).resize(192, 108, { fit: "fill" }).greyscale().raw().toBuffer()
for (const [index, kind] of kinds.entries()) {
  const target = references[kind] ? path.join(assets, references[kind]) : liveShots[kind]
  if (!target) continue
  const render = path.join(outDir, viewports[0].name, `t${String(index + 1).padStart(2, "0")}-${kind}.png`)
  const refBuffer = await sharp(target).resize(1920, 1080, { fit: "fill" }).png().toBuffer()
  const [a, b] = await Promise.all([grey(render), grey(refBuffer)])
  const meanDiff = a.reduce((sum, value, i) => sum + Math.abs(value - b[i]), 0) / a.length
  similarity.push({ kind, against: references[kind] ? "approved reference" : "live exemplar", meanAbsDiff: Number(meanDiff.toFixed(2)) })
  await sharp({ create: { width: 3860, height: 1080, channels: 3, background: "#202020" } })
    .composite([{ input: render, left: 0, top: 0 }, { input: refBuffer, left: 1940, top: 0 }]).png().toFile(path.join(compareDir, `${kind}-side-by-side.png`))
  await sharp(render).composite([{ input: await sharp(refBuffer).ensureAlpha(0.5).png().toBuffer(), blend: "over" }]).png().toFile(path.join(compareDir, `${kind}-overlay.png`))
}

fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify({ baseUrl, failures, similarity, report }, null, 2))
console.log(`screenshots: ${outDir}`)
console.table(similarity)
if (failures.length) {
  console.error(`VISUAL_QA: FAIL (${failures.length})`)
  for (const message of failures) console.error(`  ✗ ${message}`)
  process.exit(1)
}
console.log(`VISUAL_QA: PASS — ${report.length} captures across ${viewports.length} viewports; no scroll, no stacking, chrome intact, copy present, decoration loaded, embedded app live`)
