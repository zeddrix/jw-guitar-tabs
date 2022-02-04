<script lang="ts">
	import { childrenStore, kingdomStore, originalStore } from '$lib/store';
	import addSForChildrenCat from '$utils/addSForChildrenCat';

	import type { SongCategoriesType } from '$lib/customTypes';
	import TitleItem from '$components/layout/TitleItem/TitleItem.svelte';
	import LoaderScreen from '$components/screens/LoaderScreen.svelte';

	export let category: SongCategoriesType;

	const kingdom = category === 'kingdom';
	const original = category === 'original';

	$: songs = kingdom ? $kingdomStore : original ? $originalStore : $childrenStore;
</script>

<h1>{addSForChildrenCat(category)} Songs</h1>

{#if songs.length === 0}
	<LoaderScreen />
{:else}
	<div class="ui celled list">
		{#each songs as song (song.num + song.officialurl)}
			<TitleItem {song} />
		{/each}
	</div>
{/if}

<style>
	h1 {
		margin-bottom: 3rem;
	}
</style>
