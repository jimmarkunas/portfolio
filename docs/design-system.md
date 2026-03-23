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

### Font family
Both display and body use the same stack:
```
"Inter Display", "Inter", ui-sans-serif, system-ui, sans-serif
```

### Core type scale

All sizes use fluid `clamp()` rules.

| Class         | Min   | Fluid  | Max   | Line   | Tracking  | Weight |
|---------------|-------|--------|-------|--------|-----------|--------|
| `.type-h1`    | 72px  | 12vw   | 240px | 1      | -0.06em   | 300    |
| `.type-h2`    | 56px  | 9vw    | 120px | 1.05   | -0.04em   | 400    |
| `.type-h3`    | 32px  | 4vw    | 48px  | 1.2    | -0.02em   | 400    |
| `.type-h4`    | 28px  | 3.2vw  | 36px  | 1.3    | -0.02em   | 400    |
| `.type-h5`    | 24px  | 2.6vw  | 32px  | 1.35   | -0.02em   | 400    |
| `.type-h6`    | 20px  | 2.2vw  | 28px  | 1.4    | -0.02em   | 400    |
| `.type-p1`    | 20px  | 2vw    | 24px  | 1.4    | -0.01em   | 400    |
| `.type-p2`    | 18px  | 1.8vw  | 20px  | 1.45   | -0.01em   | 400    |
| `.type-p3`    | 16px  | 1.5vw  | 18px  | 1.5    | 0         | 400    |
| `.type-p4`    | 15px  | 1.3vw  | 16px  | 1.5    | 0         | 400    |
| `.type-p5`    | 13px  | 1.1vw  | 14px  | 1.6    | 0         | 400    |

### Utility / homepage type scale

| Class                  | Min   | Fluid  | Max   | Line   | Tracking  | Weight |
|------------------------|-------|--------|-------|--------|-----------|--------|
| `.type-display-hero`   | 96px  | 18vw   | 240px | 1.02   | -0.06em   | 300    |
| `.type-stat-number`    | 32px  | 3.8vw  | 48px  | 1.1    | -0.03em   | 400    |
| `.type-stat-plus`      | 22px  | 2.4vw  | 30px  | 1      | 0         | 400    |
| `.type-rail-label`     | 15px  | 1.35vw | 18px  | 1.1    | 0         | 400    |
| `.type-ui-lg`          | 16px  | 1.45vw | 20px  | 1.45   | 0         | 400    |
| `.type-ui-md`          | 15px  | 1.2vw  | 18px  | 1.4    | 0         | 400    |
| `.type-ui-sm`          | 14px  | 1vw    | 16px  | 1.3    | 0         | 400    |
| `.type-footer-brand`   | 22px  | 2.2vw  | 28px  | 1      | -0.03em   | 400    |

### Case study variant
`.type-h1-case-study` — same spec as `.type-h3` (32px → 4vw → 48px, line 1.2, tracking -0.02em, weight 400).

---

## Breakpoints

| Label | Prefix   | Min Width |
|-------|----------|-----------|
| Base  | (none)   | 0px       |
| SM    | `sm:`    | 640px     |
| MD    | `md:`    | 768px     |
| LG    | `lg:`    | 1024px    |
| XL    | `xl:`    | 1280px    |
| 2XL   | `2xl:`   | 1536px    |

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

**`.inline-text-cta`**
- Inline-flex with icon gap 6px
- Underline with 4px offset
- Hover: color → `--color-accent-hover`
- Typically paired with `type-p3` and a `<ArrowUpRight>` icon

### Icon button

**`.icon-circle-button`**
- 48×48px circle (`--radius-circle`)
- Background: `--color-ink`, icon: white
- Hover: background → `--color-accent`, `translateY(-1px)`

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
- Transitions are fast and subtle — 160ms ease across color and transform.
