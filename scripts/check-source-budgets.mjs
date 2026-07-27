#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const budgetTargets = [
  { path: "src/components/case-study", defaultMaxLines: 380 },
  { path: "src/components/homepage", defaultMaxLines: 380 },
  { path: "src/components/services-contact", defaultMaxLines: 220 },
  { path: "src/app/interviews", defaultMaxLines: 380 },
  { path: "src/app/geekle2026", defaultMaxLines: 380 },
  { path: "src/components/SiteHeader.tsx", defaultMaxLines: 220 },
  { path: "src/components/SiteFooter.tsx", defaultMaxLines: 220 },
  { path: "src/components/ContactForm.tsx", defaultMaxLines: 260 },
  { path: "src/components/work/PortfolioFounderSections.tsx", defaultMaxLines: 380 },
  { path: "src/app/diagrams/headless_commerce_react.tsx", defaultMaxLines: 380 },
]

const overrideBudgets = new Map([
  ["src/components/case-study/NylRbacWorkflow.tsx", 450],
  ["src/components/case-study/bi-commerce-ecosystem-diagram.tsx", 500],
  ["src/components/case-study/SCJCommerceArchitecture.tsx", 500],
  ["src/components/case-study/diagram-shared/BiDiagramCards.tsx", 600],
  ["src/components/case-study/modere-simulation/ModereSimulation.tsx", 620],
  ["src/components/work/PortfolioFounderSections.tsx", 650],
  ["src/app/interviews/components/slides/Slide7RiskLandscape.tsx", 700],
])

function walkFiles(dir, collector) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, collector)
      continue
    }
    if (entry.isFile() && fullPath.endsWith(".tsx")) {
      collector.push(fullPath.replaceAll(path.sep, "/"))
    }
  }
}

function collectTsxFiles(targetPath) {
  if (!fs.existsSync(targetPath)) {
    console.error(`Source budget check failed: path not found: ${targetPath}`)
    process.exit(1)
  }

  const stat = fs.statSync(targetPath)
  if (stat.isDirectory()) {
    const files = []
    walkFiles(targetPath, files)
    return files
  }

  if (stat.isFile() && targetPath.endsWith(".tsx")) {
    return [targetPath.replaceAll(path.sep, "/")]
  }

  return []
}

const budgetByFile = new Map()

for (const target of budgetTargets) {
  const targetFiles = collectTsxFiles(target.path)
  for (const file of targetFiles) {
    budgetByFile.set(file, target.defaultMaxLines)
  }
}

let hasFailure = false
console.log("Source budget report (TSX line counts):")

for (const file of [...budgetByFile.keys()].sort()) {
  const contents = fs.readFileSync(file, "utf8")
  const lineCount = contents.split("\n").length
  const budget = overrideBudgets.get(file) ?? budgetByFile.get(file)
  const pass = lineCount <= budget
  const status = pass ? "PASS" : "FAIL"
  const line = `- ${file}: ${lineCount} lines (budget ${budget}) [${status}]`
  if (pass) {
    console.log(line)
  } else {
    hasFailure = true
    console.error(line)
  }
}

if (hasFailure) {
  process.exit(1)
}
