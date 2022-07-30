<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { capital1stLetter, createLink } from '$utils/helperFunctions';

	export let title: string;
	export let num: number;
	export let officialurl: string;
	export let category: string;

	const link = createLink(category, num, officialurl);
</script>

<a sveltekit:prefetch href={`${base}${link}`} on:touchstart={() => goto(link)} class="card">
	<img
		src={`${base}/img/guitars/${category}-guitar.jpg`}
		alt={`guitar image for ${category} category`}
	/>
	<div class="title_category_container">
		<p class="title">
			{#if category === 'kingdom'}
				Song {num}:
			{/if}
			{capital1stLetter(title)}
		</p>
		<p class="category">{capital1stLetter(category)} Songs</p>
	</div>
</a>

<style>
	.card {
		cursor: pointer;
		margin: 0 auto;
		height: 100%;
		position: relative;
		text-align: center;
	}

	img {
		width: 85%;
		height: 100%;
	}

	.title_category_container {
		position: absolute;
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	p.title,
	p.category {
		margin: 0;
		color: white !important;
		font-weight: bold;
	}
	p.title {
		font-size: 2rem !important;
	}
	p.category {
		font-size: 1.2rem !important;
	}

	@media only screen and (min-width: 270px) and (max-width: 600px) {
		p.title {
			font-size: 1.3rem !important;
		}
		p.category {
			font-size: 0.8rem !important;
		}
		img {
			width: 95%;
			height: 100%;
		}
	}

	@media only screen and (min-width: 600px) and (max-width: 767px) {
		p.title {
			font-size: 1.9rem !important;
		}
		p.category {
			font-size: 1.2rem !important;
		}
		img {
			width: 95%;
			height: 100%;
		}
	}
</style>
