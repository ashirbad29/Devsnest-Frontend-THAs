import React from 'react';
import './Meme.css';

const Meme = ({ id, name, url, box_count }) => {
	return (
		<div className='meme'>
			<img className='meme__img' src={url} alt={name} />
		</div>
	);
};

export default Meme;
