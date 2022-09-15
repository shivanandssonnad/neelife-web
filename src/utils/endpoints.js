import { createService } from '@utils/serviceFactory';
import getEnvironmentConfig from '@config/index';
import API from '../api';

const {
  BE_BASE_URL,
  UI_BASE_URL,
  AUTH_SERVICE_BASE_URL,
  AUTH_SERVICE_REDIRECT_URL,
  AUTH_SERVICE_CLIENT_ID,
} = getEnvironmentConfig();

export const fetchHome = createService({
  baseUrl: BE_BASE_URL,
  url: API.home,
  method: 'GET',
});

export const verifyTokenAPI = createService({
  baseUrl: AUTH_SERVICE_BASE_URL,
  url: API.verifyTokenAPI,
  method: 'GET',
});

export {
  BE_BASE_URL,
  UI_BASE_URL,
  AUTH_SERVICE_BASE_URL,
  AUTH_SERVICE_REDIRECT_URL,
  AUTH_SERVICE_CLIENT_ID,
};
