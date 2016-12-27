import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addGuest } from '../../actions/admin';
import { Field } from 'redux-form';

const Form = ({ handleSubmit, reset }) => {
	const submit = e => {
		handleSubmit(e);
		reset();
	}
	return (
		<form onSubmit={ submit }>
			<div>
				<label htmlFor="username">username</label>
				<Field name="username" component="input" type="text" />
			</div>
			<button type="submit">Add Guest</button>
		</form>
	);
};

const AddGuestForm = reduxForm({
	form: 'addGuest'
})(Form);

const AddGuestFormContainer = ({ addGuest, token }) => {
	const handleSubmit = val => {
    const guests = val.username.split('.');
    const guestName = guests[0];
    const plusOneName = guests[1] || '';
		addGuest({ ...val, guestName, plusOneName }, token);
	};

	return (
		<AddGuestForm onSubmit={ handleSubmit } />
	);
};

const mapStateToProps = ({ user }) => ({ token: user.token });
const mapDispatchToProps = { addGuest };
export default connect(mapStateToProps, mapDispatchToProps)(AddGuestFormContainer);
