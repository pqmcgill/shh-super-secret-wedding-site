import * as types from '../../ActionTypes';
import * as actions from './';

it('should create updateHype action with new hype', () => {
	const hype = 'new hype';
	const expected = {
		type: types.UPDATE_HYPE,
		level: hype
	};
	const test = actions.updateHypeLevel(hype);
	expect(test).toEqual(expected);
});
