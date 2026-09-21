# Finox Design System

A lightweight reference of the active tokens, typography, and core interface primitives in this repo.

---

## Colors

| Name           | Value     | CSS Variable               |
|----------------|-----------|----------------------------|
| Ink            | `#222222` | `var(--color-ink)`         |
| Secondary dark | `#4B5154` | `var(--color-secondary-dark)` |
| Muted          | `#7B7B7B` | `var(--color-muted)`       |
| White          | `#FFFFFF` | `var(--color-white)`       |
| Soft white     | `#FEFEFE` | `var(--color-soft-white)`  |
| Light gray     | `#F3F3F3` | —                          |
| Border         | `#E5E7EB` | `var(--color-border)`      |
| Accent         | `#447ACB` | `var(--color-accent)`      |
| Accent hover   | `#2F5EA4` | `var(--color-accent-hover)`|

Design principle: neutral-first. Blue (`--color-accent`) is reserved for interaction states and moments of precision emphasis only.

---

## Typography

The site uses one global `.type-*` typography system across homepage, case studies, CV, services/contact, freebies, founder pages, and future pages.
HTML heading rank and visual typography role are separate concerns.
Do not create page-specific typography systems.

Typography is tokenized at six explicit states: Base, SM, MD, LG, XL, and 2XL.

### Font family
Both display and body use the same stack:
```
"Inter Display", "Inter", ui-sans-serif, system-ui, sans-serif
```

### Core type scale

| Class              | Base | SM   | MD   | LG   | XL   | 2XL  | Line | Tracking | Weight |
|--------------------|------|------|------|------|------|------|------|----------|--------|
| `.type-h1`         | 32px | 32px | 32px | 41px | 48px | 48px | 1    | -0.06em  | 300    |
| `.type-h2`         | 32px | 32px | 32px | 41px | 48px | 48px | 1.05 | -0.04em  | 400    |
| `.type-h3`         | 32px | 32px | 32px | 41px | 48px | 48px | 1.2  | -0.02em  | 400    |
| `.type-h1-case-study` | 32px | 32px | 32px | 41px | 48px | 48px | 1.2  | -0.02em  | 400    |
| `.type-h4`         | 28px | 28px | 28px | 32.8px | 36px | 36px | 1.3  | -0.02em  | 400    |
| `.type-h5`         | 24px | 24px | 24px | 26.6px | 32px | 32px | 1.35 | -0.02em  | 400    |
| `.type-h6`         | 20px | 20px | 20px | 22.5px | 28px | 28px | 1.4  | -0.02em  | 400    |
| `.type-p1`         | 20px | 20px | 20px | 20.5px | 24px | 24px | 1.4  | -0.01em  | 400    |
| `.type-p2`         | 18px | 18px | 18px | 18.4px | 20px | 20px | 1.45 | -0.01em  | 400    |
| `.type-p3`         | 16px | 16px | 16px | 16px | 18px | 18px | 1.5  | 0        | 400    |
| `.type-p4`         | 15px | 15px | 15px | 15px | 16px | 16px | 1.5  | 0        | 400    |
| `.type-p5`         | 13px | 13px | 13px | 13px | 14px | 14px | 1.6  | 0        | 400    |

`H1`, `H2`, `H3`, and `H1 case study` share one visual size scale.

### Utility / homepage type scale

| Class                | Base | SM    | MD    | LG    | XL    | 2XL  | Line | Tracking | Weight |
|----------------------|------|-------|-------|-------|-------|------|------|----------|--------|
| `.type-display-hero` | 96px | 115.2px | 138.2px | 184.3px | 230.4px | 240px | 1.02 | -0.06em  | 300    |
| `.type-stat-plus`    | 22px | 22px | 22px | 24.6px | 30px | 30px | 1    | 0        | 400    |
| `.type-stat-number`  | 32px | 32px | 32px | 38.9px | 48px | 48px | 1.1  | -0.03em  | 400    |
| `.type-rail-label`   | 15px | 15px | 15px | 15px | 17.3px | 18px | 1.1  | 0        | 400    |
| `.type-ui-lg`        | 16px | 16px | 16px | 16px | 18.6px | 20px | 1.45 | 0        | 400    |
| `.type-ui-md`        | 15px | 15px | 15px | 15px | 15.4px | 18px | 1.4  | 0        | 400    |
| `.type-ui-sm`        | 14px | 14px | 14px | 14px | 14px | 15.4px | 1.3  | 0        | 400    |
| `.type-footer-brand` | 22px | 22px | 22px | 22.5px | 28px | 28px | 1    | -0.03em  | 400    |

`.type-display-hero` is the intentional oversized display exception.

---

## Breakpoints

Typography and layout use the same six responsive states.

