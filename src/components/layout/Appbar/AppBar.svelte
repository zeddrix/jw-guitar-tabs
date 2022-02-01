<script lang="ts">
	import './AppBar.css';

	import TopAppBar, {
		Row,
		Section,
		Title as TopAppBarTitle,
		AutoAdjust,
		TopAppBarComponentDev
	} from '@smui/top-app-bar';
	let topAppBar: TopAppBarComponentDev;
	import IconButton from '@smui/icon-button';
	import { Scrim } from '@smui/drawer';

	import { drawerOpenStore } from '$lib/store';

	import Share from './Share/Share.svelte';
	import Search from '../Search/Search.svelte';
	import SideDrawer from '../Drawer/SideDrawer.svelte';

	const onToggle = () => drawerOpenStore.set(!$drawerOpenStore);
</script>

<TopAppBar bind:this={topAppBar} variant="fixed" style="padding: 0.5rem 0">
	<Row>
		<Section>
			<IconButton class="material-icons" on:click={onToggle}>menu</IconButton>
			<TopAppBarTitle style="margin-right: 1rem;">JW Guitar Tabs</TopAppBarTitle>
			<Search />
		</Section>
		<Section align="end" toolbar>
			<Share />
		</Section>
	</Row>
</TopAppBar>

<SideDrawer />

<Scrim />

<AutoAdjust {topAppBar} />
<slot />
