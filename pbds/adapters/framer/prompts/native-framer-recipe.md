# Output Mode — Native Framer Recipe

Create a Framer-native build recipe. Do not output React code.

## Required output

Return Markdown with exactly these sections:

1. `ARCHETYPE`
2. `INTENT`
3. `LAYER TREE`
4. `STYLE REFERENCES`
5. `LAYOUT + SIZING`
6. `DECORATION`
7. `RESPONSIVE BEHAVIOR`
8. `FRAMER AGENT BUILD INSTRUCTIONS`
9. `VALIDATION`
10. `DO NOT`

## Rules

- Reuse PBDS project styles/components before creating new ones.
- Keep copy, controls, cards, rails, app frames, labels, buttons, and diagrams native/editable.
- Use Framer Stack/Grid/relative sizing where appropriate.
- Decorative orbs/atmosphere are separate assets/layers.
- Preserve one dominant visual move and large negative space.
- Do not invent values when the target Framer project already has a PBDS style.
- If the project lacks a required PBDS style, flag it as `MISSING_PBDS_STYLE` rather than silently forking the system.
- Never output a flattened screenshot as implementation.
