# PBDS Framer Forge v1

Design-stage adapter for generating PBDS-aligned Framer elements with Google AI Studio.

## Authority

This package is an **adapter**, not a design-system authority.

1. Jim's explicit current instruction.
2. Canonical JM Personal Brand Figma for exact visual truth.
3. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md` for PBDS architecture.
4. Notion `PBDS Presentation Modality — Editorial Orb System` for visual grammar.
5. `docs/PBDS_FRAMER_FORGE_CONTRACT.md` for AI Studio / Framer translation.
6. Generated Framer output is a consumer artifact only.

## Quick start in Google AI Studio

1. Import the repository or upload this package.
2. Open `AI_STUDIO_START_HERE.md`.
3. Ask for one of:
   - `Native Framer Recipe`
   - `Framer Code Component`
4. Name an archetype if you know it, or let the agent select one from `framer-manifest.json`.

Example:

> Create a Native Framer Recipe for an Orb Hero case-study opener.
> Headline: ...
> Supporting copy: ...
> CTA: ...
> Use the canonical PBDS Editorial Orb System. Do not invent a new modality.

## Install the Framer Skill

In Framer, use `/skills`, create a skill named `/pbds`, and paste the contents of `skills/pbds.md`.
Then replace the placeholder project references with the real `@pages`, `@components`, and `@styles` in the Framer project.

## Seven approved archetypes

1. Editorial Hero
2. Orb Hero
3. Dual-Orb Composition
4. Structured Content Cards
5. Flow / Process Rail
6. Embedded App / Media Frame
7. CTA / Takeaway Band

## No-redesign rule

This package may translate, parameterize, and expose the accepted PBDS visual language. It may not restyle or reinterpret it.
