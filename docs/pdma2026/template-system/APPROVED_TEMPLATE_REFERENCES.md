# PDMA 2026 Template System — Approved Visual References v4

**Status:** CANONICAL for the new `/pdma2026-templates` build  
**Approved:** 2026-09-24  
**Existing `/pdma2026` presentation:** production consumer of these templates since cutover (rollback checkpoint `3e343570`)

## Authority

For the new template deck, visual implementation must follow this file plus the approved reference images/assets listed below. Do not regenerate, reinterpret, substitute, or visually redesign an approved asset during implementation.

Persistent source bytes:

`/LifeOS/PDMA 2026/Template Canon/v4/`

Bundled archive:

`/LifeOS/PDMA 2026/Template Canon/v4/pdma2026-template-canon-v4.zip`

## 1. End Card — APPROVED

**Reference**  
`end-card/end-card-reference-v1.png`  
SHA-256: `2bbed561cc050fae11b033284982a1f4aaca1b2151b82eeea2920ceccab452cb`

**Asset**  
`end-card/end-card-electric-orb-right-v1.png`  
SHA-256: `b48416ac607b5e3b0682815db560ad380949cbaf94fb9befbdd454ea4b9c9761`

**Implementation intent**
- Reference owns composition and visual relationships.
- QR code and round CTA are native React and share one URL.
- All copy is native React text.

## 2. Flow / Scenario — APPROVED

Representative content: Slide 9.

**Reference**  
`flow-scenario/flow-scenario-reference-v1.png`  
SHA-256: `223ade4becd2dd2926899c2601e03ca5ef37e41467ab4b7cde7c16d72d4ed7ab`

**Assets**
- `flow-scenario/slide-09-left-orb-white-v1.png` — SHA-256 `5c874a9eb47dc100ad1c3a6de660666450694a36d0bccc862df5f554f634b01f`
- `flow-scenario/slide-09-right-orb-magenta-v1.png` — SHA-256 `217fd72f9157613ed40d39ddb1450c82c415583b890bd7fcba87b1207e9bb903`

**Implementation intent**
- First column is an outlined synopsis/business-problem box.
- Enterprise signals are native React rows with glyphs inside circles.
- IDENTIFY and RECOMMEND are native circular glyph nodes.
- Outer electric-dot orbs are decorative only.

## 3. Hub / Ecosystem — APPROVED

Representative content: Slide 6.

**Reference**  
`hub-ecosystem/hub-ecosystem-reference-v1.png`  
SHA-256: `b787e4bb4b452b6a65751365d35bdcd94cd1d606f60f68fac458290158526f2a`

**Assets**
- `hub-ecosystem/slide-06-left-orb-white-v1.png` — SHA-256 `a0dff3586680a3ce2989835ce4ace4722adf560bc4fa7e1e184c49d916733a08`
- `hub-ecosystem/slide-06-right-orb-magenta-v1.png` — SHA-256 `d256d9c1bd7dc7665ff219c369fe6e067c48d0ef94ae40068ca94ed84bd81408`

**Implementation intent**
- Functional structure: Inventory the Environment → AI / Automation Layer → Name Human Owners.
- Center AI / Automation layer is a native HTML/CSS rounded box, not an image.
- Connectors are straight and owned by the component.
- Outer orbs are decorative edge crops only.

## 4. Structured Content / Action — APPROVED

Representative content: Slide 10.

**Reference**  
`structured-content-action/structured-content-action-reference-v1.png`  
SHA-256: `e03b137756f9ace8518283224084ca6e5e2cc30f408084583e2adc28a7749af0`

**Assets**
- `structured-content-action/slide-10-left-orb-magenta-v1.png` — SHA-256 `e1057439a2ff5396b4988179fbdb09bda447ae3518c932b506538bfe1b7b02f9`
- `structured-content-action/slide-10-right-orb-magenta-orbit-v1.png` — SHA-256 `dbbe5407562e207f550c3c268a109df8ef03a3d115bca73053dbdf090394d1ea`

**Implementation intent**
- Functional structure: three product-definition requirements → four-step operationalization rail → takeaway.
- Requirement cards: Guardrails, Human Intervention, Success Measures.
- Human Intervention is the emphasized magenta card.
- Action rail: Backlog → PRD → Acceptance Criteria → Production.
- Cards, rail, icons, and text are native React/CSS; orb assets are decorative edge crops only.

## 5. Embedded Interactive App — APPROVED

**Reference**  
`embedded-app/embedded-app-reference-v1.png`  
SHA-256: `de3c6f5b8dffcbe5f6635fa57b92a96cc1ce9b074724380a88eab381900baff9`

**Assets**
- `embedded-app/embedded-app-left-orb-magenta-v1.png` — SHA-256 `adf511d9a911a20d6ad1bd341ab9c67f731d75b6e7b3b237efad4751d8f00ba1`
- `embedded-app/embedded-app-right-orb-white-v1.png` — SHA-256 `58ccbec91e6986e42f08add2feacb2ddd458b8c0f0bddf93765aa8d0eff31725`

**Implementation intent**
- Reference owns composition and visual relationships.
- The app itself is a live native React/HTML container, never a flattened screenshot.
- The app viewport is the dominant content region.
- The app shell must accept arbitrary embedded interactive content without changing slide architecture.
- Orb assets are decorative edge crops only.
- Shared PDMA title/subtitle/header/footer/navigation behavior remains unchanged.

## Shared template-system rules

- New route/component tree: `/pdma2026-templates` (gallery); `/pdma2026` consumes the same templates in production.
- Shared header/footer/navigation/title styling and behavior reused from current PDMA presentation.
- No copy may be removed, hidden, truncated, or replaced.
- Content layout uses normal CSS Grid/Flex document flow.
- No `pdmaGeometry.ts` dependency in the new template system.
- No absolute-positioned content. Absolute positioning is allowed only inside bounded decorative/connector layers.
- Decorative elements may overlap content only when readability remains intact.
- Connectors are owned by the component containing both endpoints.
- Fixed 16:9 composition; entire slide scales uniformly; no stacking; no scrolling.
- Decorative elements persist at every breakpoint.
- Implementation is reference-driven: approved reference → React render → browser screenshot → visual diff → measured correction only.
