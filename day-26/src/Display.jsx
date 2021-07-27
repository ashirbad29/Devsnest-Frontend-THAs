import React from 'react';
import { useSelector, useStore } from 'react-redux';

const Display = () => {
	const user = useSelector(state => state.userReducer);
	const store = useStore();

	return (
		<div>
			<h3>Name: {user.name} </h3>
			<h3>Email: {user.email} </h3>
		</div>
	);
};

export default Display;
