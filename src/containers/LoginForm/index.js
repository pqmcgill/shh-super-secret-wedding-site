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
			{ user.status === "AUTH" ?
        <div>
          <p>Welcome, { user.username }</p>
          { user.access === 'admin' ? 
          <Link to='/guest-management'>manage guests</Link> :  
          <Link to='/rsvp'>Click here to RSVP</Link> 
          }
          <button onClick={ handleLogout }>Logout</button> 
        </div> 
        : 
        <div>
          <LoginForm onSubmit={ handleSubmit } />
          <p>Please login to RSVP!</p>
        </div>
      }
		</div>
	);
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { login, logout }; 
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
