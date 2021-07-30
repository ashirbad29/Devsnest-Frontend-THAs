export const addTodo = payload => {
	return {
		type: 'ADD_TODO',
		payload,
	};
};

export const removeTodo = payload => {
	return {
		type: 'REMOVE_TODO',
		payload,
	};
};

export const loadTodo = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(data => dispatch({ type: 'LOAD_TODO', payload: data }));
	};
};
