# Output Mode — Framer Code Component

Generate one Framer Code Component in React 18 compatible TypeScript/TSX.

## Requirements

- Import `addPropertyControls` and `ControlType` from `framer` when controls are needed.
- Expose meaningful editable props.
- Use `defaultProps` or equivalent safe defaults.
- Add `@framerSupportedLayoutWidth` / `@framerSupportedLayoutHeight` annotations when sizing intent matters.
- Add intrinsic size annotations when a stable insertion size materially improves the canvas experience.
- Spread Framer-provided `style` onto the root element when compatible with the chosen sizing behavior.
- Prefer `ControlType.ComponentInstance` (or an array of it) for arbitrary nested Framer content slots.
- Keep semantic content separate from decorative assets.
- Do not embed base64.
- Do not create a new PBDS token system inside the component.
- Prefer project-supplied PBDS colors/styles/props; fallback values may use the reference values in `framer-manifest.json` only when unavoidable.
- No Code Overrides unless explicitly requested.
- Avoid measuring layout with observers unless required by behavior.
- Keep the component portable and editable on the Framer canvas.

## Required response after code

After the code block include:
- `PROPERTY CONTROLS`
- `SIZING`
- `PBDS COMPLIANCE`
- `KNOWN LIMITS`
