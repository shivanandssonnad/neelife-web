import React from 'react';
// import Icon from '@components/Icon';

import styles from './styles.module.scss';
import CHCTypography from '@components/Typography';

function LoginHeader() {
  return (
    <div className={styles.login_header_container}>
      <CHCTypography className={styles.title}>Neelife</CHCTypography>
      {/* <Icon name="LiciousLogo" width={63} height={24} /> */}
    </div>
  );
}

export default LoginHeader;
