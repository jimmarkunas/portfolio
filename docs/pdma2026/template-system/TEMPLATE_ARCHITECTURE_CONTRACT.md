# PDMA 2026 Template System — Architecture Contract

**Status:** ACCEPTED — PRODUCTION CUTOVER COMPLETE (§16)  
**Date:** 2026-09-24  
**Target route:** `/pdma2026-templates`  
**Existing `/pdma2026`:** production consumer of this architecture since cutover (§16)

## 1. Goal

Build one clean 10-slide template presentation from reusable, editable React components. The system must behave like normal front-end layout: Grid/Flex content flow, contained semantic components, no floating content geometry, and one fixed 16:9 logical canvas that scales uniformly from desktop down to portrait tablet with no stacking and no scrolling.

## 2. Template set

1. Title — mapped from live Slide 1
2. End Card — mapped from live Slide 15 + approved download module
3. Exercise / Worksheet — mapped from live Slide 14
4. Embedded Interactive App — live-app container template
5. Compare / Contrast — mapped from live Slide 3
6. Flow / Scenario — mapped from live Slide 9
7. Decision / Spectrum — mapped from live Slide 8
8. Hub / Ecosystem — mapped from live Slide 6
9. Scorecard / Evaluation — mapped from live Slide 7
10. Structured Content / Action — mapped from live Slide 10

## 3. Authority split

### Copy authority

The mapped live PDMA slide/config is the copy authority. **No approved concept image may delete, replace, paraphrase, or silently rewrite mapped PDMA copy.** Concept-image wording that differs from live copy is visual placeholder text only.

### Visual authority

- Existing approved live exemplars: Slides 1, 3, 7, 8, 14.
- New approved references/assets: `docs/pdma2026/template-system/APPROVED_TEMPLATE_REFERENCES.md` and `approved-template-references.json`.
- Approved references own composition and visual relationships.
- Approved assets must not be regenerated or reinterpreted during implementation.

## 4. Shared presentation ownership

Reusable presentation templates, their registry, serializable schema, shared runtime mechanics, PBDS chrome, and decoration renderer are shared infrastructure under `src/components/presentation/`. PDMA 2026 is the first consumer of that infrastructure. Shared presentation code must never import from `src/app/pdma2026/**` or `src/content/pdma2026/**`.

PDMA may retain its six deck-local bespoke compositions, artwork recipes, navigation copy, and interactive slot implementations under its app-owned registry. The gallery owns immutable declarative fixtures copied from the accepted examples; it does not import production PDMA slide content or the live PDMA exercise. The lab remains an experimental consumer and is not an authority for production templates.

The shared runtime and chrome preserve the accepted DOM, classes, controls, title rendering, transitions, 1920×1080 contain behavior, and decorative overflow geometry. Deck metadata supplies the event/brand label and deck identity. The canvas scale, centering, and top-bias equation remain unchanged. The existing nested-canvas behavior is intentionally retained during this ownership extraction.

## 5. Required source tree

```text
src/app/pdma2026-templates/
  page.tsx
  TemplatePresentation.tsx
  templateGalleryFixtures.ts
  galleryDecorationRecipes.ts

src/components/presentation/
  presentationTypes.ts
  presentationSpec.ts
  presentationTemplateRegistry.tsx
  PresentationRuntime.tsx
  PresentationChrome.tsx
  presentationIcons.tsx
  templates/
    TemplateSlide.tsx
    DecorativeLayer.tsx
    templateDecorationRecipes.ts
    templates.css
    [the ten shared template renderers]
  TemplatePrimitives.tsx

src/app/pdma2026/presentation/
  pdma2026Content.ts             # serializable PDMA spec and payload data
  pdma2026Registry.tsx           # six deck-local composition renderers
  pdma2026Slots.tsx              # registered PDMA interactive slots
  pdmaDecorativeRecipes.ts       # PDMA-only artwork recipes

public/pdma2026-templates/assets/
  end-card/
  flow-scenario/
  hub-ecosystem/
  structured-content-action/
  embedded-app/
```

