import React from 'react';
import '../../containers/LandingPage/LandingPage.css';
import MessageList from '../MessageList';
import './Excitement.css';

export default ({ level, messages, onChange, addMessage }) => {
	const handleAddMessage = () => {
		addMessage({ txt: `I'm so ${level} excited!` });
	};

	return (
		<div>
			<h3>I'm so <strong className="bold-red">{ level }</strong> excited!</h3>
			<p className="App-intro">Feel free to express your excitement!</p>
			<input className="excite-lvl" id="excite_lvl"
				type="text"
				placeholder="...here"
				value={ level }
				onChange={ onChange }
			/>
			<button id="addMessage" onClick={ handleAddMessage }>+</button>
			<MessageList messages={ messages } />
		</div>
	);
};
