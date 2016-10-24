import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import hypeLevel from './hypeLevel';
import messages from './messages';
import user from './user';

const rootReducer = combineReducers({
	hypeLevel,
	messages,
	user,
	form
});

export default rootReducer;
