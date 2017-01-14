import React from 'react';
import { shallow, mount } from 'enzyme';
import Registry from './';

it('renders without crashing', () => {
	shallow(<Registry />);
});
