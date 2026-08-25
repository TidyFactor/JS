# Workflow: store

Builds a lightweight reactive state store using JavaScript Proxy and EventTarget.

---

## Steps

1. **State Store Definition**:
   - Create `createStore(initialState)` wrapping state in a Proxy that dispatches custom `statechange` events on mutation.

2. **Subscribe & Bind**:
   - Provide `store.subscribe(key, callback)` helper for reactive component updates.

3. **Pre-Emit Self-Critique**:
   - `/* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */`

---

## Validation checklist

- [ ] State mutations trigger subscribers reactively.
- [ ] No direct mutations bypass the proxy listener.
- [ ] Pre-emit critique stamp included.
