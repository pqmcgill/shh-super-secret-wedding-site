import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import * as layout from '../../style/layout';

const link = {
	color: colors.blue,
	textDecoration: 'none'
};

const bpLarge = layout.maxDeviceWidth('1070px');
const bpLargeRet = layout.maxDeviceWidth('1070px');
const bpMed = layout.maxDeviceWidth('830px');
//const bpMedRet = layout.maxDeviceWidthRetina('830px');
//const bpMedLandscape = layout.andLandscape(bpMed);
const bpSmall = layout.maxDeviceWidth('470px');
//const bpSmallRet = layout.maxDeviceWidth('470px');

export default {
	header: {
		height: '100px',
		paddingTop: '20px',
		paddingBottom: '20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		fontFamily: fonts.PrincessSofia,

		...layout.gutter,
		...layout.maxWidth,

		[bpLargeRet]: {
			paddingLeft: '75px',
			paddingRight: '75px',
		},

		[bpMed]: {
			justifyContent: 'space-around',
			flexDirection: 'column',
			height: 'auto',
			paddingLeft: '0',
			paddingRight: '0'
		},

		//		[bpMedLandscape]: {
		//			flexDirection: 'row',
		//			justifyContent: 'space-between',
		//			color: 'green'
		//		},


	},

	title: {
		fontSize: fonts.largest,

		[bpLarge]: {
			fontSize: fonts.larger
		},

		[bpMed]: {
			fontSize: fonts.largest,
			width: '100%',
			textAlign: 'center',
			marginBottom: '15px'
		},

		[bpSmall]: {
			fontSize: fonts.larger,
			width: '100%'
		}
	},

	titleLink: {
		':link': link,
		':visited': link,
		':hover': link,
		':active': link
	}
};
