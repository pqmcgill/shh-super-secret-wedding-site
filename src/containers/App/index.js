import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AdminOnly from '../../hocs/AdminOnly';
import Authenticated from '../../hocs/Authenticated';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import LandingPage from '../LandingPage';
import LoginForm from '../LoginForm';
import FAQ from '../FAQ';
import Location from '../Location';
import Registry from '../Registry';
import Contact from '../Contact';
import GuestManagement from '../GuestManagement';
import RSVPForm from '../RSVPForm';

import { css, StyleSheet } from 'aphrodite';

const style = StyleSheet.create({
	wrapper: {
		overflowX: 'hidden',
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'column'
	},

	content: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column'
	}

});

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
			<div className={ css(style.wrapper) }>
				<Switch>
					<Route path='/login' render={() => <h1>Login</h1>} />
					<Route path='/rsvp' render={() => <h1>Rsvp</h1>} />
					<Route render={() => 
						<div>
							<Header isSticky={ this.state.isSticky }/>
							<NavBar isSticky={ this.state.isSticky }/>
							<div className={ css(style.content) }>
								<Route exactly pattern='/' render={() => (
									<Redirect to='/welcome' />
									)}/>
								<Route path='/welcome' component={ LandingPage } />
								<Route path='/login' component={ LoginForm } />
								<Route path='/location' component={ Location } />
								<Route path='/faq' component={ FAQ } />
								<Route path='/guest-management' component={ AdminOnly(GuestManagement) }/>
								<Route path='/rsvp' component={ Authenticated(RSVPForm) } />
								<Route path='/registry' component={ Registry } />
								<Route path='/contact' component={ Contact } />
							</div>
						</div>
					} />
				</Switch>
			</div>
		);
	}
}
