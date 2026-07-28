#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import crypto from "node:crypto"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const scriptPaths = {
  booking: path.join(repoRoot, "scripts/check-booking-url-drift.mjs"),
  registry: path.join(repoRoot, "scripts/check-case-study-registry.mjs"),
  bundles: path.join(repoRoot, "scripts/check-bundle-budgets.mjs"),
  bundleTrends: path.join(repoRoot, "scripts/check-bundle-budget-trends.mjs"),
}

const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-guard-fixtures-"))

function writeFile(baseDir, relativePath, content) {
  const filePath = path.join(baseDir, relativePath)
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
}

function runNodeScript(scriptPath, cwd, args = []) {
  try {
    const stdout = execFileSync(process.execPath, [scriptPath, ...args], {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    })

    return { ok: true, output: stdout }
  } catch (error) {
    return {
      ok: false,
      output: `${error.stdout ?? ""}${error.stderr ?? ""}`,
      status: error.status ?? 1,
    }
  }
}

function createBookingFixture(baseDir, options = {}) {
  const provider = options.provider ?? "google"
  const founderUrl =
    provider === "cal"
      ? "https://cal.com/jimmarkunas/meeting?user=jimmarkunas"
      : "https://calendar.app.google/Cc4kuM7cqTyiXQx66"
  const alternateFounderUrl =
    provider === "cal"
      ? "https://cal.com/jimmarkunas/other-meeting?user=jimmarkunas"
      : "https://calendar.app.google/WRONGID"

  writeFile(
    baseDir,
    "src/content/site/booking-policy.json",
    `${JSON.stringify(
      {
        siteShell: "https://calendar.app.google/TkZumQx7Bfyou7G26",
        homepageHero: founderUrl,
        caseStudyDefault: "https://calendar.app.google/iwn5AUyWqJadMK2t9",
        founderCaseStudy: founderUrl,
      },
      null,
      2,
    )}\n`,
  )

  writeFile(
    baseDir,
    "src/content/site/config.ts",
    `import bookingPolicy from "./booking-policy.json"\n\nconst HOMEPAGE_HERO_BOOKING_URL = bookingPolicy.homepageHero\n\nexport const siteBookingUrls = {\n  siteShell: bookingPolicy.siteShell,\n  homepageHero: HOMEPAGE_HERO_BOOKING_URL,\n  caseStudyDefault: bookingPolicy.caseStudyDefault,\n  founderCaseStudy: bookingPolicy.founderCaseStudy,\n} as const\n`,
  )

  writeFile(baseDir, "src/components/example.tsx", "export const Example = () => null\n")

  writeFile(
    baseDir,
    "public/founder/cwg/index.html",
    `<a href=\"${founderUrl}\">Schedule</a>\n`,
  )
  writeFile(
    baseDir,
    "public/founder/zevo/index.html",
    `<a href=\"${options.wrongFounderUrl ? alternateFounderUrl : founderUrl}\">Schedule</a>\n`,
  )

  if (options.withSourceLeak) {
    writeFile(
      baseDir,
      "src/content/leak.ts",
      `export const leak = "${provider === "cal" ? "https://cal.com/jimmarkunas/meeting?user=jimmarkunas" : "https://calendar.app.google/LEAK123"}"\n`,
    )
  }

  if (options.withUnexpectedHtmlBooking) {
    writeFile(
      baseDir,
      "public/other/index.html",
      `<a href=\"${founderUrl}\">Unexpected</a>\n`,
    )
  }
}

