import { StyleSheet } from 'aphrodite';
import * as colors from '../../style/colors';

const K_WIDTH = 20;
const K_HEIGHT = 20;

export default StyleSheet.create({
	marker: {
		position: 'absolute',
		width: K_WIDTH,
		height: K_HEIGHT,
		left: -K_WIDTH / 2,
		top: -K_HEIGHT / 2,

		border: `2px solid ${colors.pink}`,
		borderRadius: K_HEIGHT,
		backgroundColor: colors.white,
		textAlign: 'center',
		color: colors.blue,
		fontSize: '0.75rem',
		padding: 4
	}
});
