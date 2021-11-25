export const SendSkill = () => ({
	type: 'UPLOAD_START',
});

export const Send = (skills, skill) => ({
	type: 'UPLOAD_SUCCESS',
	payload: [...skills, skill],
});

export const SendError = (error) => ({
	type: 'UPLOAD_ERROR',
	payload: error,
});

export const DeleteSkill = () => ({
	type: 'DELETED_START',
});

export const Delete = (skill) => ({
	type: 'DELETE_SUCCESS',
	payload: [...skill],
});

export const SendError = (error) => ({
	type: 'DELETE_ERROR',
	payload: error,
});

export const FetchSkills = () => ({
	type: 'FETCHING_START',
});

export const FetchSuccess = (skills) => ({
	type: 'FETCHING_SUCCESS',
	payload: [...skills],
});

export const FetchError = (error) => ({
	type: 'FETCHING_ERROR',
	payload: error,
});
