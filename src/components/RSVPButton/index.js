import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import style from './style';

const styles = StyleSheet.create(style);

const RSVPButton = () => {
	return (
		<div>
			<button className={ `${css(styles.button)} quicksandLight` }>
				RSVP
			</button>
		</div>
	);
};

export default RSVPButton;
