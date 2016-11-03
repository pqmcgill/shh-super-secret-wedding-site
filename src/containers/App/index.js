import React from 'react';
import { Match } from 'react-router';
import AdminOnly from '../../hocs/AdminOnly';
import LandingPage from '../LandingPage';
import GuestManagement from '../GuestManagement';

export default (props) => (
  <div>
    <Match exactly pattern='/' component={ LandingPage } />
    <Match pattern='/admin' component={ AdminOnly(GuestManagement) }/>
  </div>
);
