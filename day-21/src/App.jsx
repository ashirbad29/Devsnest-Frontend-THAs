import React, { useState } from 'react';
import Card from './Components/Card';
import './App.css';

function App() {
	const [state, setState] = useState([]);
	const [userInput, setUserInput] = useState({ item: '', calorie: '' });

	const handleDelete = index => {
		setState(prevState => prevState.filter((val, idx) => idx != index));
	};

	const handleEdit = (index, item, calorie) => {
		setState(prevState => {
			return prevState.map((val, idx) => {
				if (idx === index) return { item, calorie };
				return val;
			});
		});
	};

	const validate = (item, calorie) => {
		if (!item) return false;
		if (calorie < 0) return false;
		return true;
	};

	return (
		<div className='App'>
			<form className='input-container'>
				<div className='input-field-container'>
					<input
						className='mr-20'
						type='text'
						placeholder='item name'
						onChange={e => setUserInput({ ...userInput, item: e.target.value })}
						required
						value={userInput.item}
					/>
					<input
						type='number'
						placeholder='calorie amount'
						required
						onChange={e =>
							setUserInput({ ...userInput, calorie: Number(e.target.value) })
						}
						value={userInput.calorie}
					/>
				</div>
				<button
					type='submit'
					onClick={e => {
						e.preventDefault();
						if (!validate(userInput.item, userInput.calorie)) return;
						setState([
							...state,
							{ item: userInput.item, calorie: userInput.calorie },
						]);
						setUserInput({ item: '', calorie: '' });
					}}
				>
					Add Item
				</button>
			</form>

			<div className='card-container'>
				{state.map((val, idx) => {
					return (
						<Card
							name={val.item}
							calorie={val.calorie}
							key={idx}
							index={idx}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
