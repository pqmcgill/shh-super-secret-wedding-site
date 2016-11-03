import * as types from '../../ActionTypes';

const statuses = {
	UNAUTH:  'UNAUTH',
	AUTH:    'AUTH',
	PENDING: 'PENDING'
};

const unauthState = { status: statuses.UNAUTH };

export default (state = unauthState, action) => {
	switch(action.type) {
		case types.LOGIN_SUCCESS:
			return {
				...action.user,
				status: statuses.AUTH
			};
		case types.LOGIN_PENDING:
			return {
				status: statuses.PENDING
			};
		case types.UNAUTHORIZED:
		case types.LOGIN_FAILURE:
			return unauthState
		default: return state;
	}
};
