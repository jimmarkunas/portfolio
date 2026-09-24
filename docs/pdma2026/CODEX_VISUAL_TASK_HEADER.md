# PDMA 2026 — Mandatory Codex Visual Task Header

Use this header at the beginning of every Codex/agent task that changes a PDMA slide visually in React.

Do not shorten or paraphrase the hard rules. Fill every task-specific field before mutation.

## MANDATORY PRE-READ

Before changing anything, read:

1. `src/app/pdma2026/AGENTS.md`
2. `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
3. `docs/pbds-presentation-components.md` only for PBDS/runtime rules relevant to the target
4. current target component / target-owned decorative geometry / target assets
5. the **approved implementation reference** registered for the target slide

The current user instruction wins. Current GitHub `main` owns implementation truth.

An approved implementation reference may be:

- `APPROVED_FIGMA_FRAME`
- `APPROVED_ASSET_PACKAGE`
- `APPROVED_SCREENSHOT_REFERENCE`

Do **not** require Figma when the contract registers another approved reference type.

## CURRENT PRODUCTION BASELINE

The current `/pdma2026` deck contains **16 accepted, locked slides**. There is no active recovery target.

A visual task may mutate a locked slide only when Jim's explicit current instruction reopens that slide or a bounded surface within it. A bounded reopen does not unlock the rest of the slide.

## DESIGN GATE

Read the target slide's `State`, `Implementation design status`, and `Approved implementation reference` in `PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`.

If status is `DESIGN_REQUIRED`, make no React visual mutation and return:

`PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation`

If state is `LOCKED` and Jim has not explicitly reopened the requested target/surface, make no React visual mutation and return:

`PDMA_SCOPE_STOP — slide NN is LOCKED`

If Jim explicitly reopens a bounded surface, preserve every non-reopened surface exactly.

## TASK CONTROL BLOCK

**TARGET SLIDE:** `<NN>`  
**CONTRACT STATE:** `<LOCKED | IMPLEMENTATION_REPAIR | STYLE_REWORK | REBUILD_STYLE>`  
**IMPLEMENTATION DESIGN STATUS:** `<APPROVED | DESIGN_REQUIRED>`  
**APPROVED IMPLEMENTATION REFERENCE TYPE:** `<APPROVED_FIGMA_FRAME | APPROVED_ASSET_PACKAGE | APPROVED_SCREENSHOT_REFERENCE | NONE>`  
**APPROVED IMPLEMENTATION REFERENCE:** `<exact node / asset paths + composition reference / screenshot>`  
**EXPLICIT REOPEN AUTHORIZATION:** `<exact current Jim instruction or NONE>`  
**CODEX PROMPT:** `<1 | 2 | 3> of 3`  
**REQUESTED DELTA:** `<Prompt 1 = complete approved delta; Prompt 2/3 = demonstrated corrections only>`

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

**LOCKED SLIDES:** `01–16` except the exact slide/surface Jim explicitly reopens for this task.

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
2. Confirm state, design status, approved reference type, approved reference, and explicit reopen authorization against the live contract/current instruction.
3. If target is `LOCKED` and Jim has not explicitly reopened the requested target/surface, return `PDMA_SCOPE_STOP — slide NN is LOCKED` and make no mutation.
4. If design status is `DESIGN_REQUIRED`, return `PDMA_DESIGN_REQUIRED — slide NN requires an approved implementation reference before React implementation` and make no mutation.
5. A bounded reopen authorizes only that named surface. Freeze semantic composition, copy, chrome, and existing logical-canvas anchors unless Jim explicitly changes them too.
6. Implement only the registered approved reference and the explicitly requested delta. Never substitute an older concept/reference because it is easier.
7. For `APPROVED_ASSET_PACKAGE`, use only the approved assets and composition instructions/reference image. Do not invent a missing design and do not require Figma.
8. For `APPROVED_SCREENSHOT_REFERENCE`, reproduce/preserve the approved screenshot composition with native/editable text and approved asset usage.
9. For `APPROVED_FIGMA_FRAME`, reproduce/preserve the designated approved frame; do not redesign.
10. Preserve Slides 1–3 visual-system principles where the approved reference requires style work.
11. Do not use generic SaaS/dashboard cards, stock metaphors, clip-art, conventional flowcharts, or a new unrelated art direction.
12. **Prompt 1:** complete the approved requested delta in one bounded pass.
13. **Prompt 2:** correct all demonstrated deltas from Prompt 1 that can be coherently repaired together.
14. **Prompt 3:** final demonstrated corrections only; no redesign/refactor/architecture/speculative cleanup.
15. Hard maximum = **3 Codex implementation prompts per reopened slide**. After Prompt 3 without visual PASS, return `PDMA_PROMPT_BUDGET_EXHAUSTED — slide NN` unless Jim explicitly overrides.
16. Do not waste a prompt on planning, inventory, capability reporting, or explanation that can be included in the implementation prompt.
17. Do not change another slide.
18. Do not change shared shell, chrome, title primitives, global CSS, global geometry, manifest architecture, or shared behavior unless explicitly authorized and included in allowed files.
19. No opportunistic cleanup/refactoring.
20. Use a full-slide browser render at the canonical QA viewport as visual evidence.
21. Source inspection, typecheck, geometry values, and build success do not prove visual PASS.
22. After each mutation prompt, run targeted check and browser QA and compare to the registered approved implementation reference.
23. If browser capture is unavailable, report `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`; do not continue speculative mutation.
24. Once visually correct, stop.
25. Do not update `immutable-surfaces.json` unless a current task explicitly requires it.
26. If implementation requires an unapproved design decision, shared-system change, or locked-slide change outside the explicit reopen, return `PDMA_VISUAL_DECISION_STOP — <exact unresolved design decision>`.

## REQUIRED COMPLETION REPORT

Return only:

```text
STATUS: <PASS | BLOCKED | VISUAL_QA: REQUIRES_EXTERNAL_REVIEW>
TARGET: slide-<NN>
CODEX PROMPT: <1 | 2 | 3> of 3
DESIGN STATUS: <APPROVED | DESIGN_REQUIRED>
APPROVED REFERENCE TYPE: <type>
APPROVED IMPLEMENTATION REFERENCE: <exact reference>
EXPLICIT REOPEN AUTHORIZATION: <exact instruction>
CHANGED FILES:
- <path>
REQUESTED DELTA: <what changed>
TARGETED CHECK: <PASS/FAIL + exact command>
VISUAL QA: <PASS/FAIL/REQUIRES_EXTERNAL_REVIEW>
VISIBLE DELTAS REMAINING: <none or exact list>
NON-TARGET LOCKED SURFACES CHANGED: NO
NEXT: <PASS/LOCK | exact Prompt 2 correction | exact Prompt 3 correction | PDMA_PROMPT_BUDGET_EXHAUSTED>
```

Do not append architecture recommendations, cleanup proposals, or unrelated backlog.
