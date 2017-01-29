export const small = '2.5rem'
export const medium = '3rem';
export const large = '3.75rem';
export const larger = '5rem';
export const largest = '6rem';

import font_princess from '../fonts/Princess_Sofia/PrincessSofia-Regular.ttf';
import font_quick_bold from '../fonts/Quicksand/Quicksand-Bold.ttf';
import font_quick_reg from '../fonts/Quicksand/Quicksand-Regular.ttf';
import font_quick_med from '../fonts/Quicksand/Quicksand-Medium.ttf';
import font_quick_light from '../fonts/Quicksand/Quicksand-Light.ttf';

export const PrincessSofia = {
	fontFamily: 'PrincessSofia',
	fontStyle: 'normal',
	fontWeight: 'normal',
	src: `url(${font_princess})`
};

const quicksandDefault = {
	fontFamily: 'Quicksand',
	fontStyle: 'normal'
};

export const Quicksand = {
	bold: {
		...quicksandDefault,
		fontWeight: 700,
		src: `url(${font_quick_bold})`
	},
	regular: {
		...quicksandDefault,
		fontWeight: 400,
		src: `url(${font_quick_reg})`
	},
	medium: {
		...quicksandDefault,
		fontWeight: 500,
		src: `url(${font_quick_med})`
	},
	light: {
		...quicksandDefault,
		fontWeight: 200,
		src: `url(${font_quick_light})`
	}
};
