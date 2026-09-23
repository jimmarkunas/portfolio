# PDMA 2026 Agent Rules

## Scope
These rules apply only to `src/app/pdma2026/**` and PDMA-specific supporting files under `public/pdma2026/**`, `docs/pdma2026/**`, and PDMA-specific scripts.

Within this scope, these rules override conflicting generic repository guidance. Repository-wide Git/deployment safety still applies.

## Mission
Optimize for fast, accurate, deterministic slide work.

Default non-visual workflow:

`inspect target → make bounded change → run targeted check → verify → stop`

For visual work, the **Canonical visual-edit loop** below is mandatory.

Do not turn a slide task into an architecture review, cleanup program, or repo-wide audit.

## Canonical ownership
- **Current GitHub `main`** owns implementation truth.
- **Canonical approved Figma frame** owns visual truth for a slide when one is explicitly designated.
- **Current slide manifest/content** owns production copy/chrome semantics unless the user explicitly changes them.
- **`pdmaGeometry.ts`** owns shared logical geometry until/unless the approved typed-config backlog replaces it.
- **1920×1080** is the canonical logical slide canvas. Runtime scaling preserves that composition.
- Do not create a second geometry registry, second manifest, second asset registry, or second styling pipeline.

## Bounded reads
For a one-slide task, read only what is needed for that slide:
1. target slide component;
2. target slide style file / current canonical style source;
3. target entry in `pdmaGeometry.ts`;
4. shared primitive used by the affected element, only if needed;
5. target manifest entry, only if title/chrome/copy/assets are involved;
6. canonical Figma frame, when visual parity is required.

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
- For non-visual implementation work, related fixes may be implemented together when they form one coherent change.
- For visual work, follow the Canonical visual-edit loop: **one visible change per iteration** unless the user explicitly authorizes a batch visual pass.
- Do not change unrelated slides.
- Do not change shared primitives, shell, geometry, tokens, or global CSS for a slide-local defect unless direct evidence proves the defect is shared and the user authorizes the broader scope.
- Preserve existing approved composition unless the user explicitly asks for redesign.
- Never substitute a new visual concept for a parity/fix task.
- No base64 production assets.

## Canonical visual-edit loop
Use this loop for every slide visual edit. Its purpose is to eliminate geometry guessing and finish visual work quickly.

1. **Start from one full-slide browser screenshot at the actual rendered browser size.** The screenshot must show the entire affected slide, not a crop that hides surrounding relationships.
2. **Freeze that screenshot as the baseline for the iteration.** Compare every subsequent render against it until the requested change is approved.
3. **Identify one exact visible target.** Examples: `secondary descriptions`, `bottom of table`, `selected circle`, `planet horizon`, `equals sign`.
4. **State the anchors that must not move or change.** Explicitly freeze relevant headings, table top, table bottom, takeaway, colors, font size, chrome, or other approved elements.
5. **State the desired direction and relationship precisely.** Prefer instructions such as `move the table down 20px`, `increase the gap below descriptions`, or `center the dot inside the ring` over vague instructions such as `add breathing room`.
6. **If the request is visually ambiguous, describe the intended geometry before editing.** Do not guess. State what will move, what will remain fixed, and the resulting relationship; obtain clarification when necessary.
7. **Make one visible change per iteration.** Do not bundle typography, spacing, borders, color, and layout into one visual iteration. One visible change may require coordinated implementation values when they are inseparable parts of the same visual relationship—for example, moving table rows and their row dividers together.
8. **After every edit, refresh the actual browser and capture a new full-slide screenshot at the same viewport.** Do not rely on source inspection, geometry values, typecheck, or targeted checks for visual approval.
9. **Compare the new screenshot to the frozen baseline and requested delta.** If the result is wrong, report the exact visible failure (`last row clipped`, `dot still high inside ring`, `description gap unchanged`) rather than a general statement such as `it looks bad`.
10. **Once the requested visual change is correct, stop.** Lock the slide/version and do not continue architecture cleanup, opportunistic refactoring, or unrelated polish.

### Browser-capture requirement
Reliable browser screenshots are part of the implementation loop, not optional evidence. If browser capture is unavailable, do not continue making speculative visual changes. Report:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

and wait for a rendered screenshot or explicit user direction before another visual mutation.

### Canonical instruction pattern
A strong bounded visual instruction names the frozen anchors, the one moving relationship, and the containment behavior. Example:

> Keep headings, descriptions, and takeaway fixed. Move only the table rows and row dividers down until the last row is fully visible. Extend the matrix surfaces to contain the rows. Do not use a fixed height that clips content. Then show me the rendered screenshot.

This pattern is preferred over broad requests such as `make the table more spacious` because it gives a deterministic visual relationship to implement and verify.

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
- repo-wide cleanup as part of a slide fix.

A slide may remain visually special while still using the shared canvas/surface/body contract.

## Validation
Use the narrowest available verification first.

For a slide-local change:
- run the targeted PDMA check for that slide;
- run targeted capture/QA for that slide when available;
- do not run full-deck validation unless a shared/global surface changed or the user asks for it.

Shared changes to shell, global geometry, global CSS, shared primitives, manifest/config, or chrome require expanded/full-deck validation.

Do not repeat checks unless code or runtime state materially changed.

## Visual completion
A visual change is not complete from source inspection, typecheck, unit checks, or geometry review alone.

Before claiming PASS:
- render/capture the affected slide in the actual runtime at the actual browser size;
- compare it with the frozen baseline and approved Figma/reference/user screenshot;
- verify the single requested visual delta while confirming frozen anchors stayed fixed.

If runtime capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW` rather than claiming visual completion or making another speculative visual edit.

## Failure handling
Unrelated pre-existing failures do not authorize unrelated fixes.

If targeted work succeeds but another known check fails outside scope, report it separately and stop.

If the task exposes a missing shared architectural boundary, return:

`ARCHITECTURE_BOUNDARY_STOP — <exact missing boundary>`

Do not patch around it with a second system.

## Output discipline
For implementation tasks, report only:
- status;
- changed files;
- requested fix completed;
- targeted verification;
- visual QA status;
- exact visible failure or blocker, if any.

Do not append modernization recommendations, architecture audits, file counts, cleanup proposals, or unrelated backlog unless the user asked for them.
