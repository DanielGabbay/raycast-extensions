import { getOpenTabs } from "../actions";

type Input = {
  /** Optional search query to filter tabs by title or URL */
  query?: string;
};

export default async function (input?: Input) {
  const tabs = await getOpenTabs(false);

  if (!input?.query) {
    return tabs.map((tab) => ({
      windowId: tab.windowsId,
      tabIndex: tab.tabIndex,
      title: tab.title,
      url: tab.url,
    }));
  }

  // Filter tabs by query
  const query = input.query.toLowerCase();
  const filteredTabs = tabs.filter(
    (tab) => tab.title.toLowerCase().includes(query) || tab.url.toLowerCase().includes(query),
  );

  return filteredTabs.map((tab) => ({
    windowId: tab.windowsId,
    tabIndex: tab.tabIndex,
    title: tab.title,
    url: tab.url,
  }));
}
