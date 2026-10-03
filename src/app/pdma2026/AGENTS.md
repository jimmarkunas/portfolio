# PDMA 2026 Agent Rules

## Scope
These rules apply only to `src/app/pdma2026/**` and PDMA-specific supporting files under `public/pdma2026/**`, `docs/pdma2026/**`, and PDMA-specific scripts.

Within this scope, these rules override conflicting generic repository guidance. Repository-wide Git/deployment safety still applies.

## Mission
Optimize for fast, accurate, deterministic slide work.

Default non-visual workflow:

`inspect target → make bounded change → run targeted check → verify → stop`

For visual work, use the canonical approval/implementation loop below.

Do not turn a slide task into an architecture review, cleanup program, or repo-wide audit.

## Mandatory PDMA visual contract

For every PDMA visual task, read:

1. `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
2. `docs/pdma2026/CODEX_VISUAL_TASK_HEADER.md` for React implementation tasks
3. `docs/pbds-presentation-components.md` only for PBDS/runtime rules relevant to the target

The visual contract is the canonical slide-state/design-gate registry beneath Jim's explicit current instruction.

## Approved implementation references

React visual mutation requires `Implementation design status = APPROVED` in the live contract.

An approved implementation reference may be:

- `APPROVED_FIGMA_FRAME`
- `APPROVED_ASSET_PACKAGE`
- `APPROVED_SCREENSHOT_REFERENCE`

Do not force Figma into a workflow when the contract registers another approved reference type.

If status is `DESIGN_REQUIRED`, return:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation`

and make no React visual mutation.

Slides marked `LOCKED` are not writable unless Jim explicitly reopens them:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

Since the template-architecture cutover, `npm run pdma:check` (deck + gallery contracts) and `npm run pdma:qa` (browser QA) are the mechanical guards. `docs/pdma2026/immutable-surfaces.json` describes the retired geometry deck and is historical.

## Canonical ownership

- Jim's explicit current instruction is highest authority.
- Current GitHub `main` owns implementation truth.
- The approved implementation reference registered in the visual contract owns target-slide visual truth.
- Slides 1–3 are the deck's visual north star for new/reworked concepts.
- `presentation/pdma2026Content.ts` owns production copy; `presentation/pdma2026Manifest.tsx` owns order/chrome/composition, unless Jim explicitly changes them.
- Layout is Grid/Flex in the template architecture (`docs/pdma2026/template-system/`); there is no geometry registry.
- 1920×1080 is the canonical logical slide canvas.
- Do not create a second geometry registry, manifest, asset registry, slide-state registry, or styling pipeline.

## Concept-design agents

Jim may run a separate concept-design agent in parallel.

That agent may create:

- concept images;
- approved visual assets;
- composition-reference images;
- implementation-critical notes.

It does **not** need Figma unless Jim explicitly asks for Figma.

Concept work may run ahead in parallel; React/Codex visual mutation remains one slide at a time.

## Bounded reads

For a one-slide task, read only what is needed:

1. live contract state/design status/reference type;
2. approved implementation reference;
3. target component;
4. target style source if needed;
5. target decorative geometry/assets if needed;
6. shared primitive only if directly relevant;
7. target manifest entry only if copy/chrome/assets are involved.

Do not inventory the full PDMA subtree unless explicitly asked.

## Dirty working tree — PDMA override

Uncommitted changes outside the requested mutation surface are not a blocker.

- Preserve unrelated changes.
- Do not stage, revert, overwrite, reset, or modify them.
- Continue when there is no overlap.
- Stop only when an allowed target file has overlapping uncommitted changes that cannot be safely preserved.

Being behind `origin/main` is not by itself a blocker. Do not pull, merge, rebase, reset, or create a branch unless explicitly instructed.

## Slide mutation rules

- Make the smallest coherent change satisfying the request.
- Do not change unrelated slides.
- Do not change shared primitives, shell, geometry, tokens, or global CSS for a slide-local defect unless Jim authorizes broader scope.
- Preserve the approved composition; never redesign during a parity/fix task.
- Never substitute an older reference for the registered approved implementation reference.
- No base64 production assets.
- A bounded reopen authorizes only the named surface; all non-target surfaces remain frozen.

## Three-prompt recovery mode — HARD

