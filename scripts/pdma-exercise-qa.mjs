#!/usr/bin/env node
/**
 * PDMA exercise proof (Playwright, existing repo dependency).
 *
 * 1. SCC parity: drives the Secure Carolinas challenge (/securecarolinas2026) and the PDMA exercise
 *    with identical answers and compares production decision, operating profile, and all six statuses.
 * 2. Flow parity: 9 steps, foundation NO blocks with "FOUNDATION BLOCKER", next disabled until a
 *    selection, back keeps the selection, reset returns to the intro with SCC initial state.
 * 3. Brief: only after the decision; mirrors the exact selections/statuses/profile/conditions;
 *    decision unchanged; Copy Brief puts the same information on the clipboard.
 * 4. Fit: every frame inside Slide 15's embedded app frame at 1920×1080 — no overflow, no clipping,
 *    no collision with the app footer — plus the standalone /pdma2026/exercise route.
 *
 * Usage: node scripts/pdma-exercise-qa.mjs [--out <dir>]   (BASE_URL defaults to http://localhost:3000)
 */
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { chromium } from "playwright"

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const outIndex = process.argv.indexOf("--out")
const outDir = path.resolve(outIndex > 0 ? process.argv[outIndex + 1] : path.join(os.tmpdir(), "pdma-exercise-qa"))
fs.mkdirSync(outDir, { recursive: true })
const failures = []
const fail = (message) => failures.push(message)
const LETTERS = ["A", "G", "E", "N", "T", "S"]

// Choice indices for A..S plus business-value index.
const fixedCases = { go: [[1, 1, 2, 1, 1, 1], 2], conditions: [[2, 1, 2, 2, 1, 1], 0], nogo: [[0, 0, 0, 0, 0, 0], 1], allPartial: [[2, 2, 1, 0, 0, 0], 2] }
let seed = 20260924
const random = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648 }
const cases = { ...fixedCases }
for (let i = 0; i < 12; i += 1) cases[`random${i + 1}`] = [LETTERS.map(() => Math.floor(random() * 3)), Math.floor(random() * 3)]

let browser
for (const options of [{}, { channel: "chrome" }]) { try { browser = await chromium.launch(options); break } catch { /* next channel */ } }
if (!browser) { console.log("EXERCISE_QA: REQUIRES_EXTERNAL_REVIEW — no Playwright-compatible browser"); process.exit(2) }
const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, reducedMotion: "reduce" })
await context.grantPermissions(["clipboard-read", "clipboard-write"], { origin: baseUrl })

// ── Secure Carolinas reference (functional master) ──
const scc = await context.newPage()
await scc.goto(`${baseUrl}/securecarolinas2026/`, { waitUntil: "networkidle" })
await scc.waitForTimeout(700)
for (let i = 0; i < 40 && !(await scc.getByRole("button", { name: /Start Challenge/ }).isVisible().catch(() => false)); i += 1) { await scc.keyboard.press("ArrowRight"); await scc.waitForTimeout(220) }
const sccSection = scc.locator("section[aria-labelledby=production-readiness-check]").first()
async function runScc([picks, value]) {
  const next = () => sccSection.locator("button").last().click()
  await scc.getByRole("button", { name: /Start Challenge/ }).click()
  for (let i = 0; i < 2; i += 1) { await sccSection.getByRole("button", { name: /YES$/ }).click(); await next() }
  await sccSection.locator("fieldset button").nth(value).click(); await next()
  for (let c = 0; c < 6; c += 1) { await sccSection.locator("fieldset button").nth(picks[c]).click(); await next() }
  const text = (await sccSection.innerText()).replace(/\s+/g, " ")
  const result = {
    decision: text.match(/Decision (GO WITH CONDITIONS|NO GO|GO|INCOMPLETE)/)?.[1],
    profile: ["AUTONOMY", "HUMAN LOAD", "OPERATIONAL RISK"].map((field) => text.match(new RegExp(`${field} (LOW|MODERATE|HIGH|—)`))?.[1]),
    statuses: LETTERS.map((letter) => text.match(new RegExp(`${letter} · [A-Za-z& ]+? (DEFINED|PARTIAL|UNCLEAR)`))?.[1]),
  }
  await sccSection.getByRole("button", { name: /RESET CHALLENGE/ }).click()
  return result
}

