import React from 'react';
import styles from './styles.module.scss';
import CHCFormContainer from '@components/Container/FormContainer';

function LoginFormContainer(props) {
  return (
    <CHCFormContainer className={props.className}>
      <div className={styles.login_form_container}>{props.children}</div>
    </CHCFormContainer>
  );
}

LoginFormContainer.Form = CHCFormContainer.Form;
LoginFormContainer.Title = CHCFormContainer.Title;
LoginFormContainer.SubTitle = CHCFormContainer.SubTitle;
LoginFormContainer.TextField = CHCFormContainer.TextField;
LoginFormContainer.PasswordField = CHCFormContainer.PasswordField;
LoginFormContainer.Checkbox = CHCFormContainer.Checkbox;
LoginFormContainer.Button = CHCFormContainer.Button;

export default LoginFormContainer;
