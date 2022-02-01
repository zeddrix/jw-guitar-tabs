<script lang="ts">
	import { headTitleStore } from '$lib/store';
	import addSForChildrenCat from '$utils/addSForChildrenCat';

	export let title = 'JW Guitar Tabs';
	export let description =
		'JW Guitar Tabs is a website where people who love our JW songs can enjoy playing the simplest tabs on their guitar.';

	export let headCategory = undefined;
	export let headTabs = undefined;

	$: HeadCategory = addSForChildrenCat(headCategory);
	$: HeadTabs = addSForChildrenCat(headTabs);

	$: categoryTitle = `${HeadCategory} Songs Category`;
	$: categoryDescription = `Enjoy playing our ${HeadCategory} songs from jw.org on your guitar with these guitar tabs! Pick one and start playing!`;

	$: tabsTitle = $headTitleStore;
	$: tabsDescription = `Enjoy playing one of our ${HeadTabs} songs, entitled ${$headTitleStore}, on your guitar!`;

	$: finalTitle = headCategory ? categoryTitle : HeadTabs && $headTitleStore ? tabsTitle : title;
	$: finalDescription = headCategory
		? categoryDescription
		: HeadTabs
		? tabsDescription
		: description;
</script>

<svelte:head>
	<title>{finalTitle} | JW Guitar Tabs</title>
	<meta name="description" content={finalDescription} />
</svelte:head>
