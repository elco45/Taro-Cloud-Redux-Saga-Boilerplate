import produce from 'immer';
import {
  GET_WXCONTEXT_REQUEST,
  GET_WXCONTEXT_REQUEST_SUCCESS,
  GET_WXCONTEXT_REQUEST_ERROR,
} from '../../constants/user';

export const initialState = {
  loading: false,
  wxContext: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_WXCONTEXT_REQUEST:
        draft.loading = true;
        draft.wxContext = null;
        draft.error = null;
        break;

      case GET_WXCONTEXT_REQUEST_ERROR:
        draft.error = action.data;
        draft.loading = false;
        break;

      case GET_WXCONTEXT_REQUEST_SUCCESS:
        draft.wxContext = action.data;
        draft.loading = false;
        break;
    }
  });

export default userReducer;
