import { getUrl } from '../utils/getUrl';
import { formatData } from '../utils/formatData';

export const updatePlace = payload => {
	return {
		type: 'UPDATE_PLACE',
		payload,
	};
};

export const updatePlaceData = place => {
	return dispatch => {
		fetch(getUrl(place))
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: 'UPDATE_PLACE_DATA',
					payload: formatData(data),
				});
			});
	};
};

export const toggleTheme = () => {
	return { type: 'TOGGLE_THEME' };
};
