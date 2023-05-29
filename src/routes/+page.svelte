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

	let commandArr: CommandType[] | undefined = [];
	let inputCommand: string;
	let scrollBind: HTMLElement;

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
		scrollBind.scrollTop = scrollBind.scrollHeight;
	};

	onMount(async () => {
		let history = getLocalStorageItem(TERMINAL_HISTORY_KEY);
		if (history && history.length > 50) {
			history = historyLengthCutter(history);
		}
		commandArr = history;
		await tick();
		scrollBind.scrollTop = scrollBind.scrollHeight;
	});
</script>

<main class="container">
	<div class="commandArrWrapper" bind:this={scrollBind}>
		{#if commandArr === undefined || commandArr.length === 0}
			<article class="commandWrapper">
				<p class="welcomeMessage">Welcome to khanne-sh</p>
				<p class="welcomeMessage">Ask what you want to know about him</p>
			</article>
		{/if}
		{#if commandArr}
			{#each commandArr as command}
				<article class="commandWrapper">
					<div class="commandContainer">
						<p class="userInputCommand">khanne-sh :</p>
						<p class={`inputTag ${isValidCommand(command.command)}`}>
							{command.command}
						</p>
					</div>
					<p class="commandOutput">{command.result}</p>
				</article>
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
				autofocus
			/>
		</form>
	</div>
</main>

<style>
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #282935;
		padding: 1rem;
	}
	.commandArrWrapper {
		overflow: scroll;
	}
	.welcomeMessage {
		color: #57c6fe;
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
	.inputTag {
		width: 100%;
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
