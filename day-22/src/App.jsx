import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Meme from './Components/Meme';
import './App.css';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [memes, setMemes] = useState([]);

	useEffect(() => {
		const getMemes = async () => {
			const response = await fetch('https://api.imgflip.com/get_memes');
			const data = await response.json();
			setMemes(data.data.memes);
			setIsLoading(false);
		};

		getMemes();
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='App'>
			{memes.map((meme, idx) => (
				<Meme {...meme} />
			))}
		</div>
	);
}

export default App;
