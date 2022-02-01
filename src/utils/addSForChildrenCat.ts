import type { SongCategoriesType } from '$lib/customTypes';
import { capital1stLetter } from './helperFunctions';

const addSForChildrenCat = (category: SongCategoriesType) => {
	const cat =
		category && category === 'children'
			? capital1stLetter(`${category}'s`)
			: category
			? capital1stLetter(category)
			: '';

	return cat;
};

export default addSForChildrenCat;
