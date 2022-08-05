import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';

import './index.scss';
import createAppStore from './store';
import { theme } from './theme';
import Notification from '@components/Notification';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={createAppStore()}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Notification />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,
);
