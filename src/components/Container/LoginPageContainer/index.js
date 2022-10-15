import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

function LoginPageContainer(props) {
  return (
    <div className={classNames(styles.container, props.className)}>
      {props.children}
    </div>
  );
}

export default LoginPageContainer;
