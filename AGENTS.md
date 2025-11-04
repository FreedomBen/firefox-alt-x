# Repository Guidelines

## Project Overview
- Provides a quick way to pin or unpin the active Firefox tab through the `Alt+X` shortcut or the toolbar action.
- Runs as a Manifest V3 extension with `background.js` registered as the service worker orchestrating tab updates.
- Core files stay slim: `manifest.json` declares permissions, commands, and icons while `background.js` holds the toggle logic.

## Architecture Highlights
- **Command registration**: `manifest.json` maps the `toggle-pin` command to the default keyboard shortcut so keyboard and toolbar triggers stay aligned.
- **Event handling**: `background.js` listens to `browser.commands.onCommand` and the toolbar click, routing both paths through a shared toggle helper.
- **Tab management**: `toggleTabPin()` queries the active tab in the current window and flips its pinned state via `browser.tabs.update`.
- **Permissions**: Keep `tabs` (and `activeTab` when additional context is required) in sync with the manifest so tab metadata remains accessible.

## Project Structure & Module Organization
- `manifest.json`: Manifest V3 definition; update permissions, keyboard shortcuts, and service worker entry here.
- `background.js`: Service worker that handles the `toggle-pin` command and toolbar clicks via asynchronous tab APIs.
- `icons/`: Houses the 48px and 96px assets referenced in the manifest; keep additional sizes in this folder if you add store listings.
- `README.md`: Contributor- and user-facing guide; mirror any shortcut, install, or build changes here.
- Keep new logic modular: stage helpers under `src/`, import them from the service worker, and only list assets in `web_accessible_resources` when they must be exposed.

## Build, Test, and Development Commands
- `npm install`: Pulls `web-ext` locally so the scripts below work out of the box.
- `npm start`: Launches Firefox via `web-ext run` with live reload; pass `--firefox` if you need a non-default binary.
- `npm run lint`: Executes `web-ext lint` to validate the manifest and background script.
- `npm run build`: Produces a distributable ZIP in `./build/`; upload or share this artifact with testers.

## Coding Style & Naming Conventions
- Use 2-space indentation in JavaScript and JSON; prefer `const`/`let` over `var`.
- Keep service-worker code stateless and async-friendly; favor `async`/`await`, wrap tab updates in `try/catch`, and log errors with `console.error`.
- Command names stay lowercase-hyphen (`toggle-pin`), action labels use title case (`Pin/Unpin Tab`), and manifest fields remain camel/lowercase per schema.
- Run `npx prettier --write background.js manifest.json` before committing to maintain formatting parity.

## Testing Guidelines
- Manual verification is primary: load the temporary add-on, press `Alt+X`, and ensure the active tab toggles between pinned/unpinned states.
- When iterating without `web-ext`, update `background.js` or `manifest.json`, reload via `about:debugging#/runtime/this-firefox`, and re-run the `Alt+X` shortcut to confirm the change.
- After UI or icon changes, click the toolbar action to confirm the icon loads and the handler still fires.
- Run `npm run lint` to catch manifest or API regressions before pushing.
- If you add automated harnesses (Playwright, Selenium), record the command and dependencies here and ensure they integrate with the existing npm scripts.

## Commit & Pull Request Guidelines
- Follow the existing imperative, sentence-case commit style (`Add README.md`, `Tweak formatting on README.md`); keep subjects under ~60 characters.
- Reference any related issues in the commit body and highlight user-facing changes (shortcuts, permissions).
- Pull requests should include: a concise summary, testing notes (manual steps taken), screenshots for UI/icon updates, and a reminder if reviewers must reinstall the temporary add-on.
