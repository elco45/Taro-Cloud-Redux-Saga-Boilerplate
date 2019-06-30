import { all, takeLatest } from 'redux-saga/effects';
import { login } from './com/user';

export default function* rootSaga() {
  yield all([takeLatest('LOGIN_REQUEST', login)]);
}
