#!/usr/bin/env node
/**
 * Browser QA for the production /pdma2026 deck (Playwright, existing repo dependency).
 *
 * Per viewport × slide: no document scroll, one uniformly scaled 16:9 canvas, logical layout
 * identical across viewports (no stacking), header/footer/count intact, canonical copy present
 * and unclipped, decoration loaded, A.G.E.N.T.S. not named before Slide 11.
 * Fidelity: template-mapped slides vs the accepted /pdma2026-templates renders; preserved slides
 * vs pre-migration reference captures (--reference-dir, files 1920x1080-sNN.png).
 * Functional: arrow navigation, TOC, fullscreen, Slide 14 exercise link + route, Slide 16 CTA/QR.
 * (The Slide 15 embedded exercise is walked frame by frame by pdma-exercise-qa.mjs.)
 *
 * Usage: node scripts/pdma-deck-visual-qa.mjs [--route /pdma2026/] [--reference-dir <dir>] [--out <dir>]
 * Exit: 0 PASS · 1 FAIL · 2 VISUAL_QA: REQUIRES_EXTERNAL_REVIEW (browser or server unavailable)
 */
import { spawnSync } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { chromium } from "playwright"
import sharp from "sharp"
import { deckCopyRegistry } from "./pdma-deck-copy.mjs"

const arg = (name, fallback) => { const index = process.argv.indexOf(name); return index > 0 ? process.argv[index + 1] : fallback }
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const route = arg("--route", "/pdma2026/")
const referenceDir = arg("--reference-dir", null)
const outDir = path.resolve(arg("--out", path.join(os.tmpdir(), "pdma-deck-qa")))
const KIT_URL = "https://github.com/jimmarkunas/agents-enterprise-ai-operating-model"
const compositions = ["title", "shift-boundary", "compare-contrast", "work-map", "ambiguity-gate", "hub-ecosystem", "scorecard", "decision-spectrum", "flow-scenario", "structured-content-action", "agents-reveal", "framework-to-product", "idea-to-spec", "exercise", "embedded-app", "end-card"]
/** Production slide → accepted template gallery slide. */
const templateMap = { 1: 1, 3: 5, 6: 8, 7: 9, 8: 7, 9: 6, 10: 10, 14: 3, 15: 4, 16: 2 }
/**
 * Preserved slides vs pre-migration captures. 04/11/12 intentionally expose copy the legacy
 * geometry hid beneath the footer, so their budgets allow that measured shift.
 */
const preservedBudget = { 2: 1.5, 4: 6, 5: 1.5, 11: 12, 12: 12, 13: 3 }
const TEMPLATE_BUDGET = 0.8
const viewports = [
  { name: "desktop-1920x1080", width: 1920, height: 1080 },
  { name: "laptop-1366x768", width: 1366, height: 768 },
  { name: "tablet-portrait-820x1180", width: 820, height: 1180 },
  { name: "tablet-portrait-768x1024", width: 768, height: 1024 },
]
const failures = []
const notes = []
const fail = (message) => failures.push(message)
const external = (reason) => { console.log(`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW — ${reason}`); process.exit(2) }
const normalize = (text) => text.replace(/ /g, " ").replace(/\s+/g, " ").trim()

try { const response = await fetch(`${baseUrl}${route}`); if (!response.ok) external(`${route} returned ${response.status}`) } catch (error) { external(`server unreachable at ${baseUrl} (${error.message})`) }
let browser
for (const options of [{}, { channel: "chrome" }]) { try { browser = await chromium.launch(options); break } catch { /* next channel */ } }
if (!browser) external("no Playwright-compatible browser could be launched")
fs.mkdirSync(outDir, { recursive: true })

const currentIndex = async (page) => Number((await page.locator(".pdma-count").textContent()).split("/")[0].trim()) - 1
async function goTo(page, index) {
  await page.evaluate(() => document.activeElement instanceof HTMLElement && document.activeElement.blur())
  const current = await currentIndex(page)
  const key = index > current ? "ArrowRight" : "ArrowLeft"
  for (let i = 0; i < Math.abs(index - current); i += 1) { await page.keyboard.press(key); await page.waitForTimeout(110) }
  await page.waitForFunction((kind) => document.querySelector(".pdmat-slide")?.getAttribute("data-template-kind") === kind, compositions[index])
  await page.waitForTimeout(650)
}

