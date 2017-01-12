import React, { Component } from 'react';
import { connect } from 'react-redux';
import flowerImg from '../../assets/flower1.png';
import './LandingPage.css';
import '../../index.css';

const contextTypes = {
  router: React.PropTypes.object
};

export class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.linkTo = this.linkTo.bind(this);
  }

  linkTo (path) {
    this.context.router.transitionTo(path);
  }

	render() {
		return (
			<div className="App">
				<div className="App-body gutter">
          <img className="flowerPic" 
            src={ flowerImg } 
            role="presentation"
          />
          <div className="info-link" onClick={ this.linkTo.bind(null, '/info') }>
						<h2>Important Info</h2>
						<p>Find directions and other important information about what to expect</p>
					</div>
					<div className="App-body-rsvp">
            <button onClick={ this.linkTo.bind(null, '/login')}>RSVP</button>
						<p>Don't forget to RSVP!</p>
						<p>The deadline is May 27, 2017</p>
					</div>
				</div>
				<div className="App-footer gutter">
					Think you know Sam and Pat? Take the quiz to find out!
				</div>
      </div>
    );
  }
}

App.contextTypes = contextTypes;

export default connect()(App);
