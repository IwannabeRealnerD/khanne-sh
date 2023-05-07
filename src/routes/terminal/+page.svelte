<script lang="ts">
	import { onMount, tick } from "svelte";
	import type { CommandType } from "$/type";
	import { getLocalStorageItem, setLocalStorageItem } from "$/lib/util";

	import PageLayout from "$/lib/global/pageLayout.svelte";

	import { outputCreator, putLocalStorageArr } from "./util";
	import { COMMAND_OBJ } from "./constant";

	let comandArr: CommandType[] | undefined = [];
	let inputCommand: string;
	let isValidCommand = (userInputCommand: string) => {
		for (const value of Object.values(COMMAND_OBJ)) {
			if (value === userInputCommand) {
				return "validInputCommand";
			}
		}
		return "invalidInputCommand";
	};

	const commandOnSubmit = async () => {
		if (comandArr === null) return;
		putLocalStorageArr(inputCommand);
		if (!comandArr) {
			comandArr = [inputCommand];
			window.scrollTo(0, document.body.scrollHeight);
			setTimeout(() => {
				scroll(0, document.body.scrollHeight);
			}, 50);
			await tick();
			scroll(0, document.body.scrollHeight);
			return;
		}
		comandArr = [...comandArr, inputCommand];
		inputCommand = "";
		// scroll(0, document.body.scrollHeight);
		await tick();
		window.scrollTo(100, document.body.scrollHeight);
		// setTimeout(() => {
		// 	scroll(0, document.body.scrollHeight);
		// }, 1);
	};

	onMount(() => {
		const history = getLocalStorageItem("COMMAND");
		comandArr = history;
	});
</script>

<PageLayout>
	<main class="container">
		<div class="commandArrWrapper">
			{#if comandArr === undefined}
				<div>
					<p>Welcome to khanne-sh</p>
					<p>Ask what you want to know about him</p>
				</div>
			{/if}
			{#if comandArr}
				{#each comandArr as command}
					<article class="commandWrapper">
						<p class="userInputCommand">khanne-sh :</p>
						{command}
						<p class="commandOutput">{outputCreator(command)}</p>
					</article>
				{/each}
			{/if}
			<form on:submit|preventDefault={commandOnSubmit} autocomplete="off">
				<input
					class={`inputTag ${isValidCommand(inputCommand)}`}
					name="command"
					bind:value={inputCommand}
					autofocus
				/>
			</form>
		</div>
	</main>
</PageLayout>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #282935;
		padding: 1rem;
	}
	.commandArrWrapper {
		overflow: scroll;
	}
	.commandWrapper {
		border-bottom: dashed 1.5px #686767;
		padding: 0.5rem 0;
	}
	.userInputCommand {
		color: #57c6fe;
	}
	.commandOutput {
		white-space: pre-wrap;
		color: #f1f0ef;
	}
	.inputTag {
		width: 100%;
		height: 3rem;
		border: none;
		background-color: transparent;
		caret-color: white;
		padding: 0;
	}
	.inputTag:focus {
		outline: none;
	}
	.validInputCommand {
		color: #5af68d;
	}
	.invalidInputCommand {
		color: #fe5b56;
	}
</style>
