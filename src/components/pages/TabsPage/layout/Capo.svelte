<script lang="ts">
	import type { SongType } from '$lib/customTypes';

	export let currentSong: SongType;
</script>

<p>
	<b>Capo: </b>
	{!currentSong.capo ? 'Not needed' : `${currentSong.capo} fret`}
</p>
