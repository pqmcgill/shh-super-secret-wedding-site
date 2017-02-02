import React, { Component } from 'react';
import { connect } from 'react-redux';
import flowerImg from '../../assets/flower1.png';
import RSVPButton from '../../components/RSVPButton';
import { css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
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
			<div className={ css(styles.wrapper) }>
				<div className={ css(styles.content) }>
					<div className={ css(styles.antiWrapper) }>
						<Grid fluid> 
							<Row center="xs">
								<Col>
									<img className={ css(styles.flower) } 
										src={ flowerImg } 
										role="presentation"
									/>
								</Col>
							</Row>
							<Row center="xs" middle="xs">
								<Col xs={11} sm={6} md={4} lg={4}
									className={ css(styles.info) } 
									onClick={ this.linkTo.bind(null, '/info') }
									>
									<h2 className={ css(styles.infoHeader) }>Important Info</h2>
									Find directions and other important information about what to expect
								</Col>
								<Col xs={10} sm={6} md={4} lg={4}> 
									<Row center="xs" className={ css(styles.rsvp) }>
										<Col>
											<RSVPButton textAlignment="bottom"
												reminderText="Don't forget to RSVP!"
												deadlineText="The deadline is May 27, 2017"
											/>
										</Col>
									</Row>
									<Row center="xs" className={ css(styles.rsvpText) }>
										<Col>
											Don't forget to RSVP!
										</Col>
										<Col>
											The deadline is May 27, 2017
										</Col>
									</Row>
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
				<div className={ css(styles.quizWrapper) }>
					<Grid fluid className={ css(styles.quizLink) }>
						<Row center="xs">
							<Col xs={12}>
								Think you know Sam and Pat? Take the quiz to find out!
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
					}
					}

					App.contextTypes = contextTypes;

					export default connect()(App);
