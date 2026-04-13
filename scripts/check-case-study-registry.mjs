#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import * as ts from "typescript"

const REGISTRY_PATH = "src/content/case-studies/registry.ts"
const CASE_STUDY_DIR = "src/content/case-studies"
const ORPHAN_MODULE_ALLOWLIST = new Set(["solstice-ops"])

function getPropertyNameText(nameNode) {
  if (ts.isIdentifier(nameNode) || ts.isStringLiteralLike(nameNode) || ts.isNumericLiteral(nameNode)) {
    return nameNode.text
  }

  return null
}

function findPropertyAssignment(objectLiteral, propertyName) {
  for (const property of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(property)) {
      continue
    }

    const nameText = getPropertyNameText(property.name)
    if (nameText === propertyName) {
      return property
    }
  }

  return null
}

function readStringProperty(objectLiteral, propertyName) {
  const property = findPropertyAssignment(objectLiteral, propertyName)
  if (!property) {
    return null
  }

  if (!ts.isStringLiteralLike(property.initializer)) {
    return null
  }

  return property.initializer.text
}

function resolveAliasedModule(specifier) {
  if (!specifier.startsWith("@/")) {
    return null
  }

  const withoutAlias = specifier.slice(2)
  const basePath = path.join("src", withoutAlias)
  const candidates = [
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.js`,
    `${basePath}.jsx`,
    path.join(basePath, "index.ts"),
    path.join(basePath, "index.tsx"),
    path.join(basePath, "index.js"),
    path.join(basePath, "index.jsx"),
  ]

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate
    }
  }

  return null
}

function hasCaseStudyExport(modulePath) {
  const sourceText = fs.readFileSync(modulePath, "utf8")
  return /export\s+const\s+caseStudy\s*=/.test(sourceText)
}

function readRegistryEntries() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    throw new Error(`Missing registry file: ${REGISTRY_PATH}`)
  }

  const sourceText = fs.readFileSync(REGISTRY_PATH, "utf8")
  const sourceFile = ts.createSourceFile(REGISTRY_PATH, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)

  let registryObject = null
  sourceFile.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) {
      return
    }

    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "caseStudyRegistry") {
        continue
      }

      if (!declaration.initializer || !ts.isSatisfiesExpression(declaration.initializer)) {
        continue
      }

      const expression = declaration.initializer.expression
      if (!ts.isObjectLiteralExpression(expression)) {
        continue
      }

      registryObject = expression
    }
  })

  if (!registryObject) {
    throw new Error("Unable to locate caseStudyRegistry object literal in registry.ts")
  }

  const entries = []
  for (const property of registryObject.properties) {
    if (!ts.isPropertyAssignment(property)) {
      continue
    }

    const key = getPropertyNameText(property.name)
    if (!key || !ts.isObjectLiteralExpression(property.initializer)) {
      continue
    }

    const entryObject = property.initializer
    entries.push({
      key,
      slug: readStringProperty(entryObject, "slug"),
      route: readStringProperty(entryObject, "route"),
      contentModule: readStringProperty(entryObject, "contentModule"),
      diagramModule: readStringProperty(entryObject, "diagramModule"),
    })
  }

  return entries
}

function findCaseStudyModuleSlugs() {
  const files = fs.readdirSync(CASE_STUDY_DIR, { withFileTypes: true })
  const utilityFiles = new Set(["index.ts", "types.ts", "shared.ts", "registry.ts"])

  return files
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts") && !utilityFiles.has(entry.name))
    .map((entry) => entry.name.replace(/\.ts$/, ""))
}

function main() {
  const entries = readRegistryEntries()
  const errors = []

  const seenRoutes = new Set()
  const seenContentModules = new Set()

  for (const entry of entries) {
    const expectedRoute = `/work/${entry.key}`
    const expectedContentModule = `@/content/case-studies/${entry.key}`

    if (entry.slug !== entry.key) {
      errors.push(`Registry key '${entry.key}' has mismatched slug '${entry.slug ?? "<missing>"}'.`)
    }

    if (entry.route !== expectedRoute) {
      errors.push(`Registry key '${entry.key}' has route '${entry.route ?? "<missing>"}' (expected '${expectedRoute}').`)
    }

    if (entry.contentModule !== expectedContentModule) {
      errors.push(
        `Registry key '${entry.key}' has contentModule '${entry.contentModule ?? "<missing>"}' (expected '${expectedContentModule}').`
      )
    }

    if (entry.route) {
      if (seenRoutes.has(entry.route)) {
        errors.push(`Duplicate route '${entry.route}' in case study registry.`)
      }
      seenRoutes.add(entry.route)
    }

    if (entry.contentModule) {
      if (seenContentModules.has(entry.contentModule)) {
        errors.push(`Duplicate contentModule '${entry.contentModule}' in case study registry.`)
      }
      seenContentModules.add(entry.contentModule)

      const resolvedContentModule = resolveAliasedModule(entry.contentModule)
      if (!resolvedContentModule) {
        errors.push(`Content module '${entry.contentModule}' does not resolve to an existing file.`)
      } else if (!hasCaseStudyExport(resolvedContentModule)) {
        errors.push(`Content module '${entry.contentModule}' is missing an 'export const caseStudy = ...' declaration.`)
      }
    }

    if (entry.diagramModule) {
      const resolvedDiagramModule = resolveAliasedModule(entry.diagramModule)
      if (!resolvedDiagramModule) {
        errors.push(`Diagram module '${entry.diagramModule}' does not resolve to an existing file.`)
      }
    }
  }

  const registrySlugs = new Set(entries.map((entry) => entry.key))
  const contentModuleSlugs = findCaseStudyModuleSlugs()
  for (const slug of contentModuleSlugs) {
    if (registrySlugs.has(slug) || ORPHAN_MODULE_ALLOWLIST.has(slug)) {
      continue
    }

    errors.push(
      `Content module '${CASE_STUDY_DIR}/${slug}.ts' is not represented in caseStudyRegistry (or allowlist).`
    )
  }

  if (errors.length > 0) {
    console.error("Case-study registry integrity check failed.")
    for (const error of errors) {
      console.error(`- ${error}`)
    }
    process.exit(1)
  }

  console.log(`Case-study registry integrity check passed (${entries.length} entries validated).`)
}

main()
