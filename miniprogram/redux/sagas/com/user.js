import { call, put } from 'redux-saga/effects';
import {
  GET_WXCONTEXT_REQUEST_SUCCESS,
  GET_WXCONTEXT_REQUEST_ERROR,
} from '../../constants/user';

export function* wxContext() {
  try {
    const apiCall = () =>
      new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'wxContext',
          data: {},
          success: res => resolve(res),
          fail: err => reject(err),
        });
      });
    const response = yield call(apiCall);
    if (response && response.errMsg === 'cloud.callFunction:ok') {
      yield put({ type: GET_WXCONTEXT_REQUEST_SUCCESS, data: response.result });
    } else {
      yield put({ type: GET_WXCONTEXT_REQUEST_ERROR, data: response });
    }
  } catch (error) {
    yield put({ type: GET_WXCONTEXT_REQUEST_ERROR, data: error });
  }
}
