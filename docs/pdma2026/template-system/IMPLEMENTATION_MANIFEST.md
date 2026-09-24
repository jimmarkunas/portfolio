# PDMA 2026 Template System — Deterministic Implementation Manifest

**Status:** IMPLEMENTED — baseline `c350ce7` accepted; production cutover complete (§9)  
**Date:** 2026-09-24  
**Target route:** `/pdma2026-templates`  
**Existing `/pdma2026`:** production consumer since cutover (§9)

This manifest is the final build handoff. It is subordinate only to Jim's explicit current instruction, `TEMPLATE_ARCHITECTURE_CONTRACT.md`, and `APPROVED_TEMPLATE_REFERENCES.md` / `approved-template-references.json`.

## 1. Global build contract

### Shell

Reuse these existing components **without modifying them**:

- `src/app/pdma2026/PdmaPresentationShell.tsx`
- `src/app/pdma2026/components/PdmaTitleBlock.tsx`

The current shell owns header, footer, navigation, fullscreen behavior, TOC behavior, slide count, transitions, and the 1920×1080 logical-canvas uniform scaling behavior.

### Copy authority

Mapped live PDMA files own copy. Approved concept images own composition only.

No mapped copy may be removed, hidden, truncated, paraphrased, or replaced by concept-image wording.

### New implementation root

```text
src/app/pdma2026-templates/
public/pdma2026-templates/assets/
```

### New component targets

```text
src/app/pdma2026-templates/
  page.tsx
  TemplatePresentation.tsx
  templateManifest.tsx
  templateContent.ts
  templateTypes.ts
  styles/templates.css
  components/TemplateSlide.tsx
  components/DecorativeLayer.tsx
  components/shared/ContentCard.tsx
  components/shared/IconCircle.tsx
  components/shared/FlowRail.tsx
  components/shared/Connector.tsx
  components/shared/TakeawayBand.tsx
  components/shared/DownloadModule.tsx
  components/shared/EmbeddedAppFrame.tsx
  components/templates/TitleTemplate.tsx
  components/templates/EndCardTemplate.tsx
  components/templates/ExerciseTemplate.tsx
  components/templates/EmbeddedAppTemplate.tsx
  components/templates/CompareContrastTemplate.tsx
  components/templates/FlowScenarioTemplate.tsx
  components/templates/DecisionSpectrumTemplate.tsx
  components/templates/HubEcosystemTemplate.tsx
  components/templates/ScorecardTemplate.tsx
  components/templates/StructuredActionTemplate.tsx
```

### Layout rules

- Grid/Flex for all content.
- No `pdmaGeometry.ts` imports anywhere in `/src/app/pdma2026-templates/**`.
- No absolute positioning for content, copy, cards, rails, app frames, or primary layout.
- Absolute positioning is permitted only inside bounded decorative/connector layers.
- No transform-based layout corrections.
- No responsive stacking.
- No slide scrolling.
- Entire 1920×1080 logical canvas scales uniformly through portrait tablet.

## 2. Canonical asset package

Persistent source package:

`/LifeOS/PDMA 2026/Template Canon/v4/`

Archive:

`/LifeOS/PDMA 2026/Template Canon/v4/pdma2026-template-canon-v4.zip`

For implementation, copy the approved v4 bytes into the matching folders under:

`public/pdma2026-templates/assets/`

Do not regenerate or reinterpret them.

## 3. Template manifest

### T01 — Title

**Kind:** `title`  
**Representative live slide:** Slide 1  
**Target:** `components/templates/TitleTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts` → Slide 1 title/subtitle/header/footer metadata.
- `src/app/pdma2026/components/slides/Slide01.tsx` → speaker copy.

**Exact required copy**
- White title: `THE NEW PM`
- Magenta title: `OPERATING SYSTEM`
- Subtitle: `What stays uniquely human.` / `What shifts to AI.`
- Speaker: `Jim Markunas`
- Role: `Head of Product, Bytalos`
- Header labels: `JUDGMENT • AUTHORITY • ACCOUNTABILITY`
- Footer: `HUMAN JUDGMENT COMPOUNDS`

