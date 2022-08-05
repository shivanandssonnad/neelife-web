import { createSlice } from '@reduxjs/toolkit';
import { HOME_REDUCER_NAME } from './constants';

const INITIAL_STATE = {
  initialised: false,
};

const homeReducer = createSlice({
  name: HOME_REDUCER_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
});

export const { intialiseApp } = homeReducer.actions;

export default homeReducer;
