export const smaller = '1rem';
export const small = '1.2rem';
export const medium = '2rem';
export const large = '1.5rem';
export const larger = '2rem';
export const largerer = '2.5rem';
export const largest = '4rem';

export const PrincessSofia = {
	fontFamily: 'PrincessSofia',
	fontStyle: 'normal',
	fontWeight: 'normal',
	src: "url('../fonts/Princess_Sofia/PrincessSofia-Regular.ttf')"
};

const quicksandDefault = {
	fontFamily: 'Quicksand',
	fontStyle: 'normal'
};

export const Quicksand = {
	bold: {
		...quicksandDefault,
		fontWeight: 700,
		src: "url('../fonts/Quicksand/Quicksand-Bold.ttf')"
	},
	regular: {
		...quicksandDefault,
		fontWeight: 400,
		src: "url('../fonts/Quicksand/Quicksand-Regular.ttf')"
	},
	medium: {
		...quicksandDefault,
		fontWeight: 500,
		src: "url('../fonts/Quicksand/Quicksand-Medium.ttf')"
	},
	light: {
		...quicksandDefault,
		fontWeight: 200,
		src: "url('../fonts/Quicksand/Quicksand-Light.ttf')"
	}
};
