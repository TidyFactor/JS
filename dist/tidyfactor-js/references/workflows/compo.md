# Workflow: compo

Builds reusable native Web Components with reactive state bindings and lifecycle cleanup.

---

## Steps

1. **Component Scaffolding**:
   - Create class extending `HTMLElement` with `connectedCallback` and `disconnectedCallback`.

2. **State & Event Binding**:
   - Subscribe to store in `connectedCallback` and unsubscribe in `disconnectedCallback` to prevent memory leaks.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] All event listeners cleaned up on `disconnectedCallback`.
- [ ] Component registered with valid hyphenated name.
- [ ] Pre-emit critique stamp included.
