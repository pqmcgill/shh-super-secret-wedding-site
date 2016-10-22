import * as types from '../../ActionTypes';

const initState = { all: [], byId: {} };

export default (state = initState, { type, msg }) => {
	switch(type) {
		case types.ADD_MESSAGE:
			return {
				byId: { 
					...state.byId, 
					[msg.id]: { ...msg } 
				},
				all: [ ...state.all, msg.id ]
			};
		default: return state;
	}
};


