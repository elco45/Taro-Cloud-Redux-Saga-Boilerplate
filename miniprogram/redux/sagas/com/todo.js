import { call, put } from 'redux-saga/effects';
import {
  ADD_TODO_REQUEST_SUCCESS,
  ADD_TODO_REQUEST_ERROR,
  GET_TODO_REQUEST_SUCCESS,
  GET_TODO_REQUEST_ERROR,
  GET_TODOS_REQUEST_SUCCESS,
  GET_TODOS_REQUEST_ERROR,
  DELETE_TODO_REQUEST_SUCCESS,
  DELETE_TODO_REQUEST_ERROR,
} from '../../constants/todo';

export function* addTodoSaga(action) {
  try {
    const { description } = action;
    const apiCall = () =>
      new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'db_todos',
          data: {
            $url: 'addTodo',
            description,
          },
          success: res => resolve(res),
          fail: err => reject(err),
        });
      });
    const response = yield call(apiCall);
    const newData = {
      _id: response.body,
      description,
    };
    yield put({ type: ADD_TODO_REQUEST_SUCCESS, data: newData });
  } catch (error) {
    yield put({ type: ADD_TODO_REQUEST_ERROR, data: error });
  }
}

export function* getTodoSaga(action) {
  try {
    const { _id } = action;
    const apiCall = () =>
      new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'db_todos',
          data: {
            $url: 'getTodo',
            _id,
          },
          success: res => resolve(res),
          fail: err => reject(err),
        });
      });
    const response = yield call(apiCall);
    yield put({ type: GET_TODO_REQUEST_SUCCESS, data: response.result });
  } catch (error) {
    yield put({ type: GET_TODO_REQUEST_ERROR, data: error });
  }
}

export function* getTodosSaga() {
  try {
    const apiCall = () =>
      new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'db_todos',
          data: {
            $url: 'getTodos',
          },
          success: res => resolve(res),
          fail: err => reject(err),
        });
      });
    const response = yield call(apiCall);
    yield put({ type: GET_TODOS_REQUEST_SUCCESS, data: response.result });
  } catch (error) {
    yield put({ type: GET_TODOS_REQUEST_ERROR, data: error });
  }
}

export function* deleteTodoSaga(action) {
  try {
    const { _id } = action;
    const apiCall = () =>
      new Promise((resolve, reject) => {
        wx.cloud.callFunction({
          name: 'db_todos',
          data: {
            $url: 'deleteTodo',
            _id,
          },
          success: res => resolve(res),
          fail: err => reject(err),
        });
      });
    const response = yield call(apiCall);
    yield put({ type: DELETE_TODO_REQUEST_SUCCESS, data: response.result });
  } catch (error) {
    yield put({ type: DELETE_TODO_REQUEST_ERROR, data: error });
  }
}
