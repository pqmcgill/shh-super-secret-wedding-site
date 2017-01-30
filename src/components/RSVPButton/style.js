import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';

export default {
	button: {
		fontFamily: fonts.Quicksand.light,
		backgroundColor: colors.red,
		color: colors.white,
		borderRadius: '8px',
		border: 'none',
		padding: '5px 30px',
		fontSize: '1em',

		':hover': {
			backgroundColor: colors.darkRed
		}
	}
};
