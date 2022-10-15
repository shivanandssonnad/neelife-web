import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginPageContainer from '@components/Container/LoginPageContainer';
import LoginMessage from '@components/PageComponents/LoginPage/LoginMessage';
import LoginHeader from '@components/Header/LoginHeader';

import { DEFAULT_PATH } from '@app/routes';
import CHCLoginForm from '@components/PageComponents/LoginPage/LoginForm';
import { selectTokenInitialised } from '@redux/User/selectors';

import styles from './styles.module.scss';

function Login() {
  const isValidToken = useSelector(selectTokenInitialised);
  const navigate = useNavigate();

  async function handleSubmitForm(values) {
    console.log(values);
  }

  useEffect(() => {
    if (isValidToken) {
      navigate(DEFAULT_PATH, { replace: true });
    }
  }, [isValidToken, navigate]);

  return (
    <>
      <LoginHeader />
      <div className={styles.login_form_container}>
        <CHCLoginForm
          className={styles.form_container}
          onSubmit={handleSubmitForm}
        />
        <LoginMessage className={styles.message_container} />
      </div>
    </>
  );
}

export default Login;
