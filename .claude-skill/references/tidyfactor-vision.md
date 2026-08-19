# TidyFactor — Shared Philosophy (all tracks)

Condensed from the ecosystem VISION.md. Every TidyFactor skill — this one
included — should be judged against this before adding any feature.

## Design tenets
- Simple before clever.
- Explicit before implicit.
- Structured before generated.
- Portable before proprietary.
- Content before presentation.
- Standards before conventions.
- Small before bloated.
- AI-native before AI-powered.

## The TidyFactor Test
Before adding anything to a project or to this skill, ask:
- Is it simpler?
- Is it more maintainable?
- Does it improve interoperability?
- Does it reduce lock-in?
- Is it AI-native (structured, machine-readable, portable)?
- Can it survive future technology changes?
- Would we still choose this approach five years from now?

## What this means concretely for the Vanilla JS track
- **Structure over complexity**: a UI framework is a complexity trade a
  project should make deliberately, not default into. This track proves
  a real app (state, routing, components) doesn't require one — if a
  project genuinely outgrows this, that's a conscious move to
  `tidyfactor-js-micro` or beyond, never a silent dependency creep.
- **Portable before proprietary**: Vite, when chosen, is dev/build
  tooling, not a runtime dependency — the shipped output is plain DOM
  APIs and native Web Components, readable and runnable without Vite
  installed. Zero-build mode takes this further: nothing to install at
  all.
- **Standards before conventions**: `compo` uses native `customElements`
  and `<template>`, not a custom component syntax — anything that already
  knows the DOM API already knows how to read a TidyFactor JS component.
- **Explicit before implicit**: both Step 0 forks (routing, build
  tooling) are locked per project and asked explicitly — never inferred
  silently and never defaulted, since either fork changes how `deploy`
  and half the other commands behave.
- **AI-native**: a locked, predictable folder structure
  (`src/components/`, `src/views/`, `src/store/`, `src/router/`) means an
  AI agent can extend the project later without re-deriving its
  architecture from scratch.

## Relationship to Alwkala
TidyFactor is stewarded by Alwkala (alwkala.com) — expertise,
implementation, consulting, education, and long-term support around the
open TidyFactor ecosystem.
