<script lang="ts">
	import { onMount, tick } from "svelte";
	import type { CommandType } from "$/type";
	import { TERMINAL_HISTORY_KEY } from "$/constants";
	import { getLocalStorageItem } from "$/lib/util";

	import {
		historyLengthCutter,
		isValidCommand,
		outputCreator,
		putLocalStorageArr
	} from "./util";
	import { WelcomeMessage, HistoryLine } from "./components";

	let commandArr: CommandType[] | undefined = [];
	let inputCommand: string;
	let inputBind: HTMLElement;

	const commandOnSubmit = async () => {
		putLocalStorageArr({
			command: inputCommand ?? "",
			result: outputCreator(inputCommand)
		});
		if (!commandArr) {
			commandArr = [
				{
					command: inputCommand,
					result: outputCreator(inputCommand)
				}
			];
			inputCommand = "";
			await tick();
			scroll(0, document.body.scrollHeight);
			return;
		}
		const cutArr = historyLengthCutter(commandArr);
		commandArr = [
			...cutArr,
			{ command: inputCommand, result: outputCreator(inputCommand) }
		];
		inputCommand = "";
		await tick();
		window.scrollTo(0, document.body.scrollHeight);
	};

	onMount(async () => {
		let history = getLocalStorageItem(TERMINAL_HISTORY_KEY);
		if (history && history.length > 50) {
			history = historyLengthCutter(history);
		}
		commandArr = history;
		await tick();
		window.scrollTo(0, document.body.scrollHeight);
		inputBind.focus();
	});
</script>

<main class="container">
	<div>
		{#if commandArr === undefined || commandArr.length === 0}
			<WelcomeMessage />
		{/if}
		{#if commandArr}
			{#each commandArr as command}
				<HistoryLine {command} />
			{/each}
		{/if}
		<form
			on:submit|preventDefault={commandOnSubmit}
			autocomplete="off"
			class="formContainer"
		>
			<p class="userInputCommand">khanne-sh :</p>
			<input
				class={`inputTag ${isValidCommand(inputCommand)}`}
				name="command"
				bind:value={inputCommand}
				bind:this={inputBind}
			/>
		</form>
	</div>
</main>

<style>
	.container {
		padding: 1rem;
	}
	.welcomeMessage {
		color: rgb(156, 156, 156);
	}
	.commandWrapper {
		border-bottom: dashed 1.5px #686767;
		padding: 0.5rem 0;
	}
	.commandContainer {
		display: flex;
	}

	.formContainer {
		display: flex;
		padding: 0.5rem 0;
	}
	.userInputCommand {
		color: #57c6fe;
		width: 6rem;
	}
	.commandOutput {
		white-space: pre-wrap;
		color: #f1f0ef;
	}
	.previousInput {
		width: 100%;
	}
	.inputTag {
		width: 100%;
		border: none;
		background-color: transparent;
		caret-color: white;
		padding: 0;
		margin-bottom: 2rem;
	}
	.inputTag:focus {
		outline: none;
	}
	.validInput {
		color: #5af68d;
	}
	.invalidInput {
		color: #fe5b56;
	}
</style>
