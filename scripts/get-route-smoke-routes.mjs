#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import * as ts from "typescript"

const SITE_CONFIG_PATH = "src/content/site/config.ts"
const REGISTRY_PATH = "src/content/case-studies/registry.ts"
const REQUIRED_SITE_ROUTE_KEYS = [
  "home",
  "work",
  "services",
  "contact",
  "cv",
  "freebies",
  "interview",
  "interviews",
  "geekle2026",
  "llmday2026",
  "previewHomepage",
]

function getPropertyNameText(nameNode) {
  if (ts.isIdentifier(nameNode) || ts.isStringLiteralLike(nameNode) || ts.isNumericLiteral(nameNode)) {
    return nameNode.text
  }

  return null
}

function readSourceFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`)
  }

  const sourceText = fs.readFileSync(filePath, "utf8")
  return ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
}

function unwrapObjectLiteral(initializer) {
  let current = initializer

  while (
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isParenthesizedExpression(current) ||
    ts.isTypeAssertionExpression(current) ||
    ts.isNonNullExpression(current)
  ) {
    current = current.expression
  }

  return ts.isObjectLiteralExpression(current) ? current : null
}

function findVariableObjectLiteral(sourceFile, variableName) {
  let objectLiteral = null

  sourceFile.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) {
      return
    }

    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== variableName) {
        continue
      }

      if (!declaration.initializer) {
        continue
      }

      const initializer = unwrapObjectLiteral(declaration.initializer)
      if (initializer) {
        objectLiteral = initializer
      }
    }
  })

  if (!objectLiteral) {
    throw new Error(`Unable to find object literal for variable '${variableName}'.`)
  }

  return objectLiteral
}

function readSiteRoutes() {
  const sourceFile = readSourceFile(SITE_CONFIG_PATH)
  const siteRoutesObject = findVariableObjectLiteral(sourceFile, "siteRoutes")
  const routes = {}

  for (const property of siteRoutesObject.properties) {
    if (!ts.isPropertyAssignment(property)) {
      continue
    }

    const key = getPropertyNameText(property.name)
    if (!key) {
      continue
    }

    if (!ts.isStringLiteralLike(property.initializer)) {
      continue
    }

    routes[key] = property.initializer.text
  }

  return routes
}

function readCaseStudyRegistryEntries() {
  const sourceFile = readSourceFile(REGISTRY_PATH)
  const registryObject = findVariableObjectLiteral(sourceFile, "caseStudyRegistry")
  const entries = []

  for (const property of registryObject.properties) {
    if (!ts.isPropertyAssignment(property) || !ts.isObjectLiteralExpression(property.initializer)) {
      continue
    }

    const key = getPropertyNameText(property.name)
    if (!key) {
      continue
    }

    let route = null
    let contentModule = null

    for (const nestedProperty of property.initializer.properties) {
      if (!ts.isPropertyAssignment(nestedProperty)) {
        continue
      }

      const nestedKey = getPropertyNameText(nestedProperty.name)
      if (!nestedKey || !ts.isStringLiteralLike(nestedProperty.initializer)) {
        continue
      }

      if (nestedKey === "route") {
        route = nestedProperty.initializer.text
      }

      if (nestedKey === "contentModule") {
        contentModule = nestedProperty.initializer.text
      }
    }

    entries.push({ key, route, contentModule })
  }

  return entries
}

function ensureTrailingSlash(route) {
  if (route === "/") {
    return route
  }

  return route.endsWith("/") ? route : `${route}/`
}

function resolveAliasedModule(specifier) {
  if (!specifier || !specifier.startsWith("@/")) {
    return null
  }

  const withoutAlias = specifier.slice(2)
  const basePath = path.join("src", withoutAlias)
  const candidates = [
    `${basePath}.ts`,
    `${basePath}.tsx`,
    path.join(basePath, "index.ts"),
    path.join(basePath, "index.tsx"),
  ]

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate
    }
  }

  return null
}

function findFirstPressBasename(contentModulePath) {
  const sourceText = fs.readFileSync(contentModulePath, "utf8")
  const match = sourceText.match(/file:\s*"([^"]+)"/)
  if (!match) {
    return null
  }

  const fullPath = match[1]
  const fileName = fullPath.split("/").pop()
  if (!fileName) {
    return null
  }

  return fileName.replace(/\.[^.]+$/, "")
}

function findPressSmokeRoute(entries) {
  const preferredOrder = ["lego", "cps", "murad"]
  const entryScore = (entry) => {
    const index = preferredOrder.indexOf(entry.key)
    return index === -1 ? preferredOrder.length + 1 : index
  }

  const orderedEntries = [...entries].sort((a, b) => entryScore(a) - entryScore(b))

  for (const entry of orderedEntries) {
    if (!entry.contentModule || !entry.route) {
      continue
    }

    const modulePath = resolveAliasedModule(entry.contentModule)
    if (!modulePath) {
      continue
    }

    const basename = findFirstPressBasename(modulePath)
    if (!basename) {
      continue
    }

    return ensureTrailingSlash(`${entry.route}/press/${encodeURIComponent(basename)}`)
  }

  return null
}

function uniqueRoutes(routes) {
  const seen = new Set()
  return routes.filter((route) => {
    if (seen.has(route)) {
      return false
    }

    seen.add(route)
    return true
  })
}

function main() {
  const siteRoutes = readSiteRoutes()
  const routes = []

  for (const key of REQUIRED_SITE_ROUTE_KEYS) {
    const route = siteRoutes[key]
    if (!route) {
      throw new Error(`Missing siteRoutes.${key} in ${SITE_CONFIG_PATH}`)
    }

    routes.push(ensureTrailingSlash(route))
  }

  const registryEntries = readCaseStudyRegistryEntries()
  const muradEntry = registryEntries.find((entry) => entry.key === "murad")
  const sampleCaseStudyEntry = muradEntry ?? registryEntries[0]

  if (sampleCaseStudyEntry?.route) {
    routes.push(ensureTrailingSlash(sampleCaseStudyEntry.route))
  }

  const pressRoute = findPressSmokeRoute(registryEntries)
  if (pressRoute) {
    routes.push(pressRoute)
  }

  const finalRoutes = uniqueRoutes(routes)
  for (const route of finalRoutes) {
    process.stdout.write(`${route}\n`)
  }
}

main()
