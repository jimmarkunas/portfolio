#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const DEAD_CODE_TSCONFIG = "tsconfig.deadcode.json"
const BARREL_CHECKS = [
  {
    name: "site",
    barrelPath: "src/content/site/index.ts",
    moduleSpecifiers: ["@/content/site", "@/content/site/index"],
  },
  {
    name: "interviews",
    barrelPath: "src/content/interviews/index.ts",
    moduleSpecifiers: ["@/content/interviews", "@/content/interviews/index"],
  },
]

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
  const localExportPattern =
    /^export\s+(?:const|let|var|class|interface|type|(?:async\s+)?function)\s+([A-Za-z_$][\w$]*)/gm
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

  while ((match = localExportPattern.exec(sourceText)) !== null) {
    const exportedName = match[1]
    if (exportedName && exportedName !== "default") {
      names.add(exportedName)
    }
  }

  return [...names]
}

function isExportImported(exportName, sourceText, moduleSpecifiers) {
  const escapedName = escapeRegExp(exportName)
  const escapedSpecifiers = moduleSpecifiers.map((specifier) => escapeRegExp(specifier)).join("|")
  const importPattern = new RegExp(
    `import\\s+(?:type\\s+)?\\{[\\s\\S]*?\\b${escapedName}\\b[\\s\\S]*?\\}\\s+from\\s+["'](?:${escapedSpecifiers})["']`,
    "m",
  )
  return importPattern.test(sourceText)
}

function runBarrelUsageCheck(check) {
  if (!fs.existsSync(check.barrelPath)) {
    console.error(`Dead-code check failed: missing barrel file ${check.barrelPath}`)
    process.exit(1)
  }

  const barrelSource = fs.readFileSync(check.barrelPath, "utf8")
  const exportedNames = extractBarrelNamedExports(barrelSource)

  const sourceFiles = []
  walkSourceFiles("src", sourceFiles)
  const candidateFiles = sourceFiles.filter((file) => file !== check.barrelPath)

  const unusedExports = []
  for (const exportName of exportedNames) {
    const hasImport = candidateFiles.some((file) => {
      const sourceText = fs.readFileSync(file, "utf8")
      return isExportImported(exportName, sourceText, check.moduleSpecifiers)
    })

    if (!hasImport) {
      unusedExports.push(exportName)
    }
  }

  if (unusedExports.length > 0) {
    console.error(`Dead-code check failed: unused ${check.name} barrel exports detected.`)
    for (const exportName of unusedExports) {
      console.error(`- ${exportName}`)
    }
    process.exit(1)
  }

  console.log(`${check.name} barrel export check passed (${exportedNames.length} exports scanned).`)
}

runDeadCodeTypecheck()
for (const check of BARREL_CHECKS) {
  runBarrelUsageCheck(check)
}
