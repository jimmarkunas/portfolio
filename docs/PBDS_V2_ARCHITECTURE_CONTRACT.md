# PBDS V2 Architecture Contract

**Status:** Accepted architecture direction; design-system stage only  
**Owner:** Jim Markunas  
**Effective:** 2026-09-21  
**Production migration gate:** PBDS-5 only, after PBDS-FREEZE-A and PBDS-FREEZE-B pass

## 1. Purpose

PBDS V2 is the global Jim Markunas Personal Brand Design System. It is not a website skin and it is not a rewrite of the current portfolio.

The system must support a shared visual language across:

- portfolio website;
- case studies;
- presentations and editable PowerPoint outputs;
- one-pagers;
- LinkedIn/social assets;
- GTV and speaker collateral;
- diagrams/data visualizations;
- future branded surfaces.

The architecture is informed by the successful Bytalos pattern: the design system is infrastructure that consuming surfaces depend on, rather than a set of styles that grows inside one application.

## 2. Authority

When PBDS sources disagree, use this order:

1. Jim's explicit current instruction.
2. Canonical JM Personal Brand Figma file for visual truth and reusable design assets.
3. This architecture contract for system boundaries and V2 implementation direction.
4. Current Notion Personal Career Brand / Design System pages for durable roadmap, rationale, and phase state.
5. Production implementation only after the relevant PBDS migration gate is approved.
6. Historical Finox/V1 assets and old AI handoffs are reference only.

Do not let current website implementation override an accepted PBDS design decision. Do not let Notion duplicate exact visual specifications that Figma owns.

## 3. Core architecture

The required dependency direction is:

```text
Figma visual authority
        ↓
PBDS primitives
        ↓
PBDS semantic tokens
        ↓
PBDS component tokens
        ↓
PBDS components
        ↓
PBDS patterns / templates
        ↓
consuming surfaces
        ├─ Portfolio V2
        ├─ Presentations
        ├─ One-pagers
        ├─ Social / LinkedIn
        ├─ GTV / speaker collateral
        └─ diagrams and future outputs
```

A consuming surface may not become a second design-system authority.

## 4. What we borrow from Bytalos

Bytalos proved the architectural pattern we want:

- Figma owns canonical visual design.
- GitHub owns production implementation.
- The application consumes a dedicated design-system package.
- Shared tokens, brand identity, layout primitives, interaction rules, and reusable components live outside page implementation.
- New shared patterns enter the design system before product/application code depends on them.
- Notion remains a lightweight navigation and decision layer rather than duplicating component specifications.

PBDS V2 adopts those principles.

PBDS V2 does **not** copy Bytalos brand values, component styling, or token names. It also improves the token architecture by making Primitive → Semantic → Component layering explicit.

## 5. Token architecture

### 5.1 Primitive tokens

Primitive tokens hold raw values exactly once.

Examples:

```text
color.brand.magenta = #FF2FAE
color.brand.ink = #090909
color.neutral.charcoal = #2E2E2E
color.neutral.mid = #7A7A7A
color.neutral.line = #E6E6E6
color.neutral.canvas = #F5F5F2
color.neutral.white = #FFFFFF
space.8 = 8
radius.sm = 12
```

Primitives describe values, not usage intent.

### 5.2 Semantic tokens

Semantic tokens describe purpose and alias primitives.

Examples:

```text
brand.accent
brand.ink
text.primary
text.secondary
text.muted
surface.canvas
surface.elevated
surface.inverse
border.passive
border.meaningful
focus.ring
```

Applications and reusable components should prefer semantic tokens over primitive values.

### 5.3 Component tokens

Component tokens exist only where a reusable component has a real, stable need.

Examples:

```text
button.primary.background
button.primary.foreground
card.radius
navigation.height
hero.gutter
```

Do not create component-token namespaces speculatively.

## 6. Figma architecture

Figma is the active PBDS visual authority.

The canonical system must distinguish:

