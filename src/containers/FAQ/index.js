import React from 'react';
import { css } from 'aphrodite';
import styles from './style';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import RSVPButton from '../../components/RSVPButton';
import Map from '../../components/Map';

import flower from '../../assets/flower2.png';

export default props => (
	<Grid>
		<div className={ css(styles.dearGuests) + ' quicksandRegular' }>
			<h1 className={ css(styles.header, styles.salutation) }>Dear Friends and Family</h1>
			<p>
				If you are flying in, we suggest these airports: <br /><br />
				<strong>Indianapolis</strong> or <strong>Louisville</strong> <br />

				Columbus is just north of the halfway point for Indy and Louisville.
				Both airports will require you to drive I-65 to the wedding. If you're
				coming from Indy take exit 64 for IN-58 W toward Walesboro/Ogilville and
				turn left. If you're coming from Louisville, take exit 64 for IN-58 W
				toward Walesboro/Ogilville and turn right.<br /><br /><br />

				Where will you stay?<br /><br />

				We suggest you bring camping equipment and sleep on the property. We will be!
				SERIOUSLY, bring a tent. You can get drunk as a skunk and not need to go any
				further than a few stumbling feet to sleep.<br /><br />

				But if you want to stay in a hotel, the wedding will take place halfway between
				Columbus and Seymour. Roughly 15 min either way.
			</p>
			<ul>
				<li>Indy Bound: Book a hotel on SR 46 in Columbus. It's right off the interstate.</li>
				<li>Louisville Bound: Book a hotel in Seymour. It's right off the interstate... Columbus has more to offer</li>
			</ul>
			<h3>
				There will not be a designated shuttle. If you plan to drink, plan accordingly.
				We want everyone to be safe.
			</h3>
			<p>
				What do you wear?<br /><br />
				It's an outdoor wedding. Forget the suit, but don't settle for jeans. The bride will be wearing flats,
				we hope you do too.<br /><br /><br />

				And last but not least...<br /><br />

				We are making a Facebook event! It's for guest-to-guest communication. You can post
				things like "Does anyone need a ride from the airport?" or "Does anyone have a tent I can borrow?"
				or "I'm not sleeping on the property. Will there be any sober drivers to catch a ride with?"
				Check it out!
			</p>

			<p>Let us know if you have any questions, especially if our website doesn't have the answers.</p>
			<h4 className={ css(styles.header, styles.regards)}>Love, <br /> Sam and Pat</h4>
		</div>
		<div className={ css(styles.flowerWrapper) }>
			<RSVPButton />
			<img src={ flower } role="presentation" />
		</div>
	</Grid>

);
