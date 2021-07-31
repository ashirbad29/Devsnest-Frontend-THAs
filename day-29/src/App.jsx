import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import WeatherInfo from './Components/WeatherInfo';

function App() {
	// const [weatherInfo, setWeatherInfo] = useState({});

	// const handleSubmit = async cityName => {
	// 	console.log(cityName);
	// 	const resposne = await fetch(`${url}q=${cityName}`);
	// 	const data = await resposne.json();
	// 	if (data.error) {
	// 		setWeatherInfo({ error: data.error.message });
	// 	} else {
	// 		setWeatherInfo(formatData(data));
	// 	}
	// };

	// useEffect(() => {
	// 	handleSubmit('cuttack');
	// }, []);

	return (
		<div className='App'>
			<InputField />
			<WeatherInfo />
		</div>
	);
}

export default App;
