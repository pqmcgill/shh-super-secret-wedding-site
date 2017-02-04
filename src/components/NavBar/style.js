import * as colors from '../../style/colors';
import * as fonts from '../../style/fonts';


const styles = {
	wrapper: {
		display: 'box'
	},

	navBar: {
		backgroundColor: colors.blue,
		height: '40px',
	}, 

	nav: {
		height: '40px',
		lineHeight: '40px',
		fontSize: fonts.smaller
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
