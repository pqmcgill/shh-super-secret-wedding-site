import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../containers/App';
import GuestManagement from '../containers/GuestManagement';
import AdminOnly from './AdminOnly';

export default () => (
	<Router history={ browserHistory } key={ Math.random() }>
		<Route path='/' component={ App } />
		<Route path='/admin' component={ AdminOnly(GuestManagement) } />
	</Router>
);
