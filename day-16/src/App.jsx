import React, { useState } from 'react';

import Chessboard from './Componenets/Chessboard';
import MemeCard from './Componenets/MemeCard';

import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<MemeCard />
			<Chessboard />
		</div>
	);
}

export default App;
