# PDMA 2026 — Mandatory Codex Visual Task Header

Use this header at the beginning of every Codex/agent task that changes a PDMA slide visually.

Do not shorten or paraphrase the hard rules. Fill every task-specific field before mutation.

---

## MANDATORY PRE-READ

Before changing anything, read:

1. `src/app/pdma2026/AGENTS.md`
2. `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
3. `docs/pbds-presentation-components.md` only for the PBDS/runtime rules relevant to the target
4. the current target slide component / target-owned geometry / target assets
5. the canonical Figma frame named below

The current user instruction wins. The canonical final Figma frame owns visual truth. Current GitHub `main` owns implementation truth.

Slides 1–3 are the deck's visual north star. Do not invent an unrelated visual language.

---

## TASK CONTROL BLOCK

**TARGET SLIDE:** `<NN>`  
**CONTRACT STATE:** `<LOCKED | IMPLEMENTATION_REPAIR | STYLE_REWORK | REBUILD_STYLE>`  
**CANONICAL FIGMA FRAME:** `<node id>`  
**REQUESTED DELTA:** `<one exact visual goal for this iteration>`  

**ALLOWED FILES:**

```text
<explicit path 1>
<explicit path 2>
...
```

No file outside this list may be modified.

**FROZEN ANCHORS:**

```text
<elements/relationships that must not move or change>
```

**LOCKED SLIDES:** `01, 02, 03, 04, 07, 08, 14` unless the live visual contract has been explicitly updated by Jim.

**TARGETED CHECK:**

```bash
npm run pdma:check -- --slide <NN>
```

**VISUAL QA:**

```bash
npm run pdma:qa -- --slide <NN>
```

---

## HARD EXECUTION RULES

1. Work on exactly one target slide.
2. Confirm the target state and Figma frame against `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`; do not rely on this template if the contract changed.
3. If the slide is `LOCKED`, return `PDMA_SCOPE_STOP — slide NN is LOCKED` and make no mutation.
4. The final-deck Figma frame is the visual reference for the target slide. Do not substitute an older concept/reference because it is easier to implement.
5. For `IMPLEMENTATION_REPAIR`, reproduce the approved design; do not redesign.
6. For `STYLE_REWORK` or `REBUILD_STYLE`, follow the Slides 1–3 editorial space-system: abstract planetary scale, exploding/orbital geometry, atmospheric depth, radial motion, controlled fragmentation, PBDS negative space, and restrained `#FF2FAE` accents.
7. Do not put a literal planet on every slide. Use the visual vocabulary only where it supports the composition.
8. Do not use generic SaaS/dashboard cards, stock illustration metaphors, clip-art, conventional flowchart styling, or a new unrelated art direction.
9. Make one visible delta per visual iteration unless Jim explicitly authorizes a batch visual pass.
10. Do not change another slide.
11. Do not change shared shell, chrome, title primitives, global CSS, global geometry, manifest architecture, or shared behavior unless the allowed-file list explicitly includes it and Jim explicitly authorized the shared scope.
12. No opportunistic cleanup or refactoring.
13. Start visual QA from a full-slide browser render at the canonical QA viewport. Preserve the same comparison viewport through the iteration.
14. Source inspection, typecheck, geometry values, and build success do not prove visual PASS.
15. After mutation, run the targeted check and browser visual QA. Compare the rendered slide to the canonical Figma/reference and report concrete visible deltas only.
16. If browser capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`. Do not make another speculative visual mutation.
17. Once the requested delta is correct, stop.
18. Do not update `immutable-surfaces.json` merely because code was changed. A slide is added to the immutable baseline only after visual acceptance and explicit approval to lock it.
19. If the work requires a new visual language, a locked-slide change, a shared-system change, or a materially different composition not authorized by the task, return `PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`.

---

## REQUIRED COMPLETION REPORT

Return only:

```text
STATUS: <PASS | BLOCKED | VISUAL_QA: REQUIRES_EXTERNAL_REVIEW>
TARGET: slide-<NN>
CHANGED FILES:
- <path>
REQUESTED DELTA: <what changed>
TARGETED CHECK: <PASS/FAIL + exact command>
VISUAL QA: <PASS/FAIL/REQUIRES_EXTERNAL_REVIEW>
VISIBLE DELTAS REMAINING: <none or exact list>
LOCKED SLIDES CHANGED: NO
NEXT: <stop / exact next demonstrated correction>
```

Do not append architecture recommendations, cleanup proposals, or unrelated backlog.

---

## CURRENT FIRST TASK — SLIDE 10

This is the approved starting task for the current recovery sequence. Use the live contract if Jim changes it.

**TARGET SLIDE:** `10`  
**CONTRACT STATE:** `REBUILD_STYLE`  
**CANONICAL FIGMA FRAME:** `475:409` — `PDMA / FINAL 10 / PRODUCTION READINESS`  
**STYLE NORTH STAR:** `475:259`, `475:274`, `475:366`  

The first Slide 10 implementation prompt must still name one exact visible delta and explicitly list the files it may mutate after inspecting the current target implementation. Do not infer a broad write surface from this example.

Recovery order after Slide 10 reaches accepted `LOCKED` state:

`15 → 11 → 5 → 6 → 9 → 12 → 13`
