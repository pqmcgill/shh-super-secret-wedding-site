import Guid from 'guid';
import * as types from '../../ActionTypes';

export const addMessage = msg => {
	return {
		type: types.ADD_MESSAGE,
		msg: {
			...msg,
			id: Guid.raw()
		}
	};
};
