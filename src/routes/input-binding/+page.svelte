<script lang="ts">
	import InputComponent from "./inputComponent.svelte";

	// 자식 컴포넌트 타입 지정
	let inputField: InputComponent;
	let focusRef: () => void;
</script>

<!-- 자식 컴포넌트의 함수를 사용하고 싶을 때 -->
<InputComponent bind:focusFunction={focusRef} bind:this={inputField} />

<button on:click={() => inputField.focus()}>focus 하세요</button>

<button on:click={() => focusRef()}>직접 따온 focus focus 하세요</button>
