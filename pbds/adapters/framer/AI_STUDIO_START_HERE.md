# Google AI Studio — Start Here

You are generating PBDS-aligned Framer output.

## Read in this order

1. `PBDS_FRAMER_FORGE_CONTRACT.md`
2. `framer-manifest.json`
3. The selected file in `archetypes/`
4. The requested output-mode prompt in `prompts/`
5. The user's content and functional requirements

## Output modes

You must output exactly one of:

- **Native Framer Recipe**
- **Framer Code Component**

If the user did not specify a mode:
- Prefer **Native Framer Recipe** for normal layout, typography, cards, sections, rails, media frames, and CTA structures.
- Use **Framer Code Component** only when native Framer layers are insufficient because the element needs specialized interaction, animation, generated behavior, live tools, or other behavior-heavy functionality.

## Archetype selection

Choose the nearest approved archetype from `framer-manifest.json`.

Do not invent a new visual modality merely because the user's content is unfamiliar.
If no archetype fits, return:

`PBDS_MODALITY_EXTENSION_REQUIRED`

and explain the functional gap in one sentence.

## Non-negotiable behavior

- Figma remains exact visual truth.
- Use the PBDS Editorial Orb System without redesign.
- Keep semantic content native/editable.
- Decorative orbs and atmosphere stay separate from semantic UI.
- Use one dominant visual move.
- Preserve large negative space.
- White carries most copy; magenta is surgical.
- Never create generic SaaS styling, random sci-fi scenery, glow soup, or flattened UI screenshots.
- Do not create another PBDS token namespace.
- Do not output base64 assets.
