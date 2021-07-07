import React from 'react';
import Card from './Card';
import { data } from '../utils/data';

import '../App.css';

const CardContainer = () => {
	console.log(data);
	return (
		<div className='card-container'>
			{data.map(({ title, info }, idx) => (
				<Card title={title} info={info} />
			))}
		</div>
	);
};

export default CardContainer;
