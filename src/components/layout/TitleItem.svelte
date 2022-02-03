<script lang="ts">
	import { base } from '$app/paths';
	import type { SongType } from '$lib/customTypes';
	import { currentFavorite, favorites } from '$lib/store';
	import { createLink } from '$utils/helperFunctions';

	export let song: SongType;

	const { title, officialurl, category, num } = song;

	const kingdom = category === 'kingdom';

	const songTitle = kingdom ? `Song ${num}: ${title}` : title;

	const link = createLink(category, num, officialurl);

	const favoritesFromLS = JSON.parse(localStorage.getItem('favorites'));
	if (favoritesFromLS) {
		favorites.set(favoritesFromLS);

		// TODO: CREATE PR FOR DEV BR FROM MVP BR
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

			localStorage.setItem('favorites', JSON.stringify($favorites));
			// copy toast code from justcolor
			// warningToast('Song removed from favorites');
		} else {
			const newFav = {
				title: songTitle,
				category: 'Kingdom Songs',
				link
			};

			addToFavorites(newFav);
			localStorage.setItem('favorites', JSON.stringify($favorites));

			// copy toast code from justcolor
			// successToast('Song added to favorites');
		}

		titleIsFavorite = !titleIsFavorite;
	};
</script>

<a href={`${base}${link}`} class="title-item">
	{songTitle}
	<img
		on:click={toggleHeart}
		src={`${base}/img/hearts/red-heart${titleIsFavorite ? '' : '-outline'}.svg`}
		width="30px"
		alt="heart"
		class="heart-img"
	/>
</a>

<style>
	.title-item {
		padding: 0.5rem !important;
		border-bottom: 1px solid #22242626 !important;
		font-weight: bold !important;
		display: flex !important;
		align-items: center !important;
		justify-content: space-between !important;
		color: black !important;
	}

	.title-item {
		cursor: pointer;
	}
	.title-item:first-child {
		border-top: 1px solid #22242626;
	}
	.title-item:hover {
		background: #c2c2c2;
	}
	.title-item:active {
		background: grey;
		color: white !important;
	}
</style>
