<script type="ts">
	import './CookiesBanner.css';

	import Banner, { Label, Icon } from '@smui/banner';
	import Button from '@smui/button';
	import { onMount } from 'svelte';

	let open = true;

	const storeCookie = () => localStorage.setItem('cookies', '1');

	const gotIt = () => {
		open = false;
		storeCookie();
	};

	onMount(() => {
		const cookies = JSON.parse(localStorage.getItem('cookies'));

		if (!cookies) {
			open = true;
		} else {
			if (cookies === 1) {
				open = false;
			} else {
				open = true;
			}
		}
	});
</script>

<Banner bind:open fixed centered mobileStacked>
	<Icon slot="icon" class="material-icons">cookie</Icon>
	<Label slot="label" class="label">
		This website uses cookies to ensure you get the best experience on this website.
	</Label>

	<Button slot="actions" on:click={gotIt}>GOT IT</Button>
</Banner>
