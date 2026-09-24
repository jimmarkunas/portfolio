# PDMA 2026 — Visual Implementation Contract

**Status:** Canonical visual implementation contract  
**Applies to:** `/pdma2026` concept design, React implementation, visual repair, and redesign work  
**Reconciled:** 2026-09-24  
**Accepted production baseline:** `116c8f7d40c845e27601e578effba992a28ef050`

## 1. Purpose

PDMA design approval and React implementation are separate phases.

A slide may be implemented only after Jim has approved an **implementation reference**. An approved implementation reference does **not** have to be Figma.

Valid approved implementation references are:

1. `APPROVED_FIGMA_FRAME` — an explicitly approved Figma node;
2. `APPROVED_ASSET_PACKAGE` — explicitly approved visual assets plus composition/placement instructions or a composition-reference image;
3. `APPROVED_SCREENSHOT_REFERENCE` — an explicitly approved full-slide screenshot/reference with sufficient deterministic implementation detail.

Do not force Figma into a workflow when Jim has approved another reference type.

## 2. Authority order

Resolve conflicts in this order:

1. Jim's explicit current instruction.
2. The explicitly approved implementation reference for the target slide.
3. This contract.
4. `docs/pbds-presentation-components.md` for PBDS/runtime boundaries.
5. Current GitHub `main` for implementation truth.
6. Current baseline slide/reference for content or structure only.
7. Historical chats, retired concepts, and old screenshots.

## 3. Canonical slide-state and design-gate registry

The current production deck contains **16 accepted slides**. Every slide is `APPROVED` and `LOCKED` at baseline `116c8f7d40c845e27601e578effba992a28ef050`.

| Slide | Accepted implementation reference | State | Implementation design status | Approved implementation reference type |
| --- | --- | --- | --- | --- |
| 01 | Figma `475:259` | `LOCKED` — north star | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 02 | Figma `475:274` | `LOCKED` — north star | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 03 | Figma `475:366` | `LOCKED` — north star | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 04 | Figma `475:369` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 05 | `slide-05-hero-centered-signal-field/slide-05-hero-approved-reference.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 06 | Template Canon v4 `hub-ecosystem/hub-ecosystem-reference-v1.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 07 | Figma `475:400` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 08 | Figma `475:403` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 09 | Template Canon v4 `flow-scenario/flow-scenario-reference-v1.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 10 | Template Canon v4 `structured-content-action/structured-content-action-reference-v1.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 11 | `slide-11-brand-reveal-particle-horizon/slide-11-brand-reveal-approved-reference.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 12 | `slide-12-approved-reference.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 13 | `slide-13-approved-reference.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 14 | Figma `475:421` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 15 | Template Canon v4 `embedded-app/embedded-app-reference-v1.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |
| 16 | Template Canon v4 `end-card/end-card-reference-v1.png` | `LOCKED` | `APPROVED` | `APPROVED_SCREENSHOT_REFERENCE` |

This table is the **single canonical PDMA slide-state/design-gate registry**. Do not create a second registry.

Template Canon v4 references are defined by `docs/pdma2026/template-system/APPROVED_TEMPLATE_REFERENCES.md`. Slides 05/11/12/13 are scored against their approved full-slide references by `scripts/pdma-deck-visual-qa.mjs`.

`DESIGN_REQUIRED` remains a valid future state only when Jim explicitly opens a new visual direction without yet approving an implementation reference.

`APPROVED` means an implementation reference exists. `LOCKED` means the accepted production slide is not writable unless Jim explicitly reopens the target slide or a bounded surface within it.

## 4. Accepted remediation references

The prior Slide 05 tangled-core asset package is **retired** and is not an approved implementation reference.

Current accepted remediation references are:

- Slide 05 — HERO / Centered Signal Field: `slide-05-hero-centered-signal-field/slide-05-hero-approved-reference.png`.
- Slide 11 — Brand / Reveal / Particle Horizon: `slide-11-brand-reveal-particle-horizon/slide-11-brand-reveal-approved-reference.png`.
- Slide 12 — Translation / Traceability: `slide-12-approved-reference.png`.
- Slide 13 — Before / Bridge / After: `slide-13-approved-reference.png`.

Semantic text remains native/editable. Decorative artwork remains independently controllable. The approved full-slide images are composition/QA references, not flattened production slides.

## 5. Visual north star

Slides 1–3 establish the deck's visual universe.

> **Build a sophisticated editorial space-system derived from Slides 1–3. Use abstract planetary scale, exploding/orbital geometry, atmospheric depth, radial motion, and controlled fragmentation as the deck's recurring visual language. Preserve PBDS typography, composition discipline, negative space, and brand magenta. Avoid generic SaaS diagrams, dashboard graphics, clip-art metaphors, conventional flowcharts, or unrelated illustration styles.**

