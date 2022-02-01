<script lang="ts">
	import NewTabLink from './NewTabLink.svelte';
</script>

<p class="footer">
	<a href="/copyright">Copyright</a> &copy; {new Date().getFullYear()} |
	<a href="/copyright">Terms of Use</a> | JW Guitar Tabs |
	<NewTabLink href="https://zeddrix.com/" text="BeAmaZedd" />
</p>

<style>
	.footer {
		text-align: center;
		padding: 1rem 0;
		color: saddlebrown;
	}
</style>
