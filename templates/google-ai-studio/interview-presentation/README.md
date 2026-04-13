# Google AI Studio Interview Presentation Template Pack

This folder is a **reference pack** for creating new presentation experiences based on the live `/interview/` implementation in this repo.

## What this pack is for

Use these files as upload context in Google AI Studio when you want AI Studio to:

1. study the current `/interview/` presentation architecture,
2. preserve the interaction model and premium visual direction,
3. generate a **new presentation** for import back into this repo.

## Included files

- `InterviewsApp.reference.tsx`
  - reference copy of the current presentation shell/orchestrator
- `interviewSlideRegistry.reference.ts`
  - reference copy of slide ordering / TOC registry logic
- `interviews.types.reference.ts`
  - reference copy of the content schema used by the current presentation system
- `interviewContent.reference.ts`
  - reference copy of how the current interview content object is assembled
- `google-ai-studio-prompt.md`
  - reusable prompt for Google AI Studio

## Important note

These files are intended as **reference/template inputs** for AI Studio.
They are not a standalone drop-in mini-app by themselves, because the live presentation also depends on slide components and content modules elsewhere in the repo.

## Recommended workflow

1. Download this folder.
2. Upload the files in this folder to Google AI Studio.
3. Paste the prompt from `google-ai-studio-prompt.md`.
4. Ask AI Studio to produce:
   - a new `InterviewsApp`-style presentation shell only if needed,
   - a new content/schema-aligned content file,
   - any new slide components required for the new presentation,
   - code that fits this repo's React/Next/Tailwind conventions.
5. Bring the generated files back into this repo and wire them into a new route.

## Best practice

Treat the current `/interview/` route as the **interaction/layout template**, not as a hard-coded one-off deck.
The strongest reusable parts are:

- the fullscreen presentation shell
- keyboard navigation
- TOC dialog
- slide registry pattern
- typed content model
- separation between presentation shell and content

Avoid asking AI Studio to redesign the whole experience unless that is explicitly your goal.
