import { all, takeLatest } from 'redux-saga/effects';

import { wxContextSaga } from './com/user';
import { GET_WXCONTEXT_REQUEST } from '../constants/user';

import {
  addTodoSaga,
  getTodoSaga,
  getTodosSaga,
  deleteTodoSaga,
} from './com/todo';
import {
  ADD_TODO_REQUEST,
  GET_TODO_REQUEST,
  GET_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
} from '../constants/todo';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_WXCONTEXT_REQUEST, wxContextSaga),
    takeLatest(ADD_TODO_REQUEST, addTodoSaga),
    takeLatest(GET_TODO_REQUEST, getTodoSaga),
    takeLatest(GET_TODOS_REQUEST, getTodosSaga),
    takeLatest(DELETE_TODO_REQUEST, deleteTodoSaga),
  ]);
}
