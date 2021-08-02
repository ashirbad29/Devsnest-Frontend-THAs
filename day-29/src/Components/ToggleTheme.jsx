import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../actions';

const ToggleTheme = () => {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();
	console.log(theme);

	return (
		<button
			className={`toggle__theme__btn ${theme && 'btn-dark'}`}
			onClick={() => dispatch(toggleTheme())}
			style={{ border: '2px solid whitesmoke' }}
		>
			{theme ? 'Light' : 'Dark'}
		</button>
	);
};

export default ToggleTheme;
