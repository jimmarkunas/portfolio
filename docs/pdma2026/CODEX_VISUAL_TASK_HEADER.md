# PDMA 2026 — Mandatory Codex Visual Task Header

Use this header at the beginning of every Codex/agent task that changes a PDMA slide visually in React.

Do not shorten or paraphrase the hard rules. Fill every task-specific field before mutation.

## MANDATORY PRE-READ

Before changing anything, read:

1. `src/app/pdma2026/AGENTS.md`
2. `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
3. `docs/pbds-presentation-components.md` only for PBDS/runtime rules relevant to the target
4. current target component / target-owned geometry / target assets
5. the **approved implementation reference** registered for the target slide

The current user instruction wins. Current GitHub `main` owns implementation truth.

An approved implementation reference may be:

- `APPROVED_FIGMA_FRAME`
- `APPROVED_ASSET_PACKAGE`
- `APPROVED_SCREENSHOT_REFERENCE`

Do **not** require Figma when the contract registers another approved reference type.

## DESIGN GATE

Read the target slide's `Implementation design status` and `Approved implementation reference` in `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`.

If status is `DESIGN_REQUIRED`, make no React visual mutation and return:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation`

If status is `APPROVED`, implement against the registered reference type only.

## TASK CONTROL BLOCK

**TARGET SLIDE:** `<NN>`  
**CONTRACT STATE:** `<LOCKED | IMPLEMENTATION_REPAIR | STYLE_REWORK | REBUILD_STYLE>`  
**IMPLEMENTATION DESIGN STATUS:** `<APPROVED | DESIGN_REQUIRED>`  
**APPROVED IMPLEMENTATION REFERENCE TYPE:** `<APPROVED_FIGMA_FRAME | APPROVED_ASSET_PACKAGE | APPROVED_SCREENSHOT_REFERENCE | NONE>`  
**APPROVED IMPLEMENTATION REFERENCE:** `<exact node / asset paths + composition reference / screenshot>`  
**CODEX PROMPT:** `<1 | 2 | 3> of 3`  
**REQUESTED DELTA:** `<Prompt 1 = complete implementation; Prompt 2/3 = demonstrated corrections only>`

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

**LOCKED SLIDES:** `01, 02, 03, 04, 07, 08, 14` unless Jim explicitly reopens one.

**TARGETED CHECK:**

```bash
npm run pdma:check -- --slide <NN>
```

**VISUAL QA:**

```bash
npm run pdma:qa -- --slide <NN>
```

## HARD EXECUTION RULES

1. Work on exactly one React target slide.
2. Confirm state, design status, approved reference type, and approved reference against the live contract.
3. If target is `LOCKED`, return `PDMA_SCOPE_STOP — slide NN is LOCKED` and make no mutation.
4. If design status is `DESIGN_REQUIRED`, return `PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation` and make no mutation.
5. Implement only the registered approved reference. Never substitute an older concept/reference because it is easier.
6. For `APPROVED_ASSET_PACKAGE`, use only the approved assets and composition instructions/reference image. Do not invent a missing design and do not require Figma.
7. For `APPROVED_SCREENSHOT_REFERENCE`, reproduce the approved screenshot with native/editable text and approved asset usage.
8. For `APPROVED_FIGMA_FRAME`, reproduce the designated approved frame; do not redesign.
9. Preserve Slides 1–3 visual-system principles where the approved reference requires style work.
10. Do not use generic SaaS/dashboard cards, stock metaphors, clip-art, conventional flowcharts, or a new unrelated art direction.
11. **Prompt 1:** complete approved target-slide implementation in one bounded pass.
12. **Prompt 2:** correct all demonstrated deltas from Prompt 1 that can be coherently repaired together.
13. **Prompt 3:** final demonstrated corrections only; no redesign/refactor/architecture/speculative cleanup.
14. Hard maximum = **3 Codex implementation prompts per slide**. After Prompt 3 without visual PASS, return `PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN` unless Jim explicitly overrides.
15. Do not waste a prompt on planning, inventory, capability reporting, or explanation that can be included in the implementation prompt.
16. Do not change another slide.
17. Do not change shared shell, chrome, title primitives, global CSS, global geometry, manifest architecture, or shared behavior unless explicitly authorized and included in allowed files.
18. No opportunistic cleanup/refactoring.
19. Use a full-slide browser render at the canonical QA viewport as visual evidence.
20. Source inspection, typecheck, geometry values, and build success do not prove visual PASS.
21. After each mutation prompt, run targeted check and browser QA and compare to the registered approved implementation reference.
22. If browser capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`; do not continue speculative mutation.
23. Once visually correct, stop.
24. Do not update `immutable-surfaces.json` until visual acceptance and explicit approval to lock.
25. If implementation requires an unapproved design decision, locked-slide change, or shared-system change, return `PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`.

## REQUIRED COMPLETION REPORT

Return only:

```text
STATUS: <PASS | BLOCKED | VISUAL_QA: REQUIRES_EXTERNAL_REVIEW>
TARGET: slide-<NN>
CODEX PROMPT: <1 | 2 | 3> of 3
DESIGN STATUS: <APPROVED | DESIGN_REQUIRED>
APPROVED REFERENCE TYPE: <type>
APPROVED IMPLEMENTATION REFERENCE: <exact reference>
CHANGED FILES:
- <path>
REQUESTED DELTA: <what changed>
TARGETED CHECK: <PASS/FAIL + exact command>
VISUAL QA: <PASS/FAIL/REQUIRES_EXTERNAL_REVIEW>
VISIBLE DELTAS REMAINING: <none or exact list>
LOCKED SLIDES CHANGED: NO
NEXT: <PASS/LOCK | exact Prompt 2 correction | exact Prompt 3 correction | PDMA_PROMPT_BUDGET_EXHAUSTED>
```

Do not append architecture recommendations, cleanup proposals, or unrelated backlog.

## CURRENT ACTIVE TARGET — SLIDE 05

**TARGET SLIDE:** `05`  
**CONTRACT STATE:** `STYLE_REWORK`  
**IMPLEMENTATION DESIGN STATUS:** `APPROVED`  
**APPROVED REFERENCE TYPE:** `APPROVED_ASSET_PACKAGE`  
**FIGMA REQUIRED:** `NO`

Approved reference:

- `public/pdma2026/slide-05/slide-05-ambiguity-core.png`
- `public/pdma2026/slide-05/slide-05-input-streams.png`
- `public/pdma2026/slide-05/slide-05-ambiguity-composite-reference.png` — placement/composition guide only; do not render in final slide
- current user-approved composition instructions in `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md` §4

For Slide 05, do not read or require Figma unless Jim explicitly asks for it.
