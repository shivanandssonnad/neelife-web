import React from 'react';
import Divider from '@mui/material/Divider';

import CHCDropdownMenu from '../DropdownMenu';
import CHCMenuItem from '../DropdownMenu/MenuItem';
import CHCButton from '../Button';
import CHCIconButton from '../Button/IconButton';

import styles from './styles.module.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CHCAvatar from '@components/Avatar';
import Icon from '@components/Icon';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { handleLogout } from '@redux/UserReducer/thunk';
import { ADD_CUSTOMER_LABEL, LOGOUT_LABEL } from './constants';
import { ADD_CUSTOMER } from '@app/routes';
import { Link } from 'react-router-dom';
import { trackEvent, trackPage } from '@utils/analyticsUtils';

function ProfileButton(props) {
  return (
    <CHCIconButton disableRipple {...props}>
      <CHCAvatar className={styles.avatar} />
      <ArrowDropDownIcon
        className={classNames('font-size-20', styles.dropdownIcon)}
      />
    </CHCIconButton>
  );
}

function CHCHeader(props) {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(handleLogout());
    trackEvent('Logged out');
  };
  const handleClick = () => {
    trackPage('Add new Customer');
  };
  return (
    <div data-testid="chcHeaderContainer" className={styles.headerContainer}>
      {/* CHC Logo container */}
      <div
        data-testid="chcHeaderLogoContainer"
        className={styles.logoContainer}>
        <Link to={'/'}>
          <Icon name="LiciousLogo" width={63} height={24} />
        </Link>
      </div>
      {/* CHC Actions container */}
      <div
        data-testid="chcHeaderActionContainer"
        className={styles.actionContainer}>
        {/* Add Customer */}
        <CHCButton
          data-testid="chcHeaderAddCustomerAction"
          variant="contained"
          color="secondary"
          component={Link}
          to={ADD_CUSTOMER}
          onClick={handleClick}>
          {ADD_CUSTOMER_LABEL}
        </CHCButton>
        {/* Divider */}
        <Divider
          orientation="vertical"
          className="margin-right-12 margin-left-12"
          flexItem
        />
        {/* Profile Actions */}
        <CHCDropdownMenu
          data-testid="chcHeaderProfileActions"
          buttonComponent={ProfileButton}
          position={{ horizontal: 'right', vertical: 60 }}
          id="header-profile-menu-btn">
          <CHCMenuItem
            className={classNames('font-size-16', styles.menuItem)}
            data-testid="chcHeaderLogoutAction"
            onClick={onLogout}>
            {LOGOUT_LABEL}
          </CHCMenuItem>
        </CHCDropdownMenu>
      </div>
    </div>
  );
}

export default CHCHeader;
