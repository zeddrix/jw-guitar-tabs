<script lang="ts">
	import Snackbar, { Actions, Label } from '@smui/snackbar';
	import type { SnackbarComponentDev } from '@smui/snackbar';

	import IconButton from '@smui/icon-button';
	import { snackbarStore } from '$lib/store';

	let snackbar: SnackbarComponentDev;

	$: if (snackbar && $snackbarStore.open) {
		snackbar.open();
	}
</script>

<Snackbar bind:this={snackbar}>
	<Label>{$snackbarStore.text}</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>
