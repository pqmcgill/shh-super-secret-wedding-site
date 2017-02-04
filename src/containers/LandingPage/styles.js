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
		fontWeight: 200,
		fontSize: fonts.smaller,
		textAlign: 'center',
		paddingBottom: '1em'
	},

	infoHeader: {
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
		paddingTop: '1em',
		paddingBottom: '1em'
	},

	rsvp: {
		fontSize: fonts.medium,
		textAlign: 'center',
		paddingBottom: '1rem'
	},

	rsvpText: {
		fontWeight: 200,
		fontSize: fonts.smallerer,
		paddingBottom: '1rem'
	}
});

export default styles;
