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

## Git Safety (Hard Rule)
- Never delete uncommitted changes.
- Before any destructive git/worktree action, create 3 recovery layers in order:
  1) `git stash push -u -m "pre-destructive-step-1"`
  2) `git diff > /tmp/pre-destructive-step-2.patch`
  3) `git branch backup/pre-destructive-step-3-<timestamp>`
- If these 3 recovery layers are not created and verified, do not run the destructive action.

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

## Token + Coding Efficiency (Hard Rules)
- Fix one root cause at a time. Do not stack speculative fixes.
- For a single-bug request, touch at most 3 files per attempt unless explicitly approved.
- Validate with the smallest check first (target route/component), then run full build only once after the fix is stable.
- If a change makes behavior worse, revert that specific change before trying another approach.
- Do not repeat the same command unless something material changed (code, cache, process state).
- Do not reread unchanged files unless needed for line-accurate patching.
- Keep status updates short: what changed, what is being checked, and result.
- After 2 failed attempts on the same issue, stop edits and present a 3-step plan before continuing.
