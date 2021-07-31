import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updatePlace } from '../actions';
import { updatePlaceData } from '../actions';

const InputField = ({ handleSubmit }) => {
	const [userInput, setUserInput] = useState('');
	const place = useSelector(state => state.place);
	const dispatch = useDispatch();

	return (
		<div>
			<form>
				<input
					type='text'
					value={place}
					required
					onChange={e => dispatch(updatePlace(e.target.value))}
				/>
				<button type='button' onClick={() => dispatch(updatePlaceData(place))}>
					show
				</button>
			</form>
		</div>
	);
};

export default InputField;
