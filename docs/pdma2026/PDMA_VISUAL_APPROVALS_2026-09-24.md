# PDMA 2026 — Visual Approvals — September 24, 2026

**Status:** CANONICAL CURRENT APPROVALS  
**Scope:** PDMA visual remediation only  
**Production baseline:** `9c4b0ad0a352577755af49a24ee9e403bfdcd706`

This document records Jim Markunas's accepted visual references for the HERO and Brand / Reveal patterns so future chats and implementation agents can resume without reconstructing decisions from conversation history.

This file **supersedes the pending Step 1 / Step 2 design status** in `docs/pdma2026/PDMA_VISUAL_REMEDIATION_ROADMAP.md`. The remediation roadmap still owns the sequence; this file owns the accepted visual status for the two completed steps.

## Authority

1. Jim's explicit current instruction.
2. Canonical JM Personal Brand Figma for exact approved visual truth after reconstruction/promotion.
3. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md` for PBDS implementation boundaries.
4. `docs/pbds-presentation-components.md` for runtime/chrome/primitives.
5. Notion `PBDS Presentation Modality — Editorial Orb System` for durable visual grammar.
6. This document for the current accepted HERO and Brand / Reveal references.

The approved reference PNGs are QA/composition targets only. Semantic text and UI must remain native/editable in React/Figma.

---

# 1 — HERO Template v1 — Centered Signal Field

**Status:** APPROVED REFERENCE — READY FOR DETERMINISTIC RECONSTRUCTION  
**First approved consumer:** Slide 05 — `DON'T AUTOMATE AMBIGUITY.`

## Purpose

Use for hero / thesis / punchline slides that need one dominant message with restrained atmospheric support.

## Approved exception

HERO slides may break the normal PBDS presentation title-alignment rule.

For this archetype, the core semantic composition may be **centered** when the approved reference calls for it. This is a bounded HERO exception, not permission to center ordinary content slides.

## Canonical composition

- Near-black field.
- Oversized centered headline.
- Centered diagnostic / input row beneath the headline.
- Centered operator / equation moment.
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

## Native vs decorative split

Keep native/editable:

- headline;
- diagnostic row;
- operator;
- payoff;
- header;
- footer;
- navigation;
- rules;
- canonical asterisk;
- all spacing/alignment behavior.

Decorative image only:

- signal-field atmosphere.

## Reject

- planets;
- portals;
- reflective floors;
- tangled atom graphics;
- generic sci-fi scenes;
- card layouts;
- decorative objects competing with the message;
- flattened semantic text in the background asset.

---

# 2 — Brand / Reveal Template v1 — Particle Horizon Reveal

**Status:** APPROVED REFERENCE — READY FOR DETERMINISTIC RECONSTRUCTION  
**First approved consumer:** Slide 11 — `A.G.E.N.T.S.`

## Purpose

Use when introducing a named framework, product, system, method, or brand as a reveal moment.

The audience should feel that they are **meeting the thing**, not inspecting an architecture diagram.

## Canonical composition

- Near-black field.
- Enormous centered `A.G.E.N.T.S.` naming moment in white + PBDS magenta.
- Centered one-line supporting proposition directly underneath.
- One giant cropped magenta particle hemisphere / horizon behind the upper title field.
- Six equal native semantic columns across the lower half.
- Each column contains:
  - oversized magenta initial;
  - bold domain name;
  - exact corresponding product question.
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

## Decorative asset

The only required image asset is a giant magenta particle hemisphere / horizon:

- cropped by the frame;
- electric metallic-dot / particulate construction;
- strong magenta rim energy;
- subtle particle scatter;
- positioned behind the title field;
- visually subordinate to `A.G.E.N.T.S.` and the six semantic columns.

## Native vs decorative split

Keep native/editable:

- `A.G.E.N.T.S.`;
- supporting proposition;
- all six initials;
- all six domain labels;
- all six product questions;
- separators;
- header;
- footer;
- navigation;
- canonical asterisk.

Decorative image only:

- particle hemisphere / horizon.

## Reject

- six cards around a hub;
- architecture-diagram treatment;
- generic SaaS dashboard styling;
- extra orbital UI;
- flattened framework text inside the particle asset;
- a decorative hemisphere that overwhelms the naming moment;
- additional decorative objects added only to fill space.

---

# Current remediation status

1. HERO template — **APPROVED**.
2. Brand / Reveal template — **APPROVED**.
3. New Slide 13 — **NEXT DESIGN TASK**.
4. Slide 12 tracking plan — **OPEN / NO COMPOSITION APPROVED**.

Slide 12 still requires effortless one-to-one audience tracking from every A.G.E.N.T.S. domain to its corresponding product requirement. Do not implement a new Slide 12 composition before Jim approves that tracking model.

## Implementation rule

For both approved templates:

1. Use the approved full-slide image only as a composition / QA reference.
2. Rebuild semantic content natively.
3. Keep decorative artwork independently controllable.
4. Preserve the one-plane 1920×1080 presentation runtime.
5. Do not modify shared header/footer/navigation/title behavior merely to fit the new compositions.
6. Verify the reconstructed slide against the approved reference before promoting the pattern into the reusable PBDS template set.

## Asset package naming

The working asset bundle for these approvals uses:

- `slide-05-hero-approved-reference.png`
- `slide-05-hero-signal-field.png`
- `slide-11-brand-reveal-approved-reference.png`
- `slide-11-brand-reveal-particle-horizon-primary.png`
- `slide-11-brand-reveal-particle-horizon-alt.png`

Reference images are QA-only. Decorative asset PNGs are implementation inputs.