Week 5 — Reusability & Refactoring

Overview
--------
This repository is a small demonstrator for Week 5's assignment: identify duplicated logic across multiple modules and extract that logic into reusable utilities. The sample code models two modules that process user objects and produce response objects. The refactor centralizes name normalization, grade calculation, and response/envelope construction.

Files of interest
-----------------
- `src/index.js` — minimal runner that calls both modules and prints their output.
- `src/moduleA.js` — module that returns `{ id, timestamp, user: { name, grade, pass } }`.
- `src/moduleB.js` — module that returns `{ id, timestamp, profile: { displayName, grade, status }, uid, createdAt }` (note the adapter fields).
- `src/utils/format.js` — extracted name & grade helpers (pure functions).
- `src/utils/response.js` — id/timestamp helpers and envelope builder.
- `test/runTests.js` — runtime smoke-test that verifies both modules produce valid shapes.
- `test/utils.test.js` — small unit tests for utilities.
- `DESIGN.md` — Copilot prompts and design notes.
- `COPILOT_PROMPTS.md` — example conversation used to guide the refactor.

How to run
----------
Open a PowerShell terminal in the repository root and run:

```powershell
node test/runTests.js
```

This prints verification that Module A and Module B produce valid responses. To run both the smoke test and the unit tests (small), run:

```powershell
npm test
```

Why this refactor helps
----------------------
- Removes duplication so behavior is defined in one place.
- Makes formatting/grade logic easier to test and reason about.
- Centralizes id/timestamp generation so it's easy to swap strategies (e.g., use UUIDs in the future).

Next steps
----------
- Add formal linting and a test runner (Jest) for a larger codebase.
- Extract shared utilities into a separate package when used by multiple projects.
- Add TypeScript types or JSDoc to improve editor integration.

Contact
-------
This sample was created to demonstrate a refactor workflow using Copilot-guided edits and small unit tests.
