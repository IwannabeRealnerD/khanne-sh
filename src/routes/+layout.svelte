<script lang="ts">
	import { INTERNAL_LINK } from "$/constants/internalLink";
</script>

<nav class="wrapper">
	<a href={INTERNAL_LINK.HOME}>home</a>
	<a href={INTERNAL_LINK.BINDING}>Bindings page</a>
	<a href={INTERNAL_LINK.COMPONENT_BINDING}>component binding</a>
	<a href={INTERNAL_LINK.INPUT_BINDING}>input binding</a>
	<a href={INTERNAL_LINK.LIFE_CYCLE}>life cycle</a>
</nav>

<div class="mainContainer">
	<slot />
</div>

<style>
	.wrapper {
		background-color: pink;
		padding: 2rem;
		margin-bottom: 3rem;
		display: flex;
		gap: 0 2rem;
	}
	.mainContainer {
		padding: 0 2rem;
	}
</style>
