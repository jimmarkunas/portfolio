import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const slugs = ["cps", "dtv01", "newyorklife", "modere", "bi", "mm", "method", "murad", "k2", "cbdistillery", "foh", "lego", "cwg", "aa", "zevo", "dtv02"]
const errors = []
const liveRegistry = fs.readFileSync(path.join(root, "src/content/case-studies/revamp/live-registry.ts"), "utf8")
const caseStudyRegistry = fs.readFileSync(path.join(root, "src/content/case-studies/revamp/case-study-registry.ts"), "utf8")
const liveRoute = fs.readFileSync(path.join(root, "src/app/(site)/work/[slug]/page.tsx"), "utf8")
const printRoute = fs.readFileSync(path.join(root, "src/app/(site)/work/[slug]/print/page.tsx"), "utf8")

for (const slug of slugs) {
  if (!caseStudyRegistry.includes(`record("${slug}"`)) errors.push(`${slug}: missing from case-study registry`)
  if (!fs.existsSync(path.join(root, `src/content/case-studies/revamp/${slug}.ts`))) errors.push(`${slug}: missing revamp content module`)
}
if (liveRoute.includes("CaseStudyTemplate") || liveRoute.includes("content/case-studies/registry")) errors.push("live route imports legacy architecture")
if (printRoute.includes("CaseStudyTemplate") || printRoute.includes("content/case-studies/registry")) errors.push("print route imports legacy architecture")
if (!liveRegistry.includes("caseStudyPreviewRegistry")) errors.push("live registry is not derived from case-study registry")
if (fs.existsSync(path.join(root, "src/components/case-study/CaseStudyTemplate.tsx"))) errors.push("legacy CaseStudyTemplate remains active")
if (fs.existsSync(path.join(root, "src/content/case-studies/registry.ts"))) errors.push("legacy registry remains active")
for (const slug of slugs) if (fs.existsSync(path.join(root, `src/content/case-studies/${slug}.ts`))) errors.push(`${slug}: legacy slug module remains active`)

if (errors.length) {
  console.error(errors.join("\n"))
  process.exit(1)
}
console.log(`No active legacy case-study sources found. Verified ${slugs.length} live slugs.`)
