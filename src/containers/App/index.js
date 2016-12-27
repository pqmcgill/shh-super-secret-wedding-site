import React from 'react';
import { Match } from 'react-router';
import AdminOnly from '../../hocs/AdminOnly';
import Authenticated from '../../hocs/Authenticated';
import LandingPage from '../LandingPage';
import GuestManagement from '../GuestManagement';
import RSVPForm from '../RSVPForm';

export default (props) => (
  <div>
    <Match exactly pattern='/' component={ LandingPage } />
    <Match pattern='/guest-management' component={ AdminOnly(GuestManagement) }/>
    <Match pattern='/rsvp' component={ Authenticated(RSVPForm) } />
  </div>
);
