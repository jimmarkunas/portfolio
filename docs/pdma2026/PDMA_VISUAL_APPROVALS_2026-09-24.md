# PDMA 2026 — Visual Approvals — September 24, 2026

**Status:** CANONICAL CURRENT APPROVALS  
**Scope:** PDMA visual remediation and accepted reference status  
**Accepted production baseline:** `116c8f7d40c845e27601e578effba992a28ef050`

This document records Jim Markunas's accepted remediation references for Slides 05, 11, 12, and 13 so future chats and implementation agents do not reconstruct decisions from conversation history.

The full 16-slide state/design-gate registry lives only in `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`. This file is supporting approval context, **not a second slide-state registry**.

## Authority

1. Jim's explicit current instruction.
2. The approved implementation reference registered in `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`.
3. Canonical JM Personal Brand Figma where the contract registers Figma visual truth.
4. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md` for PBDS implementation boundaries.
5. `docs/pbds-presentation-components.md` for runtime/chrome/primitives.
6. Notion `PBDS Presentation Modality — Editorial Orb System` for durable visual grammar.
7. This document for the accepted remediation-reference details below.

Approved full-slide reference PNGs are QA/composition targets only. Semantic text and UI remain native/editable in React/Figma.

---

# 1 — HERO Template v1 — Centered Signal Field

**Status:** APPROVED · IMPLEMENTED · LOCKED  
**Approved consumer:** Slide 05 — `DON'T AUTOMATE AMBIGUITY.`  
**Approved reference:** `slide-05-hero-centered-signal-field/slide-05-hero-approved-reference.png`

## Purpose

Use for hero / thesis / punchline slides that need one dominant message with restrained atmospheric support.

## Approved exception

HERO slides may break the normal PBDS presentation title-alignment rule.

For this archetype, the core semantic composition may be **centered** when the approved reference calls for it. This is a bounded HERO exception, not permission to center ordinary content slides.

## Canonical composition

- Near-black field.
- Oversized centered headline.
- Centered diagnostic/input row beneath the headline.
- Centered operator/equation moment.
- Centered closing payoff statement.
- One restrained abstract signal field behind the content.
- Generous negative space.
- Existing presentation header/footer/navigation remain unchanged.

## Slide 05 approved arrangement

Headline:

`DON'T AUTOMATE`

`AMBIGUITY.`

Diagnostic row:

`UNCLEAR PROBLEM.`  
`UNCLEAR OWNER.`  
`UNCLEAR AUTHORITY.`

Operator:

`=`

Payoff:

`CONFUSION AT MACHINE SPEED.`

## Approved decorative language

Use opposing vertical signal curtains / waveform fields:

- white / silver on the left;
- PBDS magenta on the right;
- both fade toward the black center;
- subtle vertical signal/glitch rhythm;
- atmosphere stays behind the semantic content and never becomes the subject.

The older tangled-core / reflective-floor Slide 05 package is rejected and retired.

---

# 2 — Brand / Reveal Template v1 — Particle Horizon Reveal

**Status:** APPROVED · IMPLEMENTED · LOCKED  
**Approved consumer:** Slide 11 — `A.G.E.N.T.S.`  
**Approved reference:** `slide-11-brand-reveal-particle-horizon/slide-11-brand-reveal-approved-reference.png`

## Purpose

Use when introducing a named framework, product, system, method, or brand as a reveal moment.

The audience should feel that they are **meeting the thing**, not inspecting an architecture diagram.

## Canonical composition

- Near-black field.
- Enormous centered `A.G.E.N.T.S.` naming moment in white + PBDS magenta.
- Centered one-line supporting proposition directly underneath.
- One giant cropped magenta particle hemisphere / horizon behind the upper title field.
- Six equal native semantic columns across the lower half.
- Each column contains an oversized magenta initial, bold domain name, and exact product question.
- Thin magenta vertical separators provide rhythm without creating card containers.
- Existing presentation header/footer/navigation remain unchanged.
- Footer closure remains `6 QUESTIONS • 1 PRODUCTIZATION STANDARD`.

