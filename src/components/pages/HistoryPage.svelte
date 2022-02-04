<script lang="ts">
	let history = [];
</script>

<h1>History</h1>

{#if history.length == 0}
	<p style="text-align: center; color: grey">
		You have no recent activites. Start browsing, play songs, and enjoy!
	</p>
{:else}
	{#each history as his (his.link)}
		<!-- <HistoryTitleItem {his} /> -->
	{/each}
{/if}
