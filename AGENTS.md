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

## Git Safety — MAIN ONLY
- Work only on `main`. Never create, switch to, commit on, or push a feature/backup/recovery branch.
- Never run `git switch -c`, `git checkout -b`, `git branch <name>`, `gh pr create`, or any equivalent branch-creation workflow.
- Never force-push or rewrite `main`.
- Restore points are annotated Git tags created automatically after every commit. Do not use backup branches.
- Never delete uncommitted changes. If the working tree is not clean, stop and report it.
- Before any destructive Git action, STOP. Destructive Git actions are not authorized for Codex in this repository.

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

### Icon and Glyph Rules

Before creating or drawing any new icon:

1. Search the shared custom icon components.
2. Search `public/tool-icons/`.
3. Search the installed `lucide-react` library.
4. Reuse an existing icon whenever it communicates the intended concept.
5. Do not recreate an existing icon as inline SVG.
6. Do not use a company or technology logo as a generic interface icon.
7. If no suitable icon exists, report the candidates reviewed before proposing a new one.

Icon selection priority:

1. Existing shared custom icon component
2. Existing generic SVG asset
3. Existing Lucide icon
4. New custom SVG only after explicit approval

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

## Next.js runtime isolation

Development uses `.next-dev`.
Production builds use `.next`.

Never change these directories back to one shared output directory.

Do not delete or edit application source when the homepage shell renders but animated content is missing.

Recovery procedure:

1. Stop the exact development-server PID.
2. Remove `.next-dev`.
3. Restart `npm run dev`.
4. Do not restore homepage or case-study source.

Build verification may run while development is active only because the output directories are now isolated.

Approved FOH responsive behavior is locked at tag:

foh-responsive-stasis-2026-07-18

Do not modify that behavior without explicit human approval.

## CI/CD ABSOLUTE LOCK — HUMAN-ONLY

**Mandatory first read before any Git, deployment, build-pipeline, or Hostinger work:** `docs/DEPLOYMENT_INCIDENT_2026-08-20.md`.

Codex and every other AI coding agent are permanently forbidden from modifying the production deployment architecture. This prohibition applies even if an AI believes a pipeline change would fix an incident.

AI agents MAY:
- edit normal application/content files requested by the user;
- run read-only Git/CI diagnostics;
- create normal commits on `main`;
- push `main`;
- read GitHub Actions logs.

AI agents MUST NEVER:
- edit, replace, delete, rename, regenerate, or bypass `.github/workflows/**`;
- edit `next.config.mjs`;
- edit `scripts/prepush.sh`, `scripts/check-deploy-workflow.sh`, `scripts/check-deploy-artifacts.mjs`, or `scripts/check-live-deployment.mjs`;
- change the deployment-related scripts in `package.json`;
- directly push to `hostinger-static`;
- use FTP, FTPS, SFTP, rsync, `lftp`, `mirror --delete`, or any direct file transport to Hostinger/public_html;
- change Hostinger Git repository, branch, install path, Auto Deployment, or deployment settings;
- delete or rewrite `public_html`;
- create or push new Git branches;
- force-push, reset, rebase, or rewrite `main`;
- use `--no-verify` to bypass Git hooks.

The production contract is fixed:

`main -> GitHub Actions -> static out/ -> hostinger-static -> human clicks Hostinger Deploy -> human clears cache`

If deployment fails, preserve this architecture and diagnose the failing layer. Do not "fix" deployment by redesigning the pipeline.
