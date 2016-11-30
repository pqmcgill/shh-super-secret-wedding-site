import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Form from './RSVPFormComponent';
import { login } from '../../actions/user';

const RSVPForm = reduxForm({
	form: 'rsvp'
})(Form);

const RSVPFormContainer = ({ login, user }) => {
	const handleSubmit = val => {
		login(val.name, val.password);
	};

	return (
		<div>
			<RSVPForm onSubmit={ handleSubmit } />
			{ user.name ?
				<p>Welcome, { user.name }</p> :
				<p>Please RSVP!</p>
			}
			{ user.access === 'admin' ? <Link to='/guest-management'>manage guests</Link> : '' }
		</div>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { login }; 
export default connect(mapStateToProps, mapDispatchToProps)(RSVPFormContainer);