- **Brand foundations:** universal across website, presentations, one-pagers, social, diagrams, and collateral.
- **Output-specific foundations:** responsive web behavior or other output-specific constraints that do not redefine the brand.
- **Components:** reusable atomic and composite assets.
- **Patterns/templates:** higher-order composition rules such as case-study hero, proof block, presentation title, process diagram, or one-pager section.
- **Reference/archive:** historical Finox/V1 material that does not own current design decisions.

All reusable PBDS assets should bind through the approved token hierarchy rather than independent hard-coded values.

The large AI handoff is a compiled mirror, not a source of truth. It must be rebuilt only after PBDS foundations/components stabilize. Until then, any legacy AI handoff that conflicts with current Figma foundations is non-authoritative.

## 7. Production application + package direction

**Jim override — October 7, 2026:** Portfolio V2 is a **clean application boundary**, not a refactor of the bloated V1 application. The earlier in-place migration assumption is superseded. Shared cross-output interaction mechanics belong in the bounded `packages/interactive/` boundary when they have at least two real consumers.

Target migration shape:

```text
portfolio/
├── apps/
│   └── portfolio-v2/            # clean public-site application
├── packages/
│   ├── pbds/                    # working name; F7.1 freezes final package/API
│   └── interactive/             # shared cross-output interaction mechanics
├── src/                         # existing V1 application during migration only
└── current presentation/tool routes remain legacy consumers until explicitly extracted
```

The exact package names are finalized at PBDS-FREEZE F7.1, but these ownership boundaries are now locked:

- **Portfolio V2 app:** public portfolio composition, routing, SEO, web-specific page behavior and web adapter use.
- **PBDS package:** global brand foundations, tokens, reusable components/patterns and semantic motion intent.
- **Interactive package:** reusable mechanics proven to have more than one consumer, such as animation clock/visibility/reduced-motion behavior, path/particle motion, Flow Signal mechanics, globe/scene engines where reuse is real, and other cross-output interaction infrastructure.
- **Presentation runtime:** remains a distinct output adapter with its 1920×1080 logical-plane rules. It may consume PBDS and shared interaction mechanics without becoming the Portfolio app or forcing web behavior onto slides.

Portfolio V2 **must not import V1 UI, V1 styles, V1 page composition, V1 motion wrappers or V1 runtime architecture**. V1 may be consulted as a behavioral/content/evidence source. Typed content, source assets and proven interactive mechanics may be deliberately migrated or extracted through explicit seams.

The new app should stay low-context and composable: thin routes, bounded feature/page assemblies, typed content, PBDS-owned shared visual primitives, and no page-local design system.

## 8. Portfolio V2 rule

Portfolio V2 is a consumer of PBDS; it is not where PBDS is invented.

The intended flow is:

```text
approved Figma foundation
→ PBDS token/component/pattern contract
→ shared PBDS + interaction packages
→ clean Portfolio V2 app
→ public portfolio routes
```

Page code may own page-specific composition, content, SEO, route behavior and genuinely local interaction composition. It may not:

- fork brand tokens;
- recreate shared PBDS components;
- create a second motion/interaction engine when the shared interaction package already owns the mechanic;
- import legacy V1 presentation/site UI merely because it already exists.

For content migration, prefer a deliberate typed seam. Temporary duplication during a bounded migration is allowed only when its source/target and deletion point are explicit; do not create two permanent content authorities.

## 9. V1 preservation, parallel-build and cutover rule

The current V1 portfolio remains the public production authority until the V2 acceptance gate passes.

Before cutover:

- build `apps/portfolio-v2` in parallel as a clean application;
- keep it preview/non-production while PBDS-FREEZE and PBDS-5 acceptance are incomplete;
- do not progressively mutate V1 into V2;
- do not import V1 UI/runtime code into V2;
- preserve production presentation/tool routes while the new public-site app is being built.

The static publish boundary may temporarily compose outputs from more than one application, but route ownership must be explicit and deterministic. A route-ownership manifest/build rule must prevent collisions. During migration:

- V2 owns only the explicitly accepted public-site route set;
- the legacy application may continue to supply presentation/tool routes that V2 does not own;
- no public route may have two competing production owners;
- once a V2 route family is accepted, the superseded V1 public-site implementation for that family is removed;
- after all public portfolio routes have moved, remaining presentation/tool routes are either retained as a bounded app/runtime or extracted in PBDS-6; V1 public-site architecture is retired.

The production deployment remains one verified static artifact and one public site. This is **not** authorization for a second public portfolio, second design system, second domain or permanent dual-site architecture.

## 10. PBDS roadmap gates

### PBDS-0 / PBDS-1 — audit + creative-direction closure

Confirm which visual decisions are truly approved versus inherited from Finox/V1. Color is accepted. Typography, layout/grid, spacing, radii, imagery, motion, diagram language, material/elevation, and recognition motifs must be explicitly classified as KEEP / CHANGE / PENDING before being treated as PBDS V2 canon.

### PBDS-2 — core visual system + token architecture

Build the accepted foundations in Figma using Primitive → Semantic → Component token layering. Complete accessibility rules and universal/output-specific boundaries.

### PBDS-3 — signature recognition system

Canonize the repeatable signals that make work recognizably Jim Markunas: identity behavior, asterisk/wordmark use, proof-number treatment, case-study grammar, diagram behavior, branded openings/closings, and other approved recognition motifs.

### PBDS-4 — canonical Figma library + reusable patterns

Promote reusable components and templates into the canonical Figma system. Define semantic template contracts for cross-output reuse. A reconstructed/flattened concept may enter PBDS only after the relevant promotion contract marks it ready.

### PBDS-4 exit gate — architecture acceptance

Before production migration, explicitly accept:

- Figma variable/token hierarchy;
- production package boundary;
- universal vs output-specific ownership;
- component/pattern ownership;
- export/Code Connect strategy where useful;
- compatibility/deprecation policy;
- migration sequencing;
- one proven reusable template contract capable of driving more than one output surface.

### PBDS-FREEZE-A — Machine Specification

Close the machine-determinism gaps before Portfolio V2 implementation. The canonical granular execution plan and current item live in Notion `PBDS 2.0 — Roadmap & Delivery Status`; this contract owns only the architectural gate.

PBDS-FREEZE-A must leave no unresolved machine-authority ambiguity across:

- canonical identity and favicon/browser identity;
- Figma variables, styles, components, patterns, recognition artifacts, and motion references;
- component/pattern inputs and interaction-state contracts;
- the approved four-mode responsive model and explicit interpolation rules;
- machine-readable motion behavior;
- content stress fixtures and golden visual fixtures;
- production package/API ownership;
- Figma ↔ GitHub deterministic mapping and deprecation rules;
- mechanical anti-drift enforcement;
- one cross-output semantic contract.

A rendered or screenshot-QA'd visual is not canonical merely because it exists. New visual designs require Jim's explicit approval before they become visual authority.

### PBDS-FREEZE-B — Cold-Run Proof

Prove the machine specification from a cold start. At least two independent fresh-agent runs must consume only the canonical bootstrap and reproduce the bounded PBDS specimen without relying on prior chat context or invention. Material divergence means PBDS-FREEZE remains open.

### PBDS-INT — Shared Interaction Consolidation

Before the first interactive Portfolio V2 sections are accepted, inventory the current interaction families across portfolio + presentations and classify each as **PROMOTE SHARED / KEEP OUTPUT-LOCAL / RETIRE**.

Initial audit candidates include the existing motion reveal/metric primitives, Flow Signal/path particles, case-study RAF/canvas diagrams, globe implementations, PBDS orb/surface physics, and presentation interaction/runtime utilities.

Only mechanics with at least two real consumers may enter the shared interaction package. Output adapters retain their own geometry, timing and presentation semantics. Do not build a generic animation framework merely to consolidate code.

Acceptance requires at least one Portfolio V2 interaction and one presentation interaction to consume the same shared mechanic with no visual/behavioral regression and with reduced-motion/offscreen behavior preserved.

### PBDS-5 — Portfolio V2 clean-app pilot + rollout