## Slide 11 semantic order

1. `A — AUTHORITY` — What may AI decide and do?
2. `G — GUARDRAILS` — What constraints must be built into the product?
3. `E — EVIDENCE` — What operational record must the product create?
4. `N — NETWORK & INTEGRATIONS` — What systems, data, and permissions may it touch?
5. `T — TRANSFER & ESCALATION` — When must a human intervene?
6. `S — SUCCESS & ACCOUNTABILITY` — What KPI defines success + which human owns the outcome?

Supporting proposition:

`Six product questions that turn an Agentic AI idea into something a team can safely build, test, and operate.`

---

# 3 — Slide 12 — Translation / Traceability v1

**Status:** APPROVED · IMPLEMENTED · LOCKED  
**Slide:** `TURN THE FRAMEWORK INTO PRODUCT.`  
**Approved reference:** `slide-12-approved-reference.png`

## Approved composition

- Left A.G.E.N.T.S. framework panel with circled A–S initials.
- Six magenta rails originate from their corresponding framework rows.
- Rails converge on one magenta transformation node.
- Right magenta requirements panel preserves one-to-one A/G/E/N/T/S mapping.
- Framework and requirement rows remain directly trackable from presentation distance.
- Semantic copy remains native/editable.
- Decorative edge orbs remain independently controlled.

## Acceptance

The accepted implementation aligns rail origins to the same row tracks used by the framework panel and was visually compared against the approved 1920×1080 reference. Production QA records the accepted visual score as `12.3` against a limit of `14`.

---

# 4 — Slide 13 — Before / Bridge / After v1

**Status:** APPROVED · IMPLEMENTED · LOCKED  
**Slide:** `AN IDEA + AI ≠ PRODUCT SPEC.`  
**Approved reference:** `slide-13-approved-reference.png`

## Approved composition

- Left BEFORE artifact is intentionally smaller/weaker.
- Center bridge uses the A.G.E.N.T.S. transformation statement.
- Right AFTER artifact is the visually dominant production-ready spec.
- Takeaway and three outcomes preserve:
  - `LESS REWORK`
  - `FASTER DELIVERY`
  - `HIGHER CONFIDENCE`
- The obsolete side statement `CLARITY / TURNS IDEAS / INTO IMPACT.` is not rendered in the accepted composition; its source copy remains preserved in `pdma2026Content.ts`.
- Semantic copy remains native/editable.
- Decorative edge orbs remain independently controlled.

## Acceptance

The accepted implementation was visually compared against the approved 1920×1080 reference. Production QA records the accepted visual score as `11.8` against a limit of `13`.

---

# Current remediation status

The remediation sequence is complete:

1. HERO template / Slide 05 — **COMPLETE / LOCKED**.
2. Brand / Reveal template / Slide 11 — **COMPLETE / LOCKED**.
3. Slide 13 before→after composition — **COMPLETE / LOCKED**.
4. Slide 12 translation/traceability composition — **COMPLETE / LOCKED**.

The full production deck now contains 16 accepted slides. There is no active remediation target.

## Implementation rule

For accepted references:

1. Use approved full-slide images only as composition / QA references.
2. Keep semantic content native/editable.
3. Keep decorative artwork independently controllable.
4. Preserve the one-plane 1920×1080 presentation runtime.
5. Do not modify shared header/footer/navigation/title behavior merely to fit a slide-local change.
6. Any future visual mutation requires Jim to explicitly reopen the target slide or bounded surface.

## Reference package naming

Current remediation QA references include:

- `slide-05-hero-centered-signal-field/slide-05-hero-approved-reference.png`
- `slide-11-brand-reveal-particle-horizon/slide-11-brand-reveal-approved-reference.png`
- `slide-12-approved-reference.png`
- `slide-13-approved-reference.png`

Reference images are QA-only. Decorative asset files remain implementation inputs where applicable.
