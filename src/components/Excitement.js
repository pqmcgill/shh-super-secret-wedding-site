import React from 'react';
import '../containers/App.css';

export default ({ level, onChange }) => {
	return (
		<div>
			<h3>I'm so { level } excited!</h3>
			<p className="App-intro">Feel free to express your excitement!</p>
			<input id="excite_lvl"
				type="text"
				value={ level }
				onChange={ onChange }
			/>
		</div>
	);
};
