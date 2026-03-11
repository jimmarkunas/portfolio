# Design System — Final

Visual reference page: `docs/pages/design-system-visual.html` (canonical editable HTML workbench).

## Foundation tokens

### Brand / accent
- `--blue: #447ACB`
- `--teal: #1E8E89`
- `--amber: #C7922A`
- `--red: #B54A3A`
- `--steel: #5B78A5`

### Text
- `--ink: #000000`
- `--ink-2: #1D2630`
- `--ink-3: #56606E`

### Surfaces
- `--page: #F4F6F9`
- `--panel: #FFFFFF`
- `--panel-2: #E8EEF7`
- `--line: #D3DAE3`
- `--line-2: #C2CBD7`
- `--red-wash: #F9ECE9`

### Contrast band system
- `--contrast-edge: #1D2E3E`
- `--contrast: #2B3A49`
- `--contrast-card: #314456`
- Callout number blue on dark: `#447ACB`

### Shape / depth
- radius-sm: `6px`
- radius-md: `12px`
- radius-lg: `16px`

## Typography + text color reference (canonical)

Use these tokenized names in requests so we stay consistent.

### Type tokens (responsive)
- `Type/Body-MD` → `--type-body-md: clamp(16px, 1.1vw, 17px)`
- `Type/Body-SM` → `--type-body-sm: clamp(14px, 1vw, 15px)`
- `Type/Kicker` → `--type-kicker: 11px`
- `Type/H1` → `--type-h1: clamp(44px, 5.4vw, 64px)`
- `Type/H2` → `--type-h2: clamp(34px, 3.8vw, 42px)`
- `Type/H3` → `--type-h3: clamp(26px, 2.7vw, 30px)`
- `Type/H4` → `--type-h4: clamp(20px, 2vw, 22px)`
- `Type/Section` → `--type-section: clamp(30px, 3.3vw, 36px)`
- `Type/Hero` → `--type-hero: clamp(46px, 6.2vw, 62px)`
- `Type/Number-XL` → `--type-number-xl: clamp(34px, 4.3vw, 40px)`
- `Type/Number-LG` → `--type-number-lg: clamp(28px, 3.2vw, 34px)`
- `Type/Number-MD` → `--type-number-md: clamp(24px, 2.8vw, 30px)`

### Text color roles
- `TextColor/Primary` → `--ink` (`#000000`) for default body text
- `TextColor/Heading` → `--ink-2` (`#1D2630`) for headlines and strong labels
- `TextColor/Secondary` → `--ink-3` (`#56606E`) for supporting copy
- `TextColor/Accent-Blue` → `--blue` (`#447ACB`) for eyebrows, links, bullets, emphasis
- `TextColor/Inverse` → `#FFFFFF` for dark surfaces
- `TextColor/Inverse-Soft` → `rgba(255,255,255,.82-.92)` for secondary dark-surface copy

### Selector mapping (current HTML)
- `.hero h2` → `Type/Hero`
- `.section-head h3` → `Type/Section`
- `.h1`, `.h2`, `.h3`, `.h4` → `Type/H1`, `Type/H2`, `Type/H3`, `Type/H4`
- `p` → `Type/Body-MD`
- `.hero-kpi .n` → `Type/Number-MD`
- `.snapshot-kpi .kpi-n`, `.proof-metric .n` → `Type/Number-LG`
- `.callout .n`, `.contrast-card .n` → `Type/Number-XL`

### Communication shorthand
- `Change this to Type/H4 with TextColor/Heading`
- `Use Type/Body-SM with TextColor/Secondary`
- `Set this metric to Type/Number-XL and keep Accent-Blue`

## Layout primitives

### Page rhythm
- Mostly light reading sections
- Strategic dark proof / CTA / outcome bands
- Large top-level sections with clear vertical rhythm

### Grid usage
- Use clean editorial grids
- Avoid crowded dashboard lattices
- Prioritize module clarity over density theater

## Core modules

### 1. Hero
Contains:
- eyebrow / micro-label
- H1 headline
- subhead
- CTA row
- right-side proof / artifact framing
- KPI strip on dark background where appropriate

### 2. Snapshot panel
Three-part structure:
- left framing column
- middle factual case column
- right numeric callout strip

### 3. Before / after
- two-sided comparison
- bullet-led, not paragraph-led
- strong directional visual cue between states

### 4. Timelines
Two approved variants:
- delivery rail (DIRECTV-inspired)
- editorial vertical timeline (Kane-inspired)

### 5. Architecture / integration diagram
- simplified consulting-style lanes
- clear systems grouping
- visual arrows / flows
- no nested whiteboard boxes or fake dashboard clutter

### 6. Annotated artifact
- real artifact / screenshot / mock artifact frame
- 2-4 callouts max
- only call out what mattered operationally or strategically

