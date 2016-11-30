import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './';

it('renders without crashing', () => {
	shallow(<App />);
});
