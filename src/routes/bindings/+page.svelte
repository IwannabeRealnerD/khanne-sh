<script lang="ts">
	import Heading from '$/lib/common/commonHeading.svelte';

	let inputValue: string = 'hi';
	let numberValue = 0;
	let rangeValue = 0;
</script>

<Heading titleString="일반 인풋 바인드 방법" level={2} />
<input bind:value={inputValue} />
{inputValue}

<Heading titleString="자동 변환되는 타입" level={2} />
<label>
	<input type="number" value={numberValue} min="0" max="10" />
	{typeof numberValue}
	<input type="range" value={rangeValue} min="0" max="10" />
	{typeof rangeValue}
</label>
