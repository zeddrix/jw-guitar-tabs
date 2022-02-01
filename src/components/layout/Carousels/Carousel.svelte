<script lang="ts">
	export let arrows: boolean;

	import { onMount } from 'svelte';

	let Carousel; // for saving Carousel component class

	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});
</script>

<svelte:component
	this={Carousel}
	autoplay
	autoplayDuration={5000}
	pauseOnFocus
	swiping={false}
	{arrows}
>
	<slot />
</svelte:component>
