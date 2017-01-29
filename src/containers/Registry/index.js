import React from 'react';
import { css } from 'aphrodite';

import RSVPButton from '../../components/RSVPButton';
import flower1 from '../../assets/flower1.png';
import flower2 from '../../assets/flower2.png';
import styles from './style';

export default props => (
	<div className={ css(styles.container )}>
		<img 
			className={ css(styles.flower) } 
			src={ flower1 } 
			role="presentation" 
		/>
		<p className={ css(styles.text) }>In lieu of a traditional registry, we are asking for monetary gifts to go towards the down payment on a house.</p>
		<p className={ css(styles.thanks) }>Thanks!</p>
		<RSVPButton 
			textAlignment="bottom"
			reminderText="Don't forget to RSVP!"
			deadlineText="The deadline is May 27, 2017"
		/>
		<img 
			className={ css(styles.flower) } 
			src={ flower2 } 
			role="presentation" 
		/>
	</div>
);
