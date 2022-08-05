import { GLOBAL_REDUCER_NAME } from './constants';

export const selectGlobalState = (state) => state[GLOBAL_REDUCER_NAME];

export const selectInitialised = (state) =>
  selectGlobalState(state).initialised || false;