async function measure(page) {
  return page.evaluate(() => {
    const canvasRect = document.querySelector(".pdma-logical-canvas").getBoundingClientRect()
    const slide = document.querySelector(".pdmat-slide")
    const scale = canvasRect.width / 1920
    const layout = {}
    slide.querySelectorAll(".pdmat-stage [class*='pdmat-']").forEach((element, index) => {
      const rect = element.getBoundingClientRect()
      layout[`${index}:${element.className.toString().split(" ")[0]}`] = [rect.left - canvasRect.left, rect.top - canvasRect.top, rect.width, rect.height].map((value) => Math.round(value / scale))
    })
    window.scrollTo(0, 5000)
    const scrolled = window.scrollY
    window.scrollTo(0, 0)
    const chrome = [...document.querySelectorAll(".pdma-global-row > *, .pdma-bottom-identity > *, .pdma-bottom-bar button")].map((el) => el.getBoundingClientRect()).filter((r) => r.width && r.height)
    const hit = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
    const clipped = []
    const walker = document.createTreeWalker(slide.querySelector(".pdmat-stage"), NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) {
      const node = walker.currentNode
      if (!node.textContent.trim()) continue
      const range = document.createRange(); range.selectNodeContents(node)
      for (const rect of range.getClientRects()) {
        if (!rect.width) continue
        const outside = rect.left < canvasRect.left - 1 || rect.right > canvasRect.right + 1 || rect.top < canvasRect.top - 1 || rect.bottom > canvasRect.bottom + 1
        if (outside || chrome.some((c) => hit(rect, c))) clipped.push(`${node.textContent.trim().slice(0, 50)} [${Math.round(rect.top)}–${Math.round(rect.bottom)}]`)
      }
    }
    const overflow = [...slide.querySelectorAll(".pdmat-stage *")].filter((el) => { const cs = getComputedStyle(el); return (cs.overflow === "hidden" || cs.overflow === "clip") && (el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2) }).map((el) => el.className.toString().split(" ")[0])
    return {
      kind: slide.getAttribute("data-template-kind"),
      viewport: [innerWidth, innerHeight],
      doc: [document.documentElement.scrollWidth, document.documentElement.scrollHeight, scrolled],
      canvas: [canvasRect.left, canvasRect.top, canvasRect.width, canvasRect.height],
      header: [...document.querySelectorAll(".pdma-global-right b")].map((b) => b.textContent.trim()),
      footer: document.querySelector(".pdma-bottom-identity span")?.textContent.trim(),
      count: document.querySelector(".pdma-count")?.textContent.trim(),
      nav: [...document.querySelectorAll(".pdma-bottom-bar button")].filter((b) => { const r = b.getBoundingClientRect(); return r.width && r.bottom <= innerHeight }).length,
      title: Boolean(document.querySelector(".pdma-logical-canvas .pdma-title-block h1")),
      bodyText: document.querySelector(".pdma-slide-layer").innerText,
      nodes: (() => { const out = []; const w = document.createTreeWalker(document.querySelector(".pdma-slide-layer"), NodeFilter.SHOW_TEXT); while (w.nextNode()) out.push(w.currentNode.textContent); return out.join(" ") })(),
      decoImages: [...slide.querySelectorAll(".pdmat-deco-item")].map((img) => img.complete && img.naturalWidth > 0),
      layout, clipped, overflow,
    }
  })
}

