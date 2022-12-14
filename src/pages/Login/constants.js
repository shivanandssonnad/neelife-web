import {
  AUTH_SERVICE_BASE_URL,
  AUTH_SERVICE_CLIENT_ID,
  AUTH_SERVICE_REDIRECT_URL,
} from '@utils/endpoints';

export const AUTH_SERVICE_LOGIN_PAGE = `${AUTH_SERVICE_BASE_URL}/v1/restricted/login?url=${AUTH_SERVICE_REDIRECT_URL}&client_id=${AUTH_SERVICE_CLIENT_ID}`;
export const AUTH_SERVICE_LOGOUT_PAGE = `${AUTH_SERVICE_BASE_URL}/v1/restricted/logout?sso_logout=false&url=${AUTH_SERVICE_REDIRECT_URL}&client_id=${AUTH_SERVICE_CLIENT_ID}`;
