import LoadableHome from '@pages/Home/loadable';
import LoadableLoginPage from '@pages/Login/loadable';
import LoadablePage1 from '@pages/Page1/loadable';
import SSORedirect from '@pages/SSORedirect';

const ROOT = '/';
export const DEFAULT_PATH = ROOT;
export const SSO_REDIRECT = '/sso/redirect';
export const NOT_AUTHORISED = '/not-authorised';
export const LOGIN_PATH = '/login';

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
