<script lang="ts">
	import CookiesBanner from '../CookiesBanner/CookiesBanner.svelte';
	import Appbar from '../Appbar/Appbar.svelte';
	import Footer from '../Footer.svelte';

	import './Layout.css';
	import Snackbar from '../Snackbar.svelte';
</script>

<CookiesBanner />
<Appbar />
<div class="main">
	<slot />
</div>
<Snackbar />
<Footer />

<style>
	.main {
		margin-top: 1rem !important;
		max-width: 75vw;
		margin: auto;
		/* min-height: 80vh; */
		min-height: 80vh;
	}
	@media only screen and (min-width: 270px) and (max-width: 1000px) {
		.main {
			min-width: 90vw;
		}
	}
	:global(.mdc-snackbar__surface) {
		background: white !important;
	}
	:global(.mdc-snackbar__label) {
		color: black !important;
	}
	:global(.mdc-snackbar__dismiss) {
		color: black !important;
	}
</style>
