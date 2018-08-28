import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { LoginPage } from '../../components/LoginPage';

test('should corretly render LoginPage', () => {
	const wrapper = shallow(<LoginPage />);
	expect(wrapper).toMatchSnapshot();
});