Each reopened slide's React implementation has a hard maximum of **3 Codex implementation prompts** from first mutation through visual PASS. Target is 1–2.

### Prompt 1 — complete implementation

Prompt 1 includes inspection and attempts the complete approved target-slide delta in one bounded pass. Do not spend a prompt only planning, inventorying, or explaining capability.

Prompt 1 must include:

- approved reference type and exact reference;
- explicit reopen authorization;
- exact allowed files;
- frozen anchors;
- current component/decorative geometry/assets to inspect;
- complete approved delta;
- canonical QA viewport;
- `npm run pdma:check -- --slide NN`;
- `npm run pdma:qa -- --slide NN`;
- browser screenshot comparison.

### Prompt 2 — evidence-based correction

Use the actual browser render to correct all demonstrated remaining implementation deltas that can be coherently repaired together. No redesign or scope broadening.

### Prompt 3 — final correction only

Correct only final demonstrated visual defects. No architecture work, cleanup, refactor, redesign, or speculative changes.

After Prompt 3 without visual PASS:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

A fourth prompt requires Jim's explicit override.

## Canonical visual-edit loop

1. Start from/capture one full-slide browser screenshot at the actual rendered browser size.
2. Freeze the registered approved implementation reference and browser viewport as comparison basis.
3. Prompt 1 implements the full approved delta.
4. Capture a new full-slide screenshot at the same viewport.
5. Compare against the approved implementation reference and enumerate concrete visible deltas.
6. Prompt 2 corrects demonstrated deltas coherently.
7. Capture and compare again.
8. Prompt 3, if required, corrects final demonstrated defects only.
9. Stop once correct.
10. If Prompt 3 does not reach PASS, return `PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`.

If browser capture is unavailable, return:

`VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`

and do not continue speculative mutation.

## CSS ownership

Use the canonical CSS model present on current `main`. Do not recreate duplicate styling pipelines or maintain the same rule manually in two places.

## Assets and routes

- Runtime assets and application routes are different reference types.
- Reuse existing local assets before creating new ones.
- Do not regenerate or replace approved assets unless explicitly requested.
- For `APPROVED_ASSET_PACKAGE`, use the exact registered asset paths and role assignments.

## Architecture lock

Do not introduce:

- another canvas/sizing system;
- breakpoint-specific slide geometry;
- another manifest/config registry;
- another primitive family;
- another CSS ownership model;
- another slide-state registry;
- repo-wide cleanup as part of a slide fix.

## Validation

For a slide-local React change:

- run targeted PDMA check;
- run targeted browser capture/QA;
- do not run full-deck validation unless a shared/global surface changed or Jim asks.

Shared changes require expanded/full-deck validation.

Do not repeat checks unless code/runtime state materially changed.

## Visual completion

A React visual change is not complete from source inspection, typecheck, unit checks, or geometry review alone.

Before claiming PASS:

- confirm the contract registers an approved implementation reference;
- confirm the target/surface was explicitly reopened;
- render/capture the affected slide in the actual runtime;
- compare it to the registered approved reference;
- verify demonstrated deltas are resolved and frozen anchors stayed fixed.

## Failure handling

Unrelated failures do not authorize unrelated fixes.

If a missing architectural boundary is exposed:

`ARCHITECTURE_BOUNDARY_STOP — <exact missing boundary>`

If three implementation prompts are exhausted without visual PASS:

`PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN`

Do not send a fourth prompt without Jim's explicit override.

## Current production state

The production deck contains **16 accepted, locked slides**. There is no active recovery target.

Do not infer permission to mutate a slide from historical `STYLE_REWORK`, `REBUILD_STYLE`, `IMPLEMENTATION_REPAIR`, `DESIGN_REQUIRED`, or “current target” language in old artifacts or chats.

Future visual mutation begins only when Jim explicitly reopens a named slide or bounded surface. If only a decorative surface is reopened, semantic composition, copy, shared chrome, and existing logical-canvas anchors remain frozen unless Jim explicitly changes them too.

## Output discipline

For implementation tasks, report only:

- status;
- prompt number / 3;
- approved reference type/reference;
- explicit reopen authorization;
- changed files;
- requested implementation/correction;
- targeted verification;
- visual QA status;
- exact remaining defect/blocker if any.

Do not append modernization recommendations, architecture audits, cleanup proposals, or unrelated backlog unless asked.
