import type { SongCategoriesType, SongType } from '$lib/customTypes';

export const capital1stLetter = (str: string) => str[0].toUpperCase() + str.substring(1);

export const createLink = (category: SongCategoriesType, num: number, officialurl: string) => {
	const kingdom = category === 'kingdom';
	const original = category === 'original';

	const catUrl = kingdom ? 'kingdom' : original ? 'original' : 'children';
	const songIdUrl = !kingdom ? `${num}-` : '';

	const link = `/categories/${catUrl}-songs/${songIdUrl}${officialurl}-guitar-tabs`;

	return link;
};

export const sortSongs = (songs: SongType[]) => songs.sort((a, b) => a.num - b.num);

// GET URL
export const getUrl = (url: string, pathNum: number) => {
	return url.split('/')[url.split('/').length - pathNum];
};

export const get1stPath = (url: string) => getUrl(url, 4);

export const get2ndPath = (url: string) => getUrl(url, 3);

export const get3rdPath = (url: string) => getUrl(url, 2);

export const get4thPath = (url: string) => getUrl(url, 1);
