import { isGuid } from 'guid';
import * as types from '../../ActionTypes';
import * as actions from './';

it('should create an add message action with a message object that has a unique id', () => {
	const msg = { foo: 'bar' };
	const test = actions.addMessage(msg);
	expect(Object.keys(test)).toEqual(['type', 'msg']);
	expect(Object.keys(test.msg)).toEqual(['foo', 'id']);
	expect(test.msg.foo).toBe('bar');
	expect(isGuid(test.msg.id)).toBe(true);
	expect(test.type).toBe(types.ADD_MESSAGE);
});
