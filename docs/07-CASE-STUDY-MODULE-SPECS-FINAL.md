# Case-Study Module Specs — Final

## 1. Hero
### Required elements
- eyebrow label
- H1
- subhead
- primary CTA (blue)
- secondary CTA (outline on dark hero)
- right-side proof / artifact frame
- dark KPI strip where appropriate

## 2. Snapshot panel
### Structure
- left framing intro
- middle factual case details
- right numeric callout strip

### Rule
Do not revert to a repetitive six-box grid.

## 3. Before / after
### Rule
- bullet-led comparison
- do not use dense paragraphs
- use directional transformation logic

## 4. Delivery rail timeline
### Rule
- one bullet per phase only
- each phase should communicate a single operational idea

## 5. Narrative vertical timeline
### Rule
- bubble sits directly on the line
- line runs behind the bubble
- use for richer editorial sequencing

## 6. Architecture / integration diagram
### Rule
- consulting-style artifact
- grouped by system layer
- minimal connectors
- readable, premium, structured

## 7. Annotated artifact
### Rule
- 2 to 4 callouts max
- explain decision points, not every UI detail

## 8. Risk / blocker cards
### Rule
- light red wash background
- red left-edge emphasis
- bullet-led content

## 9. Proof / quote cards
### Structure
- full-width dark quote card
- two lighter proof cards below
- metric on its own line above label in lighter proof cards

## 10. Numeric callout strip
### Rule
- blue numbers
- white labels / support
- only use for real metrics

## 11. Let's Build Footer
### Rule
- full dark band
- centered headline lockup with optional blue accent word
- one strong primary CTA and one outline secondary CTA
- concise, premium close

## 12. Footer
### Rule
- required global element on every page
- centered link row only (no legal/copyright line in this module)
- links are white and switch to blue on hover
- uses dark brand gradient background with no top divider

## 13. PDF Viewer
### Rule
- default proof-viewer pattern for any case study that includes PDF articles
- article archive cards in the case page should route to `pdf-viewer.html?doc={key}`
- viewer page must keep global header + Let's Build Footer + Footer modules
- include source chips, zoom controls, and "Open PDF in New Tab" fallback
- preserve light editorial shell with blue CTA hierarchy (no generic dark app shell)

## 14. Video2
### Rule
- reusable full-bleed press/coverage module for case-study pages
- must use native YouTube embed with standard controls (no fake browser chrome/overlays)
- shell styling must match dark-band/Let's Build treatment (same gradient family + top/bottom borders)
- inner content stays constrained to standard container width
- desktop is two-column (copy + media), mobile stacks to one column

## 15. Video3 (Deprecated Alias)
### Rule
- alias only; use `Video Modal 1` as the canonical module name
- canonical behavior: editorial copy left and video proof right
- must keep native YouTube embed/controls (no third-party overlay chrome)
- mobile collapses to one column
