import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

function Spinner(props) {
  return (
    <div {...props} className={classNames(props.className, styles.loader)} />
  );
}

export default Spinner;
