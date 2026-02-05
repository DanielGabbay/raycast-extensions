import fs from "fs";
import { getLocalStatePath } from "../util";

const getDefaultProfileID = () => {
  try {
    const path = getLocalStatePath();
    const chromeState = fs.readFileSync(path, "utf-8");
    const profiles = JSON.parse(chromeState).profile.info_cache;
    if (!profiles) {
      return "Default";
    }
    return Object.keys(profiles)[0];
  } catch {
    return "Default";
  }
};

export const defaultChromeProfilePath = ["Application Support", "Google", "Chrome Dev"];
export const defaultChromeStatePath = ["Application Support", "Google", "Chrome Dev", "Local State"];
export const DEFAULT_CHROME_PROFILE_ID = getDefaultProfileID();
export const CHROME_PROFILE_KEY = "CHROME_PROFILE_KEY";
export const CHROME_PROFILES_KEY = "CHROME_PROFILES_KEY";

export const DownloadText = `
  # 🚨Error: Google Chrome Dev browser is not installed
  ## This extension depends on Google Chrome Dev browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press ⏎ (Enter Key) to install Google Chrome Dev browser.

  [Click here](https://www.google.com/chrome/dev/) if you want to download manually.

  [![Google Chrome Dev](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;

export const NoBookmarksText = `
# 🚨Error: Google Chrome Dev browser has no bookmarks. Please add some bookmarks to continue using this command.

[![Google Chrome Dev](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;

export const UnknownErrorText = `
# 🚨Error: Something happened while trying to run your command

[![Google Chrome Dev](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;

export const DEFAULT_ERROR_TITLE = "An Error Occurred";

export const NOT_INSTALLED_MESSAGE = "Google Chrome Dev not installed";
export const NO_BOOKMARKS_MESSAGE = "Google Chrome Dev has no bookmarks.";
