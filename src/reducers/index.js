import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import hypeLevel from './hypeLevel';
import messages from './messages';
import user from './user';
import admin from './admin';

const rootReducer = combineReducers({
	hypeLevel,
	messages,
	user,
	form,
	admin
});

export default rootReducer;
