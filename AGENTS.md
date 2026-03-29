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


## vexp <!-- vexp v1.2.30 -->

**MANDATORY: use `run_pipeline` — do NOT grep or glob the codebase.**
vexp returns pre-indexed, graph-ranked context in a single call.

### Workflow
1. `run_pipeline` with your task description — ALWAYS FIRST (replaces all other tools)
2. Make targeted changes based on the context returned
3. `run_pipeline` again only if you need more context

### Available MCP tools
- `run_pipeline` — **PRIMARY TOOL**. Runs capsule + impact + memory in 1 call.
  Auto-detects intent. Includes file content. Example: `run_pipeline({ "task": "fix auth bug" })`
- `get_context_capsule` — lightweight, for simple questions only
- `get_impact_graph` — impact analysis of a specific symbol
- `search_logic_flow` — execution paths between functions
- `get_skeleton` — compact file structure
- `index_status` — indexing status
- `get_session_context` — recall observations from sessions
- `search_memory` — cross-session search
- `save_observation` — persist insights (prefer run_pipeline's observation param)

### Agentic search
- Do NOT use built-in file search, grep, or codebase indexing — always call `run_pipeline` first
- If you spawn sub-agents or background tasks, pass them the context from `run_pipeline`
  rather than letting them search the codebase independently

### Smart Features
Intent auto-detection, hybrid ranking, session memory, auto-expanding budget.

### Multi-Repo
`run_pipeline` auto-queries all indexed repos. Use `repos: ["alias"]` to scope. Run `index_status` to see aliases.
<!-- /vexp -->
