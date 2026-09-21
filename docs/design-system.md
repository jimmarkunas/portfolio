# PBDS 2.0 — Jim Markunas Personal Brand Design System

A lightweight reference of the active tokens, typography, and core interface primitives in this repo. Canonical visual values are owned in Figma; this document mirrors the production implementation contract.

---

## Colors

### PBDS 2.0 core palette

| Role | Value | CSS Variable |
|------|-------|--------------|
| Brand / Ink | `#090909` | `var(--color-ink)` |
| Brand / Magenta | `#FF2FAE` | `var(--color-accent)` |
| Neutral / Charcoal | `#2E2E2E` | `var(--color-secondary-dark)` |
| Neutral / Mid | `#7A7A7A` | `var(--color-muted)` |
| Neutral / Line | `#E6E6E6` | `var(--color-border)` |
| Neutral / Canvas | `#F5F5F2` | `var(--color-canvas)` |
| Neutral / White | `#FFFFFF` | `var(--color-white)` |

`--color-soft-white` aliases `--color-white`, and `--color-accent-hover` aliases `--color-accent` for compatibility. They are not additional canonical colors.

### Approved foreground / background pairings

| Foreground | Background | Contrast | WCAG |
|------------|------------|----------|------|
| `#090909` | `#FFFFFF` | `19.91:1` | AAA |
| `#090909` | `#F5F5F2` | `18.23:1` | AAA |
| `#2E2E2E` | `#FFFFFF` | `13.58:1` | AAA |
| `#2E2E2E` | `#F5F5F2` | `12.43:1` | AAA |
| `#090909` | `#FF2FAE` | `5.95:1` | AA |
| `#FF2FAE` | `#090909` | `5.95:1` | AA |

**Recommended button pairing:** `#090909` text on `#FF2FAE` fill.

### Accessibility and usage rules

1. **Primary readable text:** use `#090909` or `#2E2E2E` for core body copy and important information.
2. **Magenta usage:** use `#FF2FAE` for the asterisk mark, accent, display type, highlights, and backgrounds. Do not use it as small normal text on light surfaces.
3. **Structural lines vs meaningful boundaries:** use `#E6E6E6` for passive decorative structure only; use `#7A7A7A` when a boundary must be perceptible.
4. **Muted-text caution:** `#7A7A7A` is not for critical small body copy. Contrast is `4.29:1` on white and `3.93:1` on canvas.
5. **Semantic colors:** success, warning, error, and info are not core brand colors. Add them only as a separate semantic namespace when a product/UI need requires them.

Design principle: neutral-first, with Magenta as the unmistakable signature chromatic signal. Typography and structure should carry hierarchy before additional color is introduced.

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
- Filled: `--color-accent` background, `--color-ink` text
- Border: 1px solid `--color-accent`
- Radius: `--radius-pill`
- Min height: 48px, padding: 0 20px
- Hover: preserve the same canonical color pairing; use non-geometric feedback such as outline, shadow, or opacity

**`.button-secondary`**
- Transparent background, `--color-ink` text
- Border: 1px solid `--color-ink`
- Radius: `--radius-pill`
- Min height: 48px, padding: 0 20px
- Hover/focus: use canonical Ink/Magenta without introducing a second accent color

**`.button-book-call`**
- Filled: `--color-accent` background, `--color-ink` text
- Border: 1px solid `--color-accent`
- Radius: `--radius-pill`
- Min height: 48px, padding: 0 20px
- Text/icon gap: 8px
- Font: 18px / 500, nowrap
- Used by the semantic `BookCallCta` wrapper and any visual-equivalent booking CTA

**`.button-book-call--brand`**
- Branded booking tone for dark backgrounds
- Use only approved Ink/Magenta foreground/background pairings
- Do not introduce a separate hover hue

**`.inline-text-cta`**
- Inline-flex with icon gap 6px
- Underline with 4px offset
- Because normal-size Magenta text on a light surface is not an approved AA pairing, keep readable link text Ink/Charcoal on light surfaces and use Magenta for focus/decoration only when contrast requirements remain satisfied
- Typically paired with `type-p3` and a `<ArrowUpRight>` icon

**`.text-link`**
- Inline hyperlink primitive for standard text links
- Color: inherit by default
- Focus-visible requires a non-color indicator such as underline/outline in addition to color
- Used by the shared `TextLink` React primitive

### Icon button

**`.icon-circle-button`**
- 48×48px circle (`--radius-circle`)
- Default dark treatment: background `--color-ink`, icon `--color-white`
- Branded alternate: background `--color-accent`, icon `--color-ink`

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
- Border: 1px solid `--color-border`
- Modifier `.tag-chip--dark`: filled `--color-ink`, white text

### Section intro pattern
```jsx
<div className="eyebrow-pill">
  <span className="eyebrow-pill__dot" />
  <span className="type-p5">Label</span>
</div>
<h2 className="type-h3 mt-6">Heading</h2>
<p className="type-p3 mt-4 text-[var(--color-muted)]">Support copy.</p>
```

---

## Design principles

- Typography leads — let scale and weight do the work before reaching for color or decoration.
- Surfaces stay quiet — `#F5F5F2` canvas, `#FFFFFF` elevated surfaces, and `#E6E6E6` passive lines form the light structural system.
- Magenta is the signature chromatic signal — use `#FF2FAE` for the asterisk, branded emphasis, display treatments, approved CTA fills, and deliberate highlights; never add a second decorative accent merely for variety.
- Readable text stays dark — core body copy uses `#090909` or `#2E2E2E`; `#7A7A7A` is support-only and must not carry critical small text.
- Borders have roles — `#E6E6E6` is passive/decorative; `#7A7A7A` is the available core neutral when a meaningful boundary must be perceptible.
- Semantic state colors, if required, belong to a separate namespace and are not PBDS brand colors.
- Transitions are fast and subtle - 160ms ease across color, background, border, outline, shadow, and opacity.
- Interactive state changes must not alter component geometry. Use color, background, border color, outline, shadow, or opacity for feedback. Translation, scaling, dimensional changes, and typography changes are prohibited unless explicitly documented as an intentional motion variant.