const baseline = {}
let captures = 0
for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: "reduce" })
  const page = await context.newPage()
  const errors = []
  page.on("pageerror", (error) => errors.push(String(error)))
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" })
  await page.waitForSelector(".pdmat-slide")
  await page.waitForTimeout(700)
  fs.mkdirSync(path.join(outDir, viewport.name), { recursive: true })
  for (let index = 0; index < 16; index += 1) {
    if (index > 0) await goTo(page, index)
    const shot = path.join(outDir, viewport.name, `s${String(index + 1).padStart(2, "0")}.png`)
    await page.screenshot({ path: shot })
    captures += 1
    const m = await measure(page)
    const tag = `[${viewport.name}] ${String(index + 1).padStart(2, "0")}`
    const expected = deckCopyRegistry[index]
    if (m.kind !== compositions[index]) fail(`${tag}: composition ${m.kind} ≠ ${compositions[index]}`)
    if (m.count !== `${index + 1} / 16`) fail(`${tag}: slide count "${m.count}"`)
    if (m.doc[0] > m.viewport[0] + 1 || m.doc[1] > m.viewport[1] + 1 || m.doc[2] !== 0) fail(`${tag}: document scrolls ${m.doc}`)
    if (Math.abs(m.canvas[2] / m.canvas[3] - 16 / 9) > 0.01 || m.canvas[0] < -1 || m.canvas[1] < -1 || m.canvas[0] + m.canvas[2] > m.viewport[0] + 1 || m.canvas[1] + m.canvas[3] > m.viewport[1] + 1) fail(`${tag}: canvas not a contained 16:9 plane ${m.canvas}`)
    if (!m.title || m.nav < 4) fail(`${tag}: title block or navigation missing`)
    if (JSON.stringify(m.header) !== JSON.stringify(expected.header) || m.footer !== expected.footer) fail(`${tag}: chrome drift ${m.header.join(" • ")} / ${m.footer}`)
    const haystack = `${normalize(m.nodes)} || ${normalize(m.bodyText)}`
    for (const value of expected.body) if (!haystack.includes(normalize(value))) fail(`${tag}: copy missing "${value}"`)
    if (index < 10 && /A\.G\.E\.N\.T\.S/.test(m.bodyText)) fail(`${tag}: names A.G.E.N.T.S. before Slide 11`)
    if (m.clipped.length) fail(`${tag}: text clipped or under chrome → ${m.clipped.slice(0, 3).join(" | ")}`)
    if (m.overflow.length) fail(`${tag}: hidden overflow → ${m.overflow.join(", ")}`)
    if (m.decoImages.some((loaded) => !loaded)) fail(`${tag}: decoration failed to load`)
    if (!baseline[index]) baseline[index] = m.layout
    else {
      const drift = Object.entries(baseline[index]).filter(([key, rect]) => !m.layout[key] || rect.some((value, i) => Math.abs(value - m.layout[key][i]) > 2))
      if (drift.length) fail(`${tag}: layout differs from desktop (stacking/reflow) → ${drift.slice(0, 3).map(([key]) => key).join(", ")}`)
    }
  }
  if (errors.length) fail(`[${viewport.name}] page errors: ${errors.join(" | ")}`)

  if (viewport.name.startsWith("desktop")) {
    // Navigation: back through the deck with ArrowLeft.
    for (let index = 14; index >= 0; index -= 1) { await page.keyboard.press("ArrowLeft"); await page.waitForTimeout(90) }
    await page.waitForTimeout(600)
    if ((await currentIndex(page)) !== 0) fail("navigation: ArrowLeft did not return to slide 1")
    // TOC: 16 entries, selecting entry 9 lands on Slide 09.
    await page.locator(".pdma-count").click()
    const dialog = page.getByRole("dialog")
    await dialog.waitFor()
    const entries = await dialog.locator("li").count()
    if (entries !== 16) fail(`TOC: ${entries} entries`)
    const tocTitles = (await dialog.locator("li").allInnerTexts()).map((text) => normalize(text).replace(/^\d+ \/ \d+ /, ""))
    deckCopyRegistry.forEach(({ toc }, i) => { if (!normalize(tocTitles[i] ?? "").includes(toc)) fail(`TOC entry ${i + 1}: "${tocTitles[i]}" ≠ "${toc}"`) })
    await dialog.locator("li").nth(8).locator("button, a").first().click()
    await page.waitForTimeout(700)
    if ((await currentIndex(page)) !== 8 || (await page.getAttribute(".pdmat-slide", "data-template-kind")) !== compositions[8]) fail("TOC: selecting entry 9 did not navigate to Slide 09")
    // Fullscreen (browser permitting).
    const fullscreen = await page.evaluate(async () => { try { await document.querySelector(".pdma-bottom-right button:last-child").click(); await new Promise((r) => setTimeout(r, 400)); const on = Boolean(document.fullscreenElement); if (on) await document.exitFullscreen(); return on ? "entered" : "not granted" } catch (error) { return `error ${error}` } })
    notes.push(`fullscreen: ${fullscreen}`)
    // Slide 14 exercise link + route.
    await goTo(page, 13)
    const worksheet = await page.evaluate(() => { const a = document.querySelector(".pdmat-worksheet"); return { href: a?.getAttribute("href"), target: a?.getAttribute("target"), tabIndex: a?.tabIndex } })
    if (worksheet.href !== "/pdma2026/exercise" || worksheet.tabIndex < 0) fail(`Slide 14 worksheet link invalid ${JSON.stringify(worksheet)}`)
    const [exercisePage] = await Promise.all([context.waitForEvent("page"), page.locator(".pdmat-worksheet").click()])
    await exercisePage.waitForLoadState("networkidle")
    const response = await fetch(`${baseUrl}/pdma2026/exercise`)
    if (response.status !== 200) fail(`/pdma2026/exercise returned ${response.status}`)
    await exercisePage.getByRole("button", { name: /Start Challenge/ }).click()
    const next = exercisePage.locator(".pdmax__footer .is-primary")
    const disabledBefore = await next.isDisabled()
    await exercisePage.getByRole("button", { name: /YES$/ }).click()
    if (!disabledBefore || !(await next.isEnabled())) fail("/pdma2026/exercise: not interactive (foundation answer did not enable Next)")
    notes.push(`exercise: opened from Slide 14 (${exercisePage.url().replace(baseUrl, "")}), 200, interactive`)
    await exercisePage.close()
    // Slide 16 CTA + QR share one URL; decode the rendered QR.
    await goTo(page, 15)
    const urls = await page.evaluate(() => ({ qr: document.querySelector(".pdmat-qr")?.getAttribute("data-qr-value"), qrLink: document.querySelector(".pdmat-download__qr")?.getAttribute("href"), cta: document.querySelector(".pdmat-download__cta")?.getAttribute("href"), ctaText: document.querySelector(".pdmat-download__cta")?.textContent }))
    if (urls.cta !== KIT_URL || urls.qr !== KIT_URL || urls.qrLink !== KIT_URL) fail(`Slide 16 QR/CTA URL mismatch ${JSON.stringify(urls)}`)
    const qrShot = path.join(outDir, "slide-16-qr.png")
    await page.locator(".pdmat-download__qr").screenshot({ path: qrShot })
    const decode = spawnSync("python3", ["-c", "import cv2,sys; v,_,_=cv2.QRCodeDetector().detectAndDecode(cv2.imread(sys.argv[1])); print(v)", qrShot], { encoding: "utf8" })
    if (decode.status === 0) { const value = decode.stdout.trim(); if (value !== KIT_URL) fail(`Slide 16 QR decodes to "${value}"`); else notes.push(`QR decode: ${value}`) } else notes.push("QR decode: decoder unavailable")
  }
  await context.close()
}

