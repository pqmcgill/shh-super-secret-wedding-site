import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store';
import './index.css';

const initialState = {};
const store = configureStore(initialState);

function renderApp(CurrentApp) {
	ReactDOM.render(
		<Provider store={ store }>
			<CurrentApp />
		</Provider>,
		document.getElementById('root')
	);
}

renderApp(routes);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const nextApp = require('./routes').default;
		renderApp(nextApp);
	});
}
