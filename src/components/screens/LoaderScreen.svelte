<script>
	import { base } from '$app/paths';
</script>

<div class="loader_container">
	<img
		src="{base}/img/screens/loader.gif"
		alt="Loading. . ."
		height={175}
		width={250}
		class="loader"
	/>
</div>

<style>
	.loader_container {
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader {
		width: 16rem;
		height: 12rem;
		display: block;
	}
</style>
