import { combineReducers } from 'redux';
import userReducer from './com/user';
import todoReducer from './com/todo';

export default combineReducers({
  userReducer,
  todoReducer,
});
