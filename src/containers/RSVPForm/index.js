import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Form from './RSVPFormComponent';
import * as userActions from '../../actions/user';

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
			{ user.access === 'admin' ? <Link to='/admin'>manage guests</Link> : '' }
		</div>
	);
};

const mapStateToProps = state => ({
	user: state.user
});

const mapDispatchToProps = dispatch => 
	bindActionCreators({
		login: userActions.login
	}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RSVPFormContainer);
