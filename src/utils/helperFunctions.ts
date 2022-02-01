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
