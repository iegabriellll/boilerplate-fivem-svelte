<script lang="ts">
  import { listen } from "../lib/listen";
  import { onMount } from "svelte";
  import { emit } from "../lib/emit";
  import { visibility } from "../stores/visibility";

  listen<boolean>("showFrame", (visible: boolean) => visibility.set(visible));
  onMount(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (!$visibility) return;
      if (["Escape"].includes(e.code)) {
        emit("hideFrame");
        visibility.set(false);
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  });
</script>

{#if $visibility}
  <slot />
{/if}
