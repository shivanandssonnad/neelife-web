import { Avatar } from '@mui/material';
import React from 'react';
import Icon from '@components/Icon';

function CHCAvatar(props) {
  return (
    <Choose>
      <When condition={props.src}>
        <Avatar {...props} />
      </When>
      <When condition={props.children}>
        <Avatar {...props}>{props.children}</Avatar>
      </When>
      <Otherwise>
        <Avatar {...props}>
          <Icon name="Profile" width={48} height={48} />
        </Avatar>
      </Otherwise>
    </Choose>
  );
}

export default CHCAvatar;
