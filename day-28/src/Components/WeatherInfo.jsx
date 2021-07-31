import React from 'react';

const WeatherInfo = ({ weatherInfo }) => {
	if (weatherInfo.error) {
		return (
			<div className='info__container'>
				<h2>{weatherInfo.error}</h2>
			</div>
		);
	}

	return (
		<div className='info__container'>
			<img src={weatherInfo.icon} alt='' />
			<h1>{weatherInfo.temp_c}&deg;</h1>
			<p>{weatherInfo.text}</p>
			<h3>{weatherInfo.city_name}</h3>
			<div className='row__list'>
				<div className='cols'>
					<p>Wind Now</p>
					<h3>{weatherInfo.wind_kph}&#13214;</h3>
				</div>
				<div className='cols'>
					<p>Humidity</p>
					<h3>{weatherInfo.humidity}&#37;</h3>
				</div>
				<div className='cols'>
					<p>Precipitation</p>
					<h3>{weatherInfo.precip_mm}&#37;</h3>
				</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
