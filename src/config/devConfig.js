export default function getDevEnvronmentConfig() {
  const UI_BASE_URL = window.location.origin;
  const BE_BASE_URL = `${UI_BASE_URL}/api/v1/`;
  const AUTH_SERVICE_BASE_URL =
    'https://authservice-dev-v2.dev.licious.app/v1/restricted';
  // updated auth servicer redirect url for local development because localhost is not supported
  // as redirect url in auth service. using tiny url to mask localhost url
  const AUTH_SERVICE_REDIRECT_URL = 'https://tinyurl.com/mr5euaac';
  const AUTH_SERVICE_CLIENT_ID = 'chc';
  return {
    BE_BASE_URL,
    UI_BASE_URL,
    AUTH_SERVICE_BASE_URL,
    AUTH_SERVICE_REDIRECT_URL,
    AUTH_SERVICE_CLIENT_ID,
  };
}
