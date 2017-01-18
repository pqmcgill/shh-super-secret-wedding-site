import React from 'react';
import { css } from 'aphrodite';
import styles from './style';

import RSVPButton from '../../components/RSVPButton';

import mapImg from '../../assets/map.png';
import flower from '../../assets/flower2.png';

export default props => (
	<div className={ css(styles.container) }>
		<div className={ css(styles.infoWrapper) }>
		  <img className={ css(styles.map) } src={ mapImg } role="presentation"/>
		  <div className={ css(styles.reference) }>
		  	<div>
		  		<p>Address</p>
		  		<p>12770 S Jonesville Rd</p>
		  		<p>Columbus, IN 47201</p>
		  		<p>*Jonesville Rd is also IN-11*</p>
		  	</div>
		  	<div>
		  		<p>Contact</p>
		  		<p>Sam's Cell: 812-343-8556</p>
		  		<p>Troy Hill: 812-343-0370</p>
		  		<p>Mindy Hill: 812-390-1140</p>
		  	</div>
		  </div>
		  <div className={ css(styles.thanks) }>
				<h2 className={ css(styles.header, styles.thanksHeader) }>Thank you!</h2>
		  	<p>A huge thanks to Sam's Aunt Mindy and Uncle Troy for offering their home as the wedding location!</p>
		  	<p>THANK YOU!</p>
		  </div>
		</div>
		<div className={ css(styles.dearGuests) }>
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
			<h3 className={ css(styles.centered) }>
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

			<p className={ css(styles.centered) }>Let us know if you have any questions, especially if our website doesn't have the answers.</p>
			<h4 className={ css(styles.header, styles.regards, styles.centered)}>Love, <br /> Sam and Pat</h4>
		</div>
		<div className={ css(styles.flowerWrapper) }>
			<RSVPButton
				textAlignment="bottom"
				reminderText="Don't forget to RSVP!"
				deadlineText="The deadline is May 27, 2017"
			/>
			<img className={ css(styles.flower) } src={ flower } role="presentation" />
		</div>
	</div>

);
