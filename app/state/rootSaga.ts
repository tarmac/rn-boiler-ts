import { fork, all } from 'redux-saga/effects';

// Sagas
/* import { sagas as exampleSagas } from 'state/foo'; */

const allSagas: any[] = [];

export default function* rootSaga() {
  yield all(allSagas.map(saga => fork(saga)));
}
