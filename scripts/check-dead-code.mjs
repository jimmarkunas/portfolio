#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const DEAD_CODE_TSCONFIG = "tsconfig.deadcode.json"
const SITE_BARREL_PATH = "src/content/site/index.ts"
const SITE_MODULE_SPECIFIERS = ["@/content/site", "@/content/site/index"]

function walkSourceFiles(dir, collector) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkSourceFiles(fullPath, collector)
      continue
    }

    if (entry.isFile() && (fullPath.endsWith(".ts") || fullPath.endsWith(".tsx"))) {
      collector.push(fullPath.replaceAll(path.sep, "/"))
    }
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function runDeadCodeTypecheck() {
  try {
    execFileSync("npx", ["tsc", "--noEmit", "-p", DEAD_CODE_TSCONFIG], {
      stdio: "inherit",
    })
  } catch (error) {
    process.exit(error.status ?? 1)
  }
}

function extractBarrelNamedExports(sourceText) {
  const exportPattern = /export(?:\s+type)?\s*\{([^}]+)\}\s*from\s*["'][^"']+["']/g
  const names = new Set()
  let match

  while ((match = exportPattern.exec(sourceText)) !== null) {
    const rawSpecifiers = match[1]
    for (const rawSpecifier of rawSpecifiers.split(",")) {
      let specifier = rawSpecifier.trim()
      if (!specifier) {
        continue
      }

      if (specifier.startsWith("type ")) {
        specifier = specifier.slice(5).trim()
      }

      const aliasParts = specifier.split(/\s+as\s+/)
      const exportedName = (aliasParts[1] ?? aliasParts[0]).trim()
      if (exportedName && exportedName !== "default") {
        names.add(exportedName)
      }
    }
  }

  return [...names]
}

function isExportImported(exportName, sourceText) {
  const escapedName = escapeRegExp(exportName)
  const escapedSpecifiers = SITE_MODULE_SPECIFIERS.map((specifier) => escapeRegExp(specifier)).join("|")
  const importPattern = new RegExp(
    `import\\s+(?:type\\s+)?\\{[\\s\\S]*?\\b${escapedName}\\b[\\s\\S]*?\\}\\s+from\\s+["'](?:${escapedSpecifiers})["']`,
    "m",
  )
  return importPattern.test(sourceText)
}

function runSiteBarrelUsageCheck() {
  if (!fs.existsSync(SITE_BARREL_PATH)) {
    console.error(`Dead-code check failed: missing barrel file ${SITE_BARREL_PATH}`)
    process.exit(1)
  }

  const barrelSource = fs.readFileSync(SITE_BARREL_PATH, "utf8")
  const exportedNames = extractBarrelNamedExports(barrelSource)

  const sourceFiles = []
  walkSourceFiles("src", sourceFiles)
  const candidateFiles = sourceFiles.filter((file) => file !== SITE_BARREL_PATH)

  const unusedExports = []
  for (const exportName of exportedNames) {
    const hasImport = candidateFiles.some((file) => {
      const sourceText = fs.readFileSync(file, "utf8")
      return isExportImported(exportName, sourceText)
    })

    if (!hasImport) {
      unusedExports.push(exportName)
    }
  }

  if (unusedExports.length > 0) {
    console.error("Dead-code check failed: unused site barrel exports detected.")
    for (const exportName of unusedExports) {
      console.error(`- ${exportName}`)
    }
    process.exit(1)
  }

  console.log(`Site barrel export check passed (${exportedNames.length} exports scanned).`)
}

runDeadCodeTypecheck()
runSiteBarrelUsageCheck()
