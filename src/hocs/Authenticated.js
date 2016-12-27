import React, { PropTypes } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

export default ComposedComponent => {
  const Authenticated = ({ authStatus, ...props }) => (
    <div>
      { authStatus === 'AUTH' ?
        <ComposedComponent { ...props } /> :
        <Redirect to='/' />
      }
    </div>
  ); 

  Authenticated.propTypes = {
    authStatus: PropTypes.string
  };

  const mapStateToProps = state => ({
    authStatus: state.user.status
  });
  
  return connect(mapStateToProps)(Authenticated);
};
