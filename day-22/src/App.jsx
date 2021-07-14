import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Meme from './Components/Meme';
import MemeEditor from './Components/MemeEditor';
import './App.css';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [memes, setMemes] = useState([]);
	const [edit, setEdit] = useState(false);
	const [activeMeme, setActiveMeme] = useState({});

	useEffect(() => {
		const getMemes = async () => {
			const response = await fetch('https://api.imgflip.com/get_memes');
			const data = await response.json();
			setMemes(data.data.memes);
			setIsLoading(false);
		};

		getMemes();
	}, []);

	const handleClick = (memeId, index) => {
		console.log(memeId);
		setEdit(true);
		setActiveMeme(memes[index]);
	};

	const handleMemeCreation = async userInput => {
		const body = {
			username: 'teasty',
			password: 'PPS$Asr52ttCfaF',
		};

		let url = `https://api.imgflip.com/caption_image?template_id=${activeMeme.id}&username=${body.username}&password=${body.password}`;
		userInput.map((input, idx) => {
			url += `&boxes[${idx}][text]=${input}`;
		});
		const res = await fetch(url);
		const data = await res.json();

		setActiveMeme({ ...activeMeme, url: data.data.url });
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='App'>
			{edit ? (
				<MemeEditor
					{...activeMeme}
					setEdit={setEdit}
					handleMemeCreation={handleMemeCreation}
				/>
			) : (
				<div className='meme__container'>
					{memes.map((meme, idx) => (
						<Meme
							key={meme.id}
							{...meme}
							handleClick={handleClick}
							index={idx}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
