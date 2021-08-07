import React from 'react';

const Card = ({ id, description, catagory, image, price, title }) => {
	return (
		<div className='card'>
			<div className='card-img-container'>
				<img src={image} alt='product' />
			</div>
			<div className='card-body'>
				<div className='card-title'>{title}</div>
				<p className='card-description'>{description.slice(0, 55)}</p>
				<h2>Price: {price}</h2>
			</div>
		</div>
	);
};

export default Card;
