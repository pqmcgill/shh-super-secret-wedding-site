import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import style from './style';

const propTypes = {
	textAlignment: PropTypes.string,
	reminderText: PropTypes.string.isRequired,
	deadlineText: PropTypes.string.isRequired
};

const defaultProps = {
	textAlignment: 'right'
};

const styles = StyleSheet.create(style);

const RSVPButton = ({ textAlignment, reminderText, deadlineText }) => {
	const containerStyles = textAlignment === 'bottom' ? 
		css(styles.container, styles.textAlignBottom) : 
		css(styles.container);

	const buttonStyles = textAlignment !== 'bottom' ?
		css(styles.button) :
		css(styles.button, styles.buttonAlignBottom)

	const deadlineStyles = textAlignment !== 'bottom' ?
		css(styles.deadlineAlignRight) :
		css(styles.deadline);

	console.log(deadlineStyles);

	return (
		<div className={ containerStyles }>
			<button className={ buttonStyles }>
				RSVP
			</button>
			<div className={ deadlineStyles }>
				<div>{ reminderText }</div>
				<div>{ deadlineText }</div>
			</div>
		</div>
	);
};

RSVPButton.propTypes = propTypes;
RSVPButton.defaultProps = defaultProps;

export default RSVPButton;
