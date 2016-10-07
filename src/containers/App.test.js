import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
	mount(<App />);
});

it('should have an onExcitementChange handler which envokes the prop with the e.target.val', () => {
	const mockFn = jest.fn();
	const wrapper = shallow(<App updateHypeLevel={ mockFn } />);
	const instance = wrapper.instance();
	const e = { target: { value: 'foobar' }};
	instance.onHypeChange(e);
	expect(mockFn.mock.calls.length).toBe(1);
	expect(mockFn.mock.calls[0][0]).toBe(e.target.value);
});
