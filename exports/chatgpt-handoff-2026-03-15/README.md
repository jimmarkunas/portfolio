This folder is a ChatGPT handoff bundle for the current portfolio system.

Included files:

- `design-system/index.html`
  - prerendered HTML snapshot of the live visual design-system page
- `design-system/_next/static/`
  - built CSS and JS assets referenced by the HTML snapshot
- `design-system/brand/`, `design-system/company-logos/`, `design-system/country-flags/`, `design-system/design-system/`, `design-system/fonts/`, `design-system/trust/`
  - public assets needed by the design-system snapshot
- `design-system/page.tsx`
  - source file for the visual design-system page
- `design-system/design-system-spec.mdx`
  - written design-system spec
- `design-system/component-inventory.mdx`
  - written component inventory
- `case-study/cps-energy-smart-streetlights.mdx`
  - current source-of-truth markdown draft for the CPS Energy case study

Best files to upload to ChatGPT:

- `design-system/index.html`
- `design-system/page.tsx`
- `design-system/design-system-spec.mdx`
- `design-system/component-inventory.mdx`
- `case-study/cps-energy-smart-streetlights.mdx`

Notes:

- `design-system/index.html` is a static snapshot from the latest production build.
- If you want to preview the snapshot locally with assets, open the `design-system` folder from a static file viewer or a simple local server.
- The CPS file is intentionally the markdown draft, since that is the current approved narrative source-of-truth.
