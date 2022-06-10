<script lang="ts">
    export let navbarItems;
</script>

<nav id="navbar">
    	{#each navbarItems as item}
				<a href="{item.permalink}">{item.name}</a>
    	{/each}
</nav>
