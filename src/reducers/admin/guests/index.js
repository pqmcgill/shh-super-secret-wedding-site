import { combineReducers } from 'redux';
import * as types from '../../../ActionTypes';

export const byId = (state = {}, action) => {
	const { guest, guests, id } = action;
	switch(action.type) {
		case types.CLEAR_ADMIN_STATE:
			return {};
		case types.UPLOAD_GUESTS:
			return guests
		case types.ADD_GUEST:
		case types.EDIT_GUEST:
			return { ...state, [guest._id]: guest };

		case types.DELETE_GUEST:
			console.log(state);
			const newState = Object.keys(state)
				.filter(key => key !== id)
				.reduce((next, guestId) => {
					return { ...next, [guestId]: state[guestId] };
				}, {});
			console.log(newState);
			return newState;
		default: return state;
	}
};

export const all = (state = [], action) => {
	switch(action.type) {
		case types.ADD_GUEST_FAILURE:
		case types.CLEAR_ADMIN_STATE:
			return [];

		case types.ADD_GUEST:
			return [ ...state, action.guest.id ];

		case types.DELETE_GUEST:
			return [ 
				...state.slice(0, state.indexOf(action.id)),
				...state.slice(state.indexOf(action.id) + 1, state.length)
			];

		default: return state;
	}
};

export const loading = (state = false, action) => {
	switch(action.type) {
		case types.CLEAR_ADMIN_STATE:
		case types.ADD_GUEST:
		case types.ADD_GUEST_FAILURE:
		case types.DELETE_GUEST:
		case types.DELETE_GUEST_FAILURE:
		case types.EDIT_GUEST:
		case types.EDIT_GUEST_FAILURE:
		case types.UPLOAD_GUESTS:
		case types.UPLOAD_GUESTS_FAILURE:
			return false;
		case types.LOADING_GUEST_CHANGES:
			return true;
		default: return state;
	}
};

export default combineReducers({
	loading,
	byId,
	all
});
