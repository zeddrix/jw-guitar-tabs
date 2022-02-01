<script lang="ts">
	import './Search.css';
	import { goto } from '$app/navigation';
	import Typeahead from 'svelte-typeahead';

	import type { SearchResultType, SongType } from '$lib/customTypes';
	import { childrenStore, kingdomStore, originalStore, searchResultStore } from '$lib/store';

	$: songs = [...$kingdomStore, ...$originalStore, ...$childrenStore];

	const extract = (song: SongType) => {
		const { title, category, num } = song;

		if (category === 'kingdom') {
			return `Song ${num}: ${title}`;
		} else {
			return title;
		}
	};

	let value: string;

	const goToResultLink = (result: SongType) => {
		const { category, officialurl, num } = result;

		const songId = category === 'kingdom' ? officialurl : `${num}-${officialurl}`;

		goto(`/categories/${category}-songs/${songId}`);

		value = '';
	};

	const goToResultByClick = (result: SearchResultType) => goToResultLink(result.original);

	const goToResultByEnter = async (result: SearchResultType) => {
		if (result.score === Infinity && event.key === 'Enter') {
			searchResultStore.set(result.original);

			goToResultLink($searchResultStore);
		} else {
			return;
		}
	};

	const showFullCategory = (result: SearchResultType) => {
		const { category } = result.original;

		const songCategory =
			category === 'kingdom'
				? 'Kingdom Songs'
				: category === 'original'
				? 'Original Songs'
				: "Children's Songs";

		return songCategory;
	};
</script>

{#if songs.length === 0}
	<!-- none -->
{:else}
	<Typeahead
		bind:value
		limit={5}
		data={songs}
		{extract}
		placeholder="Enter Song Number/Title"
		let:result
	>
		<input style="display: none;" onload={goToResultByEnter(result)} />
		<svelte:fragment slot="no-results">
			<p class="no_results">No results found.</p>
		</svelte:fragment>
		<p on:click={goToResultByClick(result)} class="content">
			<span class="title">{@html result.string}</span>
			<span class="category">{@html showFullCategory(result)}</span>
		</p>
	</Typeahead>
{/if}
