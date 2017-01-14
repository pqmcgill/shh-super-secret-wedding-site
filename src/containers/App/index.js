import React from 'react';
import { Link, Match, Miss, Redirect } from 'react-router';
import './App.css';
import AdminOnly from '../../hocs/AdminOnly';
import Authenticated from '../../hocs/Authenticated';
import LandingPage from '../LandingPage';
import LoginForm from '../LoginForm';
import ImportantInfo from '../ImportantInfo';
import Registry from '../Registry';
import Contact from '../Contact';
import GuestManagement from '../GuestManagement';
import RSVPForm from '../RSVPForm';

export default (props) => (
  <div className="App">
    <div className="App-header gutter">
      <div className="App-title"><Link to='/welcome'>Sam & Pat</Link></div>
      <div className="App-rsvp">
        <button>RSVP</button>
        <div className="deadline">
          <div>Deadline to RSVP</div>
          <div>May 27, 2017</div>
        </div>
      </div>
    </div>
    <nav className="navBar gutter">
      <ul className="nav">
        <li><Link to='/info'>Important Info</Link></li>
        <li><Link to='/registry'>Registry</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
    <div>
      <Match exactly pattern='/' render={() => (
        <Redirect to='/welcome' />
      )}/>
      <Match pattern='/welcome' component={ LandingPage } />
      <Match pattern='/login' component={ LoginForm } />
      <Match pattern='/info' component={ ImportantInfo } />
      <Match pattern='/guest-management' component={ AdminOnly(GuestManagement) }/>
      <Match pattern='/rsvp' component={ Authenticated(RSVPForm) } />
      <Match pattern='/registry' component={ Registry } />
      <Match pattern='/contact' component={ Contact } />
      <Miss component={ LandingPage } />
    </div>
  </div>
);
