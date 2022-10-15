import React from 'react';
import CHCMessageContainer from '@components/Container/MessageContainer';

import styles from './styles.module.scss';
import classNames from 'classnames';

function LoginMessageContainer(props) {
  return (
    <CHCMessageContainer
      className={classNames(styles.grey_background, props.className)}>
      <div className={styles.login_message_container}>{props.children}</div>
    </CHCMessageContainer>
  );
}

LoginMessageContainer.Title = CHCMessageContainer.Title;
LoginMessageContainer.Icon = CHCMessageContainer.Icon;
LoginMessageContainer.MessageRow = CHCMessageContainer.MessageRow;

export default LoginMessageContainer;
