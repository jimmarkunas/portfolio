# Personal Brand Design System 2.0 — Drift Guard

This file is the production rulebook for the Jim Markunas personal brand across the portfolio website, React presentations, and generated/static assets.

## Authority order

1. Figma: **JM Personal Brand V2**
2. `src/styles/tokens.css`
3. Shared PBDS React primitives in `src/components/pbds/**`
4. `tailwind.config.ts` mappings
5. Consumer code: portfolio pages, presentations, case studies, social/static assets

If a consumer conflicts with the design system, the consumer is wrong unless PBDS is intentionally revised first.

## Historical boundary

- Figma page `00 - Logo Test` is historical reference only.
- It must not be treated as current production authority.
- Rejected logo candidates may remain archived for provenance but must not appear as current identity assets.

## Brand lock

- Canonical logo mark: **2012 five-leg asterisk**.
- Canonical geometry is the exact Figma-traced shape exported into `BrandMark.tsx`.
- Approved mark colors only: Ink `#090909`, Magenta `#FF2FAE`, White `#FFFFFF`.
- `JIM MARKUNAS` is live supporting type in a lockup. It is not a wordmark and not alternate logo artwork.
- Do not redraw, regenerate, round, bevel, extrude, skew, outline, gradient-fill, or reinterpret the mark.
- Do not substitute the 2026 six-leg asterisk, 5×5 circle grid, Ensō, or a generated star as the primary logo.

## Color lock

Canonical PBDS color primitives:

- Ink `#090909`
- Magenta `#FF2FAE`
- Charcoal `#2E2E2E`
- Mid `#7A7A7A`
- Line `#E6E6E6`
- Canvas `#F5F5F2`
- Utility `#F3F3F3`
- White `#FFFFFF`

Magenta is a sparse signal, not a wash and not a status color by itself.

## Layout lock

Shared web layout contract:

- max content width: `1200px`
- desktop: 12 columns, `80px` gutters
- tablet: 8 columns, `40px` gutters
- mobile: 4 columns, `20px` gutters
- canonical breakpoints: `390 / 768 / 1200`
- minimum interactive target: `44px`

Use the shared `Container`, PBDS `Section`, `Grid`, `Stack`, and `Cluster` primitives before inventing local layout rules.

## Presentation lock

- logical slide stage: `1920×1080`
- safe area: `96px × 72px`
- canonical presentation gutter: `80px`
- templates live in `src/components/pbds/presentation/**`
- current canonical families: Cover, Statement, Metric, Evidence, System Flow

Interactive presentations may reveal sequence and hierarchy, but static renders must remain complete and readable without motion.

## Recognition grammar

The recurring visual system is:

- monochrome-first
- magenta intervention
- big idea / quiet system
- proof in frame
- architecture, pathways, constraints, decisions, and outcomes made legible
- generous negative space
- the asterisk used as identity or punctuation, not constant decoration

Do not introduce generic blue/purple AI gradients, decorative SaaS blobs, random neon, meaningless abstract shapes, generic luxury styling, or Bytalos identity elements.

## Motion contract

- fast: `120ms`
- base: `200ms`
- slow: `320ms`
- emphasis: `480ms`
- standard easing: `cubic-bezier(0.2, 0, 0, 1)`
- honor reduced-motion preferences

Motion should reveal sequence, causality, hierarchy, or state. It should not perform for its own sake.

## Migration rule

PBDS evolves the existing portfolio system in place. Do not create a second theme, second token file, parallel component stack, or presentation-only brand system.

Temporary compatibility aliases are permitted only when they resolve to canonical PBDS tokens and are clearly identified as migration aliases.

## Change protocol

A reusable visual change is complete only when all relevant layers are updated:

1. Figma rule/component/variable/style
2. `src/styles/tokens.css` when tokenized
3. shared PBDS React primitive/template
4. Tailwind mapping when needed
5. consumer implementation
6. responsive and/or presentation proof
7. this Drift Guard when the global rule changes

Do not skip directly to a one-off page or slide implementation.
