import React from 'react';
import '../App.css';

const Card = ({ title, info, idx, handleDelete }) => {
	return (
		<div className='card'>
			<h3>{title}</h3>
			<p>{info}</p>
			<button onClick={() => handleDelete(idx)}>Delete</button>
		</div>
	);
};

export default Card;
