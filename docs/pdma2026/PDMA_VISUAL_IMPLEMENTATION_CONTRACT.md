# PDMA 2026 — Visual Implementation Contract

**Status:** Canonical visual implementation contract  
**Applies to:** `/pdma2026` React presentation, PDMA Figma design/rework, and all PDMA visual repair/redesign tasks  
**Approved:** 2026-09-23  

## 1. Purpose

PDMA work has two distinct modes and they must not be conflated:

1. **Design work in Figma** — required when the current composition/style is not approved.
2. **Implementation work in React** — permitted only after the target design is already approved.

The operating loop depends on slide state.

For `IMPLEMENTATION_REPAIR`:

> **approved Figma reference → bounded React implementation → browser capture → compare → demonstrated correction → PASS → LOCK**

For `STYLE_REWORK` or `REBUILD_STYLE`:

> **current content/baseline → bounded Figma redesign → Jim approval → designate approved implementation frame → bounded React implementation → browser capture → compare → demonstrated correction → PASS → LOCK**

Do not use React/Codex implementation to discover or invent the missing design.

Do not substitute architecture work, generalized cleanup, or creative reinterpretation for these loops.

## 2. Authority order

For PDMA visual work, resolve conflicts in this order:

1. Jim's explicit current instruction.
2. The **approved implementation Figma frame**, when one has been explicitly approved for the target slide.
3. This contract.
4. `docs/pbds-presentation-components.md` for PBDS presentation primitives and runtime geometry.
5. The current approved slide-specific task brief.
6. Current React implementation on GitHub `main` for what actually exists.
7. The current/baseline Figma frame when the slide is still in `STYLE_REWORK` or `REBUILD_STYLE` and no redesign has yet been approved.
8. Historical chats, old screenshots, retired concepts, and previous reconstruction attempts.

Important distinction:

- For `LOCKED` and `IMPLEMENTATION_REPAIR`, the designated approved Figma frame is the visual oracle for implementation.
- For `STYLE_REWORK` and `REBUILD_STYLE`, the existing final-deck frame is initially a **content/structure/baseline reference only**. It does **not** become the React implementation oracle until Jim explicitly approves a redesigned composition and that frame is designated as the approved implementation frame.

Do not reconstruct design intent from historical chat when the approved Figma frame and this contract answer the question.

## 3. Canonical Figma references and design gate

Canonical file:

`https://www.figma.com/design/3ZYkEtZVyRH9B2DfVpersf/JM-Personal-Brand-V2`

Final-deck section: `475:258` — `PDMA / FINAL DECK — 15 SLIDES`

| Slide | Current/baseline frame | State | Implementation design status |
| --- | --- | --- | --- |
| 01 | `475:259` | `LOCKED` — north star | `APPROVED` |
| 02 | `475:274` | `LOCKED` — north star | `APPROVED` |
| 03 | `475:366` | `LOCKED` — north star | `APPROVED` |
| 04 | `475:369` | `LOCKED` | `APPROVED` |
| 05 | `475:372` | `STYLE_REWORK` | `DESIGN_REQUIRED` |
| 06 | `475:397` | `STYLE_REWORK` | `DESIGN_REQUIRED` |
| 07 | `475:400` | `LOCKED` | `APPROVED` |
| 08 | `475:403` | `LOCKED` | `APPROVED` |
| 09 | `475:406` | `STYLE_REWORK` | `DESIGN_REQUIRED` |
| 10 | `475:409` | `REBUILD_STYLE` | `DESIGN_REQUIRED` |
| 11 | `475:412` | `IMPLEMENTATION_REPAIR` | `APPROVED` |
| 12 | `475:415` | `STYLE_REWORK` | `DESIGN_REQUIRED` |
| 13 | `475:418` | `STYLE_REWORK` | `DESIGN_REQUIRED` |
| 14 | `475:421` | `LOCKED` | `APPROVED` |
| 15 | `475:424` | `REBUILD_STYLE` | `DESIGN_REQUIRED` |

This table is the canonical PDMA slide-state registry and design-gate registry. Do not create another status registry.

### Design gate

`DESIGN_REQUIRED` means:

- the current/baseline Figma frame may be used for content, hierarchy, semantic intent, and elements worth preserving;
- Slides 1–3 provide the style north star;
- Figma design work is permitted;
- **React visual implementation is not permitted yet**;
- after Jim approves the redesigned slide, record the newly approved Figma node ID as the approved implementation frame and change `Implementation design status` to `APPROVED` before React implementation begins.