// ── PDMA exercise (deck Slide 15) ──
const deck = await context.newPage()
await deck.goto(`${baseUrl}/pdma2026/`, { waitUntil: "networkidle" })
await deck.waitForTimeout(700)
for (let i = 0; i < 14; i += 1) { await deck.keyboard.press("ArrowRight"); await deck.waitForTimeout(120) }
await deck.waitForFunction(() => document.querySelector(".pdmat-slide")?.getAttribute("data-template-kind") === "embedded-app")
await deck.waitForTimeout(700)
if ((await deck.locator(".pdma-count").textContent())?.trim() !== "15 / 16") fail("deck: exercise is not Slide 15 of 16")

let shots = 0
const viewportHeights = new Map()
async function assertFrame(page, label, save = false) {
  const m = await page.evaluate(() => {
    const app = document.querySelector(".pdmax")
    const appRect = app.getBoundingClientRect()
    const frame = document.querySelector(".pdmat-app-frame__viewport")?.getBoundingClientRect() ?? appRect
    const footer = app.querySelector(".pdmax__footer")?.getBoundingClientRect()
    const scrollers = [app, ...app.querySelectorAll(".pdmax__stage, .pdmax__brief-body, .pdmax__intro-body, .pdmax__fieldset, .pdmax__brief-rail, .pdmax__brief-controls")].filter((el) => el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1).map((el) => el.className)
    const clipped = []
    const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) {
      const node = walker.currentNode
      if (!node.textContent.trim() || node.parentElement.closest(".pdmax__sr")) continue
      const inFooter = Boolean(node.parentElement.closest(".pdmax__footer"))
      const range = document.createRange(); range.selectNodeContents(node)
      for (const r of range.getClientRects()) {
        if (!r.width) continue
        const outside = r.left < appRect.left - 1 || r.right > appRect.right + 1 || r.top < appRect.top - 1 || r.bottom > appRect.bottom + 1
        const underFooter = !inFooter && footer && r.bottom > footer.top + 1
        if (outside || underFooter) clipped.push(node.textContent.trim().slice(0, 40))
      }
    }
    const contained = appRect.left >= frame.left - 1 && appRect.right <= frame.right + 1 && appRect.top >= frame.top - 1 && appRect.bottom <= frame.bottom + 1
    return { viewportHeight: Math.round(frame.height), frame: app.getAttribute("data-frame"), scrollers, clipped, contained, doc: document.documentElement.scrollHeight <= innerHeight + 1 }
  })
  if (m.scrollers.length) fail(`${label} [${m.frame}]: internal overflow → ${m.scrollers.join(", ")}`)
  if (m.clipped.length) fail(`${label} [${m.frame}]: clipped/colliding text → ${m.clipped.slice(0, 3).join(" | ")}`)
  if (!m.contained) fail(`${label} [${m.frame}]: app escapes its frame`)
  if (!m.doc) fail(`${label}: page scrolls`)
  // The app may never resize its host: every frame must see the same viewport height on a page.
  if (!viewportHeights.has(page)) viewportHeights.set(page, m.viewportHeight)
  else if (viewportHeights.get(page) !== m.viewportHeight) fail(`${label} [${m.frame}]: host viewport resized ${viewportHeights.get(page)} → ${m.viewportHeight}px`)
  if (save) await page.screenshot({ path: path.join(outDir, `${String(++shots).padStart(2, "0")}-${label}-${m.frame}.png`) })
  return m.frame
}

