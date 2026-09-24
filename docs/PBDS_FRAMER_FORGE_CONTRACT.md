# PBDS Framer Forge — Adapter Contract

**Status:** Approved design-stage adapter contract  
**Owner:** Jim Markunas  
**Effective:** 2026-09-24  
**PBDS authority:** `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md` + canonical JM Personal Brand Figma + Notion `PBDS Presentation Modality — Editorial Orb System`

## 1. Purpose

PBDS Framer Forge translates canonical PBDS patterns into deterministic generation context for Google AI Studio and Framer.

It is an **output adapter**, not a new design-system authority.

Required dependency direction:

```text
Figma visual truth
      ↓
PBDS foundations + patterns
      ↓
PBDS Framer Forge adapter
      ├─ Google AI Studio generation context
      ├─ Native Framer recipe output
      ├─ Framer Code Component output
      └─ /pbds Framer Skill
      ↓
Framer canvas / Framer Library
```

Framer projects and AI Studio workspaces consume PBDS. They may not redefine PBDS tokens, patterns, or visual authority.

## 2. Authority and anti-drift

When sources disagree:

1. Jim's explicit current instruction.
2. Canonical JM Personal Brand Figma for exact visual truth and reusable assets.
3. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md` for PBDS boundaries.
4. Notion `PBDS Presentation Modality — Editorial Orb System` for the durable visual grammar and concept method.
5. This adapter contract for AI Studio / Framer translation behavior.
6. Generated Framer/AI Studio output only as a consumer artifact.

The adapter may translate, parameterize, or expose PBDS. It may **not redesign** the Editorial Orb System or create a parallel token system.

## 3. Current canonical PBDS references

These values are references from the accepted PBDS architecture contract, not an independent token authority:

```text
brand.magenta = #FF2FAE
brand.ink = #090909
neutral.charcoal = #2E2E2E
neutral.mid = #7A7A7A
neutral.line = #E6E6E6
neutral.canvas = #F5F5F2
neutral.white = #FFFFFF
font.family = Inter
```

Once the canonical PBDS package/token export exists, the adapter must consume that source rather than maintaining a manually forked copy.

## 4. Visual grammar consumed by the adapter

Every generated PBDS element must preserve:

- one dominant visual move;
- massive negative space;
- large editorial hierarchy;
- white as the primary copy color and magenta used surgically;
- electric metallic-dot orbs / hemispheres as atmospheric recognition assets where the selected archetype calls for them;
- large visual objects confidently cropped at frame edges;
- native/editable semantic content;
- sparse conceptual connectors;
- minimal dark cards with restrained borders;
- no generic SaaS dashboard styling;
- no UI glow soup;
- no random galaxies, fantasy planets, or generic sci-fi wallpaper;
- no poster-board collage composition;
- no flattened UI/text inside decorative artwork.

Core concept rule:

> **Slide first. Template second.** Solve the real message/function before generalizing the composition.

## 5. Adapter output modes

### 5.1 Native Framer Recipe

Use for ordinary branded sections and elements that Framer can build natively.

A recipe must specify:

- selected PBDS archetype;
- semantic layer hierarchy;
- editable content slots;
- PBDS styles/components to reuse;
- layout mode and sizing intent;
- decorative asset slots and crop behavior;
- responsive behavior;
- prohibited deviations;
- validation checklist.

The recipe must prefer native Framer layers/components/styles over Code Components.

### 5.2 Framer Code Component

Use only when native Framer layers are insufficient: specialized interaction, animation, live tools, generated diagrams, or behavior-heavy visual elements.

Requirements:

- React 18 compatible;
- `addPropertyControls` and `ControlType` for meaningful editable props;
- sensible defaults;
- Framer layout annotations where sizing intent matters;
- component-instance controls for arbitrary nested Framer content when appropriate;
- no hard-coded page copy where a property control is appropriate;
- no base64 assets;
- decorative assets separated from semantic content;
- no independent PBDS token namespace.

Where appropriate, use Framer layout annotations such as:

```text
@framerSupportedLayoutWidth
@framerSupportedLayoutHeight
@framerIntrinsicWidth
@framerIntrinsicHeight
```

## 6. Seven approved Framer archetypes

### 01 — Editorial Hero

**Use when:** message and proof lead; decoration is secondary.  
**Composition:** giant editorial headline, short supporting copy, large negative space, one controlled visual field.  
**Native elements:** type, CTA, proof label, optional image/device/diagram slot.  
**Reject:** centered generic landing-page hero treatment.

### 02 — Orb Hero

**Use when:** one branded recognition object should dominate.  
**Composition:** message field + one aggressively cropped electric metallic-dot orb / hemisphere.  
**Variants:** `orb-right`, `orb-left`, `orb-horizon`.  
**Native elements:** all text and CTA.  
**Decorative asset:** orb only.

### 03 — Dual-Orb Composition

**Use when:** semantic content needs a framed center or visual tension between two sides.  
**Composition:** opposing edge-cropped orbs with a native semantic center.  
**Native center:** process, comparison, ownership model, app frame, or small diagram.  
**Reject:** treating orbs as functional nodes.

### 04 — Structured Content Cards

**Use when:** three to five structured ideas must be scanned quickly.  
**Composition:** sparse dark cards, thin borders, strong hierarchy, one emphasized state when warranted.  
**Reject:** generic SaaS dashboard grid.

### 05 — Flow / Process Rail

**Use when:** sequence, transformation, decision progression, or operating flow is the core message.  
**Composition:** native nodes + sparse connectors / rail; decoration remains atmospheric.  
**Reject:** technical spaghetti or over-labeled connector systems.

### 06 — Embedded App / Media Frame

**Use when:** a live app, media object, interactive demo, prototype, or rich content viewport is dominant.  
**Composition:** large contained native frame; atmosphere surrounds rather than competes.  
**Code-component rule:** arbitrary content should be accepted through a component slot when practical.

### 07 — CTA / Takeaway Band

**Use when:** a section needs forceful closure, transition, download action, or final takeaway.  
**Composition:** strong editorial statement, restrained supporting metadata, optional native CTA.  
**Reject:** generic marketing banner treatment.

## 7. Machine-readable adapter package

Target design-stage package:

```text
pbds/adapters/framer/
├── README.md
├── AI_STUDIO_START_HERE.md
├── PBDS_FRAMER_FORGE_CONTRACT.md
├── framer-manifest.json
├── archetypes/
│   ├── editorial-hero.json
│   ├── orb-hero.json
│   ├── dual-orb-composition.json
│   ├── structured-content-cards.json
│   ├── flow-process-rail.json
│   ├── embedded-app-media-frame.json
│   └── cta-takeaway-band.json
├── prompts/
│   ├── native-framer-recipe.md
│   └── framer-code-component.md
└── skills/
    └── pbds.md
