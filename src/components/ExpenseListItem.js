import React from 'react';

// export default (props) => (
// 	<div>
// 		<p>{props.description}</p>
// 		<p>{props.amount}</p>
// 		<p>{props.createdAt}</p>
// 	</div>
// );

const ExpenseListItem = ({ description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{amount} - {createdAt}</p>
	</div>
);

export default ExpenseListItem;