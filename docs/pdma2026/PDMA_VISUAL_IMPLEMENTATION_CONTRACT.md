# PDMA 2026 — Visual Implementation Contract

**Status:** Canonical visual implementation contract  
**Applies to:** `/pdma2026` React presentation, PDMA Figma translation, and all PDMA visual repair/redesign tasks  
**Approved:** 2026-09-23  

## 1. Purpose

The PDMA presentation is already designed. Implementation work must translate approved design intent into React without rediscovering the visual language, redesigning unrelated slides, or reopening accepted work.

The operating loop is:

> **Figma reference → bounded React implementation → browser capture → compare → demonstrated correction → PASS → LOCK**

Do not substitute architecture work, generalized cleanup, or creative reinterpretation for this loop.

## 2. Authority order

For PDMA visual work, resolve conflicts in this order:

1. Jim's explicit current instruction.
2. Canonical PDMA Figma final-deck frame for the target slide.
3. This contract.
4. `docs/pbds-presentation-components.md` for PBDS presentation primitives and runtime geometry.
5. The current approved slide-specific task brief.
6. Current React implementation on GitHub `main` for what actually exists.
7. Historical chats, old screenshots, retired concepts, and previous reconstruction attempts.

Do not reconstruct design intent from historical chat when the canonical Figma frame and this contract answer the question.

## 3. Canonical Figma references

Canonical file:

`https://www.figma.com/design/3ZYkEtZVyRH9B2DfVpersf/JM-Personal-Brand-V2`

Final-deck section: `475:258` — `PDMA / FINAL DECK — 15 SLIDES`

| Slide | Canonical final frame | State |
| --- | --- | --- |
| 01 | `475:259` | `LOCKED` — north star |
| 02 | `475:274` | `LOCKED` — north star |
| 03 | `475:366` | `LOCKED` — north star |
| 04 | `475:369` | `LOCKED` |
| 05 | `475:372` | `STYLE_REWORK` |
| 06 | `475:397` | `STYLE_REWORK` |
| 07 | `475:400` | `LOCKED` |
| 08 | `475:403` | `LOCKED` |
| 09 | `475:406` | `STYLE_REWORK` |
| 10 | `475:409` | `REBUILD_STYLE` |
| 11 | `475:412` | `IMPLEMENTATION_REPAIR` |
| 12 | `475:415` | `STYLE_REWORK` |
| 13 | `475:418` | `STYLE_REWORK` |
| 14 | `475:421` | `LOCKED` |
| 15 | `475:424` | `REBUILD_STYLE` |

This table is the canonical PDMA slide-state registry. Do not create another status registry.

`docs/pdma2026/immutable-surfaces.json` is the mechanical enforcement snapshot for currently locked implementation surfaces. It is derived from this state registry; it is not a competing source of design state.

## 4. Visual north star — Slides 1, 2, and 3

Slides 1–3 establish the visual universe for the deck.

### Approved design imperative

> **Build a sophisticated editorial space-system derived from Slides 1–3. Use abstract planetary scale, exploding/orbital geometry, atmospheric depth, radial motion, and controlled fragmentation as the deck's recurring visual language. Preserve PBDS typography, composition discipline, negative space, and brand magenta. Avoid generic SaaS diagrams, dashboard graphics, clip-art metaphors, conventional flowcharts, or unrelated illustration styles.**

The recurring vocabulary may include:

- exploding or fragmented orbs;
- dimensional spheres and partial celestial bodies;
- planet horizons and eclipses;
- orbital arcs and rings;
- radial trajectories and motion;
- particles and debris fields;
- atmospheric haze, glow, and depth;
- cropped celestial-scale geometry;
- spatial relationships that feel dimensional rather than like flat UI cards.

### Do not turn the motif into a gimmick

Not every slide must contain a literal planet. A slide may inherit the visual language through fragments, arcs, orbital paths, particles, radial structure, atmospheric depth, eclipse forms, horizon lines, or other spatial/celestial-scale geometry.

The question for every style-reworked or rebuilt slide is:

> **If Slides 1–3 were removed, would this slide still obviously look like it came from the same presentation?**

If not, the slide is not visually complete.

## 5. PBDS invariants

Preserve the existing PBDS presentation system and `docs/pbds-presentation-components.md`.

Hard invariants include:

- 1920×1080 canonical semantic plane;
- one uniform semantic transform at runtime;
- approved viewport-native shared header/footer shell;
- Brand Magenta `#FF2FAE`;
- near-black presentation field;
- Inter / Inter Display typography;
- exact canonical 2012 five-leg asterisk where the mark is used;
- crisp editorial typography, strong negative space, and restrained accent use;
- semantic content stays editable in React/Figma rather than being baked into unnecessary flattened images.

Do not change shared chrome to solve a slide-local design problem.

## 6. Slide-state semantics

### `LOCKED`

The accepted slide is immutable unless Jim explicitly reopens it.

Do not change its component, slide-specific styles, assets, geometry, copy, or visual composition. Shared changes must prove the locked slide remains visually unchanged.

