import { USER_REDUCER_NAME } from './constants';

export const selectUserReducer = (state) =>
  (state && state[USER_REDUCER_NAME]) || {};

export const selectTokenInitialised = (state) =>
  selectUserReducer(state).initialised || null;

export const selectUserToken = (state) =>
  selectUserReducer(state).token || null;

export const selectUserTokenStatus = (state) =>
  selectUserReducer(state).tokenStatus || false;

export const selectUserDetails = (state) => selectUserReducer(state).user || {};
