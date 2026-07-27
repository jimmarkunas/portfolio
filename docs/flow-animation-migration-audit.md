# Flow animation migration audit

Phase 1 preserves Canvas particle runtime for BI, Murad, SCJ, and NYL. Their coordinate order and styling are recorded here before migration.

| Diagram | Path ID | Current implementation | Coordinate/path order | Effective direction | Loop mode | Color | Count | Size behavior | Speed/duration | Special behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BI | `CC_SAP_PATH` | `ParticleCanvas` | `BI_DESKTOP_PARTICLE_PATHS[0]` order | supplied order | restart | `237,34,36` | 3 default | randomized 2.0–3.8px | randomized `0.001058–0.002645` | canvas trail |
| BI | `SAP_CC_PATH` | `ParticleCanvas` | explicit reverse path array | supplied order | restart | `34,34,34` | 3 default | randomized | randomized | direction must not be inferred from screen position |
| BI | remaining 11 paths | `ParticleCanvas` | each config path order | supplied order | restart | per-path config | 3 default | randomized | randomized | preserve each ordered path |
| Murad | `MURAD_PATHS` | `ParticleCanvas` | ordered point arrays | supplied order | restart | default blue | 3 default | randomized | `MURAD_PARTICLE_SPEED_MULTIPLIER` | canvas trail |
| Murad | `MURAD_RED_PATHS` | `ParticleCanvas` | ordered point arrays | includes upstream/reverse paths | restart | `203,68,68` | 3 default | randomized | speed multiplier | preserve red directionality |
| Murad mobile | `MURAD_MOBILE_PATHS` | `ParticleCanvas` | ordered mobile point arrays | supplied order | restart | default blue | 3 default | randomized | speed multiplier | scaled mobile canvas |
| Murad mobile | `MURAD_MOBILE_RED_PATHS` | `ParticleCanvas` | explicit upward path | supplied order | restart | `203,68,68` | 3 default | randomized | speed multiplier | intentional reverse/upstream path |
| SCJ | `particlePaths` | `ParticleCanvas` | source point-array order | supplied order | restart | default unless configured | 3 default | randomized | randomized | unchanged in Phase 1 |
| NYL | `particlePaths` | `ParticleCanvas` | source point-array order | supplied order | restart | per-instance config | configured | randomized | configured | unchanged in Phase 1 |

## Phase 1 SVG sources

- CPS currently uses local CSS connector dots and will use the shared SVG contract with `path-forward` and `restart`.
- ROI currently uses SVG `animateMotion`; path order is semantic direction and loop is indefinite restart.
- Headless Commerce currently uses SVG `animateMotion`; path order is semantic direction and loop is indefinite restart.

The shared SVG contract supports path reversal and ping-pong without changing these existing diagrams’ defaults. Canvas diagrams remain on `ParticleCanvas` until an edge-level migration map is approved.
