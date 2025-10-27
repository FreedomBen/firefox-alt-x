# Firefox Tab Pin/Unpin Extension

A simple Firefox extension that allows you to quickly pin or unpin tabs using a keyboard shortcut or toolbar button.

## Features

- Pin or unpin the active tab with the `Alt+X` keyboard shortcut
- Click the toolbar button to toggle the pin state
- Ships as a Manifest V3 WebExtension with a lightweight background service worker

## Installation

The add-on is not in the Firefox Add-ons store yet, so load it manually:

1. Download or clone this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Select **This Firefox** in the sidebar.
4. Click **Load Temporary Add-on...**.
5. Pick the `manifest.json` file inside this project.
6. Firefox installs the extension until the browser restarts.

## Development

```bash
npm install
npm start     # launches Firefox via web-ext with live reload
npm run lint  # runs web-ext lint for manifest and code checks
npm run build # creates a signed-ready ZIP bundle in ./build/
```

The `web-ext` CLI is listed as a dev dependency; you can also invoke it with `npx web-ext ...` if you prefer not to install globally.

## Usage

- Keyboard shortcut: press `Alt+X` while focused on any tab to toggle its pin status.
- Toolbar button: click the pin icon that appears in the Firefox toolbar.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