const app = deck.locator(".pdmax")
const primary = () => app.locator(".pdmax__footer .is-primary").click()
async function runPdma([picks, value], { walk = false, label = "case" } = {}) {
  if ((await app.getAttribute("data-frame")) !== "intro") fail(`${label}: did not start on intro`)
  if (walk) await assertFrame(deck, `${label}-intro`, true)
  await app.getByRole("button", { name: /Start Challenge/ }).click()
  // The pressed button unmounts; deck arrow keys must still stay inside the app.
  await deck.keyboard.press("ArrowRight")
  if ((await deck.locator(".pdma-count").textContent())?.trim() !== "15 / 16") fail(`${label}: ArrowRight after Start Challenge left Slide 15`)
  // Step 1–2: foundation, incl. NO blocker behavior.
  for (const [step, name] of [[1, "systems"], [2, "ownership"]]) {
    if ((await app.getAttribute("data-frame")) !== `step-${step}`) fail(`${label}: expected step-${step}`)
    if (!(await app.locator(".pdmax__footer .is-primary").isDisabled())) fail(`${label}: ${name} next enabled before an answer`)
    if (walk) await assertFrame(deck, `${label}-${name}`, true)
    await app.getByRole("button", { name: /NO$/ }).click()
    const blocked = app.locator(".pdmax__footer .is-primary")
    if (!(await blocked.isDisabled()) || (await blocked.textContent())?.trim() !== "FOUNDATION BLOCKER" || !(await app.locator(".pdmax__blocker").isVisible())) fail(`${label}: ${name} NO did not block as SCC does`)
    if (walk) await assertFrame(deck, `${label}-${name}-nogo`, true)
    await app.getByRole("button", { name: /YES$/ }).click()
    await primary()
  }
  // Step 3: business value.
  if (!(await app.locator(".pdmax__footer .is-primary").isDisabled())) fail(`${label}: value next enabled before a selection`)
  await app.locator(".pdmax__choice").nth(value).click()
  if ((await app.locator(".pdmax__footer .is-primary").textContent())?.trim() !== "Continue to A.G.E.N.T.S.") fail(`${label}: value step next label differs from SCC`)
  if (walk) await assertFrame(deck, `${label}-value`, true)
  await primary()
  // Steps 4–9: A.G.E.N.T.S.
  for (let c = 0; c < 6; c += 1) {
    if ((await app.getAttribute("data-frame")) !== `step-${c + 4}`) fail(`${label}: expected step-${c + 4}`)
    if (!(await app.locator(".pdmax__footer .is-primary").isDisabled())) fail(`${label}: ${LETTERS[c]} next enabled before a selection`)
    if ((await app.locator(".pdmax__choice").count()) !== 3) fail(`${label}: ${LETTERS[c]} does not show 3 choices`)
    await app.locator(".pdmax__choice").nth(picks[c]).click()
    if (walk) await assertFrame(deck, `${label}-${LETTERS[c]}`, true)
    if (c === 0) {
      await app.getByRole("button", { name: /^Back$/ }).click()
      if ((await app.locator(".pdmax__choice[aria-pressed=true]").count()) !== 1) fail(`${label}: back did not keep the business-value selection`)
      await primary()
      if ((await app.locator(".pdmax__choice[aria-pressed=true]").count()) !== 1) fail(`${label}: returning to A lost its selection`)
    }
    if (c === 5 && (await app.locator(".pdmax__footer .is-primary").textContent())?.trim() !== "See Production Decision") fail(`${label}: last step label differs from SCC`)
    await primary()
  }
  // Decision frame.
  if (await app.getByRole("button", { name: /COPY BRIEF/ }).count()) fail(`${label}: brief actions visible before the brief`)
  if (walk) await assertFrame(deck, `${label}-decision`, true)
  const result = await app.evaluate((el) => ({
    decision: el.getAttribute("data-decision"),
    profile: [...el.querySelectorAll(".pdmax__profile .pdmax__tile-value")].map((n) => n.textContent.trim()),
    statuses: [...el.querySelectorAll(".pdmax__statuses li")].map((n) => n.getAttribute("data-status")),
  }))
  // Brief frame.
  await app.getByRole("button", { name: /BUILD MY PRODUCTIZATION BRIEF/ }).click()
  if ((await app.getAttribute("data-frame")) !== "brief") fail(`${label}: brief did not open`)
  if ((await app.getAttribute("data-decision")) !== result.decision) fail(`${label}: brief changed the decision`)
  if (walk) await assertFrame(deck, `${label}-brief`, true)
  const brief = await app.evaluate((el) => ({
    text: el.innerText.replace(/\s+/g, " "),
    rows: [...el.querySelectorAll(".pdmax__brief-controls li")].map((li) => ({ letter: li.querySelector(".pdmax__brief-letter").textContent, status: li.getAttribute("data-status"), text: li.innerText.replace(/\s+/g, " ") })),
    conditions: [...el.querySelectorAll(".pdmax__conditions li")].map((li) => li.textContent),
  }))
  await deck.bringToFront()
  await app.getByRole("button", { name: /COPY BRIEF/ }).click()
  await deck.waitForTimeout(150)
  const clipboard = await deck.evaluate(() => navigator.clipboard.readText())
  if (!(await app.getByRole("button", { name: /^COPIED$/ }).count())) fail(`${label}: copy confirmation missing`)
  await app.getByRole("button", { name: /PRODUCTION DECISION/ }).click()
  if ((await app.getAttribute("data-frame")) !== "decision" || (await app.getAttribute("data-decision")) !== result.decision) fail(`${label}: returning from the brief changed the decision frame`)
  await app.getByRole("button", { name: /RESET CHALLENGE/ }).click()
  if ((await app.getAttribute("data-frame")) !== "intro") fail(`${label}: reset did not return to the intro`)
  return { result, brief, clipboard }
}

