<script lang="ts">
  export let post;
  import { smartypants } from "smartypants";
  const date = new Date(post.publishDate);
</script>

<span class="card-title">{smartypants(post.title, 1)}</span><br />
<span class="card-details">Written by {post.authors.join(", ")} at {date.toDateString()}</span>
