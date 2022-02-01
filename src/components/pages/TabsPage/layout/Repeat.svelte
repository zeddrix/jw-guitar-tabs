<script lang="ts">
	import type { SongType } from '$lib/customTypes';

	export let currentSong: SongType;
</script>

{#if currentSong.repeat}
	<p>
		<b>Repeat: </b>
		{currentSong.repeat}x
	</p>
{/if}