Implementation begins only after **PBDS-FREEZE-A and PBDS-FREEZE-B both pass**.

Pilot scope remains:

- clean Portfolio V2 app scaffold;
- site shell;
- homepage;
- Fusion92 / CORE CMS representative case study;
- Modere complex proof/data section;
- representative shared-interaction proof;
- deterministic preview/build/deploy acceptance.

After the pilot passes, continue the V2 app by template/page family rather than mutating V1. Portfolio V1 remains public until the accepted V2 route set is ready for deterministic production ownership.

Two explicit new case-study deliverables are part of the Portfolio V2 rollout:

- **Domestika / Awwwards case study** — source-backed portfolio case study using the existing career/GTV evidence; exact narrative and proof must come from canonical evidence rather than memory.
- **Bytalos case study** — source-backed case study of the current Bytalos product/company work using canonical Bytalos business/product/design-system/repository evidence; no unsupported metrics or retrospective claims.

### PBDS-6 — bounded cross-output rollout

After Portfolio V2 is accepted, complete only the approved Phase-1 cross-output surfaces:

- **Presentation adapter consolidation** — keep the mature 1920×1080 presentation runtime and PBDS presentation semantics; consolidate onto canonical PBDS/shared interaction mechanics where appropriate without redesigning historical decks.
- **Client Document adapter** — deterministic editable DOCX/Word + fixed PDF output, including cover/title hierarchy, margins/grid, headers/footers, tables, callouts, executive-summary/recommendation patterns, imagery, co-branding and source/reference handling. One-pagers are a compact Document-adapter composition, not a separate system.
- **LinkedIn graphics** — canonical LinkedIn post graphics and LinkedIn banners. This is a bounded Phase-1 social scope, not authorization for an unlimited social/campaign asset factory.
- **Diagram Gallery** — a bounded reusable semantic diagram/data-visualization gallery for web, presentation and client-document consumers. Promote shared mechanics/patterns where reuse is proven; do not build an exhaustive illustration subsystem.

Broader GTV/speaker collateral, generic social/campaign expansion and future branded surfaces are Phase 2 / demand-driven.

### PBDS-7 — reduced completion proof + successor handoff

PBDS completes after one reduced cold-AI determinism proof across exactly three representative output families:

1. **Web** — Portfolio V2 composition through the web adapter.
2. **Presentation** — representative PBDS presentation composition through the presentation adapter.
3. **Client Document** — representative client-facing document composition through the document adapter.

The cold agent receives canonical PBDS sources only and must not require historical chats, bespoke aesthetic coaching, manually supplied brand values or random prior screenshots. LinkedIn graphics/banners and the Diagram Gallery remain required Phase-1 shipped capabilities but are not additional cold-test gates.

Record the reusable architecture concisely as:

`Foundation → Output Adapter → Semantic Pattern → Implementation`

After PBDS-7 PASS, PBDS is complete and the Bytalos Design System starts immediately. Reuse the PBDS system architecture/operating model, not Jim-specific brand expression.

## 11. Accessibility

PBDS V2 must treat accessibility as part of the component contract, not a final audit.

Current accepted color rules include:

- core readable text uses Brand / Ink `#090909` or Neutral / Charcoal `#2E2E2E`;
- Brand / Magenta `#FF2FAE` is an accent/display/background color and is not small normal text on light surfaces;
- Neutral / Line `#E6E6E6` is passive/decorative structure;
- Neutral / Mid `#7A7A7A` may be used when a boundary must be perceptible but is not for critical small body copy;
- black-on-magenta is the preferred high-contrast magenta CTA treatment unless a later accepted component rule supersedes it;
- semantic success/warning/error/info colors, if needed, belong in a separate semantic namespace and do not become decorative brand colors.

## 12. Visual-concept architecture

Reusable concepts follow the accepted decomposition-first visual architecture:

- preserve a clean environment/background;
- keep subjects/products/devices separate;
- keep effects separate;
- build UI/text natively in Figma;
- preserve a manifest for canonical asset packages;
- treat the flattened reference as an output/reference, not the editable source.

