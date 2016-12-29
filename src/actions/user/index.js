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

const updateUserSuccess = updatedUser => {
  return {
    type: types.UPDATE_USER_SUCCESS,
    updatedUser
  };
};

const updateUserFailure = err => {
  return {
    type: types.UPDATE_USER_FAILURE,
    err
  };
};

const updateUserPending = () => {
  return {
    type: types.UPDATE_USER_PENDING
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

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const updateUser = (userId, newUser, token) => {
  return dispatch => {
    dispatch(updateUserPending());
    return fetch(`http://localhost:4000/api/user/${userId}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': token
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        return data.success ?
          dispatch(updateUserSuccess(data.updated)) :
          dispatch(updateUserFailure(data));
      })
      .catch(err => dispatch(updateUserFailure(err)));
  };
};
