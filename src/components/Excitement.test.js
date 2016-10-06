import React from 'react';
import { spy } from 'sinon';
import { mount, shallow } from 'enzyme';
import Excitement from './Excitement';

it('should mount the component successfully', () => {
	mount(<Excitement />);
});

const props = {
	level: 'super',
	onChange: spy()
};

it('should render an input with value set by level prop', () => {
	const wrapper = shallow(<Excitement { ...props } />)
	expect(wrapper.find('#excite_lvl').props().value).toBe(props.level);
});

it('should call the onChange prop when the input value changes', () => {
	const wrapper = mount(<Excitement { ...props } />);
	wrapper.find('#excite_lvl').simulate('change', { target: { val: 'a' } });
	expect(props.onChange.called).toBe(true);
	expect(props.onChange.getCall(0).args[0].target.val).toBe('a');
});
