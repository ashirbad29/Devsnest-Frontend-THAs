import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import ToggleTheme from './Components/ToggleTheme';
import WeatherInfo from './Components/WeatherInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatePlaceData } from './actions/index';

function App() {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updatePlaceData('cuttack'));
	}, []);

	return (
		<div className={`App ${theme && 'App-dark'}`}>
			<ToggleTheme />
			<InputField />
			<WeatherInfo />
		</div>
	);
}

export default App;
