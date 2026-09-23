# PDMA 2026 Developer Context

Generated exclusively from the typed PDMA validation configuration. Use `slide-index.json` for machine-readable detail.

| Slide | Component | Geometry | Targeted checks |
| --- | --- | --- | --- |
| slide-01 | src/app/pdma2026/components/slides/Slide01.tsx | pdmaGeometry.slide01 | npm run pdma:check -- --slide 01 · npm run pdma:qa -- --slide 01 |
| slide-02 | src/app/pdma2026/components/Slide02.tsx | pdmaGeometry.slide02 | npm run pdma:check -- --slide 02 · npm run pdma:qa -- --slide 02 |
| slide-03 | src/app/pdma2026/components/slides/Slide03.tsx | pdmaGeometry.slide03 | npm run pdma:check -- --slide 03 · npm run pdma:qa -- --slide 03 |
| slide-04 | src/app/pdma2026/components/slides/Slide04.tsx | pdmaGeometry.slide04 | npm run pdma:check -- --slide 04 · npm run pdma:qa -- --slide 04 |
| slide-05 | src/app/pdma2026/components/slides/Slide05.tsx | pdmaGeometry.slide05 | npm run pdma:check -- --slide 05 · npm run pdma:qa -- --slide 05 |
| slide-06 | src/app/pdma2026/components/CanonicalSlide06Exact.tsx | pdmaGeometry.slide06 | npm run pdma:check -- --slide 06 · npm run pdma:qa -- --slide 06 |
| slide-07 | src/app/pdma2026/components/slides/Slide07.tsx | pdmaGeometry.slide07 | npm run pdma:check -- --slide 07 · npm run pdma:qa -- --slide 07 |
| slide-08 | src/app/pdma2026/components/CanonicalSlide08.tsx | pdmaGeometry.slide08 | npm run pdma:check -- --slide 08 · npm run pdma:qa -- --slide 08 |
| slide-09 | src/app/pdma2026/components/slides/Slide09.tsx | pdmaGeometry.slide09 | npm run pdma:check -- --slide 09 · npm run pdma:qa -- --slide 09 |
| slide-10 | src/app/pdma2026/components/slides/Slide10.tsx | pdmaGeometry.slide10 | npm run pdma:check -- --slide 10 · npm run pdma:qa -- --slide 10 |
| slide-11 | src/app/pdma2026/components/slides/Slide11.tsx | pdmaGeometry.slide11 | npm run pdma:check -- --slide 11 · npm run pdma:qa -- --slide 11 |
| slide-12 | src/app/pdma2026/components/slides/Slide12.tsx | pdmaGeometry.slide12 | npm run pdma:check -- --slide 12 · npm run pdma:qa -- --slide 12 |
| slide-13 | src/app/pdma2026/components/slides/Slide13.tsx | pdmaGeometry.slide13 | npm run pdma:check -- --slide 13 · npm run pdma:qa -- --slide 13 |
| slide-14 | src/app/pdma2026/components/slides/Slide14.tsx | pdmaGeometry.slide14 | npm run pdma:check -- --slide 14 · npm run pdma:qa -- --slide 14 |
| slide-15 | src/app/pdma2026/components/slides/Slide15.tsx | pdmaGeometry.slide15 | npm run pdma:check -- --slide 15 · npm run pdma:qa -- --slide 15 |

Shared rendering contract: `PdmaSlideCanvas` → `PdmaSlideSurface` → `PdmaSlideBody` → typed geometry/primitives/animation.

Canonical configuration: `src/app/pdma2026/pdma.config.ts` and its typed validation declarations.
