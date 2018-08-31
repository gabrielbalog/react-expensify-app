import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
	<Link className="list-item" to={`/edit/${id}`}>
	<div>
		<h3>{description}</h3>
		<span>{numeral(amount / 100).format('$0,0.00')} </span>
	</div>
	<h3>{moment(createdAt).format('MMMM Do, YYYY')}</h3>
	</Link>
);



export default connect()(ExpenseListItem);