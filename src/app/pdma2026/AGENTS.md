# PDMA 2026 Agent Rules

## Scope
These rules apply only to `src/app/pdma2026/**` and PDMA-specific supporting files under `public/pdma2026/**`, `docs/pdma2026/**`, and PDMA-specific scripts.

Within this scope, these rules override conflicting generic repository guidance. Repository-wide Git/deployment safety still applies.

## Mission
Optimize for fast, accurate, deterministic slide work.

Default non-visual workflow:

`inspect target → make bounded change → run targeted check → verify → stop`

For visual work, the **Canonical visual-edit loop** below is mandatory once an approved implementation design exists.

Do not turn a slide task into an architecture review, cleanup program, or repo-wide audit.

## Mandatory PDMA visual contract

For every PDMA visual task, read these before editing:

1. `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
2. `docs/pdma2026/CODEX_VISUAL_TASK_HEADER.md` for React implementation tasks
3. `docs/pbds-presentation-components.md` only for the PBDS/runtime rules relevant to the target

`docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md` is the canonical slide-state/design-gate registry and visual implementation authority beneath Jim's explicit current instruction and an explicitly approved implementation Figma frame.

### Design gate

Before any React visual mutation, read the target slide's `Implementation design status` in the visual contract.

If it is `DESIGN_REQUIRED`, return:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved Figma redesign before React implementation`

and make no React visual mutation.

For `STYLE_REWORK` and `REBUILD_STYLE`, the current/baseline final-deck Figma frame is content/structure evidence only until Jim approves a redesigned composition and the contract records its node ID as the approved implementation frame.

Do not use Codex/React implementation to invent the missing design.

Slides marked `LOCKED` in the contract are not writable. If a task targets one without Jim explicitly reopening it, return:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

`docs/pdma2026/immutable-surfaces.json` is the mechanical implementation lock for currently accepted surfaces. Do not bypass, weaken, or casually rewrite it. When Jim explicitly changes a locked slide state, update the visual contract and immutable snapshot together so the human state and enforcement state remain aligned.

For every Codex/agent React visual task, use the control block and hard execution rules in `docs/pdma2026/CODEX_VISUAL_TASK_HEADER.md`. The allowed-file list is a hard mutation boundary, not a suggestion.

If an implementation task requires inventing a new visual language, changing a locked slide, changing shared presentation behavior, deviating from the approved implementation frame, or choosing between materially different new compositions without explicit authorization, return:

`PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`

Do not improvise around the decision.

## Canonical ownership
- **Jim's explicit current instruction** is highest authority.
- **Current GitHub `main`** owns implementation truth.
- **Approved implementation Figma frame** owns visual truth for React implementation when explicitly designated in the visual contract.
- **Current/baseline Figma frame** for `STYLE_REWORK`/`REBUILD_STYLE` owns baseline content/structure evidence only until a redesign is approved.
- **Slides 1–3** are the visual north star for redesign work.
- **`docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`** owns PDMA visual state, design gate, approved implementation-frame designation, remaining recovery order, parallel-design authorization, implementation prompt budget, and style imperative.
- **Current slide manifest/content** owns production copy/chrome semantics unless the user explicitly changes them.
- **`pdmaGeometry.ts`** owns shared logical geometry until/unless the approved typed-config backlog replaces it.
- **1920×1080** is the canonical logical slide canvas. Runtime scaling preserves that composition.
- Do not create a second geometry registry, second manifest, second asset registry, second slide-state registry, or second styling pipeline.

## Bounded reads
For a one-slide task, read only what is needed for that slide:
1. visual contract state/design status;
2. target baseline or approved Figma frame, as appropriate;
3. target slide component for implementation work;
4. target slide style file / current canonical style source;
5. target entry in `pdmaGeometry.ts`;
6. shared primitive used by the affected element, only if needed;
7. target manifest entry, only if title/chrome/copy/assets are involved.

Do not inventory the full PDMA subtree unless the task explicitly asks for architecture or full-deck work.

## Dirty working tree — PDMA override
Uncommitted changes outside the requested mutation surface are **not a blocker**.

- Preserve unrelated changes.
- Do not stage, revert, overwrite, reset, or modify them.
- Continue with the requested PDMA task when there is no overlap.
- Stop only when an allowed target file has overlapping uncommitted changes that cannot be safely preserved.

Being behind `origin/main` is not, by itself, a blocker. Do not pull, merge, rebase, reset, or create a branch unless explicitly instructed.

## Slide mutation rules
- Make the smallest coherent change that satisfies the current request.
- For `STYLE_REWORK`/`REBUILD_STYLE` with `DESIGN_REQUIRED`, mutate Figma only; do not mutate React visuals.
- Figma concept design may run ahead in parallel when Jim authorizes it; React/Codex mutation remains one slide at a time.
- For non-visual implementation work, related fixes may be implemented together when they form one coherent change.
- For React visual work with an approved implementation frame, use the **three-prompt recovery mode** below. It overrides the older one-visible-change-per-prompt rule for this recovery sequence.
- Do not change unrelated slides.
- Do not change shared primitives, shell, geometry, tokens, or global CSS for a slide-local defect unless direct evidence proves the defect is shared and the user authorizes the broader scope.
- Preserve existing approved composition unless the user explicitly asks for redesign.
- Never substitute a new visual concept for a parity/fix task.
- Never substitute the old baseline frame for a newly approved redesign.
- No base64 production assets.

## Three-prompt recovery mode — HARD

For each slide's React implementation, the hard maximum is **3 Codex implementation prompts** from first mutation through visual PASS.

The target is 1–2 prompts.

### Prompt 1 — complete implementation

Prompt 1 must include the target inspection and attempt the **complete approved target-slide implementation** in one bounded pass. Do not spend a separate prompt merely asking Codex to inspect, plan, inventory, or explain capability.

