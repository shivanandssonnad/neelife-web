import { DEFAULT_PATH, LOGIN_PATH } from '@app/routes';
import Spinner from '@components/Spinner';
import { useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TOKEN_KEY, TOKEN_STATUS_KEY } from './constants';
import SSORedirectUtils from './utils';

function SSORedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get(TOKEN_KEY);
  const tokenStatus = searchParams.get(TOKEN_STATUS_KEY);

  const handleWrongRedirect = useCallback(() => {
    navigate(DEFAULT_PATH, { replace: true });
  }, [navigate]);

  const handleRedirectFromSSO = useCallback(() => {
    try {
      const redirectTo = SSORedirectUtils.handleRedirectFromSSO(
        token,
        tokenStatus,
      );
      console.log(redirectTo);
      window.location.assign(redirectTo);
    } catch (e) {
      navigate(LOGIN_PATH, { replace: true });
    }
  }, [token, tokenStatus, navigate]);

  useEffect(() => {
    if (!tokenStatus) {
      handleWrongRedirect();
    } else {
      handleRedirectFromSSO();
    }
  }, [handleWrongRedirect, handleRedirectFromSSO, tokenStatus]);

  return (
    <div>
      <Spinner />
    </div>
  );
}

export default SSORedirect;
