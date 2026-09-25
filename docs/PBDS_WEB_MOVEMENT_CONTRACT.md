# PBDS Web Movement Contract

**Status:** Canonical / approved  
**Owner:** Jim Markunas  
**Effective:** 2026-09-25  
**Scope:** Portfolio / Web motion, interactive diagrams, and downstream PBDS web consumers  
**Production gate:** Implementation begins only through the PBDS-5 Portfolio V2 pilot. Portfolio V1 remains production authority until that gate.

## 1. Purpose

This contract defines how PBDS moves on the web.

PBDS motion is not a collection of page-local entrance animations and it is not a smooth-scroll engine. It is a shared movement language that coordinates page arrival, native scrolling, section-to-section choreography, proof/artifact focus, media resolution, interaction feedback, route continuity, and animated system diagrams.

The core principle is:

> **Scroll conducts the composition.**
>
> **The page never waits for motion. Motion never outruns the page.**

## 2. Authority

When movement sources disagree, use this order:

1. Jim's explicit current instruction.
2. Canonical JM Personal Brand Figma file for visual and choreography truth.
3. This contract for web-movement behavior and implementation boundaries.
4. `docs/PBDS_V2_ARCHITECTURE_CONTRACT.md` for global PBDS architecture and migration gates.
5. Current Notion PBDS roadmap for phase/status/rationale.
6. Existing Portfolio V1 implementation as evidence/reference only, except where this contract explicitly promotes a V1 behavior into PBDS canon.

Reference websites are directional references, not PBDS authorities.

## 3. Reference synthesis

PBDS takes different lessons from different references without copying any one site's styling:

- **Apple:** native-scroll mechanics, long synchronized composition, graceful section handoffs, and scroll-linked storytelling without artificial drag.
- **Finox:** editorial choreography, layering, surprise, and compositional movement. PBDS intentionally distributes comparable change across more native scroll distance so the motion does not resolve too quickly.
- **Porto Rocha:** graphic energy, attitude, and expressive visual rhythm without adopting interaction friction.
- **Portfolio V1 BI diagram:** path-bound connector particles are promoted into PBDS as the canonical **Flow Signal** diagram-motion primitive.

PBDS identity remains its own: 2012 five-leg asterisk, Brand Magenta `#FF2FAE`, Editorial Machine typography, Canvas → Surface → Artifact → Signal material hierarchy, approved reusable patterns, and PBDS-native diagrams/proof artifacts.

## 4. Non-negotiable native-scroll rule

The user's physical scroll distance is authoritative.

PBDS MUST NOT introduce:

- inertia or momentum layers on top of browser scrolling;
- wheel/trackpad multipliers;
- scroll-jacking;
- drag-to-discover experiences;
- horizontal-scroll substitution for ordinary vertical narrative;
- letterbox scenes that require excessive input to advance;
- animation-gated page progress;
- blocking loaders used merely to protect choreography;
- a second generic scroll engine.

Native scroll and page position remain 1:1 with user intent. Motion responds to the page; it does not replace the page.

## 5. Two motion layers

PBDS web movement has two separate but coordinated layers.

### 5.1 Page choreography

Owns:

- Page Arrival
- Scroll Score
- Section Handoff
- Artifact Focus
- Media Resolve
- Interaction Response
- Route Handoff
- Reduced Motion

### 5.2 Diagram movement

Owns:

- Diagram Resolve
- Connector Establish
- Flow Signal
- Focus / Trace
- Reduced Motion

Diagram particles are not an ambient site background. They exist to communicate flow, direction, state, or relationship inside a diagram.

## 6. Page choreography primitives

### 6.1 Page Arrival

Purpose: make the page usable immediately while allowing the opening composition to finish establishing itself naturally.

Rules:

- Essential hero content must be available immediately.
- No blocking splash/loading choreography.
- The hero may settle or establish additional visual relationships as the first native scroll begins.
- Page Arrival should never make the user wait before reading, clicking, or scrolling.

### 6.2 Scroll Score

Purpose: coordinate one scene as a single authored movement rather than triggering unrelated animations on each element.

Canonical scene phases:

