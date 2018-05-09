import React from 'react';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import AppRouter from '../AppRouter';
import './App.sass';

import store from './store';

/**
 * App connects the router with redux store
 * @return {*}
 * @constructor
 */
const App = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default hot(module)(App);
