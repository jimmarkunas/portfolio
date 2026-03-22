# Portfolio Agent Rules (Lean)

## Scope
- Personal portfolio site built with Next.js 14 + React 18 + TypeScript + Tailwind + Framer Motion.
- Prefer the smallest safe change that solves the request.

## Non-Negotiables
- Use the user's screenshot/wireframe as source of truth for visual alignment.
- For layout tweaks, adjust one variable at a time.
- If the user asks for a single nudge, change only that one value.
- Do not turn a visual tweak into a refactor unless explicitly asked.
- Do not introduce scrollbars or scroll-based UI unless explicitly asked.
- When touching shared components/design-system code, preserve mobile/tablet/desktop behavior.
- If 2 attempts on the same issue fail, stop and present a short plan before another edit.

## Case Study Content Rules
- Source briefs: `docs/case-studies/` (content truth).
- Runtime files: `src/content/case-studies/` (schema truth).
- Preserve metrics exactly.
- Preserve first-person ownership where present.
- Avoid resume-style phrasing.

## Project Conventions
- Use design tokens and existing system styles before ad-hoc values.
- Keep content in `src/content/`, not inside components.
- Path alias: `@/*` -> `./src/*`.
- Mobile-first breakpoints: `md`, `lg`, `xl`.
- Primary CTA copy remains: `Book a Call`.

## Default Working Style
- Be deterministic over clever for layout work.
- If an assumption is wrong, correct course immediately instead of layering fixes.
- Prefer scoped, reversible edits over broad changes.
