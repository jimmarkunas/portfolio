# Secure Carolinas 2026 — Presentation Contract

## Purpose

This file is the canonical current-state contract for the Secure Carolinas 2026 React presentation.

It describes the APPROVED PRESENT STATE.

It is not a history log.

Superseded design instructions must be removed rather than accumulated.

---

## Source of Truth Order

For all future presentation work:

1. Jim's latest explicit instruction
2. This `PRESENTATION_CONTRACT.md`
3. Latest explicitly approved reference screenshot
4. Current implementation on GitHub `main`
5. Historical conversation only as background

A newer explicit instruction supersedes any older conflicting instruction.

---

## Implementation Roles

### ChatGPT

ChatGPT acts as:

- current-source inspector
- design-spec maintainer
- exact Codex prompt writer
- hostile diff reviewer
- visual QA reviewer

ChatGPT does not directly implement presentation code unless Jim explicitly suspends this rule.

### Codex

Codex is the presentation code implementer.

Codex must work from the current source, not remembered source.

---

## Repository Guardrails

- Work on `main` only.
- Do not create feature branches.
- Do not modify CI/CD.
- Do not modify Hostinger configuration.
- Do not modify deployment pipelines.
- Do not recreate the presentation as HTML.
- Do not recreate the deck outside the existing React implementation.
- Prefer presentation-local changes over shared-infrastructure changes.
- Do not make unrelated changes.

---

## Change-Control Rule

Before any implementation prompt is written:

1. Read the current relevant source from `main`.
2. Identify the exact JSX, helper, class, conditional, or CSS rule responsible for each requested change.
3. Map every requested change to an exact edit target.
4. Compare the requested change against this contract.
5. If Jim's new instruction conflicts with this contract, Jim's new instruction wins.
6. Update this contract after the resulting implementation is visually approved.

Do not implement from historical chat memory alone.

---

## Visual Validation Rule

A successful:

- `npm run typecheck`
- `npm run build`

proves only that the application compiles.

It does NOT prove that a visual request is correct.

A visual task is approved only after:

1. the requested source diff is verified
2. typecheck/build succeed
3. the rendered result is visually reviewed
4. Jim explicitly approves it

Until then, describe the state as:

> Code implementation complete; visual verification remains.

---

## Drift Kill Switch

If Jim's current instruction, this contract, an approved screenshot, and the current source cannot be reconciled confidently:

- do not guess
- do not improvise
- do not substitute an easier change
- do not silently preserve stale instructions

Identify the exact conflict before implementation.

---

## Conference Design Principles

- Conference readability takes priority over fitting excessive content.
- Reduce content before shrinking typography.
- Maintain visual consistency across slides using the same component system.
- Do not introduce one-off styling unless explicitly requested.
- Approved layouts remain locked until Jim explicitly changes them.

---

## Current Approved Presentation State

### Secure Carolinas Scenario Challenge

The Secure Carolinas scenario challenge uses the existing `ScenarioProductionReadinessCheck` implementation inside `src/app/(site)/agents/ProductionReadinessCheck.tsx`.

The intro/title screen is locked.

All nine post-intro assessment screens and the final result use one shared working-header architecture:

- left side: `Audience challenge`, `Can You Get This Agent Into Production?`, `Customer Order Exception Agent`, and the scenario description
- vertical divider between columns
- right side: flat `#F4F4F5` step-identity panel
- desktop right-column width: `480px`
- assessment identity uses step number, step label/name, and short descriptor
- final identity uses `FINAL`, `PRODUCTION`, `Decision`, and the calculated decision
- the main challenge title remains on one line at normal fullscreen desktop presentation width

Assessment questions remain outside the header, between the header and option cards.

Question presentation:

- `25px` top padding
- `25px` bottom padding
- desktop size: `52px`
- question typography must not be reduced to solve layout fit

The shared post-intro working surface uses:

- background `#F4F4F5`
- no giant rounded working-surface perimeter
- no large working-surface shadow

Option state:

- selected border: `#447ACB`
- selected primary text: `#447ACB`
- selected A–S title and description: `#447ACB`
- unselected border: neutral `#D4D4D8`
- unselected text remains neutral

Foundation blocker typography:

- `FOUNDATION BLOCKER`: `22px`, bold, uppercase
- `NO GO`: `48px`
- explanation: `26px` with approximately `1.35` line-height

Step 03 business-value selection does not display the former `REFERENCE CLASSIFICATION` reveal.

Business-value state, progression, production-decision logic, and final business-value display remain intact.

A–S choices use one shared renderer.

A–S option typography:

- title: `24px`, bold
- description: `22px`
- description line-height: `1.3`

The fixed Secure Carolinas presentation-app height remains `830px` at desktop presentation width.

Scenario behavior remains unchanged:

- 9-step order
- Systems foundation logic
- Ownership foundation logic
- business-value logic
- A–S choice logic
- DEFINED / PARTIAL / UNCLEAR behavior
- GO / GO WITH CONDITIONS / NO GO calculation
- Back / Next behavior
- result calculations

Visible Secure Carolinas scenario blue is `#447ACB`.

The generic `/agents` experience is not modified by this presentation-specific state.

### Slide 17 Closing CTA

Slide 17 uses a two-column closing composition.

The left column contains only:

- `Take A.G.E.N.T.S. Back to Your Team.`
- `Download the free enterprise AI operating model + production readiness kit.`

The right column contains the single action surface.

The QR card contains exactly one instance each of:

- `DOWNLOAD THE A.G.E.N.T.S. KIT`
- the QR code
- `greatestpmever.com/agents`
- the scan instruction

There is no duplicate left-side CTA panel.

There is no duplicate left-side URL pill.

The QR code is rendered directly inside the main QR card without a nested QR container.

Approved QR-card presentation:

- maximum card width: `460px`
- card radius: `28px`
- white background
- neutral border
- subtle shadow
- QR maximum width: `360px`
- visible accent blue: `#447ACB`

### Accent and Highlight System

Secure Carolinas uses `#447ACB` as its visible blue accent.

The one-blue rule does not mean that every accent-adjacent surface becomes a solid-blue background.

Approved highlight behavior:

- subtle highlighted surfaces use neutral `#F4F4F5` or white backgrounds
- highlighted borders and accent text may use `#447ACB`
- static solid-blue surfaces must use `#447ACB` intentionally
- visible text on a static `#447ACB` surface must be white
- `#447ACB` text must never be rendered on a `#447ACB` background
- pale-blue `#EFF6FF` presentation surfaces are not used
- static solid-blue CSS enforcement uses exact class-token matching and must not activate from variant utilities such as `hover:bg-[#447ACB]`

Approved slide treatment:

- Slide 2 highlights `Human` with a neutral background, blue border, and blue text
- Slide 3 highlights `Agent` with a neutral background, blue border, and blue text
- Slide 4 uses neutral backgrounds with blue border/text treatment for `Traditional Attack Surface` and `Agentic Attack Surface`
- Slide 6 uses neutral backgrounds with blue borders for the higher Authority ladder states
- Slide 8 uses neutral backgrounds with blue borders for the Evidence pipeline

These treatments preserve visual hierarchy without using solid-blue blocks for subtle emphasis.

---

## Approved Baseline

Commit SHA: c36fab08ba231e1018f14ee8b54187b7af3ef068

Date approved: 2026-08-24

The baseline is set only after the current presentation state has been audited and Jim explicitly approves it.
