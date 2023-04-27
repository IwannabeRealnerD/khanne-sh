<script lang="ts">
	import { onMount } from "svelte";
	import { getLocalStorageItem, setLocalStorage } from "$/lib/util";
	import { checkDuplicatedCommand } from "./util";
	import type { CommandType } from "$/type";

	let resultArr: CommandType[] = [{ command: "", answer: "" }];
	let inputCommand: string;

	const commandOnSubmit = () => {
		const storageArr = getLocalStorageItem("COMMAND");
		if (!storageArr) {
			setLocalStorage(inputCommand);
		}
		if (checkDuplicatedCommand(inputCommand, storageArr)) {
			return;
		}
		putStorageArr(inputCommand, storageArr);
		resultArr = getLocalStorageItem("COMMAND");
	};

	onMount(() => {
		resultArr = getLocalStorageItem("COMMAND") as CommandType[];
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

	<form on:submit|preventDefault={commandOnSubmit}>
		<input class="inputTag" name="command" bind:value={inputCommand} /><button
			type="submit"
		>
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
