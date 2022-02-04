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

{#if $favorites.length == 0}
	<p style="text-align: center; color: grey">
		Your favorite songs will show here. Please add one...
	</p>
{:else}
	{#each $favorites as fav (fav.link)}
		<FavoriteTitleItem {fav} />
	{/each}
{/if}
