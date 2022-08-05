import { DEFAULT_PATH, LOGIN_PATH } from '@app/routes';
import {
  REDIRECT_URL_STORAGE_KEY,
  USER_TOKEN_STORAGE_KEY,
} from '@pages/LoginProvider/constants';
import StorageService from '@utils/StorageService';

function getRedirectToPath(defaultPath) {
  const redirectTo = StorageService.getValue(REDIRECT_URL_STORAGE_KEY);
  if (!redirectTo) return defaultPath;
  if (redirectTo === LOGIN_PATH) return defaultPath;
  return redirectTo;
}

function handleRedirectFromSSO(token, tokenStatus) {
  const success = tokenStatus ? tokenStatus === 'true' : false;
  if (token && success) {
    StorageService.setValue(USER_TOKEN_STORAGE_KEY, token);
    const redirectTo = getRedirectToPath(DEFAULT_PATH);
    StorageService.removeKey(REDIRECT_URL_STORAGE_KEY);
    return redirectTo;
  } else {
    throw new Error();
  }
}

const SSORedirectUtils = {
  handleRedirectFromSSO,
};

export default SSORedirectUtils;
