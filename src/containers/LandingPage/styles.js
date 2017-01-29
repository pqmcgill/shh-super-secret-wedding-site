import { StyleSheet } from 'aphrodite';

import * as fonts from '../../style/fonts';
import * as layouts from '../../style/layout';
import * as colors from '../../style/colors';

const styles = StyleSheet.create({
	wrapper: {
		textAlign: 'center'
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

	},

	info: {
		width: '40%',
		fontFamily: fonts.Quicksand.light,
		fontWeight: 200,
		fontSize: fonts.small,
		textAlign: 'center',
	},

	infoHeader: {
		fontFamily: fonts.Quicksand.medium,
		fontSize: fonts.large,
		fontWeight: 400,
		margin: '0 0 20px 0'
	},

	rsvp: {
		width: '45%',
	},

	quizLink: {
		marginTop: '30px',
		fontSize: fonts.medium,
		backgroundColor: colors.lightPink,
		textAlign: 'center',
		fontFamily: fonts.Quicksand.regular,
		padding: '50px 0',


	}
});

export default styles;
