import React from 'react';
import './Meme.css';

const Meme = ({ id, name, url, box_count, handleClick, index }) => {
	return (
		<div className='meme' onClick={() => handleClick(id, index)}>
			<img className='meme__img' src={url} alt={name} />
		</div>
	);
};

export default Meme;
