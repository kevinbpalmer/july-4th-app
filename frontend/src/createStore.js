import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers';

let middleware = [ promiseMiddleware() ]
if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, createLogger() ]
}

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
