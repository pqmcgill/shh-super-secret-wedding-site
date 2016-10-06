import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './containers/App';
import './index.css';

const initialState = { hypeLevel: 'Very!' };
const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
  document.getElementById('root')
);
