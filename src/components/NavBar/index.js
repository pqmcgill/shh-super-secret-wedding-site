import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import styleObject from './style';

const styles = StyleSheet.create(styleObject);

const NavBar = (props) => {

	const stickyStyle = props.isSticky ?
		{ position: 'fixed', top: 0, left: 0, right: 0 } :
		{ position: 'static' };

	return (
		<nav className={ css(styles.navBar, styles.gutter) } style={ stickyStyle }>
			<ul className={ css(styles.nav) }>
				<li>
					<Link className={ css(styles.link) } to='/info'>
						Important Info
					</Link>
				</li>
				<li>
					<Link className={ css(styles.link) } to='/registry'>
						Registry
					</Link>
				</li>
				<li>
					<Link className={ css(styles.link) } to='/contact'>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
