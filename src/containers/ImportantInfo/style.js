import { StyleSheet } from 'aphrodite';
import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';
import * as layout from '../../style/layout';

const infoDiv = {
	padding: '15px',
	width: '30%',

	fontFamily: fonts.Quicksand.regular
};

const styles = {
	container: {
		...layout.gutter,
		...layout.maxWidth
	},

	infoWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '20px'
	},

	map: {
		...infoDiv
	},

	reference: {
		...infoDiv
	},

	thanks: {
		...infoDiv,

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',

		fontSize: fonts.small,
		backgroundColor: colors.lightPink,
		borderRadius: '10px',
	},

	header: {
		fontFamily: fonts.PrincessSofia,
		fontWeight: 400
	},

	thanksHeader: {
		fontSize: fonts.larger
	},

	dearGuests: {
		fontFamily: fonts.Quicksand.regular,
		fontSize: fonts.small
	},

	salutation: {
		fontSize: fonts.larger
	},

	regards: {
		fontSize: fonts.larger
	},

	centered: {
		textAlign: 'center'
	},

	flowerWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
};

export default StyleSheet.create(styles);
