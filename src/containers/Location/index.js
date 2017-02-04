import React from 'react';
import { css } from 'aphrodite';
import styles from './style';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import RSVPButton from '../../components/RSVPButton';
import Map from '../../components/Map';

import flower from '../../assets/flower2.png';

export default props => (
	<Grid>
		<Row>
			<Col xs={12} sm={12} md={4} lg={4}>
				<div className={ css(styles.map) }>
					<Map />
				</div>
			</Col>
			<Col xs={12} sm={12} md={4} lg={4}
				className={ css(styles.address) }
				>
				<Row center="xs">
					<Col xs={6} md={12}>
						<h3>Address</h3>
						<p>12770 S Jonesville Rd</p>
						<p>Columbus, IN 47201</p>
						<p>*Jonesville Rd is also IN-11*</p>
					</Col>
					<Col xs={6} md={12}>
						<h3>Contact</h3>
						<p>Sam's Cell: 812-343-8556</p>
						<p>Troy Hill: 812-343-0370</p>
						<p>Mindy Hill: 812-390-1140</p>
					</Col>
				</Row>
			</Col>
			<Col xs={0} sm={0} md={4} lg={4} 
				className={ css(styles.thanks) }>
				<h2 className={ css(styles.header, styles.thanksHeader) }>Thank you!</h2>
				<p>A huge thanks to Sam's Aunt Mindy and Uncle Troy for offering their home as the wedding location!</p>
				<p>THANK YOU!</p>
			</Col>
		</Row>
	</Grid>

);
