import { StyleSheet } from 'aphrodite';

import * as fonts from '../../style/fonts';
import * as layouts from '../../style/layout';
import * as colors from '../../style/colors';

const bp1 = layouts.maxDeviceWidth('834px');
const bp2 = layouts.maxDeviceWidth('1070px');

const styles = StyleSheet.create({
	wrapper: {
		...layouts.gutter,
		...layouts.maxWidth
	},

	flower: {
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

	infoWrapper: {
		height: 'auto',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingBottom: '30px',

		[bp1]: {
			flexDirection: 'column',
			padding: '0'
		}
	},

	info: {
		width: '40%',
		fontFamily: fonts.Quicksand.light,
		fontWeight: 200,
		fontSize: fonts.small,
		textAlign: 'center',
		[bp1]: {
			width: '90%',
			marginBottom: '40px',
		}
	},

	infoHeader: {
		fontFamily: fonts.Quicksand.medium,
		fontSize: fonts.large,
		fontWeight: 400,
		margin: '0 0 20px 0'
	},

	rsvp: {
		width: '45%',
		[bp1]: {
			width: '90%'
		}
	},

	quizLink: {
		marginTop: '30px',
		fontSize: fonts.medium,
		backgroundColor: colors.lightPink,
		textAlign: 'center',
		fontFamily: fonts.Quicksand.regular,
		padding: '50px 0',

		[bp1]: {
			fontSize: fonts.medium
		},
		[bp2]: {
			fontSize: fonts.small
		},

	}
});

export default styles;
