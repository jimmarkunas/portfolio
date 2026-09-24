# PBDS 2.0 — Presentation Visual Components

Canonical reusable visual components for Jim Markunas presentation work.

This document governs **presentation visuals and PDMA presentation runtime geometry**. It does **not** migrate the live portfolio site to PBDS 2.0 colors or replace the current production site tokens.

Canonical PBDS visual authority:

`JM Personal Brand` — `euxFg8XeKtFJRw7PWOJRWa`

The PDMA/V2 Figma (`JM-Personal-Brand-V2`, `3ZYk...`) may be referenced only
as the working/approved source for presentation precedents not yet promoted
into the canonical PBDS library. Do not treat it as the global canonical PBDS
Figma and do not mutate Figma.

Canonical Figma page:

`PBDS — Presentation Components` (`414:2`)

---

## Absolute logo rule

The only approved mark is the **2012 five-leg asterisk**.

- Canonical source node: `5:38` — `2012 Asterisk — exact trace`
- Never use a six-leg asterisk.
- Never redraw or approximate the mark.
- Any presentation component containing the mark must clone/use the canonical geometry.
- Magenta presentation treatment: `#FF2FAE`.

---

## PDMA runtime sizing + responsive geometry — HARD RULES

These rules govern the live `/pdma2026` React presentation. They exist to prevent viewport-by-viewport tuning, title/body drift, distorted artwork, and accidental redesign of the approved chrome.

### Coordinate systems

1. **Canonical design / QA reference:** `1920×1080`, aspect ratio `16:9` (`1.7778:1`).
2. **Runtime viewport:** `100vw × 100dvh`. The physical browser viewport is variable and must not be assumed to be `1920×1080`.
3. **Semantic slide plane:** every semantic slide element is authored in the canonical `1920×1080` logical coordinate system.
4. **Runtime shell:** header, footer, navigation controls, TOC controls, and fullscreen controls are viewport-native shell UI. They are not independently re-authored per slide.

Observed runtime environments include materially different viewport shapes, including approximately `1.42:1`, `1.60:1`, and `1.80:1`. Screenshot pixel dimensions are not implementation authority; live CSS viewport and DOM geometry are authoritative.

### One semantic transform

The title/subtitle and the slide body must share **one logical transform**.

Required structure conceptually:

```text
PDMA runtime viewport
├── optional decorative bleed layer
├── transformed 1920×1080 semantic slide plane
│   ├── slide body
│   └── title / subtitle
├── viewport-native header
└── viewport-native footer / navigation
```

Do **not** scale the slide body and title independently. A title, diagram, card, hero asset, and semantic label that share canonical coordinates must remain locked to one another under every viewport shape.

### Scale behavior

- Preserve the `1920×1080` internal coordinate plane.
- Scale the semantic slide plane **uniformly**. Never stretch X and Y independently.
- Preserve artwork aspect ratios.
- Horizontally center the scaled semantic plane.
- Use **top-biased contain** for tall/narrow runtime viewports rather than blind vertical centering. Surplus vertical space should primarily become black negative space below the composition instead of pushing the whole presentation downward.
- Do not hard-code runtime layout around screenshot pixel dimensions.
- Do not structurally reflow presentation content at ordinary viewport breakpoints.

The exact top-bias equation belongs to the shared shell implementation and must be calibrated from live DOM measurements. It must not be duplicated or reimplemented by individual slides.

### Extra runtime space

- Extra runtime space remains the near-black presentation field (`#090909`) or approved decorative bleed.
- Never stretch the semantic slide composition simply to eliminate letterboxing / negative space.
- Black surplus space is intentional and preferable to distortion.

### Decorative bleed

Slides may use an optional viewport-level decorative bleed layer when atmosphere needs to continue beyond the semantic plane.

Allowed bleed examples:

- particulate atmosphere;
- floor / reflection continuation;
- non-semantic glow;
- texture or environmental light.

Bleed is **decorative only**. Titles, body copy, diagrams, controls, semantic labels, hero-object meaning, and information architecture must remain on the logical slide plane.

Aspect-ratio overrides may alter decorative crop / `object-position` / bleed scale when necessary. They must not reorder content or create a different slide design.

