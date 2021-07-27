import React from 'react';
import { updateName, updateEmail } from './actions/actions';
import { useSelector, useDispatch } from 'react-redux';

import store from './store';

const Input = () => {
	const user = useSelector(state => state.userReducer);
	const dispatch = useDispatch();

	return (
		<div>
			<input
				type='text'
				value={user.name}
				placeholder='name'
				onChange={e => dispatch(updateName(e.target.value))}
			/>
			<input
				type='text'
				value={user.email}
				placeholder='email'
				onChange={e => dispatch(updateEmail(e.target.value))}
			/>
		</div>
	);
};

export default Input;
