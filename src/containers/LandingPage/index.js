import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import './LandingPage.css';
import LoginForm from '../LoginForm';

export class App extends Component {
  render() {
		return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the official <strong>STAMP</strong> wedding site!!!</h1>
        </div>
        <p className="App-intro">Coming soon!...</p>
				<LoginForm />
      </div>
    );
  }
}

export default connect()(App);
