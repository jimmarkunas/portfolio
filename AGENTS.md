# Portfolio Agent Rules (Compact)

## Scope
- Next.js 14 + React 18 + TypeScript + Tailwind + Framer Motion personal portfolio.
- Prefer the smallest safe change that solves the request.

## Visual + UX Non-Negotiables
- Treat user screenshot/wireframe as the visual source of truth.
- For layout nudges, change one variable at a time.
- If user asks for one nudge, change only that value.
- If the user asks to adjust one visible element, do not change shared primitives, tokens, or other instances unless explicitly requested.
- Do not add scrollbars/scroll-based UI unless explicitly requested.
- Preserve mobile/tablet/desktop behavior when touching shared UI.
- After 2 failed attempts on the same issue, stop and present a 3-step plan.

## Content Rules
- Runtime truth: `src/content/case-studies/`.
- Brief/source truth: `docs/case-studies/`.
- Preserve metrics and first-person ownership language.
- Avoid resume-style rewrites.

## Git Safety
- Never delete uncommitted changes.
- Before destructive git/worktree actions, create all 3 recovery layers:
  1) `git stash push -u -m "pre-destructive-step-1"`
  2) `git diff > /tmp/pre-destructive-step-2.patch`
  3) `git branch backup/pre-destructive-step-3-<timestamp>`

## Efficiency Guardrails
- Fix one root cause at a time; avoid speculative stacked changes.
- For single-bug fixes, touch at most 3 files per attempt unless approved.
- Default local verification: `npm run verify:route -- /work/<slug>`.
- Full build is pre-deploy only: `npm run verify:predeploy`.
- Don’t repeat commands unless code/process state materially changed.
- Respect `.aiignore` by default; use short log reads (`tail -n 40`).

## Conventions
- Prefer design tokens/system styles before ad-hoc values.
- Keep content in `src/content/`, not inside components.
- Read `src/content/case-studies/case-study-map.ts` first for slug/file/diagram lookup.
- Path alias: `@/*` -> `./src/*`; breakpoints: `md`, `lg`, `xl`.
- Primary CTA copy remains `Book a Call`.
- DO NOT BE A FUCKING RETARDED MORON.

## Case Study Refactor Guardrails

- The existing site design system is the source of truth.
- Reuse existing tokens, typography, spacing, containers, buttons, cards, links, header, footer, and interaction primitives.
- Do not introduce one-off styling when an existing design-system primitive can be reused or extended.
- Do not create a separate visual language for case studies.
- Do not add new production dependencies without explicit approval.
- Do not modify global header, footer, navigation, typography, or site-wide behavior unless the task explicitly requires it.
- Do not migrate or modify live case-study pages until the placeholder template has been reviewed and approved.
- Do not invent project facts, metrics, testimonials, dates, technologies, budgets, employers, clients, or attribution.
- Preserve existing case-study URLs, metadata, assets, and external links during migration.
- CWG and ZEVO are founder case studies and are explicitly excluded from the standard case-study template migration.
- Maintain responsive behavior, semantic HTML, keyboard accessibility, and existing performance standards.
- Check git status before modifying files and do not overwrite unrelated uncommitted work.
- Run the repository’s existing lint, typecheck, test, and build commands after implementation.
