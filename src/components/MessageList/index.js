import React from 'react';

const MessageList = ({ messages = [] }) => {
	return (
		<div>
			<ul>
				{ messages.map(msg => <li key={ msg.id }>{ msg.txt }</li>) }
			</ul>
		</div>
	);
};

export default MessageList;