import { getPreferenceValues, List } from "@raycast/api";
import { useState, useMemo } from "react";
import { Preferences, Tab } from "./interfaces";
import { ChromeListItems } from "./components";
import { useTabSearch } from "./hooks/useTabSearch";
import { WindowAccordionItem } from "./components/WindowListItem";

export default function Command() {
  const { useOriginalFavicon } = getPreferenceValues<Preferences>();
  const [searchText, setSearchText] = useState("");
  const [expandedWindows, setExpandedWindows] = useState<Set<number>>(new Set());
  const { data, errorView, isLoading } = useTabSearch(searchText);

  // Group tabs by window
  const windowGroups = useMemo(() => {
    const groups = new Map<number, Tab[]>();

    data.forEach((tab) => {
      const windowTabs = groups.get(tab.windowsId) || [];
      windowTabs.push(tab);
      groups.set(tab.windowsId, windowTabs);
    });

    return Array.from(groups.entries())
      .map(([windowId, tabs]) => ({ windowId, tabs }))
      .sort((a, b) => a.windowId - b.windowId);
  }, [data]);

  const toggleWindow = (windowId: number) => {
    setExpandedWindows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(windowId)) {
        newSet.delete(windowId);
      } else {
        newSet.add(windowId);
      }
      return newSet;
    });
  };

  // When searching, auto-expand all windows
  const isExpanded = (windowId: number) => searchText.length > 0 || expandedWindows.has(windowId);

  return (
    errorView ?? (
      <List isLoading={isLoading} onSearchTextChange={setSearchText}>
        {windowGroups.flatMap(({ windowId, tabs }) => [
          <WindowAccordionItem
            key={`window-${windowId}`}
            windowId={windowId}
            tabCount={tabs.length}
            firstTabTitle={tabs[0]?.title || ""}
            isExpanded={isExpanded(windowId)}
            onToggle={() => toggleWindow(windowId)}
          />,
          ...(isExpanded(windowId)
            ? tabs.map((tab) => (
                <ChromeListItems.TabList
                  key={tab.key()}
                  tab={tab}
                  useOriginalFavicon={useOriginalFavicon}
                  indent={true}
                />
              ))
            : []),
        ])}
      </List>
    )
  );
}
