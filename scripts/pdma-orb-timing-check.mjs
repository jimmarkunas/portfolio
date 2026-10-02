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
