import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import * as layouts from '../../style/layout';

const bpMed = layouts.maxDeviceWidth('760px');
//const bpSmall = layouts.maxDeviceWidth('507px');

const styles = {
	navBar: {
		fontFamily: fonts.Quicksand.regular,
		backgroundColor: colors.blue,
		height: '40px',
		...layouts.gutter,

		[bpMed]: {
			display: 'flex',
			justifyContent: 'space-between',
			margin: '0 auto',
			paddingLeft: 0,
			paddingRight: 0
		}
	}, 

	nav: {
		height: '35px',
		lineHeight: '40px',
		listStyleType: 'none',
		fontSize: fonts.small,
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'flex-start',
		...layouts.maxWidth,

		[bpMed]: {
			fontSize: fonts.small
		}
	},

	link: {
		display: 'block',
		height: '35px',
		color: colors.white,
		textAlign: 'center',
		padding: '0 0.5rem',
		textDecoration: 'none',

		':hover': {
			color: colors.blue,
			backgroundColor: colors.white
		}
	},

};

export default styles;
