import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/index';
import { Provider } from 'react-redux';
import createAppStore from '../store';
import { delayAssert } from './common';

const testStore = createAppStore();
// resets state tree - useful in order reset complete state tree, can be used to reset to initial state
testStore.resetStore = () => {
  Object.entries(testStore.asyncReducers).forEach(([key, reducer]) => {
    testStore.injectReducer(key, {});
  });
};
const renderWithRouter = (ui, { route = '/' } = {}, reducerArr = []) => {
  // reset test store for each render -
  //needed to clear store for each render since previous state(previous test cases) could affect other test cases.
  testStore.resetStore();
  reducerArr.forEach(({ key, reducer }) =>
    testStore.injectReducer(key, reducer),
  );
  window.history.pushState({}, 'Test page', route);
  return render(
    <Provider store={testStore} reducerArr={reducerArr}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{ui}</BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>,
  );
};

const TestUtils = {
  renderWithRouter,
  testStore,
  delayAssert,
};

export default TestUtils;
