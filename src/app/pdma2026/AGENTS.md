# PDMA 2026 Agent Rules

## Scope
These rules apply only to `src/app/pdma2026/**` and PDMA-specific supporting files under `public/pdma2026/**`, `docs/pdma2026/**`, and PDMA-specific scripts.

Within this scope, these rules override conflicting generic repository guidance. Repository-wide Git/deployment safety still applies.

## Mission
Optimize for fast, accurate, deterministic slide work.

Default workflow:

`inspect target → make bounded change → run targeted check → capture target slide → compare → stop`

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
- If the user gives multiple related fixes for one slide, implement the full requested set in one pass.
- Do not change unrelated slides.
- Do not change shared primitives, shell, geometry, tokens, or global CSS for a slide-local defect unless direct evidence proves the defect is shared and the user authorizes the broader scope.
- Preserve existing approved composition unless the user explicitly asks for redesign.
- Never substitute a new visual concept for a parity/fix task.
- No base64 production assets.

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
A visual change is not complete from source inspection, typecheck, or unit checks alone.

Before claiming PASS:
- render/capture the affected slide in the actual runtime when tooling allows;
- compare it with the approved Figma/reference or user screenshot;
- verify every requested visual delta.

If runtime capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW` rather than claiming visual completion.

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
- requested fixes completed;
- targeted verification;
- visual QA status;
- exact blocker, if any.

Do not append modernization recommendations, architecture audits, file counts, cleanup proposals, or unrelated backlog unless the user asked for them.
