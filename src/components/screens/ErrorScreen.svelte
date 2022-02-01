<script lang="ts">
	import Segment from '../layout/Segment.svelte';

	export let message = 'Something went wrong...';
</script>

<Segment>
	<h1 class="error_color">Something Went Wrong...</h1>
	<img
		src="/img/screens/sad-face.png"
		alt="Sad face icon because something when wrong"
		height={200}
		width={200}
	/>
	<h3 class="description">Description: {message}</h3>
	<p class="error_color">So sorry for the inconvenience. Please check in later...</p>
</Segment>

<style>
	.error_color {
		color: var(--error_color);
	}

	.description {
		margin-top: 5rem;
		color: var(--error_color);
	}
</style>
