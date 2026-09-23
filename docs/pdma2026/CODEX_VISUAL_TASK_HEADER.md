# PDMA 2026 — Mandatory Codex Visual Task Header

Use this header at the beginning of every Codex/agent task that changes a PDMA slide visually in React.

Do not shorten or paraphrase the hard rules. Fill every task-specific field before mutation.

---

## MANDATORY PRE-READ

Before changing anything, read:

1. `src/app/pdma2026/AGENTS.md`
2. `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
3. `docs/pbds-presentation-components.md` only for the PBDS/runtime rules relevant to the target
4. the current target slide component / target-owned geometry / target assets
5. the **approved implementation Figma frame** named below

The current user instruction wins.

The approved implementation Figma frame owns visual truth for React implementation.

Current GitHub `main` owns implementation truth.

Slides 1–3 are the deck's visual north star. Do not invent an unrelated visual language.

### DESIGN GATE — CHECK BEFORE ANY REACT MUTATION

Read the target slide's `Implementation design status` in `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`.

If it is `DESIGN_REQUIRED`, make **no React visual mutation** and return:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved Figma redesign before React implementation`

The current/baseline final-deck frame for a `STYLE_REWORK` or `REBUILD_STYLE` slide is a source/content baseline only. It is not the implementation oracle until Jim approves the redesign and the contract records the approved implementation frame.

---

## TASK CONTROL BLOCK

**TARGET SLIDE:** `<NN>`  
**CONTRACT STATE:** `<LOCKED | IMPLEMENTATION_REPAIR | STYLE_REWORK | REBUILD_STYLE>`  
**IMPLEMENTATION DESIGN STATUS:** `<APPROVED | DESIGN_REQUIRED>`  
**BASELINE FIGMA FRAME:** `<node id>`  
**APPROVED IMPLEMENTATION FIGMA FRAME:** `<node id | NONE — DESIGN REQUIRED>`  
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
2. Confirm target state, implementation design status, baseline frame, and approved implementation frame against `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`.
3. If the slide is `LOCKED`, return `PDMA_SCOPE_STOP — slide NN is LOCKED` and make no mutation.
4. If implementation design status is `DESIGN_REQUIRED`, return `PDMA_DESIGN_REQUIRED — slide NN requires an approved Figma redesign before React implementation` and make no React visual mutation.
5. For `IMPLEMENTATION_REPAIR`, reproduce the designated approved Figma design; do not redesign.
6. For a previously `STYLE_REWORK` or `REBUILD_STYLE` slide whose redesigned frame is now `APPROVED`, implement **that newly approved frame**, not the older baseline frame.
7. Never substitute an older concept/reference because it is easier to implement.
8. Slides that required style work must still follow the Slides 1–3 editorial space-system: abstract planetary scale, exploding/orbital geometry, atmospheric depth, radial motion, controlled fragmentation, PBDS negative space, and restrained `#FF2FAE` accents.
9. Do not put a literal planet on every slide. Use the visual vocabulary only where it supports the approved composition.
10. Do not use generic SaaS/dashboard cards, stock illustration metaphors, clip-art, conventional flowchart styling, or a new unrelated art direction.
11. Make one visible delta per React visual iteration unless Jim explicitly authorizes a batch visual pass.
12. Do not change another slide.
13. Do not change shared shell, chrome, title primitives, global CSS, global geometry, manifest architecture, or shared behavior unless the allowed-file list explicitly includes it and Jim explicitly authorized the shared scope.
14. No opportunistic cleanup or refactoring.
15. Start visual QA from a full-slide browser render at the canonical QA viewport. Preserve the same comparison viewport through the iteration.
16. Source inspection, typecheck, geometry values, and build success do not prove visual PASS.
17. After mutation, run the targeted check and browser visual QA. Compare the rendered slide to the **approved implementation Figma frame** and report concrete visible deltas only.
18. If browser capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`. Do not make another speculative visual mutation.
19. Once the requested delta is correct, stop.
20. Do not update `immutable-surfaces.json` merely because code was changed. A slide is added to the immutable baseline only after visual acceptance and explicit approval to lock it.
21. If implementation requires a new visual decision, a locked-slide change, a shared-system change, or a materially different composition from the approved implementation frame, return `PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`.

---

## REQUIRED COMPLETION REPORT

Return only:

```text
STATUS: <PASS | BLOCKED | VISUAL_QA: REQUIRES_EXTERNAL_REVIEW>
TARGET: slide-<NN>
DESIGN STATUS: <APPROVED | DESIGN_REQUIRED>
APPROVED IMPLEMENTATION FRAME: <node id | NONE>
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

## CURRENT FIRST TARGET — SLIDE 10

Slide 10 is **not ready for Codex React implementation yet**.

**TARGET SLIDE:** `10`  
**CONTRACT STATE:** `REBUILD_STYLE`  
**IMPLEMENTATION DESIGN STATUS:** `DESIGN_REQUIRED`  
**BASELINE FIGMA FRAME:** `475:409` — `PDMA / FINAL 10 / PRODUCTION READINESS`  
**APPROVED IMPLEMENTATION FIGMA FRAME:** `NONE — DESIGN REQUIRED`  
**STYLE NORTH STAR:** `475:259`, `475:274`, `475:366`  

Required next action:

> Design/rebuild Slide 10 in Figma, obtain Jim's explicit approval, then update `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md` with the approved node ID and set Slide 10 implementation design status to `APPROVED`.

Until that happens, any Codex React implementation task for Slide 10 must return:

`PDMA_DESIGN_REQUIRED — slide 10 requires an approved Figma redesign before React implementation`

Recovery sequence remains:

`10 → 15 → 11 → 5 → 6 → 9 → 12 → 13`
