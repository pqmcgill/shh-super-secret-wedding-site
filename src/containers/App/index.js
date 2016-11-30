import React from 'react';
import { Match } from 'react-router';
import AdminOnly from '../../hocs/AdminOnly';
import LandingPage from '../LandingPage';
import GuestManagement from '../GuestManagement';

export default (props) => (
  <div>
    <Match exactly pattern='/' component={ LandingPage } />
    <Match pattern='/guest-management' component={ AdminOnly(GuestManagement) }/>
  </div>
);
