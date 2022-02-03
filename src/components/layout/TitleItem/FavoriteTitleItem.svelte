<script lang="ts">
	import './TitleItem.css';

	export let fav: {
		title: string;
		category: string;
		link: string;
	};

	const { title, category, link } = fav;

	import { base } from '$app/paths';
	import { favorites } from '$lib/store';

	const toggleHeart = (e, link: string) => {
		e.preventDefault();

		favorites.set($favorites.filter((fav) => fav.link !== link));

		localStorage.setItem('favorites', JSON.stringify($favorites));
	};
</script>

<a href={`${base}${link}`} class="title-item">
	{title}
	{category}
	<img
		on:click={(e) => toggleHeart(e, link)}
		src={`${base}/img/hearts/red-heart.svg`}
		width="30px"
		alt="heart"
		class="heart-img"
	/>
</a>
