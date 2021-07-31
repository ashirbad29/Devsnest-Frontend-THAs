export const formatData = data => {
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