Prompt 1 must include:
- exact approved Figma node ID;
- exact allowed files;
- frozen anchors;
- current target component/geometry/assets to inspect;
- complete approved composition as the goal;
- canonical 1920×1080 visual QA viewport;
- `npm run pdma:check -- --slide NN`;
- `npm run pdma:qa -- --slide NN`;
- required browser screenshot comparison.

### Prompt 2 — evidence-based correction

If Prompt 1 is not visually correct, Prompt 2 uses the actual browser render/QA evidence and corrects **all demonstrated remaining implementation deltas that can be coherently repaired together**.

Do not redesign. Do not broaden scope.

### Prompt 3 — final correction only

If needed, Prompt 3 corrects only the final demonstrated visual defects.

No architecture work, cleanup, refactor, redesign, or speculative changes.

If the slide is still not at visual PASS after Prompt 3, stop with:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

A fourth implementation prompt requires Jim's explicit override.

## Canonical visual-edit loop
Use this loop for every React slide visual implementation **after** the target has an approved implementation Figma frame.

1. **Start from one full-slide browser screenshot at the actual rendered browser size.** The screenshot must show the entire affected slide, not a crop that hides surrounding relationships.
2. **Freeze the approved implementation Figma frame and browser viewport as the comparison basis.**
3. **Prompt 1 implements the full approved composition.** Freeze shared chrome and all explicitly named anchors.
4. **After the mutation, refresh the actual browser and capture a new full-slide screenshot at the same viewport.** Do not rely on source inspection, geometry values, typecheck, or targeted checks for visual approval.
5. **Compare the render to the approved implementation Figma frame.** Enumerate concrete visible deltas such as crop, scale, spacing, clipping, alignment, missing asset, wrong hierarchy, or wrong atmospheric treatment.
6. **Prompt 2 corrects the demonstrated deltas coherently.** It may correct multiple visible defects because the 3-prompt budget is a hard delivery constraint.
7. **Capture and compare again.**
8. **Prompt 3, if required, corrects only the final demonstrated defects.**
9. **Once the slide is correct, stop.** Lock the slide/version and do not continue architecture cleanup, opportunistic refactoring, or unrelated polish.
10. **If Prompt 3 does not reach PASS, stop and report `PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`.**

### Browser-capture requirement
Reliable browser screenshots are part of the implementation loop, not optional evidence. If browser capture is unavailable, do not continue making speculative visual changes. Report:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

and wait for a rendered screenshot or explicit user direction before another visual mutation.

### Canonical instruction pattern
For Prompt 1, give Codex the entire approved slide target and frozen boundaries so it can build the slide correctly in one pass.

For Prompt 2 or 3, give exact demonstrated corrections. Example:

> Keep headings, descriptions, takeaway, chrome, colors, and type scale fixed. Move the table rows and row dividers down until the last row is fully visible, extend the matrix surfaces to contain the rows, and preserve the approved frame geometry. Then capture and compare the full rendered slide.

Avoid vague instructions such as `make it better` or `add breathing room`.

## CSS ownership
PDMA must have **one** canonical CSS editing model.

Follow the CSS model present on current `main` after the approved consolidation lands. Do not recreate a source+generated duplicate pipeline. If split slide CSS is canonical, edit the split files directly. If a generator remains canonical during migration, edit only its declared source and regenerate once.

Do not maintain the same rule manually in two places.

## Assets and routes
- Runtime visual assets and application route links are different types of references.
- Do not declare routes such as `/pdma2026/exercise` as image/runtime assets.
- Reuse existing local assets before creating new ones.
- Do not regenerate or replace approved assets unless explicitly requested.

## Architecture lock
The unified presentation architecture is already established.

Do not introduce:
- another canvas/sizing system;
- breakpoint-specific slide geometry;
- another manifest/config registry;
- another primitive family;
- another CSS ownership model;
- another slide-state registry;
- repo-wide cleanup as part of a slide fix.

A slide may remain visually special while still using the shared canvas/surface/body contract.

## Validation
Use the narrowest available verification first.

For a slide-local React change:
- run the targeted PDMA check for that slide;
- run targeted capture/QA for that slide when available;
- do not run full-deck validation unless a shared/global surface changed or the user asks for it.

Shared changes to shell, global geometry, global CSS, shared primitives, manifest/config, or chrome require expanded/full-deck validation.

Do not repeat checks unless code or runtime state materially changed.

## Visual completion
A React visual change is not complete from source inspection, typecheck, unit checks, or geometry review alone.

Before claiming PASS:
- confirm the contract names an approved implementation Figma frame;
- render/capture the affected slide in the actual runtime at the actual browser size;
- compare it with the approved implementation Figma frame;
- verify all demonstrated implementation deltas are resolved while frozen anchors stayed fixed.

If runtime capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW` rather than claiming visual completion or making another speculative visual edit.

## Failure handling
Unrelated pre-existing failures do not authorize unrelated fixes.

If targeted work succeeds but another known check fails outside scope, report it separately and stop.

If the task exposes a missing shared architectural boundary, return:

`ARCHITECTURE_BOUNDARY_STOP — <exact missing boundary>`

Do not patch around it with a second system.

If the slide uses all three implementation prompts without visual PASS, return:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

and report the exact remaining visual defects/root blocker. Do not send a fourth implementation prompt without Jim's explicit override.

## Output discipline
For implementation tasks, report only:
- status;
- prompt number / 3;
- design status / approved implementation frame;
- changed files;
- requested implementation/correction completed;
- targeted verification;
- visual QA status;
- exact visible failure or blocker, if any.

Do not append modernization recommendations, architecture audits, file counts, cleanup proposals, or unrelated backlog unless the user asked for them.
