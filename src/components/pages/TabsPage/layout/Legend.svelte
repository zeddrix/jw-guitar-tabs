<script lang="ts">
	import type { SongType } from '$lib/customTypes';

	export let currentSong: SongType;

	const { legend } = currentSong;
</script>

{#if legend && legend.length !== 0}
	<b>Legend:</b>
	{#each legend as l (l)}
		<p class="legend">
			{l === 'h'
				? 'h - hammer-on'
				: l === 'p'
				? 'p - pull-off'
				: l === '\\'
				? '\\ - slide down'
				: l === '/'
				? '/ - slide up'
				: l === '~'
				? '~ - let note ring'
				: l === '(n)'
				? '(n) - ghost/optional note(s)'
				: l === '<n>'
				? '<n> - harmonic on nth fret'
				: l === 'x'
				? 'x - muted note'
				: ''}
		</p>
	{/each}
{/if}

<style>
	.legend {
		margin: 0;
	}
</style>
