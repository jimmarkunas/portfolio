# CPS Energy — Source Brief

Use this file as the **source of truth for story, tone, metrics, and section intent**.

This is **not** the runtime app schema.
The existing runtime file in the repo remains the source of truth for the schema the site expects.

## Intended use

Claude Code / Codex should read:

1. `docs/case-studies/cps-energy-source-brief.md`
2. `src/content/case-studies/cps-energy.ts`

Then update the runtime file so it reflects this brief **without breaking the app structure**.

## Non-negotiable rules

- Preserve exact metrics.
- Keep first-person ownership where the schema allows.
- Do not rewrite the voice into generic PM language.
- Do not turn this into resume copy.
- Do not invent unrelated sections.
- Treat this brief as the source of truth for **narrative, hierarchy, and emphasis**.
- Treat the existing runtime file as the source of truth for **field names, types, and import patterns**.

---

## Positioning

This case study should position Jim Markunas as a **digital transformation / platform modernization operator** who can walk into a messy, public-facing service failure, identify the real business and operating problems quickly, align the stakeholders, and turn the work into measurable improvement.

This is **not** a generic “project management” story.
This is a **commercial judgment + stakeholder alignment + solutioning + delivery leadership** story.

### Core angle

I turned a broken streetlight reporting and repair process into a more visible, connected, and operationally effective public-service platform.

### Public-safe brand framing

You hire someone else to manage the work.
You hire me when the work actually has to succeed.

---

## Case study goal

A hiring manager should finish this case study believing:

- Jim can diagnose the real problem fast.
- Jim can align messy stakeholders.
- Jim can shape both product and delivery.
- Jim can drive measurable business and operational outcomes.
- Jim is more than a PM.

A press / podcast / executive audience should feel:

- this is a strong modernization story,
- it has narrative heat,
- and Jim was central to making it happen.

---

## Approved company / project framing

- **Client:** CPS Energy
- **Partner / vendor context:** Dalkia
- **Project framing:** Smart Streetlight / Smart City Operations modernization
- **Location:** San Antonio, Texas
- **Timeline:** August 2024 – April 2025
- **Role framing:** Program & Product Lead

> Note: if the runtime schema needs a slightly different role string, preserve the same meaning.

---

## Approved outcomes and proof points

These metrics must remain exact.

- **73% fewer repair calls**
- **Repair windows reduced from roughly 3 weeks to 1–4 days**
- **43% fewer truck rolls**
- **135K+ streetlights in scope**
- **2025 Global Smarty 20 Award**

Do not soften these.
Do not paraphrase them into vague language.
Do not replace them with rounded or watered-down copy.

---

## Story summary

Residents in San Antonio were dealing with dark streets, slow repair timelines, poor visibility into status, and a support experience that felt broken.

Under the surface, the problem was bigger than maintenance.
The workflow was fragmented across resident intake, call-center / IVR paths, SAP, dispatch, field updates, and follow-up orders. Ownership was unclear, the service model was opaque, and the initiative had political pressure because the issue was visible to the public.

Jim led the product, program, and solutioning work needed to align CPS Energy, Dalkia, and internal stakeholders around a more coherent service model. He helped shape the resident reporting experience, the operational flow, the field-work process, and the system integration path tying the ecosystem together.

The result was a more visible and measurable public-service platform that reduced support demand, sped up repairs, improved field efficiency, and contributed to broader smart-city recognition.

---

## What was broken before

### Customer-side problems

- Residents had to call or use inefficient service channels.
- It was difficult to identify the exact streetlight asset.
- Repair status visibility was poor or nonexistent.
- Customers could not trust the process because they could not see progress.

### Internal / operating problems

- Workflow fragmentation across 311 / IVR / SAP / dispatch / follow-up paths.
- Unclear ownership across CPS, Dalkia, and related stakeholders.
- Legacy process complexity created slow response and duplicate effort.
- Stakeholders were not aligned around one clear operating model.
- Public pressure made the problem politically visible.

---

## What Jim personally did

This section matters. The copy should emphasize Jim’s direct role, not hide behind vague team language.

Approved emphasis:

- Led the conversations that aligned CPS, Dalkia, and internal stakeholders around scope and service model.
- Helped shape the resident-facing reporting and status experience.
- Pushed key prioritization decisions through, including SAP-related work.
- Helped define the operational and system flow connecting customer experience to field work.
- Used the working POC as a forcing function to create buy-in and move the project from debate into delivery.

### Three decisions that changed the trajectory

1. **In-field iPad workflow**
   Jim helped drive alignment around using in-field iPads tied into Dalkia and CPS systems so crews could receive work, update status, and return information in real time.

2. **Resident reporting UX**
   Jim led the UI / product direction for a simpler reporting experience so residents could identify the exact streetlight and get out of the black hole of unclear ownership and poor visibility.

