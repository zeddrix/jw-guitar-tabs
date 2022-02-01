export type SongType = {
	category: string;
	num: number;
	officialurl: string;
	repeat: number;
	capo: number;
	legend: string[];
	tabs: object[];
	title: string;
	verse: string;
	_id: string;
};

export type SearchResultType = {
	disabled: boolean;
	index: number;
	original: SongType;
	score: number;
	string: string;
};

export type SongCategoriesType = 'kingdom' | 'original' | 'children';
