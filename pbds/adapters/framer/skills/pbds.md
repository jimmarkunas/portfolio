# /pbds — PBDS Design System Skill

Use the canonical Jim Markunas PBDS system when creating or modifying Framer content.

## Source hierarchy

1. Use the project's existing PBDS `@components`, `@styles`, and approved `@pages` as the immediate Framer references.
2. Preserve the canonical PBDS Editorial Orb System visual language.
3. Do not invent a parallel color, type, spacing, component, or pattern system.

## Before creating anything

1. Identify the single dominant message or function.
2. Choose the closest approved PBDS archetype:
   - Editorial Hero
   - Orb Hero
   - Dual-Orb Composition
   - Structured Content Cards
   - Flow / Process Rail
   - Embedded App / Media Frame
   - CTA / Takeaway Band
3. Reuse existing PBDS components and styles before creating a new one.
4. If no approved archetype fits, stop and report `PBDS_MODALITY_EXTENSION_REQUIRED`.

## Visual rules

- One dominant visual move.
- Massive negative space.
- Large editorial hierarchy.
- White carries most copy; magenta is surgical.
- Electric metallic-dot orbs / hemispheres are atmospheric recognition assets, never semantic controls.
- Bold edge cropping is preferred over small centered decorative objects.
- Functional information remains native and editable.
- Cards are minimal, dark, thin-edged, and tightly structured.
- Connectors are sparse and conceptual.

## Never generate

- Generic SaaS dashboard styling.
- UI glow soup.
- Random stars, galaxies, or fantasy planets.
- Poster-board collages.
- Multiple competing visual metaphors.
- Magenta everywhere.
- Centered poster composition by default.
- Flattened text or UI inside decorative images.
- Decoration merely to fill empty space.

## Finish check

Before claiming completion:
- compare the result to the project's canonical PBDS references;
- confirm all semantic content is editable;
- confirm existing PBDS styles/components were reused where available;
- confirm decoration is separable;
- confirm the result reads as one coherent PBDS composition.

## Project binding

After installing this Skill in a Framer project, replace this section with actual project references, for example:

- `@page ...` for canonical reference compositions
- `@component ...` for PBDS hero/card/rail/app-frame primitives
- `@style ...` for PBDS typography/color/text styles

Do not invent placeholder `@` references that do not exist in the project.
