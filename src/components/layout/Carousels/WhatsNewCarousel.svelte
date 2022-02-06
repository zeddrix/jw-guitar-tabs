<script lang="ts">
	import { kingdomStore, originalStore, childrenStore, fetchingSongsStore } from '$lib/store';

	import Carousel from './ResponsiveCarousel.svelte';
	import CarouselCard from './CarouselCard.svelte';

	$: newKingdom = $kingdomStore[$kingdomStore.length - 1];
	$: newOriginal = $originalStore[$originalStore.length - 1];
	$: newChildren = $childrenStore[$childrenStore.length - 1];

	$: newSongs = [newKingdom, newOriginal, newChildren];
</script>

{#if !newKingdom || !newOriginal || !newChildren || $fetchingSongsStore}
	<!-- Render nothing -->
{:else}
	<h2>What's New</h2>

	<Carousel>
		{#each newSongs as { title, category, officialurl, num } (officialurl)}
			<CarouselCard {title} {num} {category} {officialurl} />
		{/each}
	</Carousel>
{/if}
