# Google Chrome Dev

Control and search Google Chrome Dev directly from Raycast. Quickly navigate through tabs, history, bookmarks, and manage browser windows with keyboard-driven efficiency.

## Features

### 🔍 Search Commands

- **Search Tabs** - List all open tabs across all Chrome Dev windows and quickly jump to any tab
- **Search History** - Search through your browser history with advanced filtering
- **Search Bookmarks** - Find and open bookmarks instantly
- **Search All** - Search across tabs, history, and bookmarks simultaneously
- **View Windows** - See all Chrome windows and their tabs, focus windows or navigate to specific tabs

### ⚡ Quick Actions

- **New Tab** - Open a new tab (blank or to a specific URL)
- **New Window** - Create a new Chrome Dev window
- **New Incognito Window** - Open a private browsing window
- **New Guest Window** - Launch a guest browsing session
- **Open Current Tab in Guest** - Open the active tab's URL in a new guest window
- **Toggle DevTools** - Quickly toggle Developer Tools for the active tab

### 🔎 Advanced Search Syntax

All search commands support powerful filtering:

- **Include terms**: `term1 term2` - Space-separated words (AND logic)
- **Exclude terms**: `-excluded` - Use minus prefix to exclude results
- **Literal dash**: `\-literal` - Escape special characters with backslash

**Example**: `raycast -documentation` finds pages with "raycast" but excludes those with "documentation"

### 👤 Multi-Profile Support

The extension automatically detects and supports multiple Chrome profiles. You can configure your default profile in the extension preferences.

## Requirements

- [Google Chrome Dev](https://www.google.com/chrome/dev/) browser installed on macOS
- Raycast 1.50.0 or higher

## Installation

Install from the [Raycast Store](https://www.raycast.com/extensions) or build from source.

## Configuration

The extension works out of the box, but you can customize:

- **Default Profile** - Select which Chrome profile to use
- **Profile Path** - Override the default Chrome profile location
- **Favicon Settings** - Choose between original or cached favicons
- **Profile Open Behavior** - Control how tabs open in different profiles

Access preferences via Raycast: `⌘ + ,` in any Google Chrome Dev command.

## AI Tools

This extension includes AI-accessible tools for Raycast AI, enabling natural language interactions:

- Open new tabs or windows with voice commands
- Search bookmarks and history conversationally
- Get information about your active tab
- Toggle DevTools via AI assistant

Example: "@google-chrome-dev open a new tab to raycast.com"

## Development

Built with TypeScript and the Raycast API. The extension uses AppleScript for browser automation and direct filesystem access to Chrome's profile data.

### Tech Stack

- **TypeScript** + React (Raycast API)
- **AppleScript** for Chrome browser control
- **SQLite** for history queries
- Direct filesystem access to Chrome profile data

### Project Structure

```
src/
├── actions/        # AppleScript execution and browser control
├── components/     # Reusable UI components
├── hooks/          # Data fetching and search logic
├── tools/          # AI tool definitions
└── util/           # Search parsing and file path utilities
```

## Known Limitations

- Opening tabs in specific profiles has some restrictions - tabs open in the topmost window when using Default mode
- Requires Google Chrome **Dev** specifically (not regular Chrome or Chrome Canary)

## License

MIT

## Author

Created by [Daniel Gabbay](https://github.com/danielgabbaydev)