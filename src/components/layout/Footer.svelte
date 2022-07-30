<script lang="ts">
	import { base } from '$app/paths';

	import NewTabLink from './NewTabLink.svelte';
</script>

<p class="footer">
	<a sveltekit:prefetch href="{base}/copyright">Copyright</a> &copy; {new Date().getFullYear()} |
	<a sveltekit:prefetch href="{base}/copyright">Terms of Use</a> | JW Guitar Tabs |
	<NewTabLink href="https://zeddrix.com/" text="BeAmaZedd" />
</p>

<style>
	.footer {
		text-align: center;
		padding: 1rem 0;
		color: saddlebrown;
	}
</style>
