import * as types from '../ActionTypes';
import { combineReducers } from 'redux';

const initialState = 'gosh darn';

export const hypeLevel =  (state = initialState, action) => {
	const { level, type } = action;
	switch(type) {
		case types.UPDATE_HYPE:
			return level;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	hypeLevel	
});

export default rootReducer;
