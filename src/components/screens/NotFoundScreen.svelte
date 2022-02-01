<script lang="ts">
	import Segment from '../layout/Segment.svelte';

	const message404 = "Oops! The page you're looking for doesn't exist (yet).";
</script>

<Segment>
	<h1>Page Not Found . . .</h1>
	<img src="/img/screens/not-found.gif" alt={message404} />
	<p class="message_404">{message404}</p>
	<a href="/">
		<button class="ui brown basic button">Go Back Home</button>
	</a>
</Segment>

<style>
	.message_404 {
		margin-bottom: 3rem;
	}

	img {
		width: 50%;
	}

	@media only screen and (min-width: 270px) and (max-width: 600px) {
		img {
			width: 100%;
		}
	}

	@media only screen and (min-width: 601px) and (max-width: 800px) {
		img {
			width: 80%;
		}
	}
</style>
