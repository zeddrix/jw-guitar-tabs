<script lang="ts">
	import FavoriteTitleItem from '$components/layout/TitleItem/FavoriteTitleItem.svelte';
	import { favorites } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		const favoritesFromLS = JSON.parse(localStorage.getItem('favorites'));
		if (favoritesFromLS) {
			favorites.set(favoritesFromLS);
		}
	});
</script>

<h1>Favorites</h1>

{#if $favorites}
	{#each $favorites as fav (fav.link)}
		<FavoriteTitleItem {fav} />
	{/each}
{/if}
