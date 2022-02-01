<script lang="ts">
	import type { SongType } from '$lib/customTypes';

	export let currentSong: SongType;

	const guitarStrings = ['e', 'B', 'G', 'D', 'A', 'E'];

	const updateTabSet = (oldTabSet: object, blacklist = ['part', 'endMsg']) => {
		// Find a tabLine that is not empty
		const tabLine = Object.entries(oldTabSet).find(([key, tabLine]) => {
			// exclude part & endMsg keys
			return !blacklist.includes(key) && tabLine.trim();
		});

		// Exit if all tabLines are empty
		if (!tabLine) return oldTabSet;

		// Destructure to get value only
		const [_, filledTabLine] = tabLine;

		// Create new line with dashes only
		const newTabLine = filledTabLine.replace(/[^-|]/g, '-');

		// Update tabSet
		for (const gStr in oldTabSet) {
			oldTabSet[gStr] ||= newTabLine;
		}

		return oldTabSet; // newTabSet
	};

	const renderNewTabLine = (oldTabSet: object, gStr: string) => {
		const newTabSet = updateTabSet(oldTabSet);

		return newTabSet[gStr];
	};
</script>

{#if currentSong.tabs.length === 0}
	<!-- <TheDeal /> -->
{:else}
	{#each currentSong.tabs as tab (tab)}
		<div>
			{#if tab.part}
				<p class="tab_part">{tab.part}:</p>
				<!-- <p class="tab_part">{tab.part.toUpperCase()}:</p> -->
			{/if}
			<div class="tabs-set">
				{#each guitarStrings as gStr (gStr)}
					<span class="tab-line">
						{gStr}|{renderNewTabLine(tab, gStr)}|
					</span>
				{/each}
			</div>
			{#if tab.endMsg}
				<p class="tab_endMsg">({tab.endMsg})</p>
				<!-- <p class="tab_endMsg">({tab.endMsg.toUpperCase()})</p> -->
			{/if}
		</div>
	{/each}
{/if}

<style>
	.tabs-set {
		--s: 0.9rem;
		--n: 6;

		font-size: var(--s);
		line-height: calc((var(--n) + 1) * var(--s));
		margin-top: 1rem;
		position: relative;
		overflow: hidden;
		word-break: break-all;
		font-family: 'Courier New', Courier, monospace;
		/* display: inline-block; display: fitGreyBg && isSubscribed ? 'inline-block' : '' */
		/* background: !greyBg && isSubscribed ? 'white' : '#e0e0e0' */
		background: #e0e0e0;
	}

	.tabs-set .tab-line {
		padding: 0.5rem;
		padding-bottom: 0;
		display: block;
		transform: translateY(calc(-1 * var(--n) * var(--s) / 2));
	}
	.tabs-set .tab-line:not(:first-child) {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
	.tabs-set .tab-line:nth-child(2) {
		top: calc(1 * var(--s));
	}
	.tabs-set .tab-line:nth-child(3) {
		top: calc(2 * var(--s));
	}
	.tabs-set .tab-line:nth-child(4) {
		top: calc(3 * var(--s));
	}
	.tabs-set .tab-line:nth-child(5) {
		top: calc(4 * var(--s));
	}
	.tabs-set .tab-line:nth-child(6) {
		top: calc(5 * var(--s));
	}

	.tab_endMsg {
		text-align: center;
	}

	.tab_part {
		margin-top: 1rem !important;
		font-weight: bold;
	}
</style>