Do not force a literal planet onto every slide.

## 6. PBDS/runtime invariants

Preserve:

- 1920×1080 canonical semantic plane;
- one uniform semantic transform at runtime;
- approved shared header/footer shell;
- Brand Magenta `#FF2FAE`;
- near-black presentation field;
- Inter / Inter Display typography;
- canonical 2012 five-leg asterisk;
- native/editable semantic text;
- existing presentation architecture.

Do not change shared chrome to solve a slide-local problem.

## 7. Concept-design workflow

A separate concept-design agent may work ahead in parallel.

Its job is to produce **concept images, approved assets, composition references, and implementation-critical notes**. It does not need Figma unless Jim explicitly asks for Figma.

For a future `DESIGN_REQUIRED` target:

`concept/reference package → Jim approval → record approved implementation reference → React implementation → browser QA → LOCK`

Only one slide may be under active React/Codex visual mutation at a time. Concept design for later slides may run in parallel.

## 8. React mutation boundary

All 16 current production slides are locked. A visual mutation requires Jim to explicitly reopen the target slide or a bounded target surface.

For a one-slide task, modify only files explicitly allowed by the implementation prompt.

Normal slide-local surface may include:

1. target slide component;
2. target-owned slide style source;
3. target-owned decorative geometry/assets;
4. shared primitive only with Jim's explicit authorization.

Forbidden without explicit authorization:

- another slide;
- shared shell/header/footer;
- shared title/typography primitives;
- global CSS or global geometry behavior;
- manifest architecture;
- another asset/styling pipeline;
- repo-wide cleanup/refactor.

No `while I'm here` changes.

If Jim explicitly reopens only a decorative surface, semantic composition, copy, shared chrome, and the existing logical-canvas `x/y/w/h` anchors remain frozen unless the same instruction explicitly changes them.

## 9. Three-prompt implementation budget — HARD

Each reopened slide has a maximum of **3 Codex implementation prompts** from first React mutation through visual PASS. Target is 1–2 prompts.

### Prompt 1 — complete implementation

Implement the complete approved delta in one bounded pass. Inspection must happen inside the same prompt; do not waste a prompt on planning/capability reporting.

### Prompt 2 — evidence-based correction

Use the actual browser render to correct all demonstrated implementation deltas that can be coherently repaired together. No redesign or scope expansion.

### Prompt 3 — final correction only

Correct only remaining demonstrated visual defects. No redesign, refactor, architecture work, or speculative cleanup.

After Prompt 3, if visual PASS is not reached:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

A fourth implementation prompt requires Jim's explicit override.

## 10. Visual QA

For every React visual mutation:

1. start from or capture a full-slide browser render at the canonical QA viewport;
2. freeze shared chrome and named anchors;
3. compare the render against the **approved implementation reference**, whatever its registered type;
4. enumerate concrete visible deltas only;
5. run `npm run pdma:check -- --slide NN`;
6. run `npm run pdma:qa -- --slide NN`;
7. do not claim PASS from source/typecheck/geometry/build alone.

If browser capture is unavailable:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

Do not continue speculative mutation.

## 11. Locked-slide regression rule

Slides **01–16 are locked** at the accepted production baseline unless Jim explicitly reopens a target.

Any authorized shared change must prove all non-target locked slides remain visually unchanged. If only a bounded surface is reopened, all other surfaces on that slide remain frozen too.

## 12. Stop rules

If target status is `DESIGN_REQUIRED`:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation`

If the target is `LOCKED` and Jim has not explicitly reopened the requested target/surface:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

If a task requires an unapproved visual decision, shared-system change, locked-slide change outside the explicit reopen, or materially different composition:

`PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`

If Prompt 3 finishes without visual PASS:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

## 13. No second system

Continue using the current GitHub implementation, `presentation/pdma2026Content.ts`, `presentation/pdma2026Manifest.tsx`, the existing `/pdma2026-templates` component system, current PDMA styling ownership, `DecorativeLayer`, and existing targeted checks/QA.

Do not create another manifest, geometry registry, asset registry, styling pipeline, scheduler, or slide-state database.

## 14. Current production state

There is **no active recovery target**.

The entire 16-slide production deck is accepted and locked at `116c8f7d40c845e27601e578effba992a28ef050`.

Future visual work begins only from Jim's explicit instruction reopening a named slide or bounded visual surface. That instruction must define the allowed mutation surface; everything else stays frozen.
