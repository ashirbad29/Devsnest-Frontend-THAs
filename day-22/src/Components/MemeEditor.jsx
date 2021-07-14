import React, { useState } from 'react';
import './Meme.css';

const MemeEditor = ({
	id,
	url,
	box_count,
	name,
	setEdit,
	handleMemeCreation,
}) => {
	const [userInput, setUserInput] = useState([...Array(box_count)]);

	const handleUserInput = (input, index) => {
		const newState = userInput.map((val, idx) => {
			if (index === idx) return input;
			return val;
		});
		setUserInput(newState);
	};

	return (
		<div className='meme__editor'>
			<div className='meme'>
				<img className='meme__img' src={url} alt={name} />
			</div>
			<div className='controller'>
				<div className='controller__input'>
					{[...Array(box_count)].map((val, idx) => {
						return (
							<input
								type='text'
								key={idx}
								onChange={e => handleUserInput(e.target.value, idx)}
							/>
						);
					})}
				</div>
				<div>
					<button onClick={() => handleMemeCreation(userInput)}>
						Create Meme
					</button>
					<button onClick={() => setEdit(false)}>Choose Template</button>
				</div>
			</div>
		</div>
	);
};

export default MemeEditor;
