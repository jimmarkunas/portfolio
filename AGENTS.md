# Project Context & Agent Instructions

## What This Is

Jim Markunas's personal portfolio site. Built with Next.js 14, React 18, TypeScript (strict), Tailwind CSS, and Framer Motion. Deployed to Hostinger via GitHub Actions on push to `main`.

## Current State (as of March 17, 2026)

**Active branch:** `rebuild/clean-figma-reset` — full portfolio rebuild in progress.

**What's built:**
- Design token system (`src/styles/tokens.css`) — colors, spacing, typography, border radius
- Global typography utilities (`src/app/globals.css`) — `type-h1` through `type-p5`, fluid clamp() sizing
- Site layout — `SiteHeader`, `SiteFooter`, `Container` components
- Case study template — `CaseStudyTemplate.tsx` (full multi-section renderer)
- Case study UI components — `EyebrowPill`, `TagPill`, `StatCard`, `PullQuote`, `Timeline`, `MobileSolutionCarousel`, `SectionShell`, `FinoxGlyph`
- Case study data — Solstice Ops (`src/content/case-studies/`)
- Route: `/case-study-solstice` — fully built out
- Route: `/design-system` — exists

**What's not built yet:**
- `/` homepage — empty shell; experimental versions at `/homepage-v1` and `/homepage-test`
- `/work` — nav link exists, no page
- `/services` — nav link exists, no page
- `/cv` — nav link exists, no page
- `/contact` — nav link exists, no page

## Project Structure

```
src/
  app/               # Next.js app routes
  components/
    site/            # SiteHeader, SiteFooter, Container
    case-study/      # CaseStudyTemplate, hero/media components
    ui/              # Primitive UI components
  content/
    case-studies/    # Case study data files (separated from rendering)
  styles/
    tokens.css       # Single source of truth for design tokens
```

## Design System

- **Colors:** `--color-ink` (#222), `--color-accent` (#447acb), `--color-muted` (#7b7b7b), `--color-soft-white` (#fefefe), `--color-border` (#e5e7eb)
- **Typography:** Inter Display / Inter, fluid scaling via `clamp()`, classes prefixed `type-`
- **Spacing:** 8px–120px token scale
- Tailwind config extends CSS variables — use tokens, not raw hex values

## Behavioral Rules

### Visual Adjustments
- Use the user's screenshot or wireframe as the source of truth.
- Lock the primary axis first, then adjust only one variable per step.
- If the user asks for a single nudge, change only that one value.
- Do not convert a simple layout tweak into a larger refactor unless asked.

### Failure Prevention
- Prefer deterministic positioning over cleverness on layout tasks.
- If earlier assumptions were wrong, stop compounding them.
- Avoid "close enough" on alignment — match the requested relationship directly.
- Do not introduce scroll bars or scroll-based UI unless explicitly asked.
- If it takes more than 2 tries on the same request, stop and present a plan first.
- Shared-component and design-system changes must preserve approved mobile, tablet, and desktop behavior. If an abstraction introduces cross-breakpoint regressions, revise or roll it back.

## Case Study Content Rules

- Source briefs live in `docs/case-studies/`
- Runtime content files live in `src/content/case-studies/`
- When both exist, use the brief as source of truth for content and the runtime file as source of truth for schema
- Preserve metrics exactly
- Preserve first-person ownership where present
- Do not introduce resume-style phrasing

## Key Conventions
- Path alias: `@/*` → `./src/*`
- No global state management — local state only where needed
- Content (data) is separated from components — case study data lives in `src/content/`, not in components
- Mobile-first responsive design with `md:` and `lg:` breakpoints
- Primary CTA throughout: "Book a Call" → Google Calendar scheduling link
