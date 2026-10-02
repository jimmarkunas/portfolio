#!/usr/bin/env node
import assert from "node:assert/strict"
import fs from "node:fs"
import ts from "typescript"

// Execute the actual TS timing helper without adding a production/test dependency.
const source = fs.readFileSync("src/components/pbds/orb/orbTiming.ts", "utf8")
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
const exports = {}
new Function("exports", compiled)(exports)
const { advanceOrbClock } = exports
for (const hz of [30,60,120,144]) {
  const clock = { lastFrame: 0, accumulator: 0 }
  let steps = 0
  for (let frame=1;frame<=hz;frame++) steps+=advanceOrbClock(clock,frame*1000/hz)
  assert.equal(steps,60,`${hz} Hz must simulate 60 steps per second`)
}
const stalled = { lastFrame: 0, accumulator: 0 }
assert.equal(advanceOrbClock(stalled,10000),3,"catch-up work must be bounded")
assert.equal(advanceOrbClock({ lastFrame: 100, accumulator: 0 },50),0,"backward timestamps must not advance")
console.log("pdma-orb-timing-check: PASS — 30/60/120/144 Hz motion parity, bounded catch-up")

// Exercise the renderer's actual frame callback, including its catch-up paint boundary.
const renderer = fs.readFileSync("src/components/pbds/orb/PBDSKineticSphere.tsx", "utf8")
const tickSource = renderer.slice(renderer.indexOf("    const tick="), renderer.indexOf("    const syncMotion="))
assert.ok(tickSource.length > 0, "renderer frame callback must be found")
const tickCode = ts.transpileModule(tickSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
let simulations = 0, paints = 0, scheduled = 0
const document = { hidden: false }, reducedMotion = { matches: false }
const tick = new Function("advanceOrbClock", "simulate", "paint", "requestAnimationFrame", "document", "reducedMotion",
  `let animId=0;const clock={lastFrame:0,accumulator:0};${tickCode};return tick;`)(
    advanceOrbClock, () => simulations++, () => paints++, () => ++scheduled, document, reducedMotion)
tick(10000)
assert.equal(simulations, 3, "stalled frame must advance three physics steps")
assert.equal(paints, 1, "stalled frame must paint only once")
tick(10001)
assert.equal(simulations, 3, "sub-step callback must not advance physics")
assert.equal(paints, 1, "sub-step callback must not repaint unchanged state")
tick(10018)
assert.equal(simulations, 4)
assert.equal(paints, 2)
document.hidden = true
tick(10068)
assert.equal(simulations, 4)
assert.equal(paints, 2)
assert.equal(scheduled, 3, "hidden callback must not schedule more work")
document.hidden = false
reducedMotion.matches = true
tick(10118)
assert.equal(simulations, 4)
assert.equal(paints, 2)
console.log("pdma-orb-frame-check: PASS — three catch-up steps, one paint; no sub-step/paused repaint")
