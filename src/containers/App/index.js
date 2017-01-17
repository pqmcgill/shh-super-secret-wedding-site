import React, { Component } from 'react';
import { Match, Miss, Redirect } from 'react-router';

import AdminOnly from '../../hocs/AdminOnly';
import Authenticated from '../../hocs/Authenticated';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import LandingPage from '../LandingPage';
import LoginForm from '../LoginForm';
import ImportantInfo from '../ImportantInfo';
import Registry from '../Registry';
import Contact from '../Contact';
import GuestManagement from '../GuestManagement';
import RSVPForm from '../RSVPForm';

export default class App extends Component {
	constructor (props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
		 isSticky: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		const headerHeight = document.getElementById('header').clientHeight;
		const scrollTop = e.srcElement.scrollingElement.scrollTop;

		if (scrollTop + 1 >= headerHeight) {
			this.setState({
				isSticky: true
			});
		} else {
			this.setState({
				isSticky: false
			});
		}
	}

	render () {
		return (
			<div>
				<Header isSticky={ this.state.isSticky }/>
				<NavBar isSticky={ this.state.isSticky }/>
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
	}
}
