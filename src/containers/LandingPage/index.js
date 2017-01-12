import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import flowerImg from '../../assets/flower1.png';
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
				<nav className="navBar gutter">
					<ul className="nav">
						<li>Important Info</li>
						<li>Registry</li>
						<li>Contact</li>
					</ul>
				</nav>
				<div className="App-body gutter">
					<img className="flowerPic" src={ flowerImg } />
					<div className="info-link">
						<h2>Important Info</h2>
						<p>Find directions and other important information about what to expect</p>
					</div>
					<div className="App-body-rsvp">
						<button>RSVP</button>
						<p>Don't forget to RSVP!</p>
						<p>The deadline is May 27, 2017</p>
					</div>
				</div>
				<div className="App-footer gutter">
					Think you know Sam and Pat? Take the quiz to find out!
				</div>
				<LoginForm />
      </div>
    );
  }
}

export default connect()(App);
