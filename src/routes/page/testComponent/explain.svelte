<script>
	import TestHeader from './page/testComponent/testHeader.svelte';
	import Map from './page/testComponent/map.svelte';
	const href = 'https://kit.svelte.dev';
	const testArray = ['hi', 'why', 'third'];
</script>

<h1 class="titleStyle">mainPage</h1>
<p class="main">Visit <a {href}>kit.svelte.dev</a> to read the documentation</p>

<style>
	.titleStyle {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
</style>
