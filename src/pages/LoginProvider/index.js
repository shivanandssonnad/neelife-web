/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Spinner from '@components/Spinner';

import { LOGIN_PATH } from '@app/routes';
import { USER_TOKEN_STORAGE_KEY } from './constants';

import { saveTokenDetails } from '@redux/User/reducer';
import StorageService from '@utils/StorageService';
import AuthProviderUtils from './utils';

function LoginProvider(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialised, setInitialised] = useState(false);

  const handleInitialise = useCallback(async () => {
    const token = StorageService.getValue(USER_TOKEN_STORAGE_KEY);
    try {
      const data = await AuthProviderUtils.verifyToken(token);
      dispatch(
        saveTokenDetails({
          token: data.access_token,
          user: data.claims,
          tokenStatus: data.status,
        }),
      );
    } catch (e) {
      navigate(LOGIN_PATH, { replace: true });
    } finally {
      setInitialised(true);
    }
  }, [dispatch]);

  useEffect(() => {
    handleInitialise();
  }, [handleInitialise]);

  if (!initialised) return <Spinner data-testid="spinner" />;

  return <>{props.children}</>;
}

export default LoginProvider;
