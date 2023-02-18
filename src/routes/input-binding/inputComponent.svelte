<script lang="ts">
	let inputRef: HTMLInputElement;
	export function focusFunction() {
		inputRef.focus();
	}
</script>

<input type="text" bind:this={inputRef} />
