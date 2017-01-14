import React from 'react';
import { shallow, mount } from 'enzyme';
import ImportantInfo from './';

it('renders without crashing', () => {
	shallow(<ImportantInfo />);
});