| Phase | Scroll progress | Intent |
| --- | ---: | --- |
| Entrance | 0–15% | The incoming scene becomes perceptible while the preceding scene still exists. |
| Establish | 15–35% | Headline, copy, and primary geometry reach a readable/stable composition. |
| Focus | 35–65% | Proof/media/artifact becomes dominant; supporting material yields. |
| Yield | 65–85% | The current focal object begins releasing visual priority toward what follows. |
| Handoff | 85–100% | The next composition is already arriving; there is no visual full-stop. |

These percentages are canonical starting territories for authored scenes, not a requirement that every section use identical geometry.

### 6.3 Section Handoff

Purpose: make adjacent sections feel like one continuous composition.

Rules:

- The outgoing scene may still be resolving as the incoming scene begins.
- Avoid `Section A ends → blank/gap → Section B fades in` as the default rhythm.
- Handoffs may use crop, scale, opacity, translation, material change, artifact emphasis, or PBDS recognition devices when those transforms clarify continuity.
- Handoff movement must remain subordinate to reading and navigation.

### 6.4 Artifact Focus

Purpose: bring evidence/proof/media to visual dominance when the story reaches it.

Rules:

- Proof objects may grow, crop, translate, elevate, or become visually dominant through compositor-friendly transforms.
- Supporting elements yield rather than competing.
- Do not shift document layout to create the effect.
- Artifact motion must preserve semantic content and editability.

### 6.5 Media Resolve

Purpose: prevent lazy-loaded imagery/video from visually interrupting the score.

Rules:

- Preload assets required for the imminent authored scene early enough to avoid visible blank states under normal conditions.
- Farther-away media may remain lazy-loaded.
- If media visibly resolves, use a bounded material/motion transition rather than an abrupt pop.
- Media loading must not block scroll or essential content.

### 6.6 Interaction Response

Purpose: acknowledge direct user intent immediately.

Rules:

- Hover, focus, press/click, navigation, and interactive diagram state changes use UI-fast feedback.
- Do not wait for decorative animation before confirming an action.
- Interaction response is time-based, not scroll-distance-based.

### 6.7 Route Handoff

Purpose: preserve continuity across page navigation without slowing navigation.

Rules:

- Acknowledge navigation immediately.
- The destination page must not be delayed to complete outgoing decorative motion.
- A short continuity cue may bridge pages after navigation has been acknowledged.
- Route handoff is optional when native immediate navigation is clearer.

### 6.8 Reduced Motion

Purpose: preserve hierarchy, state, and comprehension without unnecessary continuous/spatial movement.

Rules:

- Respect `prefers-reduced-motion`.
- Remove scroll-linked spatial transforms where they are nonessential.
- Remove continuous Flow Signal travel.
- Preserve all content, state, connectors, proof objects, and navigation.
- Bounded opacity/state changes may remain when they clarify hierarchy and do not create motion discomfort.

## 7. Scroll-distance pacing

PBDS controls choreography primarily through **native scroll distance**, not by slowing the browser or simply increasing animation duration.

Canonical starting territories:

| Pacing band | Scroll distance | Typical use |
| --- | ---: | --- |
| Quick Response | 5–15% viewport | Labels, small accents, small supporting elements |
| Editorial Reveal | 20–40% viewport | Headline + body + supporting artifact |
| Cinematic Handoff | 40–80% viewport | Hero transitions, major proof transformations, major imagery, section handoffs |

Finox-like choreography should be slowed by giving the composition more page distance—not by adding input latency or scroll smoothing.

## 8. Flow Signal — canonical diagram motion

Canonical primitive name:

`PBDS/Motion/Diagram/Flow Signal`

### Purpose

Flow Signal communicates movement through an architecture/system/data-flow diagram by moving small particles along the diagram's actual connector geometry.

It is functional motion. It must help a viewer understand direction, relationship, or system activity.

### Canonical behavior

