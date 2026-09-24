# CODEX PROMPT — PBDS Design Continuity Canonization v1

You are working in the repository:

`jimmarkunas/portfolio`

This is a **bounded PBDS documentation/reference canonization package**.

It is NOT a production React refactor.
It is NOT a PDMA slide redesign.
It is NOT a Figma reconstruction task.
It is NOT an orb-renderer implementation task.

The attached package contains:

- `PBDS_PRESENTATION_DESIGN_BRAIN.md`
- `REFERENCE_SOURCE_MAP.md`
- `PACKAGE_MANIFEST.json`
- four approved visual reference PNGs under `reference-assets/`

The goal is to preserve the design judgment and proven presentation patterns from the completed PDMA 2026 work so future PBDS presentation sessions can start from current canon rather than historical chat archaeology.

---

## 0 — EXECUTION MODE

Work directly from current `main`.

Do not create a second branch unless repository policy explicitly requires one.

Before any substantive read or mutation, prove repository affinity:

```bash
git rev-parse --show-toplevel
git remote get-url origin
test -w .
git status --short
git fetch origin
git rev-parse origin/main
```

Required repository:

`jimmarkunas/portfolio`

At prompt creation time, current `origin/main` was:

`98e9e65d15d19f03bd21c3228ff86edce8e8ea0b`

That SHA is context only. Use the actual current `origin/main`.

Record:

```text
BASE_SHA=<actual current origin/main>
```

If the workspace is not writable or is the wrong repository, stop:

`WRONG_WORKSPACE_STOP — target repository is not the writable workspace`

If unrelated dirty work overlaps any file in this package, stop:

`OVERLAPPING_WORKTREE_STOP`

Do not stash, reset, discard, or overwrite someone else's work.

---

# 1 — AUTHORITY

## Canonical Figma correction and global-system boundary

When updating `docs/pbds-presentation-components.md`, remove any claim that
`JM-Personal-Brand-V2` (`3ZYk...`) is the global canonical PBDS Figma.
Canonical PBDS visual authority is `JM Personal Brand`
(`euxFg8XeKtFJRw7PWOJRWa`). The PDMA/V2 Figma may be referenced only as the
working/approved source for presentation precedents not yet promoted into the
canonical PBDS library. Do not mutate Figma.

State narrowly that the presentation Design Brain and its approved references
describe a mature PBDS presentation expression and reusable presentation
precedent. They do not define the entire global PBDS aesthetic and do not
require presentation-specific dark-field, orb, spatial, cinematic, or chrome
treatments in Portfolio, Social, One-Pager, or other output adapters.

Read in this order:

