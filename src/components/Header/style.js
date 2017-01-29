import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

const breakPoint1 = layout.maxDeviceWidth('930px');
const breakPoint2 = layout.maxDeviceWidth('530px');

const link = {
	color: colors.blue,
	textDecoration: 'none'
};

export default {

	header: {
		fontFamily: fonts.PrincessSofia,
	},

	title: {
		fontSize: fonts.largest
	},

	titleLink: {
		':link': link,
		':visited': link,
		':hover': link,
		':active': link
	},

	rsvpContainer: {
		fontFamily: fonts.Quicksand.regular,
		fontSize: fonts.medium
	},

	rsvpText: {
		fontSize: '0.45em',
		textAlign: 'left'
	}
};
