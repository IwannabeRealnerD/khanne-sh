<script lang="ts">
	import { onMount } from "svelte";
	import { getStorageArr, putStorageArr } from "$/lib/util";

	let resultArr: string[] = ["loading"];
	let inputCommand: string;

	onMount(() => {
		resultArr = getStorageArr();
	});
</script>

<main class="container">
	<div class="resultArrWrapper">
		{#if resultArr === null}
			<p>Welcome to khanminal</p>
		{:else}
			{#each resultArr as result}<article>{result}</article>{/each}
		{/if}
	</div>

	<form
		on:submit|preventDefault={() => {
			putStorageArr(inputCommand);
			resultArr = getStorageArr();
		}}
	>
		<input class="inputTag" name="command" bind:value={inputCommand} /><button type="submit">
			입력버튼
		</button>
	</form>
</main>

<style>
	.container {
		height: 100vh;
		background-color: pink;
		display: flex;
		flex-direction: column;
	}
	.resultArrWrapper {
		height: 90%;
		background-color: blueviolet;
	}
	.inputTag {
		width: 100%;
		height: 3rem;
		border-color: black;
	}
</style>
