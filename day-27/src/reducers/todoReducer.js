const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, action.payload];
			break;
		case 'REMOVE_TODO':
			return state.filter((_, index) => index !== action.payload);
			break;
		case 'LOAD_TODO':
			return [...state, ...action.payload];
			break;
		default:
			return state;
	}
};

export default todoReducer;
