export const placeReducer = (state = '', action) => {
	if (action.type === 'UPDATE_PLACE') {
		return action.payload;
	}

	return state;
};
