import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const resData = await response.json();
			setData(resData);
		};

		fetchData();
	}, []);

	return (
		<div>
			<header>Redux Cart</header>
			<section className='products-container'>
				{data.map((item, idx) => (
					<Card key={idx} {...item} />
				))}
			</section>
		</div>
	);
};

export default Home;
