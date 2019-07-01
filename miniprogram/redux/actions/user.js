import {
  GET_WXCONTEXT_REQUEST,
  GET_WXCONTEXT_REQUEST_SUCCESS,
  GET_WXCONTEXT_REQUEST_ERROR,
} from '../constants/user';

export const getWxContextRequest = () => ({
  type: GET_WXCONTEXT_REQUEST,
});

export const getWxContextRequestSuccess = data => ({
  type: GET_WXCONTEXT_REQUEST_SUCCESS,
  data,
});

export const getWxContextRequestError = data => ({
  type: GET_WXCONTEXT_REQUEST_ERROR,
  data,
});
