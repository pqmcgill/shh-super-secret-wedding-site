import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store';
import App from './containers/App';

import './reset.css';
import { css, StyleSheet } from 'aphrodite';

//const globalStyles = StyleSheet.create({
//	global: {
//		fontSize: '16px',
//		'@media (max-width: 599px)': {
//			fontSize: '12px'
//		}
//	}
//});

const initialState = {};
const store = configureStore(initialState);

const renderApp = CurrentApp => {
  ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
        <MuiThemeProvider>
          <CurrentApp />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const nextApp = require('./containers/App').default;
		renderApp(nextApp);
	});
}
