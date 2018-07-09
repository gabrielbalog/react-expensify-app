import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>
		This is from dashboard Page
	</div>
);

const AddExpensePage = () => (
	<div>
		This is from add expense Page
	</div>
);

const EditExpensePage = () => (
	<div>
		This is from edit expense Page
	</div>
);

const HelpPage = () => (
	<div>
		This is from help Page
	</div>
);

const NotFoundPage = () => (
	<div>
		404 - <Link to="/">Go Home</Link>
	</div>
);

const Header = () => (
	<div>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
		<NavLink to="/help" activeClassName="is-active">Helo</NavLink>
	</div>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpensePage}/>
				<Route path="/edit" component={EditExpensePage}/>
				<Route path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));