**Visual authority**
- Current live Slide 1.

**Approved/reused assets**
- `/pdma2026/slide-01/slide-01-planet-back.png`
- `/pdma2026/slide-01/slide-01-planet-foreground.png`
- `/pdma2026/slide-01/slide-01-asterisk-hero.png`

**Rule**
Rebuild cleanly in the new template tree; do not import the legacy Slide01 component.

---

### T02 — End Card

**Kind:** `end-card`  
**Representative live slide:** Slide 15 copy mapped into the approved new End Card composition  
**Target:** `components/templates/EndCardTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts` → Slide 15 title/subtitle/header/footer.
- `src/app/pdma2026/components/slides/Slide15.tsx` → body/download copy and current destination URL.

**Exact required copy**
- White title: `TURN AI CAPABILITY`
- Magenta title: `INTO PRODUCT VALUE.`
- Subtitle: `Start with the business case. Define the authority. Productize the controls.` / `Measure the outcome.`
- `SPECIAL GIFT FROM PDMA + JIM`
- `A.G.E.N.T.S. PRODUCTIZATION KIT`
- `A free worksheet for operationalizing this approach in your enterprise.`
- CTA: `DOWNLOAD THE KIT`
- `TAKE IT BACK TO YOUR TEAM.`
- `DOWNLOAD IT` / `USE IT` / `ADAPT IT` / `SHARE IT`
- `AUTOMATE THE WORK.`
- `NEVER AUTOMATE AWAY ACCOUNTABILITY.`
- Header: `VALUE • AUTHORITY • ACCOUNTABILITY`
- Footer: `NEVER AUTOMATE AWAY ACCOUNTABILITY`

**Download URL**
- Current source value: `https://github.com/jimmarkunas/agents-enterprise-ai-operating-model`
- One config value only; QR and circular CTA consume the same URL.

**Visual authority**
- `end-card/end-card-reference-v1.png`

**Approved asset**
- `end-card/end-card-electric-orb-right-v1.png`

**Destination**
- `public/pdma2026-templates/assets/end-card/`

---

### T03 — Exercise / Worksheet

**Kind:** `exercise`  
**Representative live slide:** Slide 14  
**Target:** `components/templates/ExerciseTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts` → Slide 14 title/subtitle/header/footer.
- `src/app/pdma2026/content/slide-content.ts` → four exercise rows.
- `src/app/pdma2026/components/slides/Slide14.tsx` → worksheet-preview labels, CTA semantics, takeaway.

**Exact required copy**
- White title: `NOW YOU`
- Magenta title: `DO IT.`
- Subtitle: `Turn an AI idea into a mini productization brief you can take back to work.`
- Rows:
  1. `VALUE` — `Increase revenue, decrease cost, or streamline operations?`
  2. `AUTHORITY` — `What may AI observe, recommend, prepare, decide, or execute?`
  3. `A.G.E.N.T.S.` — `Define controls, evidence, systems, transfer, and success.`
  4. `OUTPUT` — `Generate a mini productization brief / backlog-ready artifact.`
- Supporting label: `IDEAS THROUGH STRUCTURE TO IMPACT`
- Worksheet preview labels: `PDMA 2026`, `CONFIDENTIAL • DRAFT`, `AI INITIATIVE`, `PRODUCTIZATION BRIEF`, `OPPORTUNITY`, `VALUE`, `AUTHORITY`, `A.G.E.N.T.S.`, `OUTPUT`, `NEXT STEPS`, `FROM IDEA TO IMPACT`
- Takeaway: `ARE YOU READY TO PRODUCTIZE YOUR AI?`
- Header: `APPLY • DECIDE • BUILD`
- Footer: `USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT`

**Interaction**
The worksheet preview links to `/pdma2026/exercise` and must remain keyboard-accessible.

**Visual authority**
- Current live Slide 14.

**Reused assets**
- existing Slide 14 icon/worksheet assets under `/pdma2026/slide-14/`.