### 7. Risk / blocker cards
- light red wash background
- stronger red left edge
- bullet-led content

### 8. Proof / quote system
- full-width dark quote card
- two lighter structured proof cards below
- metric line break handling in lighter proof cards

### 9. Numeric callout strip
- dark surface
- blue number
- white label and support copy
- use only for real proof, not filler

### 10. Let's Build Footer
Purpose:
- reusable closing CTA module for site-wide use
- centered headline lockup with optional blue accent word
- one primary action and one outline secondary action
- this always ships together with `Footer` as one combined site-wide footer system

Structure:
- `.lets-build-footer` (module wrapper)
- `.eyebrow` (optional)
- headline with optional `.accent` span
- `.subtle` supporting line
- `.footer-actions` action row

Behavior:
- desktop: centered, wide headline + centered two-button row
- mobile: headline scales down, buttons remain centered and wrap cleanly
- primary CTA keeps blue fill and glow on hover
- outline CTA uses white stroke and switches to blue outline on hover

### 11. Video Modal 1
Purpose:
- reusable media + narrative module for case-study proof moments
- supports a native YouTube embed with editorial copy on the left

Structure:
- `.video-modal-1`
- `.video-modal-1__layout`
- `.video-modal-1__body`
- `.video-modal-1__media`
- `.video-modal-1__meta`
- `.video-modal-1__lead`
- `.video-modal-1__quote`

Behavior:
- desktop: two-column layout (narrative left, `16:9` media right)
- mobile: stacks to one column
- no standalone module header; the video/player title carries the headline
- meta label remains uppercase blue
- lead line uses strong module-headline style
- quote/body copy is readable black paragraph text

### 12. Footer
Purpose:
- reusable global footer module for every page site-wide
- concise outbound/contact navigation in one centered row
- paired with `Let's Build Footer` above it (treat as one component in page builds)

Structure:
- `.site-footer` (module shell)
- `.footer-inner` (width/padding container)
- `.footer-links` (centered link row)
- link set: Linkedin, Github, Email, Twitter, Notion, Freebies

Behavior:
- uses brand dark gradient background
- links are white by default, blue on hover
- no top divider line
- mobile wraps links cleanly with tighter spacing

### 13. PDF Viewer
Purpose:
- reusable article-proof viewer for case studies with supporting PDF evidence
- standard destination for all "Open live preview" archive links
- keeps case-study navigation and global footer continuity

Structure:
- dedicated page template: `templates/pdf-viewer-template.html`
- `.pdf-shell` (viewer container)
- `.pdf-header` + `.pdf-kicker` + title/subtitle block
- `.pdf-docs` (source chips, active state)
- `.pdf-toolbar` (zoom/re-render controls + status)
- `.pdf-canvas-wrap` + `.pdf-pages`
- shared `Let's Build Footer` + shared `Footer`

Behavior:
- URL-driven document selection via `?doc={key}`
- active document chip reflects current query param
- supports native PDF.js multi-page rendering (fit width + zoom controls)
- includes resilient fallback action: "Open PDF in New Tab"
- mobile keeps controls wrapped and readable without reducing proof fidelity
- visual treatment follows light editorial page style with blue action hierarchy

### 14. Video2
Purpose:
- reusable full-bleed media + editorial module for high-visibility press/coverage moments
- supports native YouTube embed with companion narrative/checklist copy
- designed to sit above article archives or proof collections

Structure:
- `.video-modal-2` (full-bleed dark-band shell)
- `.video-modal-2__inner` (constrained content container)
- `.video-modal-2__layout` (two-column media/editorial layout)
- `.video-modal-2__content`
- `.video-modal-2__title`
- `.video-modal-2__copy`
- `.video-modal-2__list`
- `.video-modal-2__media` + native YouTube `iframe`

Behavior:
- background and border treatment matches the shared dark-band/Let's Build system
- desktop: two columns (editorial copy left, `16:9` video right)
- mobile: collapses to one column
- list checkmarks use brand blue
- no decorative overlay chrome; use standard YouTube embed + controls only
- module is full width, while inner content aligns to standard container width

### 15. Video3 (Deprecated Alias)
Purpose:
- legacy name for the same `Video Modal 1` module
- retained only for migration notes in older working files

Structure:
- use `Video Modal 1` classes directly:
- `.video-modal-1`
- `.video-modal-1__layout`
- `.video-modal-1__body`
- `.video-modal-1__media` + native YouTube `iframe`

Behavior:
- same behavior as `Video Modal 1`
- canonical name in all new work: `Video Modal 1`

## Glyph system
- cleaner centered glyph card style
- glyph appendix placed at the bottom of the HTML reference page
- package includes social, architecture, editorial, delivery, artifact, and utility icons
