import { combineReducers } from 'redux';
import { placeReducer } from './placeReducer';
import { placeDataReducer } from './placeDataReducer';
import themeReducer from './themeReuducer';

const rootReducer = combineReducers({
	place: placeReducer,
	place_data: placeDataReducer,
	theme: themeReducer,
});

export default rootReducer;
