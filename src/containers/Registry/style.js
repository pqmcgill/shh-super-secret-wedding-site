import { StyleSheet } from 'aphrodite';

import * as layout from '../../style/layout';
import * as fonts from '../../style/fonts';
//import * as colors from '../../style/colors';

export default StyleSheet.create({
	container: {
		...layout.gutter,
		...layout.maxWidth,
		fontFamily: fonts.Quicksand.regular,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	flower: {
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

	text: {
		fontSize: fonts.regular,
		textAlign: 'center'
	},

	thanks: {
		fontFamily: fonts.PrincessSofia,
		fontSize: fonts.larger
	}
});
