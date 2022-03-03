<script lang="ts">
  export let socials;
  import Socials from "./socials.svelte";
  import {siteData} from "../../config.mjs"
</script>

<div class="socials">
  <Socials socials={socials} />
</div>

<p class="copyright">© {siteData.name} {(new Date()).getFullYear()}</p>
