import * as types from '../../ActionTypes';

const loginSuccess = user => {
	return {
		type: types.LOGIN_SUCCESS,
		user
	};
};

const loginFailure = err => {
	return {
		type: types.LOGIN_FAILURE,
		err
	};
};

const loginPending = () => {
	return {
		type: types.LOGIN_PENDING
	};
};

export const login = (username, password) => {
	return dispatch => {
		dispatch(loginPending());
		return fetch('http://localhost:4000/api/user/authenticate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		})
		.then(res => res.json())
		.then(data => {
			return data.success ?
				dispatch(loginSuccess(data.user)) :
				dispatch(loginFailure(data));
		})
		.catch(err => dispatch(loginFailure(err)));
	};
};

