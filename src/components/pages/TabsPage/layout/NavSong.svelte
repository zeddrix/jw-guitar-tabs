<script lang="ts">
	import type { SongCategoriesType } from '$lib/customTypes';

	export let prevSong = null || undefined;
	export let nextSong = null || undefined;
	export let category: SongCategoriesType;

	$: song = nextSong ? nextSong : prevSong;
	$: nav = nextSong ? 'Next' : 'Previous';

	$: kingdom = category === 'kingdom';

	$: songTitle = kingdom ? `Song ${song.num}: ${song.title}` : song.title;
	$: songIdUrl = !kingdom ? `${song.num}-` : '';
	$: link = `/categories/${category}-songs/${songIdUrl}${song.officialurl}-guitar-tabs`;
</script>

{#if !song}
	<!-- don't show anything -->
{:else}
	<h2>
		{nav} Song:
		<a href={link}>
			<em>{songTitle}</em>
		</a>
	</h2>
{/if}
