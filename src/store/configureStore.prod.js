import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { middleWares } from './configureStore';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(...middleWares));
}