If a React/Codex implementation task targets a `DESIGN_REQUIRED` slide, stop with:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved Figma redesign before React implementation`

Do not treat the baseline frame as the final oracle simply because it has a stable node ID.

`docs/pdma2026/immutable-surfaces.json` is the mechanical enforcement snapshot for currently locked implementation surfaces. It is derived from this registry; it is not a competing source of design state.

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

The design direction is already accepted and implementation is wrong.

The designated approved Figma frame owns visual truth. Repair React against that reference. Do not redesign.

### `STYLE_REWORK`

The slide's semantic content and hierarchy remain useful, but its current visual treatment does not sufficiently follow the Slides 1–3 imperative.

Preserve the message and information architecture unless Jim explicitly changes them. First create/revise the composition in Figma using the approved visual language. Jim must approve that design before React implementation begins.

Until approval, the current/baseline Figma frame is not the implementation oracle.

### `REBUILD_STYLE`

The current implementation/composition is materially broken and the visual treatment is also off-system.

A new/reconstructed Figma composition is required first. It must preserve approved content semantics, PBDS/runtime boundaries, and the Slides 1–3 visual imperative. Jim must approve the rebuilt design before any React visual implementation begins.

Until approval, the current/baseline Figma frame is not the implementation oracle.

## 7. Recovery sequencing and parallel design

React implementation remains serialized in this recovery order unless Jim explicitly changes it:

`10 → 15 → 11 → 5 → 6 → 9 → 12 → 13`

For slides marked `DESIGN_REQUIRED`, the slide's unit of work is:

`design in Figma → Jim approval → designate approved frame → implement in React → visual QA → LOCK`

Do not skip directly from baseline Figma to React implementation.

### Parallel concept-design authorization

Jim has explicitly authorized a separate concept-design agent to work ahead on Figma concepts while the approval/integration agent manages approval, contract state, Codex handoff, and implementation verification.

Therefore:

- Figma concept design for future `DESIGN_REQUIRED` slides may proceed in parallel and ahead of the React implementation order;
- concept design does **not** authorize React implementation;
- each slide still requires Jim's explicit design approval and an approved implementation-frame node ID before Codex may touch React;
- only one slide may be under active React/Codex visual mutation at a time;
- locked slides remain immutable;
- a future slide may have an approved Figma design waiting in the queue while the current React target is being implemented.

This parallel-design authorization exists to compress elapsed delivery time without allowing parallel code drift.

## 8. Zero-discretion mutation boundary

### Figma design phase

For `STYLE_REWORK` and `REBUILD_STYLE`, only the target slide/design composition may be changed unless Jim explicitly authorizes shared design-system work.

Do not alter locked Figma slides as collateral work.

### React implementation phase

React mutation is permitted only when `Implementation design status` is `APPROVED`.

For a one-slide implementation task, only modify files explicitly listed in that task's allowed mutation surface.

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

If a proposed repair changes Slide 1, 2, 3, 4, 7, 8, or 14, the repair fails unless Jim explicitly approved reopening the affected slide.

## 10. Mandatory visual workflow

### A. `STYLE_REWORK` / `REBUILD_STYLE` while `DESIGN_REQUIRED`

1. Read `src/app/pdma2026/AGENTS.md` and this contract.
2. Confirm target state and baseline Figma frame from §3.
3. Inspect Slides 1–3 as style references.
4. Inspect target content/structure and current baseline frame.
5. Create/revise the target design in Figma only.
6. Compare the proposed design to Slides 1–3 and PBDS invariants.
7. Present the actual Figma result for Jim's approval.
8. If rejected, revise in Figma only.
9. When Jim approves, record the approved node ID in §3 and change implementation design status to `APPROVED`.
10. Only then may React implementation begin.

### B. React implementation after design approval

1. Read `src/app/pdma2026/AGENTS.md`, this contract, and `docs/pdma2026/CODEX_VISUAL_TASK_HEADER.md`.
2. Confirm the exact **approved implementation Figma frame ID** from §3.
3. Inspect that approved Figma frame and current React target only.
4. Capture the current browser-rendered full slide at the canonical 1920×1080 QA viewport when available.
5. Freeze the anchors that must remain unchanged.
6. **Prompt 1:** implement the complete approved target-slide composition within the allowed slide-local mutation surface. Do not intentionally split a known approved composition into many micro-prompts.
7. Run `npm run pdma:check -- --slide NN`.
8. Run `npm run pdma:qa -- --slide NN` and inspect the browser capture.
9. Compare the render to the approved implementation Figma frame and enumerate concrete visible deltas.
10. **Prompt 2, if required:** correct all demonstrated implementation deltas that can be coherently repaired without changing the approved design or mutation boundary.
11. Re-run targeted check and browser visual QA.
12. **Prompt 3, if required:** make the final demonstrated corrections only.
13. Re-run targeted check and browser visual QA.
14. When visual acceptance is proven, stop.
15. With Jim's approval of the finished slide, change its registry state to `LOCKED` and update `immutable-surfaces.json` in the same bounded change.

Do not claim visual PASS from source inspection, typecheck, geometry values, or build success alone.

### C. Codex implementation prompt budget — HARD REQUIREMENT

Each slide has a maximum budget of **3 Codex implementation prompts** from first React mutation through visual PASS.

The intended budget is **2 prompts**, with a third available only for a final demonstrated correction.

- **Prompt 1 — full implementation:** exact approved Figma node, target-only allowed files, frozen anchors, current implementation context, required assets, canonical viewport, targeted checks, and browser QA. It must attempt the complete approved slide in one bounded pass.
- **Prompt 2 — evidence-based correction:** use the actual rendered screenshot/QA result and correct all concrete remaining implementation deltas that can be safely addressed together.
- **Prompt 3 — final correction only:** correct only the remaining demonstrated visual defects. No redesign, refactor, architecture work, or speculative cleanup.

Do not spend a Codex prompt merely asking it to plan, inspect, explain, inventory, or report capability when that inspection can be included in the implementation prompt itself.

If the slide is not at visual PASS after Prompt 3, stop with:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

Then report the exact remaining visual deltas and the root implementation blocker. A fourth implementation prompt requires Jim's explicit override.

The approval/integration agent is responsible for making Prompt 1 implementation-complete enough that routine slides should finish in 1–2 prompts.

## 11. Visual acceptance

A target slide reaches PASS only when all applicable conditions hold:

- for a redesigned slide, Jim approved the Figma design before React implementation began;
- the React render reproduces the designated approved implementation Figma frame;
- the slide clearly belongs to the Slides 1–3 visual universe when its state required style work;
- title/body alignment and PBDS hierarchy are correct;
- no unintended clipping, overlap, distortion, crop error, or asset substitution exists;
- approved shared chrome is unchanged;
- frozen anchors remained fixed;
- targeted PDMA check passes;
- browser visual QA was performed against the approved implementation reference;
- no locked slide was modified or regressed.

If browser capture is unavailable, report:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

Do not continue speculative visual mutation and do not claim PASS.

## 12. Stop rules

If React implementation is requested for a slide whose implementation design status is `DESIGN_REQUIRED`, stop with:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved Figma redesign before React implementation`

