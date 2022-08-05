import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm';

import { selectTokenInitialised } from '@redux/User/selectors';
import { DEFAULT_PATH } from '@app/routes';
import { AUTH_SERVICE_LOGIN_PAGE } from './constants';

import styles from './styles.module.scss';

function Login() {
  const isValidToken = useSelector(selectTokenInitialised);
  const navigate = useNavigate();

  const handleSubmit = () => {
    window.location.assign(AUTH_SERVICE_LOGIN_PAGE);
  };

  useEffect(() => {
    if (isValidToken) {
      navigate(DEFAULT_PATH, { replace: true });
    }
  }, [isValidToken, navigate]);

  return (
    <div className={styles.login_form_container}>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
