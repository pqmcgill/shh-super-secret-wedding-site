import React, { Component } from 'react';
import { addMessage } from '../../actions/message';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import Excitement from '../../components/Excitement';
import { getAllMessages } from '../../reducers/messages/selectors';
import './App.css';
import RSVPForm from '../RSVPForm';

export class App extends Component {
	onHypeChange = e => {
		this.props.updateHypeLevel(e.target.value);
	}

  render() {
		const { hypeLevel, messages, addMessage } = this.props
		return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the official <strong>STAMP</strong> wedding site!!!</h1>
        </div>
        <p className="App-intro">Coming soon!...</p>
				<Excitement 
					onChange={ this.onHypeChange } 
					addMessage={ addMessage }
					messages={ messages }
					level={ hypeLevel } />
				<RSVPForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		hypeLevel: state.hypeLevel,
		messages: getAllMessages(state)
	};
};

const mapDispatchToProps = {
	addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
