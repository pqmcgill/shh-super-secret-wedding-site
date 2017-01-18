export const maxDeviceWidth = (val) => {
	return `@media only screen and (max-width: ${val})`;
};

export const maxDeviceWidthRetina = (val) => {
	return `${maxDeviceWidth(val)} and (-webkit-min-device-pixel-ratio: 2)`;
};

export const andLandscape = (val) => {
	return `${val} and (orientation: landscape)`;
};

export const maxWidth = {
	maxWidth: '1400px',
	marginLeft: 'auto',
	marginRight: 'auto'
};

export const gutter = {
	paddingLeft: '100px',
	paddingRight: '100px',

	[maxDeviceWidth('1070px')]: {
		paddingLeft: '75px',
		paddingRight: '75px'
	},

	[maxDeviceWidth('760px')]: {
		paddingLeft: '10px',
		paddingRight: '10px'
	}

};

