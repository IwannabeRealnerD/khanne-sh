<script>
	export let arr = ['this is default props', 'this is default props', 'this is default props']; // props 기본값 설정
</script>

<div class="buttonContainer">
	{#each arr as element, i (`${element}+${i}`)}
		<button
			on:click={() => {
				alert(element);
			}}>{element}</button
		>
	{/each}
</div>

<style>
	.buttonContainer {
		display: flex;
		gap: 0 1rem;
	}
</style>
