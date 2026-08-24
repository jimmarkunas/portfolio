# Secure Carolinas 2026 — Presentation Contract

## Purpose

This file is the canonical current-state contract for the Secure Carolinas 2026 React presentation.

It describes the APPROVED PRESENT STATE.

It is not a history log.

Superseded design instructions must be removed rather than accumulated.

---

## Source of Truth Order

For all future presentation work:

1. Jim's latest explicit instruction
2. This `PRESENTATION_CONTRACT.md`
3. Latest explicitly approved reference screenshot
4. Current implementation on GitHub `main`
5. Historical conversation only as background

A newer explicit instruction supersedes any older conflicting instruction.

---

## Implementation Roles

### ChatGPT

ChatGPT acts as:

- current-source inspector
- design-spec maintainer
- exact Codex prompt writer
- hostile diff reviewer
- visual QA reviewer

ChatGPT does not directly implement presentation code unless Jim explicitly suspends this rule.

### Codex

Codex is the presentation code implementer.

Codex must work from the current source, not remembered source.

---

## Repository Guardrails

- Work on `main` only.
- Do not create feature branches.
- Do not modify CI/CD.
- Do not modify Hostinger configuration.
- Do not modify deployment pipelines.
- Do not recreate the presentation as HTML.
- Do not recreate the deck outside the existing React implementation.
- Prefer presentation-local changes over shared-infrastructure changes.
- Do not make unrelated changes.

---

## Change-Control Rule

Before any implementation prompt is written:

1. Read the current relevant source from `main`.
2. Identify the exact JSX, helper, class, conditional, or CSS rule responsible for each requested change.
3. Map every requested change to an exact edit target.
4. Compare the requested change against this contract.
5. If Jim's new instruction conflicts with this contract, Jim's new instruction wins.
6. Update this contract after the resulting implementation is visually approved.

Do not implement from historical chat memory alone.

---

## Visual Validation Rule

A successful:

- `npm run typecheck`
- `npm run build`

proves only that the application compiles.

It does NOT prove that a visual request is correct.

A visual task is approved only after:

1. the requested source diff is verified
2. typecheck/build succeed
3. the rendered result is visually reviewed
4. Jim explicitly approves it

Until then, describe the state as:

> Code implementation complete; visual verification remains.

---

## Drift Kill Switch

If Jim's current instruction, this contract, an approved screenshot, and the current source cannot be reconciled confidently:

- do not guess
- do not improvise
- do not substitute an easier change
- do not silently preserve stale instructions

Identify the exact conflict before implementation.

---

## Conference Design Principles

- Conference readability takes priority over fitting excessive content.
- Reduce content before shrinking typography.
- Maintain visual consistency across slides using the same component system.
- Do not introduce one-off styling unless explicitly requested.
- Approved layouts remain locked until Jim explicitly changes them.

---

## Current Approved Presentation State

NOT YET BASELINED.

The current visual and implementation state must be audited from GitHub `main` and approved screenshots before this section is populated.

Do not infer or populate this section from historical conversation alone.

---

## Approved Baseline

Commit SHA: NOT YET SET

Date approved: NOT YET SET

The baseline is set only after the current presentation state has been audited and Jim explicitly approves it.
