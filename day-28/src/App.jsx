import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import WeatherInfo from './Components/WeatherInfo';

const formatData = data => {
	const { current, location } = data;
	const {
		condition: { icon, text },
		temp_c,
		wind_kph,
		precip_mm,
		humidity,
	} = current;
	const { name: city_name } = location;

	return {
		icon,
		text,
		temp_c,
		wind_kph,
		precip_mm,
		humidity,
		city_name,
	};
};

function App() {
	const [weatherInfo, setWeatherInfo] = useState({});
	const url = `http://api.weatherapi.com/v1/current.json?key=1a1202bad9e44bf885e185638213007&`;

	const handleSubmit = async cityName => {
		console.log(cityName);
		const resposne = await fetch(`${url}q=${cityName}`);
		const data = await resposne.json();
		if (data.error) {
			setWeatherInfo({ error: data.error.message });
		} else {
			setWeatherInfo(formatData(data));
		}
	};

	useEffect(() => {
		handleSubmit('cuttack');
	}, []);

	return (
		<div className='App'>
			<InputField handleSubmit={handleSubmit} />
			<WeatherInfo weatherInfo={weatherInfo} />
		</div>
	);
}

export default App;
