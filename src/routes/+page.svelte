<script lang="ts">
	import Heading from '$lib/components/heading.svelte';
	import ButtonList from './page/testComponent/buttonList.svelte';
	import ExplainSection from './page/testComponent/explain.svelte';
	
	const testArrayProps = [
		"This is props that's given",
		"This is props that's given",
		"This is props that's given"
	];
</script>

<ExplainSection />

<section class="sectionStyle">
	<Heading titleString="map button" level={2} />
	<ButtonList />
	<ButtonList arr={testArrayProps} />
</section>

<style>
	.sectionStyle {
		background-color: beige;
		padding: 1.5rem;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem 0;
	}
</style>
