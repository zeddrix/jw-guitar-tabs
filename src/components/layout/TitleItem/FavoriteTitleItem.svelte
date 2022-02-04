<script lang="ts">
	import './TitleItem.css';

	import Tooltip, { Wrapper, Content } from '@smui/tooltip';

	import { base } from '$app/paths';
	import { favorites } from '$lib/store';
	import { removeFromFavoritesSnackbar } from '$utils/snackbarFunctions.svelte';

	export let fav: {
		title: string;
		category: string;
		link: string;
	};

	const { title, category, link } = fav;

	const toggleHeart = (e, link: string) => {
		e.preventDefault();

		favorites.set($favorites.filter((fav) => fav.link != link));

		removeFromFavoritesSnackbar();

		localStorage.setItem('favorites', JSON.stringify($favorites));
	};
</script>

<a href={`${base}${link}`} class="title-item">
	{title}
	{category}
	<Wrapper rich>
		<img
			on:click={(e) => toggleHeart(e, link)}
			src={`${base}/img/hearts/red-heart.svg`}
			width="30px"
			alt="heart"
			class="heart-img"
		/>
		<Tooltip yPos="above"><Content>Remove from favorites</Content></Tooltip>
	</Wrapper>
</a>
