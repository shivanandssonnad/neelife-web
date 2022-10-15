import LoadableForgotPassword from '@pages/ForgotPassword/Loadable';
import LoadableHome from '@pages/Home/loadable';
import LoadableLoginPage from '@pages/Login/loadable';
import LoadablePage1 from '@pages/Page1/loadable';
import LoadableResetPassword from '@pages/ResetPassword/Loadable';
import SSORedirect from '@pages/SSORedirect';

const ROOT = '/';
export const DEFAULT_PATH = ROOT;
export const SSO_REDIRECT = '/sso/redirect';
export const NOT_AUTHORISED = '/not-authorised';
export const LOGIN_PATH = '/login';
export const FORGOT_PASSWORD_PATH = '/forgot-password';
export const RESET_PASSWORD_PATH = '/reset-password';

const APPLICATION_ROUTES = [
  {
    path: SSO_REDIRECT,
    element: <SSORedirect />,
  },
  {
    path: LOGIN_PATH,
    element: <LoadableLoginPage />,
  },
  {
    path: FORGOT_PASSWORD_PATH,
    element: <LoadableForgotPassword />,
  },
  {
    path: RESET_PASSWORD_PATH,
    element: <LoadableResetPassword />,
  },
  {
    path: DEFAULT_PATH,
    element: <LoadableHome />,
    children: [
      {
        index: true,
        element: <LoadablePage1 />,
      },
    ],
  },
];

export default APPLICATION_ROUTES;
