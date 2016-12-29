import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Form from './LoginFormComponent';
import { login, logout } from '../../actions/user';

const LoginForm = reduxForm({
	form: 'login'
})(Form);

const LoginFormContainer = ({ login, logout, user }) => {
	const handleSubmit = val => {
		login(val.username, val.password);
	};

  const handleLogout = () => {
    logout();
  };

	return (
		<div>
			<LoginForm onSubmit={ handleSubmit } />
			{ user.username ?
				<p>Welcome, { user.username }</p> :
				<p>Please login to RSVP!</p>
			}
      { user.token && user.access === 'admin' ? 
        <Link to='/guest-management'>manage guests</Link> : '' 
      }
      { user.token && user.access === 'guest' ?
        <Link to='/rsvp'>Click here to RSVP</Link> : ''
      }
      { user.token ?
        <button onClick={ handleLogout }>Logout</button> : ''
      }
		</div>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { login, logout }; 
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
