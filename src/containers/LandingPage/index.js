import React, { Component } from 'react';
import { connect } from 'react-redux';
import flowerImg from '../../assets/flower1.png';
import RSVPButton from '../../components/RSVPButton';
import { css } from 'aphrodite';
import styles from './styles';

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
			<div>
				<div className={ css(styles.wrapper) }>
          <img className={ css(styles.flower) } 
            src={ flowerImg } 
            role="presentation"
          />
					<div className={ css(styles.infoWrapper) }>
						<div className={ css(styles.info) } onClick={ this.linkTo.bind(null, '/info') }>
							<h2 className={ css(styles.infoHeader) }>Important Info</h2>
							Find directions and other important information about what to expect
						</div>
						<div className={ css(styles.rsvp) }>
							<RSVPButton textAlignment="bottom"
								reminderText="Don't forget to RSVP!"
								deadlineText="The deadline is May 27, 2017"
							/>
						</div>
					</div>
				</div>
				<div className={ css(styles.quizLink) }>
					Think you know Sam and Pat? Take the quiz to find out!
				</div>
      </div>
    );
  }
}

App.contextTypes = contextTypes;

export default connect()(App);
