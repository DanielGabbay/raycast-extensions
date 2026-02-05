import { getOpenTabs } from "../actions";

export default async function () {
  const tabs = await getOpenTabs(false);

  // Group tabs by window
  const windowGroups = new Map<number, Array<{ tabIndex: number; title: string; url: string }>>();

  tabs.forEach((tab) => {
    const windowTabs = windowGroups.get(tab.windowsId) || [];
    windowTabs.push({
      tabIndex: tab.tabIndex,
      title: tab.title,
      url: tab.url,
    });
    windowGroups.set(tab.windowsId, windowTabs);
  });

  // Convert to array format
  const windows = Array.from(windowGroups.entries())
    .map(([windowId, tabs]) => ({
      windowId,
      tabCount: tabs.length,
      tabs,
    }))
    .sort((a, b) => a.windowId - b.windowId);

  return windows;
}