---

### T04 — Embedded Interactive App

**Kind:** `embedded-app`  
**Target:** `components/templates/EmbeddedAppTemplate.tsx`  
**Status:** READY

**Copy authority**
There is no pre-existing numbered PDMA slide for this template. The user-approved Embedded App concept owns this template's title/subtitle copy.

**Exact approved shell copy**
- White title: `EMBEDDED APPS.`
- Magenta title: `REAL WORK.`
- Subtitle: `Put live tools, data, and workflows directly in the presentation.`

**Shell metadata**
Because this is the live continuation of Slide 14's exercise, inherit Slide 14 shell metadata:
- Header: `APPLY • DECIDE • BUILD`
- Footer: `USEFUL PM ARTIFACT • NOT JUST A QUIZ RESULT`

**Visual authority**
- `embedded-app/embedded-app-reference-v1.png`

**Approved assets**
- `embedded-app/embedded-app-left-orb-magenta-v1.png`
- `embedded-app/embedded-app-right-orb-white-v1.png`

**Destination**
- `public/pdma2026-templates/assets/embedded-app/`

**Live app implementation rule**
- App content is a native `ReactNode` inside `EmbeddedAppFrame`.
- Do not render the reference screenshot as the app.
- Do not iframe `/pdma2026/exercise`.
- Do not modify `src/app/pdma2026/exercise/**`.
- Build the exemplar embedded exercise body from the existing reusable primitives/state sources:
  - `@/components/exercise/useGuidedExerciseFlow`
  - `@/content/pdma2026`
- The new embedded body must not duplicate the old exercise page chrome.

---

### T05 — Compare / Contrast

**Kind:** `compare-contrast`  
**Representative live slide:** Slide 3  
**Target:** `components/templates/CompareContrastTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts`
- `src/app/pdma2026/content/slide-content.ts` → `slide03Processes`
- `src/app/pdma2026/components/slides/Slide03.tsx`

**Exact required content**
- White title: `COPILOTS GENERATE OUTPUTS.`
- Magenta title: `AGENTS TAKE ACTION.`
- Subtitle: `When AI can act in enterprise systems, product design must account for` / `authority, consequence, and control.`
- Left heading: `C O P I L O T`
- Left descriptor: `A S S I S T S W I T H O U T P U T S`
- Left process: `HUMAN → PROMPT → MODEL → OUTPUT`
- Left boundary: `Human remains the execution boundary.`
- Right heading: `A G E N T`
- Right descriptor: `A C T S I N T H E R E A L W O R L D`
- Right process: `GOAL → AGENT → TOOL / SYSTEM → ACTION`
- Right boundary: `AI can now cross the execution boundary.`
- Capability row: `READ • WRITE • SEND • SPEND`
- Takeaway: `WHEN AI BECOMES AN OPERATOR, AUTHORITY BECOMES A PRODUCT DECISION.`
- Header: `OUTPUTS • AUTHORITY • ACTION`
- Footer: `AUTHORITY IS A PRODUCT DECISION`

**Visual authority**
- Current live Slide 3.

**Reused assets**
- `/pdma2026/slide-03/02283.png`
- `/pdma2026/slide-03/44753.png`

---

### T06 — Flow / Scenario

**Kind:** `flow-scenario`  
**Representative live slide:** Slide 9  
**Target:** `components/templates/FlowScenarioTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts`
- `src/app/pdma2026/components/slides/Slide09.tsx`

**Exact required content**
- White title: `LIVE SCENARIO:`
- Magenta title: `RETENTION AGENT.`
- Subtitle: `A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.`
- Synopsis label: `BUSINESS PROBLEM`
- Synopsis: `Customer retention teams spend too much time manually identifying churn risk across fragmented enterprise systems.`
- Primary value driver: `INCREASE REVENUE`
- Supporting value driver: `+ STREAMLINE OPERATIONS`
- Signals:
  - `CRM` — `Customer data`
  - `PRODUCT USAGE` — `Behavioral data`
  - `SUPPORT` — `Support tickets`
  - `ACCOUNT HEALTH` — `Billing & health data`
