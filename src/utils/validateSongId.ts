const validateSongId = (id: number, songsLength: number) => {
	let validSongId: boolean;
	if (id <= songsLength && 0 < id && !isNaN(id)) {
		validSongId = true;
	} else {
		validSongId = false;
	}

	return validSongId;
};

export default validateSongId;
