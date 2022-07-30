<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';

	import HistoryTitleItem from '$components/layout/TitleItem/HistoryTitleItem.svelte';
	import { history } from '$lib/store';
</script>

<h1>History</h1>

{#if $history.length == 0}
	<p style="text-align: center; color: grey">
		You have no recent activites. Start browsing, play songs, and enjoy!
	</p>
{:else}
	<div class="button-container">
		<Button
			class="button"
			on:click={() => {
				$history = [];

				// let historyInLS = localStorage.getItem('history')
				localStorage.setItem('history', JSON.stringify([]));
			}}
			variant="raised"
		>
			<Icon class="material-icons">delete</Icon>
			<Label>Clear</Label>
		</Button>
	</div>

	{#each $history as his (his.id)}
		<HistoryTitleItem {his} />
	{/each}
{/if}

<style>
	.button-container {
		text-align: right;
		margin: 2rem 1rem;
	}
</style>
