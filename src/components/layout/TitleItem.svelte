<script lang="ts">
	import type { SongType } from '$lib/customTypes';

	import { createLink } from '$utils/helperFunctions';

	export let song: SongType;

	const { title, officialurl, category, num } = song;

	const kingdom = category === 'kingdom';

	const songTitle = kingdom ? `Song ${num}: ${title}` : title;

	const link = createLink(category, num, officialurl);
</script>

<a href={link} class="item">
	<div class="content">
		<div class="header">{songTitle}</div>
	</div>
</a>

<style>
	.item {
		padding: 0.3rem !important;
	}
</style>
