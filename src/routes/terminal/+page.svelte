<script lang="ts">
	import { onMount } from "svelte";
	import type { CommandType } from "$/type";
	import { getLocalStorageItem, setLocalStorageItem } from "$/lib/util";
	import { TERMINAL_HISTORY_KEY } from "$/constants";

	import PageLayout from "$/lib/global/pageLayout.svelte";

	import {
		checkDuplicatedCommand,
		outputCreator,
		putLocalStorageArr
	} from "./util";

	let resultArr: CommandType[] | undefined | null = null;
	let inputCommand: string;

	const commandOnSubmit = () => {
		if (inputCommand === "") return;
		putLocalStorageArr(inputCommand);
		resultArr?.push(inputCommand);
		inputCommand = "";
	};

	onMount(() => {
		const history = getLocalStorageItem("COMMAND");
		resultArr = history;
	});
</script>

<PageLayout>
	<main class="container">
		<div class="resultArrWrapper">
			{#if resultArr === null}
				<div>
					<p>loading</p>
				</div>
			{/if}
			{#if resultArr === undefined}
				<div>
					<p>Welcome to khanminal</p>
					<p>Ask what you want to know about him</p>
				</div>
			{/if}
			{#if resultArr}
				{#each resultArr as result}
					<article>
						<p>{result}</p>
						<p>{outputCreator(result)}</p>
					</article>
				{/each}
			{/if}
		</div>

		<form on:submit|preventDefault={commandOnSubmit}>
			<input class="inputTag" name="command" bind:value={inputCommand} />
			<button type="submit">입력버튼</button>
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
		padding: 1rem;
	}
	.resultArrWrapper {
		height: 90%;
	}
	.inputTag {
		width: 100%;
		height: 3rem;
	}
</style>