- `IDENTIFY` — `Detect meaningful churn-risk patterns across enterprise customer data.`
- `RECOMMEND` — `Recommend an approved intervention to the responsible team.`
- `PRODUCT QUESTION` — `How much authority should this agent have?`
- Takeaway: `HOW DO WE TURN THIS BUSINESS CASE INTO A PRODUCTION-READY ENTERPRISE PRODUCT?`
- Header: `VALUE • SIGNAL • ACTION`
- Footer: `PRODUCTION-READY ENTERPRISE PRODUCT`

**Visual authority**
- `flow-scenario/flow-scenario-reference-v1.png`

**Approved assets**
- `flow-scenario/slide-09-left-orb-white-v1.png`
- `flow-scenario/slide-09-right-orb-magenta-v1.png`

**Structural rule**
Outlined synopsis box → signal rows with glyph circles → IDENTIFY glyph node → RECOMMEND glyph node → question/takeaway. No middle planet assets.

---

### T07 — Decision / Spectrum

**Kind:** `decision-spectrum`  
**Representative live slide:** Slide 8  
**Target:** `components/templates/DecisionSpectrumTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts`
- `src/app/pdma2026/content/slide-content.ts` → `slide08Stages`
- `src/app/pdma2026/components/CanonicalSlide08.tsx`

**Exact required content**
- White title: `HOW MUCH AUTHORITY`
- Magenta title: `SHOULD THE ROBOTS HAVE?`
- Subtitle: `The farther AI moves from observing to acting, the more deliberately` / `the Product Manager has to design the boundary.`
- `01 OBSERVE` — `AI sees the state of the product or process.`
- `02 RECOMMEND` — `AI proposes what should happen.`
- `03 PREPARE` — `AI stages the action for human review.`
- `04 DECIDE` — `AI chooses the action within defined rules.`
- `05 EXECUTE` — `AI acts within defined limits.`
- Progression labels: `MORE AUTONOMY → MORE CONSEQUENCE → MORE PRODUCT DESIGN`
- Takeaway: `THE FARTHER RIGHT YOU GO, THE MORE PRODUCT DESIGN HAS TO ACCOUNT FOR THE CONSEQUENCES.`
- Header: `OBSERVE • DECIDE • EXECUTE`
- Footer: `AUTHORITY IS A PRODUCT DECISION`

**Visual authority**
- Current live Slide 8.

**Reused assets**
- `/pdma2026/slide-08/slide-08-planet-horizon.png`
- `/pdma2026/slide-08/slide-08-authority-arc.png`

---

### T08 — Hub / Ecosystem

**Kind:** `hub-ecosystem`  
**Representative live slide:** Slide 6  
**Target:** `components/templates/HubEcosystemTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts`
- `src/app/pdma2026/content/slide-content.ts` → `slide06Inventory`, `slide06Owners`

**Exact required content**
- White title: `UNDERSTAND THE ENVIRONMENT.`
- Magenta title: `NAME THE OWNERS.`
- Subtitle: `Before you automate, inventory the environment and assign human accountability.`
- Left bank:
  - `SYSTEMS` — `Applications, infrastructure, tools and integrations.`
  - `DATA` — `Sources, types, sensitivity and quality.`
  - `PEOPLE` — `Teams, roles, skills and working models.`
  - `DEPENDENCIES` — `Upstream, downstream and external partners.`
- Center semantic label: `AI / AUTOMATION`
- Right bank:
  - `SYSTEM OWNER` — `Accountable for reliability, security and lifecycle.`
  - `DECISION OWNER` — `Accountable for policies, trade-offs and approvals.`
  - `OUTCOME OWNER` — `Accountable for value, results and continuous improvement.`
- Header: `SYSTEMS • DATA • OWNERSHIP`
- Footer: `AUTOMATION DOES NOT ERASE OWNERSHIP`

