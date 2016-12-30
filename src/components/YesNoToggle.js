import React from 'react';
import { Toggle } from 'redux-form-material-ui';

const YesNoToggle = props => {
  const floatLeft = { float: 'left' };
  const overflowHidden = { overflow: 'hidden' };

  return (
    <div style={ overflowHidden }>
      <span style={ floatLeft }>No</span>
      <span style={ floatLeft }><Toggle { ...props } /></span>
      <span style={ floatLeft }>Yes</span>
    </div> 
  );
};

export default YesNoToggle;
