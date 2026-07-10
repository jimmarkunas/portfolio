#!/usr/bin/env node

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000"
const cliRoutes = process.argv.slice(2)
const routes = (cliRoutes.length > 0 ? cliRoutes : ["/", "/work/aa"]).map(normalizeRouteInput)

function normalizeRouteInput(route) {
  if (!route) return "/"
  return route.startsWith("/") ? route : `/${route}`
}

function normalizeCanonicalPath(route) {
  if (route === "/") return "/"
  return route.endsWith("/") ? route.slice(0, -1) : route
}

function normalizeComparablePath(route) {
  return normalizeCanonicalPath(route)
}

function collapseWhitespace(value) {
  return value.replace(/\s+/g, " ").trim()
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}

function stripHtml(html) {
  return collapseWhitespace(
    decodeHtmlEntities(
      html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
        .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
        .replace(/<[^>]+>/g, " ")
    )
  )
}

function getTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  return match ? collapseWhitespace(decodeHtmlEntities(match[1])) : ""
}

function getCanonicalHref(html) {
  const patterns = [
    /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
    /<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i,
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)
    if (match) return match[1]
  }

  return ""
}

function getMetaContent(html, key, attribute = "name") {
  const patterns = [
    new RegExp(
      `<meta\\b[^>]*${attribute}=["']${key}["'][^>]*content=["']([^"']+)["'][^>]*>`,
      "i"
    ),
    new RegExp(
      `<meta\\b[^>]*content=["']([^"']+)["'][^>]*${attribute}=["']${key}["'][^>]*>`,
      "i"
    ),
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)
    if (match) return collapseWhitespace(decodeHtmlEntities(match[1]))
  }

  return ""
}

function getStructuredDataScriptCount(html) {
  const matches = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/gi)
  return matches ? matches.length : 0
}

function resolvePathFromUrl(candidate) {
  try {
    return new URL(candidate, baseUrl).pathname
  } catch {
    return ""
  }
}

async function fetchRoute(route) {
  const url = new URL(route, baseUrl).toString()
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "PortfolioCrawlabilityAudit/1.0",
    },
  })

  return {
    requestedUrl: url,
    finalUrl: response.url,
    status: response.status,
    contentType: response.headers.get("content-type") ?? "",
    html: await response.text(),
  }
}

function evaluateRoute(route, result) {
  const expectedCanonical = normalizeCanonicalPath(route)
  const title = getTitle(result.html)
  const description = getMetaContent(result.html, "description")
  const robots = getMetaContent(result.html, "robots")
  const canonicalHref = getCanonicalHref(result.html)
  const canonicalPath = canonicalHref ? resolvePathFromUrl(canonicalHref) : ""
  const ogTitle = getMetaContent(result.html, "og:title", "property")
  const ogDescription = getMetaContent(result.html, "og:description", "property")
  const ogImage = getMetaContent(result.html, "og:image", "property")
  const twitterCard = getMetaContent(result.html, "twitter:card")
  const structuredDataCount = getStructuredDataScriptCount(result.html)
  const mainMatch = result.html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
  const mainText = stripHtml(mainMatch ? mainMatch[1] : "")
  const bodyText = stripHtml(result.html)

  const checks = [
    {
      label: "HTTP status",
      pass: result.status === 200,
      detail: `status=${result.status}`,
    },
    {
      label: "HTML response",
      pass: /text\/html/i.test(result.contentType),
      detail: result.contentType || "(missing content-type)",
    },
    {
      label: "Main element present",
      pass: Boolean(mainMatch),
      detail: mainMatch ? "<main> found" : "<main> missing",
    },
    {
      label: "Initial HTML has meaningful text",
      pass: mainText.length >= 250 || bodyText.length >= 500,
      detail: `mainText=${mainText.length} chars, bodyText=${bodyText.length} chars`,
    },
    {
      label: "Title present",
      pass: title.length > 0,
      detail: title || "(missing title)",
    },
    {
      label: "Meta description present",
      pass: description.length > 0,
      detail: description || "(missing description)",
    },
    {
      label: "Canonical present",
      pass: canonicalHref.length > 0,
      detail: canonicalHref || "(missing canonical)",
    },
    {
      label: "Canonical path matches route",
      pass: normalizeComparablePath(canonicalPath) === normalizeComparablePath(expectedCanonical),
      detail: canonicalPath
        ? `expected=${expectedCanonical}, actual=${canonicalPath}`
        : `expected=${expectedCanonical}, actual=(missing)`,
    },
    {
      label: "Robots allows indexing",
      pass: robots.length === 0 || !/noindex/i.test(robots),
      detail: robots || "(no robots meta tag)",
    },
    {
      label: "Open Graph title present",
      pass: ogTitle.length > 0,
      detail: ogTitle || "(missing og:title)",
    },
    {
      label: "Open Graph description present",
      pass: ogDescription.length > 0,
      detail: ogDescription || "(missing og:description)",
    },
    {
      label: "Open Graph image present",
      pass: ogImage.length > 0,
      detail: ogImage || "(missing og:image)",
    },
    {
      label: "Twitter card present",
      pass: twitterCard.length > 0,
      detail: twitterCard || "(missing twitter:card)",
    },
    {
      label: "Structured data present",
      pass: structuredDataCount > 0,
      detail: `${structuredDataCount} JSON-LD script${structuredDataCount === 1 ? "" : "s"}`,
    },
  ]

  return {
    route,
    title,
    description,
    canonicalHref,
    canonicalPath,
    ogImage,
    requestedUrl: result.requestedUrl,
    finalUrl: result.finalUrl,
    redirected: result.requestedUrl !== result.finalUrl,
    checks,
  }
}

let hadFailures = false
const reports = []

for (const route of routes) {
  try {
    const response = await fetchRoute(route)
    reports.push(evaluateRoute(route, response))
  } catch (error) {
    hadFailures = true
    console.error(`\n[crawlability] ${route}`)
    console.error(`  fetch failed: ${error instanceof Error ? error.message : String(error)}`)
  }
}

for (const report of reports) {
  console.log(`\n[crawlability] ${report.route}`)
  console.log(`  requested: ${report.requestedUrl}`)
  console.log(`  final: ${report.finalUrl}`)
  if (report.redirected) {
    console.log("  note: request redirected before the final HTML response")
  }

  for (const check of report.checks) {
    const marker = check.pass ? "PASS" : "FAIL"
    console.log(`  [${marker}] ${check.label} — ${check.detail}`)
    if (!check.pass) hadFailures = true
  }
}

const ogImageGroups = reports.reduce((acc, report) => {
  if (!report.ogImage) return acc
  const list = acc.get(report.ogImage) ?? []
  list.push(report.route)
  acc.set(report.ogImage, list)
  return acc
}, new Map())

const duplicates = [...ogImageGroups.entries()].filter(([, reportRoutes]) => reportRoutes.length > 1)
if (duplicates.length > 0) {
  console.log("\n[crawlability] shared social preview images detected:")
  for (const [image, reportRoutes] of duplicates) {
    console.log(`  ${image}`)
    console.log(`    routes: ${reportRoutes.join(", ")}`)
  }
}

if (hadFailures) {
  process.exit(1)
}

console.log("\nCrawlability audit passed.")
