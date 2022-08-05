import { createSlice } from '@reduxjs/toolkit';
import {
  CLEAR_TOKEN,
  SAVE_TOKEN_DETAILS,
  USER_REDUCER_NAME,
  VERIFY_TOKEN,
} from './constants';

const INITIAL_STATE = {
  initialised: false,
  tokenStatus: false,
  token: null,
  user: null,
};

const userReducer = createSlice({
  name: USER_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    [VERIFY_TOKEN]: (state) => {
      return {
        ...state,
        initialised: false,
        tokenStatus: false,
        token: null,
        user: null,
      };
    },
    [SAVE_TOKEN_DETAILS]: (state, action) => {
      return {
        ...state,
        ...action.payload,
        initialised: true,
      };
    },
    [CLEAR_TOKEN]: (state) => {
      return {
        ...state,
        initialised: false,
        tokenStatus: false,
        token: null,
        user: null,
      };
    },
  },
});

export const { saveTokenDetails, clearToken, verifyToken } =
  userReducer.actions;

export default userReducer;