No second geometry file. No per-slide coordinate registry. No alternate shell.

## 6. Machine-write content model

`PresentationSpec` and `PresentationSlideSpec` are JSON-compatible data. Specs contain IDs, content, chrome semantics, recipe IDs, asset IDs, route links, and slot IDs. They contain no JSX, React nodes, component constructors, functions, or Lucide component values. Runtime validation reports deck/slide context for invalid or unknown references.

The shared executable template registry maps the ten stable template IDs to their renderers. Each consuming deck owns its optional custom composition registry and interactive slot registry. A new deck ordinarily adds only a declarative spec, content, registered assets, and optional deck-local renderers/slots; it does not modify shared runtime, chrome, canvas, shared renderers, or the shared template registry.

The gallery fixtures are intentionally immutable examples copied from accepted PDMA exemplars. They are not a second production copy authority. The embedded gallery example is a gallery-owned, harmless interactive slot fixture; it does not import production PDMA slide content or the live PDMA exercise.

Every template component receives content through props. Template components must not hard-code presentation copy except structural labels that are part of the component itself. The End Card download module owns one URL value; QR and round CTA both consume that same value.

## 7. Layout rules

All content uses normal document layout:

- CSS Grid for primary regions/columns/rows.
- Flexbox for internal card/rail alignment.
- Contained semantic elements: parent container owns its children.
- Changing a card's content/height must move surrounding content naturally.
- No absolute `left/top/x/y` positioning for titles, cards, text, app containers, rails, or primary content.
- No CSS transforms used as layout corrections.
- No `pdmaGeometry` values copied into CSS.

### Allowed absolute positioning

Only inside a bounded decorative layer or connector layer owned by the parent component:

- electric-orb edge crops
- particles/glows
- non-content visual overlays
- connector graphics when CSS-flow connectors cannot express the relationship

Decorative layers never define content dimensions or spacing.

## 8. Connector rules

Prefer flow-native connectors:

1. CSS line/arrow inside a dedicated connector grid/flex cell.
2. SVG only when one relationship requires convergence/fan-out or a nontrivial path.

A connector must be owned by the component containing both endpoints. No slide-global connector map. No detached coordinate table.

Hub / Ecosystem specifically uses straight connectors around a native HTML/CSS AI/Automation box.

## 9. Responsive contract

The presentation remains a single 16:9 composition at every supported breakpoint.

- Logical composition: 1920×1080.
- Entire canvas scales uniformly using the existing PDMA shell behavior.
- No responsive stacking.
- No slide scrolling.
- No element may disappear at a breakpoint.
- Decorative elements persist at every breakpoint.
- Relative relationships remain unchanged because the logical canvas scales as one unit.
- Support desktop through portrait tablet.

Do not create separate mobile/tablet compositions.

## 10. Decorative system

Electric metallic-dot orbs are the primary decorative language.

Approved use patterns:

- left edge crop
- right edge crop
- dual edge framing
- horizon/crescent crop where the approved reference calls for it

Decoration is selected by a registered `recipeId` in the consuming deck's spec. The shared `DecorativeLayer` owns how items render; shared template, PDMA, gallery, and lab recipe owners decide which artwork and placement to supply. The template body structure does not change when the recipe changes.

Initial implementation uses only canonized approved variants/assets. Additional variants may be added later without changing template component structure.

## 11. Template-specific structural contracts

### End Card
Message region + download module + decorative orb. QR and round CTA are native/live.

### Flow / Scenario
Outlined synopsis region → signal rows → native glyph stages → product question/takeaway. Outer orbs decorative only.

### Hub / Ecosystem
Inventory bank → native AI/Automation box → owner bank. Straight connectors. Outer orbs decorative only.

