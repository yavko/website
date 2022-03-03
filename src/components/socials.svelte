<script lang="ts">
  export let socials;
  import {
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
    GitlabIcon,
    YoutubeIcon,
  } from "svelte-feather-icons";
</script>

{#each socials as i}
  {#if i.name == "github"}
    <a class="icon" href="//github.com/{i.username}">
      <GithubIcon size="1.5x" />
    </a>
  {:else if i.name == "twitter"}
    <a class="icon" href="//twitter.com/{i.username}">
      <TwitterIcon size="1.5x" />
    </a>
  {:else if i.name == "instagram"}
    <a class="icon" href="//instagram.com/{i.username}">
      <InstagramIcon size="1.5x" />
    </a>
  {:else if i.name == "gitlab"}
    <a class="icon" href="//gitlab.com/{i.username}">
      <GitlabIcon size="1.5x" />
    </a>
  {:else if i.name == "youtube"}
    <a class="icon" href="//instagram.com/{i.username ?? i.link}">
      <YoutubeIcon size="1.5x" />
    </a>
  {/if}
{/each}
