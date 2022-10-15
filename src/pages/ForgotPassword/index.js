import React from 'react';
import ForgotPasswordForm from '@components/PageComponents/LoginPage/ForgotPasswordForm';
import ForgotPasswordSuccessView from '@components/PageComponents/LoginPage/ForgotPasswordSuccessView';
import LoginMessage from '@components/PageComponents/LoginPage/LoginMessage';

import styles from './styles.module.scss';

const VIEWS = {
  FORM: 'FORM',
  SUCCESS: 'SUCCESS',
};

function ForgotPassword() {
  const [view, setView] = React.useState(VIEWS.FORM);

  function handleSubmitForm(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      setView(VIEWS.SUCCESS);
      resolve(1);
    });
  }

  return (
    <div className={styles.login_form_container}>
      <Choose>
        <When condition={view === VIEWS.FORM}>
          <ForgotPasswordForm
            className={styles.form_container}
            onSubmit={handleSubmitForm}
          />
        </When>
        <Otherwise>
          <ForgotPasswordSuccessView
            className={styles.form_container}
            onToggleView={() => {
              setView(VIEWS.FORM);
            }}
          />
        </Otherwise>
      </Choose>
      <LoginMessage className={styles.message_container} />
    </div>
  );
}

export default ForgotPassword;
