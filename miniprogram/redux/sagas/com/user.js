import { call, put } from 'redux-saga/effects';
import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from '../../constants/user';

export function* login() {
  try {
    const apiCall = () =>
      new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'login',
          data: {},
          success: res => resolve(res),
          fail: err => reject(err),
        });
      });
    const response = yield call(apiCall);
    if (response && response.errMsg === 'cloud.callFunction:ok') {
      yield put({ type: LOGIN_REQUEST_SUCCESS, data: response.result });
    } else {
      yield put({ type: LOGIN_REQUEST_ERROR, data: response });
    }
  } catch (error) {
    yield put({ type: LOGIN_REQUEST_ERROR, data: error });
  }
}