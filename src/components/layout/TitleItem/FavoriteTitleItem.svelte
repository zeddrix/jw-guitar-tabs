<script lang="ts">
	import './TitleItem.css';

	import { Wrapper } from '@smui/tooltip';

	import { base } from '$app/paths';
	import { favorites } from '$lib/store';
	import { removeFromFavoritesSnackbar } from '$utils/snackbarFunctions.svelte';
	import HeartTooltip from './HeartTooltip.svelte';

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

<a sveltekit:prefetch href={`${base}${link}`} class="title-item">
	<div class="content">
		{title}
		<span class="category">{category}</span>
	</div>
	<Wrapper rich>
		<img
			on:click={(e) => toggleHeart(e, link)}
			src={`${base}/img/hearts/red-heart.svg`}
			width="30px"
			alt="heart"
			class="heart-img"
		/>
		<HeartTooltip remove={true} />
	</Wrapper>
</a>

<style>
	/* Additional styles for this component */
	.title-item .content {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	.title-item .content .category {
		color: grey;
		font-size: 0.8rem;
	}
	.title-item .content .category:active {
		color: white !important;
	}
</style>
