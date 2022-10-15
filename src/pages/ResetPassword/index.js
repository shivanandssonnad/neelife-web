import React from 'react';
import { useParams } from 'react-router-dom';
import LoginMessage from '@components/PageComponents/LoginPage/LoginMessage';
import CHCResetPasswordForm from '@components/PageComponents/LoginPage/ResetPasswordForm';
import CHCResetPasswordSuccessView from '@components/PageComponents/LoginPage/ResetPasswordSuccessView';

import styles from './styles.module.scss';

const VIEWS = {
  FORM: 'FORM',
  SUCCESS: 'SUCCESS',
};

function CHCResetPassword(props) {
  const [view, setView] = React.useState(VIEWS.FORM);
  const params = useParams();

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
          <CHCResetPasswordForm
            className={styles.form_container}
            params={params}
            onSubmit={handleSubmitForm}
          />
        </When>
        <Otherwise>
          <CHCResetPasswordSuccessView
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

export default CHCResetPassword;
