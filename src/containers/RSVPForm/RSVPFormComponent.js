import React from 'react';
import { Field } from 'redux-form';
import { Checkbox } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const Form = ({ handleSubmit, user }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="guestConfirmation">Are you coming, { user.guestName }?</label>
      <Field name="guestConfirmation" component={ Checkbox } />
      { (user.plusOneName && user.plusOneName.length > 0) ?
        (
          <div>
            <label htmlFor="plusOneConfirmation">Are you coming, { user.plusOneName }?</label>
            <Field name="plusOneConfirmation" component={ Checkbox } /> 
          </div>
        ) : (
          <div>
            <label htmlFor="plusOneName">add your plusOne's name here</label>
            <Field name="plusOneName" component="input" />
          </div>
        )
      }
      <RaisedButton label="Save changes" primary={true} type="submit" />
    </form>
  );
};

export default Form;
