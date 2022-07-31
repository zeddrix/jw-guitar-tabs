<script lang="ts">
	import ClearAllButton from '$components/layout/ClearAllButton.svelte';

	import FavoriteTitleItem from '$components/layout/TitleItem/FavoriteTitleItem.svelte';
	import { favorites } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		const favoritesFromLS = JSON.parse(localStorage.getItem('favorites'));
		if (favoritesFromLS) {
			favorites.set(favoritesFromLS);
		}
	});

	const clearFavorites = () => {
		$favorites = [];
		localStorage.setItem('favorites', JSON.stringify([]));
	};
</script>

<h1>Favorites</h1>

{#if $favorites.length == 0}
	<p style="text-align: center; color: grey">
		Your favorite songs will show here. Please add one...
	</p>
{:else}
	<ClearAllButton func={clearFavorites} />

	{#each $favorites as fav (fav.link)}
		<FavoriteTitleItem {fav} />
	{/each}
{/if}