### Responsive QA contract

- **Exact pixel-diff QA:** `1920×1080` only, against approved canonical references.
- **Responsive visual QA:** validate representative runtime shapes around `1.80:1`, `1.60:1`, and `1.42:1`.
- Responsive acceptance means: no unintended clipping, no text overlap, no distortion, title/body alignment preserved, hero remains balanced, controls remain accessible, and decorative bleed terminates intentionally.
- Do not pixel-diff a tall or wide runtime viewport against the `16:9` Figma export and call intentional viewport-space differences defects.

### Runtime chrome protection

The currently approved live React header/footer geometry is **locked** unless Jim explicitly changes it.

- Do not resize or reposition the approved runtime header/footer merely to solve slide-content geometry.
- Do not move header/footer into the scaled semantic plane.
- Do not rebuild their styling per slide.
- Fix slide geometry inside the semantic plane; fix semantic chrome copy through data/manifest values.

---

## Canonical slide chrome — mandatory shared primitive

The approved PDMA chrome is one shared system, not locally rebuilt slide furniture.

For Figma authoring, use the canonical chrome components. For the live `/pdma2026` React presentation, use the single shared runtime shell. Do not recreate header/footer markup inside individual slide components.

### Header

**Figma component:** `Presentation / Chrome / Header — Canonical`

**Node:** `423:5`

**Canonical Figma placement:** `x=0`, `y=0`, `1920×100` on a `1920×1080` reference slide.

Canonical structure:

- Left event label: `PDMA 2026`.
- Long muted-gray progress track.
- PBDS magenta `#FF2FAE` progress fill.
- Right semantic triad: **three slide-specific key ideas separated by text bullets (`•`)**.
- The separators are text bullets, not slashes.
- The bullets are PBDS magenta.
- Right-side navigation must remain fully contained; overflow is not acceptable.

The older `PEOPLE • PROBLEMS • PROGRESS` / current-runtime `HUMAN • MACHINE • OUTCOME` strings are examples of semantic triads, **not deck-wide fixed copy**.

#### Header invariants

The following are fixed visual behavior:

- event label treatment;
- progress-track treatment;
- progress-fill style;
- typography;
- colors;
- bullet treatment;
- approved runtime placement / geometry.

The following are intended per-slide semantic variables:

1. progress state / fill;
2. right-side semantic triad.

The per-slide triad must come from the current production presentation canon and be carried in the slide manifest (or equivalent single runtime data source). Do not hard-code one triad in `PdmaHeader` for the entire deck.

Variable label lengths must **not** change the approved chrome geometry. The semantic triad must render inside a stable right-side region / slots so a longer label cannot move the progress rail or resize the shell.

Approved Figma-reference typography:

- Event: Inter Semi Bold, 20px, 0.8px tracking.
- Right labels: Inter Semi Bold, 15px, 3px tracking.
- Bullets: Inter Semi Bold, 15px, 2px tracking.

Approved colors:

- Header field: `#090909`.
- Event text: approximately `#F2F2F5`.
- Progress track: `#44464A`.
- Progress fill: `#FF2FAE`.
- Right labels: `#7A7D85`.
- Bullets: `#FF2FAE`.

### Footer

**Figma component:** `Presentation / Chrome / Footer — Canonical`

**Node:** `423:34`

**Canonical Figma placement:** `x=0`, `y=985`, `1920×95` on a `1920×1080` reference slide.

The live React footer geometry / control arrangement is the approved runtime implementation and must not be changed to force old Figma coordinate placement into variable browser viewports.

Canonical semantic structure:

- exact canonical 2012 five-leg asterisk;
- long muted-gray horizontal rule;
- **slide-specific footer principle / key takeaway**;
- presentation controls in the approved live runtime positions.

`HUMAN JUDGMENT COMPOUNDS` is an approved footer statement for the relevant slide; it is **not** a deck-wide fixed footer string.

#### Footer invariants

Fixed:

- current approved live runtime geometry;
- current asterisk placement and exact geometry;
- rule treatment;
- typography, color, and spacing treatment;
- navigation/control placement.

Variable:

- footer principle / key takeaway for the current slide.

