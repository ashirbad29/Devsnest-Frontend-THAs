import React, { useContext, useState } from 'react';
import { UserContext } from '../store';
import '../App.css';

const Home = () => {
	const { user, setUser } = useContext(UserContext);
	const [userInput, setUserInput] = useState({ name: '', favoriteEmoji: '' });
	const handleSubmit = e => {
		e.preventDefault();
		setUser({ ...user, isLoggedin: true, ...userInput });
		setUserInput({ name: '', favoriteEmoji: '' });
	};

	if (user.isLoggedin) {
		return (
			<div>
				<h2>Welcome, {user.name}</h2>
				Your now logged in 😑
				<button onClick={() => setUser({ ...user, isLoggedin: false })}>
					Logout
				</button>
			</div>
		);
	}
	return (
		<div className='home'>
			<h3>Home page</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor='user-name'>Name: </label>
				<input
					value={userInput.name}
					onChange={e => setUserInput({ ...userInput, name: e.target.value })}
					type='text'
					name='user-name'
					required
				/>
				<label htmlFor='emoji'>What's your favorite emoji</label>
				<input
					value={userInput.favoriteEmoji}
					onChange={e =>
						setUserInput({ ...userInput, favoriteEmoji: e.target.value })
					}
					type='text'
					name='emoji'
					placeholder='drop here'
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Home;
