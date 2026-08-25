# Workflow: brief

Discovers and records core Vanilla JS SPA baselines (Routing Strategy, Build Tooling, State Model, Component Pattern) using CDL.

---

## Steps

1. **Check Existing State**:
   - Inspect `.tidyfactor/js-brief.md` and codebase for existing router or build setups.

2. **Conduct Structured Discovery (Max 3 Questions)**:
   - If not specified, ask:
     1. **Routing Strategy (J1)**: Hash routing (`#/route`) or History API (`/route`)?
     2. **Build Tooling (J2)**: Zero-build native ES Modules or Vite bundler?
     3. **State Management (J3)**: Reactive Proxy store or EventTarget pub/sub?

3. **Record Decisions**:
   - Save `.tidyfactor/js-brief.md` with confirmed parameters.

4. **Report Summary**:
   - Confirm baseline parameters and prompt user to invoke `/init` or `/route`.

---

## Validation checklist

- [ ] `.tidyfactor/js-brief.md` exists and contains confirmed values for J1–J5.
- [ ] No more than 3 questions were asked in a single round.
- [ ] SPA baseline conforms to `references/memory/quality-bar.md`.
