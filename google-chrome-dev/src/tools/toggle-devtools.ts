import { toggleDevTools } from "../actions";

export default async function () {
  await toggleDevTools();

  return "DevTools toggled for the active tab in Chrome Dev";
}
