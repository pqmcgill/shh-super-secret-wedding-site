import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import * as layout from '../../style/layout';

const breakPoint1 = layout.maxDeviceWidth('930px');
const breakPoint2 = layout.maxDeviceWidth('530px');

const link = {
	color: colors.blue,
	textDecoration: 'none'
};

export default {
	header: {
		height: '100px',
		paddingTop: '15px',
		paddingBottom: '15px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		fontFamily: fonts.PrincessSofia,

		...layout.gutter,
		...layout.maxWidth,

		[breakPoint2]: {
			flexDirection: 'column',
			height: 'auto'
		}

	},

	title: {
		fontSize: fonts.largest,

		[breakPoint1]: {
			fontSize: fonts.largerer
		}
	},

	titleLink: {
		':link': link,
		':visited': link,
		':hover': link,
		':active': link
	}
};
