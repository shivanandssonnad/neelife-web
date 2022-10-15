import { Link } from '@mui/material';
import React from 'react';
import CHCSuccessView from '@components/Container/SuccessView';
import {
  FORGOT_PASSWORD_SUCCESS_VIEW_PAGE_HELP_TEXT,
  FORGOT_PASSWORD_SUCCESS_VIEW_PAGE_SUB_TITLE,
  FORGOT_PASSWORD_SUCCESS_VIEW_PAGE_TITLE,
} from './constant';

function ForgotPasswordSuccessView(props) {
  return (
    <CHCSuccessView
      className={props.className}
      data-testid="forgotPasswordSuccessView">
      <CHCSuccessView.Icon width={68} height={49} name="EmailSentIcon" />
      <CHCSuccessView.Title className="margin-top-17">
        {FORGOT_PASSWORD_SUCCESS_VIEW_PAGE_TITLE}
      </CHCSuccessView.Title>
      <CHCSuccessView.SubTitle className="margin-top-4">
        {FORGOT_PASSWORD_SUCCESS_VIEW_PAGE_SUB_TITLE}
      </CHCSuccessView.SubTitle>
      <CHCSuccessView.Button
        data-testid="signInButton"
        href="/login"
        className="margin-top-24">
        Sign In
      </CHCSuccessView.Button>
      <CHCSuccessView.SubTitle className="margin-top-28">
        {FORGOT_PASSWORD_SUCCESS_VIEW_PAGE_HELP_TEXT}
      </CHCSuccessView.SubTitle>
      <CHCSuccessView.SubTitle className="margin-top-4">
        or &nbsp;
        <Link
          data-testid="tryAnotherEmailAddress"
          component="button"
          variant="body2"
          className="chc-link"
          onClick={props.onToggleView}>
          try another email address
        </Link>
      </CHCSuccessView.SubTitle>
    </CHCSuccessView>
  );
}

export default ForgotPasswordSuccessView;
