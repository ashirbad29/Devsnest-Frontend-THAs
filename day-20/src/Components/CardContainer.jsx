import React, { useState } from 'react';
import Card from './Card';
import { data } from '../utils/data';

import '../App.css';

const CardContainer = () => {
	const [arr, setArr] = useState(data);

	const handleDelete = index => {
		const newArr = arr.filter((val, idx) => idx !== index);
		setArr(newArr);
	};

	return (
		<div className='card-container'>
			{arr.map(({ title, info }, idx) => (
				<Card
					key={idx}
					title={title}
					info={info}
					idx={idx}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

export default CardContainer;
