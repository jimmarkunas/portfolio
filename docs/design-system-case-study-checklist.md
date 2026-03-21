# Case Study Design System Checklist

This page has a set of patterns worth standardizing for future case-study and portfolio work.

## Core Primitives

### `SectionShell`

Purpose:
- Define section width, horizontal padding, background surface, and vertical rhythm.

Should support:
- `surface`: `surface` | `white` | `ink`
- `bleed`: contained vs full-bleed
- explicit tablet behavior when tablet should not inherit desktop assumptions

Current references:
- [Container.tsx](/Users/jimmarkunas/Box%20Sync/portfolio/src/components/Container.tsx)
- [globals.css](/Users/jimmarkunas/Box%20Sync/portfolio/src/app/globals.css)
- [page.tsx](/Users/jimmarkunas/Box%20Sync/portfolio/src/app/case-study-test/page.tsx)

### `EyebrowPill`

Purpose:
- Standard section label with dot, pill radius, and consistent height.

Use for:
- `Problem Statement`
- `Solution`
- `Recognition`
- `Implementation`
- `Experiences`

System rules:
- same dot size
- same pill height
- same light surface by default
- optional inverted variant for dark sections

Existing system primitive:
- `.eyebrow-pill`
- `.eyebrow-pill__dot`

### `StatCard`

Purpose:
- Reusable metric card for square and wide variants.

Variants:
- `square`
- `wide`
- `metric + label`
- `metric + supporting copy`

System rules:
- consistent radius
- consistent metric typography
- consistent surface behavior
- optional decorative corner/vector layer

### `TagPill`

Purpose:
- Standard tags for capabilities, tools, categories, and experience labels.

Variants:
- filled dark
- soft neutral
- outline/light

### `PullQuote`

Purpose:
- Editorial quote block with quote glyph, attribution, and light/dark variants.

System rules:
- one decorative quote mark treatment
- no divider by default unless explicitly needed
- attribution row spacing must be tokenized
- dark variant should have its own decorative opacity values

### `Timeline`

Purpose:
- Delivery/process timeline with distinct mobile, tablet, and desktop modes.

Required modes:
- mobile: stacked cards
- tablet: horizontal compressed timeline
- desktop: full horizontal timeline

Rule:
- tablet should be designed intentionally, not as a partial desktop collapse

## Responsive Rules To Standardize

### Responsive Baseline Rule

Every shared component and every page-level refactor must preserve intentional behavior across:
- mobile
- tablet
- desktop

This is not optional polish. It is the baseline acceptance standard for design-system work.

Required rule:
- no component extraction, abstraction, or refactor should be considered complete unless mobile, tablet, and desktop behavior are all explicitly verified
- desktop styles must not be treated as the default source of truth for every breakpoint
- tablet must be designed intentionally when it differs from mobile and desktop
- if a shared component cannot preserve an existing breakpoint-specific design, keep that section local instead of forcing the abstraction
- preventing regressions across breakpoints is more important than maximizing reuse

Failure condition:
- if a refactor changes spacing, hierarchy, alignment, or type scale on another breakpoint without the user asking for it, that is a regression and the abstraction should be revised or rolled back

Working rule:
- extract structure only after confirming that the responsive behavior is actually shared
- preserve exact per-breakpoint typography and layout when migrating existing designs into shared components

### Tablet Is Its Own Layout Mode

For dense sections, tablet should not inherit desktop structure automatically.

Patterns from this page:
- keep media stacked on top when needed
- put metadata and CTAs inline beneath media on tablet
- switch card groups to explicit `2x2` layouts on tablet
- avoid hidden overflow and horizontal scroll unless the section is intentionally scrollable

### Width Policy

Every section should choose one of these explicitly:
- contained on all breakpoints
- full-width on tablet only
- full-bleed on all breakpoints

Do not rely on nested max-width caps to define layout accidentally.

### Surface Inversion

When inverting backgrounds:
- invert only the intended layer
- preserve contrast tokens
- define whether pills/cards also invert

This should be a system decision, not a one-off visual tweak.

## Tokens Worth Formalizing

### Surfaces

Use named tokens instead of repeating hex values:
- `surface`
- `white`
- `ink`
- `ink-muted`
- `accent-blue`

Current recurring values:
- `#F3F3F3`
- `#FFFFFF`
- `#222222`
- `#447ACB`

### Radius

Standardize:
- pill radius
- card radius
- media radius

### Spacing

Standardize:
- section top/bottom rhythm
- quote-to-attribution spacing
- card-grid gap sizes
- tablet-only spacing reductions

### Decorative Opacity

Tokenize decorative treatments:
- quote glyph opacity
- vector/corner decoration opacity
- divider strength

## Extraction Priorities

### Priority 1

Extract first because they are already repeated heavily:
- `EyebrowPill`
- `TagPill`
- `SectionShell`

### Priority 2

Extract next because they carry reusable layout behavior:
- `StatCard`
- `Timeline`
- `PullQuote`

### Priority 3

Document before extracting:
- recognition row pattern
- media + metadata tablet pattern
- featured experience row

## Implementation Checklist

- Create a shared `SectionShell` component.
- Replace one-off pill markup with a shared `EyebrowPill`.
- Move repeated tag styles into a shared `TagPill`.
- Extract square/wide metric cards into `StatCard`.
- Build a single `Timeline` component with explicit mobile/tablet/desktop variants.
- Build a `PullQuote` component with `light` and `dark` variants.
- Add named surface and decorative opacity tokens where raw values are still repeated.
- Add one reference page or story for each component before reusing it broadly.

## Acceptance Standard

Before a pattern is added to the design system, it should:
- appear at least twice or clearly be a foundational primitive
- preserve approved mobile, tablet, and desktop behavior without regressions
- have a stable tablet behavior
- have a defined light/dark surface policy
- use tokens instead of one-off values where practical
- avoid page-specific copy or layout hacks

## Recommendation

Start with:
1. `EyebrowPill`
2. `TagPill`
3. `SectionShell`

Those three will clean up the most repetition fastest and create a strong base for extracting the more complex case-study components later.
