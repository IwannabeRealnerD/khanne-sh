<script lang="ts">
	import { onMount, tick } from "svelte";
	import type { CommandType } from "$/type";
	import { getLocalStorageItem } from "$/lib/util";

	import { outputCreator, putLocalStorageArr } from "./util";
	import { COMMAND_OBJ } from "./constant";

	let comandArr: CommandType[] | undefined = [];
	let inputCommand: string;
	let scrollBind: HTMLElement;
	let isValidCommand = (userInputCommand?: string) => {
		for (const value of Object.values(COMMAND_OBJ)) {
			if (value === userInputCommand) {
				return "validInputCommand";
			}
		}
		return "invalidInputCommand";
	};

	const commandOnSubmit = async () => {
		if (comandArr === null) return;
		putLocalStorageArr({
			command: inputCommand,
			result: outputCreator(inputCommand)
		});
		if (!comandArr) {
			comandArr = [
				{
					command: inputCommand,
					result: outputCreator(inputCommand)
				}
			];
			window.scrollTo(0, document.body.scrollHeight);
			inputCommand = "";
			await tick();
			scroll(0, document.body.scrollHeight);
			return;
		}
		comandArr = [
			...comandArr,
			{ command: inputCommand, result: outputCreator(inputCommand) }
		];
		inputCommand = "";
		await tick();
		scrollBind.scrollTop = scrollBind.scrollHeight;
	};

	onMount(async () => {
		const history = getLocalStorageItem("COMMAND");
		comandArr = history;
		await tick();
		scrollBind.scrollTop = scrollBind.scrollHeight;
	});
</script>

<main class="container">
	<div class="commandArrWrapper" bind:this={scrollBind}>
		{#if comandArr === undefined}
			<div>
				<p>Welcome to khanne-sh</p>
				<p>Ask what you want to know about him</p>
			</div>
		{/if}
		{#if comandArr}
			{#each comandArr as command}
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
