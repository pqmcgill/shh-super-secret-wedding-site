import React from 'react';
import { css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import RSVPButton from '../../components/RSVPButton';
import flower1 from '../../assets/flower1.png';
import flower2 from '../../assets/flower2.png';
import styles from './style';

export default props => (
	<Grid fluid className={ css(styles.container )}>
		<Row center="xs">
			<Col>
				<img 
					className={ css(styles.flower) } 
					src={ flower1 } 
					role="presentation" 
				/>
			</Col>
		</Row>
		<Row center="xs">
			<Col xs={11} md={8} lg={6}>
				<p className={ css(styles.text) }>In lieu of a traditional registry, we are asking for monetary gifts to go towards the down payment on a house.</p>
			</Col>
		</Row>
		<Row center="xs">
			<Col>
				<p className={ css(styles.thanks) }>Thanks!</p>
			</Col>
		</Row>
		<Row center="xs" className={ css(styles.button) }>
			<Col>
				<RSVPButton 
					textAlignment="bottom"
					reminderText="Don't forget to RSVP!"
					deadlineText="The deadline is May 27, 2017"
				/>
			</Col>
		</Row>
		<Row center="xs" className={ css(styles.buttonText) }>
			<Col>
				<p>Don't forget to RSVP!<br />The deadline is May 27, 2017.</p>
			</Col>
		</Row>
		<Row center="xs">
			<Col xs={6}>
				<img 
					className={ css(styles.flower) } 
					src={ flower2 } 
					role="presentation" 
				/>
			</Col>
		</Row>
	</Grid>
);
