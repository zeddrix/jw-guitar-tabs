<script lang="ts">
	import { shares } from '../appbarItems';
	import Menu, { MenuComponentDev } from '@smui/menu';
	let menu: MenuComponentDev;

	import IconButton from '@smui/icon-button';
	import ShareItem from './ShareItem.svelte';
	import List, { Text } from '@smui/list';
</script>

<div class="menu-and-button-container">
	<IconButton class="material-icons" on:click={() => menu.setOpen(true)}>share</IconButton>
	<Menu bind:this={menu} anchorCorner="BOTTOM_LEFT">
		<List>
			<div class="share_text_container">
				<Text>Share on</Text>
			</div>
			{#each shares as share (share)}
				<ShareItem {share} />
			{/each}
		</List>
	</Menu>
</div>

<style>
	.share_text_container {
		margin-left: 0.75rem;
		text-align: left;
	}
	.menu-and-button-container {
		min-width: 9rem;
		text-align: right;
		margin-right: 1rem;
	}
</style>
