import produce from 'immer';
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
} from '../../constants/todo';

export const initialState = {
  addTodoLoading: false,
  addTodoError: null,

  todo: null,
  getTodoLoading: false,
  getTodoError: null,

  todos: [],
  getTodosLoading: false,
  getTodosError: null,

  deleteTodoLoading: false,
  deleteTodoError: null,
};

/* eslint-disable default-case, no-param-reassign */
const todoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TODO_REQUEST:
        draft.addTodoLoading = true;
        draft.addTodoError = null;
        break;
      case ADD_TODO_REQUEST_ERROR:
        draft.addTodoError = action.data;
        draft.addTodoLoading = false;
        break;
      case ADD_TODO_REQUEST_SUCCESS: {
        const { todos } = draft;
        todos.push(action.data);
        draft.todos = todos;
        draft.addTodoLoading = false;
        break;
      }

      case GET_TODO_REQUEST:
        draft.todo = null;
        draft.getTodoLoading = true;
        draft.getTodoError = null;
        break;
      case GET_TODO_REQUEST_ERROR:
        draft.getTodoError = action.data;
        draft.getTodoLoading = false;
        break;
      case GET_TODO_REQUEST_SUCCESS:
        draft.todo = action.data;
        draft.getTodoLoading = false;
        break;

      case GET_TODOS_REQUEST:
        draft.todos = [];
        draft.getTodosLoading = true;
        draft.getTodosError = null;
        break;
      case GET_TODOS_REQUEST_ERROR:
        draft.getTodosError = action.data;
        draft.getTodosLoading = false;
        break;
      case GET_TODOS_REQUEST_SUCCESS:
        draft.todos = action.data;
        draft.getTodosLoading = false;
        break;

      case DELETE_TODO_REQUEST:
        draft.deleteTodoLoading = true;
        draft.deleteTodoError = null;
        break;
      case DELETE_TODO_REQUEST_ERROR:
        draft.deleteTodoError = action.data;
        draft.deleteTodoLoading = false;
        break;
      case DELETE_TODO_REQUEST_SUCCESS: {
        const { todos } = draft;
        const foundIndex = todos.findIndex(
          element => element._id === action.data,
        );
        if (foundIndex >= 0) {
          todos.splice(foundIndex, 1);
        }
        draft.todos = todos;
        draft.deleteTodoLoading = false;
        break;
      }
    }
  });

export default todoReducer;
