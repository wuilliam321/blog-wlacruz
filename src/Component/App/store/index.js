/* global __DEV__ */
import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import freeze from 'redux-freeze';

import sagas from './sagas';
import reducers from './reducers';
import {APP_INIT} from './actions';

const saga = createSagaMiddleware();

const middleware = [saga];

if (__DEV__) {
  middleware.push(freeze);
  middleware.push(logger);
}

const devTool =
  __DEV__ &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(reducers, devTool(applyMiddleware(...middleware)));

saga.run(sagas);
store.dispatch({type: APP_INIT});

export default store;
