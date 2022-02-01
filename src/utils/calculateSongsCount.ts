import type { SongCategoriesType } from '$lib/customTypes';

const calculateSongsCount = (category: SongCategoriesType) => {
	const msPerWeek = 1000 * 60 * 60 * 24 * 7;
	const today = new Date();

	const kingdom = category === 'kingdom';
	const original = category === 'original';

	const kingdomsDateStart = 'Sun May 10 2020';
	const originalDateStart = 'Thu Aug 13 2020';
	const childrenDateStart = 'Sun May 10 2020'; // inaccurate

	let categoryDateStart = kingdom
		? kingdomsDateStart
		: original
		? originalDateStart
		: childrenDateStart;

	const dateStart = new Date(categoryDateStart);

	const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
	const utc2 = Date.UTC(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());

	const songsCount = Math.floor(-(utc2 - utc1) / msPerWeek);

	// console.log({ [`${category}SongsCount`]: songsCount });

	return songsCount;
};

export default calculateSongsCount;
