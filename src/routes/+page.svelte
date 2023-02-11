<script>
	import TestHeader from './page/testComponent/testHeader.svelte';
	import ButtonList from './page/testComponent/buttonList.svelte';
	const href = 'https://kit.svelte.dev';
	const testArray = [
		"This is props that's given",
		"This is props that's given",
		"This is props that's given"
	];
</script>

<h1 class="titleStyle">mainPage</h1>
<p class="main">Visit <a {href}>kit.svelte.dev</a> to read the documentation</p>
<section class="sectionStyle">
	<TestHeader titleString="map button" />
	<ButtonList />
	<ButtonList arr={testArray} />
</section>

<style>
	.titleStyle {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	.sectionStyle {
		background-color: beige;
		padding: 0.3rem 1rem 1rem 2rem;
		margin-bottom: 2rem;
	}
</style>
