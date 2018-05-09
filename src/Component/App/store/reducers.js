import {combineReducers} from 'redux';

function app(store = {}) {
  return store;
}

const store = {
  app
  /* this is your main entry point for storage where all the reducers are connected */
};

export default combineReducers(store);
