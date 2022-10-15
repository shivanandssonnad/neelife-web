import classNames from 'classnames';
import React from 'react';
import LoginFormContainer from './LoginFormContainer';
import styles from './styles.module.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  FORGOT_PASSWORD_FORM_VALIDATION_MESSAGE,
  FORGOT_PASSWORD_PAGE_BUTTON_TITLE,
  FORGOT_PASSWORD_PAGE_SUB_TITLE,
  FORGOT_PASSWORD_PAGE_TITLE,
} from './constant';

const schema = yup.object({
  emailId: yup
    .string()
    .required(FORGOT_PASSWORD_FORM_VALIDATION_MESSAGE.EMAIL_ID),
});

function ForgotPasswordForm(props) {
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
      <LoginFormContainer.Title data-testid="forgotPasswordTitlte">
        {FORGOT_PASSWORD_PAGE_TITLE}
      </LoginFormContainer.Title>
      <LoginFormContainer.SubTitle
        className={classNames(styles.text_center, 'margin-top-8')}>
        {FORGOT_PASSWORD_PAGE_SUB_TITLE}
      </LoginFormContainer.SubTitle>
      <LoginFormContainer.Form
        data-testid="forgotPasswordForm"
        className="margin-top-50"
        onSubmit={handleSubmit(handleSubmitForm)}>
        <LoginFormContainer.TextField
          {...register('emailId')}
          id="email-id"
          inputProps={{ 'aria-label': 'emailId' }}
          data-testid="emailIdField"
          color="focus"
          className="margin-top-25"
          label="Enter Email"
          error={!!errors.emailId}
          helperText={errors.emailId?.message}
        />
        <LoginFormContainer.Button
          data-testid="submitButton"
          className="padding-top-21 padding-bottom-21 margin-top-40"
          fullWidth
          aria-label="submitBtn"
          variant="contained"
          type="submit"
          disabled={submitting}>
          {FORGOT_PASSWORD_PAGE_BUTTON_TITLE}
        </LoginFormContainer.Button>
      </LoginFormContainer.Form>
    </LoginFormContainer>
  );
}

export default ForgotPasswordForm;
