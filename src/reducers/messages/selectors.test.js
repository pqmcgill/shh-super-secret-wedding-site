import * as selectors from './selectors';

it('should come with a selector for retriving all messages', () => {
	const { getAllMessages } = selectors;
	const state = {
		messages: {
			all: [1,2,3],
			byId: {
				1: { id: 1, txt: 'test1' },
				2: { id: 2, txt: 'test2' },
				3: { id: 3, txt: 'test3' }
			}
		}
	};
	const expected = [
		{ id: 1, txt: 'test1' },
		{ id: 2, txt: 'test2' },
		{ id: 3, txt: 'test3' }
	];
	const selected = getAllMessages(state);
	expect(selected).toEqual(expected);
});
