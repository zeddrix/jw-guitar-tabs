<script lang="ts">
	import Menu from '@smui/menu';
	import Checkbox from '@smui/checkbox';
	import FormField from '@smui/form-field';
	import IconButton from '@smui/icon-button';
	import List, { Text } from '@smui/list';
	import type { MenuComponentDev } from '@smui/menu';
	let menu: MenuComponentDev;

	import { page } from '$app/stores';
	import { pageCheckedStore, websiteCheckedStore } from '$lib/store';
	import { get1stPath } from '$utils/helperFunctions';

	import { shares } from '../appbarItems';

	import ShareItem from './ShareItem.svelte';

	let onTabsPage = false;

	$: url = $page.url.pathname;

	$: if (url) {
		let firstPath = get1stPath(url);

		if (firstPath == 'categories') {
			onTabsPage = true;
			pageCheckedStore.set(true);
		} else {
			onTabsPage = false;
			pageCheckedStore.set(false);
			websiteCheckedStore.set(true);
		}
	}

	$: if ($pageCheckedStore) websiteCheckedStore.set(false);
	$: if ($websiteCheckedStore) pageCheckedStore.set(false);

	$: aBoxChecked = $pageCheckedStore || $websiteCheckedStore;
</script>

<div class="menu-and-button-container">
	<IconButton class="material-icons" on:click={() => menu.setOpen(true)}>share</IconButton>
	<Menu bind:this={menu} anchorCorner="BOTTOM_LEFT">
		<List>
			{#if onTabsPage}
				<div class="share_text_container">
					<Text>Share this</Text>
				</div>

				<div class="checkboxes-container">
					<FormField>
						<Checkbox
							checked={$pageCheckedStore}
							on:click={() => pageCheckedStore.set(!$pageCheckedStore)}
							touch
						/>
						<span slot="label">Page</span>
					</FormField>

					<FormField>
						<Checkbox
							checked={$websiteCheckedStore}
							on:click={() => websiteCheckedStore.set(!$websiteCheckedStore)}
							touch
						/>
						<span slot="label">Website</span>
					</FormField>
				</div>

				{#if aBoxChecked}
					<div class="share_text_container">
						<Text>on</Text>
					</div>
				{/if}
			{:else}
				<div class="share_text_container">
					<Text>Share site on</Text>
				</div>
			{/if}

			{#if aBoxChecked}
				{#each shares as share (share)}
					<ShareItem {share} />
				{/each}
			{/if}
		</List>
	</Menu>
</div>

<style>
	.share_text_container {
		margin-left: 0.75rem;
		text-align: left;
		margin-bottom: 0.25rem;
	}
	.menu-and-button-container {
		min-width: 9rem;
		text-align: right;
		margin-right: 1rem;
	}

	.checkboxes-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	:global(.mdc-checkbox) {
		display: flex !important;
		padding: 0.75rem !important;
		margin: 0 !important;
		align-items: center !important;
	}
</style>