function createRegistryFixture(baseDir, options = {}) {
  const legacyGuardSource = fs.readFileSync(
    path.join(repoRoot, "scripts/check-no-legacy-case-studies.mjs"),
    "utf8",
  )
  writeFile(baseDir, "scripts/check-no-legacy-case-studies.mjs", legacyGuardSource)

  const liveSlugs = [
    "cps", "dtv01", "newyorklife", "modere", "bi", "mm", "method", "murad",
    "k2", "cbdistillery", "foh", "lego", "cwg", "aa", "zevo", "dtv02",
  ]
  writeFile(
    baseDir,
    "src/content/case-studies/revamp/case-study-registry.ts",
    `${liveSlugs.map((slug) => `record("${slug}", {})`).join("\n")}\n`,
  )
  writeFile(
    baseDir,
    "src/content/case-studies/revamp/live-registry.ts",
    "export const caseStudyPreviewRegistry = {}\n",
  )
  writeFile(
    baseDir,
    "src/app/(site)/work/[slug]/page.tsx",
    "export default function WorkPage() { return null }\n",
  )
  writeFile(
    baseDir,
    "src/app/(site)/work/[slug]/print/page.tsx",
    "export default function PrintPage() { return null }\n",
  )
  for (const [index, slug] of liveSlugs.entries()) {
    if (options.missingRevampModule && index === 0) continue
    writeFile(baseDir, `src/content/case-studies/revamp/${slug}.ts`, `export const ${slug} = {}\n`)
  }

  if (options.withLegacyRegistry) {
    writeFile(baseDir, "src/content/case-studies/registry.ts", "export const legacyRegistry = {}\n")
  }
}

function writeChunk(baseDir, relativePath, sizeBytes, random = false) {
  const payload = random
    ? crypto.randomBytes(sizeBytes).toString("base64")
    : "x".repeat(sizeBytes)

  writeFile(baseDir, relativePath, `export default \"${payload}\"\n`)
}

function createBundleFixture(baseDir, options = {}) {
  const pages = {
    "/(site)/work/[slug]/page": [
      "static/chunks/webpack.js",
      "static/chunks/shared-a.js",
      "static/chunks/shared-b.js",
      "static/chunks/main-app.js",
      "static/chunks/app/(site)/work/[slug]/page-a.js",
    ],
    "/(site)/page": [
      "static/chunks/webpack.js",
      "static/chunks/shared-a.js",
      "static/chunks/shared-b.js",
      "static/chunks/main-app.js",
      "static/chunks/app/(site)/page-a.js",
    ],
  }

  writeFile(
    baseDir,
    ".next/app-build-manifest.json",
    `${JSON.stringify({ pages }, null, 2)}\n`,
  )

  writeChunk(baseDir, ".next/static/chunks/webpack.js", 1_024)
  writeChunk(baseDir, ".next/static/chunks/shared-b.js", 3_072)
  writeChunk(baseDir, ".next/static/chunks/main-app.js", 1_024)
  writeChunk(baseDir, ".next/static/chunks/app/(site)/work/[slug]/page-a.js", 4_096)
  writeChunk(baseDir, ".next/static/chunks/app/(site)/page-a.js", 2_048)

  if (options.oversizeSharedChunk) {
    writeChunk(baseDir, ".next/static/chunks/shared-a.js", 260_000, true)
  } else {
    writeChunk(baseDir, ".next/static/chunks/shared-a.js", 8_192)
  }

  if (options.writeTrendBaseline) {
    fs.mkdirSync(path.join(baseDir, "scripts"), { recursive: true })
    const baselineResult = runNodeScript(scriptPaths.bundleTrends, baseDir, ["--write-baseline"])
    if (!baselineResult.ok) {
      throw new Error(`Failed to write bundle trend baseline:\n${baselineResult.output}`)
    }
  }

  if (options.missingWorkRoute) {
    writeFile(
      baseDir,
      ".next/app-build-manifest.json",
      `${JSON.stringify(
        {
          pages: {
            "/(site)/page": pages["/(site)/page"],
          },
        },
        null,
        2,
      )}\n`,
    )
  }
}

