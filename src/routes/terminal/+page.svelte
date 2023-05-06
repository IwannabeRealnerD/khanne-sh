<script lang="ts">
	import { onMount } from "svelte";
	import { getLocalStorageItem, setLocalStorage } from "$/lib/util";
	import type { CommandType } from "$/type";
	import PageLayout from "$/lib/global/pageLayout.svelte";

	import { checkDuplicatedCommand } from "./util";

	let resultArr: CommandType[] | undefined = [{ command: "", answer: "" }];
	let inputCommand: string;

	const commandOnSubmit = () => {
		// const storageArr = getLocalStorageItem("COMMAND");
		// if (!storageArr) {
		// 	setLocalStorage("COMMAND", inputCommand);
		// }
		// if (checkDuplicatedCommand(inputCommand, storageArr)) {
		// 	return;
		// }
		// putStorageArr(inputCommand, storageArr);
		// resultArr = getLocalStorageItem("COMMAND");
	};

	onMount(() => {
		const history = getLocalStorageItem("COMMAND");
		resultArr = history;
	});
</script>

<PageLayout>
	<main class="container">
		<div class="resultArrWrapper">
			{#if !resultArr}
				<p>Welcome to khanminal</p>
				<p>Ask what you want to know about him</p>
			{:else}
				{#each resultArr as result}<article>{result}</article>{/each}
			{/if}
		</div>

		<form on:submit|preventDefault={commandOnSubmit}>
			<input class="inputTag" name="command" bind:value={inputCommand} /><button
				type="submit"
			>
				입력버튼
			</button>
		</form>
	</main>
</PageLayout>

<style>
	.container {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: aliceblue;
	}
	.resultArrWrapper {
		height: 90%;
	}
	.inputTag {
		width: 100%;
		height: 3rem;
	}
</style>
