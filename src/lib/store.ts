import { writable } from 'svelte/store';

// SONGS STORE
export const fetchingSongsStore = writable(false);

export const kingdomStore = writable([]);
export const originalStore = writable([]);
export const childrenStore = writable([]);

// export const songsLinksStore = writable([]);
export const songsLinksStore = ['/categories/kingdom-songs/5-gods-wondrous-works-guitar-tabs/'];

// FEATURES
export const favorites = writable([]);
export const currentFavorite = writable(false);
export const currentSongDetails = writable({ title: '', category: '' });

export const pageCheckedStore = writable(false);
export const websiteCheckedStore = writable(false);

export const history = writable([]);

export const snackbarStore: {
	text: string;
	open: boolean;
} = writable({
	text: '',
	open: false
});
// MISC
export const headTitleStore = writable(); // this gives undefined to have the default prop of head title

export const searchResultStore = writable();

export const drawerOpenStore = writable(false);
