import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import CHCButton from './index';
import { ACTION_BUTTON_CONFIG } from './constants';
import styles from './styles.module.scss';

const ActionButton = (props) => {
  const { variant, onClick, className, children, ...rest } = props;
  const buttonConfig = useMemo(
    () => ACTION_BUTTON_CONFIG[variant] || {},
    [variant],
  );
  return (
    <CHCButton
      {...rest}
      className={classNames(
        styles.action_button,
        styles[buttonConfig.configClass],
        className,
      )}
      variant={buttonConfig.variant}
      color={buttonConfig.color}
      onClick={onClick}>
      {children}
    </CHCButton>
  );
};

ActionButton.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

function CHCButtonGroup(props) {
  return (
    <div
      data-testid={props['data-testid']}
      className={classNames(props.className, styles.button_group)}>
      {props.children}
    </div>
  );
}

CHCButtonGroup.propTypes = {
  className: PropTypes.string,
};

CHCButtonGroup.Button = ActionButton;
export default CHCButtonGroup;
