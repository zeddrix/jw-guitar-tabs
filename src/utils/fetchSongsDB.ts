import { MongoClient } from 'mongodb';
import { variables } from '$lib/variables';

const fetchSongsDB = async (collection: 'kingdoms' | 'originals' | 'childrens') => {
	const MONGO_URI = variables.mongoURI;

	const client = await MongoClient.connect(MONGO_URI);

	const db = client.db();
	const songCollection = db.collection(collection);
	const songs = await songCollection.find().toArray();
	client.close();

	if (songs) {
		return {
			status: 200,
			headers: {
				Accept: 'application/json'
			},
			body: {
				[`${collection}ongs`]: songs
			}
		};
	}

	return {
		status: 500,
		error: 'Failed to get children songs'
	};
};

export default fetchSongsDB;
