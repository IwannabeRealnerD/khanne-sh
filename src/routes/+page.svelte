<script lang="ts">
	import { onMount, tick } from "svelte";
	import type { CommandType } from "$lib/types/storage";
	import { TERMINAL_HISTORY_KEY } from "$lib/constants/localStorageKey";
	import { getLocalStorageItem } from "$lib/utils/storage";

	import {
		clearStorageArr,
		findAvailableCommand,
		historyLengthCutter,
		isValidCommand,
		outputCreator,
		putLocalStorageArr
	} from "./util";
	import { WelcomeMessage, HistoryLine, AutoComplete } from "./components";
	import type { ChangeCommandEvent } from "./type";
	import { COMMANDS } from "./constant";

	let commandArr: CommandType[] | undefined = [];
	let inputCommand = "";
	let inputBind: HTMLElement;

	const commandOnSubmit = async () => {
		if (inputCommand == "clear") {
			commandArr = [];
			inputCommand = "";
			clearStorageArr();
			return;
		}
		const commandObject = {
			command: inputCommand,
			result: outputCreator(inputCommand)
		};
		putLocalStorageArr(commandObject);
		if (!commandArr) {
			commandArr = [commandObject];
			inputCommand = "";
			await tick();
			scroll(0, document.body.scrollHeight);
			return;
		}
		const cutArr = historyLengthCutter(commandArr);
		commandArr = [...cutArr, commandObject];
		inputCommand = "";
		await tick();
		window.scrollTo(0, document.body.scrollHeight);
	};

	const changeCommandHandler = (
		changeCommandEvent: CustomEvent<ChangeCommandEvent>
	) => {
		inputCommand = changeCommandEvent.detail.command;
	};

	$: availableCommands = findAvailableCommand(inputCommand);
	$: isWholeCommand = Object.values(COMMANDS).find(
		(value) => value === inputCommand
	);

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
			{#if availableCommands.length !== 0 && !isWholeCommand}
				<AutoComplete
					on:commandChange={changeCommandHandler}
					currentInput={inputCommand}
					{availableCommands}
				/>
			{/if}
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
	.formContainer {
		display: flex;
		padding: 0.5rem 0;
		position: relative;
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
