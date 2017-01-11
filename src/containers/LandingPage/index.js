import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import './LandingPage.css';
import '../../index.css';
import LoginForm from '../LoginForm';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header gutter">
						<div className="App-title">Sam & Pat</div>
						<div className="App-rsvp">
							<button>RSVP</button>
							<div className="deadline">
								<div>Deadline to RSVP</div>
								<div>May 27, 2017</div>
							</div>
						</div>
				</div>
				<nav className="navBar">
					<ul className="nav">
						<li>Important Info</li>
						<li>Registry</li>
						<li>Contact</li>
					</ul>
				</nav>
				<LoginForm />
      </div>
    );
  }
}

export default connect()(App);
