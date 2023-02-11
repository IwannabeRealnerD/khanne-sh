<script>
	import Heading from '$lib/components/heading.svelte';

	const href = 'https://kit.svelte.dev';
	const testArray = ['hi', 'why', 'third'];
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
