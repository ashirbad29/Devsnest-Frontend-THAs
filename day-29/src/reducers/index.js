import { combineReducers } from 'redux';
import { placeReducer } from './placeReducer';
import { placeDataReducer } from './placeDataReducer';

const rootReducer = combineReducers({
	place: placeReducer,
	place_data: placeDataReducer,
});
export default rootReducer;
