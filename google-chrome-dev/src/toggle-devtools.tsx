import { closeMainWindow, showHUD } from "@raycast/api";
import { toggleDevTools } from "./actions";

export default async function Command() {
  try {
    await closeMainWindow();
    await toggleDevTools();
    await showHUD("🔧 DevTools Toggled");
  } catch {
    await showHUD("❌ Failed to toggle DevTools");
  }
}
