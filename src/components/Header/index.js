import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import styles from './style';
import RSVPButton from '../RSVPButton';

const style = StyleSheet.create(styles);

const Header = (props) => {
	const stickyStyle = props.isSticky ? { marginTop: '40px' } : {};
		 
	return (
		<Grid id="header" fluid className={ css(style.component, style.header) }>
			<Row middle="xs" center="xs">
				<Col xs={12} sm={12} md={6} lg={6}>
					<div className={ css(style.title) }>
						<Link className={ css(style.titleLink) } to='/welcome'>
							Sam & Pat
						</Link>
					</div>
				</Col>
				<Col xs={12} sm={6} md={6} lg={6} >
					<div className={ css(style.rsvpContainer) }>
						<Row middle="xs">
							<Col xs={12} sm={6} md={6} lg={6}>
								<RSVPButton 
									reminderText="Deadline to RSVP"
									deadlineText="May 27, 2017"
								/>
							</Col>
							<Col xs={6} sm={6} md={6} lg={6}>
								<p className={ css(style.rsvpText) }>
									Deadline to RSVP<br />
									May 27, 2017
								</p>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</Grid>
	);
}
export default Header;
