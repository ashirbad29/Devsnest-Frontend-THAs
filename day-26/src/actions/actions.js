export const updateName = payload => {
	return {
		type: 'UPDATE_NAME',
		payload,
	};
};

export const updateEmail = payload => {
	return {
		type: 'UPDATE_EMAIL',
		payload,
	};
};
