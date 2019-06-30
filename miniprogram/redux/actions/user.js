import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from '../constants/user';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginRequestSuccess = data => ({
  type: LOGIN_REQUEST_SUCCESS,
  data,
});

export const loginRequestError = data => ({
  type: LOGIN_REQUEST_ERROR,
  data,
});