**Visual authority**
- `hub-ecosystem/hub-ecosystem-reference-v1.png`

**Approved assets**
- `hub-ecosystem/slide-06-left-orb-white-v1.png`
- `hub-ecosystem/slide-06-right-orb-magenta-v1.png`

**Structural rule**
Inventory bank → native rounded AI/Automation HTML box → owner bank. Straight connectors only. No center orb/image.

---

### T09 — Scorecard / Evaluation

**Kind:** `scorecard`  
**Representative live slide:** Slide 7  
**Target:** `components/templates/ScorecardTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts`
- `src/app/pdma2026/components/slides/Slide07.tsx`

**Exact required content**
- White title: `BEFORE YOU BUILD IT,`
- Magenta title: `PROVE THE VALUE.`
- Subtitle: `Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.`
- Decision rule: `PICK ONE PRIMARY VALUE DRIVER.`
- Supporting copy: `Use this scorecard to evaluate your concept. A strong product should clearly map to one primary value driver.`
- Columns:
  - `INCREASE REVENUE` — `Does it help us grow top-line value?`
  - `DECREASE COST` — `Does it remove meaningful cost from the system?`
  - `STREAMLINE OPERATIONS` — `Does it make work materially easier to run?`
- Evaluation rows:
  - `ACQUIRE | LABOR | FASTER`
  - `CONVERT | COST-TO-SERVE | SIMPLER`
  - `RETAIN | REWORK | SCALABLE`
  - `EXPAND | WASTE | LESS MANUAL`
- Takeaway: `IF YOU CAN'T IDENTIFY ONE OF THESE OUTCOMES, YOU DON'T HAVE A PRODUCT.`
- Header: `REVENUE • COST • OPERATIONS`
- Footer: `PICK ONE PRIMARY VALUE DRIVER`

**Visual authority**
- Current live Slide 7.

**Assets**
- No bespoke decorative image required by the current exemplar.

---

### T10 — Structured Content / Action

**Kind:** `structured-content-action`  
**Representative live slide:** Slide 10  
**Target:** `components/templates/StructuredActionTemplate.tsx`  
**Status:** READY

**Copy authority**
- `src/app/pdma2026/pdma.config.ts`
- `src/app/pdma2026/components/slides/Slide10.tsx`

**Exact required content**
- White title: `DESIGN PRODUCTION READINESS`
- Magenta title: `INTO THE FEATURE.`
- Subtitle: `Guardrails, human intervention, and success measures belong in the product` / `requirements before development begins.`
- Requirement cards:
  1. `GUARDRAILS` — `What must the product prevent or constrain?`
  2. `HUMAN INTERVENTION` — `When must a person review, approve, or take over?`
  3. `SUCCESS MEASURES` — `What proves the feature creates the intended outcome?`
- Section label: `OPERATIONALIZE IT AS PRODUCT WORK`
- Action rail:
  1. `BACKLOG` — `Capture the requirements.`
  2. `PRD` — `Define behavior and boundaries.`
  3. `ACCEPTANCE CRITERIA` — `Make them testable.`
  4. `PRODUCTION` — `Prove they work.`
- Takeaway: `IF IT MATTERS IN PRODUCTION, IT BELONGS IN THE PRODUCT DEFINITION.`
- Supporting takeaway: `REAL FEATURES.` / `REAL OUTCOMES.`
- Header: `BACKLOG • CONTROLS • OUTCOMES`
- Footer: `PRODUCTION READINESS STARTS IN THE BACKLOG`

**Visual authority**
- `structured-content-action/structured-content-action-reference-v1.png`

**Approved assets**
- `structured-content-action/slide-10-left-orb-magenta-v1.png`
- `structured-content-action/slide-10-right-orb-magenta-orbit-v1.png`

**Structural rule**
Three requirement cards → four-step operationalization rail → takeaway. Human Intervention is the magenta-emphasis card.

## 4. Allowed mutation surface

Implementation may create or modify only:

