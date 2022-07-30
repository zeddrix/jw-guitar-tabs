<script lang="ts">
	import { kingdomStore, originalStore, childrenStore, fetchingSongsStore } from '$lib/store';

	import Carousel from './ResponsiveCarousel.svelte';
	import CarouselCard from './CarouselCard.svelte';
	import CircularProgress from '../CircularProgress.svelte';

	$: newKingdom = $kingdomStore[$kingdomStore.length - 1];
	$: newOriginal = $originalStore[$originalStore.length - 1];
	$: newChildren = $childrenStore[$childrenStore.length - 1];

	$: newSongs = [newKingdom, newOriginal, newChildren];
</script>

<h2>What's New</h2>
{#if !newKingdom || !newOriginal || !newChildren || $fetchingSongsStore}
	<CircularProgress />
{:else}
	<Carousel>
		{#each newSongs as { title, category, officialurl, num } (officialurl)}
			<CarouselCard {title} {num} {category} {officialurl} />
		{/each}
	</Carousel>
{/if}

<style>
	:global(.sc-carousel-arrow__circle) {
		width: 2.5rem !important;
		height: 2.5rem !important;
	}
</style>
