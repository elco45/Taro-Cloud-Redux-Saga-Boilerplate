import {
  ADD_TODO_REQUEST,
  ADD_TODO_REQUEST_SUCCESS,
  ADD_TODO_REQUEST_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_REQUEST_SUCCESS,
  GET_TODO_REQUEST_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_REQUEST_SUCCESS,
  GET_TODOS_REQUEST_ERROR,
  DELETE_TODO_REQUEST,
  DELETE_TODO_REQUEST_SUCCESS,
  DELETE_TODO_REQUEST_ERROR,
} from '../constants/todo';

export const addTodoRequest = description => ({
  type: ADD_TODO_REQUEST,
  description,
});
export const addTodoRequestSuccess = data => ({
  type: ADD_TODO_REQUEST_SUCCESS,
  data,
});
export const addTodoRequestError = data => ({
  type: ADD_TODO_REQUEST_ERROR,
  data,
});

export const getTodoRequest = () => ({
  type: GET_TODO_REQUEST,
});
export const getTodoRequestSuccess = data => ({
  type: GET_TODO_REQUEST_SUCCESS,
  data,
});
export const getTodoRequestError = data => ({
  type: GET_TODO_REQUEST_ERROR,
  data,
});

export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST,
});
export const getTodosRequestSuccess = data => ({
  type: GET_TODOS_REQUEST_SUCCESS,
  data,
});
export const getTodosRequestError = data => ({
  type: GET_TODOS_REQUEST_ERROR,
  data,
});

export const deleteTodoRequest = _id => ({
  type: DELETE_TODO_REQUEST,
  _id,
});
export const deleteTodoRequestSuccess = data => ({
  type: DELETE_TODO_REQUEST_SUCCESS,
  data,
});
export const deleteTodoRequestError = data => ({
  type: DELETE_TODO_REQUEST_ERROR,
  data,
});
