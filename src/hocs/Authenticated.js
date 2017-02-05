import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default ComposedComponent => {
  const Authenticated = ({ authStatus, ...props }) => {
    return (
      <div>
        { authStatus === 'AUTH' ?
        <ComposedComponent { ...props } /> :
        <Redirect to='/welcome' />
        }
      </div>
    ); 
  };

  Authenticated.propTypes = {
    authStatus: PropTypes.string
  };

  const mapStateToProps = state => ({
    authStatus: state.user.status
  });
  
  return connect(mapStateToProps)(Authenticated);
};