// Brief expectations come from the SCC scenario data itself.
const scenarioSource = fs.readFileSync("src/content/secure-carolinas-2026/presentationContent.ts", "utf8")
const scenarioBlock = scenarioSource.slice(scenarioSource.indexOf("customerOrderException: {"), scenarioSource.indexOf("resetLabel"))
const controlData = scenarioBlock.split(/\n\s+\{\n\s+letter: /).slice(1).map((chunk) => ({
  letter: chunk.match(/^"(\w)"/)[1],
  choices: [...chunk.matchAll(/label: "([^"]+)",\s+description:\s+"([^"]+)",\s+resultingStatus: "(\w+)",\s+tradeoff: "([^"]+)"/g)].map(([, label, description, status, tradeoff]) => ({ label, description, status, tradeoff })),
}))
const values = ["INCREASE ROI", "DECREASE COST", "INCREASE OPERATIONAL EFFICIENCY"]
const nextSteps = { GO: "Ready to translate into backlog items, acceptance criteria, and operating measures.", "GO WITH CONDITIONS": "Resolve the listed conditions before unconstrained rollout.", "NO GO": "Resolve the listed blockers before production approval." }

let compared = 0
for (const [name, testCase] of Object.entries(cases)) {
  const expected = await runScc(testCase)
  const { result, brief, clipboard } = await runPdma(testCase, { walk: name in fixedCases, label: name })
  compared += 1
  if (JSON.stringify(expected) !== JSON.stringify(result)) fail(`${name}: SCC ${JSON.stringify(expected)} ≠ PDMA ${JSON.stringify(result)}`)
  const [picks, value] = testCase
  const chosen = picks.map((pick, c) => controlData[c].choices[pick])
  chosen.forEach((choice, c) => {
    const row = brief.rows[c]
    for (const field of [choice.label, choice.description, choice.tradeoff]) {
      if (!row?.text.includes(field)) fail(`${name}: brief row ${LETTERS[c]} missing "${field.slice(0, 40)}"`)
      if (!clipboard.includes(field)) fail(`${name}: clipboard missing "${field.slice(0, 40)}"`)
    }
    if (row?.status !== choice.status) fail(`${name}: brief ${LETTERS[c]} status ${row?.status} ≠ ${choice.status}`)
  })
  const expectedConditions = chosen.map((choice, c) => ({ ...choice, letter: LETTERS[c] })).filter(({ status }) => status !== "DEFINED")
  // On screen each condition is "<letter> · <control> — <status>" (the choice sits in its A–S row); the clipboard adds ": <choice>".
  if (expectedConditions.length ? brief.conditions.length !== expectedConditions.length || expectedConditions.some(({ letter, status, label }) => !brief.conditions.some((item) => item.startsWith(`${letter} ·`) && item.endsWith(`— ${status}`)) || !new RegExp(`^- ${letter} · .+ — ${status}: ${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "m").test(clipboard)) : !/All six A\.G\.E\.N\.T\.S\. controls are DEFINED/.test(brief.conditions.join(" ") + clipboard)) fail(`${name}: conditions ${JSON.stringify(brief.conditions)} do not match selections`)
  for (const needle of [values[value], result.decision, ...result.profile, nextSteps[result.decision], "Customer Order Exception Agent", "Systems inventory YES", "Defined ownership YES"]) {
    if (!brief.text.toUpperCase().includes(needle.toUpperCase())) fail(`${name}: brief missing "${needle}"`)
    if (!clipboard.includes(needle)) fail(`${name}: clipboard missing "${needle}"`)
  }
}

// Reset returns to SCC initial state (nothing preselected, next disabled).
await app.getByRole("button", { name: /Start Challenge/ }).click()
if ((await app.locator(".pdmax__choice[aria-pressed=true]").count()) !== 0 || !(await app.locator(".pdmax__footer .is-primary").isDisabled())) fail("reset: state not returned to initial")

// Standalone route: same component, full walk.
const standalone = await context.newPage()
await standalone.goto(`${baseUrl}/pdma2026/exercise/`, { waitUntil: "networkidle" })
await standalone.waitForTimeout(600)
if ((await standalone.locator(".pdmax").count()) !== 1 || (await standalone.locator(".pdma-global-header, .pdma-bottom-bar").count()) !== 0) fail("standalone: expected one exercise and no presentation chrome")
await assertFrame(standalone, "standalone-intro", true)
const s = standalone.locator(".pdmax")
await s.getByRole("button", { name: /Start Challenge/ }).click()
for (let i = 0; i < 2; i += 1) { await s.getByRole("button", { name: /YES$/ }).click(); await s.locator(".pdmax__footer .is-primary").click() }
await s.locator(".pdmax__choice").nth(2).click(); await s.locator(".pdmax__footer .is-primary").click()
for (let c = 0; c < 6; c += 1) { await s.locator(".pdmax__choice").nth(1).click(); await s.locator(".pdmax__footer .is-primary").click() }
await assertFrame(standalone, "standalone-decision", true)
await s.getByRole("button", { name: /BUILD MY PRODUCTIZATION BRIEF/ }).click()
await assertFrame(standalone, "standalone-brief", true)
await standalone.bringToFront()
await s.getByRole("button", { name: /COPY BRIEF/ }).click()
await standalone.waitForTimeout(150)
if (!(await s.getByRole("button", { name: /^COPIED$/ }).count())) fail("standalone: copy confirmation missing")
await s.getByRole("button", { name: /RESET CHALLENGE/ }).click()
if ((await s.getAttribute("data-frame")) !== "intro") fail("standalone: reset did not return to intro")

await browser.close()
console.log(`frames: ${outDir}`)
if (failures.length) { console.error(`EXERCISE_QA: FAIL (${failures.length})`); for (const message of failures) console.error(`  ✗ ${message}`); process.exit(1) }
console.log(`EXERCISE_QA: PASS — ${compared} answer sets identical to SCC (decision, profile, 6 statuses); foundation blockers, gating, back, reset, brief, copy brief, and every Slide 15 frame fit verified; standalone route verified`)
