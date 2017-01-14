import React from 'react';
import { shallow, mount } from 'enzyme';
import Contact from './';

it('renders without crashing', () => {
	shallow(<Contact />);
});
