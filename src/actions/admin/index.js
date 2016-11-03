import * as types from '../../ActionTypes';

const requestPending = () => {
	return {
		type: types.LOADING_GUEST_CHANGES
	};
};

const addGuestSuccess = (guest) => {
	return {
		type: types.ADD_GUEST,
		guest
	};
};

const addGuestFailure = () => {
	return { 
		type: types.ADD_GUEST_FAILURE
	};
};

const getGuestsSuccess = (guests) => {
	return {
		type: types.UPLOAD_GUESTS,
		guests
	};
};

const getGuestsFailure = (err) => {
	return {
		type: types.UPLOAD_GUESTS_FAILURE,
		err
	};
};

const deleteGuestSuccess = (id) => {
	console.log(id);
	return {
		type: types.DELETE_GUEST,
		id
	};
};

const deleteGuestFailure = (err) => {
	return {
		type: types.DELETE_GUEST_FAILURE,
		err
	};
};

// API
export const getGuests = (token) => {
	return dispatch => {
		dispatch(requestPending());
		fetch('http://localhost:4000/api/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(res => res.json())
		.then(data => dispatch(getGuestsSuccess(data.guests)))
		.catch(err => dispatch(getGuestsFailure(err)));
	};
};

export const addGuest = (guest, token) => {
	console.log('adding guest', guest);
	return dispatch => {
		dispatch(requestPending());
		fetch('http://localhost:4000/api/user', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': token
			},
			body: JSON.stringify({ ...guest, access:"guest" })
		})
		.then(res => res.json())
		.then(data => {
			console.log(data.success);
			return data.success ?
				dispatch(addGuestSuccess(data.guest)) :
				dispatch(addGuestFailure(data))
		})
		.catch(err => {
			console.log('error:', err);
			return dispatch(addGuestFailure(err));
		});
	};
};

export const clearGuests = () => {
	return {
		type: types.CLEAR_ADMIN_STATE
	};
};

export const deleteGuest = (id, token) => {
	return dispatch => {
		dispatch(requestPending());
		fetch('http://localhost:4000/api/user/' + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			return data.success ?
				dispatch(deleteGuestSuccess(id)) :
				dispatch(deleteGuestFailure(data));
		})
		.catch(err => {
			return dispatch(deleteGuestFailure(err));
		});
	};
};
