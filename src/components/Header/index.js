import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import styles from './style';
import RSVPButton from '../RSVPButton';

const style = StyleSheet.create(styles);

const Header = (props) => {
	const stickyStyle = props.isSticky ? { marginTop: '40px' } : {};
		 
  return (
		<div id="header" className={ css(style.header) } style={ stickyStyle }>
			<div className={ css(style.title) }>
				<Link className={ css(style.titleLink) } to='/welcome'>
					Sam & Pat
				</Link>
			</div>
			<RSVPButton 
				reminderText="Deadline to RSVP"
				deadlineText="May 27, 2017"
			/>
		</div>
	);
}
export default Header;
