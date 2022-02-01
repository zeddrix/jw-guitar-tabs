<script lang="ts">
	import './SideDrawer.css';

	import Drawer, { Content, Header, Title } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list';
	import { H6 } from '@smui/common/elements';

	import { drawerOpenStore } from '$lib/store';
	import { categories, menuItems } from '../Appbar/appbarItems';

	import DrawerItem from './DrawerItem.svelte';
</script>

<Drawer variant="modal" bind:open={$drawerOpenStore}>
	<Header style="background: saddlebrown; padding: 1rem 0">
		<Title style="color: white; display: flex; justify-content: flex-start; align-items: center;">
			<img src="/img/jw-guitar-tabs-logo.svg" class="jwgt-logo" alt="JWGT" height={50} width={50} />
			JW Guitar Tabs
		</Title>
	</Header>
	<Content>
		<List>
			<DrawerItem name="Home" link="/" icon="home" />

			{#each menuItems as { name, link, icon } (link)}
				<DrawerItem {name} {link} {icon} />
			{/each}

			<Separator />
			<Subheader component={H6}>Song Categories</Subheader>
			{#each categories as { name, link } (link)}
				<DrawerItem {name} link={`/categories/${link}-songs`} icon="queue_music" />
			{/each}
		</List>
	</Content>
</Drawer>

<style>
	.jwgt-logo {
		margin: 0 1rem;
	}
</style>