| Label | Prefix | Min Width | Usage |
|-------|--------|-----------|-------|
| Base  | (none) | 0px       | Phones and any size before a breakpoint kicks in. |
| SM    | `sm:`  | 640px     | Larger phones and small tablets. |
| MD    | `md:`  | 768px     | Tablet layout changes. |
| LG    | `lg:`  | 1024px    | Desktop layout changes. |
| XL    | `xl:`  | 1280px    | Large desktop spacing and grids. |
| 2XL   | `2xl:` | 1536px    | Very wide desktop screens. |

---

## Spacing scale

CSS variables: `--space-{n}`

| Token         | Value  |
|---------------|--------|
| `--space-8`   | 8px    |
| `--space-12`  | 12px   |
| `--space-16`  | 16px   |
| `--space-20`  | 20px   |
| `--space-24`  | 24px   |
| `--space-28`  | 28px   |
| `--space-32`  | 32px   |
| `--space-40`  | 40px   |
| `--space-52`  | 52px   |
| `--space-80`  | 80px   |
| `--space-120` | 120px  |

---

## Radius tokens

| Token              | Value  | Usage                     |
|--------------------|--------|---------------------------|
| `--radius-sm`      | 12px   | Cards, panels             |
| `--radius-pill`    | 50px   | Buttons, eyebrow pills    |
| `--radius-chip`    | 100px  | Tag chips                 |
| `--radius-circle`  | 9999px | Icon circle buttons       |

---

## Component primitives

### Buttons

**`.button-primary`**
- Filled: `--color-ink` background, white text
- Border: 1px solid `--color-ink`
- Radius: `--radius-pill`
- Min height: 48px, padding: 0 20px
- Hover: background → `--color-accent`, border → `--color-accent`, `translateY(-1px)`

**`.button-secondary`**
- Transparent background, `--color-ink` text
- Border: 1px solid `--color-ink`
- Radius: `--radius-pill`
- Min height: 48px, padding: 0 20px
- Hover: text/border → `--color-accent-hover`, `translateY(-1px)`

**`.button-book-call`**
- Filled: `--color-ink` background, white text
- Border: 1px solid `--color-ink`
- Radius: `--radius-pill`
- Min height: 48px, padding: 0 20px
- Text/icon gap: 8px
- Font: 18px / 500, nowrap
- Hover: background and border → `--color-accent`, `translateY(-1px)`
- Used by the semantic `BookCallCta` wrapper and any visual-equivalent booking CTA

**`.button-book-call--brand`**
- Blue-filled booking tone for dark backgrounds
- Background and border: `--color-accent`
- Hover: background and border → `--color-accent-hover`
- Used via `BookCallCta tone="brand"` when the CTA sits on a dark surface

**`.inline-text-cta`**
- Inline-flex with icon gap 6px
- Underline with 4px offset
- Hover/focus-visible: color → `--color-accent`
- Typically paired with `type-p3` and a `<ArrowUpRight>` icon

**`.text-link`**
- Inline hyperlink primitive for standard text links
- Color: inherit by default
- Hover/focus-visible: color → `--color-accent`
- Outline on focus-visible for keyboard accessibility
- Used by the shared `TextLink` React primitive

### Icon button

**`.icon-circle-button`**
- 48×48px circle (`--radius-circle`)
- Background: `--color-ink`, icon: white
- Hover/focus-visible: background → `--color-accent`

### Labels & pills

**`.eyebrow-pill`**
- Inline-flex, gap 8px, min-height 30px, padding 4px 12px
- Radius: `--radius-pill`
- Background: `--color-white`, color: `--color-ink`
- Contains a `.eyebrow-pill__dot` (12×12px circle, `--color-ink` fill) + `.type-p5` text

**`.tag-chip`**
- Inline-flex, min-height 28px, padding 4px 12px
- Radius: `--radius-chip`
- Transparent background, color: `--color-secondary-dark`
- Border: 1px solid `rgba(34,34,34,0.06)`
- Modifier `.tag-chip--dark`: filled `--color-ink`, white text

### Section intro pattern
```jsx
<div className="eyebrow-pill">
  <span className="eyebrow-pill__dot" />
  <span className="type-p5">Label</span>
</div>
<h2 className="type-h3 mt-6">Heading</h2>
<p className="type-p3 mt-4 text-[#7B7B7B]">Support copy.</p>
```

---

## Design principles

- Typography leads — let scale and weight do the work before reaching for color or decoration.
- Surfaces stay quiet — white, light gray (`#F3F3F3`), and border (`#E5E7EB`) are the only surface colors.
- Blue is an action color — `--color-accent` appears only on interactive states (hover, focus, CTA fills). Never use it decoratively.
- Transitions are fast and subtle - 160ms ease across color, background, border, outline, shadow, and opacity.
- Interactive state changes must not alter component geometry. Use color, background, border color, outline, shadow, or opacity for feedback. Translation, scaling, dimensional changes, and typography changes are prohibited unless explicitly documented as an intentional motion variant.
