<script lang="ts">
	import './TitleItem.css';

	export let his: {
		category: string;
		title: string;
		dateTime: string;
		link: string;
	};

	const { title, category, dateTime, link } = his;
</script>

<a sveltekit:prefetch href={link} class="title-item">
	<div class="content">
		{title}
		<span class="category">{category}</span>
	</div>

	<span class="dateTime">{dateTime}</span>
</a>

<style>
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

	.title-item .dateTime {
		color: grey;
		font-size: 0.8rem;
	}
</style>
