import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { formatPrice } from '@utils/common';
import styles from './styles.module.scss';
import { DEFAULT_CURRENCY } from '@app/constants';
import CHCTypography from './index';

function AmountSign({ showSign, value, credit, debit }) {
  return (
    <If condition={showSign && value}>
      <Choose>
        <When condition={credit}>+&nbsp;</When>
        <When condition={debit}>-&nbsp;</When>
        <Otherwise>+&nbsp;</Otherwise>
      </Choose>
    </If>
  );
}

AmountSign.propTypes = {
  showSign: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  credit: PropTypes.bool,
  debit: PropTypes.bool,
};

function CHCAmount(props) {
  const {
    value,
    currency = DEFAULT_CURRENCY,
    credit,
    debit,
    showSign,
    reverseColor,
    superscriptText,
    defaultClass = true,
  } = props;

  return (
    <CHCTypography
      data-testid={props['data-testid']}
      component={props.component}
      className={classNames(
        {
          [styles.price]: defaultClass,
          [styles.superscriptText]: superscriptText,
          [styles.credit]: reverseColor ? debit : credit,
          [styles.debit]: reverseColor ? credit : debit,
        },
        props.className,
      )}>
      <AmountSign
        showSign={showSign}
        value={value}
        credit={credit}
        debit={debit}
      />
      {currency}&nbsp;
      {formatPrice(value)}
    </CHCTypography>
  );
}

CHCAmount.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  credit: PropTypes.bool,
  debit: PropTypes.bool,
  showSign: PropTypes.bool,
  reverseColor: PropTypes.bool,
  superscriptText: PropTypes.bool,
  defaultClass: PropTypes.bool,
};

export default CHCAmount;