If a third Codex implementation prompt has completed without visual PASS, stop with:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

If the requested change would require any of the following and the current task does not explicitly authorize it:

- inventing a new visual language;
- changing a `LOCKED` slide;
- altering shared presentation behavior;
- deviating from the Slides 1–3 visual imperative;
- choosing between materially different new compositions during an implementation/parity task;

stop with:

`PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`

Do not improvise around the missing decision.

If the target slide itself is `LOCKED`, stop with:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

## 13. No second system

This contract changes process and authority, not the established presentation architecture.

Continue using:

- Figma for visual design truth and approved implementation references;
- current GitHub `main` for implementation truth;
- `pdma.config.ts` / current manifest for production metadata;
- `pdmaGeometry.ts` for current shared logical geometry ownership;
- current PDMA CSS ownership model;
- `immutable-surfaces.json` for mechanical lock enforcement;
- existing PDMA targeted checks and visual QA.

Do not create another manifest, geometry registry, scheduler, asset registry, styling pipeline, or visual-state database.

## 14. Current completion target

The remaining visual recovery is complete when Slides `10, 15, 11, 5, 6, 9, 12, 13` have individually passed the correct state-specific workflow, have been explicitly accepted, and have transitioned to `LOCKED` without regression to the already locked slides.

Current immediate target:

> **Slide 10 is `REBUILD_STYLE` + `DESIGN_REQUIRED`. Design and approve it in Figma first. Do not begin React implementation yet.**