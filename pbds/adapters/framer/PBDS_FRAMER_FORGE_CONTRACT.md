# PBDS Framer Forge — Adapter Contract

## Purpose

Translate canonical PBDS patterns into deterministic Google AI Studio context and Framer-ready output without creating a second design system.

## Authority

1. Jim's explicit current instruction.
2. Canonical JM Personal Brand Figma.
3. PBDS V2 Architecture Contract.
4. Notion PBDS Presentation Modality — Editorial Orb System.
5. This adapter package.
6. Generated consumer output.

## Core visual grammar

- One dominant visual move.
- Massive negative space.
- Large editorial hierarchy.
- Near-black / white / surgical magenta.
- Electric metallic-dot orbs or hemispheres are atmospheric recognition assets.
- Large visual objects may crop aggressively at the frame edge.
- Functional content remains native and editable.
- Connectors are sparse and conceptual.
- Cards are minimal, dark, structured, and thin-edged.
- Slide first. Template second.

## Anti-patterns

Reject:
- generic SaaS dashboards;
- UI glow soup;
- fantasy planets / galaxies;
- random stars;
- poster-board collages;
- multiple competing visual metaphors;
- centered poster layouts by default;
- tiny fully visible hero art floating in the middle;
- flattened text/UI in decorative assets;
- decoration added merely to fill empty space.

## Native Framer Recipe

Use for ordinary branded sections/elements.

A recipe must specify:
- selected archetype;
- semantic layer tree;
- editable content slots;
- existing PBDS components/styles to reuse;
- layout mode and sizing intent;
- decorative asset slots and crop behavior;
- responsive behavior;
- prohibited deviations;
- validation checklist.

Prefer native Framer layers/components/styles.

## Framer Code Component

Use only when native Framer cannot express the required behavior.

Requirements:
- React 18 compatible;
- `addPropertyControls` + `ControlType`;
- sensible defaults;
- Framer layout annotations where useful;
- component-instance slots for arbitrary nested Framer content when appropriate;
- no hard-coded page copy when a control should expose it;
- no base64;
- no independent PBDS token system;
- semantic content separated from decoration.

## Current PBDS reference values

These are adapter references only, not a second token authority:

- Brand Magenta: `#FF2FAE`
- Brand Ink: `#090909`
- Neutral Charcoal: `#2E2E2E`
- Neutral Mid: `#7A7A7A`
- Neutral Line: `#E6E6E6`
- Neutral Canvas: `#F5F5F2`
- Neutral White: `#FFFFFF`
- Font family: `Inter`

When the canonical PBDS package/token export is available, consume it instead of manually maintaining these values.
