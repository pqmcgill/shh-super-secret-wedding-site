import React from 'react';
import { Field } from 'redux-form';
import YesNoToggle from '../../components/YesNoToggle';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import { RadioButtonGroup } from 'redux-form-material-ui';

const Form = ({ handleSubmit, user }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <p>There are 2 seats saved for you</p>
      <label htmlFor="guestConfirmation">Are you able to atten the wedding, { user.guestName }?</label>
      <Field name="guestConfirmation" component={ YesNoToggle } />
      { user.plusOneName.length > 0 ?
        (
          <div>
            <label htmlFor="plusOneConfirmation">
              Are you able to attend the wedding, { user.plusOneName }?
            </label>
            <Field name="plusOneConfirmation" component={ YesNoToggle } />
          </div>
        ) : (
          <div>
            <label htmlFor="plusOneName">add your plusOne's name here</label>
            <Field name="plusOneName" component="input" />
          </div>
        )
      }
      { user.guestConfirmation ?
        <div>
          <div>
            <p>
              Will you be staying on the property overnight after the wedding? 
              (See Important Info page for more details.)
            </p>
            <Field name="guestOvernight" component={ RadioButtonGroup }>
              <RadioButton value="true" label="Yes, and I know I need to bring my own tent to stay in."/>
              <RadioButton value="false" label="No, I am leaving after the reception and staying elsewhere."/>
            </Field>
          </div>
          <div>
            <p>What would you like for dinner?</p>
            <Field name="guestDinnerSelection" component={ RadioButtonGroup }>
              <RadioButton value="BRISKET" label="brisket" />
              <RadioButton value="PULLED_PORK" label="pulled pork" />
              <RadioButton value="VEGETARIAN" label="vegetarian meal" />
              <RadioButton value="VEGAN" label="vegan meal" />
            </Field>
          </div>
          <div>
            <p>
              To help us get an idea of what drinks to buy, pick one drink you'd most like to have. 
              Water will be available for everyone, and you are not limited to only what you choose here.
            </p>
            <Field name="guestDrinkSelection" component={ RadioButtonGroup }>
              <RadioButton value="BEER" label="beer" />
              <RadioButton value="WINE" label="wine" />
              <RadioButton value="LIQUOR" label="hard liquor" />
              <RadioButton value="NON_ALCOHOLIC" label="non-alcoholic" />
            </Field>
          </div>
        </div> : ''
      }
      <RaisedButton label="Save changes" primary={true} type="submit" />
    </form>
  );
};

export default Form;
