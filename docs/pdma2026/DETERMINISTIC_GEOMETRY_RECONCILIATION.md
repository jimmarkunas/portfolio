# PDMA 2026 Deterministic Geometry Reconciliation

## Scope

Reconcile slide-body geometry for Slides 04–15 against the approved source
artifacts. Slides 01, 02, and 03 are immutable and must not be edited, rewired,
or included in the reconciliation change set.

This is a geometry-reconciliation task, not a visual redesign. Do not normalize
spacing by eye, reinterpret layouts with flex/grid, or change the presentation
shell.

## Immutable surfaces

The following are read-only for this pass:

- Slides 01–03, including their components, CSS, and assets
- title, subtitle, header, footer, navigation, progress rail, and controls
- shared title configuration
- `PdmaPresentationShell`, scaler, and shared presentation primitives
- deployment configuration and unrelated application code

The final diff must prove that only Slide 04–15 body files, their dedicated
assets, and temporary QA artifacts changed.

## Render contract

Every slide is rendered at exactly `1920×1080` for QA. The slide body is an
exact `1920×1080` coordinate plane that scales uniformly as one unit. Body
geometry must not use `vw`, `vh`, responsive reinterpretation, or layout rules
whose purpose is to approximate source coordinates.

Protected shell regions remain outside the body coordinate map and are masked
during comparison.

## Coordinate rule

Flatten source geometry before writing CSS or JSX positions:

```text
absolute x = sum(all ancestor x offsets) + element-local x
absolute y = sum(all ancestor y offsets) + element-local y
```

The same flattening applies to width, height, crop, and connector endpoints.
Never compensate for a common translation by adjusting children individually.
First test whether the body has a single `Δx/Δy`; correct that on the body
wrapper. Adjust individual elements only when measured diff data proves an
independent error.

## Per-slide reconciliation loop

For each slide from 04 through 15:

1. Extract source geometry from the approved PNG/RTF artifacts.
2. Flatten nested group offsets into absolute slide coordinates.
3. Capture the React slide at `1920×1080`.
4. Mask title, subtitle, header, footer, and controls in both images.
5. Generate a 50% overlay and a difference image.
6. Measure major-anchor displacement and identify the smallest demonstrated
   correction.
7. Apply the correction only to the slide body or proven independent element.
8. Rerender and repeat until position, size, crop, translation, spacing, and
   structural geometry are within approximately 1 px.
9. Mark the slide `PASS` only after its artifacts and measurements are saved.

Required QA artifacts:

```text
qa/pdma2026/slide-04-overlay.png
qa/pdma2026/slide-04-diff.png
...
qa/pdma2026/slide-15-overlay.png
qa/pdma2026/slide-15-diff.png
```

## Fail-closed gates

The pass fails if any of the following occurs:

- a file under Slides 01–03 changes;
- shell, title config, or scaler code changes;
- the render is not exactly `1920×1080`;
- a correction is justified only by visual preference rather than measured
  source-vs-DOM displacement;
- a shared primitive is changed to fix one slide;
- any slide from 04–15 lacks a saved overlay, diff, and PASS measurement;
- base64 or inline encoded production assets are introduced.

Pixel-identical raster output is not required because browser font
rasterization can differ from the source. Geometry and structural placement
are the acceptance criteria.

## Completion evidence

Do not report completion until Slides 04–15 individually pass, the immutable
file guard passes, typecheck passes, and the final diff is reviewed against the
scope above.