// Fidelity comparisons (desktop, slide body band only — chrome labels/progress legitimately differ).
const gallery = await browser.newContext({ viewport: { width: 1920, height: 1080 }, reducedMotion: "reduce" })
const galleryPage = await gallery.newPage()
await galleryPage.goto(`${baseUrl}/pdma2026-templates/`, { waitUntil: "networkidle" })
await galleryPage.waitForTimeout(700)
const galleryShots = {}
for (let slide = 1; slide <= 10; slide += 1) {
  if (slide > 1) await galleryPage.keyboard.press("ArrowRight")
  await galleryPage.waitForTimeout(800)
  galleryShots[slide] = path.join(outDir, `gallery-t${String(slide).padStart(2, "0")}.png`)
  await galleryPage.screenshot({ path: galleryShots[slide] })
}
await gallery.close()
await browser.close()

const band = (file) => sharp(file).extract({ left: 0, top: 100, width: 1920, height: 885 }).resize(480, 221, { fit: "fill" }).greyscale().raw().toBuffer()
const meanDiff = async (a, b) => { const [x, y] = await Promise.all([band(a), band(b)]); return x.reduce((sum, value, i) => sum + Math.abs(value - y[i]), 0) / x.length }
const fidelity = []
for (let slide = 1; slide <= 16; slide += 1) {
  const render = path.join(outDir, viewports[0].name, `s${String(slide).padStart(2, "0")}.png`)
  if (templateMap[slide]) {
    const diff = await meanDiff(render, galleryShots[templateMap[slide]])
    fidelity.push({ slide, against: `template ${templateMap[slide]}`, meanAbsDiff: Number(diff.toFixed(3)), budget: TEMPLATE_BUDGET })
    if (diff > TEMPLATE_BUDGET) fail(`fidelity: slide ${slide} differs from accepted template ${templateMap[slide]} (${diff.toFixed(2)})`)
  } else if (referenceDir) {
    const reference = path.join(referenceDir, `1920x1080-s${String(slide).padStart(2, "0")}.png`)
    if (!fs.existsSync(reference)) { fail(`fidelity: missing pre-migration reference for slide ${slide}`); continue }
    const diff = await meanDiff(render, reference)
    fidelity.push({ slide, against: "pre-migration capture", meanAbsDiff: Number(diff.toFixed(3)), budget: preservedBudget[slide] })
    if (diff > preservedBudget[slide]) fail(`fidelity: preserved slide ${slide} drifted from its pre-migration composition (${diff.toFixed(2)} > ${preservedBudget[slide]})`)
  } else notes.push(`slide ${slide}: no --reference-dir supplied; preserved fidelity not asserted`)
}

fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify({ route, failures, notes, fidelity }, null, 2))
console.log(`screenshots: ${outDir}`)
console.table(fidelity)
for (const note of notes) console.log(`note: ${note}`)
if (failures.length) { console.error(`VISUAL_QA: FAIL (${failures.length})`); for (const message of failures) console.error(`  ✗ ${message}`); process.exit(1) }
console.log(`VISUAL_QA: PASS — ${captures} captures across ${viewports.length} viewports; 16/16 slides, no scroll, no stacking, chrome intact, canonical copy present, fidelity within budget`)
