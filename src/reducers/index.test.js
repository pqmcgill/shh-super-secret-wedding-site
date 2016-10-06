import * as types from '../ActionTypes';
import { hypeLevel } from './';

it('should return an initial default state', () => {
	const action = {
		type: '@@INIT'
	};
	const nextState = hypeLevel(undefined, action);
	expect(nextState).toBe('gosh darn');
});

it('should subscribe to UPDATE_HYPE and replace the state with the payload', () => {
	const action = {
		type: types.UPDATE_HYPE,
		level: 'REALLY!!!'
	};
	const state = 'not really';
	const nextState = hypeLevel(state, action);
	expect(nextState).toBe(action.level);
});

it('should ignore unknown states', () => {
	const action = {
		type: 'FOOBAR',
		level: 'F-ING'
	};
	const state = 'not really';
	const nextState = hypeLevel(state, action);
	expect(nextState).toMatch(state);
});
