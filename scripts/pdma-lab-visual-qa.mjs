#!/usr/bin/env node
// Regression coverage for the eight-slide decoration lab and shared orb lifecycle.
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import assert from "node:assert/strict"
import { chromium } from "playwright"

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const outDir = path.join(os.tmpdir(), "pdma-lab-qa")
const kinds = ["title", "end-card", "flow-scenario", "flow-scenario", "end-card", "embedded-app", "hub-ecosystem", "structured-content-action"]
const viewports = [[1920,1080], [1366,768], [820,1180], [768,1024], [2560,1080]]
let browser
for (const options of [{}, { channel: "chrome" }]) { try { browser = await chromium.launch(options); break } catch { /* next channel */ } }
if (!browser) { console.error("VISUAL_QA: REQUIRES_EXTERNAL_REVIEW — no browser"); process.exit(2) }
fs.mkdirSync(outDir, { recursive: true })
const baseline = []
let captures = 0
try {
  for (const [width,height] of viewports) {
    const page = await browser.newPage({ viewport: { width,height }, reducedMotion: "reduce" })
    const errors = []
    page.on("pageerror", error => errors.push(String(error)))
    await page.addInitScript(() => {
      window.orbDraws = 0
      const clear = CanvasRenderingContext2D.prototype.clearRect
      CanvasRenderingContext2D.prototype.clearRect = function(...args) { window.orbDraws++; return clear.apply(this,args) }
    })
    await page.goto(`${baseUrl}/pdma2026-templates-lab/`, { waitUntil: "networkidle" })
    await page.evaluate(() => document.fonts.ready)
    for (let index=0;index<kinds.length;index++) {
      if (index) await page.keyboard.press("ArrowRight")
      await page.waitForTimeout(180)
      await page.waitForFunction(expected=>document.querySelector(".pdma-count")?.textContent.trim()===expected,`${index+1} / 8`)
      await page.waitForFunction(()=>[...document.querySelectorAll(".pdma-decoration-host img")].every(img=>img.complete&&img.naturalWidth>0))
      const state = await page.evaluate(() => {
        const canvas = document.querySelector(".pdma-logical-canvas").getBoundingClientRect(), scale=canvas.width/1920
        const slide = document.querySelector(".pdma-logical-canvas .pdmat-slide")
        const decor = document.querySelector(".pdma-decoration-host .pdmat-deco")
        const layout = [...slide.querySelectorAll(".pdmat-stage [class*='pdmat-']")].map(el => {
          const r=el.getBoundingClientRect()
          return r.width || r.height ? [r.x-canvas.x,r.y-canvas.y,r.width,r.height].map(v=>Math.round(v/scale)) : null
        })
        const orbs = [...decor.querySelectorAll("canvas")].map(el=>{
          const r=el.getBoundingClientRect(),data=el.getContext("2d").getImageData(0,0,el.width,el.height).data
          return { width:r.width,height:r.height,painted:data.some((v,i)=>i%4===3&&v>0) }
        })
        return {kind:slide.dataset.templateKind, count:document.querySelector(".pdma-count").textContent.trim(), layout,orbs,
          images:[...decor.querySelectorAll("img")].map(el=>el.complete&&el.naturalWidth>0),
          doc:[document.documentElement.scrollWidth,document.documentElement.scrollHeight],canvas:[canvas.width,canvas.height]}
      })
      const tag=`${width}x${height} slide ${index+1}`
      assert.equal(state.kind,kinds[index],tag)
      assert.equal(state.count,`${index+1} / 8`,tag)
      assert.ok(state.doc[0]<=width+1&&state.doc[1]<=height+1,`${tag}: document scroll`)
      assert.ok(Math.abs(state.canvas[0]/state.canvas[1]-16/9)<0.001,`${tag}: distorted canvas`)
      assert.ok(state.images.every(Boolean),`${tag}: missing decorative asset`)
      assert.equal(state.orbs.length,[3,6,7].includes(index)?2:0,`${tag}: missing orb`)
      assert.ok(state.orbs.every(orb=>orb.width>0&&orb.height>0&&orb.painted),`${tag}: blank orb`)
      if (!baseline[index]) baseline[index]=state.layout
      else state.layout.forEach((rect,i)=>assert.ok(rect===null?baseline[index][i]===null:baseline[index][i]&&rect.every((v,j)=>Math.abs(v-baseline[index][i][j])<=2),`${tag}: semantic reflow at ${i}`))
      await page.screenshot({ path:path.join(outDir,`${width}x${height}-s${index+1}.png`) });captures++
      if (index===3) {
        const before=await page.evaluate(()=>window.orbDraws)
        await page.waitForTimeout(200)
        assert.equal(await page.evaluate(()=>window.orbDraws),before,`${tag}: reduced motion still animates`)
        // Shared CSS must carry its own positioning, even without the lab route class.
        await page.evaluate(()=>document.querySelector(".pdma2026-templates-lab").classList.remove("pdma2026-templates-lab"))
        assert.equal(await page.locator(".pdmat-deco-orb").first().evaluate(el=>getComputedStyle(el).position),"absolute")
        assert.ok(await page.evaluate(()=>[50,innerWidth-40].every(x=>document.elementFromPoint(x,innerHeight/2)?.tagName==="CANVAS")),`${tag}: semantic plane intercepts orb input`)
        await page.evaluate(()=>document.querySelector(".pdma2026-page").classList.add("pdma2026-templates-lab"))
        await page.emulateMedia({ reducedMotion:"no-preference" })
        await page.waitForTimeout(200)
        assert.ok(await page.evaluate(n=>window.orbDraws>n,before),`${tag}: animation did not resume`)
        await page.evaluate(()=>{
          Object.defineProperty(document,"hidden",{ configurable:true,get:()=>true })
          document.dispatchEvent(new Event("visibilitychange"))
        })
        const hidden=await page.evaluate(()=>window.orbDraws)
        await page.waitForTimeout(200)
        assert.equal(await page.evaluate(()=>window.orbDraws),hidden,`${tag}: hidden-tab animation continues`)
        await page.evaluate(()=>{
          delete document.hidden
          document.dispatchEvent(new Event("visibilitychange"))
        })
        await page.waitForTimeout(100)
        assert.ok(await page.evaluate(n=>window.orbDraws>n,hidden),`${tag}: visible-tab animation did not resume`)
        await page.emulateMedia({ reducedMotion:"reduce" })
        await page.waitForTimeout(100) // allow the media-change event and React effects to settle
        const stopped=await page.evaluate(()=>window.orbDraws)
        await page.waitForTimeout(200)
        assert.equal(await page.evaluate(()=>window.orbDraws),stopped,`${tag}: animation did not stop`)
      }
    }
    assert.deepEqual(errors,[],`${width}x${height}: page errors`)
    await page.close()
  }
  console.log(`VISUAL_QA: PASS — lab ${captures} captures; painted orbs, shared styles, no scroll/reflow, reduced-motion stop/resume`)
  console.log(`screenshots: ${outDir}`)
} finally { await browser.close() }
