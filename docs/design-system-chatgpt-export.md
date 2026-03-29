# Design System Export (ChatGPT-Friendly)

This file is a compact, plain-language export intended for LLM ingestion.

## Stack
- Framework: Next.js 14 + React 18 + TypeScript
- Styling: Tailwind CSS + project-level design tokens
- Motion: Framer Motion

## Core Principles
- Keep interfaces readable and structured over decorative.
- Use deterministic spacing and consistent card geometry.
- Prefer tokenized values over one-off styles.
- Maintain mobile-first responsiveness (`md`, `lg`, `xl`).

## Color Intent
- Primary ink: near-black text for readability.
- Accent blue: interaction, CTAs, active controls.
- Alert red: system emphasis and connector traces.
- Neutral grays: rails, outlines, and structural separators.

## Shape Language
- Rounded rectangles for content cards.
- Pills for compact actions/status controls.
- Dashed animated perimeter for emphasized commerce layer blocks.
- Thin connector lines with animated particles for directional flow.

## Typography Intent
- Strong hierarchy:
1. Section title
2. Card headline
3. Body/supporting text
4. Eyebrow labels and metadata

## Motion Rules
- Keep motion subtle, purposeful, and loop-safe.
- Use line/particle motion to indicate system direction.
- Avoid large transforms that disrupt reading.

## Component Patterns
- `SystemCard`: compact system node with eyebrow + body + feature row.
- `HeroCard`: center emphasis card with pills and higher visual weight.
- `CommerceCard`: emphasized card with animated dashed outer border.
- `DataLakeCard`: storage/analytics node with supporting interaction points.
- `BrowserCard`: front-end delivery node for shopper-facing surfaces.

## Accessibility Baselines
- Maintain readable contrast in all states.
- Keep click targets generous for touch.
- Do not rely on animation alone to convey meaning.

## Content Rules
- Case-study content lives in `src/content/case-studies/`.
- Preserve authored metrics and first-person ownership voice.

