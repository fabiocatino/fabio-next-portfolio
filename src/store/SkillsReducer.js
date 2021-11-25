const SkillsReducer = (state, action) => {
	switch (action.type) {
		case 'UPLOAD_START':
			return {
				error: false,
				isLoading: true,
			};
		case 'UPLOAD_SUCCESS':
			return {
				skills: action.payload,
				error: false,
				isLoading: false,
			};
		case 'UPLOAD_ERROR':
			return {
				error: true,
				isLoading: false,
			};
		case 'DELETE_START':
			return {
				error: false,
				isLoading: true,
			};
		case 'DELETE_SUCCESS':
			return {
				skills: action.payload,
				error: false,
				isLoading: false,
			};
		case 'DELETE_ERROR':
			return {
				error: true,
				isLoading: false,
			};
		case 'FETCHING_START':
			return {
				isLoading: true,
				error: false,
			};

		case 'FETCHING_SUCCESS':
			return {
				skills: action.payload,
				error: false,
				isLoading: false,
			};

		case 'FETCHING_ERROR':
			return {
				isLoading: false,
				error: true,
			};
		default:
			return state;
	}
};

export default SkillsReducer;
