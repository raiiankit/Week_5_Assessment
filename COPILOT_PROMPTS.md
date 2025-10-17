Copilot-driven conversation log (example prompts & responses)

The following is a fictionalized, design-focused conversation between the developer and Copilot that was used to guide the refactor. It's written to be clear and reproducible so you can re-run similar prompts in your editor.

---

User: I have two modules that both normalize user names and convert numeric scores to letter grades. They're implemented slightly differently. Can you extract shared logic into utilities and keep each module's external output shape unchanged?

Copilot: Sure. Create a `src/utils/format.js` that exports `formatName(name)` and `scoreToGrade(score)`. Implement `formatName` to trim, split on spaces and hyphens, and convert to Title Case. Implement `scoreToGrade` using canonical boundaries (>=90 A, >=80 B, >=70 C, >=60 D, else F). Update modules to `require('./utils/format')` and use those functions.

User: Also, both modules generate an id and timestamp. Consolidate that into a `response` utility and make it easy to swap the id/timestamp strategy later.

Copilot: Add `src/utils/response.js` with `makeId(prefix,max)`, `timestampNow()`, and `buildStandardResponse({id, timestamp, payload})`. Use `buildStandardResponse` in modules and let modules adapt the resulting envelope if they have specialized field names (e.g., `uid`).

User: Make sure modules export `processUser` like before and add small adapters if necessary.

Copilot: Done — modules now import utilities and map fields as needed to preserve backward compatibility.

---

Notes on using these prompts
- Use short, specific requests about the transformation you want.
- Ask Copilot to keep public APIs stable when refactoring.
- Request small utility function names and one responsibility each.

Example one-line prompt to paste to Copilot in your editor:
"Extract name/grade logic into src/utils/format.js with formatName and scoreToGrade; create src/utils/response.js with makeId, timestampNow, buildStandardResponse; refactor modules to use them and preserve their output shapes."
