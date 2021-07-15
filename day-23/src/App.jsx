import React from 'react';
import useToggle from './customHooks/useToggle';
import { useFetch } from './customHooks/useFetch';
import './App.css';

function App() {
	const [val, toggle] = useToggle();

	const { data, loading } = useFetch('https://api.imgflip.com/get_memes');

	if (loading) {
		return <h1>Loading</h1>;
	}

	return (
		<div className='App'>
			{JSON.stringify(data.data)};{val ? <h1>Its True</h1> : <h1>Its False</h1>}
			<button onClick={toggle}>click</button>
		</div>
	);
}

export default App;
