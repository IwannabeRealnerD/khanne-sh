<script lang="ts">
	import { onMount } from "svelte";

	import CommonHeading from "$/lib/common/commonHeading.svelte";

	let isRendered: boolean;
	onMount(() => {
		isRendered = true;
	});
</script>

<CommonHeading level={2} titleString="lifeCycle" />
{isRendered}
