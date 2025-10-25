# Repository Guidelines

## Project Structure & Module Organization
- `manifest.json`: WebExtension manifest; adjust permissions or keyboard shortcuts here.
- `background.js`: Core logic that toggles pin state via command and browser action listeners.
- `README.md`: Installation steps for loading the temporary add-on; keep user-facing docs in sync with code changes.
- No build tooling or nested modules—keep new scripts in the root or add a `src/` folder if the codebase grows, and update the manifest `background.scripts` list accordingly.

## Build, Test, and Development Commands
- `zip -r build/tab-pin.zip manifest.json background.js icons/`: Package the extension for manual distribution; create `build/` if absent.
- `web-ext run --firefox=/path/to/firefox`: Optional live-reload development with Mozilla’s tooling; install `web-ext` globally (`npm install -g web-ext`) if you need this workflow.
- Manual load: visit `about:debugging` → `This Firefox` → `Load Temporary Add-on...` and select `manifest.json`.

## Coding Style & Naming Conventions
- Use 2-space indentation in JavaScript; prefer `const`/`let` over `var`.
- Keep functions small and async-aware; handle rejected Promises with `try/catch` and `console.error`, matching the existing pattern in `toggleTabPin`.
- Name commands and actions descriptively (`toggle-pin`, `Pin/Unpin Tab`) and keep manifest keys in lower-case with hyphen separators.
- Before committing, run `npx prettier --write background.js manifest.json` to preserve compact JSON spacing and consistent JS formatting.

## Testing Guidelines
- The project relies on manual verification: load the temporary add-on, trigger `Alt+X`, and confirm the active tab toggles between pinned/unpinned states.
- When modifying UI elements, also test the toolbar button by clicking the browser action icon.
- If you introduce automated tests (e.g., via `web-ext lint` or integration harnesses), document the command in this section and ensure all contributors can run it locally.

## Commit & Pull Request Guidelines
- Follow the existing imperative, sentence-case commit style (`Add README.md`, `Tweak formatting on README.md`); keep subjects under ~60 characters.
- Reference any related issues in the commit body and highlight user-facing changes (shortcuts, permissions).
- Pull requests should include: a concise summary, testing notes (manual steps taken), screenshots for UI/icon updates, and a reminder if reviewers must reinstall the temporary add-on.