Legacy flattened concepts may use the approved full-background reconstruction exception when no clean plate exists. Pixel-forensic provenance is not a product requirement when deterministic recomposition, visual fidelity, and editability are achieved.

Approved-reference matching follows the canonical [Reference Registration Protocol](https://github.com/jimmarkunas/figma-layer-decomposer/blob/main/docs/REFERENCE_REGISTRATION_PROTOCOL.md): **registration, not redesign**. Register supplied assets independently, preserve intentional overlap, render after meaningful passes, compare against the approved reference, correct demonstrated deltas only, and do not invent compensating layers to hide incorrect geometry.

## 13. Anti-drift rules

Agents working on PBDS or Portfolio V2 must obey these rules:

1. Read this contract before proposing V2 architecture or implementation.
2. Treat Figma as visual authority and Notion as roadmap/rationale, not duplicate visual-spec storage.
3. Do not use historical Finox/V1 AI handoffs as current PBDS authority.
4. Do not migrate production before PBDS-5.
5. Do not create a second token system in the application.
6. Do not add a new shared component locally when PBDS already owns it.
7. Do not invent component tokens for a single consumer.
8. Do not copy Bytalos brand values; borrow its ownership architecture.
9. Reuse before abstraction.
10. Prefer one canonical live path after migration; remove superseded implementation when the replacement is accepted.
11. For any approved-reference Figma task, read and follow `REFERENCE_REGISTRATION_PROTOCOL.md`; do not claim completion without a rendered direct comparison to the approved reference.
12. Do not begin PBDS-5 until PBDS-FREEZE-A and PBDS-FREEZE-B are both recorded PASS in the canonical Notion roadmap.

## 14. Agent bootstrap

For PBDS / Portfolio V2 work, the minimum bootstrap is:

1. this contract;
2. current Notion `Personal Career Brand` and `Design System` pages;
3. canonical JM Personal Brand Figma foundations relevant to the task;
4. `REFERENCE_REGISTRATION_PROTOCOL.md` whenever an approved visual reference already exists;
5. exact implementation surface only when PBDS-5 or later authorizes code work.

For presentation-design work, also read:

1. `docs/pbds-presentation-components.md`;
2. `docs/PBDS_PRESENTATION_DESIGN_BRAIN.md`;
3. relevant approved presentation-reference manifest entries and exact images;
4. `REFERENCE_REGISTRATION_PROTOCOL.md` when implementing an already-approved visual reference.

Canonical Figma owns visual truth; this contract owns system boundaries; the
presentation contract owns reusable presentation runtime/component/pattern
truth; approved references own accepted presentation precedent; and the
Design Brain owns composition judgment/continuity only. PBDS presentation
continuity is one mature expression of the global PBDS visual language;
presentation-specific dark-field, orb, spatial, cinematic, or chrome
treatments are not mandatory in other PBDS output adapters.

Read Bytalos `packages/design-system` only when comparing implementation patterns or solving a concrete design-system packaging question. It is a reference implementation, not PBDS authority.

## 15. Immediate next package

**PBDS-FREEZE-A — Machine Specification**

The canonical granular execution plan is maintained in Notion `PBDS 2.0 — Roadmap & Delivery Status`. Work exactly one numbered FREEZE item at a time by default. Do not advance to the next item until the current item's exit proof is recorded, and do not promote new visual work to canon without Jim's explicit approval.

Current sequence:

```text
PBDS-HOST ✅
→ PBDS-FREEZE-A / Machine Specification
→ PBDS-FREEZE-B / Cold-Run Proof
→ PBDS-INT / Shared Interaction Consolidation
→ PBDS-5 / Clean Portfolio V2 App + Pilot + Rollout
→ PBDS-6 / Presentation + Client Documents + LinkedIn Graphics/Banners + Diagram Gallery
→ PBDS-7 / Three-output cold proof + successor handoff
→ BYT-DS1 / Bytalos Design System
```

No production website migration is part of PBDS-FREEZE-A or PBDS-FREEZE-B.