3. **SAP prioritization / stakeholder alignment**
   Jim brought the right stakeholder groups together to prioritize the SAP work over competing roadmap items and kept negotiations moving until the system path was clear.

---

## Solution narrative

This should not be framed as “we launched a website.”
The stronger framing is:

**We changed the service model.**

### Resident experience

- Interactive map-based reporting flow.
- Residents could identify the exact streetlight.
- Digital issue submission replaced part of the old support burden.
- Repair-complete or progress visibility improved the trust loop.

### Field operations

- In-field iPad workflow for crews.
- Real-time work-order receipt and status updates.
- Cleaner connection between field execution and central systems.
- Better coordination between Dalkia and CPS operations.

### Systems / operating model

- Terrago integration.
- SAP, ARM, and GIS in the ecosystem.
- Shared operational visibility across outages, work orders, crews, and citywide inventory.
- Shift from fragmented tools and handoffs toward a more coherent repair pipeline.

---

## Tone guidance

The tone should be:

- **60% sharp operator**
- **20% polished executive**
- **20% bold / magazine-style confidence**

The tone should **not** be:

- too PM
- too resume-like
- too corporate
- too architecture-heavy
- too “Agile process” centric

### Good tone examples

- I made the machine work together.
- This was a service redesign disguised as a technology project.
- The software mattered because it forced a better way of working.
- The issue was less about bulbs and more about bureaucracy, legacy systems, and ownership.

### Bad tone examples

- Responsible for end-to-end delivery of…
- Managed cross-functional teams to ensure success…
- Leveraged agile methodologies to optimize outcomes…
- Collaborated with stakeholders across the organization…

That kind of phrasing will weaken the case study.

---

## Recommended section hierarchy

Map this into the runtime file only as far as the current schema allows.

### 1. Hero

Suggested headline direction:

**CPS Energy: Smart Streetlight & Smart City Operations**

Suggested intro direction:

Residents were reporting dark streets, support teams were juggling fragmented systems, and city leaders were taking heat for a service model nobody could clearly explain. I led the product, program, and solutioning work to connect customer reporting, field operations, and core utility systems into one working flow that cut calls, sped up repairs, and helped turn a public optics problem into an award-winning smart city story.

### 2. At a glance

Should communicate:

- public service modernization
- customer experience + operations + systems integration
- measurable outcomes

### 3. Problem statement

Must emphasize:

- visible public pain
- dark streets / local frustration
- fragmented systems
- unclear ownership
- slow repair loop
- political visibility

### 4. My role

Must emphasize Jim’s personal ownership of:

- stakeholder alignment
- product / UX direction
- program leadership
- prioritization decisions
- solutioning / operating-model clarity

### 5. Solution

Must frame the work as:

- one front door for residents,
- one clearer operational flow for crews,
- one more coherent operating model for CPS.

### 6. Impact

Must include:

- 73% fewer repair calls
- 1–4 day repair window
- 43% fewer truck rolls
- 135K+ streetlights
- 2025 Global Smarty 20 Award

### 7. Delivery / implementation

Should show a sharp progression such as:

- diagnose
- align
- design
- prove
- launch

### 8. Closing takeaway

Should land on:

Jim is the kind of operator who can walk into a messy environment, simplify the real problem, align the room, and drive the work into measurable business and service outcomes.

---

## Suggested copy blocks

These are approved copy fragments that Claude / Codex can use or adapt conservatively.

### Short card version

I led the product and program work behind a smart streetlight modernization effort that connected resident reporting, field operations, and utility systems into one flow — cutting repair calls by 73%, tightening repair windows from roughly 3 weeks to 1–4 days, and reducing truck rolls by 43%.

### Strong role framing

I was not there to just manage the project. I was there to align the stakeholders, shape the service model, and get the ecosystem working end to end.

### Strong systems framing

Before this work, the process was fragmented across intake, dispatch, SAP, and follow-up orders that could disappear between teams. The new model tied customer reporting, field execution, and repair visibility into a more coherent service flow.

### Strong closing framing

This was a service redesign disguised as a technology project. The software mattered because it forced a better way of working.

---

## Visual / asset guidance

Preferred assets if available:

- interactive-map UI screenshots
- streetlight reporting screens
- workflow diagram from the deck
- recognition / award image
- local news still or coverage reference if available and appropriate

If assets are missing, use placeholders without changing the story emphasis.

---

## Agent instruction block

Use this exact logic when updating the runtime file:

- Read the source brief first.
- Read the existing runtime `cps-energy.ts` second.
- Preserve the runtime schema.
- Pull the story, metrics, and tone from the brief.
- Adapt only where needed to fit the schema.
- Keep the copy strong, specific, and first-person where appropriate.
- Avoid resume phrasing.
- Avoid generic PM phrasing.
- Avoid weakening the narrative into neutral portfolio filler.

