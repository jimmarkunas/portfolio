# PBDS V2 Architecture Contract

**Status:** Accepted architecture direction; design-system stage only  
**Owner:** Jim Markunas  
**Effective:** 2026-09-21  
**Production migration gate:** PBDS-5 only, after Figma library + architecture acceptance

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

## 7. Production package direction

The target production boundary is a dedicated package, modeled after Bytalos:

```text
portfolio/
├── packages/
│   └── design-system/
│       ├── package.json
│       ├── README.md
│       ├── tailwind.preset.ts        # only if still justified by final architecture
│       └── src/
│           ├── index.ts
│           ├── tokens/
│           │   ├── primitives.ts
│           │   ├── semantic.ts
│           │   ├── components.ts
│           │   └── index.ts
│           ├── brand/
│           ├── typography/
│           ├── layout/
│           ├── components/
│           ├── patterns/
│           ├── motion/
│           ├── icons/
│           └── styles.css
└── current portfolio application
```

The package name is intentionally not locked yet. Naming is an implementation detail to resolve before PBDS-5.

The current portfolio application does **not** need to be moved into `apps/web` merely to imitate Bytalos. The architectural requirement is the design-system dependency boundary, not directory aesthetics. A workspace/monorepo restructure should happen only if a real second application or package boundary makes it useful.

## 8. Portfolio V2 rule

Portfolio V2 is a consumer of PBDS; it is not where PBDS is invented.

The intended flow is:

```text
approved Figma foundation
→ PBDS token/component contract
→ production design-system package
→ V2 component composition
→ V2 pages
```

Page code may own page-specific composition, content, SEO, route behavior, and genuinely local business logic. It may not fork brand tokens or recreate a shared component that PBDS already owns.

## 9. V1 preservation and migration rule

The current portfolio remains production authority until PBDS-5.

Before PBDS-5:

- do not migrate current production colors, typography, or components merely because PBDS V2 exists in Figma;
- do not restructure the current application into a monorepo;
- do not create a parallel live V2 application;
- do not add a second production token system alongside V1;
- do not replace V1 components piecemeal.

At PBDS-5, migration begins with one bounded pilot consumer and then expands only after acceptance.

Git owns history. When a PBDS replacement is accepted, superseded live implementation should be removed rather than retained indefinitely as a second active path.

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

### PBDS-5 — Portfolio V2 pilot

Implement a bounded representative pilot only after the PBDS-4 exit gate. Recommended pilot scope: homepage + representative case study + site shell + one complex proof/data section.

The pilot consumes PBDS rather than recreating it.

### PBDS-6 — cross-channel rollout

After the architecture and pilot are accepted, extend the same PBDS system to presentations, one-pagers, social/LinkedIn, GTV/speaker collateral, and other approved surfaces.

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

## 14. Agent bootstrap

For PBDS / Portfolio V2 work, the minimum bootstrap is:

1. this contract;
2. current Notion `Personal Career Brand` and `Design System` pages;
3. canonical JM Personal Brand Figma foundations relevant to the task;
4. exact implementation surface only when PBDS-5 or later authorizes code work.

Read Bytalos `packages/design-system` only when comparing implementation patterns or solving a concrete design-system packaging question. It is a reference implementation, not PBDS authority.

## 15. Immediate next package

**PBDS-2A — Foundation Architecture Audit**

Inventory the current canonical Figma variable collections, text styles, effects/styles, and component bindings. Produce a precise map into the accepted architecture using these dispositions:

- KEEP
- RENAME
- ALIAS
- RETIRE
- MOVE

The audit must also identify whether each item belongs to:

- Primitive;
- Semantic;
- Component;
- Brand universal;
- Web/output-specific;
- historical/reference.

No production website migration is part of PBDS-2A.
