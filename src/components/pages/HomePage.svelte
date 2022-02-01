<script lang="ts">
	import WhatsNewCarousel from '../layout/Carousels/WhatsNewCarousel.svelte';
	import CategoriesCards from '../layout/CategoriesCards.svelte';
</script>

<h1>JW Guitar Tabs</h1>

<WhatsNewCarousel />
<CategoriesCards />

<style>
	h1 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 5rem;
	}

	@media only screen and (min-width: 270px) and (max-width: 1000px) {
		h1 {
			font-size: 2.25rem;
		}
	}
</style>
