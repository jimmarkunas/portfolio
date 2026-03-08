# Codex Implementation Brief — Final

## Mission
Implement the portfolio using the uploaded design system as **source of truth**.
Do not reinterpret the design language into a generic SaaS dashboard or a playful startup site.

## High-level guardrails

- Light-first system
- Premium editorial feel
- Primary CTA is always blue
- Main paragraph text is black
- Use bullets over dense text blocks inside modules
- Favor real artifacts over decorative filler

## Source of truth files

Codex should prioritize these inputs in this order:
1. `01-LOCKED-BRIEF-FINAL.md`
2. `02-STYLEGUIDE-FINAL.md`
3. `03-DESIGN-SYSTEM-FINAL.md`
4. `05-COLOR-SYSTEM-FINAL.md`
5. `07-CASE-STUDY-MODULE-SPECS-FINAL.md`
6. `pages/jim-unified-design-system-v6.html`

## Implementation priorities

### 1. Foundation
- Set CSS variables / tokens to approved values
- Set Inter as the main font
- Build typography scale
- Implement surface and contrast band system

### 2. CTA system
- Blue primary button
- Black secondary button on light
- White outline secondary button on dark
- All buttons radius 6px

### 3. Case-study modules
Build these first:
- hero
- snapshot panel
- before / after
- timeline rail
- narrative vertical timeline
- architecture diagram
- annotated artifact
- risk cards
- proof system
- numeric callout strip
- dark footer CTA band

### 4. Glyph appendix
- Implement glyph system at the bottom of the style reference page
- Use the centered cleaner glyph style

## Timeline-specific rules

### Delivery rail
- One bullet per phase only
- Keep it concise and scan-first

### Vertical timeline
- Bubble must sit directly on the line
- Line must run behind the bubble

## Proof rules
- Dark quote card spans full width
- Lighter proof cards below can sit in a two-column grid
- Metric callout must break onto its own line above supporting label

## Snapshot rules
- Left column frames the case
- Middle column carries core facts
- Right column is numeric callout strip

## Architecture rules
- Consulting-diagram tone, not engineering whiteboard tone
- Lane-based grouping
- Minimal, deliberate connectors

## Content behavior
- Use real metrics where available
- Keep labels literal
- Prefer 3-5 bullets to paragraph blocks inside modules
- Never invent fake chart data for decoration

## What Codex must not do
- Reintroduce generic dashboard cards
- Add decorative blobs or startup illustrations
- Change the primary CTA away from blue
- Replace black paragraph text with weak gray
- Compress timelines into noisy or decorative components
