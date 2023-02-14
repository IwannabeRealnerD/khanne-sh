<script lang="ts">
	export let titleString: string;
	export let level: number;
</script>

{#if level === 1}
	<h1 class="header" style="font-size: 2rem">{titleString}</h1>
{/if}

{#if level === 2}
	<h2 class="header" style="font-size: 1.5rem">{titleString}</h2>
{/if}

{#if level === 3}
	<h3 class="header" style="font-size: 1.2rem">{titleString}</h3>
{/if}

<style>
	.header {
		margin-bottom: 1rem;
	}
</style>
