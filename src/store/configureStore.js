import ReduxPromise from 'redux-promise';

export const middleWares = [ ReduxPromise ];

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}