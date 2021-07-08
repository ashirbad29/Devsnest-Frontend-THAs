import React, { useState } from 'react';
import ComponentWithState from './ComponentWithState';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Buttons with different state 🙌</h1>
			<ComponentWithState />
			<ComponentWithState />
			<ComponentWithState />
			<ComponentWithState />
			<ComponentWithState />
		</div>
	);
}

export default App;
