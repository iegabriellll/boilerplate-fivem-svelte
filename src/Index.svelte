<script lang="ts">
  import Interface from "./components/Interface.svelte";
  import "./style/global.css";
  import VisibilityProvider from "./providers/Visibility.svelte";
  import { message } from "./lib/message";

  message([
    {
      action: "showFrame",
      payload: true,
    },
  ]);
</script>

<VisibilityProvider>
  <Interface />
</VisibilityProvider>
