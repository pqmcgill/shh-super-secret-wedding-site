import React, { Component } from 'react';
import * as excitementActions from '../actions/excitement';
import Excitement from '../components/Excitement';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../assets/logo.svg';
import './App.css';

export class App extends Component {
	onHypeChange = e => {
		this.props.updateHypeLevel(e.target.value);
	}

  render() {
		const { hypeLevel } = this.props
		return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the official STAMP wedding site!!!</h1>
        </div>
        <p className="App-intro">Coming soon!...</p>
				<Excitement level={ hypeLevel } onChange={ this.onHypeChange }/>
      </div>
    );
  }
}

const mapStateToProps = ({ hypeLevel }) => {
	return {
		hypeLevel
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(excitementActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
