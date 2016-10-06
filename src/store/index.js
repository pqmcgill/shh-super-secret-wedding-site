import { createStore } from 'redux';
import rootReducer from '../reducers';

export default state => {
	return createStore(rootReducer, state);
};
