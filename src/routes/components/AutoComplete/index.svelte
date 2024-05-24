<script lang="ts">
	import clsx from "clsx";
	import { onDestroy, onMount, tick, createEventDispatcher } from "svelte";

	import { findNextIndex, findPreviousIndex } from "./util";
	import type { ChangeCommandEvent } from "../../type";

	const dispatch = createEventDispatcher<{
		commandChange: ChangeCommandEvent;
	}>();

	export let currentInput: string;
	export let availableCommands: string[];

	let pElement: HTMLElement;
	let focusIndex = 0;
	$: isWholeCommand = availableCommands[focusIndex] === currentInput;

	const onDownArrowDown = (KeyboardDownEvent: KeyboardEvent) => {
		if (KeyboardDownEvent.code === "Enter" && isWholeCommand) {
			return;
		}

		if (KeyboardDownEvent.code === "ArrowDown") {
			KeyboardDownEvent.preventDefault();
			focusIndex = findNextIndex(availableCommands, focusIndex);
			return;
		}
		if (KeyboardDownEvent.code === "ArrowUp") {
			KeyboardDownEvent.preventDefault();
			focusIndex = findPreviousIndex(availableCommands, focusIndex);
			return;
		}
		if (KeyboardDownEvent.code === "Enter") {
			KeyboardDownEvent.preventDefault();
			const selectedCommand = availableCommands[focusIndex];
			dispatch("commandChange", {
				command: selectedCommand
			});
			return;
		}
	};
	onMount(() => {
		window.addEventListener("keydown", onDownArrowDown);
	});
	onDestroy(() => {
		window.removeEventListener("keydown", onDownArrowDown);
	});

	$: leftMargin = 0;
	$: if (currentInput) {
		tick().then(() => {
			leftMargin = pElement?.offsetWidth || 0;
		});
	}
</script>

<article style="margin-left: {leftMargin}px" class="wrapper">
	<!-- {#if !isWholeCommand} -->
	<ul>
		{#each availableCommands as command, index (command)}<li>
				<button
					class={clsx("suggestionContainer", {
						activeSuggestion: index === focusIndex
					})}
					on:click={() => {
						focusIndex = index;
					}}>{command}</button
				>
			</li>{/each}
	</ul>
	<!-- {/if} -->
	<p bind:this={pElement} class="forCurrentInputSize" aria-hidden>
		{currentInput}
	</p>
</article>

<style>
	.wrapper {
		background-color: ivory;
		position: absolute;
		top: 50%;
		left: 5.5rem;
		min-width: 8rem;
	}
	.suggestionContainer {
		padding: 0.3rem;
	}
	.activeSuggestion {
		background-color: blue;
		color: white;
		width: 100%;
		text-align: start;
	}
	.forCurrentInputSize {
		visibility: hidden;
		position: absolute;
	}
</style>
