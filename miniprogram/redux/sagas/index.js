import { all, takeLatest } from 'redux-saga/effects';
import { wxContext } from './com/user';

export default function* rootSaga() {
  yield all([takeLatest('GET_WXCONTEXT_REQUEST', wxContext)]);
}
