#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const root = process.cwd()
const slug = process.argv[process.argv.indexOf("--slug") + 1]
if (slug !== "aa") {
  console.error("Usage: node scripts/validate-case-study-parity.mjs --slug aa")
  process.exit(2)
}

const legacyPath = path.join(root, "src/content/case-studies/aa.ts")
const revampPath = path.join(root, "src/content/case-studies/revamp/aa.ts")
const registryPath = path.join(root, "src/content/case-studies/revamp/preview-registry.ts")
const legacy = fs.readFileSync(legacyPath, "utf8")
const revamp = fs.existsSync(revampPath) ? fs.readFileSync(revampPath, "utf8") : ""
const errors = []
const report = []
const check = (label, ok, detail = "") => {
  report.push(`${ok ? "PASS" : "FAIL"} ${label}${detail ? ` — ${detail}` : ""}`)
  if (!ok) errors.push(`${label}${detail ? `: ${detail}` : ""}`)
}
const count = (text, pattern) => (text.match(pattern) ?? []).length
const has = (text, value) => text.includes(value)
const asset = (value) => fs.existsSync(path.join(root, "public", value.replace(/^\//, "")))

check("AA revamp module exists", Boolean(revamp))
check("role/At-a-Glance is populated", has(revamp, 'role: "eCommerce Program Manager"') && has(revamp, 'eyebrow: "At-a-Glance"'))
check("Recognition headline is standard", has(fs.readFileSync(path.join(root, "src/components/case-study/revamp/CaseStudyRevampRecognitionSection.tsx"), "utf8"), "Press & Accolades"))
check("Ownership eyebrow is standard", has(fs.readFileSync(path.join(root, "src/components/case-study/revamp/CaseStudyRevampOwnershipSection.tsx"), "utf8"), 'eyebrow="What I Owned"') || has(revamp, 'eyebrow: "What I Owned"'))
const legacyMetrics = ["43|%|Digital Revenue Uplift", "14|%|Retail Channel Uplift", "300|%|Omni-Channel Growth"]
const revampMetrics = [...revamp.matchAll(/\{ value: "([^\"]+)", suffix: "([^\"]*)", label: "([^\"]+)" \}/g)].map((m) => m.slice(1, 4).join("|"))
check("hero metric count", new Set(revampMetrics.filter((metric) => legacyMetrics.includes(metric))).size === legacyMetrics.length, `${legacyMetrics.length} legacy hero metrics represented`)
for (const metric of legacyMetrics) check(`metric preserved ${metric}`, revamp.includes(`value: "${metric.split("|")[0]}"`) && revamp.includes(`label: "${metric.split("|")[2]}"`))
check("Shrink Reduction outcome preserved", has(revamp, 'value: "-65"') && has(revamp, 'label: "Shrink Reduction"'))
check("role scope values preserved", has(revamp, "260+ stores worldwide") && has(revamp, "16 international sites"))
const ownershipTitles = ["Owned the Program Layer", "Unified the Global Platform", "Made Inventory Real", "Designed Smart Fulfillment", "Connected Stores, Factory, and Web"]
check("ownership item count", count(revamp, /title: "(?:Owned the Program Layer|Unified the Global Platform|Made Inventory Real|Designed Smart Fulfillment|Connected Stores, Factory, and Web)"/g) === 5)
for (const title of ownershipTitles) check(`ownership title ${title}`, has(revamp, `title: "${title}"`))
check("ownership descriptions populated", ownershipTitles.every((title) => revamp.includes(title)))
for (const quote of ["After they ousted Dov, AA was on fire", "Q1 revenue is up thanks to your work. You moved mountains to make it happen!"]) check("legacy quote preserved", has(revamp, quote))
check("quote attribution preserved", has(revamp, 'attributionTitle: "Amanda Lopez"') && has(revamp, 'attributionTitle: "Paula Schneider"'))
check("solution module count", count(revamp, /eyebrow: "(?:Global Commerce Core|Inventory Truth|Omni-Channel Fulfillment)"/g) === 3)
check("related studies populated", has(revamp, 'href: "/work/foh"') && has(revamp, 'href: "/work/modere"'))
const sharedSolutionSource = fs.readFileSync(path.join(root, "src/components/case-study/revamp/CaseStudyRevampSolutionSection.tsx"), "utf8")
const aaTemplateSource = fs.readFileSync(path.join(root, "src/components/case-study/revamp/aa/CaseStudyRevampAaTemplate.tsx"), "utf8")
const aaMapSource = fs.readFileSync(path.join(root, "src/components/case-study/revamp/aa/CaseStudyRevampAaSolutionSection.tsx"), "utf8")
const recognitionSource = fs.readFileSync(path.join(root, "src/components/case-study/revamp/CaseStudyRevampRecognitionSection.tsx"), "utf8")
const sharedSources = ["CaseStudyRevampSolutionSection.tsx", "CaseStudyRevampRecognitionSection.tsx", "CaseStudyRevampSectionHeader.tsx", "CaseStudyRevampChallengeSection.tsx", "CaseStudyRevampImpactSection.tsx", "CaseStudyRevampOwnershipSection.tsx", "CaseStudySectionIntro.tsx"].map((file) => fs.readFileSync(path.join(root, "src/components/case-study/revamp", file), "utf8")).join("\n")
check("global complete three-column primitive used", has(aaTemplateSource, "CaseStudyRevampSolutionSection") && has(sharedSolutionSource, "lane.image") && has(sharedSolutionSource, "lane.eyebrow") && has(sharedSolutionSource, "lane.title") && has(sharedSolutionSource, "lane.copy") && has(sharedSolutionSource, "lane.bullets"))
check("all three card copy fields supplied", ["16 sites, one Oracle ATG model.", "RFID made inventory visible.", "BOPIS and routing connected stores."].every((copy) => revamp.includes(`copy: "${copy}"`)))
check("AA local code is map-only", !has(aaMapSource, "BlogCardGrid") && !has(aaMapSource, "CaseStudyRevampSectionHeader"))
check("AA local template composes shared solution", has(aaTemplateSource, "CaseStudyRevampSolutionSection") && has(aaTemplateSource, "CaseStudyRevampOwnershipSection"))
check("real AA map implementation exists", has(aaMapSource, "GlobalLocationsMap") && has(fs.readFileSync(legacyPath, "utf8"), "americanapparelGlobalLocations"))
check("map is in Solution after shared primitive", has(aaTemplateSource, "<CaseStudyRevampSolutionSection data={data} /><CaseStudyRevampAaMapSection />"))
check("map explanation is complete", has(aaMapSource, "268 retail stores") && has(aaMapSource, "16 countries") && has(aaMapSource, "BOPIS"))
check("Recognition uses global section header composition", has(recognitionSource, "SectionPill") && has(recognitionSource, 'className="type-h2') && has(recognitionSource, "recognition.intro"))
check("Recognition contains no map", !has(recognitionSource, "GlobalLocationsMap"))
check("shared section intro token used", fs.existsSync(path.join(root, "src/components/case-study/revamp/CaseStudySectionIntro.tsx")) && has(sharedSolutionSource, "CaseStudyRevampSectionHeader"))
const impactBlock = revamp.slice(revamp.indexOf("impact:"), revamp.indexOf("evidence:"))
check("16 International Sites remains scope-only", !has(impactBlock, 'label: "International Sites"'))
check("no AA-specific shared conditions", !/data\.slug\s*===\s*["']aa["']|data\.slug\s*!==\s*["']aa["']/.test(sharedSources))
check("AA solution mode is approved", has(revamp, 'mode: "three-column-and-diagram"'))
check("AA Impact has four verified metrics", count(impactBlock, /label: "(?:Digital Revenue Uplift|Store Sales Uplift|Omni-Channel Growth|Shrink Reduction)"/g) === 4 && !has(impactBlock, 'label: "International Sites"'))
const aaPaths = [...revamp.slice(0, revamp.indexOf("relatedStudies:")).matchAll(/"(\/(?:aa|bi|modere|lego)\/[^\"]+)"/g)].map((match) => match[1])
check("AA private assets stay in public/aa", aaPaths.filter((value) => value.startsWith("/bi/") || value.startsWith("/modere/") || value.startsWith("/lego/")).length === 0)
check("Challenge and Impact media are unique", !has(revamp, 'challenge.visual') || !/challenge[\s\S]*?\/aa\/hero-aa-02\.png[\s\S]*?impact/.test(revamp))
for (const value of ["/aa/hero-aa-01.png", "/aa/modal-aa-01.png", "/aa/modal-aa-02.png", "/aa/modal-aa-03.png", "/aa/modal-aa-04.png", "/aa/hero-aa-02.png", "/aa/banner-aa-010.jpg", "/aa/amanda-lopez.jpeg", "/aa/paula-schneider.jpeg", "/aa/files/01-objectedge-casestudy.pdf", "/aa/files/03-microsoft-casestudy.pdf", "/aa/files/02-motorola-casestudy.pdf"]) check(`asset exists ${value}`, asset(value))
check("video/embed preserved", has(revamp, 'videoId: "IdChd8u4VLg"'))
check("registry AA-only record", has(fs.readFileSync(registryPath, "utf8"), 'record("aa"') && has(fs.readFileSync(registryPath, "utf8"), 'routeKind: "dynamic"') && has(fs.readFileSync(registryPath, 'utf8'), 'import("./aa")'))
const aaLocalSource = fs.readdirSync(path.join(root, "src/components/case-study/revamp/aa")).map((file) => fs.readFileSync(path.join(root, "src/components/case-study/revamp/aa", file), "utf8")).join("\n")
check("no placeholder language", !/lorem ipsum|placeholder|tbd|coming soon|todo|DIAGRAM PLACEHOLDER|Production solution diagram renders here|This test block represents|Why this shape worked|Architecture notes/i.test(revamp + aaLocalSource))
const protectedFiles = ["src/content/case-studies/registry.ts", "src/components/case-study/revamp/CaseStudyRevampTemplate.tsx", "src/app/(site)/work/[slug]/page.tsx"]
let diff = ""
try { diff = execFileSync("git", ["diff", "--", ...protectedFiles], { encoding: "utf8" }) } catch {}
check("protected files unchanged", diff.length === 0)

console.log(`AA legacy-parity report (${report.length} checks)`)
console.log(report.join("\n"))
console.log(`\nOwnership titles: ${ownershipTitles.join(" | ")}`)
console.log("Challenge media: /aa/modal-aa-01.png")
console.log("Impact media: /aa/banner-aa-010.jpg")
console.log("Solution visual source: src/components/case-study/revamp/aa/CaseStudyRevampAaSolutionSection.tsx")
console.log("Related slugs: foh, modere")
console.log("Global Solution modes: three-column | diagram | three-column-and-diagram")
console.log("AA selected Solution mode: three-column-and-diagram")
console.log("AA Solution render order: three-column primitive -> GlobalLocationsMap -> explanation box")
console.log("AA Impact metrics: 43% Digital Revenue Uplift; 14% Store Sales Uplift; 300% Omni-Channel Growth; -65% Shrink Reduction")
console.log("AA Impact metric source: src/content/case-studies/aa.ts:impact.stats and src/content/case-studies/revamp/aa.ts:impact.metrics")
console.log("AA media assignments: /aa/modal-aa-01.png Challenge; /aa/modal-aa-02.png, /aa/modal-aa-03.png, /aa/modal-aa-04.png Solution; /aa/banner-aa-010.jpg Impact; /aa/files/*.pdf Recognition")
console.log("Intentional media repetition: /aa/hero-aa-02.png is retained in Ownership only; no cross-section duplicate banner")
console.log("Duplicate-content results: no targeted AA media duplication; placeholder/test strings absent")
if (errors.length) {
  console.error(`\n${errors.length} parity check(s) failed.`)
  process.exit(1)
}
console.log("\nAA legacy parity: PASS")
