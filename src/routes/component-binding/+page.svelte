<script lang="ts">
	import Component from "./component.svelte";

	let number = 44;
</script>

<div class="wrapper">
	<Component bind:test={number} />
	<button
		on:click={() => {
			number++;
		}}>숫자 올리기 버튼</button
	>
</div>

<style>
	.wrapper {
		display: flex;
		margin-bottom: 2rem;
		flex-direction: column;
		align-items: flex-start;
		background-color: beige;
		gap: 0.5rem 0;
		padding: 1rem;
	}
</style>
