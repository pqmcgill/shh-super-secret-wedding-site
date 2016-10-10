import React from 'react';
import { shallow, mount } from 'enzyme';
import * as types from '../../ActionTypes';
import MessageList from './';

const props = {
	messages: [
		{ id: 1, txt: 'foo' },
		{ id: 2, txt: 'bar' }
	]
};

it('should render MessageBoard with no messages', () => {
	shallow(<MessageList { ...props } />);
});

it('should render MessageBoard with messages', () => {
	shallow(<MessageList { ...props } />);
});

it('should create li\'s for each message', () => {
	const wrapper = shallow(<MessageList { ...props } />);
	const lis = wrapper.find('li');
	expect(lis.length).toBe(2);
	expect(lis.map(li => li.text())).toEqual(['foo', 'bar']);
});

it('should update list of messages when props change', () => {
	const wrapper = shallow(<MessageList { ...props } />);
	expect(wrapper.find('li').length).toBe(2);
	wrapper.setProps({ messages: [
		...props.messages,
		{ id: 3, txt: 'boo' }
	]});
	expect(wrapper.find('li').length).toBe(3);
});
