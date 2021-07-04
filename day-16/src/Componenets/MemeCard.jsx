import React from 'react';
import meme from '../assets/Meme-header-2.jpeg';

const MemeCard = () => {
	return (
		<div className='meme-container'>
			<img src={meme} alt='meme' />
			<p>Here is a meme</p>
		</div>
	);
};

export default MemeCard;
