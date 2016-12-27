import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Form from './RSVPFormComponent';

let RSVPForm = reduxForm({
  form: 'rsvp'
})(Form);

const RSVPFormContainer = ({ user }) => {
  const handleSubmit = val => {
    console.log(val);
  };

  const initialValues = {
    guestConfirmation: user.guestConfirmation,
    plusOneConfirmation: user.plusOneConfirmation 
  };

  return (
    <div>
      <RSVPForm onSubmit={ handleSubmit } 
        initialValues={ initialValues } 
        user={ user }
      />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(RSVPFormContainer);
