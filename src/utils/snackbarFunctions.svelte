<script context="module" lang="ts">
	import { snackbarStore } from '$lib/store';

	export const addToFavoritesSnackbar = () => {
		snackbarStore.set({
			text: 'Added to favorites',
			open: true
		});
	};

	export const removeFromFavoritesSnackbar = () => {
		snackbarStore.set({
			text: 'Removed from favorites',
			open: true
		});
	};
</script>
