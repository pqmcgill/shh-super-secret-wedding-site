import React from 'react';
import { Field } from 'redux-form';

const Form = ({ handleSubmit, reset }) => {
	const submit = (e) => {
		handleSubmit(e);
		reset();
	}
	return (
		<form onSubmit={ submit }>
			<div>
				<label htmlFor="name">username</label>
				<Field name="name" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="password">password</label>
				<Field name="password" component="input" type="text" />
			</div>
			<button type="submit">RSVP</button>
		</form>
	);
};

export default Form;
