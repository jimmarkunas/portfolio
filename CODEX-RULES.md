# Codex rules for this portfolio

## Non-negotiable rules
1. The design system in `src/content/design-system/` is the visual source of truth.
2. The rendered showcase in `src/app/design-system/page.tsx` is the graphical source of truth.
3. **Whenever any design system markup file changes, the display page must be updated in the same change set.**
4. Do not invent new colors, radii, spacing values, or typography classes outside the approved system.
5. Do not create one-off component variants unless explicitly requested.
6. Do not overwrite case study content files with generic SaaS filler copy.
7. Do not start homepage work before the case study template is stable.
8. Keep corners tight. Avoid over-rounded UI.

## Required workflow
1. Read `src/content/design-system/design-system-spec.mdx`
2. Read `src/content/design-system/component-inventory.mdx`
3. Read `src/content/design-system/change-control.mdx`
4. Implement or update components in `src/components/portfolio/`
5. Update `src/app/design-system/page.tsx`
6. Only then implement `src/app/case-study-template/page.tsx`
7. Bind case study content from `src/content/case-studies/`

## Definition of done for any design-system change
A change is not done until:
- the markdown source is updated
- the display page is updated
- hover states still exist where required
- desktop / tablet / mobile behavior is still visible
- the case study template still renders cleanly
