<script lang="ts">
	import { history } from '$lib/store';
	import HistoryTitleItem from '$components/layout/TitleItem/HistoryTitleItem.svelte';
	import ClearAllButton from '$components/layout/ClearAllButton.svelte';

	const clearHistory = () => {
		$history = [];
		localStorage.setItem('history', JSON.stringify([]));
	};
</script>

<h1>History</h1>

{#if $history.length == 0}
	<p style="text-align: center; color: grey">
		You have no recent activites. Start browsing, play songs, and enjoy!
	</p>
{:else}
	<ClearAllButton func={clearHistory} />

	{#each $history as his (his.id)}
		<HistoryTitleItem {his} />
	{/each}
{/if}
