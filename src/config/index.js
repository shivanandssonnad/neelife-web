import { DEV_ENVIRONMENT, REDIRECT_BASE_URL_FOR_LOCALHOST } from './constants';

export default function getEnvironmentConfig() {
  const env = process.env.NODE_ENV;
  let authServiceRedirectBaseUrl = window.location.origin;
  if (env === DEV_ENVIRONMENT) {
    authServiceRedirectBaseUrl = REDIRECT_BASE_URL_FOR_LOCALHOST;
  }
  return {
    BE_BASE_URL: process.env.BE_BASE_URL || '',
    UI_BASE_URL: window.location.origin,
    AUTH_SERVICE_BASE_URL: process.env.AUTH_SERVICE_BASE_URL || '',
    AUTH_SERVICE_REDIRECT_URL:
      authServiceRedirectBaseUrl +
      (process.env.AUTH_SERVICE_REDIRECT_PATH || ''),
    AUTH_SERVICE_CLIENT_ID: process.env.AUTH_SERVICE_CLIENT_ID || '',
  };
}
