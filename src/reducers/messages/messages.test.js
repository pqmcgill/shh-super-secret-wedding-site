import * as types from '../../ActionTypes';
import messages from './';

const initState = { all: [], byId: {} };

it('should be defined', () => {
	expect(messages).not.toBe(undefined);
});

it('should initialize state if left undefined', () => {
	const action = { type: '@@INIT' };
	const nextState = messages(undefined, action);
	expect(nextState).toEqual(initState);
});

it('should subscribe to ADD_MESSAGE and add message to state', () => {
	const prevState = initState;
	const action = { 
		type: 'ADD_MESSAGE', 
		msg: { 
			id: 123, 
			txt: 'foo' 
		}
	};
	const nextState = messages(prevState, action);
	expect(Object.keys(nextState.byId).length).toBe(1);
	expect(nextState.byId[123]).toEqual({ id: 123, txt: 'foo' });
	expect(nextState.all.length).toBe(1);
	expect(nextState.all[0]).toEqual(action.msg.id);
	expect(nextState.byId[123].txt).toBe('foo');
});

it('should ignore unknown action types', () => {
	const action = { type: types.UNKNOWN };
	const prevState = { all: [], byId: [] };
	const nextState = messages(prevState, action);
	expect(nextState).toEqual(prevState);
});

