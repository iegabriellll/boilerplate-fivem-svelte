import type { NuiMessageFrame } from "../interfaces/interfaces";
import { onDestroy } from "svelte";

type NuiEventHandler<T = any> = (data: T) => void;

const eventListeners = new Map<string, NuiEventHandler[]>();

const eventListener = (event: MessageEvent<NuiMessageFrame>) => {
  const { action, payload } = event.data;
  const handlers = eventListeners.get(action);

  if (handlers) {
    handlers.forEach((handler) => handler(payload));
  }
};

window.addEventListener("message", eventListener);

export function listen<T = unknown>(
  action: string,
  handler: NuiEventHandler<T>
) {
  const handlers = eventListeners.get(action) || [];
  handlers.push(handler);
  eventListeners.set(action, handlers);

  onDestroy(() => {
    const handlers = eventListeners.get(action) || [];

    eventListeners.set(
      action,
      handlers.filter((h) => h !== handler)
    );
  });
}
