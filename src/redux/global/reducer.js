import { createSlice } from '@reduxjs/toolkit';
import { GLOBAL_REDUCER_NAME, INIT_APP } from './constants';

const INITIAL_STATE = {
  initialised: false,
};

const globalReducer = createSlice({
  name: GLOBAL_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    [INIT_APP]: (state) => {
      state.initialised = true;
    },
  },
});

export const { intialiseApp } = globalReducer.actions;

export default globalReducer;