- `src/app/pdma2026-templates/**`
- `public/pdma2026-templates/assets/**`
- `scripts/pdmat-check.mjs`
- `scripts/pdmat-visual-qa.mjs`
- `docs/pdma2026/template-system/**`

No existing `/src/app/pdma2026/**` file may be changed.

No existing `/public/pdma2026/**` asset may be replaced or deleted.

No legacy geometry/config system may be imported into the new template bodies.

## 5. Asset staging gate

Before implementation begins, the exact Canon v4 bytes must be present locally and copied to `public/pdma2026-templates/assets/**` with their canonical filenames.

The implementation must verify the SHA-256 values against:

`docs/pdma2026/template-system/approved-template-references.json`

A missing or mismatched asset is `BLOCKED`, not a reason to regenerate an approximation.

## 6. Required implementation checks

Create `scripts/pdmat-check.mjs` to fail on:

- imports of `pdmaGeometry` inside `src/app/pdma2026-templates/**`
- absolute `left/top` positioning in template content components except approved decorative/connector layers
- missing 10-template manifest parity
- missing required mapped copy strings
- missing approved assets
- SHA-256 mismatches for canonized assets
- direct imports of legacy Slide01/03/06/07/08/09/10/14/15 components
- missing header/footer labels
- template body overflow contract violations detectable statically

Run:

```bash
node scripts/pdmat-check.mjs
npm run typecheck
npm run build
```

## 7. Required visual QA

Create `scripts/pdmat-visual-qa.mjs` using the existing Playwright dependency.

Required screenshots:

- 1920×1080 desktop logical composition for all 10 templates
- portrait-tablet viewport verification for all 10 templates

Required assertions:

- no document/slide scrolling
- no responsive stacking
- header/footer/navigation visible and unchanged
- all mapped copy present
- decorative elements remain present
- embedded app remains inside its frame
- approved-reference templates visually compared against their reference images

If browser execution is unavailable, report exactly:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

Never convert browser unavailability into PASS.

## 8. Readiness result

**Architecture:** VERIFIED  
**Copy sources:** VERIFIED  
**Template mapping:** VERIFIED  
**Canonical references/assets:** VERIFIED in Canon v4  
**New route existence:** VERIFIED ABSENT — clean build target  
**Implementation files:** CREATED (`c350ce7`)  
**Asset staging into local Codex working tree:** REQUIRED BEFORE BUILD  
**React implementation:** COMPLETE  
**Visual QA:** COMPLETE (gallery + production deck)

### Build authorization gate

The implementation run may start only when Canon v4 is available in the Codex working tree and the run explicitly accepts this manifest plus `TEMPLATE_ARCHITECTURE_CONTRACT.md` and `APPROVED_TEMPLATE_REFERENCES.md` as the complete implementation authority.

## 9. Production cutover

- Accepted template baseline: `c350ce713d2414296a5018674b9408f8a6f7931b`.
- `/pdma2026` renders the migrated 16-slide deck from `src/app/pdma2026/presentation/` (content: `pdma2026Content.ts`; manifest: `pdma2026Manifest.tsx`). Template-mapped: 01, 03, 06, 07, 08, 09, 10, 14, 15, 16. Preserved compositions: 02, 04, 05, 11, 12, 13.
- `/pdma2026-templates` remains the gallery; all ten exemplars render the production content objects.
- Slide 15 (Embedded App template) runs `PdmaScenarioExercise`: the Secure Carolinas "Customer Order Exception Agent" challenge (shared logic: `src/components/exercise/customerOrderExceptionScenario.ts`) in the PDMA skin, plus a deterministic mini productization brief after the decision. The same component renders in the gallery and at `/pdma2026/exercise` (Slide 14's worksheet link).
- Rollback checkpoint: `3e343570ab1957513fdf8883e2efcdaa56226a5d` (roll back the cutover commit with `git revert`).
- Checks: `npm run pdma:check` (deck + gallery static contracts) and `npm run pdma:qa` (deck + gallery browser QA, then `pdma-exercise-qa.mjs`: SCC parity, brief, and fit).
