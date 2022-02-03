<script lang="ts">
	import { onMount } from 'svelte';

	import { base } from '$app/paths';
	import type { SongCategoriesType } from '$lib/customTypes';
	import { kingdomStore, originalStore, childrenStore, fetchingSongsStore } from '$lib/store';
	import { sortSongs } from '$utils/helperFunctions';
	import calculateSongsCount from '$utils/calculateSongsCount';
	import {
		createChildrenSongsWithCat,
		createKingdomSongsWithCat,
		createOriginalSongsWithCat
	} from '$utils/createSongsWithCat';

	import Layout from '$components/layout/Layout/Layout.svelte';

	const kingdomsCount = calculateSongsCount('kingdom');

	const fetchFromDBAndStore = async (category: SongCategoriesType) => {
		fetchingSongsStore.set(true);

		const res = await fetch(`${base}/api/categories/${category}-songs`);
		// const res = await fetch(`${base}/categories/${category}-songs`);
		// const res = await fetch(`/api/categories/${category}-songs`);
		const data = await res.json();

		if (!res.ok) {
			const errMsg = `Something went wrong with loading the ${category} songs and responded with the status ${res.status}`;
			console.error(errMsg);
			throw new Error(errMsg);
		}

		const kingdom = category === 'kingdom';
		const original = category === 'original';

		if (kingdom) {
			const kingdomsongs = sortSongs(data.kingdomsongs);
			const kingdomsongsWithCat = createKingdomSongsWithCat(kingdomsongs.slice(0, kingdomsCount));
			kingdomStore.set(kingdomsongsWithCat);
		} else if (original) {
			const originalsongs = sortSongs(data.originalsongs);
			const originalsongsWithCat = createOriginalSongsWithCat(originalsongs);
			originalStore.set(originalsongsWithCat);
		} else {
			const childrensongs = sortSongs(data.childrensongs);
			const childrensongsWithCat = createChildrenSongsWithCat(childrensongs);
			childrenStore.set(childrensongsWithCat);
		}

		fetchingSongsStore.set(false);

		const songData = kingdom ? $kingdomStore : original ? $originalStore : $childrenStore;

		localStorage.setItem(`${category}songs`, JSON.stringify(songData));
	};

	const getSongs = async (category: SongCategoriesType) => {
		const kingdom = category === 'kingdom';
		const original = category === 'original';

		const songsFromLS = localStorage.getItem(`${category}songs`);

		if (!songsFromLS) {
			await fetchFromDBAndStore(category);
		} else {
			const parsedSongsData = await JSON.parse(songsFromLS);

			if (kingdom) {
				// const updatedKingdomsCount = JSON.parse(localStorage.getItem('kingdomsongs')).length;
				// if (kingdomsCount !== updatedKingdomsCount) {
				// 	await fetchFromDBAndStore('kingdom');
				// }

				const kingdomsongs = sortSongs(parsedSongsData);

				const kingdomsongsWithCat = await createKingdomSongsWithCat(
					kingdomsongs.slice(0, kingdomsCount)
				);

				kingdomStore.set(kingdomsongsWithCat);
			} else if (original) {
				const originalsongs = sortSongs(parsedSongsData);

				const originalsongsWithCat = await createOriginalSongsWithCat(originalsongs);

				originalStore.set(originalsongsWithCat);
			} else {
				const childrensongs = sortSongs(parsedSongsData);

				const childrensongsWithCat = await createChildrenSongsWithCat(childrensongs);

				childrenStore.set(childrensongsWithCat);
			}
		}
	};

	onMount(async () => {
		getSongs('kingdom');
		getSongs('original');
		getSongs('children');
	});
</script>

<Layout><slot /></Layout>
