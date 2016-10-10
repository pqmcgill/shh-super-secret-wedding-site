import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(
	applyMiddleware(thunk)
);

export default function configureStore (state) {
	const store = createStore(rootReducer, state, enhancer);

	if(module.hot) {
		module.hot.accept('../reducers', () => 
			store.replaceReducer(require('../reducers').default)
		);
	}

	return store;
};
