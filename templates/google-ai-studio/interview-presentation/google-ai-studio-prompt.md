You are helping me create a **new presentation** for my portfolio site using the existing `/interview/` presentation as the structural template.

You have been given reference files from my repo that show:
- the live presentation shell (`InterviewsApp.reference.tsx`)
- the slide registry pattern (`interviewSlideRegistry.reference.ts`)
- the typed content schema (`interviews.types.reference.ts`)
- the content assembly pattern (`interviewContent.reference.ts`)

Your job is to generate a **new presentation implementation** that follows the same overall interaction model and premium design direction, but with **new topic-specific content**.

## Core requirements

1. Keep the overall presentation experience aligned to the existing `/interview/` route:
   - fullscreen-capable presentation shell
   - keyboard navigation
   - TOC / slide table of contents
   - premium dark presentation framing
   - slide-based navigation with progress indication

2. Preserve the architectural pattern as much as possible:
   - one main presentation app/component
   - typed content object or schema
   - slide registry / ordering pattern
   - slide components separated from content where reasonable

3. Do **not** redesign the entire system unless explicitly told to.
   Treat the uploaded files as the **template baseline**.

4. Use React / TypeScript / Tailwind patterns that are compatible with a Next.js repo.

5. Keep the output reasonably modular and maintainable.

## What I want you to produce

Produce the code for a new presentation based on this template, including:
- a main presentation component
- a typed content/schema file
- a slide registry if needed
- slide components for the new presentation
- any minimal helper files needed to support the new deck

## Guardrails

- No unnecessary rewrites of the interaction model
- No random new design language
- No bloated abstractions
- No loss of keyboard navigation, TOC behavior, or fullscreen support
- No generic placeholder sludge
- Keep the tone and structure premium, clean, and executive-facing

## Output expectations

When you answer:
1. First summarize the presentation structure you plan to use.
2. Then output the files clearly, one file at a time.
3. Keep imports realistic for a Next.js / React / Tailwind repo.
4. Reuse the uploaded template patterns instead of inventing a totally different architecture.

## Topic-specific instructions

I will provide the presentation topic, audience, and content direction after this prompt.
Do not invent the business context unless I explicitly ask you to.
