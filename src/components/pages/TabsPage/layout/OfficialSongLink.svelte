<script lang="ts">
	import type { SongCategoriesType } from '$lib/customTypes';

	import NewTabLink from '$components/layout/NewTabLink.svelte';

	export let category: SongCategoriesType;
	export let officialurl: string;

	const kingdom = category === 'kingdom';
	const original = category === 'original';

	let href = 'https://www.jw.org/en/';
	if (kingdom) {
		href += `library/music-songs/sing-out-joyfully/${officialurl}/?media=sjjm`;
	} else if (original) {
		href += `library/music-songs/original-songs/${officialurl}/`;
	} else {
		href += `bible-teachings/children/become-jehovahs-friend/songs/${officialurl}/`;
	}

	let songCat: string;
	if (kingdom) {
		songCat = 'Kingdom';
	} else if (original) {
		songCat = 'original';
	} else {
		songCat = "children's original";
	}

	let hasAnotherVersion = false;

	$: if (officialurl === 'the-best-life-ever' || officialurl === 'inspired-by-your-wonders') {
		hasAnotherVersion = true;
	} else {
		hasAnotherVersion = false;
	}
</script>

<p>
	<b>Note: </b>You can check out the <i>chords</i> found on the <i>official</i> music sheet of this {songCat}
	song at <NewTabLink {href} text="jw.org" />.

	{#if hasAnotherVersion}
		<span>
			The <i>higher notes</i> version for this song is available <NewTabLink
				href={`https://zeddrix.com/${officialurl}-guitar-tabs-higher-notes/`}
				text="here"
			/>.
		</span>
	{/if}
</p>
