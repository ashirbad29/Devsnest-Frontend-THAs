import React, { useState } from 'react';
import './Card.css';

const Card = ({ name, calorie, index, handleDelete, handleEdit }) => {
	const [edit, setEdit] = useState(false);
	const [userInput, setUserInput] = useState({ item: name, calorie: calorie });

	return (
		<div className='card'>
			{edit ? (
				<div className='input-controls'>
					<input
						type='text'
						onChange={e => setUserInput({ ...userInput, item: e.target.value })}
						required='required'
						value={userInput.item}
					/>
					<input
						type='number'
						type='number'
						placeholder='calorie amount'
						onChange={e =>
							setUserInput({ ...userInput, calorie: Number(e.target.value) })
						}
						value={userInput.calorie}
					/>
					<div>
						<button className='btn bg-red' onClick={() => handleDelete(index)}>
							Delete
						</button>
						<button
							className='btn bg-green'
							onClick={() => {
								handleEdit(index, userInput.item, userInput.calorie);
								setEdit(false);
							}}
						>
							Done
						</button>
					</div>
				</div>
			) : (
				<div>
					<h3>{name}</h3>
					<p>you have consumed {calorie} calories</p>
					<div className='controls'>
						<button className='bg-red' onClick={() => handleDelete(index)}>
							Delete
						</button>
						<button className='bg-green' onClick={() => setEdit(edit => !edit)}>
							Edit
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
