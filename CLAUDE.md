# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Firefox browser extension that allows users to pin/unpin tabs using the Ctrl+X keyboard shortcut. The extension uses Manifest V3 and consists of only two files:

- `manifest.json` - Extension manifest defining permissions, commands, and background script
- `background.js` - Service worker that handles the keyboard command and tab pinning logic

## Architecture

The extension follows a minimal architecture:

1. **Command Registration**: The manifest.json defines a "toggle-pin" command mapped to Ctrl+X
2. **Event Handling**: background.js listens for the command event using `browser.commands.onCommand`
3. **Tab Management**: When triggered, it queries the active tab and toggles its pinned state using `browser.tabs.update()`

The extension requires `tabs` and `activeTab` permissions to access and modify tab properties.

## Development

No build system, package manager, or testing framework is configured. This is a pure JavaScript extension that can be loaded directly into Firefox for development.

To test changes:
1. Make edits to background.js or manifest.json
2. Load the extension in Firefox via about:debugging
3. Test the Ctrl+X shortcut on any tab

## Key Implementation Details

- Uses Manifest V3 with `service_worker` instead of background scripts
- Error handling in `toggleTabPin()` function logs to console
- Queries for active tab in current window before toggling pin state
- Asynchronous operations use async/await pattern