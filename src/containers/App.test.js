import React from 'react';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should have an onExcitementChange handler which envokes the prop with the e.target.val', () => {
	const updateHypeLevel = spy();
	const wrapper = shallow(<App updateHypeLevel={ updateHypeLevel } />);
	const instance = wrapper.instance();
	const e = { target: { val: 'foobar' }};
	instance.onHypeChange(e);
	expect(updateHypeLevel.calledWith(e))
});
