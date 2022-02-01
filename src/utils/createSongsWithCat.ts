export const createKingdomSongsWithCat = (kingdomsongs: object[]) => {
	const kingdomsongsWithCat = kingdomsongs.map((k) => ({ ...k, category: 'kingdom' }));
	return kingdomsongsWithCat;
};

export const createOriginalSongsWithCat = (originalsongs: object[]) => {
	const originalsongsWithCat = originalsongs.map((o) => ({ ...o, category: 'original' }));
	return originalsongsWithCat;
};

export const createChildrenSongsWithCat = (childrensongs: object[]) => {
	const childrensongsWithCat = childrensongs.map((c) => ({ ...c, category: 'children' }));
	return childrensongsWithCat;
};
