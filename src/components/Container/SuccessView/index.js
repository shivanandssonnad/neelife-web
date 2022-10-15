import classNames from 'classnames';
import React from 'react';
import CHCAvatar from '@components/Avatar';
import CHCButton from '../../Button';
import CHCIcon from '@components/Icon';
import styles from './styles.module.scss';

function Icon(props) {
  return (
    <CHCAvatar className={styles.avatar_container}>
      <CHCIcon width={props.width} height={props.height} name={props.name} />
    </CHCAvatar>
  );
}

function Title(props) {
  return (
    <p className={classNames(props.className, styles.title)}>
      {props.children}
    </p>
  );
}

function SubTitle(props) {
  return (
    <p className={classNames(props.className, styles.sub_title)}>
      {props.children}
    </p>
  );
}

function Button(props) {
  return (
    <CHCButton
      {...props}
      className={classNames(props.className, styles.button)}
      variant="contained">
      {props.children}
    </CHCButton>
  );
}

function CHCSuccessView(props) {
  return (
    <div
      data-testid={props['data-testid']}
      className={classNames(props.className, styles.container)}>
      {props.children}
    </div>
  );
}

CHCSuccessView.Icon = Icon;
CHCSuccessView.Title = Title;
CHCSuccessView.SubTitle = SubTitle;
CHCSuccessView.Button = Button;

export default CHCSuccessView;
