# PDMA 2026 Template System — Approved Visual References v1

**Status:** CANONICAL for the new `/pdma2026-templates` build  
**Approved:** 2026-09-23  
**Existing `/pdma2026` presentation:** MUST REMAIN UNTOUCHED

## Authority

For the new template deck, visual implementation must follow this file plus the approved reference images/assets listed below. Do not regenerate, reinterpret, substitute, or visually redesign an approved asset during implementation.

Source bytes are stored persistently in ChatGPT Library at:

`/LifeOS/PDMA 2026/Template Canon/v1/`

The bundled archive is:

`/LifeOS/PDMA 2026/Template Canon/v1/pdma2026-template-canon-v1.zip`

## 1. End Card template — APPROVED

**Reference image**  
`end-card/end-card-reference-v1.png`  
1672×941 RGB  
SHA-256: `2bbed561cc050fae11b033284982a1f4aaca1b2151b82eeea2920ceccab452cb`

**Decorative asset**  
`end-card/end-card-electric-orb-right-v1.png`  
1672×941 RGBA  
SHA-256: `b48416ac607b5e3b0682815db560ad380949cbaf94fb9befbdd454ea4b9c9761`

**Implementation intent**
- Reference image owns composition and visual relationships.
- Electric-orb asset is the approved decorative graphic.
- QR code is generated from the live download URL; do not flatten it into the reference image.
- Round CTA is native React/CSS and uses the same URL as the QR code.
- All copy is native React text.
- Shared PDMA header/footer/navigation/title behavior is reused exactly.

## 2. Flow / Scenario template — APPROVED

This template demonstrates the actual Slide 9 content pattern.

**Reference image**  
`flow-scenario/flow-scenario-reference-v1.png`  
1672×941 RGB  
SHA-256: `223ade4becd2dd2926899c2601e03ca5ef37e41467ab4b7cde7c16d72d4ed7ab`

**Left decorative orb**  
`flow-scenario/slide-09-left-orb-white-v1.png`  
1254×1254 RGBA  
SHA-256: `5c874a9eb47dc100ad1c3a6de660666450694a36d0bccc862df5f554f634b01f`

**Right decorative orb**  
`flow-scenario/slide-09-right-orb-magenta-v1.png`  
1254×1254 RGBA  
SHA-256: `217fd72f9157613ed40d39ddb1450c82c415583b890bd7fcba87b1207e9bb903`

**Implementation intent**
- Reference image owns composition and visual relationships.
- Outer electric metallic-dot orbs are the approved decorative assets.
- First column is an outlined synopsis/business-problem box.
- Enterprise signals are native React rows with glyphs inside circles.
- IDENTIFY and RECOMMEND use native circular glyph nodes, not additional planet assets.
- Product Question remains a contained horizontal module.
- Bottom production-readiness takeaway remains native React text.

## Shared template-system rules

- New route/component tree: `/pdma2026-templates`; old presentation untouched.
- Shared header/footer/navigation/title styling and behavior reused from current PDMA presentation.
- No copy may be removed, hidden, truncated, or replaced.
- Content layout uses normal CSS Grid/Flex document flow.
- No `pdmaGeometry.ts` dependency in the new template system.
- No absolute-positioned content. Absolute positioning is allowed only inside bounded decorative/connector layers.
- Decorative elements may overlap content only when readability remains intact.
- Connectors are SVGs owned by the component containing both endpoints.
- Fixed 16:9 composition; entire slide scales uniformly; no stacking; no scrolling.
- Decorative elements persist at every breakpoint.
- Asset slots use `object-fit: contain` unless the approved template explicitly defines a crop.
- Implementation is reference-driven: approved reference → React render → browser screenshot → visual diff → measured correction only.
