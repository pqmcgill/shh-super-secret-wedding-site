import React, { PropTypes } from 'react';

const MessageList = ({ messages = [] }) => {
	return (
		<div>
			<ul>
				{ messages.map(msg => <li key={ msg.id }>{ msg.txt }</li>) }
			</ul>
		</div>
	);
};

MessageList.propTypes = {
	messages: PropTypes.array.isRequired
};

export default MessageList;
