# PDMA 2026 Figma POC Import Contract

Figma-derived code may contribute slide-body content only.

## Owned by the presentation shell

Do not recreate or style any of these in imported POC code:

- global header, progress rail, navigation, or footer
- slide title or subtitle
- slide number or presentation controls

These remain owned by `PdmaPresentationShell`, `PdmaHeader`, `PdmaBottomBar`, and
`PdmaTitleBlock`. Title and subtitle copy remains in `pdmaTitleConfig.tsx`.

## Allowed import boundary

Place imported code under `src/app/pdma2026/components/poc/` and wrap it with
`PdmaSlideBody`. Scope all CSS below a slide-specific body class, for example
`.pdma-poc-slide-14 .card { ... }`.

The body may contain diagrams, imagery, cards, tables, labels, and explanatory
copy that is not the title or subtitle.

## Responsive imperative

Every imported body must work from fullscreen through a small tablet in portrait
orientation. Use flex/grid, percentages, `clamp()`, and container queries where
appropriate. Do not assume a 1920×1080 viewport, use document-level viewport
units for slide-body geometry, or allow horizontal/vertical overflow to escape
the body boundary.

## Automated checks

Run `npm run check:pdma-poc-guard` after importing or editing POC code. The check
rejects presentation chrome markup, title/subtitle elements, and selectors that
could reach shared chrome.
