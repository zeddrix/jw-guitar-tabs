<script lang="ts">
	import CircularProgress from '@smui/circular-progress';
</script>

<div class="container">
	<CircularProgress style="height: 5rem; width: 5rem;" indeterminate />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		padding: 12rem 0;
	}

	@media only screen and (min-width: 270px) and (max-width: 600px) {
		.container {
			padding: 5rem 0;
		}
	}
</style>
