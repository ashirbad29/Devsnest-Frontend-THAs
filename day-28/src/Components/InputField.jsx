import React, { useState } from 'react';

const InputField = ({ handleSubmit }) => {
	const [userInput, setUserInput] = useState('');

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					handleSubmit(userInput);
				}}
			>
				<input
					type='text'
					value={userInput}
					required
					onChange={e => setUserInput(e.target.value)}
				/>
				<button type='submit'>show</button>
			</form>
		</div>
	);
};

export default InputField;
