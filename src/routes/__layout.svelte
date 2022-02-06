<script lang="ts">
	import { onMount } from 'svelte';
	import { v4 as uuid } from 'uuid';

	import { page } from '$app/stores';

	import type { SongCategoriesType } from '$lib/customTypes';
	import {
		kingdomStore,
		originalStore,
		childrenStore,
		fetchingSongsStore,
		history
	} from '$lib/store';
	import { get1stPath, get2ndPath, get3rdPath, sortSongs } from '$utils/helperFunctions';
	import calculateSongsCount from '$utils/calculateSongsCount';
	import {
		createChildrenSongsWithCat,
		createKingdomSongsWithCat,
		createOriginalSongsWithCat
	} from '$utils/createSongsWithCat';

	import kingdomSongs from './data/kingdomSongs.json';
	import originalSongs from './data/originalSongs.json';
	import childrenSongs from './data/childrenSongs.json';

	import Layout from '$components/layout/Layout/Layout.svelte';

	const kingdomsCount = calculateSongsCount('kingdom');

	const getData = async (category: SongCategoriesType) => {
		fetchingSongsStore.set(true);

		const kingdom = category === 'kingdom';
		const original = category === 'original';

		if (kingdom) {
			// don't mind the red lines
			const kingdomsongs = sortSongs(kingdomSongs);
			const kingdomsongsWithCat = createKingdomSongsWithCat(kingdomsongs.slice(0, kingdomsCount));
			kingdomStore.set(kingdomsongsWithCat);
		} else if (original) {
			const originalsongs = sortSongs(originalSongs);
			const originalsongsWithCat = createOriginalSongsWithCat(originalsongs);
			originalStore.set(originalsongsWithCat);
		} else {
			const childrensongs = sortSongs(childrenSongs);
			const childrensongsWithCat = createChildrenSongsWithCat(childrensongs);
			childrenStore.set(childrensongsWithCat);
		}

		fetchingSongsStore.set(false);

		// Don't need to store in LS for the moment
		// const songData = kingdom ? $kingdomStore : original ? $originalStore : $childrenStore;
		// localStorage.setItem(`${category}songs`, JSON.stringify(songData));
	};

	onMount(async () => {
		getData('kingdom');
		getData('original');
		getData('children');

		const historyFromLS = localStorage.getItem('history');
		if (historyFromLS) {
			const parsedHistory = await JSON.parse(historyFromLS);
			history.set(parsedHistory);
		}
	});

	$: songs = [...$kingdomStore, ...$originalStore, ...$childrenStore];

	$: url = $page.url.pathname;

	$: if (url) {
		let firstPath = get1stPath(url);

		if (firstPath === 'categories') {
			let urlCategory = get2ndPath(url);
			let thirdPath = get3rdPath(url);

			const kingdom = urlCategory === 'kingdom-songs';

			let category =
				urlCategory === 'kingdom-songs'
					? 'Kingdom Songs'
					: urlCategory === 'original-songs'
					? 'Original Songs'
					: "Children's Songs";

			let song = songs.find(
				(song) => `${!kingdom ? song.num + '-' : ''}${song.officialurl}-guitar-tabs` == thirdPath
			);

			if (song && category && url) {
				const newHis = {
					dateTime: new Date().toLocaleString(),
					title: kingdom ? `Song ${song.num}: ${song.title}` : song.title,
					category,
					link: url,
					id: uuid()
				};

				$history.push(newHis);

				localStorage.setItem('history', JSON.stringify($history));
			}
		}
	}

	$: console.log('$history.length', $history.length);
</script>

<Layout><slot /></Layout>
