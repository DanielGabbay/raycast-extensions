import { getActiveTab } from "../actions";

export default async function () {
  const activeTab = await getActiveTab();

  if (!activeTab) {
    return "No active tab found. Make sure Chrome Dev has at least one window open.";
  }

  return {
    windowId: activeTab.windowsId,
    tabIndex: activeTab.tabIndex,
    title: activeTab.title,
    url: activeTab.url,
  };
}
