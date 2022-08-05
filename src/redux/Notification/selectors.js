import { SNACKBAR_NOFITICATION_REDUCER } from './constants';

export const selectSnackbarNotificationReducer = (state) =>
  (state && state[SNACKBAR_NOFITICATION_REDUCER]) || {};

export const selectNotifications = (state) =>
  selectSnackbarNotificationReducer(state).notifications || [];
