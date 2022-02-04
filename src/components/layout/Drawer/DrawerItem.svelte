<script lang="ts">
	import { base } from '$app/paths';

	export let name: string;
	export let link: string;
	export let icon: string;

	import { Item, Text, Graphic } from '@smui/list';

	import { drawerOpenStore } from '$lib/store';

	let active: string;

	const setActive = (name: string) => {
		active = name;
		drawerOpenStore.set(false);

		console.log({ active });
	};
</script>

<!-- <Item href={link} on:click={() => setActive(name)} activated={active === name}> -->
<Item href={`${base}${link}`} on:click={() => drawerOpenStore.set(false)}>
	<Graphic class="material-icons" aria-hidden="true">{icon}</Graphic>
	<Text>{name}</Text>
</Item>
