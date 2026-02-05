import { Action, ActionPanel, closeMainWindow, Icon, List, Color } from "@raycast/api";
import { focusWindow } from "../actions";

export function WindowListItem({ windowId, tabCount }: { windowId: number; tabCount: number }) {
  return (
    <List.Item
      title={`📱 Focus This Window`}
      subtitle={`${tabCount} tab${tabCount !== 1 ? "s" : ""}`}
      icon={{ source: Icon.Window }}
      actions={
        <ActionPanel>
          <Action
            title="Bring Window to Front"
            icon={{ source: Icon.Window }}
            onAction={async () => {
              await focusWindow(windowId);
              await closeMainWindow();
            }}
          />
        </ActionPanel>
      }
    />
  );
}

export function WindowAccordionItem({
  windowId,
  tabCount,
  firstTabTitle,
  isExpanded,
  onToggle,
}: {
  windowId: number;
  tabCount: number;
  firstTabTitle: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const expandIcon = isExpanded ? Icon.ChevronDown : Icon.ChevronRight;

  return (
    <List.Item
      title={`Window ${windowId}`}
      subtitle={`${tabCount} tab${tabCount !== 1 ? "s" : ""} • ${firstTabTitle}`}
      icon={{ source: Icon.Window, tintColor: Color.Blue }}
      accessories={[{ icon: { source: expandIcon } }]}
      actions={
        <ActionPanel>
          <Action
            title={isExpanded ? "Collapse Window" : "Expand Window"}
            icon={{ source: expandIcon }}
            onAction={onToggle}
          />
          <Action
            title="Bring Window to Front"
            icon={{ source: Icon.Window }}
            onAction={async () => {
              await focusWindow(windowId);
              await closeMainWindow();
            }}
            shortcut={{ modifiers: ["cmd"], key: "f" }}
          />
        </ActionPanel>
      }
    />
  );
}
