# Workflow: route

Configures Hash or History client-side router with dynamic parameters, route guards, and view transitions.

---

## Steps

1. **Route Mapping**:
   - Register route table in `js/router.js` mapping path patterns (e.g. `/users/:id`) to view renderer functions.

2. **Handle Navigation Events**:
   - Listen to `hashchange` or `popstate` events, resolve params, and render active view.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] Back and forward browser buttons work seamlessly.
- [ ] Route parameters parsed and passed to view.
- [ ] Pre-emit critique stamp included.
