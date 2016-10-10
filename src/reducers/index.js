import { combineReducers } from 'redux';
import hypeLevel from './hypeLevel';
import messages from './messages';

const rootReducer = combineReducers({
	hypeLevel,
	messages	
});

export default rootReducer;
