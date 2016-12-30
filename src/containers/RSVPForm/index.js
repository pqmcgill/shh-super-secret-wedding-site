import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user'; 

import Form from './RSVPFormComponent';

let RSVPForm = reduxForm({
  form: 'rsvp'
})(Form);

const RSVPFormContainer = ({ user, updateUser }) => {
  const handleSubmit = val => {
    updateUser(user.id, val, user.token);
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
const mapDispatchToProps = { updateUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVPFormContainer);
