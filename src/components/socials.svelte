<script lang="ts">
	type Socials = { name: string, username: string, link?: string}[]
  export let socials: Socials;
  import {
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
    GitlabIcon,
    YoutubeIcon,
		RssIcon
  } from "svelte-feather-icons";
</script>

{#each socials as i}
  {#if i.name == "github"}
    <a class="icon" role="button" aria-label="Github account page" href="//github.com/{i.username}">
      <GithubIcon size="1.5x" />
    </a>
  {:else if i.name == "twitter"}
    <a class="icon" role="button" aria-label="Twitter account page" href="//twitter.com/{i.username}">
      <TwitterIcon size="1.5x" />
    </a>
  {:else if i.name == "instagram"}
    <a class="icon" role="button" aria-label="Instagram account page" href="//instagram.com/{i.username}">
      <InstagramIcon size="1.5x" />
    </a>
  {:else if i.name == "gitlab"}
    <a class="icon" role="button" aria-label="Gitlab account page" href="//gitlab.com/{i.username}">
      <GitlabIcon size="1.5x" />
    </a>
  {:else if i.name == "youtube"}
    <a class="icon" role="button" aria-label="Youtube channel page" href="//instagram.com/{i.username ?? i.link}">
      <YoutubeIcon size="1.5x" />
    </a>
  {/if}
{/each}
<a class="icon" role="button" aria-label="Rss feed" href="/rss.xml">
	<RssIcon size="1.5x" />
</a>
