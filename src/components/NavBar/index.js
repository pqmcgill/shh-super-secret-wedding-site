import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import styleObject from './style';

const styles = StyleSheet.create(styleObject);

const NavBar = (props) => {

	const stickyStyle = props.isSticky ?
		{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 } :
		{ position: 'static' };

	return (
		<div className={ css(styles.wrapper) }>
		<Grid fluid
			className={ css(styles.navBar) }
			style={ stickyStyle }
			>
			<Row className={ css(styles.nav) } 
				center="xs" start="md,lg">
				<Col mdOffset={1} lgOffset={1}>
					<Link className={ css(styles.link) } to='/'>
						Location
					</Link>
				</Col>
				<Col>
					<Link className={ css(styles.link) } to='/info'>
						FAQ
					</Link>
				</Col>
				<Col>
					<Link className={ css(styles.link) } to='/registry'>
						Registry
					</Link>
				</Col>
				<Col>
					<Link className={ css(styles.link) } to='/contact'>
						Contact
					</Link>
				</Col>
			</Row>
		</Grid>
	</div>
	);
}

export default NavBar;
