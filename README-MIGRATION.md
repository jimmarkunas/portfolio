# Portfolio -> Codex migration kit

This kit is meant to be dropped into your repo and used as the working source for Codex.

## Important limitation
I could not directly inspect your Box `/portfolio` folder from this chat session, so this kit is structured as a **drop-in replacement layer** rather than a line-by-line patch against your current repo.

## Recommended migration order
1. Create a feature branch: `feat/portfolio-design-system-and-case-studies`
2. Back up your current `/portfolio` implementation into `/archive/portfolio-pre-redesign/`
3. Copy the files in this kit into your repo.
4. Replace or merge in this order:
   - `src/lib/portfolio-design-tokens.ts`
   - `src/components/portfolio/*`
   - `src/content/design-system/*`
   - `src/content/case-studies/*`
   - `src/app/design-system/page.tsx`
   - `src/app/case-study-template/page.tsx`
5. Point Codex at `CODEX-RULES.md` first.
6. Tell Codex to implement the design system display page before touching homepage work.
7. Build the case study page template from the approved components.
8. Only then start homepage work.

## Replace strategy
Use this rule in Codex:
- If an older file conflicts with a file in this kit, the file in this kit wins unless the old file contains production-critical app wiring.
- Preserve repo-specific imports, routing wrappers, analytics, and CI config.
- Replace old portfolio UI primitives with the new ones instead of layering duplicates.

## What this kit includes
- Codex rules
- design system markdown source files
- change-control rule linking markdown -> display page
- component starter files
- display page starter
- case study page template starter
- markdown/MDX case study files
- placeholders for unknown case study titles so you can complete the full 14-study set