- Connector geometry is authoritative. Particles remain on the path; they do not free-float.
- Direction is semantic.
- Color is semantic and must not become decorative noise.
- Default density is **3 particles per active path** unless a specific diagram demonstrates that another density improves comprehension.
- Canonical desktop particle-size territory is approximately **2–4 px radius** at the BI reference scale.
- Particle speed must be slow enough that the viewer can read topology and direction.
- Flow is autonomous after activation; it is **not scroll-scrubbed**.
- Flow begins only after the diagram has resolved and connector relationships are perceptible.
- Offscreen diagrams should suspend/pause continuous animation work.
- Focus/Trace should emphasize the relevant connector/path rather than multiplying ambient particles.
- Reduced-motion mode removes continuous travel while preserving static connectors and diagram meaning. A bounded state pulse may be used where useful.

### V1 implementation evidence promoted into the contract

The current Portfolio V1 BI diagram is the behavioral reference that established this primitive:

- `SharpParticleCanvas` draws particles on a canvas over explicit connector paths;
- particles have randomized initial path position;
- V1 uses `3` particles per path by default;
- V1 particle radii are generated from approximately `2.0` to `3.8` px;
- movement runs through `requestAnimationFrame`;
- the BI diagram uses semantic blue, red, and ink particle/path families;
- V1 already disables continuous particles when reduced motion is requested.

The implementation itself is not PBDS authority. The behavior above is the promoted reusable contract.

## 9. Page + diagram integration sequence

When an interactive architecture/system diagram is part of a scroll-authored section, the default choreography is:

```text
Section enters
  → Diagram resolves
    → Connectors establish
      → Flow Signal starts
        → optional Focus / Trace interaction
          → Section yields / hands off
```

The page scroll score owns when the diagram becomes active. Flow Signal owns continuous connector travel after activation.

Do not bind every Flow Signal particle directly to scroll position.

## 10. Implementation boundary

PBDS owns motion intent and primitives. The Portfolio / Web adapter owns implementation details consistent with this contract.

At PBDS-5, prefer:

- native browser scroll;
- IntersectionObserver or equivalent for coarse enter/leave visibility/state;
- scroll progress only for authored narrative moments that genuinely benefit from continuous choreography;
- compositor-friendly `transform` and `opacity` for spatial movement;
- bounded clip/mask usage where justified;
- media preloading/prefetching for imminent authored scenes;
- lazy loading for farther-away media;
- suspension of offscreen canvas/RAF animation;
- explicit `prefers-reduced-motion` behavior;
- PBDS-owned motion primitives/patterns consumed by thin route/page assemblies.

Do not create page-local motion constants when the behavior belongs to PBDS.

Do not add a second generic motion/scheduler/orchestration engine merely to implement this system.

## 11. Performance contract

Motion must not make the portfolio feel slower than a static page.

Required outcomes:

- shell and essential page content render without waiting on optional motion;
- scroll input remains responsive and native;
- offscreen continuous animation work is suspended where practical;
- large media assets needed next are prepared early enough to avoid obvious late arrival;
- avoid layout-thrashing animation;
- avoid heavyweight general-purpose motion frameworks unless a concrete accepted behavior cannot be delivered cleanly with the existing stack;
- decorative movement is the first thing reduced when performance pressure exists; semantic content is never sacrificed.

## 12. Figma canon

Canonical Figma board:

`PBDS-MOTION — Web Movement System — Canonical`

The board owns the visual representation of:

- the native-scroll hard rule;
- reference synthesis;
- page-vs-diagram motion ownership;
- web movement primitives;
- Scroll Score phases;
- scroll-distance pacing bands;
- Flow Signal specimen and rules;
- page + diagram activation sequence;
- PBDS-5 implementation boundary.

The earlier `PBDS-MOTION — Motion Primitive Prototypes — Active` board is superseded historical exploration and does not own current web-motion decisions.

## 13. Migration gate

This contract does not authorize piecemeal Portfolio V1 migration.

Portfolio V1 remains production authority until PBDS-5. The PBDS-5 representative pilot is the first production consumer of this motion system and should include at least:

- one Page Arrival;
- one full Scroll Score with a genuine Section Handoff;
- one Artifact Focus moment;
- one Media Resolve behavior;
- one Route/interaction behavior;
- one representative interactive diagram using Flow Signal;
- reduced-motion behavior for the same representative surfaces.

Only after the representative pilot passes visual, usability, accessibility, and performance review should the motion system expand across the portfolio.
