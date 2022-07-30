<script lang="ts">
	import type { SongCategoriesType } from '$lib/customTypes';

	export let category: SongCategoriesType;

	import { page } from '$app/stores';
	import { childrenStore, kingdomStore, originalStore, headTitleStore } from '$lib/store';

	import NavSong from './layout/NavSong.svelte';
	import OfficialSongLink from './layout/OfficialSongLink.svelte';
	import Capo from './layout/Capo.svelte';
	import Repeat from './layout/Repeat.svelte';
	import Legend from './layout/Legend.svelte';
	import TabSet from './layout/TabSet.svelte';
	import LoaderScreen from '$components/screens/LoaderScreen.svelte';
	import validateSongId from '$utils/validateSongId';
	import NotFoundScreen from '$components/screens/NotFoundScreen.svelte';

	const kingdom = category === 'kingdom';
	const original = category === 'original';

	$: songs = kingdom ? $kingdomStore : original ? $originalStore : $childrenStore;

	$: id = $page.params.songId;
	$: songId = parseInt(id);
	$: songIdIsNumber = Number(id);

	$: prevSong = songs[songId - 2];
	$: currentSong = songs[songId - 1];
	$: nextSong = songs[songId];

	$: songsLoaded = songs.length !== 0;

	$: validSongId = validateSongId(songId, songs.length);

	let headTitle: string;
	$: if (!songsLoaded) {
		headTitleStore.set('Loading');
	} else if (!validSongId) {
		headTitleStore.set('404—Page Not Found');
	} else if (songsLoaded && validSongId) {
		headTitle = currentSong.title;

		if (kingdom) {
			headTitle = `Song ${currentSong.num}: ${currentSong.title}`;
		}

		headTitleStore.set(headTitle);
	}
</script>

{#if !songsLoaded}
	<LoaderScreen />
{:else if !validSongId}
	<NotFoundScreen />
{:else if songsLoaded && validSongId}
	<h1>
		{headTitle}
		<!-- The song title is the same as the title inside the <head><title></title></head> tag -->
	</h1>
	<div class="tab-page_container">
		{#if prevSong}
			<NavSong {prevSong} {category} />
		{/if}
		<OfficialSongLink officialurl={currentSong.officialurl} {category} />

		<Capo {currentSong} />

		<Repeat {currentSong} />

		<Legend {currentSong} />

		<TabSet {currentSong} />

		{#if nextSong}
			<NavSong {nextSong} {category} />
		{/if}
	</div>
{/if}

<style>
	.tab-page_container {
		margin-top: 3.5rem;
		margin-bottom: 5rem;
	}
</style>