The footer principle must come from the current production presentation canon and be carried by the slide manifest (or equivalent single runtime data source). Do not use a short list that clamps many slides to the same fallback value.

Approved reference styling:

- Statement: Inter Semi Bold, 15px, 4px tracking, `#7A7D85`.
- Rule: `#44464A`.
- Asterisk: exact geometry cloned from node `5:38`, PBDS magenta `#FF2FAE`.

### Usage rule

Header and footer chrome are **mandatory shared primitives**. Geometry and styling stay stable; semantic copy changes by slide.

Do not recreate them manually per slide. In React, render them from one shell and feed slide-specific semantics from the canonical manifest. In Figma, use component instances so visual changes propagate consistently.

---

## Component 01 — Systems Stack

**Figma component:** `Presentation / Visual / Systems Stack — Ambiguity → Judgment → Action`

**Node:** `416:2`

### Purpose

Explain a layered systems relationship where ambiguous context is interpreted through human judgment and converted into action / better outcomes.

### Canonical semantic structure

`CONTEXT → JUDGMENT → ACTION`

Visual layers:

1. **Ambiguity** — dimensional suspended plate with noisy / particulate / unresolved field.
2. **Human Judgment** — dimensional translucent layer containing routes, relationships, paths, nodes, and interpretation.
3. **Better Outcomes** — dimensional base layer with structured system logic and magenta edge / glow emphasis.

Supporting microcopy may include:

`HUMAN / CLARITY / SCALES / FURTHER`

### Visual construction rule

This component is intentionally **dimensional and material**. Preserve suspended planes, depth edges, glows, particulate detail, and diagrammatic relationships. Do not reduce it to stacked flat cards or generic boxes.

### Usage

Use selectively when a layered-system metaphor materially improves understanding.

Do **not** use this as recurring decoration on every slide.

---

## Component 02 — Transformation Sequence

**Figma component:** `Presentation / Visual / Transformation Sequence — Uncertainty → Judgment → Systems → Impact`

**Node:** `416:212`

### Purpose

Show a staged transformation from messy input to real product impact.

### Canonical sequence

`UNCERTAINTY → JUDGMENT → SYSTEMS → REAL IMPACT`

Supporting action labels:

`EXPLORE → SYNTHESIZE → OPERATIONALIZE → BETTER DECISIONS`

The final stage contains an exact clone of the canonical five-leg asterisk as the brand / outcome signal.

### Visual construction rule

Preserve the sequence as four materially differentiated standing panels crossed by a magenta through-line: messy uncertainty, interpreted judgment, system structure, then illuminated impact. Keep depth, panel layering, glass / material cues, glow, and floor / reflection atmosphere. Do not flatten it into four ordinary cards.

### Usage

Use selectively when the content itself describes progression, maturation, transformation, or increasing authority.

Do **not** repeat this component across every slide.

---

## Presentation component rules

1. The canonical header and footer are mandatory shared slide chrome; use one shared runtime shell in React and component instances in Figma unless Jim explicitly approves an exception.
2. Chrome **geometry and styling are stable; per-slide header/footer semantics are variable** and come from the current presentation canon / manifest.
3. Every semantic slide element, including title/subtitle, belongs to one `1920×1080` logical plane and shares one uniform runtime transform.
4. Header/footer/navigation remain viewport-native and must not be rescaled to solve slide-body layout.
5. The explanatory visual components below are **high-impact explanatory visuals**, not default slide chrome.
6. Rotate explanatory visuals with typography-only slides, artifacts, screenshots, photography, charts, and simpler diagrams.
7. Preserve the near-black presentation field, crisp white typography, and PBDS magenta `#FF2FAE`.
8. Use Inter / Inter Display typography.
9. Keep semantic labels, lines, shapes, and the canonical mark editable in Figma.
10. Preserve the dimensional / material visual character of explanatory components; do not replace them with simplified schematic placeholders.
11. If a component uses the logo, use only the exact canonical 2012 five-leg asterisk geometry from node `5:38`.
12. Never substitute a six-leg asterisk, generated asterisk, Unicode asterisk, or approximate starburst.
13. Structural responsive reflow of slide content is prohibited unless Jim explicitly approves a slide-level exception; use uniform scaling plus controlled decorative bleed instead.

