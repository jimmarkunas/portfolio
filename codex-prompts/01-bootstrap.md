# Codex bootstrap prompt

Read these files first:
- `CODEX-RULES.md`
- `src/content/design-system/design-system-spec.mdx`
- `src/content/design-system/component-inventory.mdx`
- `src/content/design-system/change-control.mdx`

Then do the following in order:
1. Audit the existing portfolio files and identify conflicts with this kit.
2. Replace old design tokens and component primitives with the new portfolio primitives.
3. Render `src/app/design-system/page.tsx` as the graphical system board.
4. Implement `src/app/case-study-template/page.tsx` from the approved primitives.
5. Keep all changes on one branch and summarize any repo-specific conflicts before merging.

Never skip the display page update when the design-system markup changes.
