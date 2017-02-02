import { StyleSheet } from 'aphrodite';

import * as fonts from '../../style/fonts';
import * as colors from '../../style/colors';

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},

	antiWrapper: {
		display: 'box'
	},

	content: {
		flex: 1,
	},

	flower: {
		marginTop: '1rem',
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '20px'
	},

	info: {
		fontFamily: fonts.Quicksand.light,
		fontWeight: 200,
		fontSize: fonts.smaller,
		textAlign: 'center',
		paddingBottom: '1em'
	},

	infoHeader: {
		fontFamily: fonts.Quicksand.medium,
		fontSize: fonts.medium,
		fontWeight: 400,
		margin: '0 0 20px 0'
	},

	quizWrapper: {
		display: 'box'
	},

	quizLink: {
		fontSize: fonts.small,
		fontWeight: 200,
		backgroundColor: colors.lightPink,
		fontFamily: fonts.Quicksand.regular,
		paddingTop: '1em',
		paddingBottom: '1em'
	},

	rsvp: {
		fontSize: fonts.medium,
		textAlign: 'center',
		fontFamily: fonts.Quicksand.regular,
		paddingBottom: '1rem'
	},

	rsvpText: {
		fontWeight: 200,
		fontFamily: fonts.Quicksand.regular,
		fontSize: fonts.smallerer,
		paddingBottom: '1rem'
	}
});

export default styles;
