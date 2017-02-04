import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

const styles = {
	map: {
		width: '100%',
		height: '20em'
	},

	thanks: {
		fontSize: fonts.smaller,
		backgroundColor: colors.lightPink,
		borderRadius: '10px',
	},

	header: {
		fontWeight: 400
	},

	thanksHeader: {
		fontSize: fonts.large
	},

	dearGuests: {
		fontSize: fonts.smaller
	},

	salutation: {
		fontSize: fonts.large
	},

	regards: {
		fontSize: fonts.large
	},
};

export default StyleSheet.create(styles);
