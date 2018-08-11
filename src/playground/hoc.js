// High Order Component (HOC) - A Component (HOC) that renders another Component
// Reuse Code
// Render hijacking
// Props Manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAdmin && <p>This is a private info. Please don't share!</p> }
			<WrappedComponent {...props}/>
		</div>		
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAuthenticated ? (
				<WrappedComponent {...props}/>
			) : 
			(<p>Not Authenticated</p>) }
		</div>		
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the info." />, document.getElementById('app'));