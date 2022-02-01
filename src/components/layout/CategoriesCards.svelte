<script lang="ts">
	import { capital1stLetter } from '$utils/helperFunctions';

	const cats = ['kingdom', 'original', 'children'];
</script>

<h2>Songs Categories</h2>
<div class="ui stackable three column grid">
	{#each cats as c (c)}
		<div class="column card">
			<a href={`/categories/${c}-songs`}>
				<img src={`/img/guitars/${c}-guitar.jpg`} alt={`guitar image for ${c} category`} />
				<p class="centered">
					{capital1stLetter(c)}{c === `children` ? `'s` : ``}
					Songs
				</p>
			</a>
		</div>
	{/each}
</div>

<style>
	.card {
		cursor: pointer;
		margin: 0 auto;
		height: 100%;
		position: relative;
		text-align: center;
	}

	@media only screen and (min-width: 270px) and (max-width: 767px) {
		.card {
			margin: 1rem auto;
		}
	}

	img {
		width: 100%;
		max-height: 10%;
	}

	p.centered {
		position: absolute;
		top: 49%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 1.2rem;
		font-weight: bold;
	}

	@media only screen and (min-width: 270px) and (max-width: 600px) {
		p.centered {
			font-size: 1.3rem;
		}
	}

	@media only screen and (min-width: 600px) and (max-width: 767px) {
		p.centered {
			font-size: 2rem;
		}
	}
</style>
