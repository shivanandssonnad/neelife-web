import classNames from 'classnames';
import React from 'react';
import CHCTypography from '@components/Typography';
import CHCIcon from '@components/Icon';

import styles from './styles.module.scss';

function Title(props) {
  return (
    <CHCTypography className={classNames(props.className, styles.title)}>
      {props.children}
    </CHCTypography>
  );
}

function Icon(props) {
  const { name = 'EmptyCircle', width = 48, height = 48 } = props;
  return <CHCIcon {...props} width={width} height={height} name={name} />;
}

function Label(props) {
  return (
    <CHCTypography className={styles.label}>{props.children}</CHCTypography>
  );
}

function SubLabel(props) {
  return (
    <CHCTypography className={styles.sub_label}>{props.children}</CHCTypography>
  );
}

function MessageRow(props) {
  const { icon, label, subLabel } = props;
  return (
    <div className={classNames(props.className, styles.message_row_container)}>
      <Icon name={icon} color={props.color} />
      <div className={styles.message_content_container}>
        <Label>{label}</Label>
        <SubLabel>{subLabel}</SubLabel>
      </div>
    </div>
  );
}

function CHCMessageContainer(props) {
  return (
    <div className={classNames(props.className, styles.container)}>
      {props.children}
    </div>
  );
}

CHCMessageContainer.Title = Title;
CHCMessageContainer.Icon = Icon;
CHCMessageContainer.MessageRow = MessageRow;

export default CHCMessageContainer;
