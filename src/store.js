import { SNACKBAR_NOFITICATION_REDUCER } from '@redux/Notification/constants';
import notificationReducer from '@redux/Notification/reducer';
import { USER_REDUCER_NAME } from '@redux/User/constants';
import userReducer from '@redux/User/reducer';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { GLOBAL_REDUCER_NAME } from './redux/global/constants';
import globalReducer from './redux/global/reducer';

function combineAppReducers(asyncReducers) {
  return combineReducers({
    [GLOBAL_REDUCER_NAME]: globalReducer.reducer,
    [USER_REDUCER_NAME]: userReducer.reducer,
    [SNACKBAR_NOFITICATION_REDUCER]: notificationReducer.reducer,
    ...asyncReducers,
  });
}

function createAppStore(initialState = {}) {
  const reducers = combineAppReducers({});
  const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
  });

  // Add a key to keep track of the async reducers added
  store.asyncReducers = {};

  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(combineAppReducers(store.asyncReducers));
  };

  return store;
}

export default createAppStore;
