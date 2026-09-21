# PBDS 2.0 — Presentation Visual Components

Canonical reusable visual components for Jim Markunas presentation work.

This document governs **presentation visuals only**. It does **not** migrate the live portfolio site to PBDS 2.0 colors or replace the current production site tokens.

Canonical Figma file:

`https://www.figma.com/design/3ZYkEtZVyRH9B2DfVpersf/JM-Personal-Brand-V2`

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

## Canonical slide chrome — mandatory on every slide

The approved header and footer from `PDMA / Reference 03 — Ambiguity Reactor / FRAME ONLY` are the canonical slide chrome for the PDMA presentation system.

Every slide must use these Figma components rather than locally rebuilding the chrome.

### Header

**Figma component:** `Presentation / Chrome / Header — Canonical`

**Node:** `423:5`

**Placement:** `x=0`, `y=0`, `1920×100` on a `1920×1080` slide.

Canonical structure:

- Left event label: `PDMA 2026`.
- Long muted-gray progress track.
- PBDS magenta `#FF2FAE` progress fill.
- Right navigation: `PEOPLE • PROBLEMS • PROGRESS`.
- The separators are **text bullets (`•`)**, not slashes.
- The bullets are PBDS magenta.
- Right-side navigation must remain fully contained inside the slide frame; overflow is not acceptable.

Approved geometry from the source slide:

- `PDMA 2026`: `x=30`, `y=25`.
- Progress track: `x=205`, `y=36`, `w=1275`, `h=2`.
- Progress fill: `x=205`, `y=35`, `h=3`; **width varies by slide position**. The approved source example uses `w=420`.
- `PEOPLE`: `x=1506`, `y=27`.
- Bullet 1: `x=1602`, `y=27`.
- `PROBLEMS`: `x=1632`, `y=27`.
- Bullet 2: `x=1762`, `y=27`.
- `PROGRESS`: `x=1792`, `y=27`, ending at `x=1894`, leaving a 26px right inset.

Approved typography:

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

The progress fill width is the only intended per-slide visual variable in the header unless the user explicitly changes the chrome canon.

### Footer

**Figma component:** `Presentation / Chrome / Footer — Canonical`

**Node:** `423:34`

**Placement:** `x=0`, `y=985`, `1920×95` on a `1920×1080` slide.

Canonical structure:

- Left statement: `HUMAN JUDGMENT COMPOUNDS`.
- Long muted-gray horizontal rule.
- Exact canonical 2012 five-leg asterisk on the far right.
- No generated, redrawn, Unicode, or six-leg substitute is permitted.

Approved geometry within the `1920×95` footer component:

- Statement: `x=26`, `y=45` (slide `y=1030`).
- Horizontal rule: `x=431`, `y=57`, `w=1395`, `h=2` (slide `y=1042`).
- Canonical asterisk: `x=1841`, `y=28`, `w=52`, `h=52` (slide `y=1013`).

Approved typography and colors:

- Statement: Inter Semi Bold, 15px, 4px tracking, `#7A7D85`.
- Rule: `#44464A`.
- Asterisk: exact geometry cloned from node `5:38`, PBDS magenta `#FF2FAE`.

### Usage rule

Header and footer chrome are **mandatory shared primitives**. They must be used consistently on every PDMA slide unless Jim explicitly approves a different slide-level exception.

Do not recreate them manually per slide. Use component instances so future canon changes propagate consistently.

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

1. The canonical header and footer are mandatory shared slide chrome; use component instances on every PDMA slide unless Jim explicitly approves an exception.
2. The explanatory visual components below are **high-impact explanatory visuals**, not default slide chrome.
3. Rotate explanatory visuals with typography-only slides, artifacts, screenshots, photography, charts, and simpler diagrams.
4. Preserve the near-black presentation field, crisp white typography, and PBDS magenta `#FF2FAE`.
5. Use Inter / Inter Display typography.
6. Keep semantic labels, lines, shapes, and the canonical mark editable in Figma.
7. Preserve the dimensional / material visual character of explanatory components; do not replace them with simplified schematic placeholders.
8. If a component uses the logo, use only the exact canonical 2012 five-leg asterisk geometry from node `5:38`.
9. Never substitute a six-leg asterisk, generated asterisk, Unicode asterisk, or approximate starburst.

---

## Approved role in the slide system

The canonical header and footer belong to the **shared chrome** layer and appear consistently across the deck.

The dimensional explanatory components belong to the **visual explanation** layer of the presentation system. They are appropriate for slides where the visual carries conceptual meaning and are intentionally **not** mandatory on every content slide.

The broader presentation system may also use:

- bold editorial white + magenta content titles;
- numbered circular markers with thin magenta rings where numbering genuinely communicates multiple points;
- designed non-numerical bullet markers for ordinary bullet content;
- editorial architectural treatments where they carry meaning or materially support the composition.

Those additional primitives should remain independently composable rather than being baked into the explanatory visual components.
