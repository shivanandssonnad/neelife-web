import React from 'react';
import { Link } from 'react-router-dom';
import CHCTypography from '@components/Typography';
import LoginFormContainer from './LoginFormContainer';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import {
  LOGIN_FORM_VALIDATION_MESSAGE,
  LOGIN_PAGE_BUTTON_TITLE,
  LOGIN_PAGE_TITLE,
} from './constant';

const schema = yup.object({
  username: yup.string().required(LOGIN_FORM_VALIDATION_MESSAGE.USERNAME),
  password: yup.string().required(LOGIN_FORM_VALIDATION_MESSAGE.PASSWORD),
});

function CHCLoginForm(props) {
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
      <LoginFormContainer.Title data-testid="loginFormTitle">
        {LOGIN_PAGE_TITLE}
      </LoginFormContainer.Title>
      <LoginFormContainer.Form
        data-testid="loginFormForm"
        className="margin-top-50"
        onSubmit={handleSubmit(handleSubmitForm)}>
        <LoginFormContainer.TextField
          {...register('username')}
          data-testid="usernameField"
          color="focus"
          className="margin-top-25"
          label="Enter User ID"
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <LoginFormContainer.PasswordField
          {...register('password')}
          data-testid="passwordField"
          color="focus"
          className="margin-top-25"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <div className="display-space-between display-column-center margin-top-10">
          <LoginFormContainer.Checkbox
            data-testid="rememberMeCheckbox"
            color="secondary"
            name="rememberMe"
            {...register('rememberMe')}>
            <CHCTypography className="font-size-12 text-light">
              Remember me
            </CHCTypography>
          </LoginFormContainer.Checkbox>
          <Link
            to="/forgot-password"
            data-testid="forgotPasswordLink"
            className="chc-link font-size-12">
            Forgot password?
          </Link>
        </div>
        <LoginFormContainer.Button
          data-testid="submitButton"
          className="padding-top-21 padding-bottom-21 margin-top-40"
          fullWidth
          variant="contained"
          type="submit"
          disabled={submitting}>
          {LOGIN_PAGE_BUTTON_TITLE}
        </LoginFormContainer.Button>
      </LoginFormContainer.Form>
    </LoginFormContainer>
  );
}

export default CHCLoginForm;
