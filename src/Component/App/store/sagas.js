import {all} from 'redux-saga/effects';

const enabledSagas = [
  /* this is your main entry point for sagas where all the sagas are connected */
];

function* sagas() {
  try {
    yield all(enabledSagas);
  } catch (e) {
    console.error(e.message, e);
  }
}

export default sagas;
