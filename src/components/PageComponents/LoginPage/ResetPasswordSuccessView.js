import React from 'react';
import CHCSuccessView from '@components/Container/SuccessView';
import {
  RESET_PASSWORD_SUCCESS_VIEW_PAGE_SUB_TITLE,
  RESET_PASSWORD_SUCCESS_VIEW_PAGE_TITLE,
} from './constant';

function CHCResetPasswordSuccessView(props) {
  return (
    <CHCSuccessView
      className={props.className}
      data-testid="resetPasswordSuccessView">
      <CHCSuccessView.Icon width={68} height={50} name="EmailSentIcon" />
      <CHCSuccessView.Title className="margin-top-17">
        {RESET_PASSWORD_SUCCESS_VIEW_PAGE_TITLE}
      </CHCSuccessView.Title>
      <CHCSuccessView.SubTitle className="margin-top-4">
        {RESET_PASSWORD_SUCCESS_VIEW_PAGE_SUB_TITLE}
      </CHCSuccessView.SubTitle>
      <CHCSuccessView.Button
        data-testid="signInButton"
        href="/login"
        className="margin-top-24">
        Sign In
      </CHCSuccessView.Button>
    </CHCSuccessView>
  );
}

export default CHCResetPasswordSuccessView;
