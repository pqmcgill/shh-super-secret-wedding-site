import * as types from '../ActionTypes';

export const updateHypeLevel = hype => {
	return {
		type: types.UPDATE_HYPE,
		level: hype
	};
};
