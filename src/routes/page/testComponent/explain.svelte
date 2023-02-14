<script lang="ts">
	import Heading from '$/lib/common/commonHeading.svelte';

	const href = 'https://kit.svelte.dev';
</script>

<div class="container">
	<Heading titleString="Main Page" level={1} />
	<p>Visit <a {href}>kit.svelte.dev</a> to read the documentation</p>
</div>

<style>
	.container {
		margin-bottom: 2rem;
	}
</style>
