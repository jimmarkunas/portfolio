#!/usr/bin/env node

import fs from "node:fs"
import * as ts from "typescript"

const SITE_CONFIG_PATH = "src/content/site/config.ts"
const CASE_STUDY_REGISTRY_PATH =
  "src/content/case-studies/revamp/preview-registry.ts"
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
  "dshhacks2026",
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

function unwrapArrayLiteral(initializer) {
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

  return ts.isArrayLiteralExpression(current) ? current : null
}

function findVariableArrayLiteral(sourceFile, variableName) {
  let arrayLiteral = null

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

      const initializer = unwrapArrayLiteral(declaration.initializer)
      if (initializer) {
        arrayLiteral = initializer
      }
    }
  })

  if (!arrayLiteral) {
    throw new Error(`Unable to find array literal for variable '${variableName}'.`)
  }

  return arrayLiteral
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

function ensureTrailingSlash(route) {
  if (route === "/") {
    return route
  }

  return route.endsWith("/") ? route : `${route}/`
}

function readCaseStudySlugs() {
  const sourceFile = readSourceFile(CASE_STUDY_REGISTRY_PATH)
  const registryArray = findVariableArrayLiteral(sourceFile, "caseStudyPreviewRegistry")
  const slugs = []

  for (const [index, element] of registryArray.elements.entries()) {
    if (!ts.isCallExpression(element) || !ts.isIdentifier(element.expression) || element.expression.text !== "record") {
      throw new Error(`Invalid case-study registry entry at index ${index}: expected record(...) call.`)
    }

    const firstArgument = element.arguments[0]
    if (!firstArgument || !ts.isStringLiteral(firstArgument)) {
      throw new Error(`Invalid case-study registry entry at index ${index}: record(...) requires a string slug.`)
    }

    slugs.push(firstArgument.text)
  }

  if (slugs.length === 0) {
    throw new Error(`No case-study slugs found in ${CASE_STUDY_REGISTRY_PATH}.`)
  }

  const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index)
  if (duplicateSlugs.length > 0) {
    throw new Error(`Duplicate case-study slugs found: ${[...new Set(duplicateSlugs)].join(", ")}`)
  }

  return slugs
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

  const caseStudySlugs = readCaseStudySlugs()
  const representativeSlug = caseStudySlugs.includes("murad") ? "murad" : caseStudySlugs[0]
  routes.push(ensureTrailingSlash(`/work/${representativeSlug}`))

  const finalRoutes = uniqueRoutes(routes)
  for (const route of finalRoutes) {
    process.stdout.write(`${route}\n`)
  }
}

main()
