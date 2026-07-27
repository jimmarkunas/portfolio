#!/usr/bin/env node

import { execFileSync } from "node:child_process"

execFileSync(process.execPath, ["scripts/check-no-legacy-case-studies.mjs"], { stdio: "inherit" })
console.log("Case-study registry validation: PASS")
