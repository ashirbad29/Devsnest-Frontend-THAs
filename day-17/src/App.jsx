import React from 'react';
import { data } from './utils/data';
import CardContainer from './Components/CardContainer';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Languages Read Only</h1>
			<CardContainer />
		</div>
	);
}

export default App;
