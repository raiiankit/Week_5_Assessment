Refactor summary and diffs

What changed
- Added `src/utils/format.js` and `src/utils/response.js` to centralize duplicated logic.
- Updated `src/moduleA.js` and `src/moduleB.js` to use the new utilities.
- Added `DESIGN.md` describing Copilot prompts and patterns.

Key diffs (high level)

1) src/utils/format.js — new
- Exports: `formatName(name)`, `scoreToGrade(score)`
- Normalizes names and grades with defensive defaults and JSDoc comments.

2) src/utils/response.js — new
- Exports: `makeId(prefix,max)`, `timestampNow()`, `buildStandardResponse({id,timestamp,payload})`
- Creates consistent envelope objects for responses and small wrappers so the strategy can be replaced later.

3) src/moduleA.js — updated
- Replaced inline name/grade logic with calls to `formatName` and `scoreToGrade`.
- Uses `buildStandardResponse` to produce final object while keeping `processUser` as the public API.

4) src/moduleB.js — updated
- Replaced inline normalizer/grade logic with utilities.
- Adapts standard response to include `uid` and `createdAt` to preserve external shape.

Tests & validation
- Added `test/runTests.js` as a smoke test and `test/utils.test.js` with unit tests for the utilities.
- `npm test` runs both tests in the current simple setup.

Why this helps
- Reduces duplicated logic and chance of drift between modules.
- Makes it straightforward to change behavior in one place (e.g., grade boundaries).
- Improves testability via small pure functions.

Next steps
- Add a proper test runner (Jest) and linter (ESLint).
- Consider extracting `src/utils` to a shared package for reuse.