### `IMPLEMENTATION_REPAIR`

The design direction is accepted; implementation is wrong.

Repair React against the canonical approved reference. Do not invent a new concept or restyle the slide.

### `STYLE_REWORK`

The slide's semantic content and hierarchy remain useful, but its visual treatment does not sufficiently follow the Slides 1–3 imperative.

Preserve the message and information architecture unless Jim explicitly changes them. Rework the presentation treatment using the approved visual language.

### `REBUILD_STYLE`

The current implementation/composition is materially broken and the design treatment is also off-system.

A structural visual reconstruction is permitted for the target slide, but it must preserve approved content semantics, PBDS/runtime boundaries, and the Slides 1–3 visual imperative.

## 7. Approved remaining-work order

Work sequentially in this order:

`10 → 15 → 11 → 5 → 6 → 9 → 12 → 13`

Do not batch visual reconstruction across these slides.

A slide must reach PASS and become LOCKED before moving to the next slide unless Jim explicitly changes the order.

## 8. Zero-discretion mutation boundary

For a one-slide visual task, only modify files explicitly listed in that task's allowed mutation surface.

The normal allowed surface may contain:

1. the target slide component;
2. the target slide's current slide-specific style source, if one exists;
3. the target slide's owned geometry entry, when geometry must change;
4. the target slide's dedicated assets;
5. a shared primitive only when Jim explicitly authorizes that shared change.

Forbidden without explicit authorization:

- another slide;
- shared shell/header/footer;
- shared typography/title primitives;
- global CSS;
- global geometry behavior;
- presentation manifest architecture;
- another asset registry;
- another CSS/styling pipeline;
- repo-wide cleanup or refactoring.

No `while I'm here` changes.

## 9. Locked-slide regression rule

Any authorized change to a shared presentation surface must run expanded/full-deck visual validation and prove currently locked slides remain unchanged in the affected behavior.

If a proposed repair to Slide 10 changes Slide 1, 2, 3, 4, 7, 8, or 14, the repair fails unless Jim explicitly approved reopening the affected slide.

## 10. Mandatory visual implementation loop

For each target slide:

1. Read `src/app/pdma2026/AGENTS.md`, this contract, and `docs/pdma2026/CODEX_VISUAL_TASK_HEADER.md`.
2. Confirm the target slide state and exact canonical Figma frame ID from §3.
3. Inspect the canonical Figma frame and current React target only.
4. Capture the current browser-rendered full slide at the canonical 1920×1080 QA viewport when available.
5. Freeze the anchors that must remain unchanged.
6. Identify one exact visible delta for the iteration.
7. Make the smallest coherent implementation change for that delta.
8. Run `npm run pdma:check -- --slide NN`.
9. Run `npm run pdma:qa -- --slide NN` and inspect the browser capture.
10. Compare render to the canonical Figma/reference and state concrete remaining deltas.
11. Correct demonstrated deltas only.
12. When visual acceptance is proven, stop.
13. With Jim's approval of the finished slide, change its registry state to `LOCKED` and update `immutable-surfaces.json` in the same bounded change.

Do not claim visual PASS from source inspection, typecheck, geometry values, or build success alone.

## 11. Visual acceptance

A target slide reaches PASS only when all applicable conditions hold:

- canonical Figma composition / explicitly approved visual intent is reproduced;
- the slide clearly belongs to the Slides 1–3 visual universe when its state requires style work;
- title/body alignment and PBDS hierarchy are correct;
- no unintended clipping, overlap, distortion, crop error, or asset substitution exists;
- approved shared chrome is unchanged;
- frozen anchors remained fixed;
- targeted PDMA check passes;
- browser visual QA was performed against the canonical reference;
- no locked slide was modified or regressed.

If browser capture is unavailable, report:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

Do not continue speculative visual mutation and do not claim PASS.

## 12. Ambiguity stop rule

If the requested change would require any of the following and the current task does not explicitly authorize it:

- inventing a new visual language;
- changing a `LOCKED` slide;
- altering shared presentation behavior;
- deviating from the Slides 1–3 visual imperative;
- choosing between materially different new compositions;

stop with:

`PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`

Do not improvise around the missing decision.

If the target slide itself is `LOCKED`, stop with:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

## 13. No second system

This contract changes process and authority, not the established presentation architecture.

Continue using:

- canonical Figma for visual truth;
- current GitHub `main` for implementation truth;
- `pdma.config.ts` / current manifest for production metadata;
- `pdmaGeometry.ts` for current shared logical geometry ownership;
- current PDMA CSS ownership model;
- `immutable-surfaces.json` for mechanical lock enforcement;
- existing PDMA targeted checks and visual QA.

Do not create another manifest, geometry registry, scheduler, asset registry, styling pipeline, or visual-state database.

## 14. Current completion target

The remaining visual recovery is complete when Slides `10, 15, 11, 5, 6, 9, 12, 13` have individually passed visual QA, have been explicitly accepted, and have transitioned to `LOCKED` without regression to the already locked slides.
