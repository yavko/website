<script script lang="ts">
	interface Post {
		title: string;
		description: string;
		authors: string[];
		pubDate: Date;
		modDate: Date;
		link: string;
	}

	export let post: Post;
	import { smartypants } from "smartypants";
	import dateStuff from "../dates";
</script>

<span class="card-title">{smartypants(post.title, 1)}</span><br />
<span class="card-details"
	>Written by {post.authors.join(", ")} at {dateStuff(
		post.pubDate,
		"fancy"
	)}</span
>