### Structured Content / Action
Three requirement cards → four-step operationalization rail → takeaway. Human Intervention is emphasized. Orbs decorative only.

### Embedded App
Title/subtitle + dominant contained `EmbeddedAppFrame`. The frame hosts the real interactive app as a child component. Decorative orbs sit behind/around the app frame and never become part of the app UI.

## 12. Styling rules

- Reuse PBDS tokens: magenta `#FF2FAE`, ink/black, approved neutrals, Inter typography.
- Exact title/subtitle styling comes from the shared title renderer and compatibility fields in `PresentationTitleConfig`.
- New template CSS is namespaced under `pdmat-*` classes.
- Every editable region has a semantic parent class and contained child classes.
- Avoid inline layout styles except data-driven CSS custom properties where truly necessary.
- No base64 assets.

## 13. Visual QA

Implementation is not complete from code checks alone.

For each approved exemplar:

1. render at 1920×1080 logical size;
2. capture browser screenshot;
3. compare against approved reference;
4. correct only measured visual differences;
5. verify desktop and portrait-tablet viewport scaling;
6. verify zero scrolling and zero stacking;
7. verify mapped copy is complete.

A browser-access failure is `VISUAL_QA: REQUIRES_EXTERNAL_REVIEW`, never PASS.

## 14. Mutation boundary

Allowed implementation scope is the new `/pdma2026-templates` route/tree, its new public asset root, and template-system documentation/tests.

Existing `/pdma2026` slide components, geometry, shell, header/footer/navigation/title code, assets, and styles were read-only for this build. (Build phase only — superseded by §16.)

## 15. Definition of done

Architecture is satisfied only when:

- all 10 templates render through shared components;
- all mapped PDMA copy is preserved;
- header/footer/navigation/title behavior matches current PDMA;
- no new template imports `pdmaGeometry`;
- content uses Grid/Flex flow;
- all 10 slides fit one viewport with no scrolling;
- the canvas scales uniformly through portrait tablet;
- approved references/assets are used exactly;
- visual QA is complete or explicitly marked external-review-required.

## 16. Production cutover (2026-09-24)

- Template baseline `c350ce713d2414296a5018674b9408f8a6f7931b` accepted.
- `/pdma2026` is now the production consumer of this architecture: 16 slides; 10 use the approved templates (Slide 15 is the Embedded App template running the PDMA scenario exercise), 6 keep their approved production composition rebuilt on the same primitives (`src/app/pdma2026/presentation/`).
- `/pdma2026-templates` remains the template gallery.
- Pre-cutover rollback checkpoint: `3e343570ab1957513fdf8883e2efcdaa56226a5d`. The cutover commit is recorded in git history; roll back with `git revert`.
- The build-phase restrictions in the header, §4 and §14 (legacy `/pdma2026` read-only) applied to template construction only and are superseded.

## 17. Presentation machine-contract extraction (2026-10-02)

- The ten reusable template implementations and their CSS are owned by `src/components/presentation/templates/`. There is one implementation and one shared executable template registry.
- Shared schema/runtime/chrome/template code has no dependency on PDMA app or content files. `PresentationDeck` and its existing USAII, LLM Day, DSH Hacks, and Secure Carolinas consumers remain outside this runtime migration.
- `pdma2026Content.ts` exports the serializable 16-slide PDMA spec. Six bespoke renderers, PDMA-only recipes, and the `pdma-scenario-exercise` slot remain in PDMA-owned registries.
- `/pdma2026-templates` renders ten frozen fixture slides from gallery-owned data and recipes. `/pdma2026-templates-lab` remains experimental and non-authoritative.
- New presentations must use declarative specs with stable template/composition/decoration/asset/slot IDs. Executable render selection belongs to registries. Interactive components are referenced only through slot IDs.
- Public asset paths, accepted visuals, CSS class names, runtime behavior, canvas equations, and the existing nested-canvas behavior remain locked during extraction.