const cases = [
  {
    name: "booking-url-drift pass fixture",
    script: scriptPaths.booking,
    expectedPass: true,
    setup: (baseDir) => createBookingFixture(baseDir),
  },
  {
    name: "booking-url-drift pass cal.com fixture",
    script: scriptPaths.booking,
    expectedPass: true,
    setup: (baseDir) => createBookingFixture(baseDir, { provider: "cal" }),
  },
  {
    name: "booking-url-drift fails on source leak",
    script: scriptPaths.booking,
    expectedPass: false,
    setup: (baseDir) => createBookingFixture(baseDir, { withSourceLeak: true }),
  },
  {
    name: "booking-url-drift fails on cal.com source leak",
    script: scriptPaths.booking,
    expectedPass: false,
    setup: (baseDir) => createBookingFixture(baseDir, { provider: "cal", withSourceLeak: true }),
  },
  {
    name: "booking-url-drift fails on non-founder html booking link",
    script: scriptPaths.booking,
    expectedPass: false,
    setup: (baseDir) => createBookingFixture(baseDir, { withUnexpectedHtmlBooking: true }),
  },
  {
    name: "booking-url-drift fails on unexpected cal.com html booking link",
    script: scriptPaths.booking,
    expectedPass: false,
    setup: (baseDir) => createBookingFixture(baseDir, { provider: "cal", withUnexpectedHtmlBooking: true }),
  },
  {
    name: "booking-url-drift fails when founder static html uses different cal.com url",
    script: scriptPaths.booking,
    expectedPass: false,
    setup: (baseDir) => createBookingFixture(baseDir, { provider: "cal", wrongFounderUrl: true }),
  },
  {
    name: "case-study-registry pass fixture",
    script: scriptPaths.registry,
    expectedPass: true,
    setup: (baseDir) => createRegistryFixture(baseDir),
  },
  {
    name: "case-study-registry fails when a required revamp module is missing",
    script: scriptPaths.registry,
    expectedPass: false,
    setup: (baseDir) => createRegistryFixture(baseDir, { missingRevampModule: true }),
  },
  {
    name: "case-study-registry fails when legacy registry remains active",
    script: scriptPaths.registry,
    expectedPass: false,
    setup: (baseDir) => createRegistryFixture(baseDir, { withLegacyRegistry: true }),
  },
  {
    name: "bundle-budget-trends pass fixture",
    script: scriptPaths.bundleTrends,
    expectedPass: true,
    setup: (baseDir) => createBundleFixture(baseDir, { writeTrendBaseline: true }),
  },
  {
    name: "bundle-budget-trends fails when work route is missing",
    script: scriptPaths.bundleTrends,
    expectedPass: false,
    setup: (baseDir) => createBundleFixture(baseDir, {
      writeTrendBaseline: true,
      missingWorkRoute: true,
    }),
  },
  {
    name: "bundle-budgets pass fixture",
    script: scriptPaths.bundles,
    expectedPass: true,
    setup: (baseDir) => createBundleFixture(baseDir),
  },
  {
    name: "bundle-budgets fails when work route is missing",
    script: scriptPaths.bundles,
    expectedPass: false,
    setup: (baseDir) => createBundleFixture(baseDir, { missingWorkRoute: true }),
  },
  {
    name: "bundle-budgets fails on oversized shared chunk",
    script: scriptPaths.bundles,
    expectedPass: false,
    setup: (baseDir) => createBundleFixture(baseDir, { oversizeSharedChunk: true }),
  },
]

let failures = 0
for (const [index, testCase] of cases.entries()) {
  const caseDir = path.join(tmpRoot, `case-${index + 1}`)
  fs.mkdirSync(caseDir, { recursive: true })
  testCase.setup(caseDir)

  const result = runNodeScript(testCase.script, caseDir)
  const passed = result.ok === testCase.expectedPass

  if (passed) {
    console.log(`[PASS] ${testCase.name}`)
    continue
  }

  failures += 1
  console.error(`[FAIL] ${testCase.name}`)
  console.error(`  expected script success: ${testCase.expectedPass}`)
  console.error(`  actual script success:   ${result.ok}`)
  const output = result.output.trim()
  if (output) {
    console.error("  output:")
    for (const line of output.split("\n").slice(-12)) {
      console.error(`    ${line}`)
    }
  }
}

if (failures > 0) {
  console.error(`\nGuard script fixture tests failed (${failures}/${cases.length}).`)
  process.exit(1)
}

console.log(`\nGuard script fixture tests passed (${cases.length}/${cases.length}).`)
