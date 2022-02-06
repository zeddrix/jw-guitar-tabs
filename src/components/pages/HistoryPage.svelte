<script lang="ts">
	import HistoryTitleItem from '$components/layout/TitleItem/HistoryTitleItem.svelte';
	import { history } from '$lib/store';
</script>

<h1>History</h1>

{#if $history.length == 0}
	<p style="text-align: center; color: grey">
		You have no recent activites. Start browsing, play songs, and enjoy!
	</p>
{:else}
	{#each $history as his (his.id)}
		<HistoryTitleItem {his} />
	{/each}
{/if}