## Approved presentation precedents

These are reusable presentation precedents, not mandatory universal PBDS page
templates. The Design Brain and these approved references describe a mature
PBDS presentation expression, reusable presentation precedent, and composition
judgment/continuity. They do not define the entire global PBDS aesthetic and
do not require presentation-specific dark-field, orb, spatial, cinematic, or
chrome treatments in Portfolio, Social, One-Pager, PDF, or other output
adapters.

### HERO v1 — Centered Signal Field

- **Purpose:** Make a thesis or punchline unmistakable.
- **Use when:** One idea should dominate the audience's first read.
- **Canonical semantic structure:** A centered thesis/punchline led by typography.
- **Visual behavior:** Centered composition as a bounded HERO exception with one restrained atmospheric field.
- **Native vs decorative boundary:** Typography and semantic content remain native/editable; atmosphere is decorative only.
- **Reject / anti-patterns:** Generic sci-fi object spectacle and generic cards.
- **Approved reference:** `hero-centered-signal-field-v1` — `presentation-references/hero-centered-signal-field-v1.png`
- **First proven consumer:** PDMA Slide 05.

### Brand / Reveal v1 — Particle Horizon Reveal

- **Purpose:** Introduce a named framework, product, system, or method.
- **Use when:** The audience should feel they are “meeting the thing.”
- **Canonical semantic structure:** Oversized naming moment followed by a structured semantic reveal.
- **Visual behavior:** Minimal containers with a restrained particle horizon/atmosphere.
- **Native vs decorative boundary:** Naming and reveal content remain native/editable; particles and atmosphere are decorative only.
- **Reject / anti-patterns:** Hub-and-spoke and SaaS architecture treatment.
- **Approved reference:** `brand-reveal-particle-horizon-v1` — `presentation-references/brand-reveal-particle-horizon-v1.png`
- **First proven consumer:** PDMA Slide 11.

### Translation / Traceability v1 — Framework → Requirements

- **Purpose:** Make a one-to-one mapping legible.
- **Use when:** Framework domains must visibly translate into concrete requirements.
- **Canonical semantic structure:** Aligned identifiers/tracks connecting each framework item to its corresponding requirement.
- **Visual behavior:** Preserve traceability and eliminate crossing ambiguity; editorial rather than spreadsheet-like.
- **Native vs decorative boundary:** Mapping labels, identifiers, and relationships remain native/editable; atmosphere is decorative only.
- **Reject / anti-patterns:** Ambiguous crossings and minimalism that hides the mapping.
- **Approved reference:** `translation-traceability-v1` — `presentation-references/translation-traceability-framework-to-requirements-v1.png`
- **First proven consumer:** PDMA Slide 12.

### Before / After Transformation v1 — Idea → Production-Ready Spec

- **Purpose:** Show weak input becoming a stronger output through transformation.
- **Use when:** The value is in the movement from an idea or prompt to a production-ready specification.
- **Canonical semantic structure:** Weak input → explicit bridge/transformation → stronger output.
- **Visual behavior:** Output may and often should dominate; visual weight communicates semantic value.
- **Native vs decorative boundary:** Input, bridge, and output remain native/editable; atmosphere is decorative only.
- **Reject / anti-patterns:** Equal generic cards when the result has higher semantic value.
- **Approved reference:** `before-after-transformation-v1` — `presentation-references/before-after-idea-to-spec-v1.png`
- **First proven consumer:** PDMA Slide 13.

---

## Approved role in the slide system

The canonical header and footer belong to the **shared chrome** layer and appear consistently across the deck. Their visual construction is stable while the semantic labels / principles change by slide.

The dimensional explanatory components belong to the **visual explanation** layer of the presentation system. They are appropriate for slides where the visual carries conceptual meaning and are intentionally **not** mandatory on every content slide.

The broader presentation system may also use:

- bold editorial white + magenta content titles;
- numbered circular markers with thin magenta rings where numbering genuinely communicates multiple points;
- designed non-numerical bullet markers for ordinary bullet content;
- editorial architectural treatments where they carry meaning or materially support the composition.

Those additional primitives should remain independently composable rather than being baked into the explanatory visual components.
