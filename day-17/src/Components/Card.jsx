import React from 'react';
import '../App.css';

const Card = ({ title, info }) => {
	return (
		<div className='card'>
			<h3>{title}</h3>
			<p>{info}</p>
		</div>
	);
};

export default Card;
