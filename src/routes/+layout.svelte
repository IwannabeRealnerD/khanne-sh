<script lang="ts">
	import { INTERNAL_LINK } from '$/constants/internalLink';
</script>

<nav class="wrapper">
	<a href={INTERNAL_LINK.home}>home</a>

	<a href={INTERNAL_LINK.bindings}>Bindings page</a>
</nav>

<slot />

<style>
	.wrapper {
		background-color: pink;
		padding: 2rem;
		margin-bottom: 3rem;
		display: flex;
		gap: 0 2rem;
	}
</style>
