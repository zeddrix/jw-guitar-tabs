<script lang="ts">
	import './TitleItem.css';

	import Tooltip, { Wrapper, Content } from '@smui/tooltip';

	import { base } from '$app/paths';
	import type { SongType } from '$lib/customTypes';
	import { currentFavorite, favorites } from '$lib/store';
	import { createLink } from '$utils/helperFunctions';
	import {
		addToFavoritesSnackbar,
		removeFromFavoritesSnackbar
	} from '$utils/snackbarFunctions.svelte';

	export let song: SongType;

	const { title, officialurl, category, num } = song;

	const kingdom = category === 'kingdom';

	const songTitle = kingdom ? `Song ${num}: ${title}` : title;

	const link = createLink(category, num, officialurl);

	const favoritesFromLS = JSON.parse(localStorage.getItem('favorites'));
	if (favoritesFromLS) {
		favorites.set(favoritesFromLS);
	}

	let titleIsFavorite = $favorites.find((s) => s.link === link);

	const addToFavorites = (newFav: { title: string; category: string; link: string }) => {
		const favoriteAlready = $favorites.find((fav) => fav.link === newFav.link);

		if (favoriteAlready) {
			$favorites = $favorites.map((fav) => (fav.link === favoriteAlready.link ? newFav : fav));
		} else {
			$currentFavorite = true;
			$favorites.push(newFav);
		}
	};

	const toggleHeart = (e) => {
		e.preventDefault();

		if (titleIsFavorite) {
			favorites.set($favorites.filter((fav) => fav.link !== link));
			removeFromFavoritesSnackbar();
			localStorage.setItem('favorites', JSON.stringify($favorites));
		} else {
			const newFav = {
				title: songTitle,
				category: 'Kingdom Songs',
				link
			};
			addToFavorites(newFav);
			addToFavoritesSnackbar();
			localStorage.setItem('favorites', JSON.stringify($favorites));
		}

		titleIsFavorite = !titleIsFavorite;
	};
</script>

<a href={`${base}${link}`} class="title-item">
	{songTitle}
	<Wrapper rich>
		<img
			on:click={toggleHeart}
			src={`${base}/img/hearts/red-heart${titleIsFavorite ? '' : '-outline'}.svg`}
			width="30px"
			alt="heart"
			class="heart-img"
		/>

		<Tooltip yPos="above">
			<Content>{titleIsFavorite ? 'Remove from' : 'Add to'} favorites</Content>
		</Tooltip>
	</Wrapper>
</a>
