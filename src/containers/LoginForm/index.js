import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Form from './LoginFormComponent';
import { login } from '../../actions/user';

const LoginForm = reduxForm({
	form: 'login'
})(Form);

const LoginFormContainer = ({ login, user }) => {
	const handleSubmit = val => {
		login(val.username, val.password);
	};

	return (
		<div>
			<LoginForm onSubmit={ handleSubmit } />
			{ user.username ?
				<p>Welcome, { user.username }</p> :
				<p>Please login to RSVP!</p>
			}
      { user.access === 'admin' ? 
        <Link to='/guest-management'>manage guests</Link> : '' 
      }
      { user.access === 'guest' ?
        <Link to='/rsvp'>Click here to RSVP</Link> : ''
      }
		</div>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { login }; 
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