1. Jim's current instruction in this prompt.
2. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`
3. `docs/pbds-presentation-components.md`
4. Current canonical PDMA approval/reference state only as evidence of proven patterns:
   - `docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md`
   - `docs/pdma2026/PDMA_VISUAL_APPROVALS_2026-09-24.md`
5. Attached `PBDS_PRESENTATION_DESIGN_BRAIN.md`
6. Attached approved reference images / source map.

Important ownership rule:

- Figma remains PBDS visual authority.
- `PBDS_V2_ARCHITECTURE_CONTRACT.md` remains PBDS architecture authority.
- `pbds-presentation-components.md` remains the canonical presentation runtime/component/pattern contract.
- The new Design Brain is subordinate and owns **composition judgment / continuity**, not tokens or exact visual truth.
- The PBDS reference manifest owns reusable approved-reference precedent only.
- Do not create a second PDMA slide-state registry.

If the proposed package would conflict with the locked PBDS architecture:

`ARCHITECTURAL DRIFT DETECTED — NO MUTATION`

---

# 2 — USER OUTCOME

After this package, a future ChatGPT/Codex/Claude session working on a new PBDS presentation should be able to inspect the repo and learn:

1. how PBDS presentation composition is chosen;
2. what the proven pattern families are;
3. what Jim has repeatedly approved and rejected in actual presentation design;
4. how semantic content and decorative atmosphere are separated;
5. how approved references are treated;
6. where the four strongest proven visual precedents live;
7. how to bootstrap without reconstructing design direction from old chats.

The future session must still consult current Figma/canon for exact visual truth.

---

# 3 — MUTATION BOUNDARY

Expected allowed files:

```text
docs/PBDS_PRESENTATION_DESIGN_BRAIN.md
docs/PBDS_V2_ARCHITECTURE_CONTRACT.md
docs/pbds-presentation-components.md
docs/pbds/presentation-reference-manifest.json
docs/pbds/presentation-references/hero-centered-signal-field-v1.png
docs/pbds/presentation-references/brand-reveal-particle-horizon-v1.png
docs/pbds/presentation-references/translation-traceability-framework-to-requirements-v1.png
docs/pbds/presentation-references/before-after-idea-to-spec-v1.png
```

If an existing canonical PBDS reference manifest or approved presentation-reference directory already exists under another path, **extend the existing owner instead of creating the paths above**.

Do not modify:

```text
src/**
public/**
packages/**
scripts/**
pdma.config.*
package.json
package-lock.json
docs/pdma2026/PDMA_VISUAL_IMPLEMENTATION_CONTRACT.md
docs/pdma2026/PDMA_VISUAL_APPROVALS_2026-09-24.md
```

unless a concrete consistency defect prevents this package from being correct. If so, stop and report the exact dependency rather than broadening silently.

No React/CSS/runtime mutation.
No Figma mutation.
No production orb implementation.
No PDMA visual change.

---

# 4 — ADD THE DESIGN BRAIN

Add the attached file as:

`docs/PBDS_PRESENTATION_DESIGN_BRAIN.md`

Do not rewrite it wholesale merely to change voice.

You MAY make narrow edits required to:

- align authority wording with the current PBDS architecture contract;
- remove a statement that is factually superseded by current canonical state;
- avoid creating a second source of truth;
- fix a path that differs from the actual canonical repo path.

Preserve its substantive design judgment, especially:

- slide first, template second;
- communication-problem-first design;
- one dominant visual idea;
- composition decision tree;
- twenty-foot presentation test;
- native-vs-decorative boundary;
- cards are earned;
- information relationships outrank minimalism;
- approved means stop redesigning;
- reference / hybrid / procedural orb philosophy;
- motion as enhancement;
- concept rounds vary structure, not just decoration;
- future decks reuse PBDS grammar rather than clone PDMA;
- approval/rejection signals as evidence from actual design work.

Do not turn the Design Brain into token authority or implementation authority.

---

# 5 — PROMOTE FOUR PROVEN PATTERNS INTO THE CANONICAL PRESENTATION CONTRACT

Update:

`docs/pbds-presentation-components.md`

Do not dump the full Design Brain into this file.

Add concise reusable pattern contracts for:

### A. HERO v1 — Centered Signal Field
First proven consumer: PDMA Slide 05.

Must capture:
- use case: thesis / punchline;
- centered composition is a bounded HERO exception;
- typography drives hierarchy;
- one restrained atmospheric field;
- semantic content native;
- rejection of generic sci-fi object spectacle / cards.

### B. Brand / Reveal v1 — Particle Horizon Reveal
First proven consumer: PDMA Slide 11.

Must capture:
- use case: introduce named framework/product/system/method;
- audience should feel they are "meeting the thing";
- oversized naming moment;
- structured semantic reveal;
- minimal containers;
- particle horizon/atmosphere decorative only;
- rejection of hub-and-spoke / SaaS architecture treatment.

### C. Translation / Traceability v1 — Framework → Requirements
First proven consumer: PDMA Slide 12.

Must capture:
- one-to-one mapping use case;
- information traceability outranks minimalism;
- aligned identifiers/tracks;
- no crossing ambiguity;
- PBDS can remain editorial without becoming a spreadsheet;
- semantic mapping native.

### D. Before / After Transformation v1 — Idea → Production-Ready Spec
First proven consumer: PDMA Slide 13.

Must capture:
- weak input → transformation → stronger output;
- output may and often should dominate;
- explicit bridge;
- visual weight communicates semantic value;
- avoid equal generic cards where the result has higher semantic value.

For each pattern include, at minimum:

```text
Purpose
Use when
Canonical semantic structure
Visual behavior
Native vs decorative boundary
Reject / anti-patterns
Approved reference ID/path
First proven consumer
```

Do not copy PDMA-specific semantic copy into the reusable contract except short names/examples where useful.

---

# 6 — CREATE / EXTEND THE PBDS PRESENTATION REFERENCE LIBRARY

Use the four supplied images.

Preferred canonical location, if no existing owner exists:

`docs/pbds/presentation-references/`

Copy:

```text
hero-centered-signal-field-v1.png
brand-reveal-particle-horizon-v1.png
translation-traceability-framework-to-requirements-v1.png
before-after-idea-to-spec-v1.png
```

These are **approved reference evidence**, not production backgrounds.

Do not copy the decorative implementation assets unless the canonical reference library already requires them.

Do not import rejected concepts.

Do not duplicate identical reference images into multiple canonical directories.

---

# 7 — CREATE / EXTEND ONE PBDS PRESENTATION REFERENCE MANIFEST

Preferred path if no existing manifest owner exists:

`docs/pbds/presentation-reference-manifest.json`

If a canonical manifest already exists, extend it instead.

This manifest is NOT a slide-state registry.

It records reusable PBDS presentation precedent.

Each entry should include fields equivalent to:

```json
{
  "id": "translation-traceability-v1",
  "status": "approved",
  "role": "framework-to-requirements",
  "reference": "presentation-references/translation-traceability-framework-to-requirements-v1.png",
  "first_proven_consumer": "PDMA Slide 12",
  "semantic_content_native": true,
  "decorative_assets_only": true,
  "authority_note": "Approved reference evidence; exact PBDS visual truth remains with canonical Figma where promoted."
}
```

Use stable pattern IDs.

Recommended IDs:

```text
hero-centered-signal-field-v1
brand-reveal-particle-horizon-v1
translation-traceability-v1
before-after-transformation-v1
```

Include SHA-256 for each reference if the existing manifest style supports provenance.

The attached `PACKAGE_MANIFEST.json` contains input hashes and is not itself canonical.

---

# 8 — UPDATE PBDS AGENT BOOTSTRAP, NARROWLY

Update the existing `Agent bootstrap` section of:

`docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`

Do not rewrite the contract.

For presentation-design work, make the bootstrap include:

1. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`
2. current Notion PBDS canon as already required
3. relevant canonical Figma foundations
4. `docs/pbds-presentation-components.md`
5. `docs/PBDS_PRESENTATION_DESIGN_BRAIN.md`
6. relevant approved reference-manifest entries + exact reference images
7. `REFERENCE_REGISTRATION_PROTOCOL.md` when implementing an already-approved visual reference

Preserve existing Figma authority.

Explicitly state that the Design Brain is for composition judgment/continuity and does not supersede canonical tokens, Figma, or approved references.

Keep this addition short.

---

# 9 — CHATGPT PROJECT INSTRUCTION OUTPUT

Codex cannot directly mutate ChatGPT Project settings unless the project instructions are explicitly repo-backed.

Do NOT invent a repo file pretending that it changed ChatGPT settings.

In the final report, output this exact recommended Project-instruction snippet, adjusted only if canonical file paths changed:

> For presentation design work, first read `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md`, `docs/pbds-presentation-components.md`, and `docs/PBDS_PRESENTATION_DESIGN_BRAIN.md`, plus approved presentation-reference manifest entries and exact references relevant to the task. Canonical Figma owns visual truth; the architecture and presentation-component contracts own system/runtime truth; approved references own accepted composition; the Design Brain owns composition judgment and continuity. Design slide-first and promote reusable patterns only after approval. Do not reconstruct design direction from historical chats when current canon exists.

Jim will apply this separately to the ChatGPT PBDS Project.

---

# 10 — ORB / MOTION CANONIZATION BOUNDARY

The Design Brain may preserve the design philosophy:

- `reference | hybrid | procedural`;
- hybrid is production-first for accepted reference art;
- deterministic seed for procedural initialization;
- pointer velocity may drive bounded particle impulse;
- `prefers-reduced-motion`;
- motion enhances a complete static composition;
- reference sampling is a later fidelity phase.

Do NOT implement:
- `PBDSOrb.tsx`;
- canvas renderer;
- orb presets;
- motion runtime;
- DecorativeLayer changes;
- React changes.

This package records design intent only.

Orb implementation is a separate future package.

---

# 11 — NO SECOND SOURCE OF TRUTH

Before landing, explicitly inspect for duplicate ownership.

The result must be:

```text
PBDS_V2_ARCHITECTURE_CONTRACT.md
  → architecture / authority / bootstrap

pbds-presentation-components.md
  → canonical reusable presentation runtime + component/pattern contracts

PBDS_PRESENTATION_DESIGN_BRAIN.md
  → design judgment / composition continuity

presentation-reference-manifest.json + reference images
  → approved reusable visual precedent

PDMA visual docs
  → PDMA-specific accepted slide state/history
```

No new file may duplicate:
- PBDS tokens;
- PDMA slide state;
- Figma component inventory;
- production runtime state.

If a proposed section duplicates an existing canonical owner, link to the owner rather than copying the specification.

---

# 12 — VERIFICATION

This is docs/reference work.

Run the smallest sufficient proof.

Required:

```bash
git diff --check
```

Validate the reference manifest parses as JSON.

Verify all four referenced image files exist.

Verify each manifest reference path resolves.

Verify each supplied reference hash if hashes are stored.

Search for accidental duplicate presentation reference manifests.

Search for `PBDS_PRESENTATION_DESIGN_BRAIN` and ensure:
- architecture bootstrap points to it;
- presentation contract points to it only where useful;
- no circular authority claim exists.

Review the final diff and ensure no files outside the bounded canonization surface changed.

Do not run a production build unless an existing repo guard explicitly requires it for docs changes.

If there is an existing owned docs/index/context generation command affected by these files, run that owner command instead of hand-editing generated outputs.

---

# 13 — LANDING

After proof:

1. `git fetch origin`
2. confirm `origin/main` has not moved through overlapping PBDS documentation work;
3. if overlapping, stop with `BASE_MOVED_OVERLAP_STOP`;
4. otherwise reconcile normally if needed;
5. commit once.

Preferred commit:

`PBDS: canonize presentation design continuity`

Push normally to `main`.

Never force-push.

---

# 14 — FINAL REPORT

Return:

```text
STATUS:
LANDED | BLOCKED | TARGETED PROOF FAILED

BASE_SHA:
FINAL_SHA:

CANON:
- Design Brain:
- presentation pattern contract:
- reference manifest:
- reference library:
- architecture bootstrap:

PROVEN PATTERNS:
- HERO v1:
- Brand / Reveal v1:
- Translation / Traceability v1:
- Before / After Transformation v1:

REFERENCE FILES:
- path + SHA256
- path + SHA256
- path + SHA256
- path + SHA256

NO SECOND SOURCE OF TRUTH:
PASS | FAIL — explanation

PRODUCTION CODE CHANGED:
NO

PDMA SLIDE STATE CHANGED:
NO

VERIFICATION:
- git diff --check:
- manifest JSON:
- reference paths:
- reference hashes:
- duplicate-owner search:
- generated/index owner command, if applicable:

CHATGPT PBDS PROJECT INSTRUCTION:
<exact snippet Jim should paste>

ROLLBACK:
git revert --no-edit <FINAL_SHA> && git push origin main

NEXT:
exactly one next action
```

Do not append a proposal for production orb implementation to this package.
Stop after the canonization package is landed and verified.
