import { writable } from 'svelte/store';

// SONGS STORE
export const fetchingSongsStore = writable(false);

export const kingdomStore = writable([]);
export const originalStore = writable([]);
export const childrenStore = writable([]);

// FEATURES
export const favorites = writable([]);
export const currentFavorite = writable(false);
export const currentSongDetails = writable({ title: '', category: '' });

// MISC
export const headTitleStore = writable(); // this gives undefined to have the default prop of head title

export const searchResultStore = writable();

export const drawerOpenStore = writable(false);