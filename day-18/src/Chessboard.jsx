import React from 'react';
import './App.css';

export default function App() {
	return (
		<div className='container'>
			{new Array(8).fill().map(() => {
				return (
					<div className='row'>
						{new Array(8).fill().map((val, idx) => (
							<div className='box' />
						))}
					</div>
				);
			})}
		</div>
	);
}
