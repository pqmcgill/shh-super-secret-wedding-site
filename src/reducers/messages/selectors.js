import { createSelector } from 'reselect';

export const getAllMessages = createSelector(
	state => state.messages,
	messages => messages.all.map(msg => {
		return messages.byId[msg]; 
	})
);
