import { createSlice } from '@reduxjs/toolkit';
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  RESET_NOTIFICATION,
  SNACKBAR_NOFITICATION_REDUCER,
} from './constants';

const NOTIFICATION_SETTING = {
  vertical: 'top',
  horizontal: 'center',
  level: 'info',
  message: '',
  onClose: null,
  open: false,
  autoHideDuration: 2000,
};

const INITIAL_STATE = {
  notifications: [],
};
const notificationReducer = createSlice({
  name: SNACKBAR_NOFITICATION_REDUCER,
  initialState: INITIAL_STATE,
  reducers: {
    [ADD_NOTIFICATION]: (state, action) => {
      const settings = action.payload || {};
      const id = `${new Date().valueOf()}_${Math.random()}`;
      const notification = {
        ...NOTIFICATION_SETTING,
        ...settings,
        id,
      };
      state.notifications.push(notification);
    },
    [REMOVE_NOTIFICATION]: (state, action) => {
      const { id } = action.payload;
      if (!id) return state;
      const index = state.notifications.findIndex((each) => each.id === id);
      if (index === -1) return state;
      state.notifications.splice(index, 1);
    },
    [RESET_NOTIFICATION]: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, resetNotification } =
  notificationReducer.actions;

export default notificationReducer;
