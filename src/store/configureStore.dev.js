// Configures the store for hot reloading. Actual stores live in our reducers, because, Redux

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { middleWares } from './configureStore';

export default function configureStore(initialState) {
    let store;
    if (window.devToolsExtention) {
        store = window.devToolsExtension()(createStore)(rootReducer, initialState, applyMiddleware(...middleWares));
    } else {
        store = createStore(rootReducer, initialState, applyMiddleware(...middleWares));
    }

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}