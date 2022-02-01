<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status
			}
		};
	}
</script>

<script lang="ts">
	import ErrorScreen from '$components/screens/ErrorScreen.svelte';
	import NotFoundScreen from '$components/screens/NotFoundScreen.svelte';

	export let message: string;
	export let status: number;
</script>

{#if status == 404}
	<NotFoundScreen />
{:else}
	<ErrorScreen {message} />
{/if}
