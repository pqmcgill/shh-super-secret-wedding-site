import React from 'react';
import { mount, shallow } from 'enzyme';
import Excitement from './Excitement';

it('should mount the component successfully', () => {
	mount(<Excitement />);
});

const props = {
	level: 'super',
	onChange: jest.fn()
};

it('should render an input with value set by level prop', () => {
	const wrapper = shallow(<Excitement { ...props } />)
	expect(wrapper.find('#excite_lvl').props().value).toBe(props.level);
});

it('should call the onChange prop when the input value changes', () => {
	const wrapper = mount(<Excitement { ...props } />);
	const e = { target: { value: 'a' }};
	wrapper.find('#excite_lvl').simulate('change', e);
	expect(props.onChange.mock.calls.length).toBe(1);
	console.log(props.onChange.mock.calls);
	expect(props.onChange.mock.calls[0][0].target.value).toBe(e.target.value);
});
