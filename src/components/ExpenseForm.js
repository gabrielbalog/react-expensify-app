import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// const Date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));


export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calendarFocused: false,
		error: ''
	}
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	}
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	}
	onAmountChange = (e) => {
		const amount = e.target.value;
		// Me corrigir REGEX
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	}
	onDataChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({  createdAt }));
		}
	}
	onFocusChange = ({ focused }) => {
		this.setState(() => ({  calendarFocused: focused }));
	}
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Please provide description and amount' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount),
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	}
	render() {
		return (
			<div>
			{this.state.error && <p>{this.state.error}</p>}
			<form onSubmit={this.onSubmit}>
				<input
				type="text"
				placeholder="Description"
				autoFocus
				value={this.state.description}
				onChange={this.onDescriptionChange}
				/>
				<input
				type="text"
				placeholder="Amount"
				onChange={this.onAmountChange}
				/>
				<SingleDatePicker 
					date={this.state.createdAt}
					onDateChange={this.onDataChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
				placeholder="Add a note for your expense (optional)"
				value={this.state.note}
				onChange={this.onNoteChange}
				/>
				<button>Add Expense</button>
			</form>
			</div>
		)
	}
}