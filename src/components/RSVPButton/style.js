import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';
import * as layouts from '../../style/layout';

const bpLarge = layouts.maxDeviceWidth('1070px');
const bpMed = layouts.maxDeviceWidth('830px');
const bpSmall = layouts.maxDeviceWidth('470px');

export default {
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		fontFamily: fonts.Quicksand.regular,

		[bpMed]: {
			flexDirection: 'column',
			textAlign: 'center',
			justifyContent: 'space-between'
		}
	},

	textAlignBottom: {
		flexDirection: 'column',
		textAlign: 'center',
		justifyContent: 'space-between',
	},

	button: {
		fontFamily: fonts.Quicksand.light,
		backgroundColor: colors.red,
		color: colors.white,
		fontSize: fonts.larger,
		borderRadius: '8px',
		border: 'none',
		padding: '5px 30px',

		':hover': {
			backgroundColor: colors.darkRed
		},

		[bpSmall]: {
			fontSize: fonts.small
		},

		[bpMed]: {
			marginBottom: '20px',
		},

		[bpLarge]: {
			fontSize: fonts.larger
		}
	},

	buttonAlignBottom: {
		marginBottom: '20px'
	},

	deadline: {
		fontSize: fonts.small,
		fontWeight: 200
	},

	deadlineAlignRight: {
		fontSize: fonts.small,
		fontWeight: 200,
		marginLeft: '30px',
		
		[bpMed] : {
			marginLeft: 0
		}

	}
};
