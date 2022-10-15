import classNames from 'classnames';
import React from 'react';
import CHCTypography from './index';
import { DEFAULT_CURRENCY } from '../../App/constants';
import styles from './styles.module.scss';
import { formatPrice } from '@utils/common';

function CHCPrice(props) {
  const {
    currency = DEFAULT_CURRENCY,
    superscriptText,
    value = 0,
    discount,
    showSign,
    defaultClass = true,
  } = props;

  function renderSign() {
    return (
      <If condition={showSign && value}>
        <Choose>
          <When condition={discount}>-&nbsp;</When>
          <Otherwise>+&nbsp;</Otherwise>
        </Choose>
      </If>
    );
  }

  return (
    <CHCTypography
      data-testid={props['data-testid']}
      component={props.component}
      className={classNames(
        {
          [styles.price]: defaultClass,
          [styles.superscriptText]: superscriptText,
          [styles.credit]: props.discount,
        },
        props.className,
      )}>
      {renderSign()}
      {currency}&nbsp;
      {formatPrice(value)}
    </CHCTypography>
  );
}

export default CHCPrice;
