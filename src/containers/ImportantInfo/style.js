import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

const styles = {
	map: {
		width: '100%',
		height: '20em'
	},

	address: {
		fontFamily: fonts.Quicksand.regular,
	},

	thanks: {
		fontSize: fonts.smaller,
		backgroundColor: colors.lightPink,
		borderRadius: '10px',
	},

	header: {
		fontFamily: fonts.PrincessSofia,
		fontWeight: 400
	},

	thanksHeader: {
		fontSize: fonts.large
	},

	dearGuests: {
		fontFamily: fonts.Quicksand.regular,
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
