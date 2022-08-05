import { AUTH_SERVICE_CLIENT_ID, verifyTokenAPI } from '@utils/endpoints';
import StorageService from '@utils/StorageService';

import { REDIRECT_URL_STORAGE_KEY, USE_LICIOUS_OAUTH } from './constants';

async function handleVerifyToken(token) {
  if (!USE_LICIOUS_OAUTH) return true;
  if (!token) throw new Error(400);
  try {
    const response = await verifyTokenAPI(null, null, null, {
      token,
      'client-id': AUTH_SERVICE_CLIENT_ID,
    });
    const { data } = response;
    const { status } = data;
    if (!status) throw new Error(400);
    return data;
  } catch (e) {
    throw new Error(400);
  }
}

async function verifyToken(token) {
  try {
    const data = await handleVerifyToken(token);
    return data;
  } catch (e) {
    const redirectToPath = window.location.pathname;
    StorageService.setValue(REDIRECT_URL_STORAGE_KEY, redirectToPath);
    throw new Error(e);
  }
}

const AuthProviderUtils = {
  verifyToken,
};

export default AuthProviderUtils;
