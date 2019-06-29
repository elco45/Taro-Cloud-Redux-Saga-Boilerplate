import produce from 'immer';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from '../../constants/user';

export const initialState = {
  loading: false,
  user: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        draft.user = null;
        draft.error = null;
        break;

      case LOGIN_REQUEST_ERROR:
        draft.error = action.data;
        draft.loading = false;
        break;

      case LOGIN_REQUEST_SUCCESS:
        draft.user = action.data;
        draft.loading = false;
        break;
    }
  });

export default userReducer;
