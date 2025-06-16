import type { NuiDebugEventFrame } from "../interfaces/interfaces";
import { isEnvBrowser } from "./misc";

export const message = (events: NuiDebugEventFrame[], timer = 1000): void => {
  if (isEnvBrowser()) {
    for (const event of events) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: {
              action: event.action,
              payload: event.payload,
            },
          })
        );
      }, timer);
    }
  }
};
