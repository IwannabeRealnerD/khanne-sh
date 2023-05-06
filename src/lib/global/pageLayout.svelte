<script lang="ts">
</script>

<div class="container">
	<div class="innerContainer">
		<slot />
	</div>
</div>

<style>
	.container {
		background-color: pink;
		display: flex;
		justify-content: center;
	}
	.innerContainer {
		background-color: red;
		width: 100%;
		max-width: 1080px;
	}
</style>
