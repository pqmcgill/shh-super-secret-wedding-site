import { combineReducers } from 'redux';
import hypeLevel from './hypeLevel';
import messages from './messages';
import user from './user';

const rootReducer = combineReducers({
	hypeLevel,
	messages,
	user	
});

export default rootReducer;
