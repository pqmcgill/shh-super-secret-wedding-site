import * as types from '../../ActionTypes';
const initialState = 'gosh darn';

export default (state = initialState, action) => {
	const { level, type } = action;
	switch(type) {
		case types.UPDATE_HYPE:
			return level;
		case types.ADD_MESSAGE:
			return '';
		default:
			return state;
	}
};
