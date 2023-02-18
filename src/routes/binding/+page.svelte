<script lang="ts">
	import Heading from "$/lib/common/commonHeading.svelte";

	let menuArr = ["Cookies and cream", "Mint choc chip", "Raspberry ripple"];

	let inputValue: string = "hi";
	let numberValue = 0;
	let rangeValue = 0;

	let checkedValue = true;
	let multipleValue = menuArr[0];

	let radioValue = false;

	let textAreaValue = "text area";
	let selectedValue = menuArr[0];
</script>

<section class="wrapper">
	<Heading titleString="text input" level={2} />
	<input bind:value={inputValue} />
	<p>value : {inputValue}</p>
	<p>type : {typeof inputValue}</p>
</section>

<section class="wrapper">
	<Heading titleString="number input" level={2} />
	<input type="number" bind:value={numberValue} min="0" max="10" />
	<p>value : {numberValue}</p>
	<p>type : {typeof numberValue}</p>
	<input type="range" bind:value={rangeValue} min="0" max="10" />
	<p>value : {rangeValue}</p>
	<p>type : {typeof rangeValue}</p>
</section>

<section class="wrapper">
	<Heading titleString="checkbox single" level={2} />
	<input type="checkbox" bind:checked={checkedValue} />
	<p>value : {checkedValue}</p>
	<p>type : {typeof checkedValue}</p>
</section>

<section class="wrapper">
	<Heading titleString="checkbox multiple" level={2} />
	{#each menuArr as flavour}
		<label>
			<input type="checkbox" bind:group={multipleValue} name="multipleValue" value={flavour} />
			{flavour}
		</label>
	{/each}
	<p>value : {multipleValue}</p>
	<p>type : {typeof multipleValue}</p>
</section>

<section class="wrapper">
	<Heading titleString="radio button" level={2} />
	<label>
		<input type="radio" bind:group={radioValue} name="multipleValue" value={true} />
		true 체크
	</label>
	<label>
		<input type="radio" bind:group={radioValue} name="multipleValue" value={false} />
		false 체크
	</label>
	<p>value : {radioValue}</p>
	<p>type : {typeof radioValue}</p>
</section>

<section class="wrapper">
	<Heading titleString="text area" level={2} />

	<input type="textarea" bind:value={textAreaValue} name="multipleValue" />
	<p>value : {textAreaValue}</p>
	<p>type : {typeof textAreaValue}</p>
</section>

<section class="wrapper">
	<Heading titleString="select input" level={2} />
	<select bind:value={selectedValue}
		>{#each menuArr as menu}<option value={menu}>{menu}</option>{/each}</select
	>
	<p>value : {selectedValue}</p>
	<p>type : {typeof selectedValue}</p>
</section>

<style>
	.wrapper {
		display: flex;
		margin-bottom: 2rem;
		flex-direction: column;
		align-items: flex-start;
		background-color: beige;
		gap: 0.5rem 0;
		padding: 1rem;
	}
</style>
