import { SSO_REDIRECT } from '@app/routes';

export default function getQaEnvronmentConfig() {
  const UI_BASE_URL = window.location.origin;
  const BE_BASE_URL = `${UI_BASE_URL}/api/v1/`;
  const AUTH_SERVICE_BASE_URL =
    'https://authservice-dev-v2.dev.licious.app/v1/restricted';
  const AUTH_SERVICE_REDIRECT_URL = `${UI_BASE_URL}${SSO_REDIRECT}`;
  const AUTH_SERVICE_CLIENT_ID = 'serviceability-management';
  return {
    BE_BASE_URL,
    UI_BASE_URL,
    AUTH_SERVICE_BASE_URL,
    AUTH_SERVICE_REDIRECT_URL,
    AUTH_SERVICE_CLIENT_ID,
  };
}
