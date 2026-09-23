# PDMA 2026 — Visual Implementation Contract

**Status:** Canonical visual implementation contract  
**Applies to:** `/pdma2026` concept design, React implementation, visual repair, and redesign work  
**Approved:** 2026-09-23

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

| Slide | Baseline reference | State | Implementation design status | Approved implementation reference |
| --- | --- | --- | --- | --- |
| 01 | Figma `475:259` | `LOCKED` — north star | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 02 | Figma `475:274` | `LOCKED` — north star | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 03 | Figma `475:366` | `LOCKED` — north star | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 04 | Figma `475:369` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 05 | baseline `475:372` | `STYLE_REWORK` | `APPROVED` | `APPROVED_ASSET_PACKAGE` — see §4 |
| 06 | baseline `475:397` | `STYLE_REWORK` | `DESIGN_REQUIRED` | none |
| 07 | Figma `475:400` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 08 | Figma `475:403` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 09 | baseline `475:406` | `STYLE_REWORK` | `DESIGN_REQUIRED` | none |
| 10 | baseline `475:409` | `REBUILD_STYLE` | `DESIGN_REQUIRED` | none |
| 11 | Figma `475:412` | `IMPLEMENTATION_REPAIR` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 12 | baseline `475:415` | `STYLE_REWORK` | `DESIGN_REQUIRED` | none |
| 13 | baseline `475:418` | `STYLE_REWORK` | `DESIGN_REQUIRED` | none |
| 14 | Figma `475:421` | `LOCKED` | `APPROVED` | `APPROVED_FIGMA_FRAME` |
| 15 | baseline `475:424` | `REBUILD_STYLE` | `DESIGN_REQUIRED` | none |

This table is the canonical PDMA slide-state/design-gate registry. Do not create a second registry.

`DESIGN_REQUIRED` means React visual mutation is blocked until Jim approves an implementation reference of any valid type above.

`APPROVED` means React may implement against the explicitly approved reference type. Do not substitute another reference type or older concept because it is easier.

## 4. Slide 05 — approved asset package; NO FIGMA REQUIRED

Jim explicitly approved Slide 05 implementation from this asset/composition package. Figma is **not required** for Slide 05 implementation and agents must not block on a Figma node.

Approved assets:

- `public/pdma2026/slide-05/slide-05-ambiguity-core.png` — main right-side hero graphic;
- `public/pdma2026/slide-05/slide-05-input-streams.png` — three incoming signal lines;
- `public/pdma2026/slide-05/slide-05-ambiguity-composite-reference.png` — composition reference only; do not render it in the final slide.

Approved semantic composition:

- `UNCLEAR PROBLEM.`
- `UNCLEAR OWNER.`
- `UNCLEAR AUTHORITY.`

feed into the tangled ambiguity core, producing:

- `CONFUSION AT MACHINE SPEED.`

Implementation requirements:

- native React/CSS for all text, shell, header, footer, and layout structure;
- approved PNGs only for visual graphics;
- the composite-reference image owns the relative stream/core geometry;
- no new effects, cards, panels, alternate metaphors, or redesign;
- shared shell/chrome remain unchanged.

For Slide 05, any instruction saying an approved Figma node is required is superseded by this section.

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

For `DESIGN_REQUIRED` slides:

`concept/reference package → Jim approval → record approved implementation reference → React implementation → browser QA → LOCK`

Only one slide may be under active React/Codex visual mutation at a time. Concept design for later slides may run in parallel.

## 8. React mutation boundary

For a one-slide task, modify only files explicitly allowed by the implementation prompt.

Normal slide-local surface may include:

1. target slide component;
2. target-owned slide style source;
3. target-owned geometry entry;
4. target-dedicated assets;
5. shared primitive only with Jim's explicit authorization.

Forbidden without explicit authorization:

- another slide;
- shared shell/header/footer;
- shared title/typography primitives;
- global CSS or global geometry behavior;
- manifest architecture;
- another asset/styling pipeline;
- repo-wide cleanup/refactor.

No `while I'm here` changes.

## 9. Three-prompt implementation budget — HARD

Each slide has a maximum of **3 Codex implementation prompts** from first React mutation through visual PASS. Target is 1–2 prompts.

### Prompt 1 — complete implementation

Implement the complete approved composition in one bounded pass. Inspection must happen inside the same prompt; do not waste a prompt on planning/capability reporting.

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

Locked Slides 01, 02, 03, 04, 07, 08, and 14 are immutable unless Jim explicitly reopens them.

Any authorized shared change must prove locked slides remain visually unchanged.

## 12. Stop rules

If target status is `DESIGN_REQUIRED`:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation`

If the target is `LOCKED`:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

If a task requires an unapproved visual decision, shared-system change, locked-slide change, or materially different composition:

`PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`

If Prompt 3 finishes without visual PASS:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

## 13. No second system

Continue using current GitHub implementation, `pdma.config.ts`, current manifest, `pdmaGeometry.ts`, current PDMA styling ownership, `immutable-surfaces.json`, and existing targeted checks/QA.

Do not create another manifest, geometry registry, asset registry, styling pipeline, scheduler, or slide-state database.

## 14. Current active recovery target

Jim's current active React recovery target is **Slide 05**.

Slide 05 is `STYLE_REWORK` + `APPROVED` with an `APPROVED_ASSET_PACKAGE` reference as defined in §4.

Do not require or read Figma for Slide 05 unless Jim explicitly changes that instruction.