```

This adapter package is not the future canonical PBDS production package. It consumes canonical PBDS foundations and patterns.

## 8. `framer-manifest.json` contract

The manifest must include:

- adapter version;
- PBDS authority references;
- design modality identifier;
- output modes;
- canonical palette references;
- typography reference;
- visual priorities;
- decorative families;
- anti-patterns;
- archetype registry;
- semantic-vs-decorative ownership rules;
- responsive principles;
- validation checklist.

Generated code or recipes read the manifest; they do not silently invent new PBDS rules.

## 9. `/pbds` Framer Skill contract

The Framer project skill must tell the Framer Agent to:

1. use the project's existing PBDS components, text styles, colors, spacing, and layouts;
2. identify the single dominant message before composing;
3. choose the closest approved PBDS archetype;
4. reuse existing components/styles before creating new ones;
5. keep semantic elements native and editable;
6. preserve large negative space and surgical magenta;
7. use one dominant visual move;
8. reject generic SaaS styling and random futuristic decoration;
9. stop before inventing a new visual modality when no approved archetype fits;
10. compare the result against the canonical PBDS references before claiming completion.

When installed in a real Framer project, update the Skill with actual `@pages`, `@components`, and `@styles` references from that project.

## 10. Google AI Studio bootstrap contract

`AI_STUDIO_START_HERE.md` must instruct the agent to read, in order:

1. `PBDS_FRAMER_FORGE_CONTRACT.md`;
2. `framer-manifest.json`;
3. the selected archetype JSON;
4. the matching output-mode prompt;
5. user content / functional requirements.

Then output only the requested mode:

- `Native Framer Recipe`, or
- `Framer Code Component`.

The generator must not reinterpret PBDS visual direction, create a new token system, or generate bespoke decoration when a canonical PBDS asset/pattern is available.

## 11. Sequencing

- **Now:** this adapter contract, machine-readable archetype definitions, AI Studio bootstrap, prompt contracts, and Framer Skill may exist because they do not migrate production or redefine PBDS visual truth.
- **PBDS-3:** Editorial Orb System recognition cues are canonized as signature-recognition primitives.
- **PBDS-4:** the seven archetypes are promoted into canonical Figma components/patterns and bound to the final token hierarchy.
- **PBDS-4 exit gate:** Framer Forge binds to the accepted PBDS package/token export strategy.
- **PBDS-5 / PBDS-6:** consuming surfaces may use the adapter without forking PBDS.

## 12. Acceptance

The adapter is accepted when:

- all seven archetypes are represented in machine-readable form;
- AI Studio can select an archetype from user intent without inventing a new modality;
- Native Framer Recipe output keeps semantic content editable;
- Code Component output is React 18 compatible and Framer-editable through Property Controls;
- `/pbds` Skill instructions are present and ready for real project `@` references;
- no second PBDS token authority is introduced;
- output remains recognizably within the Editorial Orb System without redesign.
