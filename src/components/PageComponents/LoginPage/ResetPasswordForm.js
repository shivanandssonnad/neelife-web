import classNames from 'classnames';
import React from 'react';
import LoginFormContainer from './LoginFormContainer';
import styles from './styles.module.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  RESET_PASSWORD_FORM_VALIDATION_MESSAGE,
  RESET_PASSWORD_PAGE_BUTTON_TITLE,
  RESET_PASSWORD_PAGE_SUB_TITLE,
  RESET_PASSWORD_PAGE_TITLE,
} from './constant';

const schema = yup.object({
  newPassword: yup
    .string()
    .required(RESET_PASSWORD_FORM_VALIDATION_MESSAGE.NEW_PASSWORD),
  confirmPassword: yup
    .string()
    .required(RESET_PASSWORD_FORM_VALIDATION_MESSAGE.CONFIRM_PASSWORD.REQUIRED)
    .test(
      'match',
      RESET_PASSWORD_FORM_VALIDATION_MESSAGE.CONFIRM_PASSWORD
        .MATCH_WITH_NEW_PASSWORD,
      function (paswordConfirmation) {
        return paswordConfirmation === this.parent.newPassword;
      },
    ),
});

function CHCResetPasswordForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [submitting, setSubmitting] = React.useState(false);

  function handleSubmitForm(data) {
    if (typeof props.onSubmit === 'function') {
      setSubmitting(true);
      props.onSubmit(data).then((res) => {
        setSubmitting(false);
      });
    }
  }

  return (
    <LoginFormContainer className={props.className}>
      <LoginFormContainer.Title data-testid="resetPasswordTitlte">
        {RESET_PASSWORD_PAGE_TITLE}
      </LoginFormContainer.Title>
      <LoginFormContainer.SubTitle
        className={classNames(styles.text_center, 'margin-top-8')}>
        {RESET_PASSWORD_PAGE_SUB_TITLE}
      </LoginFormContainer.SubTitle>
      <LoginFormContainer.Form
        data-testid="resetPasswordForm"
        className="margin-top-50"
        onSubmit={handleSubmit(handleSubmitForm)}>
        <LoginFormContainer.PasswordField
          {...register('newPassword')}
          data-testid="newPasswordField"
          color="focus"
          className="margin-top-25"
          label="New Password"
          InputProps={{ 'aria-label': 'newPassword' }}
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
        />
        <LoginFormContainer.PasswordField
          {...register('confirmPassword')}
          data-testid="confirmPasswordField"
          color="focus"
          className="margin-top-25"
          label="Confirm Password"
          InputProps={{ 'aria-label': 'confirmPassword' }}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <LoginFormContainer.Button
          data-testid="submitButton"
          className="padding-top-21 padding-bottom-21 margin-top-40"
          fullWidth
          aria-label="submitBtn"
          variant="contained"
          type="submit"
          disabled={submitting}>
          {RESET_PASSWORD_PAGE_BUTTON_TITLE}
        </LoginFormContainer.Button>
      </LoginFormContainer.Form>
    </LoginFormContainer>
  );
}

export default CHCResetPasswordForm;
