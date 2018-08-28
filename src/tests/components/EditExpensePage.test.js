import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
			expense={expenses[2]}
		/>
	);
});

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpensePage', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(history.push).toHaveBeenCalledWith('/');
	expect(startEditExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense', () => {
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenCalledWith('/');
	expect(startRemoveExpense).toHaveBeenCalledWith({
		id: expenses[2].id
	});
});