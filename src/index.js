import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './containers/App/index';
import './index.css';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./containers/App/index', () => {
		const NextApp = require('./containers/App/index').default;
		ReactDOM.render(
			<Provider store={ store }>
				<NextApp />
			</Provider>,
			document.getElementById('root')
		);
	});
}
